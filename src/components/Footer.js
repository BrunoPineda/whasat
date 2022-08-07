import React from 'react';
 
function footer() {
  return (
    <div className="p-10 bg-gray-800 text-gray-200">
    <div className="max-w-7x1 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
            <div className="mb-5">
                <h4>Company</h4>
                <img src="https://cabani.pe/wp-content/uploads/2016/12/CABANI-BLANCO.png" alt="" />
            </div>
            <div className="mb-5">
            Copyright © 2022 | Clinica Cabani | Powered by Holacliente <br></br>
            Ponemos a su disposición nuestros más de 20 años de experiencia brindando los procedimientos más <br></br>
            avanzados, con la seguridad y profesionalismo que nos caracterizan. <br></br>
                <strong>Esta página fue hecha  por BruCorp en colaboración de Diego Guiterrez (Pana dragón)</strong>
                <br />
                <strong>Número: 4570800</strong>
            </div>
            <div className="mb-5">
                <center>
                <ul>
                    <li>Home</li>
                    <li>Otros servicios</li>
                    <li>Wellness Center</li>
                    <li>ONG Cabani Salud</li>
                </ul>
                </center>
            </div>
           
            <div className="mb-5">
                  <h4>Reserva tu cita</h4>
                <ul>
                    <form action="">
                        <label>Nombres</label><br />
                        <input type="text" /><br />
                        <label>Correo</label><br />
                        <input type="text" /><br />
                        <label>Teléfono</label><br />
                        <input type="text" /><br />
                        <label>Asunto</label><br />
                        <input type="text" /><br />
                        <label>Mensaje</label><br />
                        <input type="text" /><br />
                        <br />
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Enviar mensaje</button>

                    </form>
                </ul>
            </div>
        </div>
    </div>
</div>
  );
}

export default footer;