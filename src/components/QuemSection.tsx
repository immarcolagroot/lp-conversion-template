import Button from "./Button";
import Iframe from "./Iframe";

export default function QuemSection() {
  return (
    <div className="px-28 py-52">
      <div className="container mx-auto flex text-center flex-row-reverse">
        <div className="w-full md:w-1/2 px-7">
          <h1 className="text-black lg:text-6xl text-5xl font-extrabold leading-[62px] pt-5">
            Quem sou eu
          </h1>

          <p className="py-5 text-gray-700 font-medium text-lg">
            Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos.
          </p>

          <p className="pt-5 pb-9 text-gray-700 font-medium text-lg">
            Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos.
          </p>

          <div>
            <Button title="Marcar call gratuita" />
          </div>
        </div>

        <div className="w-1/2 px-7">
          <Iframe width="w-full" />
        </div>
      </div>
    </div>
  );
}
