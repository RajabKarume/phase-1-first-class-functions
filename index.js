function receivesAFunction(callback){
    callback(function(){
        return "call this"
    })
}


function returnsANamedFunction(){
    return function multilpy(x,y){
        return x*y; 
    };
}
const returnsAnAnonymousFunction = function(){
    return function(){
        return 'hello'
    }
}