class CookieData {
    constructor(options) {
        this.domain = options.domain || "";
        this.storageKey = `cookieData_${this.domain}`;
        this.currentDomain = window.location.hostname;

        // Automatically validate the domain on instantiation
        if (!this.isValidDomain()) {
            console.warn(`Warning: Current domain "${this.currentDomain}" does not match specified domain "${this.domain}".`);
        }
    }

    // Check if the current domain matches
    isValidDomain() {
        return this.currentDomain.includes(this.domain);
    }

    // Save data to local storage
    setData(data) {
        if (!this.isValidDomain()) {
            console.warn("Invalid domain. Data will not be set.");
            return;
        }
        const currentData = this.getData() || {};
        const newData = { ...currentData, ...data };
        localStorage.setItem(this.storageKey, JSON.stringify(newData));
    }

    // Retrieve data from local storage
    getData() {
        if (!this.isValidDomain()) {
            console.warn("Invalid domain. Data retrieval is not allowed.");
            return null;
        }
        const data = localStorage.getItem(this.storageKey);
        return data ? JSON.parse(data) : null;
    }

    // Remove specific keys from local storage
    removeData(keys) {
        if (!this.isValidDomain()) {
            console.warn("Invalid domain. Data removal is not allowed.");
            return;
        }
        const currentData = this.getData();
        if (currentData) {
            keys.forEach(key => {
                delete currentData[key];
            });
            localStorage.setItem(this.storageKey, JSON.stringify(currentData));
        }
    }

    // Clear all data related to the domain
    clearData() {
        if (!this.isValidDomain()) {
            console.warn("Invalid domain. Data clearance is not allowed.");
            return;
        }
        localStorage.removeItem(this.storageKey);
    }
}

class CookieDataJSON extends CookieData {
    // Save JSON data to local storage
    setJSONData(key, jsonData) {
        if (!this.isValidDomain()) {
            console.warn("Invalid domain. Data will not be set.");
            return;
        }
        try {
            const jsonString = JSON.stringify(jsonData);
            this.setData({ [key]: jsonString });
        } catch (error) {
            console.error("Failed to set JSON data:", error);
        }
    }

    // Retrieve JSON data from local storage
    getJSONData(key) {
        const data = this.getData();
        if (data && data[key]) {
            try {
                return JSON.parse(data[key]);
            } catch (error) {
                console.error("Failed to parse JSON data:", error);
                return null;
            }
        }
        return null;
    }
}

class CookieDataLong extends CookieData {
    // Save long text data to local storage
    setLongData(key, longText) {
        if (!this.isValidDomain()) {
            console.warn("Invalid domain. Data will not be set.");
            return;
        }
        this.setData({ [key]: longText });
    }

    // Retrieve long text data from local storage
    getLongData(key) {
        const data = this.getData();
        return data ? data[key] : null;
    }
}}


/*
This allows you to use the following script tag for integration:
Old Example:
<script src="https://cdn.jsdelivr.net/gh/SkunkService/skunkservice.github.io/api/cookie-data.js"></script>
Latest Example:
<script src="https://cdn.jsdelivr.net/gh/SkunkService/skunkservice.github.io/api/cookie-data.js"></script>
*/
