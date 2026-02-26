import { motion } from "framer-motion";
import { useEffect } from "react";

export function Loader({ onFinished }: { onFinished: () => void }) {
  useEffect(() => {
    const timer = setTimeout(onFinished, 2000); // 2 segundos de carregamento
    return () => clearTimeout(timer);
  }, [onFinished]);

  return (
    <motion.div
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] bg-[#020617] flex flex-col items-center justify-center"
    >
      {/* O Relógio Minimalista */}
      <div className="relative w-20 h-20 border-4 border-cyan-500/30 rounded-full flex items-center justify-center">
        {/* Ponteiro do Relógio */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="absolute w-1 h-8 bg-cyan-500 origin-bottom bottom-1/2 rounded-full"
        />
        <div className="w-2 h-2 bg-cyan-500 rounded-full z-10" />
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="mt-8 text-cyan-400 font-mono text-xs tracking-[0.3em] uppercase"
      >
        A Sincronizar Épocas...
      </motion.p>
    </motion.div>
  );
}