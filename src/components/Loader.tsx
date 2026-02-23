// src/components/Loader.tsx
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Loader({ onFinished }: { onFinished: () => void }) {
  const [text, setText] = useState("");
  const messages = [
    "> Iniciando protocolo HTTP...",
    "> Conectando ao CERN (1989)...",
    "> Injetando JavaScript no motor...",
    "> Renderizando a Linha do Tempo...",
    "> Web History Ready."
  ];

  useEffect(() => {
    let currentLine = 0;
    const interval = setInterval(() => {
      if (currentLine < messages.length) {
        setText(prev => prev + messages[currentLine] + "\n");
        currentLine++;
      } else {
        setTimeout(onFinished, 1000); // Espera 1s e fecha
        clearInterval(interval);
      }
    }, 600);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      exit={{ opacity: 0, scale: 1.1 }}
      className="fixed inset-0 z-[200] bg-black flex items-center justify-center font-mono p-10"
    >
      <div className="text-cyan-500 text-lg md:text-2xl whitespace-pre-line leading-relaxed">
        {text}
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
          className="inline-block w-3 h-6 bg-cyan-500 ml-2"
        />
      </div>
    </motion.div>
  );
}