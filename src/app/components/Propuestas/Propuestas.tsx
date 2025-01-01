import React from "react";
import Image from "next/image";
import styles from './propuesta.module.css';


const Propuestas: React.FC = () => {
  return (
    <section className={styles.Propuestas}>
      <figure className={styles.PropuestasImg}>

          <Image
          className="pro-img" 
          src={'/box.jpg'}
          alt="imagen"
          width={400}
          height={660}
          />

      </figure>

      <div className={styles.propuestasContent}>

        <h1>¿Que proponemos?</h1>

        <div className={styles.propuestasCard}>

          <h1>Propuesta 1</h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            hic deserunt error assumenda obcaecati rerum laboriosam reiciendis
            consectetur cumque nulla 
          </p>

        </div>

        <div className={styles.propuestasCard}>

          <h1>Propuesta 2</h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            hic deserunt error assumenda obcaecati rerum laboriosam reiciendis
            consectetur cumque nulla 
          </p>

        </div>

        <div className={styles.propuestasCard}>

          <h1>Propuesta 3</h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            hic deserunt error assumenda obcaecati rerum laboriosam reiciendis
            consectetur cumque nulla
          </p>

        </div>
      </div>
    </section>
  );
};

export default Propuestas;
