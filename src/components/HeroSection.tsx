import Image from "next/image";

import CompanyLogo from "@/assets/images/LOGO.svg";
import Layer from "@/assets/images/Layer.svg";
import Button from "@/components/Button";
import Iframe from "./Iframe";

export default function HeroSection() {
  return (
    <div className="pt-12 pb-16 px-8 flex flex-col justify-center text-center">

      <div>

        <h1 className="text-black text-6xl font-extrabold leading-[62px]">Aqui você coloca uma <br /> headline chamativa</h1>

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

      <Iframe />

      <div className="pt-14 flex justify-center">
        <Button
          title="Marcar call gratuita"
        />
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