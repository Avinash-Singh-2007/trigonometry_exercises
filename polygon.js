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

    const POLYGON = {
        x: 200,
        y: 200,
        radius: 150,
        sides: 7,
    };

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
