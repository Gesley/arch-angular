class NavSearchService {

    constructor($http) {
        this.navbarFormSelector = 'form.navbar-form';
    }

    toggle() {
        let navbarForm = $(this.navbarFormSelector);
        navbarForm.addClass('open');
        let isOpen = navbarForm.hasClass('open');
        navbarForm.find('input')[isOpen ? 'focus' : 'blur']();
    }

    dismiss() {
        $(this.navbarFormSelector)
            .removeClass('open')
            .find('input[type="text"]').blur()
            .val('');
    }
}

NavSearchService.$inject = ['$http'];

export default NavSearchService;