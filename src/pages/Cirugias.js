import React from 'react';
import Servicio from '../components/serviciob';

function cirugia() {
  return (
        <div>
            <div className="bg-sky-700 mb-0 w-full p-8 flex justify-center font-sans text-white">
                <h1>Cirugías</h1>
            </div>
                  <div className="container min-w-full">
              <div className=" mb-10 w-full p-8 flex justify-center font-sans text-center text-xs">
                <h1>los mejores precios de toda latinoamérica</h1>
            </div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="">
              <blockquote>
          <Servicio
            nombre="Resumen: El injerto graso es un procedimiento quirúrgico, mínimamente invasivo, mediante el cual se extrae..."
            imagen="10"
            reference="#/injerto-graso"
          />

          <Servicio
            nombre="Resumen: El lifting o ritidectomía facial consiste en el estiramiento de los tejidos con flacidez..."
            imagen="4"
            reference="#/lifting"
          />
          <Servicio
            nombre="Resumen: La otoplastía es un procedimiento que permite cambiar la forma, la posición o el..."
            imagen="6"
            reference="#/otoplastia-bilateral"
          />
          <Servicio
            nombre="Resumen: La rinoplastia es una técnica quirúrgica que tiene como finalidad la corrección de la..."
            imagen="9"
            reference="#/rinoplastia"
          />

              </blockquote>
            </div>
            <div className=" md:block">
            <p className="animate-fade-in-down mx-12 mb-9 text-center text-sm">
            <Servicio
            nombre="Resumen: La lipoescultura permite eliminar depósitos de grasa inestéticos de determinadas áreas del cuerpo, como..."
            imagen="12"
            reference="#/lipoescultura"
          /> 
          <Servicio
            nombre="Resumen: La mamoplastía es una intervención quirúrgica que se clasifica de dos maneras: mamoplastía de..."
            imagen="5"
            reference="#/mamoplastia"
          />                    
          <Servicio
            nombre="Resumen: La blefaroplastía consiste en eliminar el exceso de piel redundante y las bolsas de..."
            imagen="3"
            reference="#/blefaroplastia"
          />           
          <Servicio
            nombre="Resumen: El peeling químico o exfoliación química es una técnica que se utiliza para mejorar.."
            imagen="7"
            reference="#/abdominoplastia"
          />


                </p>               
            </div>
          </div>
        </div>
        </div>
  );
}

export default cirugia;