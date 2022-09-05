import React from 'react';
import Editor from 'components/Editor';
import 'assets/sass/styles.scss';
import { DappifyProvider } from 'react-dappify';

function App() {

  return (
    <DappifyProvider>
      <div className="App">
        <Editor/>
      </div>
    </DappifyProvider>
  );
}

export default App;
