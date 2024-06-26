// Objeto de Designación de enfermeras
const asignacionesEnfermeras = {};
const savedEnfermera = [4];

// Arrays de sectores disabled, abled y todos los sectores
const sectoresDisabled = document.querySelectorAll('#op_industriales, #direccion, #administracion, #laboratorio, #esterilizacion, #comedor, #bodega, #vestuario, #central_alimentacion');
const sectoresAbled = document.querySelectorAll('#auditorio, #rehabilitacion, #pnac, #farmacia, #sectorAzul, #sectorVerde, #sectorAmarillo, #hospitalizacion, #urgencia');

const sectores = []; 
const svg = document.getElementById('svg');

sectoresDisabled.forEach((sector) => {
    sectores.push(sector);
})
sectoresAbled.forEach((sector) => {
    sectores.push(sector);
})
// Lista de sectores abled
const auditorio = document.getElementById('auditorio');
const rehabilitacion = document.getElementById('rehabilitacion');
const textRehab = document.querySelector('.textRehabilitacion');
const pnac = document.getElementById('pnac');
const farmacia = document.getElementById('farmacia');
const sectorAzul = document.getElementById('sectorAzul');
const sectorVerde = document.getElementById('sectorVerde');
const sectorAmarillo = document.getElementById('sectorAmarillo');
const hospitalizacion = document.getElementById('hospitalizacion');
const urgencia = document.getElementById('urgencia');

// Lista de rutas 
const sectorAzulRoot = "assets/sectorAzul.svg";
const sectorVerdeRoot = "assets/sectorVerde.svg";
const sectorAmarilloRoot = "assets/sectorAmarillo.svg";
const hospitalizacionRoot = "assets/hospitalizacion.svg";
const urgenciaRoot = "assets/urgencia.svg";
const farmaciaRoot = "assets/farmacia.svg";
const pnacRoot = "assets/pnac.svg";
const rehabilitacionRoot = "assets/rehabilitacion.svg";
const auditorioRoot = "assets/auditorio.svg";

const roots = [sectorAzulRoot, sectorVerdeRoot, sectorAmarilloRoot, hospitalizacionRoot, urgenciaRoot, farmaciaRoot, pnacRoot, rehabilitacionRoot, auditorioRoot];

const modal = document.querySelector('.modal');
const close_modal = document.querySelector('.btn_cerrar')

