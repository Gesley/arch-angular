const lazyload = m => ['$q', '$ocLazyLoad', ($q, $ocLazyLoad) => $q(resolve => {
    require.ensure([], () => {
        const req = require('../../src/'+m);
        $ocLazyLoad.load({name: req.module.name});
        resolve(req.module);
    });
})];

export {lazyload};

const lazyview = v => ['$q', '$templateCache', ($q, $templateCache) => $q(resolve => {
    require.ensure([], () => {
        if(!$templateCache.get(v)){
            const html = require('../../src/'+v);
            $templateCache.put(v, html);
        }
        resolve($templateCache.get(v));
    });
})];

export {lazyview};