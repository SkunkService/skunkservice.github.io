// api-require.js

function isNode() {
    return typeof require !== 'undefined' && typeof module !== 'undefined' && module.exports;
}

if (isNode()) {
    console.log("Already in a Node.js environment for require().");
} else {
    async function require(path) {
        if (path.endsWith('.json')) {
            try {
                const response = await fetch(path);
                if (!response.ok) {
                    throw new Error(`Failed to load JSON from ${path}`);
                }
                const data = await response.json();
                return data;
            } catch (error) {
                console.error(error);
                throw error;
            }
        } else if (path.endsWith('.js')) {
            return new Promise((resolve, reject) => {
                const script = document.createElement('script');
                script.src = path;
                script.type = 'module';
                script.onload = () => resolve();
                script.onerror = () => reject(new Error(`Failed to load script at ${path}`));
                document.head.appendChild(script);
            });
        } else {
            throw new Error(`Unsupported file type for path: ${path}`);
        }
    }
}
