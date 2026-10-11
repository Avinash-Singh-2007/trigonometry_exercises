const r = require("raylib");

function running() {
    return !r.WindowShouldClose();
}

function setup() {
    const WIDTH = 400;
    const HEIGHT = 400;
    const TITLE = "Circle Points";
    const FPS = 50;

    r.InitWindow(WIDTH, HEIGHT, TITLE);
    r.SetTargetFPS(FPS);
}

function update() {}

function radians(degree) {
    return (degree * Math.PI) / 180;
}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.WHITE);

    const CIRCLE = {
        X: 200,
        Y: 200,
        RADIUS: 150,
    };

    r.DrawCircle(CIRCLE.X, CIRCLE.Y, CIRCLE.RADIUS, r.DARKGRAY);

    for (let i = 0; i < 12; i++) {
        const NO_OF_POINTS = 12;
        const ANGLE_BETWEEN_POINTS = 360 / NO_OF_POINTS;

        const POINT = {
            X:
                Math.cos(radians(i * ANGLE_BETWEEN_POINTS)) * CIRCLE.RADIUS +
                CIRCLE.X,
            Y:
                Math.sin(radians(i * ANGLE_BETWEEN_POINTS)) * CIRCLE.RADIUS +
                CIRCLE.Y,
            RADIUS: 5,
        };

        r.DrawCircle(POINT.X, POINT.Y, POINT.RADIUS, r.BLUE);
    }

    r.EndDrawing();
}

function tearDown() {
    r.CloseWindow();
}

function loop() {
    while (running()) {
        update();
        draw();
    }
}

function main() {
    setup();
    loop();
    tearDown();
}

main();
