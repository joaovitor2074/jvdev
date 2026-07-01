import imgGiepi from "../components/projects/img/giepi-optimized.jpg";
import imgAlessandra from "../components/projects/img/alessandra-optimized.jpg";
import jvMovies from "../components/projects/img/jvmovies-optimized.jpg";
import quiz from "../components/projects/img/quiz-optimized.jpg";
import delta from "../components/projects/img/deltasolucao-optimized.jpg";

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
    id: "giepi-admin",
    titulo: "GIEPI - Sistema Administrativo",
    categoria: "Gestão institucional",
    descricao:
      "Painel administrativo para acompanhamento do GIEPI, reunindo indicadores de membros, linhas de pesquisa, comunicados, operação de dados e rotinas de atualização por scraping em uma interface interna.",
    techs: ["ts", "react", "tailwind", "node", "express", "mysql", "git", "github", "vercel"],
    link: "https://aqarh.vercel.app/admin/dashboard",
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
    id: "giepi-academico",
    titulo: "GIEPI - Sistema Acadêmico para Grupos de Pesquisa",
    categoria: "Pesquisa e dados",
    descricao:
      "Sistema acadêmico desenvolvido para grupos de pesquisa, com integração automatizada à Plataforma Lattes, organização de dados institucionais e automações para apoiar a gestão científica.",
    techs: ["ts", "js", "react", "css", "vercel", "git", "github", "express", "node", "mysql", "nest", "tailwind"],
    link: "https://aqarh.vercel.app",
    image: imgGiepi,
    destaque: true,
  },
  {
    id: "delta-solucao",
    titulo: "DeltaSolução - Sistema de Gestão para Pequenas Empresas",
    categoria: "Sistema empresarial",
    descricao:
      "Sistema de gestão empresarial desenvolvido para pequenas empresas, com foco em presença digital, controle administrativo, gerenciamento de clientes e automações para otimizar processos internos.",
    techs: ["react", "node", "express", "mysql", "git", "github", "vercel"],
    link: "https://deltasolucao.com.br/",
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
    image: jvMovies,
  },
];

export const projetosDestaque = projetos.filter((projeto) => projeto.destaque);
