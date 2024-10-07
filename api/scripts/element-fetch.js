// Fetch all elements
async function fetchAllElements() {
  try {
    const elements = document.querySelectorAll('*');
    return elements;
  } catch (error) {
    console.error('Error fetching all elements:', error);
  }
}

// Fetch a specific element
async function fetchElement(query) {
  try {
    const element = document.querySelector(query);
    return element;
  } catch (error) {
    console.error(`Error fetching element with query "${query}":`, error);
  }
}

// Edit an element's properties
async function editElement(query, properties) {
  try {
    const element = await fetchElement(query);
    if (element) {
      Object.keys(properties).forEach(prop => {
        element.setAttribute(prop, properties[prop]);
      });
    }
  } catch (error) {
    console.error(`Error editing element with query "${query}":`, error);
  }
}

// Get URL and browser information
async function urlBrowserInformation() {
  try {
    return {
      url: window.location.href,
      userAgent: navigator.userAgent
    };
  } catch (error) {
    console.error('Error getting URL and browser information:', error);
  }
}

// HTML Controller
export default {
  fetchAllElements,
  fetchElement,
  editElement,
  urlBrowserInformation
};
