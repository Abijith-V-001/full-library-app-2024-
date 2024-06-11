import logo from './logo.svg';
import './App.css';
import AddBooks from './Components/AddBooks';
import Search from './Components/Search';
import Delete from './Components/Delete';
import Viewall from './Components/Viewall';

function App() {
  return (
    <div>
     <AddBooks/>
     <Search/>
     <Delete/>
     <Viewall/>
    </div>
  );
}

export default App;
