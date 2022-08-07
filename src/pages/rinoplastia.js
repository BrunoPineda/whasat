import React from 'react';
import Servicio from '../components/servicio';

function cirugia() {
  return (
        <div className="">
            <div className="bg-sky-700 mb-0 w-full p-8 flex justify-center font-sans text-white">
                <h1>RINOPLASTÍA</h1>
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
                  src="https://cabani.pe/wp-content/uploads/2016/12/RINOPLASTIA.jpg"
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
               DURACIÓN 1 hora a 1 hora y media
               </div>
               <div className="text-center mt-5 mb-5 text-2xl" data-aos="fade-up-right">
               RECUPERACIÓN  2 semanas
               </div>
               <div className="text-center mt-5 mb-5 text-2xl" data-aos="fade-up-right">
               HOSPITALIZACIÓN no necesita / ambulatorio
               </div>
               <div className="text-center mt-5 mb-5 text-2xl" data-aos="fade-up-right">
               ANESTESIA local con sedación
               </div>
               <div className="text-center mt-5 mb-5 text-2xl" data-aos="fade-up-right">
               RESULTADOS PARCIALES  a los 15 días
               </div>
               <div className="text-center mt-5 mb-5 text-2xl" data-aos="fade-up-right">
               RESULTADOS FINALES al año
               </div>
                </p> 
            </div>
          </div>
          <div> 
            <center className="mx-10 p-8">
            <p>Resumen: La rinoplastia es una técnica quirúrgica que tiene como finalidad la corrección de la forma externa de la nariz. La intervención se realiza a través de unas incisiones que se hacen en el interior de las ventanas de la nariz; después los tejidos blandos se separan cuidadosamente de los cartílagos y huesos adyacentes y se corrigen las estructuras no deseadas. Posteriormente, los huesos y los cartílagos se sitúan de tal manera que tomen la forma adecuada para la nariz. Ocasionalmente puede ser necesario el injerto de cartílago y en el mismo acto quirúrgico se puede realizar la reconstrucción del tabique nasal, si está desviado, para aliviar la dificultad respiratoria que dicha desviación pueda producir (septoplastía). De esta manera, se logra obtener una nariz que realce la belleza facial de manera natural, renovando la armonía del rostro.</p>
            </center>
          </div>
          <div className="flex justify-center">
          <iframe width="1140" height="641" src="https://www.youtube.com/embed/Sh-soJVwNG0" title="Rinoplastia y Septoplastia en Clínica Cabani - Dr. Mario Cabani" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
              <p className="text-center mb-5">Dirección: Av. Guardia Civil 627, San Borja</p>
        </div>
        </div>
  );
}

export default cirugia;