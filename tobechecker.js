const expect = (val) => ({
    toBe: (expected) => {
        if (val === expected) return true;
        throw new Error("Not Equal");
    },
    notToBe: (expected) => {
        if (val !== expected) return true;
        throw new Error("Equal");
    },
});

//toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".
