import {APP_NAME, GRANT_TYPE, CLIENT_ID, CLIENT_SECRET} from '../../../env';

class OauthModel {
    constructor(env, Restangular, session) {
        this.session = session;
        Object.assign(this, Restangular.service('oauth'));
    }

    authenticate(username, password) {
        let vm = this;
        const token = this.one('token').post('', {
            "grant_type": GRANT_TYPE,
            "client_id": CLIENT_ID,
            "client_secret": CLIENT_SECRET,
            "username": username,
            "password": password,
            "scope": ''
        });
        token.then(function (res) {
            vm.session.token = JSON.stringify(res);
        }, function (error) {
            /*TODO: Catch error login*/
        });

        return token;
    }

    logout() {
        delete this.session.token;
    }
}

OauthModel.$inject = ['__env', 'Restangular', '$sessionStorage'];

export default OauthModel;