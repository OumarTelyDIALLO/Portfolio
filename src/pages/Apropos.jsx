import { useState } from 'react';
import '../styles/Apropos.css';

import MonParcours from './MonParcours';
import MesValeurs from './MesValeurs';
import MesExperiences from './MesExperiences';
import MesCompetences from './MesCompetences';
import MonObjectif from './MonObjectif';

function Apropos() {
  const [ongletActif, setOngletActif] = useState('objectif');

  const renderContenu = () => {
    switch (ongletActif) {
      case 'parcours':
        return <MonParcours />;
      case 'valeurs':
        return <MesValeurs />;
      case 'experiences':
        return <MesExperiences />;
      case 'competences':
        return <MesCompetences />;
      case 'objectif':
      default:
        return <MonObjectif />;
    }
  };

  return (
    <section className="apropos">
      <div className="container">
        <h2 className="titre-principal">À propos de moi</h2>
        <p  className="intro">Je m'appelle <strong>Diallo Oumar Tely</strong>.Je suis passionné par les bases de données, le Big Data et tous ce qui est en rapport avec les données. J’aime concevoir des solutions claires et efficaces. Je fais attention à la qualité des données et à la performance des systèmes. Je travaille toujours avec méthode et rigueur pour garantir des résultats fiables.</p>

        {/* Onglets */}
        <div className="onglets">
          <button
            className={`onglet ${ongletActif === 'parcours' ? 'active' : ''}`}
            onClick={() => setOngletActif('parcours')}
          >
            Mon parcours
          </button>
          <button
            className={`onglet ${ongletActif === 'valeurs' ? 'active' : ''}`}
            onClick={() => setOngletActif('valeurs')}
          >
            Mes valeurs
          </button>
          <button
            className={`onglet ${ongletActif === 'experiences' ? 'active' : ''}`}
            onClick={() => setOngletActif('experiences')}
          >
            Mes expériences
          </button>
          <button
            className={`onglet ${ongletActif === 'competences' ? 'active' : ''}`}
            onClick={() => setOngletActif('competences')}
          >
            Compétences techniques
          </button>
          <button
            className={`onglet ${ongletActif === 'objectif' ? 'active' : ''}`}
            onClick={() => setOngletActif('objectif')}
          >
            Mon objectif
          </button>
        </div>

        {/* Contenu dynamique */}
        <div className="contenu-onglet">
          {renderContenu()}
        </div>
      </div>
    </section>
  );
}

export default Apropos;
