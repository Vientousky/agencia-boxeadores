import Inicio from "./components/inicio/Inicio";
import Nosotros from "./components/nosotros/Nosotros";
import Propuestas from "./components/propuestas/Propuestas";
import Contacto from "./components/contacto/Contacto"



export default function Home() {
  return (

    <main className="central" >

      <Inicio/>
      <Nosotros/>
      <Propuestas/>
      <Contacto/>
      
    </main>
  );
}
