import angular from 'angular';
import {APP_NAME} from '../../../env';

import NowDirective from './now.directive';
import NowController from './now.controller';

export const Now = angular.module(`${APP_NAME}.Now`, [])
    .directive('now', NowDirective)
    .controller('NowController', NowController);