import React, { useEffect, useContext } from 'react';
import { Editor } from 'lib';
import { DappifyContext } from 'react-dappify';

function App() {
  const {isAuthenticated, user, authenticate} = useContext(DappifyContext);

  // useEffect(() => {
  //   if (!user)
  //     authenticate({ provider: 'metamask' });
  // }, [user]);

  const onClickHome = () => {
    console.log('Clicked home');
  }

  const editor = isAuthenticated && (
    <Editor projectId={process.env.REACT_APP_PROJECT_ID} onClickHome={onClickHome}/>
  );
  return editor;
}

export default App;
