const r = require("raylib");

let time = 0;

function running() {
    return !r.WindowShouldClose();
}

function setup() {
    const WIDTH = 800;
    const HEIGHT = 800;
    const TITLE = "TRIG PATTERN";
    const FPS = 50;

    const ORIGIN_X = WIDTH / 2;
    const ORIGIN_Y = HEIGHT / 2;

    r.InitWindow(WIDTH, HEIGHT, TITLE);
    r.SetTargetFPS(FPS);

    return {
        WIDTH,
        ORIGIN_X,
        ORIGIN_Y,
    };
}

function update() {
    time += 0.02;
}

function radians(degree) {
    return (degree * Math.PI) / 180;
}

function draw(WORLD) {
    r.BeginDrawing();
    r.ClearBackground(r.WHITE);

    for (let i = 0; i <= WORLD.WIDTH; i += 0.1) {
        const radius = Math.sin(radians(i) + time - i);

        const x = radius * i + WORLD.ORIGIN_X;
        const y = Math.sin(radians(i)) + WORLD.ORIGIN_Y * 2 - i;

        r.DrawCircle(x, y, 4, r.DARKGRAY);
    }

    r.EndDrawing();
}

function tearDown() {
    r.CloseWindow();
}

function loop(WORLD) {
    while (running()) {
        update(WORLD);
        r.TakeScreenshot("trig_pattern.png");
        draw(WORLD);
    }
}

function main() {
    const WORLD = setup();
    loop(WORLD);
    tearDown();
}

main();
