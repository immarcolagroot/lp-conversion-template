import Button from "./Button";
import CardBeneficio from "./CardBeneficio";
import Selo from '@/assets/images/beneficio.svg'

export default function BeneficiosSection() {
    return (
        <div className="pt-16 pb-8 px-8 flex flex-col items-center text-center">

        <h1 className="text-lg:text-6xl text-5xl font-extrabold md:leading-[62px] pt-10">Um título chamativo sobre benefícios</h1>

        <div className="text-center lg:px-32 md:px-11 pt-8 text-black text-opacity-75 text-lg">
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

        <div className="flex flex-wrap justify-center gap-9 pt-12 max-w-7xl">

          <CardBeneficio
            imagem={Selo}
            titulo="Beneficio #1"
            comentario="Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit "
          />

          <CardBeneficio
            imagem={Selo}
            titulo="Beneficio #1"
            comentario="Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit "
          />

          <CardBeneficio
            imagem={Selo}
            titulo="Beneficio #1"
            comentario="Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit "
          />

        </div>

        <div className='pt-16'>
          <Button
            title="Marcar call gratuita"
          />
        </div>

      </div>
    );
  }