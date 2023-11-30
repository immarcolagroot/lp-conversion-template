import HeroSection from "@/components/HeroSection";
import ClientesSection from "@/components/ClientesSection";
import EstudoDeCasoSection from "@/components/EstudoDeCasoSection";
import CardBeneficio from "@/components/CardBeneficio";
import Button from "@/components/Button";
import BeneficiosSection from "@/components/BeneficiosSection";
import ProcessoSection from "@/components/ProcessoSection";

export default function Home() {
  return (
    <>
      <HeroSection />

      <ClientesSection />

      <EstudoDeCasoSection />

      <BeneficiosSection />

      <ProcessoSection />

      <div className="pt-12 pb-16 px-8 flex flex-col justify-center text-center">

      <div>

        <h1 className="text-black text-6xl font-extrabold leading-[62px]">O que está incluído</h1>

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
     

    </div>

    </>
  );
}
