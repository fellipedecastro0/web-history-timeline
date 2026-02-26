// src/components/TimelineItem.tsx
import { motion } from "framer-motion";
import type { MileStone } from "../App";

interface Props {
  marco: MileStone;
  isLeft: boolean;
  onClick: () => void;
}

export function TimelineItem({ marco, isLeft, onClick }: Props) {
  return (
    <div className={`flex items-center justify-center md:justify-between mb-16 md:mb-24 w-full ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}>

      <motion.div
        initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="w-[95%] md:w-[45%] z-10"
      >
        <div
          onClick={onClick}
          className="group relative overflow-hidden rounded-[2rem] bg-slate-900/60 border border-white/10 backdrop-blur-xl hover:border-cyan-500/40 transition-all duration-500 cursor-pointer"
        >
          
          <div className={`h-48 md:h-52 overflow-hidden flex items-center justify-center relative ${marco.ehLogo ? "bg-slate-900/80" : "bg-black/30"}`}>
             <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent z-10 pointer-events-none"/>
            <img
              src={marco.imagem}
              alt={marco.titulo}
              className={`w-full h-full transition-all duration-700 group-hover:scale-105 relative z-0 opacity-60 group-hover:opacity-100 ${
                marco.ehLogo ? "object-contain p-6" : "object-cover"
              }`}
            />
          </div>

          <div className={`p-6 text-center ${isLeft ? "md:text-right" : "md:text-left"} relative z-20`}>
            <span className="text-cyan-400 font-mono text-xs tracking-widest mb-1 block">
              {marco.ano}
            </span>

            <h3 className={`text-xl font-bold mb-2 transition-colors ${
              marco.ehClaro ? "text-cyan-300" : "text-white"
            }`}>
              {marco.titulo}
            </h3>

            <p className={`text-sm md:text-xs leading-relaxed line-clamp-3 md:line-clamp-2 transition-colors ${
              marco.ehClaro ? "text-slate-300" : "text-slate-400"
            }`}>
              {marco.descricao}
            </p>
          </div>
        </div>
      </motion.div>

      <div className="hidden md:flex relative z-20 items-center justify-center w-4 h-4">
        <div className="w-4 h-4 bg-cyan-500 rounded-full shadow-[0_0_15px_#06b6d4]" />
      </div>

      <div className="hidden md:block w-[45%]" />
    </div>
  );
}