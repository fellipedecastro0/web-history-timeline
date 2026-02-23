// src/components/Reflections.tsx
import { motion } from "framer-motion";

export function Reflections() {
  return (
    <section className="max-w-6xl mx-auto py-32 px-6 border-t border-slate-800/50 relative z-10">

      {/* TÍTULO REFORMULADO: AGORA VIVO E PULSANTE */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20"
      >
       {/* TÍTULO REFORMULADO COM ESPAÇO PARA A "BARRIGUINHA" DO G */}
       <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.3)] pb-4 leading-tight">
         Impacto na Engenharia de Software
       </h2>
        {/* Linha decorativa animada */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100px" }}
          transition={{ duration: 1, delay: 0.5 }}
          className="h-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full"
        />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* CARD DO JHONN */}
        <motion.div
          whileHover={{ y: -5 }}
          className="bg-slate-900/40 backdrop-blur-xl p-10 rounded-[2.5rem] border border-cyan-500/20 shadow-[0_0_30px_rgba(34,211,238,0.05)]"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center text-black font-black">J</div>
            <h3 className="text-xl font-bold text-cyan-400 uppercase tracking-widest">Análise de Johnn</h3>
          </div>
          <p className="text-slate-300 leading-relaxed italic">
            "A Web não é apenas uma plataforma de entrega, mas a fundação da Engenharia de Software moderna. Como arquiteto deste projeto, vejo que a evolução dos protocolos permitiu que saltássemos de simples páginas para ecossistemas globais de alta performance."
          </p>
        </motion.div>

        {/* CARD DO FELIPE */}
        <motion.div
          whileHover={{ y: -5 }}
          className="bg-slate-900/40 backdrop-blur-xl p-10 rounded-[2.5rem] border border-blue-500/20 shadow-[0_0_30px_rgba(59,130,246,0.05)]"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-black">F</div>
            <h3 className="text-xl font-bold text-blue-400 uppercase tracking-widest">Análise de Fellipe</h3>
          </div>
          <p className="text-slate-300 leading-relaxed italic">
            "a completar"
          </p>
        </motion.div>

      </div>
    </section>
  );
}