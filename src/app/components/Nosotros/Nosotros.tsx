import React from "react";
import Image from "next/image";
import styles from './About.module.css';

const Nosotros: React.FC = () => {

  return (
    <section className={styles.about}>
      <div className={styles.aboutText}>
        <h1>Nosotros</h1>

        <p>
          Lorem ipsum dolor sit. <strong className={styles.strong}> Lorem ipsum dolor sit amet consectetur.</strong> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci, illo!
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          obcaecati, <strong className={styles.strong2} >impedit facere modi dolores dolor voluptatibus et voluptas
          autem? Aperiam fuga est, mollitia </strong> laudantium dolore exercitationem
          sint nostrum explicabo architecto.
        </p>

        <p>
         <strong className={styles.strong3}> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti
         enim saepe, </strong> corporis debitis quam quos commodi facilis modi magnam
          consectetur porro possimus voluptatum aperiam expedita harum nesciunt
          eum quo pariatur!
        </p>
      </div>

      <figure className={styles.aboutImage} >
        <Image
                  className="pro-img" 
                  src={'/catbox.jpg'}
                  alt="imagen"
                  width={400}
                  height={460}
                  />
      </figure>
    </section>
  );
};

export default Nosotros;
