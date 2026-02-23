import { motion } from "framer-motion";
import type { MileStone } from "../App";

interface Props {
  marco: MileStone;
  isLeft: boolean;
  onClick: () => void;
}

export function TimelineItem({ marco, isLeft, onClick }: Props) {
  return (
    <div className={`flex items-center justify-between mb-24 w-full ${isLeft ? "flex-row" : "flex-row-reverse"}`}>

      <motion.div
        initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="w-[45%]"
      >
        <div
          onClick={onClick}
          className="group relative overflow-hidden rounded-[2rem] bg-slate-900/60 border border-white/10 backdrop-blur-xl hover:border-cyan-500/40 transition-all duration-500 cursor-pointer"
        >
          {/* FOTO NO SCROLL - ÁREA AJUSTADA */}
          {/* Aumentei a altura para h-52 e centralizei o conteúdo */}
          <div className="h-52 overflow-hidden bg-black/30 flex items-center justify-center relative">
             {/* Adicionei um gradiente sutil na base para integrar melhor com o texto abaixo */}
             <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent z-10 pointer-events-none"/>
            <img
              src={marco.imagem}
              alt={marco.titulo}
              // USEI OBJECT-CONTAIN AQUI: A imagem inteira vai aparecer sem cortes
              className="w-full h-full object-contain p-2 opacity-60 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105 relative z-0"
            />
          </div>

          <div className={`p-6 ${isLeft ? "text-right" : "text-left"} relative z-20`}>
            <span className="text-cyan-400 font-mono text-xs tracking-widest mb-1 block">{marco.ano}</span>
            <h3 className="text-xl font-bold text-white mb-2">{marco.titulo}</h3>
            <p className="text-slate-400 text-xs leading-relaxed line-clamp-2">{marco.descricao}</p>
          </div>
        </div>
      </motion.div>

      <div className="relative z-20 flex items-center justify-center w-4 h-4">
        <div className="w-4 h-4 bg-cyan-500 rounded-full shadow-[0_0_15px_#06b6d4]" />
      </div>

      <div className="w-[45%]" />
    </div>
  );
}