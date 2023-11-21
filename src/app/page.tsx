import Image from "next/image";

import CompanyLogo from "@/assets/images/LOGO.svg";
import Layer from "@/assets/images/Layer.svg";
import VideoLogo from "@/assets/images/Ellipse.svg";

export default function Home() {
  return (
    <div className="pt-12 px-8 flex flex-col justify-center text-center">
      <div>
        <h1 className="text-black text-6xl font-extrabold leading-[62px]">
          Aqui você coloca uma
          <br />
          headline chamativa
        </h1>
        <div className="text-center px-36 pt-8 text-black text-opacity-75 text-lg">
          <span className="font-normal">
            Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc{" "}
          </span>
          <span className="font-bold">vulputate libero et velit interdum</span>
          <span className="font-normal">
            , ac aliquet odio mattis. Class aptent taciti{" "}
          </span>
          <span className="font-bold">sociosqu ad litora torquent</span>
          <span className="font-normal">
            {" "}
            per conubia nostra, per inceptos himenaeos.
          </span>
        </div>
      </div>
      <div className="pt-14 flex justify-center">
        <div className="w-2/5 h-72 border border-black rounded-lg bg-gray flex items-center justify-center">
          <Image src={VideoLogo} alt="Video Logo" />
        </div>
      </div>
      <div className="pt-14 flex justify-center">
        <button className="px-4 py-3 bg-primary bg-opacity-75 rounded-md border border-black hover:bg-opacity-50 transition">
          <span className="text-white text-base font-bold">
            MARCAR CALL GRATUITA
          </span>
        </button>
      </div>
      <div className="pt-2 flex flex-row justify-center gap-1">
        <Image src={Layer} alt="Layer" />
        <span className="text-black text-opacity-50 text-base font-medium tracking-wide">
          Ligação de 30 minutos sem compromisso.
        </span>
      </div>
      <div className="flex flex-row pt-20 justify-center items-center gap-16">
        <Image src={CompanyLogo} alt="CompanyLogo" />
        <Image src={CompanyLogo} alt="CompanyLogo" />
        <Image src={CompanyLogo} alt="CompanyLogo" />
        <Image src={CompanyLogo} alt="CompanyLogo" />
        <Image src={CompanyLogo} alt="CompanyLogo" />
      </div>
    </div>
  );
}
