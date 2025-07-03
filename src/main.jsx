import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Un the index.html (the main HTML file), we are doing 2 things:
// 1. we are creating a div with id="root"
// 2. we are calling this script (main.jsx)

// Now here we use the react-dom/client to render the App component into the div with id="root".
// Usually the id="root" is the whole HTML page, but it does not have to be the case (we don't have it in Zygoma/Atrium).
// The optimal condition is that the div with id="root" is empty and no other JavaScript library will mess with it (only this React instance).
createRoot(document.getElementById('root')).render(<App />)
