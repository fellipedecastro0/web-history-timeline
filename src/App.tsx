import './App.css';
import { TimelineItem } from './components/TimelineItem';
import { useState, useEffect } from 'react'; 
import { Modal } from './components/Modal';
import { Reflections } from './components/Reflections';
import { Loader } from './components/Loader';
import { motion, useScroll, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { Clock, History, Hourglass, Monitor } from "lucide-react"; 

export type MileStone = {
  id: number;
  ano: string;
  titulo: string;
  descricao: string;
  imagem: string;
  ehLogo?: boolean;
  ehClaro?: boolean;
}

const marcosDaWeb: MileStone[] = [
  {
    id: 1,
    ano: '1989 - 1991',
    titulo: 'A Gênese: O Nascimento da WWW',
    descricao: 'Tim Berners-Lee, trabalhando no laboratório do CERN, cria a World Wide Web. O grande salto foi unir a infraestrutura da internet existente com o conceito de hipertexto. Nascem os três pilares que usamos até hoje: o protocolo HTTP, a linguagem de marcação HTML e os endereços URL. O primeiro site da história era uma página estática puramente focada em compartilhar documentos acadêmicos.',
    imagem: '/imagens/www.jpg'
  },
  {
    id: 2,
    ano: '1995',
    titulo: 'A Revolução da Interatividade: JavaScript',
    descricao: 'A web era estática e parecia um grande jornal de papel. Para resolver isso, Brendan Eich cria o JavaScript (em apenas 10 dias!) para o navegador Netscape. Essa linguagem permitiu que as páginas respondessem a cliques, validassem formulários e tivessem animações simples. Foi o primeiro passo para a web deixar de ser apenas "documentos" e começar a se tornar "sistemas".',
    imagem: '/imagens/javascript.jpg',
    ehLogo: true,
  },
  {
    id: 3,
    ano: '1996 - 2001',
    titulo: 'A Separação de Poderes e a Bolha Ponto Com',
    descricao: 'A web amadurece tecnicamente com a chegada do CSS, permitindo separar o conteúdo (HTML) do design visual. No mercado, o otimismo exagerado cria a "Bolha Ponto Com": investidores injetam bilhões em qualquer empresa com um ".com" no nome, mesmo sem planos de lucro. Em 2001, essa bolha financeira estoura, levando milhares de startups à falência e deixando vivas apenas empresas com modelos de negócios reais, como a Amazon.',
    imagem: '/imagens/CSS-Logo-500x283.jpg',
    ehLogo: true,
  },
  {
    id: 4,
    ano: '2004 - 2006',
    titulo: 'A Era da Web 2.0 e o AJAX',
    descricao: 'A internet deixa de ser uma via de mão única. O conceito de Web 2.0 foca no conteúdo gerado pelo usuário, dando origem às grandes redes sociais e blogs. Tecnicamente, a adoção do AJAX (Asynchronous JavaScript and XML) revoluciona a experiência: páginas como o Gmail e o Google Maps passam a atualizar dados em tempo real sem precisar recarregar a página inteira.',
    imagem: '/imagens/og-gmail.jpg',
    ehClaro: true,
  },
  {
    id: 5,
    ano: '2007 - 2010',
    titulo: 'A Revolução Mobile e o Design Responsivo',
    descricao: 'Com o lançamento do iPhone e a popularização dos smartphones, a forma de consumir a web muda drasticamente. Os desenvolvedores são forçados a repensar a construção de interfaces. Ganha força o uso de "Media Queries" no CSS e a filosofia "Mobile First", garantindo que os sites se adaptem perfeitamente a telas pequenas antes mesmo dos monitores tradicionais.',
    imagem: '/imagens/iphone.jpg'
  },
  {
    id: 6,
    ano: '2014 - 2015',
    titulo: 'HTML5 e a Ascensão das SPAs',
    descricao: 'A padronização do HTML5 traz recursos nativos para vídeo e áudio, matando tecnologias antigas como o Flash. No front-end, bibliotecas e frameworks baseados em componentes (como React, Angular e Vue) dominam o mercado. A web consolida o conceito de Single Page Applications (SPAs), onde o site inteiro funciona de forma tão fluida quanto um aplicativo de celular.',
    imagem: '/imagens/web.jpg',
    ehLogo: true,
  },
  {
    id: 7,
    ano: '2020 - 2022',
    titulo: 'A Web Pandêmica e o Boom do Trabalho Remoto',
    descricao: 'A pandemia força uma digitalização global instantânea. A infraestrutura da web é testada ao limite com o trabalho remoto e o EAD. Tecnologias de comunicação em tempo real pelo navegador (como WebRTC) se tornam vitais. Ao mesmo tempo, surgem fortes discussões sobre descentralização e privacidade, impulsionando os conceitos do que muitos chamaram de Web3.',
    imagem: '/imagens/meet.jpg'
  },
  {
    id: 8,
    ano: '2023 - 2026',
    titulo: 'A Era da Inteligência Artificial Generativa',
    descricao: 'A inteligência artificial deixa de ser assunto de ficção científica e se integra diretamente aos navegadores, buscadores e ferramentas de desenvolvimento (como copilotos de código). A web passa a ser consumida, traduzida, resumida e até mesmo gerada em tempo real por assistentes baseados em Grandes Modelos de Linguagem (LLMs), mudando para sempre a interação humano-computador.',
    imagem: '/imagens/ia.jpg'
  }
];

function App() {
  const [loading, setLoading] = useState(true);
  const [marcoSelecionado, setMarcoSelecionado] = useState<MileStone | null>(null);
  const [bgIndex, setBgIndex] = useState(0);

  // Lógica para alternar as imagens de fundo (Relógios/História)
  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 1],
    ["#020617", "#000000"]
  );

  const bgIcons = [
    <Clock size={400} strokeWidth={0.5} />,
    <History size={400} strokeWidth={0.5} />,
    <Hourglass size={400} strokeWidth={0.5} />,
    <Monitor size={400} strokeWidth={0.5} />
  ];

  return (
    <motion.div
      style={{ backgroundColor }}
      className="min-h-screen text-white font-sans relative transition-colors duration-500 overflow-x-hidden"
    >
      <AnimatePresence>
        {loading && <Loader onFinished={() => setLoading(false)} />}
      </AnimatePresence>

      {/* ANIMAÇÃO DE FUNDO: Imagens/Relógios em transformação */}
      <div className="fixed inset-0 z-0 flex items-center justify-center pointer-events-none opacity-[0.03]">
        <AnimatePresence mode="wait">
          <motion.div
            key={bgIndex}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="text-cyan-500"
          >
            {bgIcons[bgIndex]}
          </motion.div>
        </AnimatePresence>
      </div>

      <motion.div className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 to-cyan-400 z-[100] origin-left" style={{ scaleX }} />

      <div className="relative z-10 py-16 px-4">
        <motion.header initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-32 text-center">
          <h1 className="text-5xl md:text-8xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-500 uppercase italic tracking-tighter">
            Web History
          </h1>
          <div className="h-1 w-24 bg-cyan-500 mx-auto mb-6" />
          <p className="text-cyan-400 font-mono tracking-[0.4em] text-xs uppercase opacity-70">Sistemas Hiperconectados</p>
        </motion.header>

        <div className="max-w-6xl mx-auto relative pb-20">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-[2px] h-full bg-gradient-to-b from-transparent via-cyan-500/50 to-transparent"></div>
          {marcosDaWeb.map((marco, index) => (
            <TimelineItem key={marco.id} marco={marco} isLeft={index % 2 === 0} onClick={() => setMarcoSelecionado(marco)} />
          ))}
        </div>

        <Reflections />
      </div>

      <AnimatePresence>
        {marcoSelecionado && (
          <Modal item={marcoSelecionado} onClose={() => setMarcoSelecionado(null)} />
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default App;