const r = require("raylib");

let time = 0;

function running() {
    return !r.WindowShouldClose();
}

function setup() {
    const WIDTH = 800;
    const HEIGHT = 800;
    const TITLE = "TRIG PATTERN";
    const FPS = 10;

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
    r.ClearBackground(r.BLACK);

    for (let i = 0; i < 800; i += 0.15) {
        const a = i * 0.05;
        const radius = 180 + 50 * Math.sin(a * 4 + time * 2);

        const x = Math.cos(a * time) * radius + WORLD.ORIGIN_X;
        const y = Math.sin(a * time) * radius + WORLD.ORIGIN_Y;

        const color = {
            r: 100,
            g: 200,
            b: 255,
            a: 255,
        };

        r.DrawCircle(x, y, 2, color);
    }

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
