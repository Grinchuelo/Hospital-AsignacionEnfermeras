const sectoresDisabled = document.querySelectorAll('#op_industriales, #direccion, #administracion, #laboratorio, #esterilizacion, #comedor, #bodega, #vestuario, #central_alimentacion');
const sectores = document.querySelectorAll('#auditorio, #rehabilitacion, #pnac, #farmacia, #sectorAzul, #sectorVerde, #sectorAmarillo, #hospitalizacion, #urgencia');
const auditorio = document.getElementById('auditorio');
const rehabilitacion = document.getElementById('rehabilitacion');
const pnac = document.getElementById('pnac');
const farmacia = document.getElementById('farmacia');
const sectorAzul = document.getElementById('sectorAzul');
const sectorVerde = document.getElementById('sectorVerde');
const sectorAmarillo = document.getElementById('sectorAmarillo');
const hospitalizacion = document.getElementById('hospitalizacion');
const urgencia = document.getElementById('urgencia');

document.addEventListener('DOMContentLoaded', () => {
    sectoresDisabled.forEach((sector) => {
        sector.classList.add('transition');
        sector.style.fill = "#818284";
    })

    sectores.forEach((sector) => {
        sector.classList.add('transition');
    })

    auditorio.style.fill = "#20487b";
    rehabilitacion.style.fill = "#feca06"; rehabilitacion.setAttribute("fill", "#000")

    sectoresDisabled.forEach((sector) => {
        if (sector) {
            sector.addEventListener('mouseover', () => {
                sector.classList.add('cambiarColor');
            })
            sector.addEventListener('mouseout', () => {
                sector.classList.remove('cambiarColor');
            })
        }     
    })

    const square = document.getElementById('tspan3-0');
    square.addEventListener('mouseover', () => {
        square.textContent = square.textContent + " 1";
    })
})