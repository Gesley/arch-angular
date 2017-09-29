import angular from 'angular';
import {APP_NAME} from '../../../env';

import SidebarComp from './sidebar.component';
import SidebarController from './sidebar.controller';
import SidebarLoaderService from './sidebarloader.service';

export const SidebarComponent = angular.module(`${APP_NAME}.SidebarComponent`, [
    'Utils'
])
    .service('SidebarLoader', SidebarLoaderService)
    .controller('SidebarController', SidebarController)
    .component('sidebarMenu', SidebarComp);