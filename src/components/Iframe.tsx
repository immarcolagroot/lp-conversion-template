import Image from "next/image";

import VideoLogo from "@/assets/images/Ellipse.svg";

export default function Iframe() {
    return (
        <div className="pt-14 flex justify-center">
            <div className="w-2/5 h-72 border border-black rounded-lg bg-gray flex items-center justify-center">
                <Image src={VideoLogo} alt="Video Logo" />
            </div>
        </div>
    );
}