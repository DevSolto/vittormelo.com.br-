'use client'

import { useState } from "react";
import sobre1 from "../../../public/sobre1.webp";
import sobre2 from "../../../public/sobre2.webp";
import sobre3 from "../../../public/sobre3.webp";
import sobre4 from "../../../public/sobre4.webp";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function About() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section
      id="sobre"
      className="w-screen flex items-center justify-center py-10 bg-red-300 z-0 border-none my-0"
    >
      <div className="max-w-[1024px] px-6 lg:flex lg:justify-center lg:items-center lg:gap-20">
        <div className="flex flex-col gap-5 lg:w-1/2 flex-1">
          <h2 className="text-5xl font-extrabold lg:text-5xl text-white">
            Quem é Gleds?
          </h2>
          <p className={`text-slate-50 lg:line-clamp-none ${isOpen ? '' : 'line-clamp-6'}`}>
            Olá, meus queridos! Aqui é Gleds, mas muitos de vocês me conhecem
            como 'Mainha'. Sou filha de Geraldina e Belino, apaixonada por nossa terra e
            nossa gente. Sou uma mulher guerreira, mãe, amiga e, acima de tudo,
            uma cidadã que acredita no poder da comunidade. Desde cedo, me
            dediquei a cuidar e educar. Como enfermeira ou professora, sempre
            defendi ativamente a nossa comunidade. Minha jornada é marcada pelo
            desejo de ver nossa cidade crescer e prosperar, com saúde, educação
            e igualdade para todos. Levo no coração os valores da empatia, do
            respeito e da solidariedade, que aprendi em casa e tento passar
            adiante em cada ação minha, pois acredito que assim, junto a você,
            posso fazer muito mais por Remígio. Não sou apenas uma voz, mas um
            ouvido atento às necessidades do nosso povo. Estou aqui para somar,
            para lutar e para transformar a nossa realidade. Quero guiar a
            mudança que tanto sonhamos. Juntos, somos mais fortes e levaremos
            Remígio ao futuro que merecemos. Estou aqui para isso, por vocês,
            para vocês e com vocês. Vamos nessa?
          </p>
          <div>
            <Button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-sm  text-red-300 bg-white shadow-md"
            >
              {isOpen ? 'Ver menos...' : 'Ver mais...'}
            </Button>
          </div>
        </div>
        <div className="flex gap-5 flex-1 mt-10">
          <div className="flex flex-col gap-5 mb-24">
            <div className="rounded-xl overflow-hidden">
              <Image src={sobre1} alt="" className="w-full h-full" />
            </div>
            <div className="rounded-xl overflow-hidden">
              <Image src={sobre2} alt="" className="w-full h-full" />
            </div>
          </div>
          <div className="flex flex-col gap-5 mt-24">
            <div className="rounded-xl overflow-hidden">
              <Image src={sobre3} alt="" className="w-full h-full" />
            </div>
            <div className="rounded-xl overflow-hidden">
              <Image src={sobre4} alt="" className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
