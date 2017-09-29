
class SearchOpenDirective{
    constructor(){
        this.restrict = 'A';
        this.controller = 'SearchOpenController';
    }
}

export default () => new SearchOpenDirective();