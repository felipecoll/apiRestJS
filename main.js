const Api_url = 'https://api.thecatapi.com/v1/images/search'

    async function reload() {
        const res = await fetch(Api_url)
        const data = await res.json()
      
            const img = document.querySelector('img')
            img.src = data[0].url
        
    }