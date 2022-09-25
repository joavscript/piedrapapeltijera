import { useEffect, useState } from "react"


const App = () => {
  const [userChoice, setUserChoice] = useState(null)
  const choices = ['piedra', 'papel', 'tijera']
  const [computerChoice, setComputerChoice] = useState(null)
  const [result, setResult] = useState(null)

  const pressClick = (valor) => {
    setUserChoice(valor)
    generateComputerChoice()
  }

  const generateComputerChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)]
    setComputerChoice(randomChoice)
  }

  useEffect(() => {

    switch (userChoice + computerChoice) {
      case 'tijerapapel':
      case 'piedratijera':
      case 'papelpiedra':
        setResult('¡Ganaste!')
        break
      case 'papeltijera':
      case 'tijerapiedra':
      case 'piedrapapel':
        setResult('¡Mejor suerte para la próxima!')
        break
      case 'piedrapiedra':
      case 'papelpapel':
      case 'tijeratijera':
        setResult('¡Empate!')
        break
    }
  }, [computerChoice, userChoice])

return (
  <div>
    <h1>Tu elección es: {userChoice}</h1>
    <h1>La elección de la computadora es: {computerChoice}</h1>
    {/* {<button onClick={() => pressClick('piedra')}>Piedra</button>
      <button onClick={() => pressClick('papel')}>Papel</button>
      <button onClick={() => pressClick('tijera')}>Tijera</button>} */}
    {choices.map((choice, index) =>
      <button key={index} onClick={() => pressClick(choice)}>{choice}</button>)
    }
    <h1>{result}</h1>
  </div>
)
}
export default App