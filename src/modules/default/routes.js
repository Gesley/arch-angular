import adminLayout from '../../layout/admin.ng.html';
import mainView from './views/main.ng.html';

const defaultRouter = ($stateProvider) => {
    const routes = [
        {
            name: 'default',
            url: '',
            abstract: true,
            templateUrl: adminLayout,
            resolve: {
                loadModule: ($q, $ocLazyLoad) => $q(resolve => {
                    require.ensure([], () => {
                        const module = require('./default.module').module;
                        $ocLazyLoad.load({name: module.name});
                        resolve(module.name);
                    });
                }),
            }
        },
        {
            name: 'default.main',
            url: '/',
            controller: 'default.MainCtrl as vm',
            templateUrl: mainView,
            resolve: {
                 // onlyAuth: grant => grant.only({test: 'isAuthenticated', state: 'auth.login'})
            }
        }
    ];

    routes.forEach(route => $stateProvider.state(route));
};

defaultRouter.$inject = ['$stateProvider'];
export default defaultRouter;