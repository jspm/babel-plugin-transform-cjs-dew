// performance.now()
if(typeof performance === 'undefined'){
    performance = {};
}
if(!performance.now){
    var nowOffset = Date.now();
    if (performance.timing && performance.timing.navigationStart){
        nowOffset = performance.timing.navigationStart;
    }
    performance.now = function(){
        return Date.now() - nowOffset;
    };
}
