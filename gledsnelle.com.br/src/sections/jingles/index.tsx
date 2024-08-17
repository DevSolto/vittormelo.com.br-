import { Button } from "@/components/ui/button";
import { Container } from "../container";
import image from '../../../public/avata_jingles.webp'
import Image from "next/image";

export function Jingles() {
  return (
    <section
      id="jingles"
      className="w-screen flex items-center justify-center mt-5 lg:my-0 py-10 bg-red-300 z-0 border-none"
    >
      <Container>

        <div className="px-6 lg:flex lg:justify-center lg:items-center lg:gap-20 space-y-5">

          <div className="flex gap-5 flex-1 mt-10">
            <Image alt="Foto de Gleds e Simone" src={image} />
          </div>
          <div className="flex flex-col gap-5 lg:w-1/2 flex-1">
            <h2 className="text-5xl font-extrabold lg:text-5xl text-white">
              Solta o Som da Mudança!
            </h2>
            <p className="text-slate-50">
              Quer entrar no clima da nossa campanha? Aqui você pode baixar os jingles oficiais e sair cantando por aí! Bora fazer barulho juntos e mostrar que a mudança já começou! Compartilhe com os amigos, toque nas festas e ajude a espalhar essa energia positiva por toda a cidade. Vem com a gente nessa!
            </p>
            <a href="https://www.suamusica.com.br/">
              <Button 
                className="text-sm text-red-300 bg-white shadow-md"
              >
                Baixar Jingles!
              </Button>
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}