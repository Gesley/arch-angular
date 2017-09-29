class SidebarDirective {
    constructor() {
        this.restrict = 'EA';
        this.template = '<nav class="sidebar" ng-transclude></nav>';
        this.transclude = true;
        this.replace = true;
        this.controller = 'SidebarDirectiveController';
    }

    link(scope, element, attrs, ctrl) {
        let currentState = ctrl.$rootScope.$state.current.name;
        let $sidebar = element;

        let eventName = ctrl.Utils.isTouch() ? 'click' : 'mouseenter';
        let subNav = $();
        let wrapper = $('.wrapper');
        let sbclickEvent = 'click.sidebar';

        const watchExternalClicks = (newVal) => {
            // if sidebar becomes visible
            if (newVal === true) {
                ctrl.$timeout(() => { // render after current digest cycle
                    wrapper.on(sbclickEvent, (e) => {
                        // if not child of sidebar
                        if (!$(e.target).parents('.aside').length) {
                            ctrl.asideToggleOff();
                        }
                    });
                });
            }
            else {
                // dettach event
                wrapper.off(sbclickEvent);
            }
        };

        if (angular.isDefined(attrs.sidebarAnyclickClose)) {
            ctrl.$rootScope.$watch('ctrl.$rootScope.app.asideToggled', watchExternalClicks);
        }

        $sidebar.on(eventName, '.nav > li', (e) => {
            if (ctrl.Utils.isSidebarCollapsed() || ctrl.$rootScope.app.layout.asideHover) {

                subNav.trigger('mouseleave');
                subNav = ctrl.toggleMenuItem($(e.currentTarget), $sidebar);

                // Used to detect click and touch events outside the sidebar
                ctrl.sidebarAddBackdrop();
            }

        });

        scope.$on('closeSidebarMenu', () => {
            ctrl.removeFloatingNav();
        });

        $(window).on('resize', () => {
            if (!ctrl.Utils.isMobile())
                ctrl.asideToggleOff();
        });

        ctrl.$rootScope.$on('$stateChangeStart', (event, toState) => {
            currentState = toState.name;
            // Hide sidebar automatically on mobile
            ctrl.asideToggleOff();

            ctrl.$rootScope.$broadcast('closeSidebarMenu');
        });
    }
}

export default () => new SidebarDirective;