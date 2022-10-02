import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css';
import Main from './components/Main/Main';

function App() {
  const router = createBrowserRouter([

    {
      path: '/', element: <div>THis is default page</div>
    },

    {
      path: '/procuct', element: <div>This is procuct page</div>
    },

    {
      path: '/about', element: <div>This is about page</div>
    },

    {
      path: '/contact', element: <div>This is contact page</div>
    },
   
    {
      path: '/main', element: <div>This is mian page</div>
    },

    {
      path: "*", element: <div>No items fount : 404 Error</div>
    }

  ])
  return (
    <div className="App">
      <Main/>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
