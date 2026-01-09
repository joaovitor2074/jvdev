// projects.js
import { ImAngry } from "react-icons/im";
import imgGiepi from "../components/projects/img/giepi.png"
import imgalessandra from "../components/projects/img/alessandra.png"
import jvmovies from "../components/projects/img/jvmovies.png"
import quiz from "../components/projects/img/quiz.png"

export const projetos = [
    {
        id: 1,
        titulo: "GIEPI — Sistema Acadêmico para Grupos de Pesquisa",
        descricao:
            "Sistema acadêmico desenvolvido para grupos de pesquisa, com integração automática à Plataforma Lattes por meio de scraping, organização de dados e automações para apoio à gestão científica.",
        techs: ["ts","js","react", "css", "vercel", "git", "github","express", "node", , "nest", "tailwind"],
        link: "https://aqarh.vercel.app",
        image: imgGiepi,
    },
    {
        id: 2,
        titulo: "Site Institucional — Psicóloga Alessandra",
        descricao:
            "Site institucional desenvolvido para divulgação profissional, com foco em performance, SEO e experiência do usuário, facilitando a apresentação do trabalho e o contato com pacientes.",
        techs: ["wordpress", "html", "css"],
        link: "https://alessandramacedo.com",
        image: imgalessandra,
    },

    {
        id: 3,
        titulo: "Quiz de Programação",
        descricao:
            "Aplicação web desenvolvida como projeto de aprendizado, com perguntas sobre programação, lógica e conceitos básicos da área, focada em interatividade e prática de fundamentos.",
        techs: ["react", "tailwind", "git", "github", "js", "html", "css"],
        link: "https://joaovitor2074.github.io/quiz/",
        image: quiz,
    },
    {
        id: 3,
        titulo: "JVMovies — Catálogo de Filmes",
        descricao:
            "Projeto de aprendizado focado no consumo de APIs externas, exibindo informações de filmes de forma dinâmica, com integração de dados, listagem e visualização de detalhes.",
        techs: ["react", "tailwind", "git", "github", "js"],
        link: "https://joaovitor2074.github.io/jvMovies/",
        image: jvmovies,
    }
];
