 
import { dot } from './types';
import P5 from 'p5';

export class Node {
  p5: P5;
  center: dot;
  r: number;
  depth: number;
  color: P5.Color;
  constructor(p5: P5, center: dot, r: number, depth: number, color: string) {
    this.p5 = p5;
    this.center = center;
    this.r = r;
    this.depth = depth;
    this.color = this.p5.color(color);
  }

  show() {
    this.p5.push();

    // move the circle
    this.p5.translate(this.center.x, this.center.y);

    // create the circle
    for (let i = 0; i < this.depth; i++) {
      this.p5.rotate(this.p5.random(2 * this.p5.PI));
      for (let n = 0; n <= 500; n++) {
        const x = this.p5.cos((this.p5.TWO_PI / n) * 30) * (this.r - i);
        const y = this.p5.sin((this.p5.TWO_PI / n) * 30) * (this.r - i);
        if (this.p5.random() !== 0) {
          this.p5.push();
          this.color.setAlpha((100 / this.depth) * i);
          this.p5.stroke(this.color);
          this.p5.point(x, y);
          this.p5.pop();
        }
      }
    }

    this.p5.pop();
  }
}
