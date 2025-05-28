import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Leadership from './components/Leadership'
import Hero from './components/Hero';
import Volunteering from './components/Volunteering';


export default function App() {
  return (
    <div className="font-sans text-gray-800">
      <Header />
      <Hero />
      <main className="p-6 max-w-7xl mx-auto">
        <About />
        <Skills />
        <Projects />
        <Leadership />
        <Volunteering />
      </main>
    </div>
  )
}
