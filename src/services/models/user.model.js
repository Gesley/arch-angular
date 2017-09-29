import angular from 'angular';
import {APP_NAME} from '../../../env';

class UserModel {
    constructor(env, Restangular){
        Object.assign(this, Restangular.service('user'));
    }
}

UserModel.$inject = ['__env', 'Restangular'];

export default angular.module(APP_NAME).service(UserModel.name, UserModel);