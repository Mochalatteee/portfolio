 
 
import { FC, useEffect, useRef } from 'react';
import P5 from 'p5';
import { Line } from '../../components/line';
import { Node } from '../../components/node';

const WindowWidth = window.innerWidth * 0.5;
const WindowHeight = window.innerHeight * 0.9;

const colorThemes = {
  Mondrian: ['#014a97', '#d4121a', '#f0ce06', '#0e2721', '#e0e5e7'],
  Monet: ['#386898', '#486078', '#204058', '#88a0b0', '#c86868'],
  DunHuang: ['#954b45', '#9e4e3e', '#0065a9', '#e5e1cf', '#1c1514'],
};

let phase: 'init' | 'branch' | 'child' = 'init';
let mainPos = WindowHeight / 10;
let branchLength = 0;
const branches: Line[] = [];
let count = 0;
let nowBranch = -1;

const ListContext: FC<{ theme?: keyof typeof colorThemes }> = ({ theme = 'Mondrian' }) => {
  const colors = colorThemes[theme];

  const node = useRef(null);
  const p5Instance = useRef<P5 | undefined>(undefined);

  useEffect(() => {
    // 重置全局变量
    phase = 'init';
    mainPos = WindowHeight / 10;
    branchLength = 0;
    branches.length = 0; // 清空数组
    count = 0;
    nowBranch = -1;

    if (node.current) {
      if (p5Instance.current) {
        p5Instance.current.remove();
      }
      p5Instance.current = new P5(context, node.current);
      return () => {
        if (p5Instance.current) {
          p5Instance.current.remove();
        }
      };
    }
  }, [theme]);

  const onDoubleClick = () => {
    if (p5Instance.current) {
      p5Instance.current.save(
        `img_${p5Instance.current.hour()}-${p5Instance.current.minute()}-${p5Instance.current.second()}.jpg`,
      );
    }
  };

  const context = (p5: P5) => {
    p5.setup = function () {
      p5.createCanvas(WindowWidth, WindowHeight);

      // 背景底色
      p5.background('#cccccc00');
    };

    p5.draw = function () {
      if (phase === 'init') {
        p5.push();
        p5.strokeWeight(0.5);
        for (let dx = 0; dx < p5.width; dx += p5.random(1, 3)) {
          for (let dy = 0; dy < p5.height; dy += p5.random(1, 3)) {
            const pointX = dx;
            const pointY = dy;
            if (
              p5.random() >
              p5.dist(pointX, pointY, WindowWidth / 2, WindowHeight / 2) /
                Math.pow(
                  (WindowWidth * WindowWidth + WindowHeight * WindowHeight) / 4,
                  0.5,
                )
            ) {
              p5.stroke(p5.random(colors));
              p5.point(pointX, pointY);
            }
          }
        }
        p5.pop();
        new Line(
          p5,
          { x: WindowWidth / 2, y: WindowHeight / 10 },
          { x: WindowWidth / 2, y: (WindowHeight * 9) / 10 },
          2,
          p5.random(colors),
          3,
        ).show();
        new Node(
          p5,
          { x: WindowWidth / 2, y: WindowHeight / 10 },
          30,
          30,
          p5.random(colors),
        ).show();
        phase = 'branch';
      }
      if (phase === 'branch') {
        branchLength += p5.random(WindowWidth / 25, WindowWidth / 20);
        mainPos += p5.random(WindowHeight / 15, WindowHeight / 10) / 1.5;
        count++;
        if (mainPos <= (WindowHeight * 8) / 10) {
          const newLine = new Line(
            p5,
            { x: WindowWidth / 2, y: mainPos },
            {
              x:
                WindowWidth / 2 +
                (count % 2 === 0 ? 1 : -1) *
                  p5.random(
                    branchLength * 0.3,
                    branchLength * 1.2 > WindowWidth * 0.4
                      ? WindowWidth * 0.4
                      : branchLength * 1.2,
                  ),
              y: mainPos,
            },
            2,
            p5.random(colors),
            2,
          );
          branches.push(newLine);
          newLine.show();
          new Node(
            p5,
            branches[branches.length - 1].to,
            10,
            10,
            p5.random(colors),
          ).show();
        } else {
          phase = 'child';
        }
      }
      if (phase === 'child') {
        nowBranch++;
        if (nowBranch >= branches.length) {
          p5.noLoop();
        }
        // debugger;
        const dist = branches[nowBranch].length();
        const isLeft = branches[nowBranch].from.x > branches[nowBranch].to.x;
        if (branchLength > WindowWidth / 25) {
          let branchStart = p5.random(WindowWidth / 25, WindowWidth / 20);
          while (branchStart < dist * 0.9) {
            const newChild = new Line(
              p5,
              {
                x:
                  branches[nowBranch].from.x +
                  (isLeft ? -branchStart : branchStart),
                y: branches[nowBranch].from.y,
              },
              {
                x:
                  branches[nowBranch].from.x +
                  (isLeft ? -branchStart : branchStart),
                y:
                  branches[nowBranch].from.y +
                  p5.random([-1, 1]) *
                    p5.random(WindowWidth / 30, WindowWidth / 15),
              },
              2,
              p5.random(colors),
              3,
            );
            newChild.show();
            branchStart += p5.random(WindowWidth / 25, WindowWidth / 15);
            new Node(p5, newChild.to, 20, 20, p5.random(colors)).show();
          }
        }
      }
    };
  };

  return <div ref={node} onDoubleClick={onDoubleClick} style={{ width: WindowWidth, height: WindowHeight }} />;
};

export { ListContext };
