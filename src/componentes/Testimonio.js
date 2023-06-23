import React from "react";
import "../hojas-de-estilo/Testimonio.css"; //se escriben .. para salir de la carpeta componentes donde esta Testimonio.js e ir a la carpeta src que esta un nivel mas arriba, y alli ubico el folder hojas de estilo y bajo al file Testimonio.css
/*se expecifica la extension .css para que no lo confunda con el otro file testimonio y para que React sepa que es un archivo css*/

//export by named  export function Testimonio.
//Con exportacion nombrada se pueden tener varios elemntos exportados del mismo archivo
//In file App.js, use {}. import {Testimonio} from "./componentes/Testimonio";
//Con exportacion por default solo se puede exportar uno del archivo
// In file App.js. import Testimonio from "./componentes/Testimonio";.  In same file, export default Testimonio;

//Se utiliza props para recibir valores y poder usarlos en el componente asi como se reciben parametros y argumentos en javaScript.  props personaliza el componente cuando se reutiliza el componente 2:23:00
function Testimonio(props) {
  return (
    <div className="contenedor-testimonio">
      <img
        className="imagen-testimonio"
        src={require(`../imagenes/${props.imagen}.jpg`)}
        alt="foto de Emma 1:42:00"
      />
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio">
          <strong>{props.nombre}</strong> en {props.pais}
        </p>
        <p className="cargo-testimonio">
          {props.cargo} en <strong> {props.empresa}</strong>
        </p>
        <p className="texto-testimonio"> "{props.testimonio}"</p>
      </div>
    </div>
  );
}

export default Testimonio;
