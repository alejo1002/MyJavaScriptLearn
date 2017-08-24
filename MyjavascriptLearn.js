//*********************************************************************************************************
//                          INTRODUCTION
//*********************************************************************************************************
function changeHTMLcontent(){
    var textToChange = document.getElementById("inputContent1").value;
    document.getElementById("content1").innerHTML = textToChange;
}

var on = false;
function changeHTMLAttributes(){
    var img = document.getElementById("imageChangeHTMLAttris");
    var btn = document.getElementById("btnChangeHTMLAtts");
    if(!on){
        img.src = 'images/on.gif';
        on = true;
        btn.innerHTML = "Turn OFF the light";
    }
    else{
        img.src = 'images/off.gif';
        on = false;
        btn.innerHTML = "Turn ON the light";
    }
}

function changeHTMLStyles(){
    document.getElementById("txtChangeStyle").style.fontSize = "30px";
    document.getElementById("txtChangeStyle") .style.color = "red";
}

function hideShowHTMLElements(){
    var img = document.getElementById("imageHideShowHTMLElements");
    var btn = document.getElementById("btnHTMLHideShow");
    if(img.style.display==='none'){
        img.style.display = "block";
        btn.innerHTML = "Hide the Image";
    }
    else{
        img.style.display = "none";
        btn.innerHTML = "Show the Image";
    }
}
//*********************************************************************************************************