import jQuery from 'jquery';

function Bootstrap($rootScope, OauthModel, state, $localStorage) {

    $rootScope.app = {
        name: "GEMEOS",
        description: "Gerenciador de métricas e ordens de serviço",
        year: ((new Date()).getFullYear()),
        layout: {
            isFixed: true,
            isCollapsed: false,
            isBoxed: false,
            isRTL: false,
            horizontal: false,
            isFloat: false,
            asideHover: false,
            theme: null,
            asideScrollbar: false
        },
        userBlockVisible: true,
        useFullLayout: false,
        hiddenFooter: false,
        offsidebarOpen: false,
        asideToggled: false,
        viewAnimation: 'ng-fadeInUp'
    };

    $rootScope.user = {
        name: 'Luis Fernando Meireles Arantes',
        job: 'Desenvolvedor',
        picture: require('./assets/img/user/07.jpg')
    }

    $rootScope.$state = state;

    $rootScope.$on('$stateChangeStart', (evt, to, toParams, from, fromParams) => {

    });

    $rootScope.doSearch = (e) => {
        console.log(to, toParams, from, fromParams, e)
    };

    $rootScope.doLogout = () => {
        OauthModel.logout();
        state.go('auth.login');
    };
}

Bootstrap.$inject = ['$rootScope', 'OauthModel', '$state', '$localStorage'];

export {Bootstrap};