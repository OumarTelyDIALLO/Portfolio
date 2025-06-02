import React from 'react';
import { motion } from 'framer-motion';
import '../styles/MesExperiences.css';

function MesExperiences() {
  const experiences = [
    {
      annee: " 📅 2025 - En cours (2025)",
      titre: "Bénévolat au Viking Club Paris",
      lieu: "Viking Club Paris 75004",
            description: [
        "✨ Missions réalisées :",
        "•Engagement bénévole au sein de mon club sportif local.",
        "• Rôle d’arbitre lors des compétitions organisées par le club.",
        "• Soutien à l’encadrement sportif en tant qu’adjoint coach.",
        "•Développement de compétences en gestion d’équipe et en communication."
      ],
      competences: ["Leadership", "Esprit d'équipe", "Communication", "Organisation"]
    },
    {
      annee: "Juillet 2024 - Septembre 2024",
      titre: "Employé Polyvalent | Carrefour",
      lieu: "Paris, Île-de-France, France",
            description: [
        "✨ Missions réalisées :",
        "Participation aux opérations quotidiennes en magasin dans un environnement dynamique.",
        "Tenue de caisse avec gestion des transactions et relation client.",
        "Mise en rayon, gestion des stocks et réassort des produits.",
        "Accueil et orientation des clients, avec un souci constant de satisfaction.",
        "Maintien de l’ordre et de la propreté des espaces de vente.",
      ],
      competences: ["Relation client", "Organisation", "Rigueur", "Travail en équipe"]
    },
    {
     annee: "2023 - 2024",
     titre: "Bénévolat | Soutien scolaire pour collégiens",
     lieu: "ile-de-France",
          description: [
      "✨ Missions réalisées :",     
      "Encadrement régulier d’élèves au collège dans le cadre du soutien scolaire en mathématiques.",
      "Aide à la compréhension des cours et accompagnement dans la résolution d’exercices.",
      "Renforcement des bases et développement de la confiance en soi chez les élèves."
    ],
      competences: ["Pédagogie", "Communication", "Rigueur", "Travail en équipe"]
    },

    {
      annee: "2019 - 2020",
      titre: "Stage de 3e | Neemba Guinée",
      lieu: "Entreprise CAT, Sangarédi – Guinée",
            description: [
        "✨ Missions réalisées :",       
        "Stage d’observation de 4 semaines en tant qu’assistant du chef de service Planification et Administration Atelier.",
        "Découverte des processus de planification de la maintenance des engins.",
        "Participation au pointage des techniciens en fonction du temps passé sur chaque tâche.",
        "Première immersion dans un environnement professionnel industriel."
    ],
      competences: ["Rigueur", "Organisation", "Communication", "Sens de l’observation"]
    },
  ];

  return (
    <div className="experiences-container">
      <motion.h3
        className="experiences-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Mes expériences
      </motion.h3>

      <div className="timeline">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="timeline-item"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="timeline-content">
              <span className="timeline-date">{exp.annee}</span>
              <h4>{exp.titre}</h4>
              <span className="timeline-lieu">{exp.lieu}</span>
              <ul>
                {exp.description.map((desc, idx) => (
                  <li key={idx}>{desc}</li>
                ))}
              </ul>
              <div className="competences-tags">
                {exp.competences.map((tech, idx) => (
                  <span key={idx} className="tag">{tech}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default MesExperiences;
