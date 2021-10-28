function ObjectIs(val1, val2) {
    if (String(val1) === "NaN" && String(val2) === "NaN") {
        return true;
    };
    else if ((val1 * Infinity === -Infinity) && (val2 * Infinity === -Infinity)) {
        return true;
    };
    else {
        return val1 === val2;
    };
 };

function test() {
    console.log(ObjectIs(42,42) === true);
    console.log(ObjectIs("foo","foo") === true);
    console.log(ObjectIs(false,false) === true);
    console.log(ObjectIs(null,null) === true);
    console.log(ObjectIs(undefined,undefined) === true);
    console.log(ObjectIs(NaN,NaN) === true);
    console.log(ObjectIs(-0,-0) === true);
    console.log(ObjectIs(0,0) === true);

    console.log(ObjectIs(-0,0) === false);
    console.log(ObjectIs(0,-0) === false);
    console.log(ObjectIs(0,NaN) === false);
    console.log(ObjectIs(NaN,0) === false);
    console.log(ObjectIs(42,"42") === false);
    console.log(ObjectIs("42",42) === false);
    console.log(ObjectIs("foo","bar") === false);
    console.log(ObjectIs(false,true) === false);
    console.log(ObjectIs(null,undefined) === false);
    console.log(ObjectIs(undefined,null) === false);
}

test();