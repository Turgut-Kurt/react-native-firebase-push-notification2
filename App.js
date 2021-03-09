import React from 'react';
import {StatusBar} from 'react-native';
import RootContainer from './RootContainer';
const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <RootContainer />
    </>
  );
};
export default App;
