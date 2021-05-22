let text = document.getElementById('text');
let text2 = document.getElementById('text2');
let text3 = document.getElementById('text3');
let para = 'My Name is Umair'
let para2 = 'My Age is 12'
let para3 = 'I Like to play Cricket'
let x = 1;
setInterval(write,115);

function write () {
    text.innerText = para.slice(0,x);
    text2.innerText = para2.slice(0,x);
    text3.innerText = para3.slice(0,x);
    x++;
    if(x > para3.length) {
        x=1;
    }
    
}