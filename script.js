<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Malla Curricular Interactiva - Agronomía UNALM</title>
    <link rel="stylesheet" href="estilos.css">
</head>
<body>
    <h1>Malla Curricular Interactiva - Agronomía UNALM</h1>
    <div id="malla"></div>

    <script src="script.js"></script>
</body>
</html>

/* estilos.css */
body {
    font-family: Arial, sans-serif;
    background-color: #f5f5f5;
    color: #333;
    text-align: center;
    padding: 20px;
}

h1 {
    color: #4e4e4e;
    margin-bottom: 20px;
}

#malla {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 15px;
    justify-items: center;
}

.curso {
    background-color: #e6f5e6;
    border: 2px solid #9ccc9c;
    border-radius: 10px;
    padding: 10px;
    width: 180px;
    transition: background-color 0.3s, transform 0.3s;
}

.curso button {
    background-color: #a3e4a3;
    border: none;
    padding: 8px 12px;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 10px;
    font-weight: bold;
}

.curso button:hover {
    background-color: #80d480;
}

.curso.aprobado {
    background-color: #b8e6b8;
    border-color: #66bb66;
    transform: scale(1.05);
}

.curso.bloqueado {
    opacity: 0.5;
    pointer-events: none;
}

.curso .nombre {
    font-weight: bold;
    font-size: 14px;
}

// script.js

