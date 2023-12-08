import Button from "@/components/Button";
import CardEntregavel from "./CardEntregavel";

export default function EntregavelSection() {
  return (
    <div className="pt-9 px-8 flex flex-col items-center text-center">
      <div>
        <h1 className="text-black lg:text-6xl text-5xl font-extrabold leading-[62px]">
          O que está incluído
        </h1>

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
      </div>

      <div className="flex flex-wrap justify-center gap-9 pt-12 max-w-7xl">
        <CardEntregavel
          titulo="Entregável"
          imagem={require("@/assets/images/beneficio.svg")}
          comentario="Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit!"
        />
        <CardEntregavel
          titulo="Entregável"
          imagem={require("@/assets/images/beneficio.svg")}
          comentario="Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit!"
        />
        <CardEntregavel
          titulo="Entregável"
          imagem={require("@/assets/images/beneficio.svg")}
          comentario="Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit!"
        />
        <CardEntregavel
          titulo="Entregável"
          imagem={require("@/assets/images/beneficio.svg")}
          comentario="Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit!"
        />
        <CardEntregavel
          titulo="Entregável"
          imagem={require("@/assets/images/beneficio.svg")}
          comentario="Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit!"
        />
        <CardEntregavel
          titulo="Entregável"
          imagem={require("@/assets/images/beneficio.svg")}
          comentario="Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit!"
        />
      </div>

      <div className="pt-11">
        <Button title="Marcar call gratuita" />
      </div>
    </div>
  );
}
