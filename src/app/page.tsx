import HeroSection from "@/components/HeroSection";
import ClientesSection from "@/components/ClientesSection";
import EstudoDeCasoSection from "@/components/EstudoDeCasoSection";
import CardBeneficio from "@/components/CardBeneficio";
import Button from "@/components/Button";
import BeneficiosSection from "@/components/BeneficiosSection";
import ProcessoSection from "@/components/ProcessoSection";
import CardEntregavel from "@/components/CardEntregavel";
import EntregavelSection from "@/components/EntregavelSection";
import Iframe from "@/components/Iframe";

export default function Home() {
  return (
    <>
      <HeroSection />

      <ClientesSection />

      <EstudoDeCasoSection />

      <BeneficiosSection />

      <ProcessoSection />

      <EntregavelSection />

      <ClientesSection />

      <div className="px-28 py-52">
        <div className="container mx-auto flex text-center flex-row-reverse">
          <div className="w-full md:w-1/2 px-7">
            <h1 className="text-black text-6xl font-extrabold leading-[62px] pt-5">
              Quem sou eu
            </h1>

            <p className="py-5 text-gray-700 font-medium text-lg">
              Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos.
            </p>

            <p className="pt-5 pb-9 text-gray-700 font-medium text-lg">
              Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos.
            </p>

            <div>
              <Button title="Marcar call gratuita" />
            </div>
          </div>

          <div className="w-1/2 px-7">
            <Iframe width="w-full" />
          </div>
        </div>
      </div>

      <div className="px-28 flex flex-col items-center text-center">
        <div>          
          <h1 className="text-black text-6xl font-extrabold leading-[62px] pb-12">
            FAQ
          </h1>

          <div className="border border-primary rounded-xl px-10">
            <h1 className="text-black text-3xl leading-[62px] font-medium">
              pergunta 1
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
