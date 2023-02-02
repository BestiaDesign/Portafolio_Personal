let btnEnviar = document.getElementById("btnEnviar");
let idTimeout;
let correo = ["bestiadesign1@gmail.com"];

let emailConfirmar = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let telefonoConfirmar = /[0-9]{2}-[0-9]{4}-[0-9]{4}/;
//let telefonoConfirmar = /[0-9]{10}/;
let nombreConfirmar =/^[a-zA-Z-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/; 
let msjConfirmar =/^[a-zA-Z-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/; 

let nameFrom=document.getElementById("exampleFormControlInput1");
let emailFrom=document.getElementById("exampleFormControlInput2");
let cellPhone=document.getElementById("exampleFormControlInput3");
let emailBody=document.getElementById("exampleFormControlTextMessage");

let alertaName = document.getElementById("alertaName");
let alertaEmail = document.getElementById("alertaEmail");
let alertaTel = document.getElementById("alertaTel");
let alertaMessage = document.getElementById("alertaMessage");
let alertaSuccess = document.getElementById("alertaSuccess");

btnEnviar.addEventListener("click", function(event){ 
    event.preventDefault();
    let validos=0;
    alertaSuccess.style.display = "none";  

    //let alertError = document.getElementById("alertError");
    //alertError.style.display="none";
   // alertError.innerHTML = "";

  emailBody.value= emailBody.value.trim(); 

   //-Name-
   if (nameFrom.value.match(nombreConfirmar)==null)
   {
    //alertError.style.display="block";
    alertaName.style.display="block";
    // alertError.innerHTML += "<br/> Insert a valid name.";
     nameFrom.style.border = "solid red 1px";
     
   }
   else
   {
    nameFrom.style.border = "solid green 1px"
    alertaName.style.display="none";
    validos++;
   }

    //-email-
    if (emailFrom.value.match(emailConfirmar)==null)
  {
    //alertError.style.display="block";
    alertaEmail.style.display="block";
   // alertError.innerHTML += "<br/> Insert a valid email.";
    emailFrom.style.border = "solid red 1px";
    
  }
  else
  {
    emailFrom.style.border = "solid green 1px"
    alertaEmail.style.display="none";
    validos++;
  }
   //-telephone-
  if(cellPhone.value.match(telefonoConfirmar)==null)
  {
    //alertError.style.display="block";
    alertaTel.style.display="block";
   // alertError.innerHTML += "<br/> Insert a valid number.";
    cellPhone.style.border = "solid red 1px";
    
  }
  else{
    cellPhone.style.border = "solid green 1px";
    alertaTel.style.display="none";
    validos++;
}
//-message-
  if (emailBody.value.match(msjConfirmar) == null) {
     //alertError.style.display="block";
    alertaMessage.style.display="block";
  //  alertError.innerHTML +="</br> Insert a valid message.";
    emailBody.style.border = "solid red 1px"
  }
  else
  {
    emailBody.style.border = "solid green 1px";
    alertaMessage.style.display="none";
    validos++;
  }
//-TimeOut-
if ((idTimeout!=undefined) && (idTimeout!=null))
  {
    clearTimeout(idTimeout);
  }

  if (validos == 4){
    alertaSuccess.style.display = "block";
    Email.send({
      SecureToken : "a710ba32-7896-4a59-a9c9-fa9ea43a7394",
      To : correo,
      From : `bestiadesign1@gmail.com`,
      Subject : `${nameFrom.value} send you a message.`,
      Body : `${emailBody.value}
              <br>
              <br>
              Conctact information
              <br>
              <br>
              ${emailFrom.value}<br> 
              ${cellPhone.value}`
 // }).then(
   // message => alert("Your message has been sent successfully.")
  });
    idTimeout =  setTimeout(function()
    {
      nameFrom.style.border="";
      emailFrom.style.border="";
      cellPhone.style.border="";
    }, 3000);
    nameFrom.value = "";
    emailFrom.value = "";
    cellPhone.value = "";
    emailBody.value = "";
  }
});

cellPhone.addEventListener("keypress", (event) => {
  if(cellPhone.value.length == 2){
    cellPhone.value += '-';
  }else if(cellPhone.value.length == 7){
    cellPhone.value += '-';
  }
  // Agrega el guion al número telefónico.
});