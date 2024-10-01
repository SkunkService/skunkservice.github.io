class GSAP {
    constructor() {
        // Check if GSAP is already loaded
        if (typeof window.TweenMax === 'undefined' && typeof window.TweenLite === 'undefined') {
            this.loadGsapScript();
        } else {
            console.log('GSAP is already loaded.');
        }
    }

    loadGsapScript() {
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/gsap.min.js'; // You can change the version as needed
        script.onload = () => {
            console.log('GSAP script loaded successfully.');
        };
        script.onerror = () => {
            console.error('Failed to load GSAP script.');
        };
        document.head.appendChild(script);
    }

    tween(element, time, tweenData) {
        if (typeof window.gsap !== 'undefined') {
            gsap.to(element, time, tweenData);
        } else {
            console.error('GSAP is not loaded. Cannot perform tween.');
        }
    }

    moveElement(element, time, x, y) {
        if (typeof window.gsap !== 'undefined') {
            gsap.to(element, {
                duration: time,
                x: x,
                y: y
            });
        } else {
            console.error('GSAP is not loaded. Cannot move element.');
        }
    }
}

class AnimationImage {
    constructor(id, keyFrames) {
        this.ID = id; // Unique ID for the animation element
        this.id = id; // Unique ID for the animation element
        this.KEY_FRAMES = keyFrames; // Array of key frames with time and src
        this.currentFrame = 0; // Index of the current frame
        this.isPlaying = false; // Track if the animation is playing
        this.intervalId = null; // Store the interval ID for animation playback
    }

    // Method to start the animation
    Play() {
        if (!this.isPlaying) {
            this.isPlaying = true;
            this.currentFrame = 0; // Reset to the first frame
            this.animate(); // Start the animation loop
        }
    }

    // Method to stop the animation
    Stop() {
        this.isPlaying = false;
        clearInterval(this.intervalId);
        this.currentFrame = 0; // Reset to the first frame
        this.updateImage(); // Update image to the first frame
    }

    // Method to pause the animation
    Pause() {
        this.isPlaying = false;
        clearInterval(this.intervalId);
    }

    // Method to animate the frames
    animate() {
        const frameDuration = 1000; // Duration for each frame in milliseconds
        this.intervalId = setInterval(() => {
            if (this.currentFrame < this.KEY_FRAMES.length) {
                this.updateImage();
                this.currentFrame++;
            } else {
                this.Stop(); // Stop when all frames have been displayed
            }
        }, frameDuration);
    }

    // Method to update the displayed image
    updateImage() {
        const frame = this.KEY_FRAMES[this.currentFrame];
        if (frame) {
            const imageElement = document.getElementById(this.id);
            if (imageElement) {
                imageElement.src = frame.src; // Update the image source
            }
        }
    }
}

async function createElement(elementType, parent, id = null, classAttr = null, className = null, name = null) {
  // Create an element of the specified type
  const element = document.createElement(elementType);

  // Optional properties: Set if provided
  if (id) element.id = id;
  if (classAttr) element.setAttribute("class", classAttr);
  if (className) element.className = className;
  if (name) element.setAttribute("name", name);

  // Append to parent
  if (parent) {
    parent.appendChild(element);
  } else {
    console.error("[REQUIRED]: Parent element is required.");
  }

  // Return the created element
  return element;
}

async function setPropertyElement(id, properties) {
  // Retrieve the element by id
  const element = document.getElementById(id);
  
  if (element) {
    // Set properties on the element
    for (const [key, value] of Object.entries(properties)) {
      if (key === 'id') {
        element.id = value;
      } else if (key === 'class') {
        element.setAttribute('class', value);
      } else if (key === 'classname') {
        element.className = value;
      } else if (key === 'name') {
        element.setAttribute('name', value);
      } else {
        // Handle any additional properties if needed
        element.setAttribute(key, value);
      }
    }
    
    console.log(`[Element]: Properties updated for element with id '${id}'.`);
  } else {
    console.error(`[REQUIRED]: Element with id '${id}' not found.`);
  }
}

