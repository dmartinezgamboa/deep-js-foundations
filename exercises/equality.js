function findAll(value, array) {
    let newArray = [];
    for (let v of array) {
        if (isEqual(v)) {
            newArray.push(v);
        };
    };
    function isEqual(valFromArray) {
        if (Object.is(valFromArray)) {
            return true;
        else if ()
        }
        // if (Object.is(value, valFromArray) ||
        //     (value == null && valFromArray == undefined) ||
        //     (value == undefined && valFromArray == null) ||
        //     (value == valFromArray && valFromArray.trim != "") ? true : false
        //     ) {
        //         return true
        //     };
        return false;
    };
    return newArray;
};

var myObj = { a: 2 };

var values = [
	null, undefined, -0, 0, 13, 42, NaN, -Infinity, Infinity,
	"", "0", "42", "42hello", "true", "NaN", true, false, myObj
];

function setsMatch(arr1,arr2) {
	if (Array.isArray(arr1) && Array.isArray(arr2) && arr1.length == arr2.length) {
		for (let v of arr1) {
			if (!arr2.includes(v)) return false;
		}
		return true;
	}
	return false;
}

console.log("#1")
console.log(setsMatch(findAll(null,values),[null,undefined]) === true);
console.log("#2")
console.log(setsMatch(findAll(undefined,values),[null,undefined]) === true);
console.log("#3")
console.log(setsMatch(findAll(0,values),[0,"0"]) === true);
console.log("#4")
console.log(setsMatch(findAll(-0,values),[-0]) === true);
console.log("#5")
console.log(setsMatch(findAll(13,values),[13]) === true);
console.log("#6")
console.log(setsMatch(findAll(42,values),[42,"42"]) === true);
console.log("#7")
console.log(setsMatch(findAll(NaN,values),[NaN]) === true);
console.log("#8")
console.log(setsMatch(findAll(-Infinity,values),[-Infinity]) === true);
console.log("#9")
console.log(setsMatch(findAll(Infinity,values),[Infinity]) === true);
console.log("#10")
console.log(setsMatch(findAll("",values),[""]) === true);
console.log("#11")
console.log(setsMatch(findAll("0",values),[0,"0"]) === true);
console.log("#12")
console.log(setsMatch(findAll("42",values),[42,"42"]) === true);
console.log("#13")
console.log(setsMatch(findAll("42hello",values),["42hello"]) === true);
console.log("#14")
console.log(setsMatch(findAll("true",values),["true"]) === true);
console.log("#15")
console.log(setsMatch(findAll(true,values),[true]) === true);
console.log("#16")
console.log(setsMatch(findAll(false,values),[false]) === true);
console.log("#17")
console.log(setsMatch(findAll(myObj,values),[myObj]) === true);
console.log("#18")

console.log(setsMatch(findAll(null,values),[null,0]) === false);
console.log("#19")
console.log(setsMatch(findAll(undefined,values),[NaN,0]) === false);
console.log("#20")
console.log(setsMatch(findAll(0,values),[0,-0]) === false);
console.log("#21")
console.log(setsMatch(findAll(42,values),[42,"42hello"]) === false);
console.log("#22")
console.log(setsMatch(findAll(25,values),[25]) === false);
console.log("#23")
console.log(setsMatch(findAll(Infinity,values),[Infinity,-Infinity]) === false);
console.log("#24")
console.log(setsMatch(findAll("",values),["",0]) === false);
console.log("#25")
console.log(setsMatch(findAll("false",values),[false]) === false);
console.log("#26")
console.log(setsMatch(findAll(true,values),[true,"true"]) === false);
console.log("#27")
console.log(setsMatch(findAll(true,values),[true,1]) === false);
console.log("#28")
console.log(setsMatch(findAll(false,values),[false,0]) === false);
console.log("#29")