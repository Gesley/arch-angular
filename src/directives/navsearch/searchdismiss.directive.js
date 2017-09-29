class SearchDismissDirective {
    constructor() {
        this.restrict = 'A';
        this.controller = 'SearchDismissController';
    }
}

export default () => new SearchDismissDirective;