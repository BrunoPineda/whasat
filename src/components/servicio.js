import React from 'react';
//import '../assets/css/servicios.css';

function servicio(props) {
  return ( 
    <div className='bg-white shadow-xl rounded flex flex-col sm:flex-row'data-aos="zoom-out">
      <img 
        className='w-full h-52    sm:w-2/4 '
        src={require(`../assets/imgs/img${props.imagen}.jpg`)}
        alt='Foto'/>
      <div className='p-6'>
        <p className='text-xl sm:text-2xl'>
        {props.nombre}
        </p>
      </div>
    </div>
  );
}

export default servicio;

{/* <div className='contenedor-servicio'>
      <img 
        className='imagen-servicio'
        src={require(`../assets/imgs/img${props.imagen}.jpg`)}
        alt='Foto de Emma'/>
      <div className='contenedor-texto-servicio'>
        <p className='nombre-servicio'>
          <strong>{props.nombre}</strong> de {props.pais}
        </p>
        <p className='cargo-servicio'>
          {props.cargo} en <strong>{props.empresa}</strong>
        </p>
        <p className='texto-servicio'>"{props.servicio}"</p>
      </div>
    </div> */}