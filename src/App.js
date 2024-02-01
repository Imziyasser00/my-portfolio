import { Route, Routes } from 'react-router-dom'
import Home from './routes/Home'
import About from './routes/About';
import Skills from './routes/Skills';
 
function App() {
    return (
        <>
            <Routes>
                
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/skills' element={<Skills />} />
                <Route path='/about' element={<About />} />
            </Routes>
        </>
    );
}

export default App;