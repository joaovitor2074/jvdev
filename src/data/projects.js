// projects.js
import { ImAngry } from "react-icons/im";
import imgGiepi from "../components/projects/img/giepi.png"
import imgalessandra from "../components/projects/img/alessandra.png"

export const projetos = [
    {
        id: 1,
        titulo: "GIEPI",
        descricao:
            "Sistema acadêmico desenvolvido para grupos de pesquisa, integrando dados da Plataforma Lattes.",
        techs: ["ts", "node", "express", "nest", "tailwind"],
        link: "https://aqarh.vercel.app",
        image: {imgGiepi},
    },
    {
        id: 2,
        titulo: "Site Psicóloga Alessandra",
        descricao:
            "Site institucional focado em performance, SEO e experiência do usuário.",
        techs: ["react", "tailwind", "vercel"],
        link: "https://alessandramacedo.com",
        image: {imgalessandra},
    },
    {
        id: 3,
        titulo: "Quiz Conhecimento T.I",
        descricao:
            "jogo de quiz",
        techs: ["react", "tailwind", "git", "github", "js"],
        link: "https://joaovitor2074.github.io/quiz/",
        image: "/projects/alessandra.png",
    },
    {
        id: 3,
        titulo: "Quiz Conhecimento T.I",
        descricao:
            "jogo de quiz",
        techs: ["react", "tailwind", "git", "github", "js"],
        link: "https://joaovitor2074.github.io/jvMovies/",
        image: "/projects/alessandra.png",
    }
];
