console.log('Hey Jude');
console.log(new Date());
var arr = [];

let person1 = {
    firstName: "Uri",
    lastName: 'Redler',
    age: 36
}
let person2 = {
    firstName: "Shirit",
    lastName: 'Maooda',
    age: 18
}
let cat = {
    firstName: "Mew",
    lastName: 'Bar-Zanav',
    tail: true

}
arr.push(person1);
arr.push(person2);
arr.push(cat);
person1.print = print;

person1.print();

function print() {
    let number = 0;
    for (let index = 0; index < 100; index++) {
        const element = 100;
        number += element * 2;

    }
    console.group('FROM');
    console.log(getFullName(this));

    console.log(number);
    console.groupEnd();

}
document.getElementById('registerForm')
    .addEventListener("submit", submitRegisterForm);



function submitRegisterForm(e) {


    e.preventDefault();
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let age = Number(document.getElementById('age').value);
    let password = document.getElementById('password').value;
    let password2 = document.getElementById('password2').value;

    // let person = {
    //     firstName: firstName,
    //     lastName: lastName,
    //     age: age
    // };

    // /**VALID**\

    // STEP 1 - FIRST NAME REQUIRED 
    // ATTRIBUTE

    // STEP 2 - LAST NAME WITHOUT 'T' 
    let isNotT = isNotTInLastName(lastName);

    // STEP 3 - AGE 18+ 
    // ATTRIBUTE

    // STEP 4 - PASSWORDS MATCH 
    let match = isPasswordsMatchs(password, password2)

    let validForm = match && isNotT;
    // IF EVRITHING IS VALID
    if (validForm) {
        register({ firstName, lastName, age });
    } else {
        let error = '';
        if (!match) {
            error += 'The Passwords do not match! '
        }
        if (!isNotT) {
            error += "'T' is not valid in last name;"

        }

        alert(error)
    }


}
function register(person) {

    arr.push(person);


    for (const p of arr) {
        p.print = print;
        p.print();
    };
    let b = confirm('Do You want to add another one?');
    if (b) {
        // form reset
    }
}
function getFullName(person) {
    return person.firstName + ' ' + person.lastName;
}

function isPasswordsEqual(pass1, pass2) {

}

function isNotTInLastName(str) {
    let b1 = isHasLetter('t', str.toLocaleLowerCase());
    // let b2 = isHasLetter('b', str);
    return !b1;
}
function isPasswordsMatchs(p1, p2) {

    return p1 === p2;
}



