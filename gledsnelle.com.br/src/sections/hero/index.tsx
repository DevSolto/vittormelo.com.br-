import logo from '../../../public/logo-gleds-colorida.webp';
import button from '../../../public/button.webp';
import avatar from '../../../public/avatar2.webp'
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '../container';

export function Hero() {
  return ( 
    <>
      <section id="inicio" className={`bg-[url(/bg_white.webp)] bg-cover bg-top text-[#E31313] w-screen flex flex-col justify-end items-center pt-10 lg:pt-0 m-0`}>
        <Container>
          <div className='w-full flex items-end justify-between'>
            {/* Mobile View */}
            <div className="max-w-[1024px] h-min w-screen flex flex-col items-center justify-end gap-5 lg:hidden object-scale-down">
              <div className="flex-1 lg:w-[50%] px-6">
                <Image src={logo} alt="Logo" />
              </div>  
              <Image alt='Foto de Gleds e Simone' src={avatar} className='w-full max-w-[550px] lg:w-1/2' />
              <Link href="/plano-de-governo" className="px-5">
                <Image src={button} alt="Botão de acesso ao plano de governo" />
              </Link>
            </div>

            {/* Desktop View */}
            <div className="max-w-[1024px] w-screen items-end justify-end gap-5 lg:grid grid-cols-2 hidden object-scale-down">
              <div className="h-full flex flex-col items-center justify-center gap-5">
                <div className="px-6">
                  <Image src={logo} alt="Logo" />
                </div>
                <Link href="/plano-de-governo" className="px-5 flex justify-center">
                  <Image src={button} alt="Botão de acesso ao plano de governo" className="w-2/3" />
                </Link>
              </div>
              <Image alt='Foto de Gleds e Simone' src={avatar} className='w-full pt-10 pb-0 mb-0' />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
