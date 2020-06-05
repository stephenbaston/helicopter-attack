import Actor from './Actor';

class Helicopter extends Actor {

    constructor() {
        super(150, 150, 300, 300);
        this.frames = [
            require(`../images/helicopter/helicopter_f1.png`),
            require(`../images/helicopter/helicopter_f2.png`),
            require(`../images/helicopter/helicopter_f3.png`),
            require(`../images/helicopter/helicopter_f4.png`),
            require(`../images/helicopter/helicopter_f5.png`),
            require(`../images/helicopter/helicopter_f6.png`),
            require(`../images/helicopter/helicopter_f7.png`),
            require(`../images/helicopter/helicopter_f8.png`),
            require(`../images/helicopter/helicopter_f9.png`),
            require(`../images/helicopter/helicopter_f10.png`),
            require(`../images/helicopter/helicopter_f11.png`),
            require(`../images/helicopter/helicopter_f12.png`),
            require(`../images/helicopter/helicopter_f13.png`),
            require(`../images/helicopter/helicopter_f14.png`),
            require(`../images/helicopter/helicopter_f15.png`),
            require(`../images/helicopter/helicopter_f16.png`),
            require(`../images/helicopter/helicopter_f17.png`),
            require(`../images/helicopter/helicopter_f18.png`),
            require(`../images/helicopter/helicopter_f19.png`),
            require(`../images/helicopter/helicopter_f20.png`),
            require(`../images/helicopter/helicopter_f21.png`),
            require(`../images/helicopter/helicopter_f22.png`),
            require(`../images/helicopter/helicopter_f23.png`),
            require(`../images/helicopter/helicopter_f24.png`),
            require(`../images/helicopter/helicopter_f25.png`),
            require(`../images/helicopter/helicopter_f26.png`),
            require(`../images/helicopter/helicopter_f27.png`),
            require(`../images/helicopter/helicopter_f28.png`),
            require(`../images/helicopter/helicopter_f29.png`),
            require(`../images/helicopter/helicopter_f30.png`),
            require(`../images/helicopter/helicopter_f31.png`),
            require(`../images/helicopter/helicopter_f32.png`),
            require(`../images/helicopter/helicopter_f33.png`),
            require(`../images/helicopter/helicopter_f34.png`),
            require(`../images/helicopter/helicopter_f35.png`),
            require(`../images/helicopter/helicopter_f36.png`),
            require(`../images/helicopter/helicopter_f37.png`),
            require(`../images/helicopter/helicopter_f38.png`),
            require(`../images/helicopter/helicopter_f39.png`),
            require(`../images/helicopter/helicopter_f40.png`),
            require(`../images/helicopter/helicopter_f42.png`),
            require(`../images/helicopter/helicopter_f43.png`),
            require(`../images/helicopter/helicopter_f44.png`),
            require(`../images/helicopter/helicopter_f45.png`),
            require(`../images/helicopter/helicopter_f46.png`),
            require(`../images/helicopter/helicopter_f47.png`),
            require(`../images/helicopter/helicopter_f48.png`),
            require(`../images/helicopter/helicopter_f49.png`),
            require(`../images/helicopter/helicopter_f50.png`),
            require(`../images/helicopter/helicopter_f51.png`),
            require(`../images/helicopter/helicopter_f52.png`)
        ];
        this.loadFrames(this.frames);
        this.velocity.max.y = 20;
    }

    update() {
        super.update();
    }

    climb() {
        this.acceleration.y = 1;
    }

    fall() {
        this.acceleration.y = -1;
    }
}

export default Helicopter;