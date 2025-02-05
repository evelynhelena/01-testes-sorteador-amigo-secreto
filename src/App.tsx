import { Home } from './pages/home'
import './index.css'
import './global.scss'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { NotFound } from './pages/not-found';


function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  )
}

export default App
