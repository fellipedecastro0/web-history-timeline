import { X } from "lucide-react";

interface ModalProps {
  item: {
    ano: string;
    titulo: string;
    descricao: string;
    imagem: string;
    ehLogo?: boolean;
  } | null;
  onClose: () => void;
}

export function Modal({ item, onClose }: ModalProps) {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={onClose}
      />

      {/* MUDANÇA: bg-white -> bg-slate-950 | text-gray-900 -> text-white */}
      <div className="relative bg-slate-950 rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl animate-in zoom-in duration-300 text-white border border-white/10">
        <button
          onClick={onClose}
          // MUDANÇA: bg-black/5 -> bg-white/10 para ser visível no fundo escuro
          className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-10"
        >
          {/* MUDANÇA: text-gray-800 -> text-white */}
          <X size={24} className="text-white" />
        </button>

        <div className="flex flex-col md:flex-row">
          <div className={`w-full md:w-1/2 h-64 md:h-auto flex items-center justify-center ${item.ehLogo ? "bg-slate-900" : "bg-black"}`}>
            <img
              src={item.imagem}
              alt={item.titulo}
              className={`w-full h-full ${item.ehLogo ? "object-contain p-8" : "object-cover"}`}
            />
          </div>

          {/* ÁREA DE TEXTO: Fundo Preto e Letras Claras */}
          <div className="p-8 md:w-1/2 flex flex-col justify-center bg-slate-950">
            <span className="text-cyan-400 font-bold text-xs uppercase tracking-widest mb-2">
              {item.ano}
            </span>
            <h2 className="text-2xl font-black mb-4 leading-tight">
              {item.titulo}
            </h2>
            {/* MUDANÇA: text-gray-600 -> text-slate-300 para melhor contraste */}
            <p className="text-slate-300 leading-relaxed text-sm">
              {item.descricao}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}