import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import linenaLogo from '../assets/ICON-MAIN.png'
import mokeaLogo from '../assets/ICON-MAIN.png'

function Linena() {
  const [darkMode] = useState(true)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in')
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('.scroll-animate').forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/95 backdrop-blur-sm border-b border-gray-800' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src={linenaLogo} alt="LINENA" className="w-10 h-10" />
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              MO-KEA 
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">About</a>
            <a href="#projects" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Contact</a>
          </nav>

          <a href="mailto:contact@linena.dev" className="px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white text-sm font-medium rounded-lg transition-colors">
            Get in Touch
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10 scroll-animate">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-8">
            <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></span>
            <span className="text-sm font-medium text-cyan-400">10대 창업가 | AI 엔지니어</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
            Code, Create,
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              and Conquer.
            </span>
          </h1>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
            기술은 나이를 따지지 않습니다.<br></br>복잡한 AI를 누구나 쉽게 사용할 수 있는 세상을 만듭니다.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#projects" className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium rounded-xl transition-all hover:shadow-lg hover:shadow-cyan-500/25 flex items-center gap-2">
              View Projects
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a href="#about" className="px-8 py-4 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-xl transition-colors border border-gray-800">
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="scroll-animate">
              <h2 className="text-4xl font-bold mb-6">
                미래를 만드는
                <br />
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  10대 개발자
                </span>
              </h2>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  안녕하세요, MO-KEA Inc.의 대표이자 설립자, LINENA - 박상현 입니다.
                </p>
                <p>
                  초등학교 3학년 때부터 시작한 개발 여정을 통해, 기술이 세상을 어떻게 변화시킬 수 있는지 직접 경험했습니다.
                </p>
                <p className="text-cyan-400 font-medium">
                  "기술은 나이를 따지지 않습니다. 나는 복잡한 AI 기술을 누구나 <br></br>'뷔페'처럼 쉽게 즐길 수 있는 세상을 만듭니다."
                </p>
              </div>
            </div>

            <div className="scroll-animate">
              <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-gray-800">
                <h3 className="text-xl font-bold mb-6 text-cyan-400">Tech Stack & Skills</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-500 mb-2">Frontend</p>
                    <div className="flex flex-wrap gap-2">
                      {['React', 'Vite', 'Tailwind CSS'].map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-cyan-500/10 text-cyan-400 text-sm rounded-lg border border-cyan-500/20">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-2">Backend & Infrastructure</p>
                    <div className="flex flex-wrap gap-2">
                      {['Python', 'Cloudflare', 'Home Server'].map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-blue-500/10 text-blue-400 text-sm rounded-lg border border-blue-500/20">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-2">Current Focus</p>
                    <div className="flex flex-wrap gap-2">
                      {['AI/ML', 'LLM Fine-tuning', 'SaaS'].map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-purple-500/10 text-purple-400 text-sm rounded-lg border border-purple-500/20">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-800">
                  <p className="text-sm text-gray-400">
                    <strong className="text-white">현재 진행 사업:</strong> 멀티 LLM 파인튜닝 엔진 MOKER 운영 중
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section - MO-KEA Featured */}
      <section id="projects" className="py-20 px-6 bg-gradient-to-b from-black to-gray-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl font-bold mb-4">
              My Featured Product
            </h2>
            <p className="text-gray-400">현재 운영 중인 핵심 서비스</p>
          </div>

          <div className="scroll-animate">
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-500 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>

              {/* Card */}
              <div className="relative bg-gradient-to-br from-gray-900 to-black p-12 rounded-3xl border-2 border-yellow-500/30">
                <div className="flex flex-col md:flex-row items-center gap-12">
                  {/* Logo */}
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-2xl blur-xl opacity-50"></div>
                      <div className="relative bg-gradient-to-br from-yellow-500/20 to-amber-500/20 p-8 rounded-2xl border border-yellow-500/30">
                        <img src={mokeaLogo} alt="MOKER Logo" className="w-24 h-24 invert" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 mb-4">
                      <span className="text-xs font-medium text-yellow-400">🚀 LIVE SERVICE</span>
                    </div>

                    <h3 className="text-3xl font-bold mb-3 bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
                      MO-KEA
                    </h3>

                    <p className="text-xl text-gray-300 mb-4">
                      나노바나나부터 클로드까지,
                      <br />
                      <strong className="text-white">AI 모델 뷔페 MOKER</strong>
                    </p>

                    <p className="text-gray-400 mb-8 leading-relaxed">
                      Claude, ChatGPT, Gemini, Llama 등 모든 AI를 한 곳에서 쉽게 파인튜닝하고 사용할 수 있는 올인원 플랫폼입니다.
                    </p>

                    <div className="flex flex-wrap gap-3">
                      <Link
                        to="/mokea"
                        className="group px-8 py-4 bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 text-black font-bold rounded-xl transition-all hover:shadow-lg hover:shadow-yellow-500/50 flex items-center gap-2"
                      >
                        MOKER 바로가기
                        <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </Link>
                      <a
                        href="#about"
                        className="px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white font-medium rounded-xl transition-colors border border-gray-700"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="mt-12 pt-12 border-t border-gray-800">
                  <div className="grid md:grid-cols-3 gap-6">
                    {[
                      { icon: '🍱', title: 'AI 뷔페', desc1: '모든 AI 모델 선택', desc2: '[Chat-GPT 5, Claude, Gemini]' },
                      { icon: '⚙️', title: '파인튜닝 API', desc1: '쉬운 커스터마이징', desc2: '[파인튜닝한 모델을 쉽게 api로]' },
                      { icon: '📊', title: '통합 대시보드', desc1: '성능·비용 모니터링', desc2: '코딩을 몰라도, 만들고 싶은건 모두다!' }
                    ].map((feature, index) => (
                      <div key={index} className="text-center">
                        <div className="text-3xl mb-2">{feature.icon}</div>
                        <h4 className="font-semibold text-white mb-1">{feature.title}</h4>
                        <p className="text-sm text-gray-400">
                          {feature.desc1}
                          {feature.desc2 && (
                            <>
                              <br />
                              {feature.desc2}
                            </>
                          )}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center scroll-animate">
          <h2 className="text-4xl font-bold mb-6">
            Let's Build the Future
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Together
            </span>
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            협업, 프로젝트 문의, 혹은 그냥 인사하고 싶으시다면 언제든 연락주세요.
          </p>
          <a
            href="mailto:admin@mokea.cloud"
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold text-lg rounded-xl transition-all hover:shadow-lg hover:shadow-cyan-500/50"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            admin@mokea.cloud
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
              MO-KEA
              </div>
              <p className="text-sm text-gray-500">© 2024-2026 MO-KEA. All rights reserved.</p>
            </div>

            <div className="flex items-center gap-8">
              <Link to="/terms" className="text-sm text-gray-400 hover:text-white transition-colors">
                이용약관
              </Link>
              <Link to="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors">
                개인정보처리방침
              </Link>
              <a href="mailto:admin@mokea.cloud" className="text-sm text-gray-400 hover:text-white transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Custom Animations */}
      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        .scroll-animate {
          opacity: 0;
        }
        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  )
}

export default Linena
