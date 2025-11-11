import Home from "./Components/Home/Home.tsx";
import { BrowserRouter} from 'react-router-dom';
import "./App.module.scss"

function App() {

  return (
    <BrowserRouter>
        <Home/>
    </BrowserRouter>
  )
}

export default App
