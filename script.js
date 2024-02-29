const button = document.getElementById('btn')
const colortext = document.querySelector('.color')

const hex = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
]

button.addEventListener('click',()=> {
    //alert('clicked')
    const hexcolor = generatehexcolor();
    document.body.style.backgroundColor=hexcolor;

    colortext.textContent = hexcolor;
})

const generatehexcolor = () =>{
    let hexcolor = '#';

    for(let i=0; i<6; i++){
        hexcolor += hex[generaterandonumber()]
    }
    return hexcolor;
    //alert(hexcolor)
}

const generaterandonumber = () =>{
    return Math.floor(Math.random()*hex.length)
}