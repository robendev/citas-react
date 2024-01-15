import { useState, useEffect } from "react";

import Error from "./Error";

function Formulario({ pacientes, setPacientes, paciente, setPaciente }) {
  const [nombreMascota, setNombreMascota] = useState("");
  const [nombrePropietario, setNombrePropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fechaAlta, setFechaAlta] = useState("");
  const [sintomas, setSintomas] = useState("");

  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setNombreMascota(paciente.nombreMascota);
      setNombrePropietario(paciente.nombrePropietario);
      setEmail(paciente.email);
      setFechaAlta(paciente.fechaAlta);
      setSintomas(paciente.sintomas);
    }
  }, [paciente]);

  const generarKey = () => {
    const fecha = Date.now().toString(36);
    const random = Math.random().toString(36).substring(2);

    return fecha + random;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    /* Validación del Formulario */
    if (
      [nombreMascota, nombrePropietario, email, fechaAlta, sintomas].includes(
        ""
      )
    ) {
      setError(true);
      return;
    }
    setError(false);

    const objetoPaciente = {
      nombreMascota,
      nombrePropietario,
      email,
      fechaAlta,
      sintomas,
    };

    if (paciente.id) {
      // Editando el Registro
      objetoPaciente.id = paciente.id;
      const pacientesActualizados = pacientes.map((pacienteState) =>
        pacienteState.id === paciente.id ? objetoPaciente : pacienteState
      );

      setPacientes(pacientesActualizados);

      setPaciente({});
    } else {
      // Nuevo registro
      (objetoPaciente.id = generarKey()),
        setPacientes([...pacientes, objetoPaciente]);
    }

    // Reiniciar el formulario
    setNombreMascota("");
    setNombrePropietario("");
    setEmail("");
    setFechaAlta("");
    setSintomas("");
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-3 md:mx-0">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

      <p className="text-xl text-center mt-5 mb-5 ">
        Añade Pacientes y{" "}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-5 mb-5"
      >
        {error && <Error message="Todos los campos son Obligatorios" />}
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="nameMascota"
          >
            Nombre Mascota
          </label>
          <input
            id="nameMascota"
            type="text"
            placeholder="Nombre de la Mascota"
            className="border-2 w-full p-1 mt-1 rounded-md placeholder-gray-400"
            value={nombreMascota}
            onChange={({ target: { value } }) => setNombreMascota(value)}
          />
        </div>

        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="namePropietario"
          >
            Nombre Propietario
          </label>
          <input
            id="namePropietario"
            type="text"
            placeholder="Nombre del Propietario"
            className="border-2 w-full p-1 mt-1 rounded-md placeholder-gray-400"
            value={nombrePropietario}
            onChange={({ target: { value } }) => setNombrePropietario(value)}
          />
        </div>

        <div className="mb-5 last-of-type:mb-0">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="email"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email Contacto Propietario"
            className="border-2 w-full p-1 mt-1 rounded-md placeholder-gray-400"
            value={email}
            onChange={({ target: { value } }) => setEmail(value)}
          />
        </div>

        <div className="mb-5 last-of-type:mb-0">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="alta"
          >
            Alta
          </label>
          <input
            id="alta"
            type="date"
            className="border-2 w-full p-1 mt-1 rounded-md placeholder-gray-400"
            value={fechaAlta}
            onChange={({ target: { value } }) => setFechaAlta(value)}
          />
        </div>

        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="sintomas"
          >
            Síntomas
          </label>
          <textarea
            placeholder="Describe los Síntomas"
            id="sintomas"
            rows="5"
            className="border-2 w-full p-1 mt-1 rounded-md placeholder-gray-400 w-300 h-300 max-h-200 overflow-y-auto resize-none"
            value={sintomas}
            onChange={({ target: { value } }) => setSintomas(value)}
          />
        </div>

        <input
          type="submit"
          value={paciente.id ? "Editar Paciente" : "Agregar Paciente"}
          className="bg-indigo-600 w-full py-3 text-white uppercase font-bold cursor-pointer hover:bg-indigo-700 rounded-md transition-all"
        />
      </form>
    </div>
  );
}

export default Formulario;
