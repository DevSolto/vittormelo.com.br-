import Image from "next/image";
import img from "../../../public/logo_gleds_branca.webp"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Container } from "../container";
import Link from "next/link";

type menuItem = {
  label: string
  link: string
}

const menuItens: menuItem[] = [
  {
    label: "Inicio",
    link: "/#inicio"
  },
  {
    label: "Jingles",
    link: "/#jingles"
  },
  {
    label: "Sobre",
    link: "/#sobre"
  },
  {
    label: "Galeria",
    link: "/#galeria"
  },
  {
    label: "Depoimentos",
    link: "/#depoimentos"
  },
  {
    label: "Dicionário",
    link: "/#dicionario"
  },
]

export default function Header() {
  return (
    <header className="z-50 w-full flex items-center justify-center bg-red-300 px-6 py-4 sticky top-0">
      <Container >
          <div className="w-full flex items-center justify-between lg:flex-row-reverse">

            <nav className="hidden lg:flex items-center gap-10 text-white">
              {
                menuItens.map((menuItem) => {
                  return (
                    <a href={menuItem.link}>
                      {menuItem.label}
                    </a>
                  )
                })
              }
            </nav>
            <Link href="/">
              <Image src={img} alt="Logo de Gleds" className="w-40 z-50" />
            </Link>
            <div className="lg:hidden">
              <DropdownMenu >
                <DropdownMenuTrigger className="text-base text-white">Menu</DropdownMenuTrigger>
                <DropdownMenuContent className="bg-[#E31313] text-white w-screen translate-y-5 transition-all border-none px-8 py-4 flex flex-col items-end gap-4">
                  {
                    menuItens.map((menuItem) => {
                      return (
                        <DropdownMenuItem>
                          <a href={menuItem.link}>
                            {menuItem.label}
                          </a>
                        </DropdownMenuItem>
                      )
                    })
                  }
                </DropdownMenuContent>
              </DropdownMenu>

            </div>
          </div>
      </Container>
    </header>
  );
}
