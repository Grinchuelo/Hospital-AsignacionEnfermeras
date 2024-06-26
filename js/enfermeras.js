const enfermeras = [
    {
        "nombre": "Lucia Morón",
        "dni": "34.471.333",
        "address": "Av. Independencia 62",
        "index": 0
    },
    {
        "nombre": "Marina Presti",
        "dni": "33.653.322",
        "address": "Alberdi 23",
        "index": 1
    },
    {
        "nombre": "Camila Jara",
        "dni": "40.233.782",
        "address": "Sarmiento 400",
        "index": 2
    },
    {
        "nombre": "Martina Benza",
        "dni": "35.124.987",
        "address": "Mitre 321",
        "index": 3
    },
    {
        "nombre": "Nicolás Occhiato",
        "dni": "37.456.123",
        "address": "San Martin 890",
        "index": 4
    },
    {
        "nombre": "El Pichu",
        "dni": "38.987.654",
        "address": "Rivadavia 12",
        "index": 5
    },
    {
        "nombre": "Laila Roth",
        "dni": "36.789.012",
        "address": "Belgrano 555",
        "index": 6
    },
    {
        "nombre": "Gianfranco Odoguardi",
        "dni": "39.456.789",
        "address": "Güemes 101",
        "index": 7
    },
    {
        "nombre": "Nicolás Ferrero",
        "dni": "40.123.456",
        "address": "Maipu 999",
        "index": 8
    },
    {
        "nombre": "Luciano Vicentin",
        "dni": "41.987.321",
        "address": "Pellegrini 200",
        "index": 9
    },
    {
        "nombre": "Agustin Loser",
        "dni": "42.654.987",
        "address": "Montevideo 400",
        "index": 10
    },
    {
        "nombre": "",
        "dni": "",
        "address": "",
        "index": 11
    }
]

const inputNombre = document.getElementById('nombre');
const inputDni = document.getElementById('dni');
const inputDireccion = document.getElementById('address');
const select = document.getElementById('selectEnfermera');
const btn_seleccionar = document.getElementById('btn-seleccionar');
    

select.addEventListener('change', function() {
    inputNombre.value = enfermeras[parseInt(select.selectedIndex)].nombre;
    inputDni.value = enfermeras[parseInt(select.selectedIndex)].dni;
    inputDireccion.value = enfermeras[parseInt(select.selectedIndex)].address;
    if (select.selectedIndex < 11) {
        btn_seleccionar.disabled = false;
    } else {
        btn_seleccionar.disabled = true;
    }
});

