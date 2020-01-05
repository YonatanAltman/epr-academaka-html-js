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

document.getElementById('registerForm')
    .addEventListener("submit", function (e) {


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
        let a = 1;
        let b = '1';

        if (a === b) {

        }
        else {

        }
        // IF EVRITHING IS VALID
        let person = { firstName, lastName, age };
        arr.push(person);


        for (const p of arr) {
            console.log(getFullName(p));



        }

    });

function getFullName(person) {
    return person.firstName + ' ' + person.lastName;
}

function isPasswordsEqual(pass1,pass2) { 

}


