const r = require("raylib");

function running() {
    return !r.WindowShouldClose();
}

function setup() {
    const WIDTH = 400;
    const HEIGHT = 400;
    const TITLE = "POLYGON";
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

    const POLYGON = {
        X: 200,
        Y: 200,
        RADIUS: 150,
        SIDES: 7,
    };

    for (let i = 0; i < POLYGON.SIDES; i++) {
        const ANGLE_BETWEEN_POINTS = 360 / POLYGON.SIDES;

        const VERTEX_START = {
            x:
                POLYGON.RADIUS * Math.cos(radians(i * ANGLE_BETWEEN_POINTS)) +
                POLYGON.X,
            y:
                POLYGON.RADIUS * Math.sin(radians(i * ANGLE_BETWEEN_POINTS)) +
                POLYGON.Y,
        };

        const VERTEX_END = {
            x:
                POLYGON.RADIUS *
                    Math.cos(radians((i + 1) * ANGLE_BETWEEN_POINTS)) +
                POLYGON.X,
            y:
                POLYGON.RADIUS *
                    Math.sin(radians((i + 1) * ANGLE_BETWEEN_POINTS)) +
                POLYGON.Y,
        };

        r.DrawLineEx(VERTEX_START, VERTEX_END, 3, r.BLACK);
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
