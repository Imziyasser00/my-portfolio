import { Route, Routes } from 'react-router-dom'
import Home from './routes/Home'
import About from './routes/About';
import Skills from './routes/Skills';
import Contact from './routes/Contact';
import Work from './routes/Work';
import Project from './routes/Project';
 
function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/skills' element={<Skills />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/Work' element={<Work />} />
                <Route path="/project/:projectId" element={<Project />} />
            </Routes>
        </>
    );
}

export default App;