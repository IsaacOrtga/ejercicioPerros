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
            var condicion=totalRazas.includes(raza)           
            
            // console.log(raza)
            // console.log(!condicion)
            // totalRazas.push(raza)
            if (!condicion) {
                document.getElementById(`c${cont}`).src = foto
                totalRazas.push(raza)
                cont++
            } else {
                alert('La raza de perro está repetida')
                totalRazas.push(raza)
            }
            console.log("hola")
            console.log(totalRazas);
        })
}