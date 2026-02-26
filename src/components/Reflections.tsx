// src/components/Reflections.tsx
import { motion } from "framer-motion";

export function Reflections() {
  return (
    <section className="max-w-6xl mx-auto py-32 px-6 border-t border-slate-800/50 relative z-10">

      {/* 1. TÍTULO */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20"
      >
       <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.3)] pb-4 leading-tight">
         Impacto na Engenharia de Software
       </h2>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100px" }}
          transition={{ duration: 1, delay: 0.5 }}
          className="h-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full"
        />
      </motion.div>

      {/* CARD DA INTELIGÊNCIA ARTIFICIAL */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
       
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } }}
        whileHover={{ y: -5 }}
        viewport={{ once: true }}
        className="mb-16 bg-gradient-to-br from-slate-900/80 to-slate-950 backdrop-blur-xl p-10 md:p-14 rounded-[2.5rem] border border-indigo-500/30 shadow-[0_0_40px_rgba(99,102,241,0.1)] relative overflow-hidden cursor-pointer transition-colors duration-300 hover:border-indigo-500/50"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-[80px] pointer-events-none" />
        
        <div className="relative z-10 flex flex-col gap-8">
          
          <div className="w-full">
            <h3 className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-indigo-400 to-cyan-400 leading-tight mb-4">
              O Futuro: IA como Co-piloto
            </h3>
            <div className="w-16 h-1 bg-indigo-500 rounded-full" />
          </div>
          
          <div className="w-full space-y-4 text-slate-300 leading-relaxed text-lg">
            <p>
              A Inteligência Artificial não surgiu para substituir o desenvolvedor, mas para <strong className="text-cyan-400 font-semibold">adicionar e potencializar</strong> a criação. Nós deixamos de ser meros "digitadores de código" para nos tornarmos verdadeiros arquitetos de soluções.
            </p>
            <p>
              Projetos que antes exigiam meses de estruturação braçal, pesquisa de documentação e caça a bugs, hoje são erguidos em questão de <strong className="text-indigo-400 font-semibold">semanas</strong>. A IA atua como uma parceira incansável que revisa rotinas complexas e sugere otimizações instantâneas.
            </p>
            <p>
              Além de acelerar o mercado, ela revolucionou a forma de estudar. Conceitos abstratos e barreiras de aprendizado são derrubados com tutoriais personalizados e explicações sob demanda, provando que a IA é a maior ferramenta educacional da nossa geração.
            </p>
          </div>
        </div>
      </motion.div>

      {/* 3. A GRID QUE DIVIDE EM DUAS COLUNAS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* CARD DO JHONN */}
        <motion.div
          whileHover={{ y: -5 }}
          className="bg-slate-900/40 backdrop-blur-xl p-10 rounded-[2.5rem] border border-cyan-500/20 shadow-[0_0_30px_rgba(34,211,238,0.05)] cursor-pointer"
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
          className="bg-slate-900/40 backdrop-blur-xl p-10 rounded-[2.5rem] border border-blue-500/20 shadow-[0_0_30px_rgba(59,130,246,0.05)] cursor-pointer"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-black">F</div>
            <h3 className="text-xl font-bold text-blue-400 uppercase tracking-widest">Análise de Fellipe</h3>
          </div>
          <p className="text-slate-300 leading-relaxed italic">
            "Enquanto a interface dita a experiência visual, a evolução da Web foi verdadeiramente impulsionada pela transformação nos bastidores. Deixamos para trás a simples entrega de documentos estáticos para arquitetar ecossistemas complexos, baseados em APIs robustas e processamento de dados em larga escala. O Back-end moderno é o motor invisível que garante a segurança, a lógica de negócios e a escalabilidade necessárias para sustentar a hiperconectividade atual."
          </p>
        </motion.div>

      </div>
    </section>
  );
}