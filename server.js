const express = require('express')
const app = express()
const PORT = 5000
const cors = require('cors')

app.use(cors())

const champ = {
    'flyweight': {
        'fighterName': 'Deiveson Figueiredo',
        'wonTitle': '01/22/2022',
        'defenses': 0
    },
    'bantamweight': {
        'fighterName': 'Aljamain Sterling',
        'wonTitle': '03/06/2021',
        'defenses': 1
    },
    'featherweight': {
        'fighterName': 'Alexander Volkanovski',
        'wonTitle': '12/14/2019',
        'defenses': 3
    },
    'lightweight': {
        'fighterName': 'Charles Oliveira',
        'wonTitle': '05/15/2021',
        'defenses': 2
    },
    'welterweight': {
        'fighterName': 'Kamaru Usman',
        'wonTitle': '03/02/2019',
        'defenses': 5
    },
    'middleweight': {
        'fighterName': 'Israel Adesanya',
        'wonTitle': '10/06/2019',
        'defenses': 4
    },
    'light heavyweight': {
        'fighterName': 'Jiri Prochazka',
        'wonTitle': '06/11/2022',
        'defenses': 0
    },
    'heavyweight': {
        'fighterName': 'Francis Ngannou',
        'wonTitle': '03/27/2021',
        'defenses': 1
    },
    'unknown': {
        'fighterName': 'unknown',
        'wonTitle': 'unknown',
        'defenses': 0
    }
}

// send a request
app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api', (request, response) => {
    response.json(champ)
})
app.get('/api/:weightDiv', (request, respond) => {
    const weightDivision = request.params.weightDiv.toLowerCase()
    if(champ[weightDivision]){
        respond.json(champ[weightDivision])
    }else {
        respond.json(champ['unknown'])
    }
})

app.listen(process.env.PORT || PORT, _ => {
    console.log(`Server is listening on PORT ${PORT}. Go!`)
})