import { useState } from "react"
import { Conteudo } from "./components/Conteudo"


function App() {
                                      //TIPANDO
  const [content, setContent] = useState<string[]>([ 
    'Conteudo 1',
    'Conteudo 2',
    'Conteudo 3'
  ])

  const createContent = () =>{
    setContent([...content, 'Conteudo 4'])
  }

  return (
    <div>
      {content.map(cont => {
        return <Conteudo text={cont} />
      })}

      <button onClick={createContent}>Adicionar novo conteudo</button>
    </div>
  )
}

export default App