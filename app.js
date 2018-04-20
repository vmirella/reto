//Preguntar el nombre al usuario para mostrar mensaje bienvenida
var name;
while (true){ //bucle infinito
  name = prompt('Ingresa tu nombre :)');
  if (name != ''){
    break; //si cumple la condición deja de repetir
  }
  else{
    alert('Debe ingresar su nombre'); //sino muestra un mensaje y repite
  }
};
//Pedir el id de la caja para reemplazar su contenido interno
document.getElementById('name').innerHTML = 'Bienvenid@ ' + name;

var confirmGame = confirm('¿List@ para jugar?');

if (confirmGame == false) {
  //Muestra el div message1 donde irá el mensaje de cancelación, oculta los otros div
  document.getElementById('message').style.display = 'block';
  document.getElementById('message').innerHTML = '<h3> Jugaremos para la próxima </h3>';
}
else {
  document.getElementById("defaultOpen").click(); //Seleccionar pestaña category1 por defecto
}

//funcion para el botón de la pestaña category1
function playCategory1() {

  //Declaración de variabes de preguntas
  var question1 = '1. JavaScript es una versión moderna del lenguaje de programación Java';
  var question2 = '2. Cada navegador web viene con un intérprete JavaScript que entiende cómo leer programas JavaScript';
  var question3 = '3. Para incluir JavaScript en una web HTML se utiliza el elemento script';
  //Pregunta1: JavaScript es una versión moderna del lenguaje de programación Java - falso
  var result1;
  while (true){ //bucle infinito
    result1 = prompt(question1 + '\n (Escribir V o F)').toUpperCase();
    if (result1 == 'V' || result1 == 'F'){
      break; //si cumple la condición deja de repetir
    }
    else{
      alert('Ingrese solo V ó F'); //sino muestra un mensaje y repite
    }
  };

  //Pregunta2: Cada navegador web viene con un intérprete JavaScript que entiende cómo leer programas JavaScript - verdadero
  var result2;
  while (true){ //bucle infinito
    result2 = prompt(question2 + '\n (Escribir V o F)').toUpperCase();
    if (result2 == 'V' || result2 == 'F'){
      break; //si cumple la condición deja de repetir
    }
    else{
      alert('Ingrese solo V ó F'); //sino muestra un mensaje y repite
    }
  };
  //Pregunta3: Para incluir JavaScript en una web HTML se utiliza el elemento script - verdadero
  var result3;
  while (true){ //bucle infinito
    result3 = prompt(question3 + '\n (Escribir V o F)').toUpperCase();
    if (result3 == 'V' || result3 == 'F'){
      break; //si cumple la condición deja de repetir
    }
    else{
      alert('Ingrese solo V ó F'); //sino muestra un mensaje y repite
    }
  };

  //Evaluar los resultados e imprimirlos en div correcto con su respectiva pregunta
  if(result1 === 'F'){ //Si RESULT1 es correcto
    var idResult1 = 'correct1';
    showResult(idResult1, question1, result1);
  }
  else{ //Si result1 es incorrecto
    var idResult1 = 'incorrect1';
    showResult(idResult1, question1, result1);
  }

  if(result2 === 'V'){
    var idResult2 = 'correct1';
    showResult(idResult2, question2, result2);
  }
  else{
    var idResult2 = 'incorrect1';
    showResult(idResult2, question2, result2);
  }

  if(result3 === 'V'){
    var idResult3 = 'correct1';
    showResult(idResult3, question3, result3);
  }
  else{
    var idResult3 = 'incorrect1';
    showResult(idResult3, question3, result3);
  }

  //Muestra el div result1 para ver los resultados, oculta los otros div
  document.getElementById('message').style.display = 'none';
  document.getElementById('result1').style.display = 'block';
  document.getElementById('button1').style.display = 'none';
}

