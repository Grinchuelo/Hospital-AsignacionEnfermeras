document.addEventListener('DOMContentLoaded', () => {
    const sectores = document.querySelectorAll('#op_industriales, #direccion');

    sectores.forEach((sector) => {
        sector.classList.add('transition');
        sector.style.fill = "#818284";
    })

    sectores.forEach((sector) => {
        if (sector) {
            sector.addEventListener('mouseover', () => {
                sector.classList.add('cambiarColor');
            })
            sector.addEventListener('mouseout', () => {
                sector.classList.remove('cambiarColor');
            })
        }     
    })
})
