async function createElement(elementType, id = null, classAttr = null, className = null, name = null) {
  // Create an element of the specified type
  const element = document.createElement(elementType);

  // Optional properties: Set if provided
  if (id) element.id = id;
  if (classAttr) element.setAttribute("class", classAttr);
  if (className) element.className = className;
  if (name) element.setAttribute("name", name);

  // Return the created element
  return element;
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
  if (typeof process !== 'undefined' && process.version) {
    if (process.version < "v22.6.0") {
      console.log("Node.js Available Versions: 22.6.0 and Latest.");
      console.log("Node.js utility function is activated.");
    } else {
      console.log(`Node.js Version: ${process.version} is not Available for this Version.`);
    }
  } else {
    console.log("This function is intended for use in a Node.js environment.");
  }
}

console.log(`Made for SkunkService's API\n-\nWelcome to SkunkService's API for Website Controller`);

/*
This allows you to use the following script tag for integration:
<script src="https://cdn.jsdelivr.net/gh/SkunkService/skunkservice.github.io/api/api.js"></script>
*/
