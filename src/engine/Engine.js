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
        this.helicopter.fall();
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
        switch(event.keyCode) {
            case 32: this.helicopter.climb(); console.log('climbing');
        }
    }

    keyUp = (event) => {
        switch(event.keyCode) {
            case 32: this.helicopter.fall(); console.log('falling');
        }
    }

}

export default Engine;