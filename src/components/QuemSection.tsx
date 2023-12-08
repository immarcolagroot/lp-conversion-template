import Button from "./Button";
import Iframe from "./Iframe";

export default function QuemSection() {
  return (
    <div className="py-24 px-8 md:px-16 lg:px-28">
      <div className="container mx-auto lg:flex text-center flex-row-reverse">
        <div className="w-full lg:w-1/2">
          <h1 className="text-black text-5xl lg:text-6xl font-extrabold leading-[62px] pt-5">
            Quem sou eu
          </h1>

          <p className="text-center lg:px-32 md:px-11 pt-5 text-black font-medium text-lg">
            Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos.
          </p>

          <p className="text-center lg:px-32 md:px-11 pt-5 text-black pb-9 font-medium text-lg">
            Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos.
          </p>

          <div>
            <Button title="Marcar call gratuita" />
          </div>
        </div>

        <div className="lg:w-1/2 lg:pr-7">
          <Iframe width="w-full" />
        </div>
      </div>
    </div>
  );
}
