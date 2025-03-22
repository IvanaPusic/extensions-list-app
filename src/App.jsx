import { useState, useEffect } from 'react'
import data from './data';

function App() {
  const [extensions, setExtensions] = useState(data)

  useEffect(() => {
    console.log(extensions);   
  },[]);

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </>
  )
}

export default App
