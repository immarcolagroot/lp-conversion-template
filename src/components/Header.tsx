import Image from "next/image";

import CompanyLogo from "@/assets/images/LOGO.svg";
import NavButton from "@/components/NavButton";

export default function Header() {
  return (
    <header>
      <div className="w-full h-16 flex justify-between items-center px-8 py-4">
        <div className="flex-1">
          <Image src={CompanyLogo} alt="Logo" width={90} height={45} />
        </div>
        <div className="w-72 flex gap-4">
          {/* TODO implement onClick method */}
          <NavButton title="PROCESSOS" />
          <NavButton title="DEPOIMENTOS" />
          <NavButton title="SOBRE" />
        </div>
        <div className="flex-1 flex justify-end">
          <button className="h-10 px-4 py-2 bg-primary bg-opacity-40 rounded-2xl border border-black hover:bg-opacity-25">
            <span className="text-black text-base font-bold">
              MARCAR CALL GRATUITA
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
