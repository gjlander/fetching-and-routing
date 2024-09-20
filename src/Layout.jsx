import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';

const Layout = () => {
    return (
        <div className='min-h-screen flex flex-col'>
            <Navbar />
            <main className='grow'>
                <Home />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
