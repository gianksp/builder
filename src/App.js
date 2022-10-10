import { useContext } from "react";
import { Editor } from "lib";
import { DappifyContext } from "react-dappify";

function App() {
  const { isAuthenticated } = useContext(DappifyContext);

  const onClickHome = () => {
    console.log("Clicked home");
  };

  const editor = isAuthenticated && (
    <Editor
      projectId={process.env.REACT_APP_PROJECT_ID}
      onClickHome={onClickHome}
    />
  );
  return editor;
}

export default App;