//funcion para el botón de la pestaña category2
function playCategory2() {
  //Declaración de variabes de preguntas
  var question1 = '1. El grupo de lobos es llamado manada'; //V
  var question2 = '2. El rango de visión de un gato no incluye la zona por debajo de su nariz'; //V
  var question3 = '3. La joroba de un camello esta llena de agua'; //F
  //Pregunta1: El grupo de lobos es llamado manada - verdadero
  var result1;
  while (true){ //bucle infinito
    result1 = prompt(question1 + '\n (Escribir V o F)').toUpperCase();
    if (result1 == 'V' || result1 == 'F'){
      break; //si cumple la condición deja de repetir
    }
    else{
      alert('Ingrese solo V ó F'); //sino muestra un mensaje y repite
    }
  };

  //Pregunta2: El rango de visión de un gato no incluye la zona por debajo de su nariz - verdadero
  var result2;
  while (true){ //bucle infinito
    result2 = prompt(question2 + '\n (Escribir V o F)').toUpperCase();
    if (result2 == 'V' || result2 == 'F'){
      break; //si cumple la condición deja de repetir
    }
    else{
      alert('Ingrese solo V ó F'); //sino muestra un mensaje y repite
    }
  };
  //Pregunta3: La joroba de un camello esta llena de agua - falso
  var result3;
  while (true){ //bucle infinito
    result3 = prompt(question3 + '\n (Escribir V o F)').toUpperCase();
    if (result3 == 'V' || result3 == 'F'){
      break; //si cumple la condición deja de repetir
    }
    else{
      alert('Ingrese solo V ó F'); //sino muestra un mensaje y repite
    }
  };

  //Evaluar los resultados e imprimirlos en div correcto con su respectiva pregunta
  if(result1 === 'V'){ //Si result1 es correcto
    var idResult1 = 'correct2';
    showResult(idResult1, question1, result1);
  }
  else{ //Si result1 es incorrecto
    var idResult1 = 'incorrect2';
    showResult(idResult1, question1, result1);
  }

  if(result2 === 'V'){
    var idResult2 = 'correct2';
    showResult(idResult2, question2, result2);
  }
  else{
    var idResult2 = 'incorrect2';
    showResult(idResult2, question2, result2);
  }

  if(result3 === 'F'){
    var idResult3 = 'correct2';
    showResult(idResult3, question3, result3);
  }
  else{
    var idResult3 = 'incorrect2';
    showResult(idResult3, question3, result3);
  }

  document.getElementById('message').style.display = 'none';
  document.getElementById('result2').style.display = 'block';
  document.getElementById('button2').style.display = 'none';

}

//funcion para el botón de la pestaña category3
function playCategory3() {
  //Declaración de variabes de preguntas
  var question1 = '1. Los habitantes de tel-aviv se denomina telavivi'; //V
  var question2 = '2. Los habitantes de jerusalen son jerusolomitas'; //V
  var question3 = '3. Los habitantes de la ciudad de Gaza se les dice gazati'; //v
  //Pregunta1: Los habitantes de tel-aviv se denomina telavivi - verdadero
  var result1;
  while (true){ //bucle infinito
    result1 = prompt(question1 + '\n (Escribir V o F)').toUpperCase();
    if (result1 == 'V' || result1 == 'F'){
      break; //si cumple la condición deja de repetir
    }
    else{
      alert('Ingrese solo V ó F'); //sino muestra un mensaje y repite
    }
  };

  //Pregunta2: Los habitantes de jerusalen son jerusolomitas - verdadero
  var result2;
  while (true){ //bucle infinito
    result2 = prompt(question2 + '\n (Escribir V o F)').toUpperCase();
    if (result2 == 'V' || result2 == 'F'){
      break; //si cumple la condición deja de repetir
    }
    else{
      alert('Ingrese solo V ó F'); //sino muestra un mensaje y repite
    }
  };
  //Pregunta3: Los habitantes de la ciudad de Gaza se les dice gazati - verdadero
  var result3;
  while (true){ //bucle infinito
    result3 = prompt(question3 + '\n (Escribir V o F)').toUpperCase();
    if (result3 == 'V' || result3 == 'F'){
      break; //si cumple la condición deja de repetir
    }
    else{
      alert('Ingrese solo V ó F'); //sino muestra un mensaje y repite
    }
  };

  //Evaluar los resultados e imprimirlos en div correcto con su respectiva pregunta
  if(result1 === 'V'){ //Si result1 es correcto
    var idResult1 = 'correct3';
    showResult(idResult1, question1, result1);
  }
  else{ //Si result1 es incorrecto
    var idResult1 = 'incorrect3';
    showResult(idResult1, question1, result1);
  }

  if(result2 === 'V'){
    var idResult2 = 'correct3';
    showResult(idResult2, question2, result2);
  }
  else{
    var idResult2 = 'incorrect3';
    showResult(idResult2, question2, result2);
  }

  if(result3 === 'V'){
    var idResult3 = 'correct3';
    showResult(idResult3, question3, result3);
  }
  else{
    var idResult3 = 'incorrect3';
    showResult(idResult3, question3, result3);
  }

  document.getElementById('message').style.display = 'none';
  document.getElementById('result3').style.display = 'block';
  document.getElementById('button3').style.display = 'none';

}

