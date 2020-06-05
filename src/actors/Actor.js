import React from 'react';

class Actor {

    constructor(x, y, width, height) {
        this.currentFrame = 0;
        this.position = {
            x: x,
            y: y
        }
        this.width = width;
        this.height = height;
        this.velocity = {
            x: 0,
            y: 0,
            max: {
                x: 0,
                y: 0
            }
        }
        this.acceleration = {
            x: 0,
            y: 0
        }
    }

    loadFrames(frames) {
        this.frames = frames.map((frame) => {
            var image = new Image();
            image.src = frame;
            return image;
        });
    }

    move(x, y) {
        this.position.x += x;
        this.position.y += y;
    }

    moveTo(x, y) {
        this.position.x = x;
        this.position.y = y;
    }

    update() {
        this.velocity.x += this.acceleration.x;
        this.velocity.y += this.acceleration.y;
        this.velocity.x = Math.max(-this.velocity.max.x, Math.min(this.velocity.x, this.velocity.max.x));
        this.velocity.y = Math.max(-this.velocity.max.y, Math.min(this.velocity.y, this.velocity.max.y));
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
        this.currentFrame += 1;
        if (this.currentFrame >= this.frames.length) {
            this.currentFrame = 0;
        }
    }

    draw(ctx, canvasWidth, canvasHeight) {
        ctx.drawImage(this.frames[this.currentFrame], this.position.x - (this.width / 2), canvasHeight - this.position.y - (this.height / 2), this.width, this.height);
    }
}

export default Actor;