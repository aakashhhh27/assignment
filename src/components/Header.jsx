export default function Header() {
  return (
    <div className="bg-white-200 text-white p-5 flex justify-between">
      <img src="../../public/figma.png" className="h-10 w-auto py-2"/>
      <div className="flex gap-10">
        <div className="text-black flex gap-4 items-center">
          <a href="#">Products</a>
          <a href="#">Solutions</a>
          <a href="#">Community</a>
          <a href="#">Resources</a>
          <a href="#">Pricing</a>
          <a href="#">Contacts</a>
        </div>
        <div className="flex space-x-4">
          <button className="bg-gray-200 text-black font-normal py-2 px-4 rounded-xl border-black hover:bg-gray-300">
            Sign in
          </button>
          <button className="bg-black text-white font-normal py-2 px-4 rounded-xl hover:bg-gray-800">
            Register
          </button>
        </div>
      </div>
    </div>
  );
}
