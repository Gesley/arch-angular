import {APP_MEDIAQUERY} from '../../../env';
import angular from 'angular';

class Utils {
    constructor($window) {
        this.$html = angular.element('html');
        this.$win = angular.element($window);
        this.$body = angular.element('body');

        this.langdirection = this.$html.attr('dir') === 'rtl' ? 'right' : 'left';
        /*this.support = {
            transition: (function () {
                let transitionEnd = (function () {

                    let element = document.body || document.documentElement,
                        transEndEventNames = {
                            WebkitTransition: 'webkitTransitionEnd',
                            MozTransition: 'transitionend',
                            OTransition: 'oTransitionEnd otransitionend',
                            transition: 'transitionend'
                        }, name;

                    for (name in transEndEventNames) {
                        if (element.style[name] !== undefined) return transEndEventNames[name];
                    }
                }());

                return transitionEnd && {end: transitionEnd};
            })(),
            animation: (function () {

                var animationEnd = (function () {

                    var element = document.body || document.documentElement,
                        animEndEventNames = {
                            WebkitAnimation: 'webkitAnimationEnd',
                            MozAnimation: 'animationend',
                            OAnimation: 'oAnimationEnd oanimationend',
                            animation: 'animationend'
                        }, name;

                    for (name in animEndEventNames) {
                        if (element.style[name] !== undefined) return animEndEventNames[name];
                    }
                }());

                return animationEnd && {end: animationEnd};
            })(),
            requestAnimationFrame: window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            function (callback) {
                window.setTimeout(callback, 1000 / 60);
            },
            /!*jshint -W069*!/
            touch: (
                ('ontouchstart' in window && navigator.userAgent.toLowerCase().match(/mobile|tablet/)) ||
                (window.DocumentTouch && document instanceof window.DocumentTouch) ||
                (window.navigator['msPointerEnabled'] && window.navigator['msMaxTouchPoints'] > 0) || //IE 10
                (window.navigator['pointerEnabled'] && window.navigator['maxTouchPoints'] > 0) || //IE >=11
                false
            ),
            mutationobserver: (window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver || null)
        };*/

    }

    isInView(element, options) {
        /*jshint -W106*/
        let $element = $(element);

        if (!$element.is(':visible')) {
            return false;
        }


        let window_left = this.$win.scrollLeft(),
            window_top = this.$win.scrollTop(),
            offset = $element.offset(),
            left = offset.left,
            top = offset.top;

        options = $.extend({topoffset: 0, leftoffset: 0}, options);

        if (top + $element.height() >= window_top && top - options.topoffset <= window_top + this.$win.height() &&
            left + $element.width() >= window_left && left - options.leftoffset <= window_left + this.$win.width()) {
            return true;
        } else {
            return false;
        }
    }

    isTouch() {
        return this.$html.hasClass('touch');
    }

    isSidebarCollapsed() {
        return this.$body.hasClass('aside-collapsed');
    }

    isSidebarToggled() {
        return this.$body.hasClass('aside-toggled');
    }

    isMobile() {
        return this.$win.width() < APP_MEDIAQUERY.tablet;
    }

}

Utils.$inject = ['$window'];

export default Utils;
