import React from "react";
import styles from './Inicio.module.css';

const Home: React.FC = () => {
  return (
    <section className={styles.home}>
      <div className={styles.subhome}>
        <h1>!Bienvenido a la <strong>Federación  de Boxeo Chaqueña</strong>!</h1>
        <p>
          Aqui podra ver casi todos los perfiles de los boxeadores y si sos
          entrenador o boxeador podra ver la regla y los tramites
        </p>

        <div className={styles.Buttons}>
          <button>
            
            <span>Boxeadores</span>

          </button>

          <button>
            Ranking
          </button>

          <button>
            Tramites
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
