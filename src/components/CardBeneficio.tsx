import Image, { StaticImageData } from "next/image";

interface CardBeneficioProps {
  titulo: string;
  imagem: StaticImageData;
  comentario: string;
  onClick?: () => void;
}

export default function CardBeneficio({ titulo, comentario, imagem }: CardBeneficioProps) {
  return (
    <div className="border border-primary rounded-xl bg-gray max-w-sm overflow-hidden shadow-lg">

        <h4 className="font-bold md:text-3xl text-2xl pt-8">{titulo}</h4>
        <div className="flex flex-col items-center py-5">
          <Image className="h-12 w-11 rounded-full" src={imagem} alt="Beneficio" />
        </div>
        <p className="px-5 pb-9 text-gray-700 font-medium text-base md:text-lg">
          {comentario}
        </p>

    </div>
  );
}


