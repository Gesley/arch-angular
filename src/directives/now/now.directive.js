class NowDirective{
    constructor(){
        this.restrict = 'A';
        this.controller = 'NowController';
    }

    link(scope, element, attrs, ctrl){
        let format = attrs.format;

        ctrl.updateTime(element, format);

        let intervalPromise = ctrl.$interval(() => ctrl.updateTime(element, format), 1000);

        scope.$on('$destroy', () => {
            ctrl.$interval.cancel(intervalPromise);
        });
    }
}

export default () => new NowDirective();