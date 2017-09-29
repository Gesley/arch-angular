class SidebarController {
    constructor($rootScope, $scope, $state, SidebarLoader, Utils, $timeout) {

        this.collapseList = [];

        this.$rootScope = $rootScope;
        this.$scope = $scope;
        this.$state = $state;
        this.SidebarLoader = SidebarLoader;
        this.Utils = Utils;

        $rootScope.$watch('app.layout.asideHover', function (oldVal, newVal) {
            if (newVal === false && oldVal === true) {
                this.closeAllBut(-1);
            }
        });

        // SidebarLoader.getMenu(() => {
            this.menuItems = [];
        $timeout(() => this.menuItems = require('../../../sidebar-menu.json'), 300)

        // });

    }

    getMenuItemPropClasses(item) {
        return (item.heading ? 'nav-heading' : '') +
            (this.isActive(item) ? ' active' : '');
    }

    addCollapse($index, item) {
        this.collapseList[$index] = this.$rootScope.app.layout.asideHover ? true : !this.isActive(item);
    }

    isCollapse($index) {
        return (this.collapseList[$index]);
    }

    toggleCollapse($index, isParentItem) {

        // collapsed sidebar doesn't toggle drodopwn
        if (this.Utils.isSidebarCollapsed() || this.$rootScope.app.layout.asideHover) return true;

        // make sure the item index exists
        if (angular.isDefined(this.collapseList[$index])) {
            if (!this.lastEventFromChild) {
                this.collapseList[$index] = !this.collapseList[$index];
                this.closeAllBut($index);
            }
        }
        else if (isParentItem) {
            this.closeAllBut(-1);
        }

        this.lastEventFromChild = this.isChild($index);

        return true;

    }

    isActive(item) {

        if (!item) return;

        if (!item.sref || item.sref === '#') {
            let foundActive = false;
            angular.forEach(item.submenu, (value) => {
                if (this.isActive(value)) foundActive = true;
            });
            return foundActive;
        }
        else
            return this.$state.is(item.sref) || this.$state.includes(item.sref);
    }

    closeAllBut(index) {
        index += '';
        for (var i in this.collapseList) {
            if (index < 0 || index.indexOf(i) < 0)
                this.collapseList[i] = true;
        }
    }

    isChild($index) {
        /*jshint -W018*/
        return (typeof $index === 'string') && !($index.indexOf('-') < 0);
    }
}

SidebarController.$inject = ['$rootScope', '$scope', '$state', 'SidebarLoader', 'Utils', '$timeout'];

export default SidebarController;