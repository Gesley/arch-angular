import angular from 'angular';

class FormWizardService {
    constructor() {
    }

    init(quantity, validate, element){
        this.quantity = parseInt(quantity, 10);
        this.validate = validate;
        this.element = element;

        this.createsteps(this.quantity);
        this.go(1); // always start at fist step
        return this;
    }

    go(step) {
        if (angular.isDefined(this.steps[step])) {
            this.cleanall();
            this.steps[step] = true;
        }
    }

    active(step) {
        return !!this.steps[step];
    }

    cleanall() {
        for (var i in this.steps) {
            this.steps[i] = false;
        }
    }

    createsteps(q) {
        this.steps = [];
        for (var i = 1; i <= q; i++) this.steps[i] = false;
    }
}

FormWizardService.$inject = [];

export default FormWizardService;