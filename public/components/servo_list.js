// import { fetchServos } from "../servo_api.js"

const nearestStations = document.querySelector('.nearest-results')

export function renderServoList (servos) {
    nearestStations.innerHTML = servos.map(servo => renderServo(servo)).join("")
}

function renderServo (servo) {
    // console.log(servo)

    let iconArr =["BP", "Caltex", "7-Eleven Pty Ltd", "Shell", "United"]
    if(!iconArr.includes(servo[1])){
        servo[1] = "default"
    }else if (servo[1] === "7-Eleven Pty Ltd"){
        servo[1] = "seven11"
    }

    // let nearStation = document.createElement("a")
    // nearStation.textContent = `${servos[3]}`
    // nearestStations.appendChild

    return `
        <div class="station-list">
            <a href class="nearest-station-name" data-lat="${servo[4]}" data-lng="${servo[5]}">${servo[2]}  ${servo[0]}m</a>
            <p><img src="../icons/100pix/${servo[1]}.png">    ${servo[3]} </p>
            <p> </p>
        </div>
    `
}