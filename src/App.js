import { useContext, useEffect } from "react";
import { Editor } from "lib";
import { DappifyContext } from "react-dappify";

function App() {
  const { isAuthenticated, authenticate } = useContext(DappifyContext);

  const onClickHome = () => {
    console.log("Clicked home");
  };

  // useEffect(() => {
  //   if (!isAuthenticated) {
  //     authenticate();
  //   }
  // }, []);

  const editor = isAuthenticated && (
    <Editor
      projectId={process.env.REACT_APP_PROJECT_ID}
      onClickHome={onClickHome}
    />
  );
  return editor;
}

export default App;
