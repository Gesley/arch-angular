import sidebarTemplate from './sidebar.ng.html';

class SidebarComponent {
    constructor() {
        this.templateUrl = sidebarTemplate;
        this.controller = 'SidebarController';
        this.controllerAs = 'vm';
    }
}

export default new SidebarComponent;