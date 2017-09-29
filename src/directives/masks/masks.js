import angular from 'angular';
import CpfMaskDirective from './cpf-mask.directive.js';

export default angular.module('masks', [])
    .directive('cpfMask', CpfMaskDirective);