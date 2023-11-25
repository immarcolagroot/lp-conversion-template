import HeroSection from '@/components/HeroSection'
import ClientesSection from "@/components/ClientesSection";
import EstudoDeCasoSection from "@/components/EstudoDeCasoSection";
import ImagemMontanha from '@/assets/images/beneficio.svg'
import CardBeneficio from '@/components/CardBeneficio';

export default function Home() {
  return (
    <>

      <HeroSection />

      <ClientesSection />

      <EstudoDeCasoSection />

      <div className="pt-16 pb-8 px-8 flex flex-col justify-center text-center">

        <h1 className="text-black text-6xl font-extrabold leading-[62px] pt-10">Um título chamativo sobre benefícios</h1>

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

        <div className="pt-12 px-8 flex justify-center gap-10">

          <CardBeneficio
            imagem={ImagemMontanha}
            titulo="Beneficio #1"
            comentario="Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit "
          />

          <CardBeneficio
            imagem={ImagemMontanha}
            titulo="Beneficio #1"
            comentario="Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit "
          />

          <CardBeneficio
            imagem={ImagemMontanha}
            titulo="Beneficio #1"
            comentario="Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit "
          />

        </div>

      </div>

    </>
  );
}
