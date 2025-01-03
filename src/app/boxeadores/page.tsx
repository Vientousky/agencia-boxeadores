import React from "react";
import "./boxeo.css";
import Image from "next/image";
const BoxeoPage: React.FC = () => {




  return (
    <section className="boxeo-page">
        <h1>Ranking</h1>
      <div className="ranking">
        <div className="card-rank">
            <Image
                src="/catbox.jpg"
                alt="Picture of the author"
                width={240}
                height={340}
            />
            <h3>1. Canelo Alvarez</h3>
            <p>Record: 56-1-2</p>
            <p>Division: Super Middleweight</p>
        </div>

        <div className="card-rank">
            <Image
                src="/catbox.jpg"
                alt="Picture of the author"
                width={240}
                height={340}
            />
            <h3>1. Canelo Alvarez</h3>
            <p>Record: 56-1-2</p>
            <p>Division: Super Middleweight</p>
        </div>

        <div className="card-rank">
            <Image
                src="/catbox.jpg"
                alt="Picture of the author"
                width={240}
                height={340}
            />
            <h3>1. Canelo Alvarez</h3>
            <p>Record: 56-1-2</p>
            <p>Division: Super Middleweight</p>
        </div>
      </div>
    </section>
  );
};

export default BoxeoPage;
