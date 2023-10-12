const motorA = ev3_motorA();
const motorB = ev3_motorB();
const ultrasound = ev3_ultrasonicSensor();

function turn(degree) {
    function turn_90() {
        const time = 500;
        ev3_runForTime(motorA, time, 250);
        ev3_runForTime(motorB, time, -250);
        ev3_pause(time + 200);
    }
    const time = math_floor(degree / 90);
    
    for (let i = 0; i < time; i = i + 1) {
        turn_90();
    }
}

function move(distance) {
    function move_5cm() {
        const time = 440;
        ev3_runForTime(motorA, time, 200);
        ev3_runForTime(motorB, time, 200);
        ev3_pause(time + 200);
    }
    
    const time = math_floor(distance / 5 - 1);
    
    for (let i = 0; i < time; i = i + 1) {
        move_5cm();
    }
}


function move_ultrasound() {
    const distance = ev3_ultrasonicSensorDistance(ultrasound);
    display(distance);
    move((distance - 80) / 10);
}

function navigate() {
    move_ultrasound();
    while(ev3_ultrasonicSensorDistance(ultrasound) < 1000) {
        turn(90);
        move(20);
        turn(270);
    }
    turn(90);
    move(20);
    turn(270);
    move(50);
}

navigate();

