class IMCCalculadora {
    constructor(peso, estatura) {
        this.peso = peso;
        this.estatura = estatura;
    }

    calcularIMC() {
        const imc = this.peso / (this.estatura * this.estatura);
        return imc.toFixed(1);
    }

    obtenerCategoria() {
        const imc = this.calcularIMC();
        if (imc < 18.5) {
            return {
                texto: "Bajo peso",
                mensaje: "Tu peso está por debajo de lo recomendado. Consulta con un especialista.",
                imagen: "images/bajo.png"
            };
        } else if (imc < 25) {
            return {
                texto: "Peso normal",
                mensaje: "Estás en el rango saludable. ¡Sigue así!",
                imagen: "images/normal.png"
            };
        } else if (imc < 30) {
            return {
                texto: "Sobrepeso",
                mensaje: "Tienes un ligero exceso de peso. Considera mejorar tu alimentación y actividad física.",
                imagen: "images/sobrepeso.png"
            };
        } else {
            return {
                texto: "Obesidad",
                mensaje: "Tu peso está por encima de lo saludable. Es recomendable consultar a un médico.",
                imagen: "images/obesidad.png"
            };
        }
    }
}

document.getElementById('forma').addEventListener('submit', function(e) {
    e.preventDefault();

    const peso = parseFloat(document.getElementById('peso').value);
    const estatura = parseFloat(document.getElementById('estatura').value);

    if (isNaN(peso) || isNaN(estatura) || peso <= 0 || estatura <= 0) {
        document.getElementById('resultado').textContent = "Ingresa valores válidos (usa punto decimal).";
        document.getElementById('mensaje').textContent = "";
        document.getElementById('imagenCategoria').src = "images/placeholder.png";
        return;
    }

    const calculadora = new IMCCalculadora(peso, estatura);
    const imc = calculadora.calcularIMC();
    const categoria = calculadora.obtenerCategoria();

    document.getElementById('resultado').textContent = `Tu IMC es ${imc} (${categoria.texto})`;
    document.getElementById('mensaje').textContent = categoria.mensaje;
    document.getElementById('imagenCategoria').src = categoria.imagen;
});
