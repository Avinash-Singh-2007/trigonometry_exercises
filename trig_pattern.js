const r = require("raylib");

function running() {
    return !r.WindowShouldClose();
}

function setup() {
    const WIDTH = 400;
    const HEIGHT = 400;
    const TITLE = "TRIG PATTERN";
    const FPS = 50;

    const ORIGIN_X = WIDTH / 2;
    const ORIGIN_Y = HEIGHT / 2;

    r.InitWindow(WIDTH, HEIGHT, TITLE);
    r.SetTargetFPS(FPS);

    return {
        ORIGIN_X,
        ORIGIN_Y,
    };
}

function update() {}

function radians(degree) {
    return (degree * Math.PI) / 180;
}

function draw(WORLD) {
    r.BeginDrawing();
    r.ClearBackground(r.WHITE);

    r.DrawCircle(WORLD.ORIGIN_X, WORLD.ORIGIN_Y, 2, r.BLUE);

    r.EndDrawing();
}

function tearDown() {
    r.CloseWindow();
}

function loop(WORLD) {
    while (running()) {
        update(WORLD);
        draw(WORLD);
    }
}

function main() {
    const WORLD = setup();
    loop(WORLD);
    tearDown();
}

main();