async function setTextContent(id, content) {
  // Retrieve the element by id
  const element = document.getElementById(id);
  
  if (element) {
    // Set the text content
    element.textContent = content;
    console.log(`[Element]: Text content set for element with id '${id}'.`);
  } else {
    console.error(`[REQUIRED]: Element with id '${id}' not found.`);
  }
}

async function addGsapScript() {
  const script = document.createElement("script");
  script.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js"; // Link to the GSAP CDN
  script.async = true;
  document.body.appendChild(script);
  console.log("GSAP Script Added.");
}

async function openWeb(url) {
  if (url) {
    window.open(url, "_blank");
    console.log("[API]: Website Successfully Opened.");
  } else {
    console.log("[REQUIRED]: URL is required.");
  }
  console.log("[API]: Opening Website...");
}

async function openPopout(url, width = 600, height = 400) {
  if (url) {
    const left = (window.screen.width - width) / 2;
    const top = (window.screen.height - height) / 2;

    window.open(
      url,
      "_blank",
      `width=${width},height=${height},top=${top},left=${left}`
    );
    console.log("[API]: Popout Window Successfully Opened.");
  } else {
    console.log("[REQUIRED]: URL is required.");
  }
}

async function addLS(name, value) {
  if (name && value !== undefined) {
    localStorage.setItem(name, JSON.stringify(value));
    console.log(`[LocalStorage]: Item '${name}' added.`);
  } else {
    console.log("[REQUIRED]: Both name and value are required.");
  }
}

async function getLS(name) {
  if (name) {
    const value = localStorage.getItem(name);
    if (value !== null) {
      console.log(`[LocalStorage]: Item '${name}' retrieved.`);
      return JSON.parse(value);
    } else {
      console.log(`[LocalStorage]: Item '${name}' not found.`);
      return null;
    }
  } else {
    console.log("[REQUIRED]: Name is required.");
    return null;
  }
}

async function getSkunkServiceAPI() {
  console.log(`Here:\n<script src="https://cdn.jsdelivr.net/gh/SkunkService/skunkservice.github.io/api/api.js"></script>`);
}

async function useNodeJS() {
  if (typeof process !== 'undefined' && process.version) {
    const currentVersion = process.version.replace('v', '').split('.').map(Number); // Split version into [major, minor, patch]
    const requiredVersion = [10, 0, 0];

    // Compare versions
    if (
      currentVersion[0] > requiredVersion[0] || 
      (currentVersion[0] === requiredVersion[0] && currentVersion[1] >= requiredVersion[1])
    ) {
      console.log(`Node.js Version: ${process.version} is Available.`);
      console.log("Node.js utility function is activated.");
    } else {
      console.log(`Node.js Version: ${process.version} does not meet the minimum requirement (v10.0.0 or Latest Version).`);
    }
  } else {
    console.log("This function is intended for use in a Node.js environment.");
  }
}

// Moves an element by a specified number of pixels in the x and y directions
function moveElement(id, x, y) {
  const element = document.getElementById(id);

  if (element) {
    // Set position style to relative if it's not already set
    if (window.getComputedStyle(element).position === 'static') {
      element.style.position = 'relative';
    }
    
    element.style.left = `${x}px`;
    element.style.top = `${y}px`;

    console.log(`[Element]: Moved element with id '${id}' to (${x}, ${y}).`);
  } else {
    console.error(`[REQUIRED]: Element with id '${id}' not found.`);
  }
}

// Moves an element with a tweening effect using GSAP
function moveElementWithTween(idOrClass, x, y, duration = 1, easingStyle = 'power1.inOut') {
  // Check if GSAP is loaded
  if (typeof gsap !== 'undefined') {
    const element = document.getElementById(idOrClass) || document.querySelector(idOrClass);

    if (element) {
      gsap.to(element, {
        x: x,
        y: y,
        duration: duration,
        ease: easingStyle
      });

      console.log(`[Element]: Tween animation started for element with id or class '${idOrClass}' to (${x}, ${y}) over ${duration} seconds.`);
    } else {
      console.error(`[REQUIRED]: Element with id or class '${idOrClass}' not found.`);
    }
  } else {
    console.error("[ERROR]: GSAP library is not loaded.");
  }
}

