import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/MonProjet.css';

function MonProjet() {
  const [filter, setFilter] = useState('all');

  const projets = [
    {
      titre: "💼 mon-portfolio",
      description: "Développement de mon portfolio personnel afin de présenter mon parcours, mes compétences et mes projets. Réalisé avec React.js, ce site met en valeur mes expériences en développement web et mes travaux liés aux données, à travers une interface moderne, responsive et interactive.",
      technologies: "React.js, CSS, React Router, Framer Motion",
      categorie: "web",
      github: "https://github.com/OumarTelyDIALLO/Portfolio",
      demo: ""
    },
       
    {
      titre: "Site Web – Un Monde Meilleurs (projet académique)",
      description: [
      "Ce site a été réalisé dans le cadre d’un projet de classe. Il a pour objectif de présenter un concept de parc d’attraction éducatif, où l’on peut à la fois s’amuser et apprendre.",
      "✨ Développement d’une plateforme web mettant en avant les valeurs éducatives et culturelles du projet."].join(" "),
      technologies: "HTML, CSS",
      categorie: "web",
      github: "",
      demo: ""
    },
    {
      titre: "Installation d’un poste de développement et configuration réseau (projet académique)",
      description: "Conception et implémentation d’un jeu vidéo en réponse à un cahier des charges défini par un client fictif. Étude comparative de différentes approches algorithmiques pour optimiser les performances du jeu.",
      technologies: "C++, Algorithmique",
      categorie: "algorithmique",
      github: "",
      demo: ""
    },
    {
      titre: " Installation d’un poste pour le développement Et configuartion resaeaux (projet académique)",
      description:"Installation d’un Raspberry Pi comme poste de développement. Configuration de services réseau tels que DNS, DHCP, serveur web et serveur de fichiers. Mise en place d’un accès distant via SSH.",
      technologies: "Raspberry Pi, Réseaux, Linux, SSH, Serveur DNS/DHCP",
      categorie: "résaux",
      github: "",
      demo: ""
    },

    {
      titre: "Recueil des besoins (projet académique)",
      description: "Projet axé sur l’analyse, la compréhension et la formalisation des besoins utilisateurs dans le cadre d’un futur développement. Mise en œuvre de techniques de collecte d’informations et de présentation claire des exigences fonctionnelles.",
      technologies: "Microsoft Word, PowerPoint",
      categorie: "analyse",
      categorie: "bi",
      github: "",
      demo: ""
    },

    {
      titre: "Création et exploitation d’une base de données (projet académique)",
      description: "Projet centré sur la conception, la mise en place et l’exploitation d’une base de données à partir d’un cas réel. Modélisation, création des tables, insertion et interrogation des données à l’aide de requêtes SQL.",
      technologies: "SQL, MySQL",
      categorie: "",
      categorie: "data",
      github: "",
      demo: ""
    }
  ];

  const handleFilterChange = (categorie) => {
    setFilter(categorie);
  };

  const filteredProjets = filter === 'all'
    ? projets
    : projets.filter(projet => projet.categorie === filter);

  return (
    <div className="projet-container">
      <motion.h3 
        className="projet-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Mes Projets
      </motion.h3>

      <motion.p 
        className="projet-intro"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Voici quelques projets personnels et académiques réalisés pour mettre en pratique mes compétences.
      </motion.p>

      {/* Boutons de filtre */}
      <div className="filter-buttons">
        {["all", "web", "data", "bi"].map((cat) => (
          <button
            key={cat}
            className={filter === cat ? "active" : ""}
            onClick={() => handleFilterChange(cat)}
          >
            {cat === "all" ? "Tous" : cat.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Projets filtrés avec animation */}
      <div className="projets-grid">
        <AnimatePresence>
          {filteredProjets.map((projet, index) => (
            <motion.div 
              key={index}
              className="projet-card"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4 }}
            >
              <h4>{projet.titre}</h4>
              <p>{projet.description}</p>
              <div className="tech-stack">{projet.technologies}</div>
              <div className="projet-links">
                {projet.github && <a href={projet.github} target="_blank" rel="noreferrer">GitHub</a>}
                {projet.demo ? (
                  <a href={projet.demo} target="_blank" rel="noreferrer">Démo</a>
                ) : (
                  <span className="disabled">Pas de Démo</span>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default MonProjet;
