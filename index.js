function spy() {
    return "Varus";
}
function receivesAFunction(spy) {
    spy();
}

function returnsANamedFunction() {
    spy();
    return function spy() {
    }

    };

function returnsAnAnonymousFunction() {
    return function () {

    }
};