import Inicio from "./components/Inicio/Inicio";
import Nosotros from "./components/Nosotros/Nosotros";
import Propuestas from "./components/Propuestas/Propuestas";
import Contacto from "./components/Contacto/Contacto"



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
