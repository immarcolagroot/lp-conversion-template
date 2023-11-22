import Image from "next/image";

import HeroSection from '@/components/HeroSection'
import ImagemMontanha from '@/assets/images/01.jpeg.png'
import Card from "@/components/Card";
import Button from "@/components/Button";
import Iframe from "@/components/Iframe";

export default function Home() {
  return (
    <>

      <HeroSection />

      <div className="pt-16 pb-8 px-8 flex flex-col justify-center text-center">

        <h1 className="text-black text-6xl font-extrabold leading-[62px] pt-10">O que meus clientes têm a dizer</h1>

        <div className="pt-12 px-8 flex justify-center gap-10">

          <Card
            imagem={ImagemMontanha}
            nomeCliente="Nome do cliente"
            comentario="Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit "
          />

          <Card
            imagem={ImagemMontanha}
            nomeCliente="Nome do cliente"
            comentario="Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit "
          />

          <Card
            imagem={ImagemMontanha}
            nomeCliente="Nome do cliente"
            comentario="Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit "
          />

        </div>

        <div className="pt-14 flex justify-center">
          <Button
            title="Marcar call gratuita"
          />
        </div>

      </div>

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

    </>
  );
}
