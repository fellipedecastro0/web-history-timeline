import './App.css'
import { TimelineItem } from './components/TimelineItem';
import { useState } from 'react';

export type MileStone = {
  id: number;
  ano: string;
  titulo: string;
  descricao: string;
  imagem: string;
  ehLogo?: boolean;
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
  const [marcoSelecionado, setMarcoSelecionado] = useState<MileStone | null>(null);


  return (

          </h1>


            <TimelineItem
                key={marco.id}
                marco={marco}
                onClick={() => setMarcoSelecionado(marco)}
            />

      </div>
    </div>
  );
}

export default App;