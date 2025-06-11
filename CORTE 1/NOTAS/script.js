document.addEventListener('DOMContentLoaded', function() {
    const calcularBtn = document.getElementById('calcularBtn');
    calcularBtn.addEventListener('click', calcularNotaNecesaria);
    
    // Agregar evento para calcular al presionar Enter
    document.getElementById('n1').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') calcularNotaNecesaria();
    });
    
    document.getElementById('n2').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') calcularNotaNecesaria();
    });
});

function calcularNotaNecesaria() {
    // Obtener valores
    const n1 = parseFloat(document.getElementById('n1').value);
    const n2 = parseFloat(document.getElementById('n2').value);
    
    // Validación
    if (isNaN(n1) || isNaN(n2) || n1 < 0 || n1 > 5 || n2 < 0 || n2 > 5) {
        alert("Por favor ingresa valores válidos entre 0.0 y 5.0");
        return;
    }
    
    // Cálculo
    const nf = (3.0 - (n1 * 0.3) - (n2 * 0.3)) / 0.4;
    const notaActual = (n1 * 0.3) + (n2 * 0.3);
    
    // Mostrar resultado
    const resultadoDiv = document.getElementById('resultado');
    const mensajeP = document.getElementById('mensaje');
    const detalleP = document.getElementById('detalle');
    
    resultadoDiv.className = 'result';
    
    if (nf > 5.0) {
        resultadoDiv.classList.add('danger');
        mensajeP.innerHTML = "✖ No es posible aprobar";
        detalleP.innerHTML = `Necesitas ${nf.toFixed(2)} en el final (máximo es 5.0)<br>
                            Con tus notas actuales (${notaActual.toFixed(2)}/3.0) no alcanzas.`;
    } else if (nf < 0) {
        resultadoDiv.classList.add('success');
        mensajeP.innerHTML = "✔ Ya estás aprobado";
        detalleP.innerHTML = `Tienes ${notaActual.toFixed(2)}/3.0. ¡Felicidades!<br>
                            Puedes sacar 0 en el final y aún así aprobar.`;
    } else {
        resultadoDiv.classList.add('info');
        mensajeP.innerHTML = `Necesitas <strong>${nf.toFixed(2)}</strong> en el final`;
        detalleP.innerHTML = `Actualmente tienes ${notaActual.toFixed(2)}/3.0<br>
                            Con ${nf.toFixed(2)} en el final alcanzarás exactamente 3.0`;
    }
    
    resultadoDiv.style.display = 'block';
    
    // Efecto de scroll suave
    resultadoDiv.scrollIntoView({ behavior: 'smooth' });
}