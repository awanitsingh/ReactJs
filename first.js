// function multiply(a,b) {
//     return a*b;
// }

// console.log(multiply(3,5));
// value = (a,b) => a*b;
// console.log(value(3,5));


// var show = (a,b=200) => {
//     console.log(a+" "+b)
// }

class Student {
    constructor(name,age) {
        this.n=name;
        this.a=age;
    }
    stu() {
        console.log("The name of student is : ",this.n);
        console.log("The age of the student is : ",this.a);

    }
}

var stuObj = new Student('Awanit',20) ;
stuObj.stu()