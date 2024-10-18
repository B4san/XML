function enviarformulario() {
    // Capturar informacion del formulario
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const anio = document.getElementById("anio").value;
    const telefono = document.getElementById("telefono").value;

    // Crear documento XML
    const xmlData = `
    <usuario>
        <nombre>${nombre}</nombre>
        <email>${email}</email>
        <anio>${anio}</anio>
        <telefono>${telefono}</telefono>
    </usuario>
    `;

    // Almacenar XML en localstorage
    localStorage.setItem("usuarioXML", xmlData);

    // Redirigir la pagina de visualizacion
    window.location.href = "visualizar.html";

    // Evitar que el formulario se envie de la manera tradicional
    return false;
}