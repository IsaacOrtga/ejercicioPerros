let cont = 1;
let totalRazas = [];
function perro() {

    
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json())
        .then(json => json)
        .then(json => {
            if(cont<20){
                document.getElementById('random').src = json.message
            } else {
                document.getElementById('random').src = json.message
                let foto = document.getElementById('random').src
                let separar = foto.split('/');
                let raza = separar[4]
                totalRazas.push(raza)
            }
           return json            
        })
        .then(() => {
            if (cont < 20) {
                let foto = document.getElementById('random').src
                let separar = foto.split('/');
                let raza = separar[4]
                var condicion = totalRazas.includes(raza)
                if (!condicion) {
                    document.getElementById(`c${cont}`).src = foto
                    totalRazas.push(raza)
                    document.getElementById('showBreed').innerText = `¡Has encontrado un ${raza}!`
                    cont++
                } else {
                    alert(`La raza de perro ${raza} está repetida`)
                }
            } else {               
                fetch('https://api.thecatapi.com/v1/images/search')
                    .then(res => res.json())
                    .then(json => json)
                    .then(json => {
                        let data = json[0]
                        document.getElementById('random').src = data.url
                    })
                    .then(() => {
                        let foto = document.getElementById('random').src
                        document.getElementsByClassName('boton')[0].innerText = '¡Miau!'
                        document.getElementById(`c${cont}`).src = foto
                        document.getElementById('showBreed').innerText = '¡Ups! se ha colado un gato'
                        document.getElementById('titulo').innerText='Gatos'
                    })
            }
            console.log(totalRazas);
            console.log(totalRazas.length)
        })
    if (cont == 20) {
        const labels = totalRazas;
        const data = {
            labels: labels,
            datasets: [{
                label: 'Dog breeds',
                backgroundColor: 'teal',
                borderColor: 'goldenrod',
                data: [1, 10, 5, 2, 20, 30, 45, 5, 7, 33, 22, 8, 1, 2, 5, 6, 52, 12, 32, 18],
            }]
        };
        const config = {
            type: 'line',
            data: data,
            options: {}
        };
        const myChart = new Chart(
            document.getElementById('myChart'),
            config
        );
    }

    
}


