import './App.css';
import Card from './components/Card';

function App() {

  const obj1 = {
    pic:"https://upload.wikimedia.org/wikipedia/en/a/a7/BrightPoster.jpeg",
    name:"Bright",
    dt:"2017, David Ayer",
    tm: "117 min, ",
    disc: "Action, crime, fantasy",
    para:"Set in a word where fantasy creature live side by side humans. A humans cop is forced to work with an Orc to find a weapon everyone is prepared to kill for."
  }
  const obj2 = {
    pic: "https://c8.alamy.com/comp/2AGAWRY/the-witcher-poster-2019-credit-netflix-the-hollywood-archive-2AGAWRY.jpg",
    name:"Tomb Raider",
    dt:"2018, Roar Uthaug",
    tm: "125 min, ",
    disc: "Action, fantasy",
    para:"Lara Croft, the flerecely independently daughter of a missing adventurer, must push herself beyond her limits when she finds herself on the island where her father disappeared."
  }
  const obj3 = {
    pic: "https://www.digitalartsonline.co.uk/cmsdata/slideshow/3662115/baby-driver-rory-hi-res.jpg",
    name:"Jonhson",
    dt:"2014, Koel Uthaug",
    tm: "178 min, ",
    disc: "Drama Action, fantasy",
    para:"Corem League, the flerecely independently daughter of a missing adventurer, must push herself beyond her limits when she finds herself on the island where her father disappeared."
  }

  return (
    <div className="App">
      <Card movie={obj1} />
      <Card movie={obj2} />
      <Card movie={obj3} />
    </div>
  );
}

export default App;
