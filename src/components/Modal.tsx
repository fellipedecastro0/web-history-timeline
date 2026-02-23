// src/components/Modal.tsx
import { X } from "lucide-react";

interface ModalProps {
  item: {
    ano: string;
    titulo: string;
    descricao: string;
    imagem: string;
  } | null;
  onClose: () => void;
}

export function Modal({ item, onClose }: ModalProps) {
  // Se não tiver nenhum item selecionado, não mostra nada
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Fundo escuro */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={onClose}
      />

      {/* Caixa do Modal */}
      <div className="relative bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl animate-in zoom-in duration-300 text-gray-900">
        {/* Botão de Fechar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-black/5 hover:bg-black/10 rounded-full transition-colors z-10"
        >
          <X size={24} className="text-gray-800" />
        </button>

        <div className="flex flex-col md:flex-row">
          {/* Imagem do Marco */}
          <div className="w-full md:w-1/2 h-64 md:h-auto bg-gray-100">
            <img
              src={item.imagem}
              alt={item.titulo}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Textos do Marco */}
          <div className="p-8 md:w-1/2 flex flex-col justify-center">
            <span className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-2">
              {item.ano}
            </span>
            <h2 className="text-2xl font-black mb-4 leading-tight">
              {item.titulo}
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm">
              {item.descricao}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}