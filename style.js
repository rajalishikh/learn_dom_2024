console.log('hello from js ')
console.log(document)

let student={
    name:'raj',
    roll:22,
    study:function(study){
        console.log("study time",study)
    }
}

let find_item1=document.getElementsByTagName("li")
for(let item of find_item1){
    // console.log(item.innerText)
}

let x =document.getElementById('my_favorite')
x.innerText='raj'

let y= document.getElementsByClassName('22')
for(let single of y){
    single.innerText='fuska'
    // console.log(single.innerText)
}
let m=document.querySelector('#beef_list li')
console.log(m)

