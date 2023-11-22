import Image, { StaticImageData } from "next/image";

interface CardProps {
  nomeCliente: string;
  imagem: StaticImageData;
  comentario: string;
  onClick?: () => void;
}

export default function Card({ nomeCliente, comentario, imagem }: CardProps) {
  return (
    <div className="border border-black rounded-xl bg-gray max-w-sm overflow-hidden shadow-lg">

      <div className="flex flex-col items-center pt-7">
        <Image className="h-20 w-20 rounded-full shadow-lg" src={imagem} alt="Cliente" />
      </div>

      <div className="pt-2 pb-3">
        <h4 className="font-bold text-3xl mb-2">{nomeCliente}</h4>
        <p className="px-5 pb-9 text-gray-700 font-medium text-lg">
          {comentario}
        </p>
      </div>

    </div>
  );
}


