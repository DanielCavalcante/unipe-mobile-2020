import React from 'react';
import {Router, Scene, Stack, Actions} from 'react-native-router-flux';
import Home from './src/screens/Home';
import Todos from './src/screens/Todos';

const App: () => React$Node = () => {
  return (
    <>
      <Router>
        <Stack key="root" headerLayoutPreset="center">
          <Scene key="home" initial={true} component={Home} hideNavBar={true} />
          <Scene key="todos" component={Todos} hideNavBar={false} />
        </Stack>
      </Router>
    </>
  );
};

export default App;
