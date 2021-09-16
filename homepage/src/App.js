import './App.css';
import NavBar from "./components/NavBar";
import {
  AppBar, Toolbar, Box, Typography, Button
} from "@material-ui/core";
import PlaceCard from './components/PlaceCard';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Box m={8}>
        <Typography variant="h3" >The Only Link You’ll Ever Need</Typography>
        <Box m={1.5}>

          <Typography variant="h5" >Connect audiences to all of your content with just one link</Typography>
        </Box>
        <Button variant="contained" color="primary">Get Started For Free</Button>

        <Box m={8}>
          <PlaceCard IsPictureFirst={true} heading={"Use it anywhere"} para={"Take your Linktree wherever your audience is,\
                     to help them to discover all your important content."}></PlaceCard>
          <PlaceCard IsPictureFirst={false} heading={"Use it anywhere"} para={"Take your Linktree wherever your audience is,\
                     to help them to discover all your important content."}></PlaceCard>
          <PlaceCard IsPictureFirst={true} heading={"Use it anywhere"} para={"Take your Linktree wherever your audience is,\
                     to help them to discover all your important content."}></PlaceCard>
          <PlaceCard IsPictureFirst={false} heading={"Use it anywhere"} para={"Take your Linktree wherever your audience is,\
                     to help them to discover all your important content."}></PlaceCard>
        </Box>
      </Box>

    </div>
  );
}

export default App;
