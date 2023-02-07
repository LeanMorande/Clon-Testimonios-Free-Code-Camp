import React from "react";
import "../Stylesheets/Testimonio.css";
function Testimonio(props){
  return(
    <div className="contenedor-testimonio">
      <img className="imagen-testimonio" 
        src={require(`../img/testimonio-${props.imagen}.png`)}
        alt="foto de emma"
      />
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio"><b>{props.nombre}</b> de {props.pais}</p>
        <p className="cargo-testimonio">{props.cargo} en <b>{props.empresa}</b></p>
        <p className="texto-testimonio">"{props.testimonio}"</p>
      </div>
        
     </div>  )
}
export default Testimonio;