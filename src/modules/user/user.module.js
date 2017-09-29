import angular from 'angular';

import AddCtrl from './controllers/add.controller';

const module = angular.module('user', [
    require('../../directives/now/now').Now.name
]);

module.controller('user.AddCtrl', AddCtrl);

export {module};