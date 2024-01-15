function Paciente({ paciente, setPaciente, eliminarPaciente }) {
  const { nombreMascota, nombrePropietario, email, fechaAlta, sintomas, id } =
    paciente;

  const handleClickEliminar = () => {
    const respuesta = confirm("Deseas eliminar este paciente?");

    if (respuesta) {
      eliminarPaciente(id);
    }
  };
  return (
    <div className="bg-white shadow-md rounded-lg p-5 mb-5">
      <p className="font-bold text-gray-700 uppercase mb-2.5">
        Nombre Mascota: {""}
        <span className="font-normal normal-case">{nombreMascota}</span>
      </p>

      <p className="font-bold text-gray-700 uppercase mb-2.5">
        Nombre Propietario: {""}
        <span className="font-normal normal-case">{nombrePropietario}</span>
      </p>

      <p className="font-bold text-gray-700 uppercase mb-2.5">
        Email: {""}
        <span className="font-normal normal-case">{email}</span>
      </p>

      <p className="font-bold text-gray-700 uppercase mb-2.5">
        Fecha Alta: {""}
        <span className="font-normal normal-case">{fechaAlta}</span>
      </p>

      <p className="font-bold text-gray-700 uppercase mb-2.5">
        Síntomas: {""}
        <span className="font-normal normal-case">{sintomas}</span>
      </p>

      <div className="flex justify-between mt-5">
        <button
          type="button"
          className="py-2 px-10 rounded-md cursor-pointer font-bold text-white uppercase bg-indigo-600 hover:bg-indigo-700 transition-all"
          onClick={() => setPaciente(paciente)}
        >
          Editar
        </button>
        <button
          type="button"
          className="py-2 px-10 rounded-md cursor-pointer font-bold text-white uppercase bg-red-600 hover:bg-red-700 transition-all"
          onClick={handleClickEliminar}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}

export default Paciente;
