import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Linena from './pages/Linena'
import Terms from './pages/Terms'
import Privacy from './pages/Privacy'
import './App.css'
function App() {
  const [darkMode, setDarkMode] = useState(true)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const handlePayment = () => {
    // 포트원 결제 연동 예정
    console.log('Payment initiated - 포트원 연동 예정')
    alert('결제 기능이 곧 연동됩니다!')
  }

  return (
    <Router>
      <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-950 text-white' : 'bg-white text-gray-900'}`}>
        <Routes>
          <Route path="/" element={<Linena />} />
          <Route
            path="/mokea"
            element={
              <Home
                darkMode={darkMode}
                setDarkMode={setDarkMode}
                isScrolled={isScrolled}
                handlePayment={handlePayment}
              />
            }
          />
          <Route path="/terms" element={<Terms darkMode={darkMode} />} />
          <Route path="/privacy" element={<Privacy darkMode={darkMode} />} />
        </Routes>

        {/* Custom Animations */}
        <style>{`
          @keyframes gradient {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          .animate-gradient {
            background-size: 200% 200%;
            animation: gradient 3s ease infinite;
          }
          @keyframes bounce-slow {
            0%, 100% { transform: translateY(0) rotate(-5deg); }
            50% { transform: translateY(-10px) rotate(5deg); }
          }
          .animate-bounce-slow {
            animation: bounce-slow 2s ease-in-out infinite;
          }
          .delay-150 {
            animation-delay: 150ms;
          }
          .delay-300 {
            animation-delay: 300ms;
          }
        `}</style>
      </div>
    </Router>
  )
}

export default App
