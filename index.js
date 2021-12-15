function receivesAFunction (callBackFunction) {
    callBackFunction();
}


 function returnsANamedFunction () {
     return function aNamedFunction () {};
 }

 function returnsAnAnonymousFunction () {
     return function () {};
 }