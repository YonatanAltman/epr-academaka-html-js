console.log('Hey Jude');
console.log(new Date());
var arr = [];

let person1 = {
    firstName: "Uri",
    lastName: 'Redler',
    age: 36
}
arr.push(person1);

document.getElementById('registerForm')
    .addEventListener("submit", function (e) {
      
        e.preventDefault();
        let firstName = document.getElementById('firstName').value;
        let lastName = document.getElementById('lastName').value;
        let age = Number(document.getElementById('age').value);
      
        // let person = {
        //     firstName: firstName,
        //     lastName: lastName,
        //     age: age
        // };
        let person = {firstName,lastName,age};
        arr.push(person);
        console.log(arr);

    })


