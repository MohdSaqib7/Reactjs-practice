import './App.css';
import Box from './Box';

function App() {

  // const color_codes = ["#FF6663", "#333333", "#000000", "#38BB14", "#C90B0B","#FF8000","#FFF500","#CCCCCC","#7E41A2", "#C14911"]
  // const color_names = ["PINK","GRAY","BLACK","GREEN","RED","ORANGE","YELLOW","LIGHT GRAY", "PURPLE","BROWN"]

  return (
    <div className="App">
      <Box code="#FFC0CB" name= "PINK" />
      <Box code="#333333" name= "GRAY" />
      <Box code="#000000" name= "BLACK" />
      <Box code="#38BB14" name= "GREEN" />
      <Box code="#C90B0B" name= "RED" />
      <Box code="#FF8000" name= "ORANGE" />
      <Box code="#FFF500" name= "YELLOW" />
      <Box code="#CCCCCC" name= "LIGHT GRAY" />
      <Box code="#7E41A2" name= "PURPLE" />
      <Box code="#C14911" name= "BROWN" />
    </div>
  );
}

export default App;
