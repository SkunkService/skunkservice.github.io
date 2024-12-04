const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
const imageLibrary = document.getElementById('imageLibrary');
const colorPicker = document.getElementById('colorPicker');
const brushSizeInput = document.getElementById('brushSize');
const fileInput = document.getElementById('fileInput');
const brushOpacityInput = document.getElementById('brushOpacity');

let currentTool = 'draw';
let isDrawing = false;
let brushColor = '#000000'; // Default brush color
let brushSize = 30; // Default brush size
let brushOpacity = 1; // Default opacity (fully opaque)
let history = [];
let historyIndex = -1;

// Set the current tool
function setTool(tool) {
    currentTool = tool;
    if (tool === 'fill') {
        canvas.addEventListener('click', fillCanvas);
    } else {
        canvas.removeEventListener('click', fillCanvas);
    }
}

// Event listeners for drawing
canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mousemove', draw);

// Start drawing
function startDrawing(e) {
    if (currentTool === 'draw' || currentTool === 'eraser') {
        isDrawing = true;
        draw(e);
    }
}

// Stop drawing
function stopDrawing() {
    if (isDrawing) {
        isDrawing = false;
        ctx.beginPath();
        saveState();
    }
}

// Drawing logic
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

// Convert hex color to RGB
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

// Save drawing state for undo/redo
function saveState() {
    if (historyIndex < history.length - 1) {
        history = history.slice(0, historyIndex + 1);
    }
    const dataURL = canvas.toDataURL();
    history.push(dataURL);
    historyIndex++;
}

// Undo last action
function undo() {
    if (historyIndex > 0) {
        historyIndex--;
        loadState(history[historyIndex]);
    }
}

// Redo last undone action
function redo() {
    if (historyIndex < history.length - 1) {
        historyIndex++;
        loadState(history[historyIndex]);
    }
}

// Load a saved state onto the canvas
function loadState(state) {
    const img = new Image();
    img.onload = () => ctx.drawImage(img, 0, 0);
    img.src = state;
}

// Save drawing to local storage
function saveDrawing() {
    const dataURL = canvas.toDataURL('image/png');
    localStorage.setItem('savedDrawing', dataURL);
    alert('Drawing saved!');
}

// Load drawing from local storage
function loadDrawing() {
    const dataURL = localStorage.getItem('savedDrawing');
    if (dataURL) {
        loadState(dataURL);
    } else {
        alert('No saved drawing found.');
    }
}

// Add the current canvas to the library
function addCurrentCanvasToLibrary() {
    const dataURL = canvas.toDataURL('image/png');
    let library = JSON.parse(localStorage.getItem('imageLibrary')) || [];
    library.push(dataURL);
    localStorage.setItem('imageLibrary', JSON.stringify(library));
    displayLibrary();
}

// Display the image library
function displayLibrary() {
    imageLibrary.innerHTML = '';
    let library = JSON.parse(localStorage.getItem('imageLibrary')) || [];
    library.forEach((imgDataURL, index) => {
        const div = document.createElement('div');
        div.className = 'library-item';
        div.onclick = () => loadImageToCanvas(imgDataURL);
        div.innerHTML = `
            <img src="${imgDataURL}" />
            <button class="edit" onclick="editImage(${index}); event.stopPropagation();">Edit</button>
            <button onclick="deleteImage(${index}); event.stopPropagation();">Delete</button>
        `;
        imageLibrary.appendChild(div);
    });
}

// Load an image onto the canvas
function loadImageToCanvas(imgDataURL) {
    loadState(imgDataURL);
}

// Delete an image from the library
function deleteImage(index) {
    let library = JSON.parse(localStorage.getItem('imageLibrary')) || [];
    library.splice(index, 1);
    localStorage.setItem('imageLibrary', JSON.stringify(library));
    displayLibrary();
}

// Edit an image from the library
function editImage(index) {
    let library = JSON.parse(localStorage.getItem('imageLibrary')) || [];
    loadImageToCanvas(library[index]);
}

// Handle file uploads
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

// Event listeners for color, size, and opacity controls
colorPicker.addEventListener('input', (e) => {
    brushColor = e.target.value;
});

brushSizeInput.addEventListener('input', (e) => {
    brushSize = parseInt(e.target.value, 10);
});

brushOpacityInput.addEventListener('input', (e) => {
    brushOpacity = e.target.value / 100;
});

// Display the library on page load
document.addEventListener('DOMContentLoaded', displayLibrary);
