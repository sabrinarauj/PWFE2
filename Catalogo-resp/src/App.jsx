import Navbar from "./components/Navbar";

import Features from "./components/Features";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="page">
       <header className="banner">
           <Navbar />
        </header>
      <main className="container">
        <Features />
      </main>
      <Footer />
    </div>
  );
}