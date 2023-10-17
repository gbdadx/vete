import Veterinaria from './assets/components/veterinaria/Veterinaria'; // Importa el componente Veterinaria
import Header from './assets/components/header/Header';
import Footer from './assets/components/footer/Footer';

export default function App() {
  return (
    <div className="App">
      <Header />
      <Veterinaria /> {/* Renderiza el componente Veterinaria dentro de App */}
      <Footer />
    </div>
  );
}

