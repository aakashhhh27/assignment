export default function Body() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-5xl font-bold p-2">Title</h1>
      <p className="text-gray-500 text-lg mt-2">Subtitle</p>
      <div className="mt-4 p-2 flex gap-4">
        <button className="bg-gray-200 text-black font-normal py-2 px-4 rounded-xl border-black hover:bg-gray-300">
          Button
        </button>
        <button className="bg-black text-white font-normal py-2 px-4 rounded-xl hover:bg-gray-800">
          Button
        </button>
      </div>
    </div>
  );
}


Body;
