class AntiMalware {
    constructor({ apiKey }) {
        this.apiKey = apiKey;
        this.vtApiUrl = 'https://www.virustotal.com/api/v3';
    }

    async uploadFile(file) {
        try {
            const formData = new FormData();
            formData.append('file', file);

            const response = await fetch(`${this.vtApiUrl}/files`, {
                method: 'POST',
                headers: {
                    'x-apikey': this.apiKey
                },
                body: formData
            });

            if (!response.ok) {
                throw new Error(`Error uploading file: ${response.statusText}`);
            }

            const data = await response.json();
            return data.data.id; // Return the file ID for later use
        } catch (error) {
            console.error(error);
        }
    }

    async getFileReport(fileId) {
        try {
            const response = await fetch(`${this.vtApiUrl}/analyses/${fileId}`, {
                method: 'GET',
                headers: {
                    'x-apikey': this.apiKey
                }
            });

            if (!response.ok) {
                throw new Error(`Error fetching file report: ${response.statusText}`);
            }

            const report = await response.json();
            return report;
        } catch (error) {
            console.error(error);
        }
    }

    async fileReview(file) {
        const fileId = await this.uploadFile(file);
        if (fileId) {
            console.log('File uploaded successfully. File ID:', fileId);
            console.log('Fetching the analysis report...');
            const report = await this.getFileReport(fileId);
            console.log('File analysis report:', JSON.stringify(report, null, 2));
        }
    }
}
