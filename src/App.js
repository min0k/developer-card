// import logo from "./logo.svg"; -- how to use images in react



import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Interest from "./components/Interest";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Interest />
      <Footer />
      <About />
    </div>
  );
}

export default App;
