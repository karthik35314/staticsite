import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Headercontainer from "./components/Headercontainer/Headercontainer";
import Sidebar from "./components/sidebar/Sidebar";
import Container from "./components/container/Container";
import Center from "./components/Center";
function App() {
  return (
    <div>
      <Navbar />
      <Headercontainer />
      <Center />
      {/* <Container /> */}
    </div>
  );
}

export default App;
