import angular from 'angular';

import UtilsService from './utils.service';
import BrowserService from './browser.service';
import FullScreenDirective from './fullscreen.directive';
import TriggerResizeDirective from './trigger-resize.directive';

export const Utils = angular.module(`Utils`, [])
    .service('Utils', UtilsService)
    .service('Browser', BrowserService)
    .directive('toggleFullscreen', FullScreenDirective)
    .directive('triggerResize', TriggerResizeDirective);
