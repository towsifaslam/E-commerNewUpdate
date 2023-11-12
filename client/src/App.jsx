 
import './App.css'
 
// import Counter from './features/counter/Counter'
 import Home from './Pages/Home'
import LoginPages from './Pages/LoginPages'
import SignupPages from './Pages/SignupPages'
import { createRoot } from "react-dom/client";
 
import {
  createBrowserRouter,
  RouterProvider,
   
} from "react-router-dom";
import CartPage from './Pages/CartPage';


const router = createBrowserRouter([
  {
    path: "/",
    element:<Home></Home>
  },
  {
    path: "/login",
    element: <LoginPages></LoginPages>,
  },
  {
    path: "/signup",
    element: <SignupPages></SignupPages>,
  },
  {
    path: "/cart",
    element:<CartPage></CartPage>
  },
]);

function App() {
 

  return (
    <div>
       <RouterProvider router={router} />

    </div>
  )
}

export default App
