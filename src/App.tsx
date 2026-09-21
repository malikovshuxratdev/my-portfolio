import { Contact } from '@/components/Contact';
import { Education } from '@/components/Education';
import { Experience } from '@/components/Experience';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Projects } from '@/components/Projects';
import { Skills } from '@/components/Skills';

export default function App() {
    return (
        <div className="grain relative min-h-dvh">
            <Header />
            <main>
                <Hero />
                <Experience />
                <Projects />
                <Skills />
                <Education />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}
