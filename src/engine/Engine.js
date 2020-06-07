import Helicopter from "../actors/Helicopter";

class Engine {

    constructor(ctx, width, height) {
        this.ctx = ctx;
        this.width = width;
        this.height = height;
        this.fps = 20;
        this.setup();
    }

    setup = () => {
        this.npcs = [];

        
        this.helicopter = new Helicopter();
        this.helicopter.position.x = this.width / 2;
    }

    start = () => {
        this.loop();
    }

    loop = () => {
        setInterval(() => {
            this.update();
            this.draw();
        }, 1000 / this.fps);
    }

    update = () => {
        this.npcs.forEach(npc => {
            npc.update();
        })
        this.helicopter.update();
    }

    draw = () => {
        this.ctx.fillStyle = "#282c34";
        this.ctx.fillRect(0, 0, this.width, this.height);
        this.npcs.forEach(npc => {
            npc.draw(this.ctx, this.width, this.height);
        })
        this.helicopter.draw(this.ctx, this.width, this.height);
    }

    keyDown = (event) => {
        console.log(event.keyCode);
        switch(event.keyCode) {
            case 32: this.helicopter.state.climbing = true; break;
            case 37:
            case 65: this.helicopter.state.left = true; break;
            case 39:
            case 68: this.helicopter.state.right = true; break;
        }
    }

    keyUp = (event) => {
        switch(event.keyCode) {
            case 32: this.helicopter.state.climbing = false; break;
            case 37:
            case 65: this.helicopter.state.left = false; break;
            case 39:
            case 68: this.helicopter.state.right = false; break;
        }
    }

}

export default Engine;