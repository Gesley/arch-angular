import angular from 'angular';

import LoginCtrl from './controllers/login.controller';

import OauthModel from '../../services/models/oauth.model';

const module = angular.module('auth', [
]);

module.service('OauthModel', OauthModel);
module.controller('auth.LoginCtrl', LoginCtrl);

export {module};