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

async function open(url) {
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
  try {
    // Check if we are in a Node.js environment
    if (typeof process !== 'undefined' && process.versions && process.versions.node) {
      console.log(`Node.js version: ${process.version}`);
      
      // Example: Output environment variables
      console.log("Environment Variables:", process.env);
      
      // Example: Simulate doing something with the current process
      console.log(`Current working directory: ${process.cwd()}`);
      
      // Exit after a certain condition (for example, after logging the version)
      setTimeout(() => {
        console.log("Exiting process...");
        process.exit(0);  // Exit the process (0 means success)
      }, 3000);
    } else {
      console.error("Node.js environment not detected.");
    }
  } catch (error) {
    console.error("Error activating Node.js:", error);
  }
}

async function utilities() {
  console.log(`Available Utilities and Functions:\n`);
  
  console.log(`1. createElement(elementType, parent, id, classAttr, className, name)`);
  console.log(`   - Creates a new HTML element of the specified type and appends it to the parent element.`);
  
  console.log(`2. setPropertyElement(id, properties)`);
  console.log(`   - Updates the properties of an existing element identified by the given id.`);
  
  console.log(`3. setTextContent(id, content)`);
  console.log(`   - Sets the text content of an element identified by the given id.`);
  
  console.log(`4. addGsapScript()`);
  console.log(`   - Adds the GSAP library script to the document.`);
  
  console.log(`5. open(url)`);
  console.log(`   - Opens the specified URL in a new browser tab.`);
  
  console.log(`6. openPopout(url, width, height)`);
  console.log(`   - Opens the specified URL in a popout window with the given width and height.`);
  
  console.log(`7. addLS(name, value)`);
  console.log(`   - Adds an item to localStorage with the given name and value.`);
  
  console.log(`8. getLS(name)`);
  console.log(`   - Retrieves an item from localStorage by its name.`);
  
  console.log(`9. getSkunkServiceAPI()`);
  console.log(`   - Logs the script tag needed to integrate the SkunkService API.`);
  
  console.log(`10. useNodeJS()`);
  console.log(`    - Placeholder function for Node.js related operations (executed server-side).`);
  
  console.log(`\nFor more details on each function, refer to the code comments and documentation.`);
}

console.log(`Made for SkunkService's API\n-\nWelcome to SkunkService's API for Website Controller`);

/*
This allows you to use the following script tag for integration:
Old Example:
<script src="https://cdn.jsdelivr.net/gh/SkunkService/skunkservice.github.io/api/api.js"></script>
Latest Example:
<script src="https://cdn.jsdelivr.net/gh/SkunkService/skunkservice.github.io@main/api/api.js"></script>
*/
