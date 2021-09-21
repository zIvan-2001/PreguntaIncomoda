//Captando los botones mediantes un selector
const btnSi = document.querySelector("#btnSi");
const btnNo = document.querySelector("#btnNo");

// Agregando un evento al boton Si
btnSi.addEventListener("click", () => {
  alert("Ya lo sabia 7w7");
});

// Agregando un evendto al boton No
btnNo.addEventListener("mouseover", () => {
  // Obteniendo un numero random
  // Lo multiplicamos por 100 para obtener un valor de 1-100
  // Usamos parseInt para convertir en numero en entero
  const EjeY = parseInt(Math.random() * 100);
  const EjeX = parseInt(Math.random() * 100);

  // Cambimos una propiedad de nuestro boton para que este en movimiento
  // setProperty (Propiedad, valor)
  // Concatenamos el "%" para darle un valor en porcentaje
  btnNo.style.setProperty("top", EjeY + "%");
  btnNo.style.setProperty("left", EjeX + "%");

  // Le colocamos la propidad transform para que este se mueva dependiendo de los ejes
  btnNo.style.setProperty("transform", `translate(-${EjeX}%, -${EjeY}%)`);
});
