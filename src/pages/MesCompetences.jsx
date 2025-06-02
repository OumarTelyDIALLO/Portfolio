import React from 'react';
import { motion } from 'framer-motion';
import '../styles/MesCompetences.css'; // Assurez-vous d'importer le fichier CSS pour le style  de la page

function MesCompetences() {
  const categories = [
    {
      titre: "Développement web",
      competences: [
        { nom: "HTML5", icone: "🟠", description: "En cours d'apprentissage – notions de base acquises" },
        { nom: "CSS3", icone: "🔵", description: "En cours d'apprentissage – notions de base acquises" },
        { nom: "JavaScript", icone: "🟡", description: "En cours d'apprentissage" },
        { nom: "React", icone: "⚛️", description: "En cours d’apprentissage" },
        { nom: "Java", icone: "☕", description: "En cours d’apprentissage" },
      ]
    },
    {
      titre: "Bases de données",
      competences: [
        { nom: "SQL", icone: "🛢️", description:"En cours d'apprentissage – notions de base acquises"},
        { nom: "MySQL", icone: "🐬", description: "Manipulation de bases de données - En cours d'apprentissage"  },
      ]
    },
    {
      titre: "Outils / DevOps",
      competences: [
        { nom: "Git", icone: "🔧", description: "Utilisation basique" },
        { nom: "GitHub", icone: "🐙", description: "Gestion de versions de projets" },
        { nom: "GitHub Copilot", icone: "🤖", description: "Assistant de code en cours d’utilisation" },
      ]
    },
    {
      titre: "Autres",
      competences: [
        { nom: "VSCode", icone: "📝", description: "Environnement de développement principal (IDE)" },
        { nom: "Figma", icone: "🎨", description: "Création de maquettes et conception d’interfaces utilisateur"  }
      ]
    }
  ];

  return (
    <div className="competences-container">
      <motion.h3
        className="competences-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Compétences techniques
      </motion.h3>

      <motion.p
        className="competences-intro"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Voici les technologies et outils que je maîtrise actuellement et que j'utilise dans mes projets personnels et académiques :
      </motion.p>

      <div className="competences-categories">
        {categories.map((categorie, idx) => (
          <motion.div
            key={idx}
            className="competence-category"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: idx * 0.3 }}
          >
            <h4>{categorie.titre}</h4>
            <div className="competences-grid">
              {categorie.competences.map((comp, index) => (
                <motion.div
                  key={index}
                  className="competence-card"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="competence-icone">{comp.icone}</div>
                  <div className="competence-nom">{comp.nom}</div>
                  <div className="competence-description">{comp.description}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default MesCompetences;
