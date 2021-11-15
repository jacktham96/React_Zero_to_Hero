import Header from "./components/Header";
import BottomNav from "./components/BottomNav";
import Main from "./pages/Main";

function App() {
  return (
    <div>
      <Header title="Chat" canBack/>
      <Main />
      <BottomNav />
    </div>
  );
}

export default App;
