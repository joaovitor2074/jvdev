import imgGiepi from "../components/projects/img/giepi-optimized.jpg";
import imgAlessandra from "../components/projects/img/alessandra-optimized.jpg";
import jvMovies from "../components/projects/img/jvmovies-optimized.jpg";
import quiz from "../components/projects/img/quiz-optimized.jpg";
import delta from "../components/projects/img/deltasolucao-optimized.jpg";
import servix from "../components/projects/img/servix-optimized.jpg";
import churrascariaNacional from "../components/projects/img/churrascaria-nacional-optimized.jpg";
import pizzariaChilena from "../components/projects/img/pizzaria-chilena-optimized.jpg";
import primaveraSabor from "../components/projects/img/primavera-sabor-optimized.jpg";
import alphaDelta from "../components/projects/img/alphadelta-optimized.jpg";

import codigoTccHome from "../assets/images/projetos/codigo-tcc7.jpeg";
import codigoTccChat from "../assets/images/projetos/codigo-tcc.jpeg";
import codigoTccContexto from "../assets/images/projetos/codigo-tcc1.jpeg";
import codigoTccPlano from "../assets/images/projetos/codigo-tcc2.jpeg";
import codigoTccHistorico from "../assets/images/projetos/codigo-tcc4.jpeg";
import codigoTccPerfil from "../assets/images/projetos/codigo-tcc5.jpeg";
import codigoTccResultado from "../assets/images/projetos/codigo-tcc6.jpeg";

import giepiAdminDashboard from "../assets/images/projetos/painel-administrativo.png";
import giepiAdminProjetos from "../assets/images/projetos/painel-administrativo-projetos.png";
import giepiAdminEmail from "../assets/images/projetos/painel-administrativo-email.png";
import giepiAdminConfig from "../assets/images/projetos/painel-administrativo-conf.png";

