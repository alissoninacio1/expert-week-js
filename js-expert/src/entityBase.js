class EntityBase {
    #name
    #age
    #gender

    //receiving an object as parameter
    constructor({name, age, gender}) {

        this.#name = name;
        this.#age = age;
        this.#gender = gender;
    }

    get name() {
        const prefix = this.#gender === "male" ? "Mr." : "Ms.";
        return `${prefix} ${this.#name}`
    }


    get birthYear() {
        //validating if age is used or passed via constructor
        if(!this.#age) {
            throw new Error("You must define the age first!")
        }

        return new Date().getFullYear() - this.#age;
    }

    set age(value) {
        this.#age = value;
    }
}

module.exports = EntityBase