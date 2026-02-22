import type { MileStone } from "../App";

type TimelineItemProps = {
  marco: MileStone;
  isLeft: boolean;
  onClick: () => void;
};

export function TimelineItem({ marco, isLeft,onClick }: TimelineItemProps) {
  return (
    <div
      className={`mb-16 flex justify-between items-center w-full ${isLeft ? "flex-row-reverse" : ""}`}
    >
     
      <div className="w-5/12"></div>

      <div className="z-10 w-4 h-4 bg-cyan-400 rounded-full shadow-[0_0_20px_#22d3ee] border-2 border-slate-900"></div>

      <div 
      onClick={onClick}
      className="group w-5/12 bg-slate-800/30 backdrop-blur-md rounded-2xl border border-slate-700/50 hover:border-cyan-500/50 hover:bg-slate-800/50 hover:-translate-y-2 transition-all duration-300 shadow-xl overflow-hidden cursor-pointer">
        <div
          className={`h-48 w-full overflow-hidden ${marco.ehLogo ? "bg-slate-900/50" : ""}`}
        >

          <img
            src={marco.imagem}
            alt={marco.titulo}
            
            className={`w-full h-full transition-transform duration-500 group-hover:scale-110 ${
              marco.ehLogo ? "object-contain p-4" : "object-cover"
            }`}
          />
        </div>

        <div className="p-6">
          <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider text-cyan-300 uppercase bg-cyan-500/10 rounded-full border border-cyan-500/20">
            {marco.ano}
          </span>
          <h3 className="text-xl md:text-2xl font-bold text-slate-100">
            {marco.titulo}
          </h3>

          <p className="text-slate-400 mt-2 text-sm line-clamp-2">
            {marco.descricao}
          </p>
        </div>
      </div>
    </div>
  );
}