export const projetos = [
  {
    id: "servix",
    titulo: "Servix - Plataforma para Assistências e Serviços",
    categoria: "SaaS operacional",
    descricao:
      "Sistema full stack para gestão de clientes, orçamentos, ordens de serviço, estoque, garantias, prospecção, financeiro e comunicação por WhatsApp, com API própria e integração planejada com Mercado Pago.",
    techs: ["ts", "react", "vite", "node", "express", "postgres", "prisma", "git", "github"],
    link: "",
    repo: "https://github.com/joaovitor2074/servix",
    image: servix,
    destaque: true,
  },
  {
    id: "giepi-admin",
    titulo: "GIEPI - Sistema Administrativo",
    categoria: "Gestão institucional",
    descricao:
      "Painel administrativo para acompanhamento do GIEPI, reunindo indicadores de membros, linhas de pesquisa, comunicados, operação de dados e rotinas de atualização por scraping em uma interface interna.",
    techs: ["ts", "react", "tailwind", "node", "express", "mysql", "git", "github", "vercel"],
    link: "https://aqarh.vercel.app/admin/dashboard",
    repo: "https://github.com/joaovitor2074/aqarh",
    image: giepiAdminDashboard,
    gallery: [giepiAdminProjetos, giepiAdminEmail, giepiAdminConfig],
    destaque: true,
  },
  {
    id: "codigo-tcc",
    titulo: "Código TCC - Assistente para Trabalhos Acadêmicos",
    categoria: "Aplicação acadêmica",
    descricao:
      "Aplicação em formato de chat para apoiar estudantes na organização do TCC, com fluxo de conversa, histórico de orientações e respostas contextualizadas para tema, curso, prazo e etapa do trabalho.",
    techs: ["react", "tailwind", "js", "node", "mysql", "git", "github"],
    link: "",
    repo: "",
    image: codigoTccHome,
    gallery: [
      codigoTccChat,
      codigoTccContexto,
      codigoTccPlano,
      codigoTccHistorico,
      codigoTccPerfil,
      codigoTccResultado,
    ],
    destaque: true,
  },
  {
    id: "pizzaria-chilena",
    titulo: "Pizzaria Chilena - Cardápio Digital",
    categoria: "Delivery e WhatsApp",
    descricao:
      "Cardápio digital premium para pizzaria, com busca de sabores, promoções, carrinho persistente, personalização de pizza, checkout e envio do pedido organizado pelo WhatsApp.",
    techs: ["react", "vite", "js", "css", "git", "github", "vercel"],
    link: "",
    repo: "https://github.com/joaovitor2074/pizzaria-chilenmae",
    image: pizzariaChilena,
  },
  {
    id: "churrascaria-nacional",
    titulo: "Churrascaria Nacional - Cardápio Digital",
    categoria: "QR Code e delivery",
    descricao:
      "Modelo de cardápio digital para churrascaria com modo delivery, QR Code por mesa, carrinho, acompanhamento de status e pedido formatado para atendimento via WhatsApp.",
    techs: ["react", "vite", "js", "css", "git", "github", "vercel"],
    link: "",
    repo: "https://github.com/joaovitor2074/churrascaria-nacional",
    image: churrascariaNacional,
  },
  {
    id: "primavera-sabor",
    titulo: "Primavera Sabor Codó - Cardápio por QR Code",
    categoria: "Cardápio comercial",
    descricao:
      "Cardápio digital por QR Code para restaurante/lanchonete, reunindo pizzas, esfirras, espetinhos e fluxo de pedido pelo WhatsApp em uma experiência responsiva.",
    techs: ["react", "vite", "js", "css", "git", "github", "vercel"],
    link: "",
    repo: "https://github.com/joaovitor2074/prospeccao",
    image: primaveraSabor,
  },
  {
    id: "giepi-academico",
    titulo: "GIEPI - Sistema Acadêmico para Grupos de Pesquisa",
    categoria: "Pesquisa e dados",
    descricao:
      "Sistema acadêmico desenvolvido para grupos de pesquisa, com integração automatizada à Plataforma Lattes, organização de dados institucionais e automações para apoiar a gestão científica.",
    techs: ["ts", "js", "react", "css", "vercel", "git", "github", "express", "node", "mysql", "nest", "tailwind"],
    link: "https://aqarh.vercel.app",
    repo: "https://github.com/joaovitor2074/aqarh",
    image: imgGiepi,
  },
  {
    id: "alpha-delta",
    titulo: "AlphaDelta - Site Institucional",
    categoria: "Site profissional",
    descricao:
      "Projeto publicado no Vercel para presença institucional, com identidade visual própria e foco em apresentar a marca de forma direta e responsiva.",
    techs: ["php", "html", "css", "git", "github", "vercel"],
    link: "https://alphadelta.vercel.app",
    repo: "https://github.com/joaovitor2074/alphadelta",
    image: alphaDelta,
  },
  {
    id: "delta-solucao",
    titulo: "DeltaSolução - Sistema de Gestão para Pequenas Empresas",
    categoria: "Sistema empresarial",
    descricao:
      "Sistema de gestão empresarial desenvolvido para pequenas empresas, com foco em presença digital, controle administrativo, gerenciamento de clientes e automações para otimizar processos internos.",
    techs: ["react", "node", "express", "mysql", "git", "github", "vercel"],
    link: "https://deltasolucao.com.br/",
    repo: "",
    image: delta,
  },
  {
    id: "alessandra-psicologia",
    titulo: "Site Institucional - Psicóloga Alessandra",
    categoria: "Site profissional",
    descricao:
      "Site institucional desenvolvido para divulgação profissional, com foco em performance, SEO, identidade visual e contato direto para agendamentos.",
    techs: ["wordpress", "html", "css"],
    link: "https://alessandramacedo.com",
    repo: "",
    image: imgAlessandra,
  },
  {
    id: "quiz-programacao",
    titulo: "Quiz de Programação",
    categoria: "Projeto de estudo",
    descricao:
      "Aplicação web com perguntas sobre programação, lógica e fundamentos da área, criada para praticar interatividade, estado de interface e experiência de usuário.",
    techs: ["react", "tailwind", "git", "github", "js", "html", "css"],
    link: "https://joaovitor2074.github.io/quiz/",
    repo: "https://github.com/joaovitor2074/quiz",
    image: quiz,
  },
  {
    id: "jv-movies",
    titulo: "JVMovies - Catálogo de Filmes",
    categoria: "Consumo de API",
    descricao:
      "Projeto focado no consumo de APIs externas, exibindo informações de filmes de forma dinâmica com listagem, busca e visualização de detalhes.",
    techs: ["react", "tailwind", "git", "github", "js"],
    link: "https://joaovitor2074.github.io/jvMovies/",
    repo: "https://github.com/joaovitor2074/jvMovies",
    image: jvMovies,
  },
];

export const projetosDestaque = projetos.filter((projeto) => projeto.destaque);
