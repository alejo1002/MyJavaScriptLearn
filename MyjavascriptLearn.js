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
//                          EVENTS
//*********************************************************************************************************
function changeImage(overOut){
    var x = document.getElementById("img")
    if (overOut == 'over') {
        x.src = "images/red.jpg";
        mouseOver = true;
    }
    else{
        x.src = "images/white.jpg";
        mouseOver = false;
    }
}

//*********************************************************************************************************
//                          JSON
//*********************************************************************************************************
function handleJSON(){
    var textJSON = 
    '{"employees":['+
    '{'+
        '"id": 375074,'+
        '"nro_buseta": 1,'+
        '"placa": "WMR168",'+
        '"nombre_conductor": "JOSE GERARDO",'+
        '"apellido_conductor": "OCAMPO MORENO",'+
        '"cedula": 1216718287,'+
        '"nombre_ruta": "207 Viaducto - Centro",'+
        '"hora_salida": "2017-08-22T12:15:59.000Z"'+
    '},'+
    '{'+
        '"id": 375075,'+
        '"nro_buseta": 16,'+
        '"placa": "TSJ732",'+
        '"nombre_conductor": "GILBERTO ANTONIO",'+
        '"apellido_conductor": "MAYA CORREA",'+
        '"cedula": 71708482,'+
        '"nombre_ruta": "205 Moravia",'+
        '"hora_salida": "2017-08-22T12:15:44.000Z"'+
    '},'+
    '{'+
        '"id": 375083,'+
        '"nro_buseta": 12,'+
        '"placa": "TSJ352",'+
        '"nombre_conductor": "JHON ERNESTO",'+
        '"apellido_conductor": "CARTAGENA ORTIZ",'+
        '"cedula": 71971460,'+
        '"nombre_ruta": "218 Pajarito - Centro",'+
        '"hora_salida": "2017-08-22T12:15:11.000Z"'+
    '},'+
    '{'+
        '"id": 375105,'+
        '"nro_buseta": 34,'+
        '"placa": "WDY455",'+
        '"nombre_conductor": "JHON FREDY",'+
        '"apellido_conductor": "CANO LOAIZA",'+
        '"cedula": 98662012,'+
        '"nombre_ruta": "201 San Cristobal - Centro",'+
        '"hora_salida": "2017-08-22T12:24:10.000Z"'+
    '},'+
    '{'+
        '"id": 375106,'+
        '"nro_buseta": 63,'+
        '"placa": "WMR292",'+
        '"nombre_conductor": "WILMAR ALBERTO",'+
        '"apellido_conductor": "YEPEZ LOAIZA",'+
        '"cedula": 71263746,'+
        '"nombre_ruta": "205 Moravia",'+
        '"hora_salida": "2017-08-22T12:30:59.000Z"'+
    '}'+
    ']}';

    var obj = JSON.parse(textJSON);
    var total = obj.employees.length;
    var numRamdom = generateRandom(total, 0);

    document.getElementById("vehicle").innerHTML = 'Vehicle: ' + obj.employees[numRamdom].placa + '-' + obj.employees[numRamdom].nro_buseta;
    document.getElementById("driver").innerHTML = 'Driver: ' + obj.employees[numRamdom].nombre_conductor + ' ' +
                                                               obj.employees[numRamdom].apellido_conductor;
}

//Genera números aleatorios enteros entre min y (max - 1)
function generateRandom(max, min){
    var numRam = Math.floor(Math.random() * (max - min)) + min;
    return numRam;
}

//*********************************************************************************************************
//      SECUENCY                    
//*********************************************************************************************************
var numSec = 0;
var tim;
var speed;

function playSecuency(sp){

        stopSecuency();
        speed = sp;
        if(speed != 0){
            tim = setInterval(changeSecuency, speed);
        }
}

function stopSecuency(){
    clearInterval(tim);
}

function changeSecuency(){
    if(numSec < 7){
        numSec++;
    }
    else{
        numSec = 0;
    }
    document.getElementById("imgSecuency").src = "secuency/" + numSec + ".png";
}

function changeSpeed(){
    var newSpeed = parseInt(document.getElementById("rangeSec").value);
    document.getElementById("salida").innerHTML = newSpeed;

    if(newSpeed == 200){
        lable = newSpeed;
        newSpeed = 50;
    }
    else if(newSpeed == 150){
        newSpeed = 100;
    }
    else if(newSpeed == 100){
        newSpeed = 150;
    }
    else if(newSpeed == 50){
        newSpeed = 200;
    }
    playSecuency(newSpeed);
}