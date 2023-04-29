let lv2c = ["Gray", "rgba(158, 194, 89, 1)", "Yellow", "Blue", "Purple", "Red"];
export class Bullet {
    constructor(x, y, r, lv) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.color = lv2c[lv];
        this.lv = lv;
    }

    update(x, y, i, t) {
        let th = (60) * Math.PI / 180;
        this.x = x + 40 * Math.cos(th * i + t / 17.5 % 360);
        this.y = y + 40 * Math.sin(th * i + t / 17.5 % 360);
    }

    render(ctx2d) {
        ctx2d.beginPath();
        ctx2d.arc(this.x, this.y, this.r, 0, 2 * 3.14, false);
        ctx2d.fillStyle = this.color;
        ctx2d.fill();
    }
}