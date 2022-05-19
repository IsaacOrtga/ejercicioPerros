let cont = 1;
function perro() {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json())
        .then(json => json)
        .then(json => document.getElementById('random').src = json.message)
        .then(() => {
            let foto = document.getElementById('random').src
            document.getElementById(`c${cont}`).src = foto
            cont++
        })
}

