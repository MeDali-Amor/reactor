// import React from 'react';
// import ReactDOM from 'react-dom';
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import serviceProvidersContainer from "./service-providers-container";
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

export default class Reactor {
    /* Allow the application to work offline */
    workOffline() {
        // If you want your app to work offline and load faster, you can change
        // unregister() to register() below. Note this comes with some pitfalls.
        // Learn more about service workers: https://cra.link/PWA
        serviceWorkerRegistration.register();
        return this;
    }

    /*  Register the entire application service providers to the service providers container
        @param {array} serviceProviders
    */
    registerServiceProviders(serviceProviders) {
        serviceProvidersContainer.register(serviceProviders);
    }

    /* Start the application */
    react() {}
}
