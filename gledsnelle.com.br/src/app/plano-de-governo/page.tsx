import { Plan } from "@/sections/plan";
import { FaBook } from "react-icons/fa";

export default function PlanoDeGoverno() {
  return (
    <>
      <section id="inicio" className=" bg-[url(/bg_white.webp)] bg-cover bg-top text-[#E31313] w-screen flex flex-col justify-end items-center  lg:pt-0">
        <div className="px-5 max-w-[1024px] h-min  w-screen flex flex-col items-start justify-end gap-5 object-scale-down py-10">
          <h1 className="text-5xl font-extrabold flex items-center gap-5">
            <div className="bg-red-300 p-3 rounded-full">
              <FaBook size={40} className=" text-white" />
            </div>
            Plano de governo</h1>
          <p className="text-slate-900">Nosso plano de governo visa Promover o desenvolvimento sustentável e inclusivo de Remígio, garantindo qualidade de vida,
            justiça social e dignidade para todos os cidadãos. Por meio de uma gestão pública moderna e
            transparente, o plano busca fortalecer a educação, saúde, infraestrutura, segurança, e
            desenvolvimento econômico e social, urbano e rural. Além disso, valoriza a cultura local,
            incentiva o esporte, protege o meio ambiente e apoia as práticas agrícolas sustentáveis,
            assegurando que cada cidadão tenha acesso aos direitos fundamentais e oportunidades para
            prosperar em uma sociedade justa e igualitária.</p>
        </div>
      </section>
      <Plan/>
    </>
  )
}