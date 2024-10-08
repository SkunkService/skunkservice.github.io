// Importing all modules
const fePromise = fetch("https://cdn.jsdelivr.net/gh/SkunkService/skunkservice.github.io/api/scripts/fetch-element.js")
  .then(response => {
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    return response.text(); // Get the script content as text
  })
  .then(scriptContent => {
    eval(scriptContent); // Execute the script content
  })
  .catch(error => {
    console.error("Fetch error:", error);
  });

const frPromise = fetch("https://cdn.jsdelivr.net/gh/SkunkService/skunkservice.github.io/api/scripts/file-review.js")
  .then(response => {
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    return response.text(); // Get the script content as text
  })
  .then(scriptContent => {
    eval(scriptContent); // Execute the script content
  })
  .catch(error => {
    console.error("Fetch error:", error);
  });
