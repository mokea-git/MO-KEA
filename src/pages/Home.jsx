import { Link } from 'react-router-dom';
import logo from '../assets/ICON-MAIN.png';

function Home({ darkMode, setDarkMode, isScrolled, handlePayment }) {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      ),
      title: 'AI 뷔페',
      description: 'Claude, ChatGPT, Gemini, Llama 등 원하는 AI를 골라 쓰세요. 잡고, 뜯고, 맛보고!',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: '파인튜닝 API',
      description: '강력한 API로 파인튜닝된 AI 모델을 내 서비스에 바로 연동하세요.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: '통합 대시보드',
      description: '모든 AI 모델의 사용량, 성능, 비용을 한눈에 모니터링하세요.',
    },
  ]

  return (
    <>
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? (darkMode ? 'bg-gray-950/95 backdrop-blur-sm shadow-lg shadow-black/20' : 'bg-white/95 backdrop-blur-sm shadow-lg') : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className={`p-2 rounded-xl ${darkMode ? 'bg-indigo-500/20' : 'bg-indigo-100'}`}>
              <img className={`logo ${darkMode ? 'invert' : ''}`} src={logo} alt="logo" />
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className={`text-sm font-medium transition-colors ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>기능</a>
            <a href="#pricing" className={`text-sm font-medium transition-colors ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>가격</a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg transition-colors ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'}`}
            >
              {darkMode ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
            <button
              onClick={handlePayment}
              className="px-5 py-2.5 bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium rounded-lg transition-colors"
            >
              시작하기
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-8">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
            <span className="text-sm font-medium text-indigo-400">AI 파인튜닝 올인원 플랫폼</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
            모든 AI를 한 곳에서
            <br />
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
              잡고 뜯고 맛보고
            </span>
          </h1>

          {/* Subheadline */}
          <p className={`text-lg md:text-xl max-w-2xl mx-auto mb-10 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Claude, ChatGPT, Gemini, Llama까지.
            <br className="hidden md:block" />
            MOKER로 쉽게 파인튜닝하고 내 비즈니스에 맞는 AI를 만드세요.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={handlePayment}
              className="group px-8 py-4 bg-indigo-500 hover:bg-indigo-600 text-white font-medium rounded-xl transition-all hover:shadow-lg hover:shadow-indigo-500/25 flex items-center gap-2"
            >
              무료로 시작하기
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <button className={`px-8 py-4 font-medium rounded-xl transition-colors ${darkMode ? 'bg-gray-800 hover:bg-gray-700 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-900'}`}>
              데모 보기
            </button>
          </div>

          {/* Animated Hammer Visual */}
          <div className="mt-20 relative">
            <div className={`absolute inset-0 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 blur-3xl ${darkMode ? 'opacity-50' : 'opacity-30'}`}></div>
            <div className={`relative p-8 rounded-2xl border ${darkMode ? 'bg-gray-900/50 border-gray-800' : 'bg-gray-50 border-gray-200'}`}>
              <div className="flex items-center justify-center">
                <div className="relative">
                  {/* Hammer Icon with Animation */}
                  <div className="animate-bounce-slow">
                    <svg className="w-32 h-32 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                  </div>
                  {/* Particles */}
                  <div className="absolute -top-4 -right-4 w-3 h-3 bg-indigo-500 rounded-full animate-ping"></div>
                  <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-purple-500 rounded-full animate-ping delay-150"></div>
                  <div className="absolute top-1/2 -right-8 w-2 h-2 bg-pink-500 rounded-full animate-ping delay-300"></div>
                </div>
              </div>
              <div className={`mt-6 text-center text-sm ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                MOKER Engine v2.0 - 데이터 정제의 새로운 기준
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              왜 <span className="text-indigo-500">MOKER</span>인가?
            </h2>
            <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              AI 뷔페에 오신 것을 환영합니다
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group p-8 rounded-2xl border transition-all hover:-translate-y-1 ${darkMode ? 'bg-gray-900/50 border-gray-800 hover:border-indigo-500/50' : 'bg-white border-gray-200 hover:border-indigo-500/50 hover:shadow-xl'}`}
              >
                <div className={`inline-flex p-3 rounded-xl mb-6 transition-colors ${darkMode ? 'bg-indigo-500/20 text-indigo-400 group-hover:bg-indigo-500/30' : 'bg-indigo-100 text-indigo-500 group-hover:bg-indigo-200'}`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              뷔페 요금제
            </h2>
            <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              필요한 만큼만 골라서 이용하세요
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Appetizer Plan */}
            <div className={`p-8 rounded-2xl border transition-all ${darkMode ? 'bg-gray-900/50 border-gray-800' : 'bg-white border-gray-200'}`}>
              <div className="text-center mb-8">
                <h3 className="text-xl font-bold mb-2">Appetizer</h3>
                <p className={`text-sm mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>맛보기 유저</p>
                <div className="text-4xl font-bold mb-2">
                  $0
                  <span className={`text-lg font-normal ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>/월</span>
                </div>
              </div>

              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>GPT/Gemini 기본 모델 테스트</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>일 5회 호출 제한</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>결과물 저장 3개</span>
                </div>
              </div>

              <button
                onClick={handlePayment}
                className={`w-full py-3 rounded-xl font-medium transition-colors ${darkMode ? 'bg-gray-800 hover:bg-gray-700 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-900'}`}
              >
                무료로 시작하기
              </button>
            </div>

            {/* Chef's Special Plan */}
            <div className={`p-8 rounded-2xl border-2 border-indigo-500 transition-all relative ${darkMode ? 'bg-gray-900/50' : 'bg-white shadow-xl'}`}>
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="px-4 py-1 bg-indigo-500 text-white text-sm font-medium rounded-full">인기</span>
              </div>

              <div className="text-center mb-8">
                <h3 className="text-xl font-bold mb-2">Chef's Special</h3>
                <p className={`text-sm mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>개인 개발자</p>
                <div className="text-4xl font-bold mb-2">
                  $19-29
                  <span className={`text-lg font-normal ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>/월</span>
                </div>
              </div>

              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Claude/Nano Banana 파인튜닝</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>무제한 모델 호출</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>우선순위 처리</span>
                </div>
              </div>

              <button
                onClick={handlePayment}
                className="w-full py-3 bg-indigo-500 hover:bg-indigo-600 text-white font-medium rounded-xl transition-colors"
              >
                지금 시작하기
              </button>
            </div>

            {/* Full Buffet Plan */}
            <div className={`p-8 rounded-2xl border transition-all ${darkMode ? 'bg-gray-900/50 border-gray-800' : 'bg-white border-gray-200'}`}>
              <div className="text-center mb-8">
                <h3 className="text-xl font-bold mb-2">Full Buffet</h3>
                <p className={`text-sm mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>기업/팀</p>
                <div className="text-4xl font-bold mb-2">
                  Custom
                </div>
                <p className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>문의 필요</p>
              </div>

              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>전용 GPU 할당</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>API 엔드포인트 무제한 생성</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>보안 강화 지원</span>
                </div>
              </div>

              <button
                onClick={handlePayment}
                className={`w-full py-3 rounded-xl font-medium transition-colors ${darkMode ? 'bg-gray-800 hover:bg-gray-700 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-900'}`}
              >
                문의하기
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-12 px-6 border-t ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Logo & Info */}
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                <div className={`p-1.5 rounded-lg ${darkMode ? 'bg-indigo-500/20' : 'bg-indigo-100'}`}>
                  <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                </div>
                <span className="font-bold">MO-KEA</span>
              </div>
              <div className={`text-sm space-y-1 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                <p>상호: MO-KEA | 대표: (대표님 성함)</p>
                <p>사업자등록번호: (사업자등록번호)</p>
                <p>주소: (사업장 주소)</p>
                <p>이메일: contact@mokea.cloud</p>
              </div>
            </div>

            {/* Links */}
            <div className="flex items-center gap-8">
              <Link to="/terms" className={`text-sm transition-colors ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'}`}>
                이용약관
              </Link>
              <Link to="/privacy" className={`text-sm transition-colors ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'}`}>
                개인정보처리방침
              </Link>
              <a href="mailto:contact@mokea.cloud" className={`text-sm transition-colors ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'}`}>
                고객센터
              </a>
            </div>
          </div>

          <div className={`mt-8 pt-8 border-t text-center text-sm ${darkMode ? 'border-gray-800 text-gray-500' : 'border-gray-200 text-gray-400'}`}>
            © 2024 MO-KEA. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  )
}

export default Home
