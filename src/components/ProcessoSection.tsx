import Button from "./Button";

export default function ProcessoSection() {
  return (
    <div className="py-28 px-8 md:px-16 lg:px-28">
      <div className="container mx-auto lg:flex">
        <div className="w-full lg:w-1/2 px-7">
          <h1 className="text-black lg:text-6xl text-5xl  font-extrabold md:leading-[62px] pt-5">
            Nosso <br /> processo
          </h1>

          <p className="py-5 text-gray-700 font-medium text-lg">
            Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos.
          </p>

          <div>
            <Button title="marcar call gratuita" />
          </div>
        </div>

        <div className="lg:w-1/2 px-7">
          <div>
            <h3 className="text-black lg:text-6xl md:text-5xl text-4xl font-medium leading-[62px] pt-10 lg:pt-0">
              Passo #1
            </h3>

            <p className="py-5 text-gray-700 font-medium text-lg">
              Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc{" "}
              <strong>vulputate libero et velit interdum, ac aliquet</strong>{" "}
              odio mattis. Class aptent taciti sociosqu ad litora torquent per
              conubia nostra, per inceptos himenaeos.
            </p>
          </div>

          <div>
            <h3 className="text-black lg:text-6xl md:text-5xl text-4xl font-medium leading-[62px]">
              Passo #2
            </h3>

            <p className="py-5 text-gray-700 font-medium text-lg">
              Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc{" "}
              <strong>vulputate libero et velit interdum, ac aliquet</strong>{" "}
              odio mattis. Class aptent taciti sociosqu ad litora torquent per
              conubia nostra, per inceptos himenaeos.
            </p>
          </div>

          <div>
            <h3 className="text-black lg:text-6xl md:text-5xl text-4xl font-medium leading-[62px]">
              Passo #3
            </h3>

            <p className="py-5 text-gray-700 font-medium text-lg">
              Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc{" "}
              <strong>vulputate libero et velit interdum, ac aliquet</strong>{" "}
              odio mattis. Class aptent taciti sociosqu ad litora torquent per
              conubia nostra, per inceptos himenaeos.
            </p>
          </div>

          <div>
            <h3 className="text-black lg:text-6xl md:text-5xl text-4xl font-medium leading-[62px]">
              Passo #4
            </h3>

            <p className="py-5 text-gray-700 font-medium text-lg">
              Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc{" "}
              <strong>vulputate libero et velit interdum, ac aliquet</strong>{" "}
              odio mattis. Class aptent taciti sociosqu ad litora torquent per
              conubia nostra, per inceptos himenaeos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
