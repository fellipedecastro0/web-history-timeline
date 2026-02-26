import { motion } from "framer-motion";
import type { MileStone } from "../App";

interface Props {
  marco: MileStone;
  isLeft: boolean;
  onClick: () => void;
}

// O erro aconteceu porque o Vite não encontrou este 'export' abaixo
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
          {/* FOTO NO SCROLL */}
          <div className={`h-52 overflow-hidden flex items-center justify-center relative ${marco.ehLogo ? "bg-slate-900/80" : "bg-black/30"}`}>
             <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent z-10 pointer-events-none"/>
            <img
              src={marco.imagem}
              alt={marco.titulo}
              className={`w-full h-full transition-all duration-700 group-hover:scale-105 relative z-0 opacity-60 group-hover:opacity-100 ${
                marco.ehLogo ? "object-contain p-6" : "object-cover"
              }`}
            />
          </div>

          <div className={`p-6 ${isLeft ? "text-right" : "text-left"} relative z-20`}>
            <span className="text-cyan-400 font-mono text-xs tracking-widest mb-1 block">
              {marco.ano}
            </span>

            {/* AQUI ESTÁ A MUDANÇA DE "TOM" BASEADA NO EHCLARO */}
            <h3 className={`text-xl font-bold mb-2 transition-colors ${
              marco.ehClaro ? "text-cyan-300" : "text-white"
            }`}>
              {marco.titulo}
            </h3>

            <p className={`text-xs leading-relaxed line-clamp-2 transition-colors ${
              marco.ehClaro ? "text-slate-300" : "text-slate-400"
            }`}>
              {marco.descricao}
            </p>
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