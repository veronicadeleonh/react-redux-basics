import './App.css';
import { Titlebar } from "./components/Titlebar"
import { Menu } from "./components/Menu"
import { loadRestoAsync } from "./redux/restoSlice"
import { useDispatch } from "react-redux"

function App() {

  const dispatch = useDispatch()
  dispatch(loadRestoAsync())

  return (
    <div className="App">
      <div className="header">
        <Titlebar />
      </div>
      <div className="main">
        <Menu />
      </div>
    </div>
  );
}

export default App;
