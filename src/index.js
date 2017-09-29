import angular from 'angular';
import ngRoute from 'angular-route';
import ngAnimate from 'angular-animate';
import ngSanitize from 'angular-sanitize';
import ngMessages from 'angular-messages';
import uiRouter from 'angular-ui-router';
import uiRouterGrant from '../includes/lib/grant';
import oclazyload from 'oclazyload';
import restangular from 'restangular';
import ngStorage from 'ngstorage';
import uiBootstrap from 'angular-ui-bootstrap';

import {NavSearch} from './directives/navsearch/navsearch';
import {Utils} from './directives/utils/utils';
import {SidebarComponent} from './components/sidebar/sidebar';
import {Sidebar} from './directives/sidebar/sidebar';

import Masks from './directives/masks/masks';

import {APP_NAME} from '../env';
import "./app.scss";

const app = angular.module(APP_NAME, [
    ngRoute,
    ngAnimate,
    ngSanitize,
    ngMessages,
    uiRouter,
    uiRouterGrant,
    oclazyload,
    restangular,
    uiBootstrap,
    ngStorage.name,
    NavSearch.name,
    Utils.name,
    SidebarComponent.name,
    Sidebar.name,
    Masks.name
]);

import OauthModel from './services/models/oauth.model';
app.service('OauthModel', OauthModel);

import OauthInterceptorFactory from './services/factories/oauthInterceptor.factory';
app.factory('OauthInterceptor', OauthInterceptorFactory);

import {
    setHtml5Mode,
    redirectToHome,
    restangular as restangularConfig,
    injectToken
} from './config';

app.config(setHtml5Mode);
app.config(redirectToHome);
app.config(restangularConfig);
app.config(injectToken);

import {setEnv} from '../includes/helpers/env';
app.constant('__env', setEnv());

import {grants} from './grant.rules';
app.run(grants);

import routes from './routes';
routes.forEach(route => app.config(route));

import {Bootstrap} from './bootstrap';

app.run(Bootstrap);

angular.bootstrap(document, [APP_NAME], {strictDi: true});