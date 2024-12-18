import React, { type HTMLProps, type FC } from "react";
import "./style.scss";

const About: FC<HTMLProps<HTMLDivElement>> = (props) => {
  const { ...rest } = props;

  return (
    <div className="about" {...rest}>
      {/* 你的 About 页面内容 */}
      <h2>About</h2>
    </div>
  );
};

export default About;
