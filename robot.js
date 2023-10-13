const motorA = ev3_motorA();
const motorB = ev3_motorB();
const ultrasound = ev3_ultrasonicSensor();

function turn_anticlockwise(degree) {
    function turn_anticlockwise_90() {
        const time = 900;
        ev3_runForTime(motorA, time, 150);
        ev3_runForTime(motorB, time, -150);
        ev3_pause(time + 200);
    }
    const time = math_floor(degree / 90);
    
    for (let i = 0; i < time; i = i + 1) {
        turn_anticlockwise_90();
    }
}

function turn_clockwise(degree) {
    function turn_clockwise_90() {
        const time = 900;
        ev3_runForTime(motorA, time, -150);
        ev3_runForTime(motorB, time, 150);
        ev3_pause(time + 400);
    }
    const time = math_floor(degree / 90);
    
    for (let i = 0; i < time; i = i + 1) {
        turn_clockwise_90();
    }
}

function move(distance) {
    function move_5cm() {
        const time = 440;
        ev3_runForTime(motorA, time, 250);
        ev3_runForTime(motorB, time, 250);
        ev3_pause(time + 200);
    }
    
    const time = math_floor(distance / 5);
    
    for (let i = 0; i < time; i = i + 1) {
        move_5cm();
    }
}

function move_ultrasound() {
    const distance = ev3_ultrasonicSensorDistance(ultrasound);
    display(distance);
    if (distance < 1000) {
        move((distance - 200) / 10);
    }
}

function navigate_left() {
    move_ultrasound();
    while(ev3_ultrasonicSensorDistance(ultrasound) < 1000) {
        turn_anticlockwise(90);
        move(15);
        turn_clockwise(90);
    }
    turn_anticlockwise(90);
    move(10);
    turn_clockwise(90);
    move(50);
}

function navigate_right() {
    move_ultrasound();
    while(ev3_ultrasonicSensorDistance(ultrasound) < 1000) {
        turn_clockwise(90);
        move(15);
        turn_anticlockwise(90);
    }
    move(50);
}

function navigate() {
    const ran = math_random();
    display(ran);
    if (ran <= 0.5) {
        navigate_left();
    } else {
        navigate_right();
    }
}

function every_second() {
    for (let i = 0; i < 20; i = i + 1) {
        display(ev3_ultrasonicSensorDistance(ultrasound));
        ev3_pause(1000);
    }
}

navigate();
