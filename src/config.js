import {APP_NAME, GRANT_TYPE, CLIENT_ID, CLIENT_SECRET} from '../env';


const setHtml5Mode = $locationProvider => $locationProvider.html5Mode(true).hashPrefix('*');
setHtml5Mode.$inject = ['$locationProvider'];
export {setHtml5Mode}

const redirectToHome = $urlRouterProvider => {
    $urlRouterProvider.otherwise('/');
};
redirectToHome.$inject = ['$urlRouterProvider'];
export {redirectToHome}

const restangular = (RestangularProvider, env, $qProvider) => {
    RestangularProvider.setBaseUrl(env.API_BASE_PATH);
    RestangularProvider.setDefaultRequestParams({
        "grant_type": GRANT_TYPE,
        "client_id": CLIENT_ID,
        "client_secret": CLIENT_SECRET,
        "scope": ''
    });
    $qProvider.errorOnUnhandledRejections(false);
};
restangular.$inject = ['RestangularProvider', '__env', '$qProvider'];
export {restangular};

const injectToken = ($httpProvider) => $httpProvider.interceptors.push(() => {
    return {
        'request': config => {
            const token = sessionStorage.getItem('token');
            config.headers.Authorization = sessionStorage.getItem('token') && 'Bearer ' + JSON.parse(sessionStorage.getItem('token')).access_token;
            return config;
        }
    }
});
injectToken.$inject = ['$httpProvider'];
export {injectToken};