async function fetchElement(selector) {
  // Retrieve the element using querySelector (for id, class, tag, etc.)
  const element = document.querySelector(selector);
  
  if (element) {
    console.log(`[Element]: Element matching '${selector}' found.`);
    return element;
  } else {
    console.error(`[REQUIRED]: Element matching '${selector}' not found.`);
    return null;
  }
}

async function summonConsoleWithHTML() {
  // Create a div element for the console display area
  const consoleDiv = document.createElement('div');

  // Style the div to look like a console
  consoleDiv.style.position = 'fixed';
  consoleDiv.style.bottom = '40px';
  consoleDiv.style.left = '0';
  consoleDiv.style.width = '100%';
  consoleDiv.style.height = '200px';
  consoleDiv.style.backgroundColor = '#000';
  consoleDiv.style.color = '#0f0';
  consoleDiv.style.padding = '10px';
  consoleDiv.style.overflowY = 'scroll';
  consoleDiv.style.fontFamily = 'monospace';
  consoleDiv.style.zIndex = '1000';
  consoleDiv.style.cursor = 'move'; // Indicate it's draggable

  // Create an input element for user commands, styled like a console prompt
  const consoleInput = document.createElement('input');
  consoleInput.type = 'text';
  consoleInput.placeholder = '>';
  consoleInput.style.position = 'fixed';
  consoleInput.style.bottom = '0';
  consoleInput.style.left = '0';
  consoleInput.style.width = '100%';
  consoleInput.style.padding = '10px';
  consoleInput.style.backgroundColor = '#111';
  consoleInput.style.color = '#0f0';
  consoleInput.style.border = 'none';
  consoleInput.style.fontFamily = 'monospace';
  consoleInput.style.fontSize = '14px';
  consoleInput.style.zIndex = '1001';

  // Add the console div and input to the body
  document.body.appendChild(consoleDiv);
  document.body.appendChild(consoleInput);

  // Make the consoleDiv draggable
  let isDragging = false;
  let offsetX, offsetY;

  consoleDiv.addEventListener('mousedown', function(e) {
    isDragging = true;
    offsetX = e.clientX - consoleDiv.offsetLeft;
    offsetY = e.clientY - consoleDiv.offsetTop;
    consoleDiv.style.cursor = 'grabbing'; // Change cursor on drag
  });

  document.addEventListener('mousemove', function(e) {
    if (isDragging) {
      consoleDiv.style.left = `${e.clientX - offsetX}px`;
      consoleDiv.style.top = `${e.clientY - offsetY}px`;
      consoleDiv.style.bottom = 'unset'; // Disable bottom positioning to allow dragging
    }
  });

  document.addEventListener('mouseup', function() {
    isDragging = false;
    consoleDiv.style.cursor = 'move'; // Revert cursor when not dragging
  });

  // Function to log messages to the custom console
  window.customConsoleLog = function(message) {
    const p = document.createElement('p');
    p.innerText = message;
    consoleDiv.appendChild(p);
    consoleDiv.scrollTop = consoleDiv.scrollHeight; // Auto-scroll to the bottom
  };

  // Event listener to execute commands when the user presses Enter
  consoleInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      const command = consoleInput.value.trim();
      if (command) {
        customConsoleLog(`> ${command}`);  // Log the command
        executeCommand(command);  // Execute the command
        consoleInput.value = '';  // Clear the input field
      }
    }
  });

  // Function to execute user commands
  function executeCommand(command) {
    try {
      // Evaluate the command like in a devtools console
      const result = eval(command);
      customConsoleLog(result !== undefined ? result : 'undefined');
    } catch (error) {
      customConsoleLog(`Error: ${error.message}`);
    }
  }

  // Initial message
  customConsoleLog("Welcome to SkunkService's Console\nYou can type with the Commands.");
}

// Function to send feedback with a message to a Discord webhook
async function feedback(message) {
  const url = "https://discord.com/api/webhooks/1251445860252913675/AhDR5MEFVKeCwxKWCH3EDQpOK4IKgR6B2lMY7FCSHZWNmoAiOCHPLvTw9UMw6ymPx1zD";
  await sendDiscordWebhook(url, { content: message });
}

