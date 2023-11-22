import Image from "next/image";
import VideoLogo from "@/assets/images/Ellipse.svg";

interface IframeProps {
  width?: string;
}

export default function Iframe({ width = "w-2/5" }: IframeProps) {
  return (
    <div className={`pt-14 flex justify-center`}>
      <div className={`${width} h-72 border border-black rounded-lg bg-gray flex items-center justify-center`}>
        <Image src={VideoLogo} alt="Video Logo" />
      </div>
    </div>
  );
}