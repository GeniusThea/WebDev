class Person{
    constructor(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greet(){
        console.log(`Never Give Up ${this.firstName} ${this.lastName},Keep Going `)
        console.log(__filename)
        console.log(__dirname)
        console.log(module)
        console.log(exports)
    }
}
module.exports = Person;