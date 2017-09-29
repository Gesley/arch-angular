export function isActive(item) {

    if(!item) return;

    if( !item.sref || item.sref === '#') {
        var foundActive = false;
        angular.forEach(item.submenu, function(value) {
            if(isActive(value)) foundActive = true;
        });
        return foundActive;
    }
    else
        return $state.is(item.sref) || $state.includes(item.sref);
}

export function closeAllBut(index) {
    index += '';
    for(var i in collapseList) {
        if(index < 0 || index.indexOf(i) < 0)
            collapseList[i] = true;
    }
}

export function isChild($index) {
    /*jshint -W018*/
    return (typeof $index === 'string') && !($index.indexOf('-') < 0);
}