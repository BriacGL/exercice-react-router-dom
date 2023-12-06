import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import ItemDetail from './pages/ItemDetail';
import NavBar from './components/NavBar';
import './app.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div>
        <NavBar />
        <Home />
      </div>
    ),
  },
  {
    path: '/about',
    element: (
      <div>
        <NavBar />
        <About />
      </div>
    ),
  },
  {
    path: '/contact',
    element: (
      <div>
        <NavBar />
        <Contact />
      </div>
    ),
  },
  {
    path: '/itemdetail/:id',
    element: (
      <div>
        <NavBar />
        <ItemDetail />
      </div>
    ),
  },
]);

function App() {
  return (
    <RouterProvider router={router}>
      <div>
        <NavBar />
      </div>
    </RouterProvider>
  );
}

export default App;
