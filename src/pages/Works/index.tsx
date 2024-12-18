/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, {
  type FC,
  type HTMLAttributes,
  type HTMLProps,
  useRef,
} from "react";
import "./style.scss";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { url2path } from "../../util/url";
// import List from './CodeArt/work/list'

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

interface ImageProps extends HTMLAttributes<HTMLElement> {
  imgId: number;
}
const Image: FC<ImageProps> = (props) => {
  const { imgId, ...rest } = props;
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);
  const content = [
    {
      title: "全链接层",
      subtitle: "Nested Asscociation List",
      detail:
        "「DATA STRUCTURE」可视化系列之一，链表由一系列节点组成，每个节点包含数据和指向下一个节点的引用。作为数据节点的连漪在枝干上不断嵌套繁殖，构成数字性的枝条记录以繁杂的信息。",
    },
    {
      title: "嵌套列表",
      subtitle: "Nested Asscociation List",
      detail:
        "「DATA STRUCTURE」可视化系列之一，链表由一系列节点组成，每个节点包含数据和指向下一个节点的引用。作为数据节点的连漪在枝干上不断嵌套繁殖，构成数字性的枝条记录以繁杂的信息。",
    },
    {
      title: "嵌套列表",
      subtitle: "Nested Asscociation List",
      detail:
        "「DATA STRUCTURE」可视化系列之一，链表由一系列节点组成，每个节点包含数据和指向下一个节点的引用。作为数据节点的连漪在枝干上不断嵌套繁殖，构成数字性的枝条记录以繁杂的信息。",
    },
    {
      title: "嵌套列表",
      subtitle: "Nested Asscociation List",
      detail:
        "「DATA STRUCTURE」可视化系列之一，链表由一系列节点组成，每个节点包含数据和指向下一个节点的引用。作为数据节点的连漪在枝干上不断嵌套繁殖，构成数字性的枝条记录以繁杂的信息。",
    },
  ];
  return (
    <section {...rest}>
      <div className="work-ctn">
        <div className="detail-ctn">
          <div>
            <div className="work-title">{content[imgId - 1].title}</div>
            <div className="divider"></div>
            <div className="work-subtitle">{content[imgId - 1].subtitle}</div>
          </div>

          <div className="work-detail">{content[imgId - 1].detail}</div>
        </div>

        <div className="work-pic-ctn" ref={ref}>
          <img
            className="work-pic"
            src={url2path(`/img/${imgId}.jpg`)}
            key={`tasks-image-img-${imgId}`}
            alt="My work"
          />
        </div>
      </div>
      <motion.h2 className="work-li" style={{ y }}>{`0${imgId}.`}</motion.h2>
    </section>
  );
};

const Works: FC<HTMLProps<HTMLDivElement>> = (props) => {
  //   const [theme, setTheme] = useState<'Mondrian' | 'Monet' | 'DunHuang' >('Mondrian')
  const { ...rest } = props;

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  //   return (
  //     <>
  //         <div className='works'>
  //         <h2 className="english title text">MY WORKS.</h2>
  //         {/* <select
  //             value={theme}
  //             onChange={(e) => setTheme(e.target.value as typeof theme)}
  //             className="theme-selector"
  //         >
  //             <option value="Mondrian">Mondrian</option>
  //             <option value="Monet">Monet</option>
  //             <option value="DunHuang">DunHuang</option>
  //         </select> */}
  //         {/* <List theme={theme} /> */}
  //         </div>

  //     </>
  //   )
  return (
    <div {...rest}>
      <div className="work">
        {[1, 2, 3, 4].map((image, index) => (
          <Image key={`work-image-${index}`} imgId={image} />
        ))}
        <motion.div className="progress" style={{ scaleX }} />
      </div>
    </div>
  );
};

export default Works;
