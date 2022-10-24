import { BsSearch } from "react-icons/bs";

export default function Home() {
  return (
    <div className="grid place-items-center h-screen font-mono">
      <div>
        <h1 className="text-2xl mb-5">Stock screener</h1>
        <div className="flex align-center">
          <input type="text" className="border-2 rounded pl-1 border-gray-400" />
          <button className="ml-4 border-2 px-2 rounded border-gray-800">
            <BsSearch onClick={() => {
              console.log("Clicked!!");
            }} />
          </button>
        </div>
      </div>
    </div>
  )
}