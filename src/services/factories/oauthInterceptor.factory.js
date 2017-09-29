
function OauthInterceptorFactory(){
    return {
        request: function (config) {
            return config;
        }
    }
}

OauthInterceptorFactory.$inject = [];

export default OauthInterceptorFactory;