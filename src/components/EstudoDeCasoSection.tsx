import Button from "@/components/Button";
import Iframe from './Iframe';

export default function EstudoDeCasoSection() {
  return (
    <div className="py-20 px-8 md:px-16 lg:p-28">
      <div className="container mx-auto items-center lg:flex">

        <div className="lg:w-1/2 w-full px-5">

          <h1 className="text-black lg:text-6xl text-5xl font-extrabold md:leading-[62px] pt-5">Estudo de caso</h1>

          <p className="py-5 text-gray-700 font-medium text-lg">
            Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
          </p>

          <div>
            <Button
              title="Eu quero os mesmos resultados"
            />
          </div>
        </div>

        <div className="lg:w-1/2 pb-14 lg:pb-0 px-5">

          <Iframe
            width="w-full"
          />

        </div>

      </div>

      <div className="container mx-auto items-center lg:flex-row-reverse lg:flex">

        <div className="w-full lg:w-1/2 px-5">

          <h1 className="text-black lg:text-6xl md:text-5xl text-4xl font-extrabold md:leading-[62px] pt-5">Estudo de caso</h1>

          <p className="py-5 text-gray-700 font-medium text-lg">
            Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
          </p>

          <div>
            <Button
              title="Eu quero os mesmos resultados"
            />
          </div>
        </div>

        <div className="lg:w-1/2 px-5">

          <Iframe
            width="w-full"
          />

        </div>

      </div >
      
    </div >
  );
}