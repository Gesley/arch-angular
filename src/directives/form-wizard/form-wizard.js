import angular from 'angular';
import {APP_NAME} from '../../../env';

import FormWizardService from './form-wizard.service';
import FormWizardDirective from './form-wizard.directive';

export const FormWizard = angular.module(`${APP_NAME}.FormWizard`, [])
    .service('FormWizard', FormWizardService)
    .directive('formWizard', FormWizardDirective);