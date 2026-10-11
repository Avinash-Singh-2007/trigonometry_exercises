const r = require("raylib");

function running() {
    return !r.WindowShouldClose();
}

function setup() {
    const WIDTH = 1000;
    const HEIGHT = 800;
    const TITLE = "ELLIPSE";
    const FPS = 50;

    const HORIZONTAL_RADIUS = 200;
    const VERTICAL_RADIUS = 100;

    const ORIGIN_X = 300;
    const ORIGIN_Y = 200;

    r.InitWindow(WIDTH, HEIGHT, TITLE);
    r.SetTargetFPS(FPS);

    return {
        HORIZONTAL_RADIUS,
        VERTICAL_RADIUS,
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

    for (let i = 0; i < 360; i += 1) {
        x = WORLD.HORIZONTAL_RADIUS * Math.cos(radians(i)) + WORLD.ORIGIN_X;
        y = WORLD.VERTICAL_RADIUS * Math.sin(radians(i)) + WORLD.ORIGIN_Y;
        r.DrawCircle(x, y, 2, r.BLACK);

        const lineStart = {
            x: x,
            y: y,
        };

        const lineEnd = {
            x:
                WORLD.HORIZONTAL_RADIUS * Math.cos(radians(i + 1)) +
                WORLD.ORIGIN_X,
            y:
                WORLD.VERTICAL_RADIUS * Math.sin(radians(i + 1)) +
                WORLD.ORIGIN_Y,
        };

        r.DrawLineEx(lineStart, lineEnd, 4, r.BLACK);
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
