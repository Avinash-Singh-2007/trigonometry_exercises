const r = require("raylib");

function running() {
    return !r.WindowShouldClose();
}

function setup() {
    const WIDTH = 600;
    const HEIGHT = 400;
    const TITLE = "WAVES";
    const FPS = 50;
    const FREQUENCY = 0.03;
    const AMPLITUDE = 120;
    const ORIGIN_X = 50;
    const ORIGIN_Y = 200;

    r.InitWindow(WIDTH, HEIGHT, TITLE);
    r.SetTargetFPS(FPS);

    return {
        WIDTH,
        HEIGHT,
        FREQUENCY,
        AMPLITUDE,
        ORIGIN_X,
        ORIGIN_Y,
    };
}

function update() {}

function radians(degree) {
    return (degree * Math.PI) / 180;
}

function label(WORLD) {
    r.DrawText("SINE", WORLD.WIDTH - 100, 10, 25, r.BLUE);
    r.DrawText("COSINE", WORLD.WIDTH - 120, 40, 25, r.GREEN);

    r.DrawText("0", WORLD.ORIGIN_X - 20, WORLD.ORIGIN_Y - 20, 20, r.BLACK);
    r.DrawText(
        "1",
        WORLD.ORIGIN_X - 20,
        WORLD.ORIGIN_Y - WORLD.AMPLITUDE - 10,
        20,
        r.BLACK,
    );
    r.DrawText(
        "-1",
        WORLD.ORIGIN_X - 25,
        WORLD.ORIGIN_Y + WORLD.AMPLITUDE - 10,
        20,
        r.BLACK,
    );

    for (let i = 50; i < WORLD.WIDTH; i += 15) {
        r.DrawLineEx(
            { x: i, y: WORLD.ORIGIN_Y - WORLD.AMPLITUDE },
            { x: i + 10, y: WORLD.ORIGIN_Y - WORLD.AMPLITUDE },
            1.5,
            r.BLACK,
        );
        r.DrawLineEx(
            { x: i, y: WORLD.ORIGIN_Y + WORLD.AMPLITUDE },
            { x: i + 10, y: WORLD.ORIGIN_Y + WORLD.AMPLITUDE },
            1.5,
            r.BLACK,
        );
    }
}

function drawAxis(WORLD) {
    const X_AXIS = {
        START: {
            x: 0,
            y: WORLD.ORIGIN_Y,
        },
        END: {
            x: WORLD.WIDTH,
            y: WORLD.ORIGIN_Y,
        },
    };

    const Y_AXIS = {
        START: {
            x: WORLD.ORIGIN_X,
            y: 0,
        },
        END: {
            x: WORLD.ORIGIN_X,
            y: WORLD.HEIGHT,
        },
    };
    r.DrawLineEx(X_AXIS.START, X_AXIS.END, 2, r.BLACK);
    r.DrawLineEx(Y_AXIS.START, Y_AXIS.END, 2, r.BLACK);
}

function drawSinWave(WORLD) {
    for (let i = 0; i <= WORLD.WIDTH; i += 2) {
        const x = WORLD.ORIGIN_X;
        const y =
            WORLD.ORIGIN_Y - Math.sin(i * WORLD.FREQUENCY) * WORLD.AMPLITUDE;

        r.DrawCircle(x + i, y, 1, r.BLUE);

        const lineStart = {
            x: x + i,
            y: y,
        };

        const lineEnd = {
            x: x + i + 2,
            y:
                WORLD.ORIGIN_Y -
                Math.sin((i + 2) * WORLD.FREQUENCY) * WORLD.AMPLITUDE,
        };

        r.DrawLineEx(lineStart, lineEnd, 2, r.BLUE);
    }
}

function drawCosWave(WORLD) {
    for (let i = 0; i <= WORLD.WIDTH; i += 2) {
        const x = WORLD.ORIGIN_X;
        const y =
            WORLD.ORIGIN_Y - Math.cos(i * WORLD.FREQUENCY) * WORLD.AMPLITUDE;

        r.DrawCircle(x + i, y, 1, r.GREEN);

        const lineStart = {
            x: x + i,
            y: y,
        };

        const lineEnd = {
            x: x + i + 2,
            y:
                WORLD.ORIGIN_Y -
                Math.cos((i + 2) * WORLD.FREQUENCY) * WORLD.AMPLITUDE,
        };

        r.DrawLineEx(lineStart, lineEnd, 2, r.GREEN);
    }
}

function draw(WORLD) {
    r.BeginDrawing();
    r.ClearBackground(r.WHITE);

    drawAxis(WORLD);
    drawSinWave(WORLD);
    drawCosWave(WORLD);

    label(WORLD);

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
