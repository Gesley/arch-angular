class TriggerResize {
    constructor() {
        this.restrict = 'A';
        this.controller.$inject = ['$scope', '$window', '$timeout']
    }

    link(scope, element, attrs, ctrl){
        element.on('click', function(){
            ctrl.$timeout(function(){
                // all IE friendly dispatchEvent
                var evt = document.createEvent('UIEvents');
                evt.initUIEvent('resize', true, false, ctrl.$window, 0);
                ctrl.$window.dispatchEvent(evt);
                // modern dispatchEvent way
                // $window.dispatchEvent(new Event('resize'));
            });
        });
    }

    controller($scope, $window, $timeout){
        this.$window = $window;
        this.$timeout = $timeout;
    }
}


export default () => new TriggerResize;