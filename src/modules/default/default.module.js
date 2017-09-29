import angular from 'angular';

import MainCtrl from './controllers/main.controller';

const module = angular.module('default', [
    require('../../directives/now/now').Now.name
]);

module.controller('default.MainCtrl', MainCtrl);

export {module};