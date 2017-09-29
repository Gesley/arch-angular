class SearchDismissController {
    constructor($scope, $element, NavSearch){
        let inputSelector = '.navbar-form input[type="text"]';

        $(inputSelector)
            .on('click', (e) => { e.stopPropagation(); })
            .on('keyup', (e) => {
                if (e.keyCode === 27) // ESC
                    NavSearch.dismiss();
            });

        // click anywhere closes the search
        $(document).on('click', () => NavSearch.dismiss());
        // dismissable options
        $element
            .on('click', (e) => { e.stopPropagation(); })
            .on('click', () => NavSearch.dismiss());

    }
}

SearchDismissController.$inject = ['$scope', '$element', 'NavSearch'];

export default SearchDismissController;