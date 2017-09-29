import blankLayout from '../../layout/blank.ng.html';
import loginView from './views/login.ng.html';
import lockView from './views/lock.ng.html';

const authRouter = ($stateProvider) => {
    const routes = [
        {
            name: 'auth',
            url: '/auth',
            abstract: true,
            templateUrl: blankLayout,
            resolve: {
                loadModule: ($q, $ocLazyLoad) => $q(resolve => {
                    require.ensure([], () => {
                        const module = require('./auth.module').module;
                        $ocLazyLoad.load({name: module.name});
                        resolve(module.name);
                    });
                })
            }
        },
        {
            name: 'auth.login',
            url: '/login',
            controller: 'auth.LoginCtrl as vm',
            templateUrl: loginView,
            resolve: {
                // login: grant => grant.only({test: 'skipIfAuthenticated', state: 'default.main'})
            }
        },
        {
            name: 'auth.lock',
            url: '/lock',
            // controller: 'auth.LoginCtrl as vm',
            templateUrl: lockView,
            resolve: {
                // login: grant => grant.only({test: 'skipIfAuthenticated', state: 'default.main'})
            }
        }
    ];

    routes.forEach(route => $stateProvider.state(route));
};

authRouter.$inject = ['$stateProvider'];
export default authRouter;