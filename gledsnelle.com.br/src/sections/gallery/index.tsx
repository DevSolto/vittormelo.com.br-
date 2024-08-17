export function Gallery() {
  return (
    <section
      id="galeria"
      className="w-screen flex items-center justify-center py-28 bg-[url(/bg_white.webp)]"
    >
      <div className="max-w-[1024px]  w-full px-6 flex flex-col lg:gap-20 justify-center items-center text-red-300">
        <div className="mb-5">
          <h2 className="text-5xl font-bold ">Nossos momentos</h2>
          <p className="text-slate-800">Memórias da nossa jornada de mudança</p>
        </div>
        <div className="w-full hidden lg:grid grid-cols-1 lg:grid-rows-3 gap-y-5 gap-x-5 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg bg-[url(/1.webp)] bg-center bg-cover h-80 lg:h-full lg:row-span-2"></div>
          <div className="rounded-lg bg-[url(/2.webp)] bg-center bg-cover h-80 lg:h-60 "></div>
          <div className="rounded-lg bg-[url(/3.webp)] bg-center bg-cover h-80 lg:h-60 "></div>
          <div className="rounded-lg bg-[url(/4.webp)] bg-center bg-cover h-80 lg:h-60 "></div>
          <div className="rounded-lg bg-[url(/5.webp)] bg-center bg-cover h-80 lg:h-full lg:row-span-2"></div>
          <div className="rounded-lg bg-[url(/6.webp)] bg-center bg-cover h-80 lg:h-60"></div>
          <div className="rounded-lg bg-[url(/7.webp)] bg-center bg-cover h-80 lg:h-60"></div>
        </div>
        <div className="w-full max-w-96 h-[500px] md:h-[700px] lg:hidden grid grid-cols-2 lg:grid-rows-3 gap-3 md:grid-cols-2 lg:grid-cols-3">
          <div className="grid grid-rows-[20] gap-3 ">
            <div className="rounded-lg bg-[url(/6.webp)] bg-center bg-cover row-span-3"></div>
            <div className="rounded-lg bg-[url(/5.webp)] bg-center bg-cover row-span-6 "></div>
            <div className="rounded-lg bg-[url(/7.webp)] bg-center bg-cover row-span-5 "></div>
            <div className="rounded-lg bg-[url(/2.webp)] bg-top bg-cover row-span-6 "></div>
          </div>
          <div className="grid grid-rows-[20] gap-3 ">
            <div className="rounded-lg bg-[url(/1.webp)] bg-center bg-cover row-span-9 "></div>
            <div className="rounded-lg bg-[url(/3.webp)] bg-center bg-cover row-span-4 "></div>
            <div className="rounded-lg bg-[url(/4.webp)] bg-center bg-cover row-span-7 "></div>
          </div>
        </div>
      </div>
    </section>
  );
}
