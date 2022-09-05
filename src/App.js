import React from 'react';
import { Editor } from 'lib';
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
