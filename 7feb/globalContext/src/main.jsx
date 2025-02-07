import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { MyContext } from './GlobalContext.jsx'

createRoot(document.getElementById('root')).render(
    <MyContext>
    <App />
    </MyContext>
)
