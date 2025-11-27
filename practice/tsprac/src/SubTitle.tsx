import type { NeturalColor, SubTitleSize } from "./util/css";

type SubtitleProps = { text: string; color: NeturalColor; fontSize: `${SubTitleSize}px` };

const Subtitle = ({ color, fontSize, text }: SubtitleProps) => {
  return <div style={{ color, fontSize }}>{text}</div>;
};

export default Subtitle;
