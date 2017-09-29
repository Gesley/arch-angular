import adminLayout from '../../layout/admin.ng.html';
import mainView from './views/main.ng.html';

const userRouter = ($stateProvider) => {
    const routes = [
        {
            name: 'user',
            url: '/user',
            abstract: true,
            templateUrl: adminLayout,
            resolve: {
                loadModule: ($q, $ocLazyLoad) => $q(resolve => {
                    require.ensure([], () => {
                        const module = require('./user.module').module;
                        $ocLazyLoad.load({name: module.name});
                        resolve(module.name);
                    });
                }),
            }
        },
        {
            name: 'user.add',
            url: '/add',
            controller: 'user.AddCtrl as vm',
            templateUrl: mainView,
            resolve: {
                 // onlyAuth: grant => grant.only({test: 'isAuthenticated', state: 'auth.login'})
            }
        }
    ];

    routes.forEach(route => $stateProvider.state(route));
};

userRouter.$inject = ['$stateProvider'];
export default userRouter;