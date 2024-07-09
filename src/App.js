import './App.css';
import dbjson from './data/db.json'
import MainBanner from './Banner'

function App() {
  return (
    <div className="App">
      <ul>
      {
        dbjson.gnb.map((e, i)=>
        <li>
          <a href={e.href}>
            {e.atext}
          </a>
        </li>
      )
      }
      </ul>
      <MainBanner></MainBanner>
    </div>
  );
}

export default App;
