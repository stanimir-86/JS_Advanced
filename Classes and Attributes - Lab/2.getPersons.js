class Person {
    constructor(firstName, lastName, age, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }

}
function createPeopleArray() {
    const people = [
        new Person("Anna", "Simpson", 22, "anna@yahoo.com"),
        new Person("SoftUni"),
        new Person("Stephan", "Johnson", 25),
        new Person("Gabriel", "Peterson", 24, "g.p@gmail.com")
    ];

    return people;
}



