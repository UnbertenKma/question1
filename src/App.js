import styled from "./App.module.scss";
import Sidebarr from "./component/Sidebarr";
import Content from "./component/Content";

function App() {
  return (
    <div className={styled.App}>
      <Sidebarr />
      <Content />
    </div>
  );
}

export default App;
