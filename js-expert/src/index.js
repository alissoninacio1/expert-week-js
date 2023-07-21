//tests
/*
o node possui um modulo nativo (nao precisa instalar)
chamado assert que serve para testar o codigo
*/

const assert = require('assert')
const Employee = require('./employee')
const Util = require('./util')

//como se fosse um Enum
const GENDER = {
    male: 'male',
    female: 'female'
}

//cada chave  is um contexto em JS
{
    const employee = new Employee({
        name: 'Silvio Santos',
        gender: GENDER.female
    })

    assert.throws(() => employee.birthYear, {message: "You must define the age first!"})
}


const CURRENT_YEAR = 2021
Date.prototype.getFullYear = () => CURRENT_YEAR //toda vez que chamarem o getFULLYEar - ele retornara o current Year
/*
without instanciate with new we access this method directly with prototypes
ex.: 
const birthday = ne Date('August 19')
console.log(birthday.getDate())
*/


{
    const employee = new Employee({
        name: 'Joaozinho',
        age: 20,
        gender: GENDER.male
    })

    assert.deepStrictEqual(employee.name, "Mr. Joaozinho")
    assert.deepStrictEqual(employee.age, undefined)
    assert.deepStrictEqual(employee.gender, undefined)
    assert.deepStrictEqual(employee.grossPay, Util.formatCurrency(5000.40))
    assert.deepStrictEqual(employee.netPay,Util.formatCurrency(4000.32))

    const expectedBirthYear = 2001
    assert.deepStrictEqual(employee.birthYear, expectedBirthYear)

    //nao tem set, nao vai mudar
    employee.birthYear = new Date().getFullYear() - 80
    assert.deepStrictEqual(employee.birthYear,expectedBirthYear)

    employee.age = 80
    assert.deepStrictEqual(employee.birthYear, 1941)
    console.log('\n ------employee----')
    console.log('employee.name', employee.name)
    console.log('employee.age', employee.age)
    console.log('employee.gender', employee.gender)
    console.log('employee.grossPay', employee.grossPay)
    console.log('employee.netPay', employee.netPay)
    
}


