import React, { useEffect, useContext } from 'react';
import { Editor } from 'lib';
import { DappifyContext } from 'react-dappify';

function App() {
  const {isAuthenticated, user, authenticate} = useContext(DappifyContext);

  // useEffect(() => {
  //   if (!user)
  //     authenticate({ provider: 'metamask' });
  // }, [user]);

  const editor = isAuthenticated && (<Editor projectId={process.env.REACT_APP_PROJECT_ID}/>);
  return editor;
}

export default App;
