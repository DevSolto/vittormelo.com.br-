

import Image from "next/image"
import comment1 from "../../../public/IMG_2819.jpg"
import comment2 from "../../../public/IMG_2820.jpg"
import comment3 from "../../../public/IMG_2821.jpg"
import comment4 from "../../../public/IMG_2822.jpg"
import comment5 from "../../../public/IMG_2823.jpg"
import comment6 from "../../../public/IMG_2824.jpg"
import comment7 from "../../../public/IMG_2825.jpg"
import comment8 from "../../../public/IMG_2826.jpg"
import comment9 from "../../../public/IMG_2827.jpg"
import comment10 from "../../../public/IMG_2828.jpg"
import comment11 from "../../../public/IMG_2829.jpg"
import comment12 from "../../../public/IMG_2830.jpg"

export function Depositions() {
  return (
    <section
      id="depoimentos"
      className="w-screen flex items-center justify-center py-28 bg-red-300"
    >

      <div className="max-w-[1024px] w-full px-6 flex flex-col gap-5 lg:gap-20 text-white">
      <div className="mb-5 flex flex-col items-center justify-center lg:hidden">
          <h2 className="text-5xl text-center font-bold">Na boca do povo</h2>
          <p>Ouvir é a base do cuidado</p>
        </div>
        
        <div className="w-full flex flex-col gap-5 justify-center items-center lg:grid lg:grid-cols-3 lg:gap-16">
          <Image className="w-80 rounded-xl" src={comment2} alt="Comentário sobre Gleds" />
          <Image className="w-80 rounded-xl" src={comment1} alt="Comentário sobre Gleds" />
          <Image className="w-80 rounded-xl" src={comment3} alt="Comentário sobre Gleds" />
          <Image className="w-80 rounded-xl" src={comment4} alt="Comentário sobre Gleds" />
          <Image className="w-80 rounded-xl" src={comment5} alt="Comentário sobre Gleds" />
          <Image className="w-80 rounded-xl" src={comment6} alt="Comentário sobre Gleds" />
        </div>

        <div className="mb-5 lg:flex flex-col items-center justify-center hidden">
          <h2 className="text-5xl text-center font-bold">Na boca do povo</h2>
          <p>Ouvir é a base do cuidado</p>
        </div>

        <div className="w-full  gap-5 justify-center items-center lg:grid lg:grid-cols-3 lg:gap-16 hidden">
          <Image className="w-80 rounded-xl" src={comment7} alt="Comentário sobre Gleds" />
          <Image className="w-80 rounded-xl" src={comment9} alt="Comentário sobre Gleds" />
          <Image className="w-80 rounded-xl" src={comment8} alt="Comentário sobre Gleds" />
          <Image className="w-80 rounded-xl" src={comment10} alt="Comentário sobre Gleds" />
          <Image className="w-80 rounded-xl" src={comment11} alt="Comentário sobre Gleds" />
          <Image className="w-80 rounded-xl" src={comment12} alt="Comentário sobre Gleds" />
        </div>
      </div>
    </section>
  );
}
