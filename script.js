const disply = document.querySelector('#display');
const button = document.querySelectorAll('button');

button.forEach((item)=>{
    item.onclick = () => {
        if (item.id == 'clear'){
            disply.innerText = '';
        }else if (item.id == 'backspace'){
            let string = disply.innerText.toString();
            disply.innerText = string.substr(0,string.length - 1);
        }else if (disply.innerText != '' && item.id == 'equal'){
            disply.innerText = eval(disply.innerText);
        }else if (disply.innerText == '' && item.id == 'equal'){
            disply.innerText = 'Empty!';
            setTimeout(()=>(disply.innerText = ''),2000);
        }else {
            disply.innerText += item.id;
        }
    }
})

