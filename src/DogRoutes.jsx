import React from 'react';
import {
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import DogList from './DogList';
import FilterDogDetails from './FilterDogDetails';

function DogRoutes({dogs}) {
  return (
    <Routes>
        <Route path="/dogs" element={<DogList dogs={dogs} />} />
        <Route path="/dogs/:name" element={<FilterDogDetails dogs={dogs} />} />
        {/* <Navigate to="/dogs" /> */}
    </Routes>
    // <Switch>
    //   <Route exact path="/dogs">
    //     <DogList dogs={dogs} />
    //   </Route>
    //   <Route path="/dogs/:name">
    //     <FilterDogDetails dogs={dogs} />
    //   </Route>
    //   <Navigate to="/dogs" />
    // </Switch>
  );
}

export default DogRoutes;
