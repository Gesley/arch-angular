class SidebarDirectiveController {
    constructor($scope, $rootScope, $timeout, $window, Utils) {
        this.$scope = $scope;
        this.$rootScope = $rootScope;
        this.$timeout = $timeout;
        this.$window = $window;
        this.Utils = Utils;
    }

    asideToggleOff() {
        this.$rootScope.app.asideToggled = false;
        if (!this.$scope.$$phase) this.$scope.$apply(); // anti-pattern but sometimes necessary
    }

    sidebarAddBackdrop() {
        let $backdrop = $('<div/>', {'class': 'dropdown-backdrop'});
        $backdrop.insertAfter('.aside-inner').on('click mouseenter', () => {
            this.removeFloatingNav();
        });
    }

    toggleTouchItem($element) {
        $element
            .siblings('li')
            .removeClass('open')
            .end()
            .toggleClass('open');
    }

    toggleMenuItem($listItem, $sidebar) {

        const userBlock = $('.has-user-block').attr('aria-hidden') == 'false' && 134 || 55;

        this.removeFloatingNav();

        let ul = $listItem.children('ul');

        if (!ul.length) return $();
        if ($listItem.hasClass('open')) {
            this.toggleTouchItem($listItem);
            return $();
        }

        let $aside = $('.aside');
        let $asideInner = $('.aside-inner'); // for top offset calculation
        // float aside uses extra padding on aside
        let mar = parseInt($asideInner.css('padding-top'), 0) + parseInt($aside.css('padding-top'), 0);
        let subNav = ul.clone().appendTo($aside);

        this.toggleTouchItem($listItem);

        let itemTop = ($listItem.position().top + mar + userBlock) - $sidebar.scrollTop();
        let vwHeight = $(window).height();

        subNav
            .addClass('nav-floating')
            .css({
                position: this.$rootScope.app.layout.isFixed ? 'fixed' : 'absolute',
                top: itemTop,
                bottom: (subNav.outerHeight(true) + itemTop > vwHeight) ? 0 : 'auto'
            });

        subNav.on('mouseleave', () => {
            this.toggleTouchItem($listItem);
            subNav.remove();
        });

        return subNav;
    }

    removeFloatingNav() {
        $('.dropdown-backdrop').remove();
        $('.sidebar-subnav.nav-floating').remove();
        $('.sidebar li.open').removeClass('open');
    }
}

SidebarDirectiveController.$inject = ['$scope', '$rootScope', '$timeout', '$window', 'Utils'];

export default SidebarDirectiveController;