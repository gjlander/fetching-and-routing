import './App.css';

//import components
import Layout from './Layout';
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

            {/* by nesting other routes inside this route, we can access the Outlet component. */}
            <Route path='/' element={<Layout />}>
                {/* using index here is like repeating path="/" this is what will appear on the root path */}
                <Route index element={<Home />} />

                {/* other paths will be what's shown in the url, without a "/" at the start */}
                <Route path='store' element={<Store />} />

                {/* having a ":" at the start indicates a dynamic route. This could be used for a product or item page */}
                <Route path='store/:productId' element={<Item />} />
            </Route>
        </Routes>
    );
}

export default App;
