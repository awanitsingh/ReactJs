// class Student {
//     constructor(name,age) {
//         this.n=name;
//         this.a=age;
//     }
//     stu() {
//         console.log("The name of student is : ",this.n);
//         console.log("The age of the student is : ",this.a);

//     }
// }

// var stuObj = new Student('Awanit',20) ;
// stuObj.stu()



class Car {
    constructor(name) {
        this.brand=name;
    }
    present() {
        return 'I have a '+ this.brand;
    }
}

class Model extends Car {
    constructor(name,mod) {
        super(name);
        this.model=mod;
    }

    show() {
        console.log(this.present()+' , it is a '+ this.model)
    }
}

const mycar = new Model("Ford","Mustang");
mycar.show();
