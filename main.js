const submit= document.querySelector(".submit")
const rating= document.querySelector('#rating')
const number1=document.querySelector('.n1')
const number2=document.querySelector('.n2')
const number3=document.querySelector('.n3')
const number4=document.querySelector('.n4')
const number5=document.querySelector('.n5')
const select= document.querySelector('.select')
const click1=()=>{
    rating.textContent=1
}
const click2=()=>{
    rating.textContent=2
}
const click3=()=>{
    rating.textContent=3
}
const click4=()=>{
    rating.textContent=4
}
const click5=()=>{
    rating.textContent=5
}
number1.addEventListener('click',click1)
number2.addEventListener('click',click2)
number3.addEventListener('click',click3)
number4.addEventListener('click',click4)
number5.addEventListener('click',click5)
const submitfunc=()=>{
    const style=document.createElement('style')
    style.innerHTML=`
    .card-1{
        display:none;
}
    .card-2{
        display:block;
        background-color:hsl(215, 22%, 15%) ;
        width:26rem;
        height: 24rem;
        margin:auto;
        margin-top:8rem;
        border-radius: 1rem;
        
        
}

.card-2 img{
    margin-left: 7rem;
    margin-top: 2.5rem;
}
.card-2 h5{
    background-color:hsl(213, 19%, 18%) ;
    color:hsl(25, 97%, 53%) ;
    width: 13rem;
    height: 1.8rem;
    border-radius: 1rem;
    margin-left: 6rem;
    margin-top: 2rem;
    text-align: center;
    padding: .4rem;
}
.card-2 h1{
     text-align: center;
     color: white;
     margin-top: 2rem;
}
.card-2 p{
    text-align: center;
    margin-top: 1.5rem;
    font-size: 15px;
}

`

document.head.appendChild(style)
}
submit.addEventListener('click',submitfunc)