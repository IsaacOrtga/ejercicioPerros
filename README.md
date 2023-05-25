# Consumo de API dogs.ceo

### Enlace a API:

[API DOGS](https://dog.ceo)

### Hemos utilizado:

- HTML5
- CSS3
  - GRID
- Javascript
- Chart.js


<figure class="video_container">
 <video controls="true" allowfullscreen="true">
 <source src="./assets/presentation.mp4" type="video/mp4">
 </video>
</figure>

### Cómo funciona:

- Se consume la API y devuelve en formato JSON para recoger la src de la imagen
- Se pregunta si esa imagen ya existe en el DOM
- Si no existe en el DOM, se carga la imagen
- Si existe se introduce en un array y se contabiliza la raza, sacando un alert para señalar que el perro está repetido y no se mostrará en el DOM:
```
.then((json) => {
      if (cont < 20) {
        document.getElementById("random").src = json.message;
      } else {
        document.getElementById("random").src = json.message;
        let foto = document.getElementById("random").src;
        let separar = foto.split("/");
        let raza = separar[4];
        var condicion = totalRazas.includes(raza);
        totalRazas.push(raza);
        if (!condicion) {
          labelsX.push(raza);
          frecuencias[cont - 1] = 1;
        } else {
          let pos = labelsX.indexOf(raza);
          console.log(pos);
          frecuencias[pos]++;
        }
      }
```


- Si aparece la imagen de un gato, señalamos con el mensaje !Ups, se ha colado un gato!
- Cada raza que se muestra se va guardadno en el Storage
- Finalmente, se puede visualizar el total de razas mostradas en un gráfico, y el índice de cada una con [Chart.js](https://www.chartjs.org/)
```
.then(() => {
      if (labelsX.length == 20) {
        const labels = labelsX;
        const data = {
          labels: labels,
          datasets: [
            {
              label: "Dog breeds",
              backgroundColor: "teal",
              borderColor: "goldenrod",
              data: frecuencias,
            },
          ],
        };
        const config = {
          type: "line",
          data: data,
          options: {},
        };
```
- El array con todas las razas cargadas se muestra en consola.
