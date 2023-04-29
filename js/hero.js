import { Bullet } from './bullet.js';
import { drawInterArrow } from './drawUtil.js';
export class Hero {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.speed = 4;
        this.targetX = x;
        this.targetY = y;
        this.color = "Gold";
        this.bullets = [];
        this.rollTimer = 0;
        for (let i = 0; i < 6; i++) {
            this.bullets.push(new Bullet(x, y, 10, 1))
        }
    }

    setTarget(x, y) {
        this.targetX = x;
        this.targetY = y;
    }

    update() {
        let oldX = this.x;
        let oldY = this.y;
        let dis = Math.sqrt((this.targetY - this.y) ** 2 + (this.targetX - this.x) ** 2);
        if (dis === 0) {
            dis = 1;
        }
        //console.log(this.x,this.speed, (this.targetx - this.x));
        let nextX = this.x + this.speed * (this.targetX - this.x) / dis;
        // 如果已经越过了target
        if ((this.targetX - this.x) * (this.targetX - nextX) < 0) {
            this.x = this.targetX;
        } else {
            this.x = nextX;
        }

        let nextY = this.y + this.speed * (this.targetY - this.y) / dis;
        if ((this.targetY - this.y) * (this.targetY - nextY) < 0) {
            this.y = this.targetY;
        } else {
            this.y = nextY;
        }

        this.rollTimer++;
        for (let i = 0; i < this.bullets.length; i++) {
            this.bullets[i].update(this.x, this.y, i, this.rollTimer);
        }
    }

    render(ctx2d) {
        ctx2d.beginPath();
        ctx2d.arc(this.x, this.y, this.r, 0, 2 * 3.14, false);
        ctx2d.fillStyle = "Gold";
        ctx2d.fill();

        ctx2d.beginPath();
        ctx2d.ellipse(this.x - 7, this.y - 4, 3, 4, 0, 0, 2 * 3.14, false);
        ctx2d.moveTo(this.x + 7, this.y - 7);
        ctx2d.ellipse(this.x + 7, this.y - 4, 3, 4, 0, 0, 2 * 3.14, false);
        ctx2d.fillStyle = "rgba(100,100,100,1)";
        ctx2d.fill();

        ctx2d.beginPath();
        ctx2d.moveTo(this.x+5, this.y + 7);
        ctx2d.arc(this.x, this.y + 7, 5, 0, 3.14, false);
        ctx2d.strokeStyle = "black";
        ctx2d.lineWidth = 1;
        ctx2d.stroke();

        drawInterArrow(ctx2d, this.x, this.y, this.targetX, this.targetY, 30, 24, 8, "rgba(0,0,0,0.1)");
        //drawArrow(ctx2d, 20, 100, 100, 100, 30, 50, 10, "rgba(0,0,0,1)");
        //drawInterArrow(ctx2d, 20, 200, 100, 300, 30, 50, 10, "rgba(0,0,0,0.1)");

        for (let i = 0; i < this.bullets.length; i++) {
            this.bullets[i].render(ctx2d);
        }
    }
}