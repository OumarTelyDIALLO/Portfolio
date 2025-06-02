import React from 'react';
import { motion } from 'framer-motion';
import '../styles/MonObjectif.css';

function MonObjectif() {
  return (
    <div className="objectif-container">
      <motion.h3
        className="objectif-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Mon Objectif
      </motion.h3>

      <motion.p
        className="objectif-intro"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Je suis une personne déterminée, ambitieuse et passionnée par le domaine du numérique. Je travaille chaque jour pour atteindre mes objectifs personnels et professionnels. J’ai à cœur d’apporter une contribution positive à mon entourage, à mon pays et, plus largement, à la société.
      </motion.p>

      <motion.div
        className="objectif-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h4>🎯 Objectif à court terme</h4>
        <p>
          Actuellement étudiant en première année de Licence Informatique à l’IUT d’Orsay – Université Paris-Saclay,  
          je suis à la recherche :
          <br />
          •D’un premier stage d'une durée de 10 semaines dans le domaine des bases de données afin de mettre en pratique mes connaissances (SQL, modélisation, gestion des données).
          <br />
          • D’une entreprise d’accueil pour un futur contrat, dans le cadre de la poursuite de mes études à partir d'avril 2026.
        </p>

        <h4>🚀 Objectif à moyen terme</h4>
        <p>
          Mon objectif est de travailler au sein d’une entreprise dynamique afin de renforcer mes expériences professionnelles.
          Je souhaite développer mes compétences techniques et relationnelles, 
          construire un réseau professionnel solide, et poser les bases d’une stabilité financière durable..
        </p>

        <h4>🌍 Objectif à long terme</h4>
        <p>
          Mon ambition s’articule autour de trois grands axes :
          <br /><br />
          • Réaliser mon rêve d’enfance en jouant dans un club professionnel et devenir footballeur professionnel. Le sport a toujours occupé une place importante dans ma vie, et je continue à m’investir avec passion et discipline pour atteindre cet objectif.
          <br /><br />
          • Créer ma propre entreprise dans le domaine du numérique afin de contribuer à la transformation digitale de mon pays. Je souhaite moderniser les services administratifs, faciliter la communication, encourager l’innovation et participer à la formation des jeunes aux nouvelles technologies.
          <br /><br />
          • Intégrer une organisation internationale reconnue dans les secteurs du numérique. Mon objectif est d’avoir un impact global, de promouvoir la technologie au service du progrès humain et de participer à des projets d’envergure mondiale.
          <br /><br />
          Sur le plan personnel, je vise une vie équilibrée : me marier, fonder une famille, vivre de manière honnête et stable, développer des relations humaines sincères et venir en aide aux personnes dans le besoin.
        </p>

      </motion.div>
    </div>
  );
}

export default MonObjectif;
