import { Link } from 'react-router-dom'

function Privacy({ darkMode }) {
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
        <h1 className="text-3xl md:text-4xl font-bold mb-2">개인정보처리방침</h1>
        <p className={`mb-12 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>MO-KEA Privacy Policy</p>

        <div className={`prose prose-lg max-w-none ${darkMode ? 'prose-invert' : ''}`}>
          <section className="mb-12">
            <h2 className={`text-xl font-semibold mb-4 pb-2 border-b ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
              1. 수집하는 개인정보 항목
            </h2>
            <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              회사는 서비스 제공을 위해 아래와 같은 정보를 수집합니다.
            </p>
            <div className={`p-4 rounded-xl ${darkMode ? 'bg-gray-900/50' : 'bg-gray-50'}`}>
              <ul className={`space-y-3 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <li className="flex items-start gap-3">
                  <span className="px-2 py-0.5 text-xs font-medium rounded bg-indigo-500/20 text-indigo-400">필수</span>
                  <span>이메일 주소, 로그인 정보</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="px-2 py-0.5 text-xs font-medium rounded bg-purple-500/20 text-purple-400">결제 시</span>
                  <span>결제 수단 정보 (결제 대행사를 통해 안전하게 처리됨)</span>
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className={`text-xl font-semibold mb-4 pb-2 border-b ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
              2. 개인정보의 이용 목적
            </h2>
            <ul className={`space-y-3 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>사용자 식별 및 서비스 제공</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>구독 요금 결제 및 정산</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>고객 문의 응대 및 서비스 공지</span>
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className={`text-xl font-semibold mb-4 pb-2 border-b ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
              3. 개인정보의 보유 및 파기
            </h2>
            <p className={`leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              회사는 이용자가 서비스를 탈퇴하거나 보유 기간이 종료되면 지체 없이 정보를 파기합니다.
              단, 관계 법령에 따라 일정 기간 보관이 필요한 경우 해당 기간 동안 안전하게 보관합니다.
            </p>
            <div className={`mt-4 p-4 rounded-xl ${darkMode ? 'bg-gray-900/50' : 'bg-gray-50'}`}>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                <strong className={darkMode ? 'text-gray-300' : 'text-gray-700'}>참고:</strong> 전자상거래법에 따라 계약 또는 청약철회 기록은 5년,
                대금결제 기록은 5년, 소비자 불만 또는 분쟁 처리 기록은 3년간 보관됩니다.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className={`text-xl font-semibold mb-4 pb-2 border-b ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
              4. 개인정보의 제3자 제공
            </h2>
            <p className={`leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              회사는 원칙적으로 사용자의 정보를 외부에 제공하지 않습니다.
              단, 결제 처리를 위해 결제 대행사(포트원 및 협력 PG사)에 정보를 제공합니다.
            </p>
            <div className={`mt-4 p-4 rounded-xl border ${darkMode ? 'border-indigo-500/30 bg-indigo-500/10' : 'border-indigo-200 bg-indigo-50'}`}>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <p className={`text-sm ${darkMode ? 'text-indigo-300' : 'text-indigo-700'}`}>
                  결제 정보는 회사가 직접 저장하지 않으며, PCI-DSS 인증을 받은 결제 대행사를 통해 안전하게 처리됩니다.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className={`text-xl font-semibold mb-4 pb-2 border-b ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
              5. 이용자의 권리
            </h2>
            <ul className={`space-y-3 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>언제든지 본인의 개인정보를 조회하거나 수정할 수 있습니다.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>개인정보 삭제를 요청할 수 있습니다 (단, 법적 보관 의무가 있는 정보 제외).</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>마케팅 수신 동의를 철회할 수 있습니다.</span>
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className={`text-xl font-semibold mb-4 pb-2 border-b ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
              6. 개인정보 보호책임자
            </h2>
            <div className={`p-4 rounded-xl ${darkMode ? 'bg-gray-900/50' : 'bg-gray-50'}`}>
              <ul className={`space-y-2 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <li><strong className={darkMode ? 'text-white' : 'text-gray-900'}>담당:</strong> 개인정보 보호책임자</li>
                <li><strong className={darkMode ? 'text-white' : 'text-gray-900'}>이메일:</strong> privacy@mokea.cloud</li>
              </ul>
            </div>
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

export default Privacy
