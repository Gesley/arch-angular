import angular from 'angular';
import {APP_NAME} from '../../../env';
import NavSearchService from './navsearch.service';

import SearchOpenController from './searchopen.controller';
import SearchOpenDirective from './searchopen.directive';

import SearchDismissController from './searchdismiss.controller';
import SearchDismissDirective from './searchdismiss.directive';

export const NavSearch = angular.module(`${APP_NAME}.NavSearch`, [])
    .service('NavSearch', NavSearchService)
    .controller('SearchOpenController', SearchOpenController)
    .directive('searchOpen', SearchOpenDirective)

    .controller('SearchDismissController', SearchDismissController)
    .directive('searchDismiss', SearchDismissDirective)