document.addEventListener('DOMContentLoaded', () => {
    sectoresAbled.forEach((sector) => {
        sector.setAttribute('cursor', 'pointer');
        })
        //Aplicando la clase transition y el backgroundColor de los sectores disabled
        sectoresDisabled.forEach((sector) => {
            sector.classList.add('transition');
            sector.style.fill = "#818284";
            
    })

    //Aplicando la clase transition a los sectores abled
    const btn_seleccionar = document.getElementById('btn-seleccionar');
    sectoresAbled.forEach((sector, index) => {
        sector.classList.add('transition');
        sector.addEventListener('click', () => {
            modal.classList.add('modal--show');
            svg.setAttribute('src', roots[index]);
            btn_seleccionar.addEventListener('click', (evt) => {
                evt.preventDefault();
                
                const selectedEnfermera = enfermeras[select.selectedIndex];
                const sectorId = svg.getAttribute('src'); // Use the sector SVG path as a key
                asignacionesEnfermeras[sectorId] = selectedEnfermera;
                savedEnfermera[index] = asignacionesEnfermeras[roots[index]];

                const svgDoc = svg.getSVGDocument();
                const tspan = svgDoc.getElementById('tspan80'); 
                tspan.textContent = `${enfermeras[select.selectedIndex].nombre}`;
            
            });
            //
            if (savedEnfermera) {
                inputNombre.value = savedEnfermera.nombre;
                inputDni.value = savedEnfermera.dni;
                inputDireccion.value = savedEnfermera.address;

                const svgDoc = svg.getSVGDocument();
                const tspan = svgDoc.getElementById('tspan80');
                tspan.textContent = savedEnfermera.nombre;
            } else {
                inputNombre.value = '';
                inputDni.value = '';
                inputDireccion.value = '';

                const svgDoc = svg.getSVGDocument();
                const tspan = svgDoc.getElementById('tspan80');
                tspan.textContent = "No hay enfermeras";
            }
            //
            
            })
        }) 
    })
    close_modal.addEventListener('click', () => {
        modal.classList.remove('modal--show');
    })

    // Definiendo el backgroundColor y color de cada sector no disabled

    // Auditorio
    auditorio.style.fill = "#20487b";
    auditorio.addEventListener('mouseover', () => {
        auditorio.classList.add('cambiarColorAuditorio');
    })
    auditorio.addEventListener('mouseout', () => {
        auditorio.classList.remove('cambiarColorAuditorio');
    })

    // Rehabilitación
    rehabilitacion.style.fill = "#feca06"; 
    rehabilitacion.addEventListener('mouseover', () => {
        rehabilitacion.classList.add('cambiarColorRehabilitacion');
    })
    rehabilitacion.addEventListener('mouseout', () => {
        rehabilitacion.classList.remove('cambiarColorRehabilitacion');
    })
    
    // P.N.A.C.
    pnac.style.fill = "#702d90"; 
    pnac.addEventListener('mouseover', () => {
        pnac.classList.add('cambiarColorPnac');
    })
    pnac.addEventListener('mouseout', () => {
        pnac.classList.remove('cambiarColorPnac');
    })

    // Farmacia
    farmacia.style.fill = "#f48320";
    farmacia.addEventListener('mouseover', () => {
        farmacia.classList.add('cambiarColorFarmacia');
    })
    farmacia.addEventListener('mouseout', () => {
        farmacia.classList.remove('cambiarColorFarmacia');
    })

    // Sector Azul
    sectorAzul.style.fill = "#01598a";
    sectorAzul.addEventListener('mouseover', () => {
        sectorAzul.classList.add('cambiarColorSecAzul');
    })
    sectorAzul.addEventListener('mouseout', () => {
        sectorAzul.classList.remove('cambiarColorSecAzul');
    })

    // Sector Verde
    sectorVerde.style.fill = "#81b539";
    sectorVerde.addEventListener('mouseover', () => {
        sectorVerde.classList.add('cambiarColorSecVerde');
    })
    sectorVerde.addEventListener('mouseout', () => {
        sectorVerde.classList.remove('cambiarColorSecVerde');
    })

    // Sector Amarillo
    sectorAmarillo.style.fill = "#fcaf16";
    sectorAmarillo.addEventListener('mouseover', () => {
        sectorAmarillo.classList.add('cambiarColorSecAmarillo');
    })
    sectorAmarillo.addEventListener('mouseout', () => {
        sectorAmarillo.classList.remove('cambiarColorSecAmarillo');
    })

    // Hospitalización
    hospitalizacion.style.fill = "#009c9f";
    hospitalizacion.addEventListener('mouseover', () => {
        hospitalizacion.removeAttribute('fill');
        hospitalizacion.classList.add('cambiarColorHosp');
    })
    hospitalizacion.addEventListener('mouseout', () => {
        hospitalizacion.classList.remove('cambiarColorHosp');
    })

    // Urgencia
    urgencia.style.fill = "#c5141a";
    urgencia.addEventListener('mouseover', () => {
        urgencia.classList.add('cambiarColorUrgencia')
    })
    urgencia.addEventListener('mouseout', () => {
        urgencia.classList.remove('cambiarColorUrgencia')
    })


    sectoresDisabled.forEach((sector) => {
        if (sector) {
            sector.addEventListener('mouseover', () => {
                sector.classList.add('cambiarColorDisabled');
            })
            sector.addEventListener('mouseout', () => {
                sector.classList.remove('cambiarColorDisabled');
            })
        }     
    })

   

    
    
    /* const square = document.getElementById('tspan3-0');
    square.addEventListener('mouseover', () => {
        square.textContent = square.textContent + " 1";
    }) */
