const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
const imageLibrary = document.getElementById('imageLibrary');
const colorPicker = document.getElementById('colorPicker');
const brushSizeInput = document.getElementById('brushSize');
const fileInput = document.getElementById('fileInput');
const brushOpacityInput = document.getElementById('brushOpacity');
const settingsToggleBtn = document.getElementById('settingsToggle');

let currentTool = 'draw';
let isDrawing = false;
let brushColor = '#000000';
let brushSize = 30;
let brushOpacity = 1;
let history = [];
let historyIndex = -1;
let isSettingsVisible = false;

let db;

window.onload = () => {
    const request = indexedDB.open('CanvasDrawingApp', 1);

    request.onerror = () => {
        console.error('IndexedDB failed to open');
    };

    request.onsuccess = () => {
        db = request.result;
        displayLibrary();
    };

    request.onupgradeneeded = (e) => {
        db = e.target.result;
        if (!db.objectStoreNames.contains('imageLibrary')) {
            db.createObjectStore('imageLibrary', { keyPath: 'id', autoIncrement: true });
        }
        if (!db.objectStoreNames.contains('savedDrawing')) {
            db.createObjectStore('savedDrawing', { keyPath: 'name' });
        }
    };
};

function setTool(tool) {
    currentTool = tool;
    if (tool === 'fill') {
        canvas.addEventListener('click', fillCanvas);
    } else {
        canvas.removeEventListener('click', fillCanvas);
    }
}

canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mousemove', draw);

function startDrawing(e) {
    if (currentTool === 'draw' || currentTool === 'eraser') {
        isDrawing = true;
        draw(e);
    }
}

function stopDrawing() {
    if (isDrawing) {
        isDrawing = false;
        ctx.beginPath();
        saveState();
    }
}

function draw(e) {
    if (!isDrawing) return;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ctx.beginPath();
    ctx.arc(x, y, brushSize / 2, 0, 2 * Math.PI);
    ctx.fillStyle = currentTool === 'eraser' ? 'white' : `rgba(${hexToRgb(brushColor)}, ${brushOpacity})`;
    ctx.fill();
    ctx.closePath();
}

function hexToRgb(hex) {
    let r = 0, g = 0, b = 0;
    if (hex.length === 4) {
        r = parseInt(hex[1] + hex[1], 16);
        g = parseInt(hex[2] + hex[2], 16);
        b = parseInt(hex[3] + hex[3], 16);
    } else if (hex.length === 7) {
        r = parseInt(hex[1] + hex[2], 16);
        g = parseInt(hex[3] + hex[4], 16);
        b = parseInt(hex[5] + hex[6], 16);
    }
    return `${r}, ${g}, ${b}`;
}

function saveState() {
    if (historyIndex < history.length - 1) {
        history = history.slice(0, historyIndex + 1);
    }
    const dataURL = canvas.toDataURL();
    history.push(dataURL);
    historyIndex++;
}

function undo() {
    if (historyIndex > 0) {
        historyIndex--;
        loadState(history[historyIndex]);
    }
}

function redo() {
    if (historyIndex < history.length - 1) {
        historyIndex++;
        loadState(history[historyIndex]);
    }
}

function loadState(state) {
    const img = new Image();
    img.onload = () => ctx.drawImage(img, 0, 0);
    img.src = state;
}

function saveDrawing() {
    const dataURL = canvas.toDataURL('image/png');
    const transaction = db.transaction(['savedDrawing'], 'readwrite');
    const store = transaction.objectStore('savedDrawing');
    store.put({ name: 'mainDrawing', data: dataURL });
    transaction.oncomplete = () => alert('Drawing saved!');
    transaction.onerror = () => alert('Failed to save drawing.');
}

function loadDrawing() {
    const transaction = db.transaction(['savedDrawing'], 'readonly');
    const store = transaction.objectStore('savedDrawing');
    const request = store.get('mainDrawing');

    request.onsuccess = () => {
        if (request.result) {
            loadState(request.result.data);
        } else {
            alert('No saved drawing found.');
        }
    };

    request.onerror = () => alert('Failed to load drawing.');
}

function addCurrentCanvasToLibrary() {
    const dataURL = canvas.toDataURL('image/png');
    const transaction = db.transaction(['imageLibrary'], 'readwrite');
    const store = transaction.objectStore('imageLibrary');
    store.add({ data: dataURL });
    transaction.oncomplete = displayLibrary;
}

function displayLibrary() {
    imageLibrary.innerHTML = '';
    const transaction = db.transaction(['imageLibrary'], 'readonly');
    const store = transaction.objectStore('imageLibrary');
    const request = store.openCursor();

    request.onsuccess = (e) => {
        const cursor = e.target.result;
        if (cursor) {
            const div = document.createElement('div');
            div.className = 'library-item';
            div.onclick = () => loadImageToCanvas(cursor.value.data);
            div.innerHTML = `
                <img src="${cursor.value.data}" />
                <button class="edit" onclick="editImage(${cursor.key}); event.stopPropagation();">Edit</button>
                <button onclick="deleteImage(${cursor.key}); event.stopPropagation();">Delete</button>
            `;
            imageLibrary.appendChild(div);
            cursor.continue();
        }
    };
}

function loadImageToCanvas(imgDataURL) {
    loadState(imgDataURL);
}

function deleteImage(id) {
    const transaction = db.transaction(['imageLibrary'], 'readwrite');
    const store = transaction.objectStore('imageLibrary');
    store.delete(id);
    transaction.oncomplete = displayLibrary;
}

function editImage(id) {
    const transaction = db.transaction(['imageLibrary'], 'readonly');
    const store = transaction.objectStore('imageLibrary');
    const request = store.get(id);

    request.onsuccess = () => {
        if (request.result) {
            loadImageToCanvas(request.result.data);
        }
    };
}

fileInput.addEventListener('change', () => {
    const file = fileInput.files[0];
    if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (event) => {
            const img = new Image();
            img.onload = () => {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                saveState();
            };
            img.src = event.target.result;
        };
        reader.readAsDataURL(file);
    } else {
        alert('Please select a valid image file.');
    }
});

colorPicker.addEventListener('input', (e) => {
    brushColor = e.target.value;
});

brushSizeInput.addEventListener('input', (e) => {
    brushSize = parseInt(e.target.value, 10);
});

brushOpacityInput.addEventListener('input', (e) => {
    brushOpacity = e.target.value / 100;
});

document.addEventListener('DOMContentLoaded', () => {
    if (db) displayLibrary();
});

function toggleSettings() {
    const settingsBox = document.getElementById('settingsBox');
    isSettingsVisible = !isSettingsVisible;
    settingsBox.style.display = isSettingsVisible ? 'block' : 'none';
}

function applySettings() {
    const autoRecovery = document.getElementById('autoRecovery').checked;
    const recoveryMinutes = document.getElementById('recoveryMinutes').value;
    const theme = document.getElementById('themeSelect').value;

    console.log(`Auto Recovery: ${autoRecovery}, Recovery Minutes: ${recoveryMinutes}, Theme: ${theme}`);
    toggleSettings();
}
