let infoAliado = JSON.parse(localStorage.getItem('aliado'))
console.log(infoAliado);

function rellenarAliados() {
    const { imagen, email, contraseña, nombre, ubicacion } = infoAliado //destructuracion de datos
    const imgAliado = document.querySelector(".imgAliado");
    let nombreAliado = document.querySelector(".nombreAliado");
    let ubicacionAliado = document.querySelector(".ubicacionAliado");
    imgAliado.innerHTML = `
    <img src="${imagen}" alt="" >
    `
    nombreAliado.textContent = `${nombre}`;
    ubicacionAliado.textContent = `${ubicacion}`;
}

rellenarAliados();