const r = require("raylib");

function running() {
    return !r.WindowShouldClose();
}

function setup() {
    const WIDTH = 400;
    const HEIGHT = 400;
    const TITLE = "ANGLE";
    const FPS = 50;

    const A_POINT = {
        x: 100,
        y: 300,
    };
    const B_POINT = {
        x: 350,
        y: 150,
    };

    r.InitWindow(WIDTH, HEIGHT, TITLE);
    r.SetTargetFPS(FPS);

    return {
        A_POINT,
        B_POINT,
    };
}

function update() {}

function degree(radian) {
    return (radian * 180) / Math.PI;
}

function draw(WORLD) {
    r.BeginDrawing();
    r.ClearBackground(r.WHITE);

    const perpendicular = WORLD.B_POINT.y - WORLD.A_POINT.y;
    const base = WORLD.B_POINT.x - WORLD.A_POINT.x;

    const angle = Math.atan2(-perpendicular, base);
    const degreeValue = degree(angle);

    r.DrawLineEx(WORLD.A_POINT, WORLD.B_POINT, 2, r.GREEN);
    r.DrawLineEx(
        WORLD.A_POINT,
        { x: WORLD.B_POINT.x, y: WORLD.A_POINT.y },
        2,
        r.RED,
    );
    r.DrawLineEx(
        { x: WORLD.B_POINT.x, y: WORLD.A_POINT.y },
        WORLD.B_POINT,
        2,
        r.BLUE,
    );

    for (let i = 0; i < 2; i += 0.1) {
        r.DrawCircleSectorLines(
            WORLD.A_POINT,
            50 + i,
            90 + degreeValue,
            90,
            10,
            r.BLACK,
        );
    }

    r.DrawText(
        `${degreeValue.toFixed(2)}°`,
        WORLD.A_POINT.x + 60,
        WORLD.A_POINT.y - 20,
        20,
        r.BLACK,
    );

    r.DrawCircleV(WORLD.A_POINT, 4, r.BLACK);
    r.DrawText("A", WORLD.A_POINT.x - 25, WORLD.A_POINT.y - 20, 25, r.BLACK);

    r.DrawCircleV(WORLD.B_POINT, 4, r.BLACK);
    r.DrawText("B", WORLD.B_POINT.x, WORLD.B_POINT.y - 30, 25, r.BLACK);

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
