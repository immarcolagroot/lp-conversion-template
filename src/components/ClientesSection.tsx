import ImagemMontanha from '@/assets/images/01.jpeg.png'
import Button from "@/components/Button";
import Card from "./CardCliente";

export default function ClientesSection() {
  return (
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
  );
}