export class Clima {
    constructor(ciudad, CodigoPais) {
        this.apikey = '8bdc38f7af507cf039eb3a7d9a3bc0ee';
        this.ciudad = ciudad;
        this.CodigoPais= CodigoPais;
    }

    async obtenerclima() {
        const URI = `https://api.openweathermap.org/data/2.5/weather?q=${this.ciudad},${this.CodigoPais}&appid=${this.apikey}&units=metric`;
        const respuesta = await fetch(URI);
        const data = await respuesta.json();
        return data;
        }

    CambiarCiudad(ciudad, CodigoPais) {
        this.ciudad = ciudad;
        this.CodigoPais = CodigoPais;
        }
}