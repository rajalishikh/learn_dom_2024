let find_sections=document.querySelectorAll('section')
for(let section of find_sections){
    section.style.border='2px solid sandybrown';
    section.style.marginBottom='5px'
    section.style.borderRadius='20px'
    section.style.paddingLeft='10px'
    section.style.backgroundColor='yellow'
}

let find_sections_specific=document.getElementById("beef_list")
find_sections_specific.style.backgroundColor='red'