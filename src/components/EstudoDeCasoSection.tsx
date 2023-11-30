import Button from "@/components/Button";
import Iframe from './Iframe';

export default function EstudoDeCasoSection() {
  return (
    <div className="py-28 px-28">
      <div className="container mx-auto flex items-center">

        <div className="w-full md:w-1/2 px-7">

          <h1 className="text-black text-6xl font-extrabold leading-[62px] pt-5">Estudo de caso</h1>

          <p className="py-5 text-gray-700 font-medium text-lg">
            Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
          </p>

          <div>
            <Button
              title="Eu quero os mesmos resultados"
            />
          </div>
        </div>

        <div className="w-1/2 px-7">

          <Iframe
            width="w-full"
          />

        </div>

      </div>

      <div className="container mx-auto flex items-center flex-row-reverse">

        <div className="w-full md:w-1/2 px-7">

          <h1 className="text-black text-6xl font-extrabold leading-[62px] pt-5">Estudo de caso</h1>

          <p className="py-5 text-gray-700 font-medium text-lg">
            Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
          </p>

          <div>
            <Button
              title="Eu quero os mesmos resultados"
            />
          </div>
        </div>

        <div className="w-1/2 px-7">

          <Iframe
            width="w-full"
          />

        </div>

      </div >
      
    </div >
  );
}