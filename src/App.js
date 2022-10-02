import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './components/Header/Header';
import Purchase from './components/Main/Purchase/Purchase'
import Main from './components/Main/Main';


function App() {
  const router = createBrowserRouter([

    {
      path: '/', element: <Main/>, children: [

        {
          path: '/', element: <div>Default Page</div>
  
        },
    
        {
            path: '/home', element: <Header/>
        },
    
        {
          path: '/sales', element: <div>sales container</div>
        },
    
        {
          path: '/purchase', element: <Purchase/>
        },
    
        {
          path: '/itemInventory', element: <div>Item and inventory conrainer</div>
    
        }

      ]
    },
    

    {
      path: '*', element: <div>Page not Fount 404 error</div>
    }

])
return (
    <div>
        <RouterProvider router={router}></RouterProvider>
    </div>
);
}

export default App;

