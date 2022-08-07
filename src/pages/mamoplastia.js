import React from 'react';
import Servicio from '../components/servicio';

function cirugia() {
  return (
        <div className="">
            <div className="bg-sky-700 mb-0 w-full p-8 flex justify-center font-sans text-white">
                <h1>MAMOPLASTÍA</h1>
            </div>
                  <div className="lg:px-80 container min-w-full  md:px-0 container min-w-full">
              <div className=" mb-10 w-full p-8 flex justify-center font-sans text-center text-xs">
                <h1>Más de 20 años de experiencia</h1>
            </div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="">
              <blockquote>
              <div className="flex justify-center">
                <img
                  className="mb-5 mt-6 lg:h-[50rem] sm:h-1/3"
                  src="https://cabani.pe/wp-content/uploads/2016/12/MAMOPLAST%C3%8DA.jpg"
                />
              </div>
             
              </blockquote>
            </div>
            <div className=" md:block">
            <p className="animate-fade-in-down mx-12 mb-9 text-center text-sm text-4xl ">
                
                <div className="text-center mt-5 mb-5 text-4xl text-blue-900" data-aos="fade-up-right">
                   Cirugías
               </div>
               <div className="text-center mt-5 mb-5 text-2xl" data-aos="fade-up-right">
               DURACIÓN 1 hora y media a 2 horas
               </div>
               <div className="text-center mt-5 mb-5 text-2xl" data-aos="fade-up-right">
               RECUPERACIÓN 2 semanas
               </div>
               <div className="text-center mt-5 mb-5 text-2xl" data-aos="fade-up-right">
               HOSPITALIZACIÓN 1 día
               </div>
               <div className="text-center mt-5 mb-5 text-2xl" data-aos="fade-up-right">
               RESULTADOS PARCIALES inmediatos
               </div>
               <div className="text-center mt-5 mb-5 text-2xl" data-aos="fade-up-right">
               RESULTADOS FINALES al año
               </div>
                </p> 
            </div>
          </div>
          <div> 
            <center className="mx-10 p-8">
            <p>Resumen: La mamoplastía es una intervención quirúrgica que se clasifica de dos maneras: mamoplastía de aumento (con la ayuda de implantes de silicona) y la mamoplastía de reducción.</p>
            <br />
            <p>La mamoplastía de aumento se consigue implantando una prótesis, ya sea detrás del tejido mamario o debajo de los músculos torácicos. Las incisiones se realizan de forma que las cicatrices resulten lo menos visibles posible, habitualmente por debajo de la mama, alrededor de la parte inferior de la areola, o en la axila. El método de implantación y la posición de sus prótesis dependerá de sus preferencias, su anatomía y de la recomendación del cirujano, logrando que pueda obtener la forma y medida que más le favorezca.</p>
            <br />
            <p>La mamoplastía de reducción consigue reducir las mamas en peso, además de modificar su forma. La aréola es modificada y reposicionada en un lugar más natural y juvenil. El exceso de piel es retirado. El tamaño aproximado es definido por la paciente. De esta manera, se logra eliminar dolores de espalda, adquirir mayor satisfacción con la imagen corporal, adquirir simetría, eliminar restricciones de actividad física debido al tamaño y peso de los senos, entre otros beneficios.</p>
            </center>
          </div>
          <div className="flex justify-center">
          <iframe width="1140" height="641" src="https://www.youtube.com/embed/X1eZ9yKcPMw" title="Mamoplastia en Clínica Cabani - Dr. Mario Cabani" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
              <p className="text-center mb-5">Dirección: Av. Guardia Civil 627, San Borja</p>
        </div>
        </div>
  );
}

export default cirugia;