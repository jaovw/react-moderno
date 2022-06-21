import { useState } from "react"
import { Conteudo } from "./components/Conteudo"
import './App.css'


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

      <button // PODENDO ESTILIZAR DESSA FORMA TAMBÉM
        onClick={createContent}
        style={{
          backgroundColor: '#8257e6',
          border: 0,
          padding: '6px 12px',
          color: '#FFF'
        }}
        >Adicionar novo conteudo
      </button>
    </div>
  )
}

export default App