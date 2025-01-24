const akey ='live_PWKdmjhGz8tJxx0BObyhWPGyLHARPJ0AHhbr3IkWzUfYG01OGnvN5JFVGFrv1ug4'
const Api_url =`https://api.thecatapi.com/v1/images/search?limit=3&api_key=${akey}`

/*
Ejemplo de como usar queryparameters

querystring = [
    '?',
    'limit=3',
    '&order=Desc',
].join('');

const URL = `https://api.thecatapi.com/v1/images/search${querystring}`

*/

    async function reload() {
        const res = await fetch(Api_url)
        const data = await res.json()
      
            const img1 = document.getElementById('img1')
            const img2 = document.getElementById('img2')
            const img3 = document.getElementById('img3')
            
            img1.src = data[0].url
            img2.src = data[1].url
            img3.src = data[2].url
        
    }

    reload()