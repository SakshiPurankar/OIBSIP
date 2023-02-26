var c = document.getElementById('c');
var f = document.getElementById('f');


c.addEventListener('input' , function(){


    let cel = this.value ;
    let fah = (cel * 9/5)+32 ;


    f.value = fah;
})


f.addEventListener('input', function(){

    let fah = this.value ;
    let cel = (fah - 32) * 5/9 ;


    c.value = cel;
})