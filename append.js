// where you want to add 
let section_add=document.getElementById('main_section')

// what you want to add 
let create_section=document.createElement('section')
let create_h1=document.createElement('h1')
create_h1.innerText='My most like food '

let create_ul=document.createElement('ul')
let create_li1=document.createElement('li')
let create_li2=document.createElement('li')
let create_li3=document.createElement('li')
let create_li4=document.createElement('li')

create_li1.innerText='birani with unlimited beef'
create_li2.innerText='rost'
create_li3.innerText='polao'
create_li4.innerText='jali kabab'

// append item 
create_section.append(create_h1)
section_add.append(create_section)
create_ul.append(create_li1,create_li2,create_li3,create_li4)
create_section.append(create_ul)

