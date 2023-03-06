export function initP2(){
    console.log("In initP2()")
    document.getElementById("btn-save-text").onclick = saveText
   
  }

  let sharedText = ""
 

  function saveText(){
    let text = document.getElementById("input-text").value
    sharedText = text
    document.getElementById("text").innerHTML=text
  }

  export function getText(){
    return sharedText
  }
  