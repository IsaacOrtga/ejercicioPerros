let cont = 1;
let totalRazas = [];
function perro() {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json())
        .then(json => json)
        .then(json => document.getElementById('random').src = json.message)
        .then(() => {
            let foto = document.getElementById('random').src
            let separar = foto.split('/');
            let raza = separar[4]
            var condicion = totalRazas.includes(raza)
            if (!condicion) {
                document.getElementById(`c${cont}`).src = foto
                totalRazas.push(raza)
                cont++
            } else {
                // alert('La raza de perro está repetida')
                // totalRazas.push(raza)
            }
            console.log(totalRazas);
           console.log(totalRazas.length)
        })
    //         .then(()) => {

    //             // if (cont >= 20) {





    //         })
    // }


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


    // const labels = [
    //     'January',
    //     'February',
    //     'March',
    //     'April',
    //     'May',
    //     'June',
    //   ];

    //   const data = {
    //     labels: labels,
    //     datasets: [{
    //       label: 'My First dataset',
    //       backgroundColor: 'rgb(255, 99, 132)',
    //       borderColor: 'rgb(255, 99, 132)',
    //       data: [0, 10, 5, 2, 20, 30, 45],
    //     }]
    //   };

    //   const config = {
    //     type: 'line',
    //     data: data,
    //     options: {}
    //   };

    //   const myChart = new Chart(
    //     document.getElementById('myChart'),
    //     config
    //   );
}