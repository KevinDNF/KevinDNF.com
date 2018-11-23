l = document.getElementsByClassName("typeEffect")
txtArray = []
for (let i=0;i<l.length;i++){
  txtArray.push(l[i].textContent)
  l[i].textContent = ""
}

window.addEventListener("load", (e) =>{
  setTimeout(startTyping,300);
})

function startTyping(){
  for (let i=0;i<txtArray.length;i++){
    type(l[i],txtArray[i],0)
  }
}
function type(e,txt,counter){
  if (counter < txt.length){
    e.textContent += txt.charAt(counter)
    setTimeout(type,50,e,txt,counter+1);
  }else{
    setTimeout(output,300,e);
  }
}
function output(e){
  e.classList.remove("cursor");
  e.style.opacity = 0.8;
  window.out.style.opacity = 1;
  window.endCMD.classList.add("cursor");
}
/**
let dim = document.getElementsByClassName("dimmed")
for (let wrapper of dim){
  let i = 0.7;
  for (let item of wrapper.children){
    if (item.classList["item"]){
      item.style.opacity = i;
      i -= 0.2;
    }
  }
}
**/
