import React from "react";
import { Switch, Route } from "react-router-dom";
// import "roboto-fontface/css/roboto/roboto-fontface.css";
// import { Grid } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core/styles";
// import Header from "./Header";
// import Form from "./Form";
// import PhotoCard from "./PhotoCard";
// import PhotosLoaderButton from "./PhotosLoaderButton";
import Home from "./Home";
import PhotoCardPreview from './PhotoCardPreview';
// const useStyles = makeStyles(() => ({
//   photoCardsWrapper: {
//     margin: '0 auto',
//   }
// }));

const App = () => {
 
    return (
      <Switch>
     <Route exact path="/" component={Home} />
        <Route path="/:id" render={(props) => <PhotoCardPreview {...props} />} />
    </Switch>
    );
  // }
}

export default App;
