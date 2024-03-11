import { useState } from 'react'
import './App.css'

function App() {

const [mesas, setMesas] = useState(10)



  function entrada() {
    if (mesas > 0) {
      alert('Cliente chegando....')
      setMesas(mesas - 1)
    } else {
      alert('Desculpe... Não há mesas disponíveis.')
    }
  }

  function saida() {
    if (mesas < 10) {
      alert('Cliente saindo....')
      setMesas(mesas + 1)
    } else {
      alert('Ops... Todas as mesas estão desocupadas.')
    }
  }

  return (
    <>
    <h1>Restaurante Avenida</h1>
    <h2>Controle de Mesas</h2>
    <hr />
    <img className='figura' src="./restaurante_imagem.avif" alt="Imagem do Restaurante" />

    <h2>
    Mesas Disponíveis: <span className='destaque'>{mesas}</span> - 

    Mesas Ocupadas: <span className='destaque'>{10-mesas}</span>
    </h2>

    <div className="button-container">
  <button onClick={entrada}>Entrada do Cliente</button>
  <button onClick={saida}>Saída do Cliente</button>
</div>
    </>
  )
}

export default App


//pra colocar dois elementos juntos, tem que colocar um div em volta deles em react ou uma abertura e um fechamento de tag.

//exercício 2 ta no blackboard no último slide da aula de hoje.