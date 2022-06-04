document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const weightDivision = document.querySelector('input').value
    try{
        const response = await fetch(`https://ufc-champ-api.herokuapp.com/api/${weightDivision}`)
        const data = await response.json()

        console.log(data)
        document.querySelector('h2').innerText = data.fighterName
        document.querySelector('h3'). innerText = `Won title on ${data.wonTitle} and defended it ${data.defenses} times.`
    }catch{
        console.error(error)
    }
}