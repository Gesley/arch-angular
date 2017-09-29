import screenfull from 'screenfull';

class FullscreenDirective {
    constructor() {
        this.restrict = 'A';
        this.controller.$inject = ['Browser'];
    }

    controller(Browser){
        this.Browser = Browser;
    }

    link(scope, element, attrs, ctrl){
        if( ctrl.Browser.msie ) {
            element.addClass('hide');
        }
        else {
            element.on('click', function (e) {
                e.preventDefault();

                if (screenfull.enabled) {

                    screenfull.toggle();

                    // Switch icon indicator
                    if(screenfull.isFullscreen)
                        $(this).children('em').removeClass('fa-expand').addClass('fa-compress');
                    else
                        $(this).children('em').removeClass('fa-compress').addClass('fa-expand');

                } else {
                    $.error('Fullscreen not enabled');
                }

            });
        }
    }
}

export default () => new FullscreenDirective;