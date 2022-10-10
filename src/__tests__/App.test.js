import ShallowRenderer from "react-test-renderer/shallow";
import { DappifyProvider } from "react-dappify";
import App from "App";

describe("App", () => {
  let renderer;

  beforeAll(() => {
    renderer = new ShallowRenderer();
    renderer.render(
      <DappifyProvider>
        <div className="App">
          <App />
        </div>
      </DappifyProvider>
    );
  });

  test("", () => {
    // in your test:
    expect(renderer.getRenderOutput()).toBe(undefined);
  });
});
