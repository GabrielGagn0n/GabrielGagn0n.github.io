import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return ( 
    <div className="section">
        <div className="project-text">
            <h4> Quelques projets personnels : </h4>
        </div>

        <div className="projects-container">
            
            <ProjectCard
                image = "/Projects/website.png"
                title = "Site personnel"
                link1="https://gabrielgagn0n.github.io/"
                link2="https://github.com/GabrielGagn0n/GabrielGagn0n.github.io"
                tags={["React", "JavaScript", "Développement Web"]}
            />

            <ProjectCard
                image = "/Projects/movie_app.png"
                title = "Application de gestion cinématographique"
                description = "Cette application permet de gérer les séries télévisées écoutées : ajouter, modifier ou supprimer des séries, mettre à jour leur statut (comme 'Complété' ou 'Pas commencé') et garder une trace de la saison et des épisodes vus."
                link1="https://github.com/GabrielGagn0n/Movie_App"
                link2="https://github.com/GabrielGagn0n/movie_app_code"
                tags={["C#", "GODOT"]}
            />
            <ProjectCard
                image = "/Projects/norlab.gif"
                title = "Projet final de BACC"
                description = "Mon projet final en Génie Logiciel consistait à développer un site web permettant aux utilisateurs de télécharger un fichier de configuration afin de tester son efficacité avec la librairie lippointmatcher de Norlab. Le projet incluait également d’autres fonctionnalités, telles qu’un tableau de classement (leaderboard) et une base de données pour stocker les résultats et informations des utilisateurs."
                link2="https://github.com/norlab-ulaval/libpointmatcher-server"
                tags={["Vue", "Python", "Javascript", "MongoDB"]}
            />
        </div>
    </div>
  );
}

export default Projects;