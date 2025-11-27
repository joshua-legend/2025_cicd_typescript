import type { HeadingSize, NeturalColor } from "./util/css";

type HeadingProps = { text: string; color: NeturalColor; Tag: "h1" | "h2" | "h3"; fontSize: `${HeadingSize}px` };

const Heading = ({ color, fontSize, Tag, text }: HeadingProps) => {
  return <Tag style={{ color, fontSize }}>{text}</Tag>;
};

export default Heading;
