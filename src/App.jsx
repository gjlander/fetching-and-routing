import './App.css';

//import components
import Home from './pages/Home';
import Store from './pages/Store';
import Item from './pages/Item';

// import Routes and Route components
import { Routes, Route } from 'react-router-dom';
function App() {
    return (
        //each individual route must be nested inside of the Routes component
        <Routes>
            {/* each route has a path and an element property */}
            {/* setting "/" as the path means that will be the homepage */}
            <Route path='/' element={<Home />} />

            {/* other paths will be what's shown in the url, without a "/" at the start */}
            <Route path='store' element={<Store />} />

            {/* having a ":" at the start indicates a dynamic route. This could be used for a product or item page */}
            <Route path='store/:productId' element={<Item />} />
        </Routes>
    );
}

export default App;
