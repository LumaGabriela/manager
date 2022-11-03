import React, { useState, useRef  } from "react";
import Header from "./components/Header/Header"
import logo from './logo.jpg'
import Global from "./global"
import Body from "./components/Body/Body"
import { useReactToPrint } from 'react-to-print'

function App() {

  const [data, setData] = useState({
    nome:'José Antônio Dos Santos Oliveira',
    parcela:0,
    valor:0,
    data:'27/10/2022',
    listadatas: [],
    pix:'451.119.792-04'

  })

  const componentRef = useRef()
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  })
 

  return ( 
    <div className="App">
      <div ref={componentRef}> 
        <Global/>

        <Header 
        data={data}
        setData={setData}
        logo={logo}/>

        <Body data={data}
          setData={setData}/>
      
      </div>
      <button onClick={handlePrint}>Print </button>
    </div>
    
  )
}

export default App;
