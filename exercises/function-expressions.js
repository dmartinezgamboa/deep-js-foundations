// TODO: re-factor using functions (.foreach) , (.map) , (.find) , (.filter)


function printRecords(recordIds) {
    let recordsToPrint = []; //create array to print
	for (i in recordIds) {
        for (j in studentRecords) {
            if (studentRecords[j].id == recordIds[i]) {
                recordsToPrint.push(studentRecords[j]);
            }
        }
    }
    recordsToPrint.sort(function makeAlpha(a, b) { // sort by alphabetical name
        let nameA = a.name.toUpperCase();
        let nameB = b.name.toUpperCase();
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        return 0;
    })
    for (i in recordsToPrint) { // print formatted string
        if (recordsToPrint[i].paid) {
            console.log(`${recordsToPrint[i].name} (${recordsToPrint[i].id}): Paid`);
        }
        else {
            console.log(`${recordsToPrint[i].name} (${recordsToPrint[i].id}): Not Paid`);
        }
    }
}

function paidStudentsToEnroll() {
	let paidStudentsToEnroll = currentEnrollment;
    for (i in studentRecords) {
        for (j in currentEnrollment) {
            if (
                studentRecords[i].id != currentEnrollment[j] &&
                studentRecords[i].paid &&
                !paidStudentsToEnroll.includes(studentRecords[i].id)
            ) {
                paidStudentsToEnroll.push(studentRecords[i].id);
                break;
            };
        };
    };
    return paidStudentsToEnroll;
};

function remindUnpaid(recordIds) {
    let unPaidIds = [];
    for (i in recordIds) {
        for (j in studentRecords) {
            if (
                recordIds[i] == studentRecords[j].id &&
                !studentRecords[j].paid
            ) {
                unPaidIds.push(recordIds[i]);
            }
        }
    }
    printRecords(unPaidIds);
}


// ********************************

var currentEnrollment = [ 410, 105, 664, 375 ];

var studentRecords = [
	{ id: 313, name: "Frank", paid: true, },
	{ id: 410, name: "Suzy", paid: true, },
	{ id: 709, name: "Brian", paid: false, },
	{ id: 105, name: "Henry", paid: false, },
	{ id: 502, name: "Mary", paid: true, },
	{ id: 664, name: "Bob", paid: false, },
	{ id: 250, name: "Peter", paid: true, },
	{ id: 375, name: "Sarah", paid: true, },
	{ id: 867, name: "Greg", paid: false, },
];

printRecords(currentEnrollment);
console.log("----");
currentEnrollment = paidStudentsToEnroll();
printRecords(currentEnrollment);
console.log("----");
remindUnpaid(currentEnrollment);

/*
	Bob (664): Not Paid
	Henry (105): Not Paid
	Sarah (375): Paid
	Suzy (410): Paid
	----
	Bob (664): Not Paid
	Frank (313): Paid
	Henry (105): Not Paid
	Mary (502): Paid
	Peter (250): Paid
	Sarah (375): Paid
	Suzy (410): Paid
	----
	Bob (664): Not Paid
	Henry (105): Not Paid
*/