import './app.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Content from './components/Content';
import Input from './components/Input';

function App() {
  return (
    <main className="main">
    <Header />
    <Hero />
    <div className="content">
    <Content />
    <Input />
    </div>
    
    </main>
  );
}

export default App;