const cursos = [
    { nombre: "Análisis Matemático I", requisitos: [] },
    { nombre: "Ecología General", requisitos: [] },
    { nombre: "Introducción a la Agronomía", requisitos: [] },
    { nombre: "Química General", requisitos: [] },
    { nombre: "Sociedad y Cultura Peruana", requisitos: [] },
    { nombre: "Análisis Matemático II", requisitos: ["Análisis Matemático I"] },
    { nombre: "Biología General", requisitos: [] },
    { nombre: "Economía General", requisitos: [] },
    { nombre: "Física General", requisitos: ["Análisis Matemático I"] },
    { nombre: "Lenguaje y Comunicación", requisitos: [] },
    { nombre: "Perú en el Contexto Internacional", requisitos: ["Sociedad y Cultura Peruana"] },
    { nombre: "Química Orgánica", requisitos: ["Química General"] },
    { nombre: "Bioquímica", requisitos: ["Química Orgánica"] },
    { nombre: "Botánica General", requisitos: ["Biología General"] },
    { nombre: "Dibujo General", requisitos: [] },
    { nombre: "Estadística General", requisitos: ["Análisis Matemático II"] },
    { nombre: "Prácticas Agronómicas I", requisitos: ["Introducción a la Agronomía"] },
    { nombre: "Redacción y Argumentación", requisitos: ["Lenguaje y Comunicación"] },
    { nombre: "Zootecnia General", requisitos: ["Biología General"] },
    { nombre: "Edafología", requisitos: ["Química General"] },
    { nombre: "Etica y Ciudadania", requisitos: [] },
    { nombre: "Fisiología Vegetal", requisitos: ["Botánica General", "Bioquímica"] },
    { nombre: "Mecanización Agrícola I", requisitos: ["Física General"] },
    { nombre: "Metodología de la Investigación", requisitos: ["Estadística General"] },
    { nombre: "Sistemática Agrícola", requisitos: ["Botánica General"] },
    { nombre: "Agrotecnia", requisitos: ["Edafología", "Fisiología Vegetal", "Mecanización Agrícola I"] },
    { nombre: "Entomología General", requisitos: ["Biología General"] },
    { nombre: "Fitopatología General", requisitos: ["Fisiología Vegetal"] },
    { nombre: "Meteorología General", requisitos: ["Física General"] },
    { nombre: "Principios de Propagación de Plantas", requisitos: ["Fisiología Vegetal"] },
    { nombre: "Topografía I", requisitos: ["Dibujo General"] },
    { nombre: "Agroecología", requisitos: ["Agrotecnia", "Meteorología General"] },
    { nombre: "Fertilidad del Suelo", requisitos: ["Agrotecnia"] },
    { nombre: "Fitogenética", requisitos: ["Fisiología Vegetal", "Estadística General"] },
    { nombre: "Manejo de Malezas", requisitos: ["Agrotecnia", "Principios de Propagación de Plantas"] },
    { nombre: "Métodos Estadísticos para la Investigación", requisitos: ["Metodología de la Investigación"] },
    { nombre: "Principios de Manejo Integrado de Plagas", requisitos: ["Entomología General"] },
    { nombre: "Fitomejoramiento General", requisitos: ["Fitogenética"] },
    { nombre: "Fruticultura General", requisitos: ["Principios de Propagación de Plantas", "Agrotecnia"] },
    { nombre: "Manejo y Control de Semillas", requisitos: ["Fisiología Vegetal"] },
    { nombre: "Olericultura General", requisitos: ["Principios de Propagación de Plantas", "Agrotecnia"] },
    { nombre: "Cultivos I", requisitos: ["Entomología General", "Fitopatología General", "Fertilidad del Suelo"] },
    { nombre: "Entomología Agrícola", requisitos: ["Principios de Manejo Integrado de Plagas"] },
    { nombre: "Fitopatología Agrícola", requisitos: ["Fitopatología General"] },
    { nombre: "Fundamentos del Riego", requisitos: ["Fertilidad del Suelo"] },
    { nombre: "Gestión Agrícola I", requisitos: ["Economía General"] },
    { nombre: "Seminario en Ciencias Agronomía I", requisitos: ["Métodos Estadísticos para la Investigación"] },
    { nombre: "Cultivos II", requisitos: ["Entomología General", "Fitopatología General", "Fertilidad del Suelo"] },
    { nombre: "Extensión y Promoción Agraria", requisitos: ["Agrotecnia"] },
    { nombre: "Fisiología y Manejo Post Cosecha", requisitos: ["Fruticultura General", "Olericultura General"] },
    { nombre: "Manejo y Conservación del Suelo", requisitos: ["Fertilidad del Suelo", "Topografía I"] },
    { nombre: "Gestión Agrícola II", requisitos: ["Gestión Agrícola I"] },
    { nombre: "Seminario en Ciencias Agronómica II", requisitos: ["Seminario en Ciencias Agronomía I"] },
    { nombre: "Cultivos III", requisitos: ["Entomología General", "Fitopatología General", "Fertilidad del Suelo"] },
    { nombre: "Cultivos IV", requisitos: ["Entomología General", "Fitopatología General", "Fertilidad del Suelo"] },
    { nombre: "Gestión Agrícola III", requisitos: ["Gestión Agrícola II"] },
    { nombre: "Prácticas Agronómicas II", requisitos: ["Prácticas Agronómicas I"] },
    { nombre: "Trabajo de Investigación", requisitos: ["Entomología General", "Fitopatología General", "Fertilidad del Suelo"] },
    { nombre: "Curso Electivo de Carrera", requisitos: [] }
];

const estadoCursos = {};

function renderMalla() {
    const contenedor = document.getElementById('malla');
    contenedor.innerHTML = '';

    cursos.forEach(curso => {
        const aprobado = estadoCursos[curso.nombre] || false;
        const requisitosCumplidos = curso.requisitos.every(req => estadoCursos[req]);

        const divCurso = document.createElement('div');
        divCurso.className = 'curso';
        if (aprobado) divCurso.classList.add('aprobado');
        if (!requisitosCumplidos && curso.requisitos.length > 0 && !aprobado) divCurso.classList.add('bloqueado');

        const nombre = document.createElement('div');
        nombre.className = 'nombre';
        nombre.textContent = curso.nombre;

        const boton = document.createElement('button');
        boton.textContent = aprobado ? "Aprobado" : "Aprobar";
        boton.disabled = !requisitosCumplidos && !aprobado;
        boton.onclick = () => {
            estadoCursos[curso.nombre] = true;
            renderMalla();
        };

        divCurso.appendChild(nombre);
        divCurso.appendChild(boton);
        contenedor.appendChild(divCurso);
    });
}

renderMalla();
