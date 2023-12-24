import Button from "./Button";
import {GoBell} from 'react-icons/go'

function App() {

  const handleClick = () => {
    console.log('Click!!')
  }

  return (
    <div>
      <div>
        <Button primary rounded outline onClick={handleClick} className='mb-5'> <GoBell/> Click Me !!</Button>
      </div>
      <div>
        <Button secondary>Click Me!</Button>
      </div>
      <div>
        <Button warning>Click Me!</Button>
      </div>
      <div>
        <Button success>Click Me!</Button>
      </div>
      <div>
        <Button danger>Click Me!</Button>
      </div>
    </div>
  )
}

export default App
