class SearchOpenController {
    constructor($scope, $element, NavSearch){
        $element
            .on('click', function (e) {
                e.stopPropagation();
                e.preventDefault();
            })
            .on('click', () => NavSearch.toggle());
    }
}

SearchOpenController.$inject = ['$scope', '$element', 'NavSearch'];

export default SearchOpenController;