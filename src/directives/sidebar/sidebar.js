import {APP_NAME} from '../../../env';
import angular from 'angular';

import SidebarDirective from './sidebar.directive';
import SidebarDirectiveController from './sidebar.controller';

export const Sidebar = angular.module(`${APP_NAME}.Sidebar`, [
    'Utils'
])
    .directive('sidebar', SidebarDirective)
    .controller('SidebarDirectiveController', SidebarDirectiveController);