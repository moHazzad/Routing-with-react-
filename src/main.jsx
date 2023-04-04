import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home';
import Books from './Pages/Books';
import About from './Pages/About';
import BookDetails from './Pages/BookDetails';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path:"/",
        element:<Home />,
      },
      {
        path:"Books",
        element:<Books />,
        loader: ()=> fetch('https://api.itbook.store/1.0/new'),
      },
      {
        path:"Book/:id",
        element:<BookDetails />,
        loader: ({params})=> fetch(`https://api.itbook.store/1.0/books/${params.id}`),
      },
      {
        path:"About",
        element:<About />
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>,
)
