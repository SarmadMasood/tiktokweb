//export const serverURL = "http://localhost:5000/"

// client/src/constants/constants.js
let serverURL;

if (process.env.NODE_ENV === 'production') {
    // Production: Use Azure App Service URL
    serverURL = "tiktokwebapp-e6c8dvhca9f3hrfq.uksouth-01.azurewebsites.net";
} else {
    // Development: Use local server
    serverURL = "http://localhost:5000/";
}

export { serverURL };