// var deepJS = defineWorkshop();




// ********************************



// ********************************

var deepJS = (function defineWorkshop() {
    
    var publicAPI = {
        addStudent,
        enrollStudent,
        printCurrentEnrollment,
        enrollPaidStudents,
        remindUnpaidStudents,
    };

    var currentEnrollment = [];

    var studentRecords = [];

    return publicAPI;

    // *****************

    function addStudent(id, name, paid) {
        studentRecords.push({id, name, paid});
    }

    function enrollStudent(id) {
        if (!currentEnrollment.includes(id)) {
            currentEnrollment.push(id);
        }
    }

    function printCurrentEnrollment() {
        printRecords(currentEnrollment);
    }

    function enrollPaidStudents() {
        currentEnrollent = paidStudentsToEnroll();
        printRecords(currentEnrollment);    
    }

    function remindUnpaidStudents() {
        remindUnpaid(currentEnrollment);
    }

    // ****************

    function getStudentFromId(studentId) {
        return studentRecords.find(matchId);
        // *************************
        function matchId(record) {
            return (record.id == studentId);
        }
    }

    function printRecords(recordIds) {
        var records = recordIds.map(getStudentFromId);
    
        records.sort(sortByNameAsc);
    
        records.forEach(printRecord);
    }
    
    function sortByNameAsc(record1,record2){
        if (record1.name < record2.name) return -1;
        else if (record1.name > record2.name) return 1;
        else return 0;
    }
    
    function printRecord(record) {
        console.log(`${record.name} (${record.id}): ${record.paid ? "Paid" : "Not Paid"}`);
    }
    
    function paidStudentsToEnroll() {
        var recordsToEnroll = studentRecords.filter(needToEnroll);
    
        var idsToEnroll = recordsToEnroll.map(getStudentId);
    
        return [ ...currentEnrollment, ...idsToEnroll ];
    }
    
    function needToEnroll(record) {
        return (record.paid && !currentEnrollment.includes(record.id));
    }
    
    function getStudentId(record) {
        return record.id;
    }
    
    function remindUnpaid(recordIds) {
        var unpaidIds = recordIds.filter(notYetPaid);
    
        printRecords(unpaidIds);
    }
    
    function notYetPaid(studentId) {
        var record = getStudentFromId(studentId);
        return !record.paid;
    }
} )();


deepJS.addStudent(123, "Daniel", true)
deepJS.addStudent(143, "Kathryn", true)
deepJS.addStudent(773, "Ed", false)
deepJS.addStudent(933, "Eric", true)
deepJS.addStudent(122, "Kelley", false)

deepJS.enrollStudent(123)
deepJS.enrollStudent(143)


deepJS.printCurrentEnrollment();
console.log("----");
deepJS.enrollPaidStudents();
console.log("----");
deepJS.remindUnpaidStudents();