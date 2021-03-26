const { time } = require('faker')
const fetch = require('node-fetch')

let start = new Date().getTime()

const timer = () => {
    let now = new Date().getTime()
    while(now - start < 1500){
        now = new Date().getTime()
    }
    start = now
}

const player = async () => {
    for(let y = 0; y < 6; y++){
        for(let x = 0; x < 6; x++){
            try{
                let res = await fetch(`http://localhost:8080/fire?x=${x}&y=${y}&team=test&password=test`)
                res = await res.json()
                if(res.score === 10){
                    console.log(`nave colpita a x = ${x} y = ${y}`)
                }else if (res.score === 50){
                    console.log(`nave colpita e affondata a x = ${x} y = ${y}`)
                }else{
                    console.log(`normal things, nothing to see here a x = ${x} y = ${y}`)
                }
                timer()
            }catch(err){
                continue
            }
            
        }
    }
    console.log(`il campo è stato bombardato`)
}

player()