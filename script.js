function perro() {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json())
        .then(json => json)

        .then(json => {
            document.getElementById('random').src = json.message;
            return json
        })
        .then(json => {
            
            
            // document.getElementById('c1').src = json.message
            // if((document.getElementById('c2').src == '') && (document.getElementById('c1').src != '')) {
            //     document.getElementById('c3').src = json.message;
            // }
            for (let i = 2; i <= 20; i++) {
                if ((document.getElementById(`c${i}`).src == '') && (document.getElementById(`c${i-1}`).src == '')) {
                    document.getElementById(`c${i}`).src = json.message;
                }

            }
        })
}
