export class Map {
    constructor(w,h) {
        this.w = w;
        this.h = h;

    }
    resize(w,h){
        this.w = w;
        this.h = h;
    }
    update() {

    }

    render(ctx2d){
        ctx2d.beginPath();
        ctx2d.fillStyle = "rgba(101,167,100,1)";
        ctx2d.fillRect(0, 0, this.w, this.h);
        ctx2d.fill();
    }
}