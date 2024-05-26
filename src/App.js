import { Route, Routes } from 'react-router-dom'
import Home from './routes/Home'
import About from './routes/About';
import Skills from './routes/Skills';
import Contact from './routes/Contact';
import Work from './routes/Work';
import Project from './routes/Project';
import { Helmet } from 'react-helmet';


function App() {

    const schemaMarkup = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": "https://yassirimzi.com/",
        "email" : "contact@yassirimzi.com",
        "name": "Yassir Imzi",
        "url": "https://yassirimzi.com/",
        "logo": "https://yassirimzi.com/static/media/logo_details.5c04f6afb5b4aa1e3f3017c54c808ce2.svg",
        "description": "Hello! I'm a dynamic full-stack developer immersed in cutting-edge technologies. With expertise in Next.js, React.js, MongoDB, Node.js, Express, TypeScript, and the sleek design of Tailwind CSS, my portfolio showcases a fusion of creativity and the latest web development trends. Let's bring your digital ideas to life!",
        "sameAs": [
        "https://www.linkedin.com/in/yassir-imzi/",
        "https://www.instagram.com/yass_sir__/",
        ]
      };

    return (
        <>
            <Helmet>
                <script type="application/ld+json">{JSON.stringify(schemaMarkup)}</script>
            </Helmet>
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