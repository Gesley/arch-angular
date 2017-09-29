import 'jquery.browser';

class BrowserService{
    constructor(){
        return window.jQBrowser;
    }
}

BrowserService.$inject = [];

export default BrowserService;