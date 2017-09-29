class MainCtrl {
    constructor($rootScope, env, state, OauthModel) {
        let vm = this;
        vm.oauth = OauthModel;
        vm.state = state;
    }

    doLogin(credentials) {
        let vm = this;
        vm.isLogging = true;
        vm.oauth
            .authenticate(credentials.username, credentials.password)
            .then(function () {
                vm.isLogging = false;
                vm.state.go('default.main');
            }, function (error) {
                vm.isLogging = false;
                if (error.status == -1)
                    vm.loginError = "Não foi possível acessar o serviço. Entre em contato com o administrador do sistema.";
                else if (error.status == 401 && error.data.error == 'invalid_credentials')
                    vm.loginError = "Usuário ou senha incorretos.";

            });
    }
}
MainCtrl.$inject = ['$rootScope', '__env', '$state', 'OauthModel'];

export default MainCtrl;