import { Link } from 'react-router-dom'

function Terms({ darkMode }) {
  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-950 text-white' : 'bg-white text-gray-900'}`}>
      {/* Header */}
      <header className={`sticky top-0 z-50 backdrop-blur-sm border-b ${darkMode ? 'bg-gray-950/95 border-gray-800' : 'bg-white/95 border-gray-200'}`}>
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className={`p-2 rounded-xl ${darkMode ? 'bg-indigo-500/20' : 'bg-indigo-100'}`}>
              <svg className="w-6 h-6 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
            </div>
            <span className="text-lg font-bold tracking-tight">MO-KEA</span>
          </Link>
          <Link
            to="/"
            className={`text-sm font-medium transition-colors ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
          >
            ← 홈으로
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">이용약관</h1>
        <p className={`mb-12 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>MO-KEA Terms of Service</p>

        <div className={`prose prose-lg max-w-none ${darkMode ? 'prose-invert' : ''}`}>
          <section className="mb-12">
            <h2 className={`text-xl font-semibold mb-4 pb-2 border-b ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
              제1조 (목적)
            </h2>
            <p className={`leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              본 약관은 LINENA(이하 "회사")가 제공하는 AI 데이터 정제 서비스 'MO-KEA'(이하 "서비스")의
              이용 조건 및 절차에 관한 사항을 규정함을 목적으로 합니다.
            </p>
          </section>

          <section className="mb-12">
            <h2 className={`text-xl font-semibold mb-4 pb-2 border-b ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
              제2조 (용어의 정의)
            </h2>
            <ul className={`space-y-3 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2.5 flex-shrink-0"></span>
                <span><strong className={darkMode ? 'text-white' : 'text-gray-900'}>"이용자"</strong>란 본 약관에 따라 서비스를 이용하는 사용자를 말합니다.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2.5 flex-shrink-0"></span>
                <span><strong className={darkMode ? 'text-white' : 'text-gray-900'}>"MOKER 엔진"</strong>이란 서비스 내에서 제공되는 핵심 AI 분석 기능을 말합니다.</span>
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className={`text-xl font-semibold mb-4 pb-2 border-b ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
              제3조 (서비스 이용 및 결제)
            </h2>
            <ul className={`space-y-3 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2.5 flex-shrink-0"></span>
                <span>서비스는 유료 및 무료 플랜으로 운영됩니다.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2.5 flex-shrink-0"></span>
                <span>유료 결제는 포트원(PortOne) 등 회사가 지정한 결제 수단을 통해 이루어집니다.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2.5 flex-shrink-0"></span>
                <span>정기 결제 서비스의 경우, 이용자가 해지하지 않는 한 매월 자동 갱신됩니다.</span>
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className={`text-xl font-semibold mb-4 pb-2 border-b ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
              제4조 (환불 및 취소)
            </h2>
            <ul className={`space-y-3 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2.5 flex-shrink-0"></span>
                <span>디지털 콘텐츠의 특성상 결제 후 AI 기능을 사용한 경우 환불이 제한될 수 있습니다.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2.5 flex-shrink-0"></span>
                <span>단순 변심에 의한 환불은 결제일로부터 7일 이내, 사용 기록이 없는 경우에만 가능합니다.</span>
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className={`text-xl font-semibold mb-4 pb-2 border-b ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
              제5조 (책임의 제한)
            </h2>
            <ul className={`space-y-3 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2.5 flex-shrink-0"></span>
                <span>회사는 AI가 생성한 결과물의 완전한 정확성을 보장하지 않습니다. 이용자는 결과물을 최종 판단하여 사용해야 합니다.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2.5 flex-shrink-0"></span>
                <span>서비스 점검 등 부득이한 사유로 서비스가 일시 중단될 수 있습니다.</span>
              </li>
            </ul>
          </section>
        </div>

        {/* Business Info */}
        <div className={`mt-16 p-6 rounded-2xl border ${darkMode ? 'bg-gray-900/50 border-gray-800' : 'bg-gray-50 border-gray-200'}`}>
          <h3 className="font-semibold mb-4">사업자 정보</h3>
          <div className={`text-sm space-y-1 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            <p>상호: MO-KEA | 대표: (대표님 성함)</p>
            <p>주소: (사업장 주소)</p>
            <p>이메일: contact@mokea.cloud</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className={`py-8 px-6 border-t ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className="max-w-4xl mx-auto text-center">
          <div className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
            © 2024 MO-KEA. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Terms
