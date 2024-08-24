document.getElementById("formulario").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita el envío del formulario vacío.

    // captura los valores de nombre,asunto y mensaje
    const nombre = document.getElementById("nombre").value.trim();
    const asunto = document.getElementById("asunto").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    // Elementos para mostrar errores y mensajes de éxito
    const errorNombre = document.querySelector(".errorNombre");
    const errorAsunto = document.querySelector(".errorAsunto");
    const errorMensaje = document.querySelector(".errorMensaje");
    const resultado = document.querySelector(".resultado");

    // Expresión regular para solo permitir caracteres alfabéticos y espacios (probado)
    const regex = /[a-zA-Z]/gim;

    // Reiniciar mensajes de error y éxito, para que aparezcan o desaparezcan segun corresponde
    errorNombre.textContent = "";
    errorAsunto.textContent = "";
    errorMensaje.textContent = "";
    resultado.textContent = "";

    let validado = true;

    // Validar  nombre
    if (!nombre) {
      errorNombre.textContent = "El nombre es requerido.";
      validado = false;
    } else if (!regex.test(nombre)) {
      errorNombre.textContent =
        "El nombre solo puede contener caracteres alfabéticos.";
      validado = false;
    }

    // Validar asunto
    if (!asunto) {
      errorAsunto.textContent = "El asunto es requerido.";
      validado = false;
    } else if (!regex.test(asunto)) {
      errorAsunto.textContent =
        "El asunto solo puede contener caracteres alfabéticos.";
      validado = false;
    }

    // Validar mensaje
    if (!mensaje) {
      errorMensaje.textContent = "El mensaje es requerido.";
      validado = false;
    } else if (!regex.test(mensaje)) {
      errorMensaje.textContent =
        "El mensaje solo puede contener caracteres alfabéticos.";
      validado = false;
    }

    // Si todo es válido, mostrar mensaje de éxito
    if (validado) {
      resultado.textContent = "Mensaje enviado con éxito !!!";
      resultado.style.color = "green";
    }
  });
