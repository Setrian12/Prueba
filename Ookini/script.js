    function calcularPrecio(precioUnitario, cantidad) {
        const total = precioUnitario * cantidad;
        return total;
    }

    function puedeReservar(tazasDisponibles) {
        return tazasDisponibles > 0;
    }

    const botonReservar = document.querySelector("#boton-reservar");
    const contadorTazas = document.querySelector("#contador-tazas");

    botonReservar.addEventListener("click", function() {
        const tazasActuales = Number(contadorTazas.textContent);

        if (puedeReservar(tazasActuales)) {
            contadorTazas.textContent = tazasActuales - 1;
            console.log("Reserva registrada con exito")
            alert("Reserva registrada con exito")
        } else {
            botonReservar.textContent = "sin cupos";
            botonReservar.disabled = true
            console.log("Sin cupos disponibles")
            alert("Sin cupos disponibles")
        }
    })