import { useState } from "react"

export default function App() {

  const [color, setColor] = useState("#F6FDC3");

  return (
    <div className="w-full h-screen flex justify-center" style={{backgroundColor: color}}>
      <div className="fixed bottom-2 flex gap-3 bg-white px-4 py-2 rounded-md shadow-lg">
        <button className="h-8 w-16 bg-green-500 rounded-md flex justify-center items-center shadow-md text-white" onClick={function() {setColor("rgb(34 197 94)")}}>
          Green
        </button>
        <button className="h-8 w-16 bg-red-500 rounded-md flex justify-center items-center shadow-md text-white" onClick={function() {setColor("rgb(239 68 68)")}}>
          Red
        </button>
        <button className="h-8 w-16 bg-blue-500 rounded-md flex justify-center items-center shadow-md text-white" onClick={function() {setColor("rgb(59 130 246)")}}>
          Blue
        </button>
      </div>
    </div>
  )
}