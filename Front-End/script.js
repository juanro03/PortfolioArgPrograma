
function cambiar_parrafo(){
    document.getElementById("edit-desc").style.display="block";
    var texto = document.getElementById("desc").innerText;
    console.log(texto);
}

function logMessage(message){
    console.log(message + "<br>");
}

let textarea=document.getElementById("edit-desc")
textarea.addEventListener("keyup", (e) => {
    logMessage(`Key "${e.key}" released  [event: keyup]`);;
    if (e.key=="Enter"){
        document.getElementById("edit-desc").style.display="none"
        document.getElementById("desc").innerText = document.getElementById("edit-desc").value
    }
});