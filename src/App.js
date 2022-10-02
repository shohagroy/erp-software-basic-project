
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './components/Main/Main';
import Sales from './components/Sales/Sales';
import Purchase from './components/Purchase/Purchase'
import ItemInventry from './components/Main/ItemsInventory/ItemInventry';

function App() {

  const router = createBrowserRouter([

    {
      path: '/', element: <Main></Main>, children: [
        {path: '/', element: <div>This is default page</div>},
        {path:'/sales', element: <Sales></Sales>},
        {path: '/purchase', element: <Purchase></Purchase>},
        {path: 'inventory', element: <ItemInventry></ItemInventry>}
      ]
    },
    {path: '*', element: <h3>page not found! 404 error</h3>}


  ])
  return (
    <div className="App">


      <RouterProvider router={router}></RouterProvider>
    </div>
);
}

export default App;

