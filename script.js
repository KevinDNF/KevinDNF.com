l = document.getElementsByClassName("typeEffect")
txtArray = []
for (let i=0;i<l.length;i++){
  txtArray.push(l[i].textContent)
  l[i].textContent = ""
}

//type(l[1],txtArray[1],0)
for (let i=0;i<txtArray.length;i++){
  type(l[i],txtArray[i],0)
}

function type(e,txt,counter){
  if (counter < txt.length){
    e.textContent += txt.charAt(counter)
    setTimeout(type,50,e,txt,counter+1);
  }
}
