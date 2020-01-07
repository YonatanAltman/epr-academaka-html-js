console.log('Let\'s rock!');

var arr = document.getElementsByTagName('div');
for (const element of arr) {
    // element.addEventListener("click", function (e) {
    //     console.log('CLICK');
    //     console.log(e.target);
    //     e.stopPropagation();

    // });

}



document.getElementsByClassName('eye')[0].addEventListener("click", print);


document.getElementsByClassName('top')[0].addEventListener("click", print);



function print(e) {
    console.log('CLICK');
    console.log(e.target);

}

