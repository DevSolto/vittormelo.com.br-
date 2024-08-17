export function Dictionary() {
  return (
    <section
      id="dicionario"
      className=" w-screen flex justify-center items-center py-28 bg-main"
    >
      <div className="text-zinc-800  max-w-[1024px] px-6 w-screen flex flex-col items-start justify-center gap-16">
        <div className=" flex flex-col items-start justify-center">
          <h2 className="text-5xl  font-bold">
            <span className="text-green-300">D</span>
            <span className="text-purple-300">i</span>
            <span className="text-pink-300">c</span>
            <span className="text-green-300">i</span>
            <span className="text-purple-300">o</span>
            <span className="text-pink-300">n</span>
            <span className="text-green-300">á</span>
            <span className="text-purple-300">r</span>
            <span className="text-pink-300">i</span>
            <span className="text-green-300">o</span>
            <span> </span>
            <span className="text-purple-300">d</span>
            <span className="text-pink-300">e</span>
            <span> </span>
            <span className="text-green-300">G</span>
            <span className="text-purple-300">l</span>
            <span className="text-pink-300">e</span>
            <span className="text-green-300">d</span>
            <span className="text-purple-300">s</span>
          </h2>
          <p>Entenda como eu falo</p>
        </div>

        <div className="w-full grid lg:grid-cols-2 gap-5">
          <div className="flex flex-col  gap-5">
            <div>
              <p className="text-3xl font-bold text-blue-300">É grave:</p>
              <p>Quando o assunto é sério, pesado ou de grande impacto</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-green-300">Top top top:</p>
              <p>Quando é algo ótimo, excelente, melhor que o esperado</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-pink-300">Você é show:</p>
              <p>Uma pessoa ótima, incrível ou impressionante</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-purple-300">Meu bixinho:</p>
              <p>Forma carinhosa de se referir a alguém</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-green-300">Meu amorrrr:</p>
              <p>Uma pessoa muito querida</p>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div>
              <p className="text-3xl font-bold text-purple-300">Abalou:</p>
              <p>Causou impacto, surpresa ou impressionou</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-pink-300">Terrinha:</p>
              <p>Nossa cidade de Remígio</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-green-300">Oxe:</p>
              <p>Surpresa, espanto, incredulidade</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-blue-300">Simbora:</p>
              <p>Vamos lá!</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-pink-300">Agora pronto:</p>
              <p>Quando algo causa espanto, indignação, revolta,etc.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
