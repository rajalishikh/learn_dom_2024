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
    console.log(item.innerText)
}