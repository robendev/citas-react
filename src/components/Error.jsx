function Error({ message }) {
  return (
    <div className="bg-red-800 text-white text-center py-3 mb-3 rounded-md font-bold font text-2xl">
      <p>{message}</p>
    </div>
  );
}

export default Error;
