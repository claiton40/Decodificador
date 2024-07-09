var textInput = document.querySelector("#input-texto");
var outInput = document.querySelector("#output");
var resultCripto
var resultDescripto 

function criptografar(){

  var texto = textInput.value;

  resultCripto = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat")

  
  document.getElementById('output').innerHTML = '<h1>Resultado:</h1><p></p><textarea readonly id="input-texto">' + resultCripto + 
  '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'
}

function descriptografar(){

    var texto = textInput.value;

     resultDescripto = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
  
    document.getElementById('output').innerHTML = '<h1>Resultado:</h1><p></p><textarea readonly id="input-texto">' + resultDescripto + 
    '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'
}

function copiar() {

    var textoCop
    
   if (resultCripto !="") {
    
    textoCop = resultCripto;
    navigator.clipboard.writeText(textoCop);
    document.getElementById('output').innerHTML = '<h1>Resultado:</h1><p></p><textarea readonly id="input-texto">' + resultCripto + 
  '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Texto copiado</button>'
    resultCripto = "";
   }
    else if (resultDescripto !="") {
    textoCop = resultDescripto;
    navigator.clipboard.writeText(textoCop);
    document.getElementById('output').innerHTML = '<h1>Resultado:</h1><p></p><textarea readonly id="input-texto">' + resultDescripto + 
  '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Texto copiado</button>'
} 

    else {
    document.getElementById('output').innerHTML = '<h1>Resultado:</h1><p></p><textarea readonly id="input-texto">' + resultCripto + 
  '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Falha na copia</button>'
}
    
}  











