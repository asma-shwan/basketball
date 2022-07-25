let btn1el=document.getElementById("btn1")
let btn1e2=document.getElementById("btn2")
let btn1e3=document.getElementById("btn3")
let btn1e4=document.getElementById("2btn1")
let btn1e5=document.getElementById("2btn2")
let btn1e6=document.getElementById("2btn3")
let div1el=document.getElementById("div1")
let div2el=document.getElementById("div2")
let btnnew=document.getElementById("new")
let btnsave=document.getElementById("save")
let count1=0
let count2=0
div1el.textContent=0
div2el.textContent=0
btn1el.addEventListener("click",function(){
count1=count1+1
div1el.textContent=count1
})
btn1e2.addEventListener("click",function(){
    count1=count1+2
    div1el.textContent=count1
    })
    btn1e3.addEventListener("click",function(){
        count1=count1+3
        div1el.textContent=count1
        })
        btn1e4.addEventListener("click",function(){
            count2=count2+1
            div2el.textContent=count2
            })
            btn1e5.addEventListener("click",function(){
                count2=count2+2
                div2el.textContent=count2
                })
                btn1e6.addEventListener("click",function(){
                    count2=count2+3
                    div2el.textContent=count2
                    })
btnnew.addEventListener("click",function(){
    count1=0
    count2=0
    div2el.textContent=count2
    div1el.textContent=count1
   
})
btnsave.addEventListener("click",function(){
    if(div1el.innerHTML !=0 && div2el.innerHTML!=0){
       alert(` the prevous game = ${div1el.innerHTML} and fouls =${div2el.innerHTML}`)
    }
    else{
        alert(`the prevous game =0 and fouls=0`)
    }
})
