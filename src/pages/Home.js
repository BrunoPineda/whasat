import React from "react";
import Compromiso from '../components/Compromiso';
import Servicio from '../components/servicio';
import {Carousel} from '../components/Carousel';
import { useState } from "react";

const Home = ({toggle}) => {
   

  return (
    <div>
      <Carousel />
      <div className="px-8 py-8 ">
        <div className="lg:px-20 sm:px-0">
        <div className="text-center mt-5 mb-5 font-bold text-4xl"  data-aos="fade-down">
          NUESTRO COMPROMISO
        </div>

        <div className="text-center mt-5 mb-5 text-4xl text-blue-500" data-aos="fade-down">
          Ponemos a su disposición nuestros más de 20 años de experiencia
          brindando los procedimientos más avanzados, con la seguridad y
          profesionalismo que nos caracterizan.
        </div>
        
        <div class="grid md:grid-cols-4 gap-4 sm:grid-cols-1 " >
          <Compromiso 
            color="container text-center shadow-3xl rounded bg-blue-700 text-blue-100 p-6"
            icon="fa-solid fa-shield text-5xl mt-5 mb-5"
            titulo="Seguridad"
            contenido="Contamos con infraestructura y equipamiento médico de la más alta calidad para brindar al paciente la seguridad que merece."
          ></Compromiso>
          <Compromiso
            color="container text-center bg-orange-400 text-blue-100 p-6"
            icon="fa-solid fa-file text-5xl mt-5 mb-5"
            titulo="Profesionalismo"
            contenido="Junto con el Dr. Cabani, nuestro staff de médicos y especialistas marcan la diferencia por su experiencia y prestigio profesional."
          ></Compromiso>
          <Compromiso
            color="container text-center shadow-3xl rounded bg-blue-700 text-blue-100 p-6"
            icon="fa-solid fa-circle-check text-5xl mt-5 mb-5"
            titulo="Confianza"
            contenido="La satisfacción y respaldo de nuestros pacientes son nuestros más grandes logros."
          ></Compromiso>
          <Compromiso
            color="container text-center bg-orange-400 text-blue-100 p-6"
            icon="fa-solid fa-book-medical text-5xl mt-5 mb-5"
            titulo="Ética"
            contenido="Cada decisión es tomada siguiendo nuestro compromiso ético y buscando siempre el bienestar de nuestros pacientes."
          ></Compromiso>
        </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
           <path fill="#22D3EE" fill-opacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
        <div className="bg-cyan-400">
        <div className="text-center  mb-5 font-bold text-4xl "  data-aos="fade-up-right">
          CLÍNICA BruCorp
        </div>
        <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-5xl">
          <div class="md:flex ">
            <div class="md:shrink-0">
              <img
                class="h-50 w-full object-cover md:h-full md:w-80"
                src="https://cabani.pe/wp-content/uploads/2021/08/IMG_4822.jpg"
                alt="cabani"
              ></img>
            </div>
  
            <div class="p-8">
              <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                BruCorp
              </div>
              <div className="text-center mt-5 mb-5  text-4xl" data-aos="flip-left">
                <i class="fa-solid fa-user-doctor text-5xl text-blue-900"></i>
                <div className="text-5xl mt-5 font-bold">80+</div>
                <div className="text-5xl mt-5 text-2xl">TRATAMIENTOS</div>
              </div>

              <div className="text-center mt-5 mb-5  text-4xl" data-aos="fade-right">
                <i class="fa-solid fa-arrow-rotate-right text-5xl text-blue-900"></i>
                <div className="text-5xl mt-5 font-bold">4000+</div>
                <div className="text-5xl mt-5 text-2xl">
                  CIRUGÍAS REALIZADAS
                </div>
              </div>

              <div className="text-center mt-5 mb-5  text-4xl" data-aos="flip-left">
                <i class="fa-solid fa-briefcase text-5xl text-blue-900"></i>
                <div className="text-5xl mt-5 font-bold">20+</div>
                <div className="text-5xl mt-5 text-2xl">
                  AÑOS DE EXPERIENCIA
                </div>
              </div>

              <a
                href="#"
                class="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
              >
                Historia
              </a>
              <p class="mt-2 text-slate-500 "  data-aos="fade-up-left">
                El Dr. Mario Cabani Ravello empezó su carrera en la Universidad
                Nacional Mayor de San Marcos, en la cual se graduó como médico
                cirujano. Empezando a hacer medicina en Villa El Salvador, entre
                mucha gente pobre que no tenía cómo tratarse quemaduras o labios
                leporino, decide incursionar en el mundo de la estética. Para
                ello buscó la mejor preparación, encontrando en la prestigiosa
                Universidad de Río de Janeiro el centro de estudios ideal para
                especializarse en Cirugía Plástica.{" "}
              </p>
              <div>
                <div class="flex items-center space-x-2 text-base mt-5">
                  <h4 class="font-semibold text-slate-900"  data-aos="fade-down-left">
                    Que dicen nuestros clientes
                  </h4>
                  <span class="rounded-full bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-700">
                    204
                  </span>
                </div>
                <div class="mt-3 flex -space-x-2 overflow-hidden">
                  <img
                    class="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <img
                    class="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <img
                    class="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                    alt=""
                  />
                  <img
                    class="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <img
                    class="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
                <div class="mt-3 text-sm font-medium">
                  <a href="#" class="text-blue-500">
                    + 198 más
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
         <path fill="#22D3EE" fill-opacity="1" d="M0,32L48,53.3C96,75,192,117,288,133.3C384,149,480,139,576,138.7C672,139,768,149,864,165.3C960,181,1056,203,1152,192C1248,181,1344,139,1392,117.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
        </svg>
        <div className="text-center mt-5 mb-5 font-bold text-4xl " data-aos="zoom-in">
        NUESTROS SERVICIOS
        </div>
        <div className="text-center mt-5 mb-10 text-4xl text-blue-500 " data-aos="zoom-in-up">
        Le ofrecemos servicios en Cirugía Plástica y Medicina Estética para todas las zonas del cuerpo como Perfil, Rostro, Corporal , Capilar y de la piel.
        </div>
        
        <div
          /* className='contenedor-principal' */ className="sm:px-20 grid grid-cols-1 2xl:grid-cols-3  gap-8 mt-5 mb-5 px-0 lg:grid-cols-2 " 
        >
          
          <Servicio
            nombre="Resumen: La abdominoplastía es un procedimiento quirúrgico que elimina el exceso de piel y tejido..."
            imagen="1"
          />
          <button
            style={{
              position: "absolute",
              top: "auto",
              padding: 10,
              background: "white",
            }}
            onClick={toggle}
          >
            Ver datos
          </button>
          
          <Servicio
            nombre="Resumen: El ácido hialurónico es una sustancia natural que está presente en nuestro cuerpo de..."
            imagen="2"
          />
          <button
            style={{
              position: "absolute",
              top: "auto",
              padding: 10,
              background: "white",
            }}
            onClick={toggle}
          >
            Ver datos
          </button>
          <Servicio
            nombre="Resumen: La blefaroplastía consiste en eliminar el exceso de piel redundante y las bolsas de..."
            imagen="3"
          />
          <Servicio
            nombre="Resumen: El lifting o ritidectomía facial consiste en el estiramiento de los tejidos con flacidez..."
            imagen="4"
          />
          <Servicio
            nombre="Resumen: La mamoplastía es una intervención quirúrgica que se clasifica de dos maneras: mamoplastía de..."
            imagen="5"
          />
          <Servicio
            nombre="Resumen: La otoplastía es un procedimiento que permite cambiar la forma, la posición o el..."
            imagen="6"
          />
          <Servicio
            nombre="Resumen: El peeling químico o exfoliación química es una técnica que se utiliza para mejorar.."
            imagen="7"
          />
          <Servicio
            nombre="Resumen: El plasma rico en plaquetas se obtiene de la misma sangre del paciente, tomando..."
            imagen="8"
          />
          <Servicio
            nombre="Resumen: La rinoplastia es una técnica quirúrgica que tiene como finalidad la corrección de la..."
            imagen="9"
          />
          <Servicio
            nombre="Resumen: El injerto graso es un procedimiento quirúrgico, mínimamente invasivo, mediante el cual se extrae..."
            imagen="10"
          />
          <Servicio
            nombre="Resumen: La vitamina C es un potente antioxidante, altamente efectivo, que protege a las células..."
            imagen="11"
          />
          <Servicio
            nombre="Resumen: La lipoescultura permite eliminar depósitos de grasa inestéticos de determinadas áreas del cuerpo, como..."
            imagen="12"
          />
        </div>
        <br />
        <iframe
          title="My Daily Marathon Tracker"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7802.473333079906!2d-77.010725!3d-12.095944!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd96e4b4daaf27f76!2sCabani!5e0!3m2!1ses-419!2spe!4v1654040742965!5m2!1ses-419!2spe"
          width="100%"
          height="500"
          allowfullscreen=""
        ></iframe>
      </div>
    </div>
  );
};

export default Home;
