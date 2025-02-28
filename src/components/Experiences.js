import React, { useState, useEffect } from "react";
import "../components/ExperiencesCard"
import "../components-css/Experiences.css"
import Slider from "react-slick";
import ExperienceCard from "../components/ExperiencesCard";

const Experiences = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: !isMobile,
        focusOnSelect: true
    };
    
    return (
        <div className="section">
            <div className="experience-text">
                <h4>Expériences professionnels : </h4>
            </div>

            <div className="experiences-container">
                <Slider {...settings}>
                    <div>
                        <ExperienceCard
                            title="Stage - Emploi étudiant"
                            location="Retraite Québec - Direction des systèmes en soutien à l'organisation"
                            tags={["C#", "Openshift", "Microsoft SQL Server"]}>
                            <div>
                                <p>
                                    Développement d’une application web permettant la gestion des feuilles de temps des employés, 
                                    en assurant la communication avec une base de données et une interface graphique.
                                </p>
                                <p> 
                                    Garantie de la qualité du produit grâce à des tests unitaires et fonctionnels ainsi qu’à des revues de code.
                                </p>
                                <p> 
                                    À l’issue du stage, une offre d’emploi étudiant a été proposée et acceptée pour poursuivre l’amélioration du projet.
                                </p>
                                <p className="spaced">
                                    Technologies utilisées :
                                </p>
                            </div>
                            </ExperienceCard>
                    </div>
                    <div>
                        <ExperienceCard
                            title="Stage - Emploi étudiant"
                            location="Retraite Québec - Direction de la gestion des environnements et des outils d'essais"
                            tags={["C#", "Microsoft SQL Server", "Windows Form"]}>
                                <div>
                                    <p> 
                                        Développement d'une application permettant d’extraire et de dupliquer des dossiers clients de manière sécurisée, 
                                        sans nécessiter d’informations sensibles. Ces duplications étaient destinées aux bases de données utilisées pour les tests.
                                    </p>
                                    <p> 
                                        Une documentation complète était requise, et le code devait être conçu de manière propre, structurée et lisible.
                                    </p>
                                    <p> 
                                        À l’issue du stage, une offre d’emploi étudiant a été proposée et acceptée, permettant de poursuivre le développement et l’amélioration du projet.
                                    </p>
                                    <p className="spaced">
                                        Technologies utilisées :
                                    </p>
                                </div>
                            </ExperienceCard>
                    </div>
                    <div>
                        <ExperienceCard
                            title="Études"
                            location="Université Laval - Génie Logiciel"
                            tags={["Java", "Python", "JS"]}>
                            <p>
                                Diplômé en Génie Logiciel de l’Université Laval en décembre 2024, j’ai acquis de l’expérience en développement logiciel à travers mes stages, 
                                mon emploi étudiant et mes études.
                            </p>
                            <p>
                                Passionné par l’apprentissage de nouvelles technologies, j’ai exploré divers outils et langages, comme Python, Java, Vue.js. Mon parcours m’a 
                                permis de renforcer mes compétences en développement back-end et en travail d’équipe, des atouts que je continue de perfectionner.
                            </p>
                            <p className="spaced">
                                Quelques technologies apprises : 
                            </p>
                        </ExperienceCard>
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default Experiences;