//funcion para el botón de la pestaña category3
function playCategory4() {
  //Declaración de variabes de preguntas
  var question1 = '1. En la pelicula \'mi probre angelito\' hay dos ladrones'; //V
  var question2 = '2. En la pelicula \'titanic\' muere el personaje de Rose'; //F
  var question3 = '3. La piel de Hulk es de color verde'; //V
  //Pregunta1: En la pelicula mi probre angelito hay dos ladrones - verdadero
  var result1;
  while (true){ //bucle infinito
    result1 = prompt(question1 + '\n (Escribir V o F)').toUpperCase();
    if (result1 == 'V' || result1 == 'F'){
      break; //si cumple la condición deja de repetir
    }
    else{
      alert('Ingrese solo V ó F'); //sino muestra un mensaje y repite
    }
  };

  //Pregunta2: En la pelicula titanic muere el personaje de Rose - falso
  var result2;
  while (true){ //bucle infinito
    result2 = prompt(question2 + '\n (Escribir V o F)').toUpperCase();
    if (result2 == 'V' || result2 == 'F'){
      break; //si cumple la condición deja de repetir
    }
    else{
      alert('Ingrese solo V ó F'); //sino muestra un mensaje y repite
    }
  };
  //Pregunta3: La piel de Hulk es de color verde - verdadero
  var result3;
  while (true){ //bucle infinito
    result3 = prompt(question3 + '\n (Escribir V o F)').toUpperCase();
    if (result3 == 'V' || result3 == 'F'){
      break; //si cumple la condición deja de repetir
    }
    else{
      alert('Ingrese solo V ó F'); //sino muestra un mensaje y repite
    }
  };

  //Evaluar los resultados e imprimirlos en div correcto con su respectiva pregunta
  if(result1 === 'V'){ //Si result1 es correcto
    var idResult1 = 'correct4';
    showResult(idResult1, question1, result1);
  }
  else{ //Si result1 es incorrecto
    var idResult1 = 'incorrect4';
    showResult(idResult1, question1, result1);
  }

  if(result2 === 'F'){
    var idResult2 = 'correct4';
    showResult(idResult2, question2, result2);
  }
  else{
    var idResult2 = 'incorrect4';
    showResult(idResult2, question2, result2);
  }

  if(result3 === 'V'){
    var idResult3 = 'correct4';
    showResult(idResult3, question3, result3);
  }
  else{
    var idResult3 = 'incorrect4';
    showResult(idResult4, question4, result4);
  }

  document.getElementById('message').style.display = 'none';
  document.getElementById('result4').style.display = 'block';
  document.getElementById('button4').style.display = 'none';

}

//Metodo para mostrar los resultados
function showResult(idResult, question, result) {
  return document.getElementById(idResult).insertAdjacentHTML('beforeend', question + '<br>' + result + '<br><br>');
}

function openTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}
