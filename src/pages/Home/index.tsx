import { useAnimate } from "framer-motion";
import React, { type FC, type HTMLProps, useEffect } from "react";
import "./style.scss";

const Home: FC<HTMLProps<HTMLDivElement>> = (props) => {
  const { ...rest } = props;
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const sequence = async (): Promise<void> => {
      await animate(
        "h2",
        { y: [20, 0], opacity: [0, 1] },
        { duration: 0.8, delay: 0.2 },
      );
      await animate("p", { y: [20, 0], opacity: [0, 1] }, { duration: 0.8 });
    };
    void sequence();
  }, []);

  return (
    <div ref={scope} className="home" {...rest}>
      <h2 className="english title text">MY PORTFOLIO.</h2>
      <p className="english passage text">In simplicity lies complexity.</p>
    </div>
  );
};

export default Home;
