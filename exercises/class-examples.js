var teacher = "Kyle";

function ask(teacher, question) {
    console.log(teacher, question);
}

function otherClass() {
     var teacher = "Suzy";
     ask(teacher, "Why?");
}

otherClass();