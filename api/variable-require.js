async function req(pathOrUrl) {
    // Fetch the resource from the given URL or path
    const response = await fetch(pathOrUrl);

    // Check if the response is OK (status in the range 200-299)
    if (!response.ok) {
        throw new Error(`Failed to fetch resource: ${response.status} ${response.statusText}`);
    }

    // Get the content type from the response headers
    const contentType = response.headers.get("Content-Type");

    // Check if the resource is JSON or JavaScript
    if (contentType.includes("application/json")) {
        // If it's JSON, parse and return it
        const jsonData = await response.json();
        return jsonData;
    } else if (contentType.includes("application/javascript") || contentType.includes("text/javascript")) {
        // If it's a JavaScript file, evaluate it as a module
        const scriptText = await response.text();
        const blob = new Blob([scriptText], { type: 'application/javascript' });
        const moduleUrl = URL.createObjectURL(blob);
        const module = await import(moduleUrl);
        URL.revokeObjectURL(moduleUrl);
        return module;
    } else {
        throw new Error("Unsupported content type. Please provide a JSON or JavaScript file.");
    }
}
