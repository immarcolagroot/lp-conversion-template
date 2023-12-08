import Image, { StaticImageData } from "next/image";

interface CardEntregavelProps {
  titulo: string;
  imagem: StaticImageData;
  comentario: string;
  onClick?: () => void;
}

export default function CardEntregavel({
  titulo,
  comentario,
  imagem,
}: CardEntregavelProps) {
  return (
    <div className="border border-primary rounded-xl bg-gray max-w-sm overflow-hidden shadow-lg">
      <div className="flex items-center justify-center gap-3 pb-4 pt-11 px-14">
        <Image
          className="h-12 w-11 rounded-full "
          src={imagem}
          alt="Entregavel"
        />

        <h4 className="font-bold md:text-3xl text-2xl">{titulo}</h4>
      </div>

      <p className="px-5 pb-9 text-gray-700 font-medium text-base md:text-lg">
        {comentario}
      </p>
    </div>
  );
}
