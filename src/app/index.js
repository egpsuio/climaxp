const { Clima } = require('./clima');
const { UI } = require('./UI');
const { Store } = require('./Store');

const store = new Store();
const { city, countryCode } = store.getLocationData();

const ui = new UI();
const clima = new Clima(city, countryCode);

require('./index.css');


async function ObtenerClima() {
    const data = await clima.obtenerclima();
    console.log(data);
    ui.render(data)
}

document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const ciudad = document.getElementById('city').value;
    const codigoPais = document.getElementById('countrycode').value;
    clima.CambiarCiudad(ciudad, codigoPais);
    store.setLocationData(ciudad, codigoPais);
    ObtenerClima();
    e.preventDefault();
});

document.addEventListener('DOMContentLoaded', ObtenerClima())

