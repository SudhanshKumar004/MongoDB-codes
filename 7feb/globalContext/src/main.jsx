import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import GlobalContext from './GlobalContext.jsx'
createRoot(document.getElementById('root')).render(
   
  <GlobalContext>
    <App />
  </GlobalContext>

)
