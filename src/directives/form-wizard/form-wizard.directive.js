class FormWizardDirective {
    constructor() {
        this.restrict = 'A';
        this.scope = {
            wizard: '=?bind'
        };
        this.controller.$inject = ['$parse', 'FormWizard'];
    }

    controller($parse, FormWizard) {
        this.$parse = $parse;
        this.FormWizard = FormWizard;
    }

    link(scope, element, attrs, ctrl) {
        let validate = ctrl.$parse(attrs.validateSteps)(scope),
            wiz = ctrl.FormWizard.init(attrs.steps, !!validate, element);
        scope.wizard = wiz;
    }
}

export default () => new FormWizardDirective;