import React from 'react';
 

function Compromiso(props) {
  return (
        <div className={props.color} data-aos="zoom-in">
          <i className={props.icon}></i>
          <div className="md:mt-5 mb-5 font-bold text-xl sm:mt-5 mb-5 font-bold text-xl">{props.titulo}</div>
          <div className="mt-5 mb-5 text-justify">{props.contenido}</div>
        </div>
  );
}

export default Compromiso;