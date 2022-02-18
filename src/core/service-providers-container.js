// a container to store our service providers
const serviceProviders = []; // private (no export)

/* Register the given service providers 
@param {array} serviceProvidersList

*/

function register(serviceProvidersList) {
    serviceProviders = serviceProvidersList;
}

export default {
    register,
};
