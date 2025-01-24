let createCounter = function(init) {
    const original = init;
    return {
        increment: () => ++init,
        decrement: () => --init,
        reset: () => (init = original),
    };
};
