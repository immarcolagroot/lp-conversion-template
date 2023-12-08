export default function FaqSection() {
  return (
    <div className="pb-20 px-8 md:px-16 lg:px-28 flex flex-col">
        <div className="text-center">
          <h1 className="lg:text-6xl text-5xl font-extrabold leading-[62px] pb-12">
            FAQ
          </h1>
        </div>
        
        <div className="flex flex-col gap-6">
          <div className="border border-primary rounded-xl px-10 py-2 hover:bg-primary hover:text-white transition">
            <h1 className="text-3xl leading-[62px] font-medium">
              Pergunta 1
            </h1>
          </div>
          <div className="border border-primary rounded-xl px-10 py-2 hover:bg-primary hover:text-white transition">
            <h1 className="text-3xl leading-[62px] font-medium">
              Pergunta 2
            </h1>
          </div>
          <div className="border border-primary rounded-xl px-10 py-2 hover:bg-primary hover:text-white transition">
            <h1 className="text-3xl leading-[62px] font-medium">
              Pergunta 3
            </h1>
          </div>
          <div className="border border-primary rounded-xl px-10 py-2 hover:bg-primary hover:text-white transition">
            <h1 className="text-3xl leading-[62px] font-medium">
              Pergunta 4
            </h1>
          </div>
        </div>
    </div>
  );
}