// Function to handle sending data to a Discord webhook
async function discordWebhook(url, data) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  if (!response.ok) {
    throw new Error(`Error sending webhook: ${response.statusText}`);
  }
}

// Function to send a message to a Discord webhook without a server
async function sendDiscordWebhook(url, data) {
  await discordWebhook(url, data);
}

async function utilities() {
  console.log(`Available Utilities and Functions:\n`);
  
  console.log(`1. createElement(elementType, parent, options)`);
  console.log(`   - Creates a new HTML element of the specified type and appends it to the parent element.`);
  console.log(`   - Options include 'id', 'classAttr', 'className', 'name'.`);
  
  console.log(`2. setPropertyElement(id, properties)`);
  console.log(`   - Updates the properties of an existing element identified by the given id.`);
  console.log(`   - Properties can include 'id', 'class', 'classname', 'name', and any additional attributes.`);
  
  console.log(`3. setTextContent(id, content)`);
  console.log(`   - Sets the text content of an element identified by the given id.`);
  
  console.log(`4. addGsapScript()`);
  console.log(`   - Adds the GSAP library script to the document.`);
  
  console.log(`5. openWindow(url, options)`);
  console.log(`   - Opens the specified URL in a new browser tab or a popout window.`);
  console.log(`   - Options include 'width', 'height', and 'popout' (boolean).`);
  
  console.log(`6. manageLS(name, value)`);
  console.log(`   - Manages localStorage items.`);
  console.log(`   - If 'value' is provided, adds or updates the item in localStorage.`);
  console.log(`   - If 'value' is null, retrieves the item from localStorage.`);
  
  console.log(`7. getSkunkServiceAPI()`);
  console.log(`   - Logs the script tag needed to integrate the SkunkService API.`);
  
  console.log(`8. useNodeJS()`);
  console.log(`   - Placeholder function for Node.js related operations (executed server-side).`);
  
  console.log(`9. moveElement(id, x, y)`);
  console.log(`   - Moves an element by a specified number of pixels in the x and y directions.`);
  
  console.log(`10. moveElementWithTween(idOrClass, x, y, duration, easingStyle)`);
  console.log(`    - Moves an element with a tweening effect using GSAP.`);
  console.log(`    - Options include 'duration' and 'easingStyle'.`);
  
  console.log(`11. fetchElement(selector)`);
  console.log(`    - Retrieves an element using querySelector (for id, class, tag, etc.).`);
  
  console.log(`12. summonConsoleWithHTML()`);
  console.log(`    - Creates a custom console on the webpage for logging and command execution.`);
  
  console.log(`13. feedback(message)`);
  console.log(`    - Sends feedback messages to a Discord webhook.`);
  
  console.log(`14. discordWebhook(url, data)`);
  console.log(`    - Sends data to a Discord webhook.`);

  // Classes Overview
  console.log(`15. Classes Overview:\n`);
  
  console.log(`   a. class gsap`);
  console.log(`      - Constructor: Checks if GSAP is loaded, if not, loads the GSAP script.`);
  console.log(`      - Method: tween(element, time, tweenData) - Tween an element.`);
  console.log(`      - Method: moveElement(element, time, x, y) - Move an element using GSAP.`);
  
  console.log(`   b. class AnimationImage`);
  console.log(`      - Constructor: Initializes the animation with ID and key frames.`);
  console.log(`      - Method: Play() - Starts the animation.`);
  console.log(`      - Method: Stop() - Stops the animation and resets.`);
  console.log(`      - Method: Pause() - Pauses the animation.`);
  console.log(`      - Method: animate() - Handles frame updates for the animation.`);
  console.log(`      - Method: updateImage() - Updates the image source to the current frame.`);
  
  console.log(`\nEnd of Available Utilities and Functions.`);
  console.log("SkunkService API v1.2");
}

console.log(`Made for SkunkService's API\n\nWelcome to SkunkService's API for Website Controller`);

/*
This allows you to use the following script tag for integration:
Old Example:
<script src="https://cdn.jsdelivr.net/gh/SkunkService/skunkservice.github.io/api/api.js"></script>
Latest Example:
<script src="https://cdn.jsdelivr.net/gh/SkunkService/skunkservice.github.io@main/api/api.js"></script>
*/
