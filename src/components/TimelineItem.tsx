import type { MileStone } from "../App";
import { motion } from "framer-motion";

type TimelineItemProps = {
  marco: MileStone;
  isLeft: boolean;
  onClick: () => void;
};

export function TimelineItem({ marco, isLeft, onClick }: TimelineItemProps) {
  return (
    <motion.div
      // --- ENTRADA NO SCROLL ---
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8, ease: "easeOut" }}

      // --- EFEITO 3D NO HOVER ---
      whileHover={{
        scale: 1.03,
        rotateY: isLeft ? 8 : -8,
        z: 50
      }}
      style={{ perspective: 1000 }} // Cria a profundidade para o giro

      className={`mb-24 flex justify-between items-center w-full ${isLeft ? "flex-row-reverse" : ""}`}
    >
      {/* Lado Vazio para manter o zigue-zague do Felipe */}
      <div className="w-5/12"></div>

      {/* PONTO CENTRAL COM PULSAÇÃO (A "Âncora" da linha) */}
      <div className="z-20 flex items-center justify-center">
        <div className="w-4 h-4 bg-cyan-400 rounded-full shadow-[0_0_15px_#22d3ee] border-2 border-slate-900 relative">
            <div className="absolute inset-0 rounded-full bg-cyan-400 animate-ping opacity-50"></div>
        </div>
      </div>

      {/* CARD DO MARCO (A Arte do Johnn sobre a Base do Felipe) */}
      <div
        onClick={onClick}
        className="group w-5/12 bg-slate-800/20 backdrop-blur-xl rounded-3xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-500 shadow-2xl overflow-hidden cursor-pointer relative"
      >
        <div className={`h-48 w-full overflow-hidden ${marco.ehLogo ? "bg-slate-900/40" : ""}`}>
          <img
            src={marco.imagem}
            alt={marco.titulo}
            className={`w-full h-full transition-transform duration-700 group-hover:scale-110 ${
              marco.ehLogo ? "object-contain p-8" : "object-cover"
            }`}
          />
        </div>

        <div className="p-8">
          <span className="inline-block px-3 py-1 mb-4 text-[10px] font-black tracking-[0.2em] text-cyan-300 uppercase bg-cyan-500/10 rounded-full border border-cyan-500/20">
            {marco.ano}
          </span>
          <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
            {marco.titulo}
          </h3>
          <p className="text-slate-400 mt-3 text-sm line-clamp-2 leading-relaxed">
            {marco.descricao}
          </p>

          <div className="mt-6 flex items-center text-cyan-500 text-[10px] font-bold tracking-widest opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
            EXPLORAR PROTOCOLO +
          </div>
        </div>
      </div>
    </motion.div>
  );
}