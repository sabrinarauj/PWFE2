import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Features from "./components/Features";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="page">
      <Navbar />
      <main className="container">
        <header className="banner">
          <Banner />
        </header>
        <Features />
      </main>
      <Footer />
    </div>
  );
}