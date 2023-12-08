import Button from "./Button";

export default function AlcancarSection() {
    return (
        <div className="flex justify-center py-32">

        <div className="w-3/4 border-2 border-primary rounded-3xl shadow-3xl flex flex-col items-center">
          <div className="text-center pt-14 w-4/5">
            <h1 className="text-black lg:text-6xl text-5xl font-extrabold leading-[62px]">
              Pronto para alcançar XYZ?
            </h1>
          </div>

          <div className="text-center w-4/5">
            <div className="lg:px-14 md:px-11 py-7">
              <p className="text-gray-700 font-medium text-lg">
                Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                <strong>vulputate libero et velit interdum</strong> , ac aliquet
                odio mattis. Class aptent taciti{" "}
                <strong>sociosqu ad litora torquent</strong> per conubia nostra,
                per inceptos himenaeos.
              </p>
            </div>

            <div className="pb-14">
              <Button title="Sim! estou pronto" />
            </div>
          </div>

        </div>
      </div>
    );
  }