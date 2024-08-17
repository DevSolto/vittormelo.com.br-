import { FaArrowUp } from "react-icons/fa";


export function Footer() {
  return (
    <section
      id="contato"
      className="bg-main w-screen flex justify-center items-center py-5"
    >
      <div className="text-red-300 px-6 w-screen flex items-center justify-between max-w-[1024px]">
        <p className=" w-full text-xs lg:text-sm">586.329.804-91 - Av. Manoel de Barros, 86, Centro, Remigio - PB 58.398-000</p>
        <a href="#inicio" className="w-14 h-12 flex items-center justify-center bg-red-300 text-white rounded-full">
          <FaArrowUp />
        </a>
      </div>
    </section>
  );
}
