import Button from "./Button";

export default function ProcessoSection() {
  return (
    <div className="p-28">
      <div className="container mx-auto flex ">
        <div className="w-full md:w-1/2 px-7">
          <h1 className="text-black text-6xl font-extrabold leading-[62px] pt-5">
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

        <div className="md:w-1/2 px-7">
          <div>
            <h3 className="text-black text-5xl font-medium leading-[62px] pt-5">
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
            <h3 className="text-black text-5xl font-medium leading-[62px] pt-5">
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
            <h3 className="text-black text-5xl font-medium leading-[62px] pt-5">
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
            <h3 className="text-black text-5xl font-medium leading-[62px] pt-5">
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
