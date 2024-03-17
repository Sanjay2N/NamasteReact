// rafce -autocomplete for below
const contacts = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl p-4 m-4">Contact us page </h1>
      <form>
        <input
          type="text"
          className="border border-black p-2 m-2"
          placeholder="name"
        ></input>
        <input
          type="text"
          className="border border-black p-2 m-2"
          placeholder="tel"
        ></input>
        <button className="border border-black bg-gray-100 rounded-md p-2 back">
          submit
        </button>
      </form>
    </div>
  );
};

export default contacts;
