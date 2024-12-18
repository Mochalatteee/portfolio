import { dot } from './types';
import P5 from 'p5';

export class Line {
  p5: P5;
  from: dot;
  to: dot;
  times: number;
  color: string;
  thickness: number;
  constructor(
    p5: P5,
    from: dot,
    to: dot,
    times: number,
    color: string,
    thickness: number,
  ) {
    this.p5 = p5;
    this.from = from;
    this.to = to;
    this.times = times;
    this.color = color;
    this.thickness = thickness;
  }

  show() {
    this.p5.push();

    // 以 from 为原点 dist, 0 为 to 的坐标系
    this.p5.translate(this.from.x, this.from.y);
    this.p5.rotate(
      this.p5.atan2(this.to.y - this.from.y, this.to.x - this.from.x),
    );
    this.p5.stroke(this.color);
    this.p5.strokeWeight(1.5);
    const dist = this.p5.dist(this.from.x, this.from.y, this.to.x, this.to.y);
    const period = dist / this.times;
    for (let x = 0; x <= dist; x++) {
      for (let offset = 0; offset < 0.5; offset += 0.25) {
        if (this.p5.random() > 0.2) {
          this.p5.point(
            x,
            this.p5.sin((x * this.p5.PI * 2) / period + offset * period) *
              this.thickness,
          );
        }
      }
      if (this.p5.random() > 0.2) {
        this.p5.point(x, 0);
      }
    }

    this.p5.pop();
  }

  length() {
    return this.p5.dist(this.from.x, this.from.y, this.to.x, this.to.y);
  }
}
