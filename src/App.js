import { Route, Routes } from 'react-router-dom'
import Home from './routes/Home'
import About from './routes/About';
import Skills from './routes/Skills';
import Work from './routes/Work';
import Contact from './routes/Contact';
import ProjectDetails from './routes/ProjectsDetails';
 
function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/skills' element={<Skills />} />
                <Route path='/work' element={<Work />} />
                <Route path='/contact' element={<Contact />} />
                <Route path="/project-details" component={ProjectDetails} />
            </Routes>
        </>
    );
}

export default App;