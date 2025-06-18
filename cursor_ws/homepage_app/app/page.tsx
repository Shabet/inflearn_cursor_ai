"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg sm:text-xl">T</span>
                </div>
              </div>
              <div className="ml-3">
                <h1 className="text-lg sm:text-xl font-bold text-gray-900">TechCorp</h1>
                <p className="text-xs sm:text-sm text-gray-600">Innovation Solutions</p>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-800 hover:text-blue-600 transition-colors duration-200 font-medium text-sm lg:text-base">홈</a>
              <a href="#about" className="text-gray-800 hover:text-blue-600 transition-colors duration-200 font-medium text-sm lg:text-base">회사소개</a>
              <a href="#products" className="text-gray-800 hover:text-blue-600 transition-colors duration-200 font-medium text-sm lg:text-base">상품소개</a>
              <a href="#contact" className="text-gray-800 hover:text-blue-600 transition-colors duration-200 font-medium text-sm lg:text-base">연락처</a>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-800 hover:text-blue-600 focus:outline-none focus:text-blue-600 transition-colors duration-200"
                aria-label="메뉴"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
          
          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-gray-200 bg-white">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a href="#home" className="block px-3 py-3 text-gray-800 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200 font-medium text-base rounded-md" onClick={() => setIsMenuOpen(false)}>홈</a>
                <a href="#about" className="block px-3 py-3 text-gray-800 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200 font-medium text-base rounded-md" onClick={() => setIsMenuOpen(false)}>회사소개</a>
                <a href="#products" className="block px-3 py-3 text-gray-800 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200 font-medium text-base rounded-md" onClick={() => setIsMenuOpen(false)}>상품소개</a>
                <a href="#contact" className="block px-3 py-3 text-gray-800 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200 font-medium text-base rounded-md" onClick={() => setIsMenuOpen(false)}>연락처</a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-br from-blue-50 to-purple-50 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              혁신적인 기술로 
              <br className="sm:hidden" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                미래를 만들다
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4">
              TechCorp는 최첨단 기술과 창의적인 솔루션을 통해 고객의 비즈니스를 성공으로 이끄는 
              글로벌 기술 기업입니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 text-sm sm:text-base min-h-[48px]">
                서비스 알아보기
              </button>
              <button className="border-2 border-gray-400 text-gray-800 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 text-sm sm:text-base min-h-[48px]">
                회사 소개서 다운로드
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">회사 소개</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto px-4">
              2010년 설립된 TechCorp는 끊임없는 혁신과 도전을 통해 
              IT 업계의 리더로 성장해왔습니다.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">우리의 비전</h3>
              <p className="text-gray-700 mb-6 leading-relaxed text-sm sm:text-base">
                기술을 통해 세상을 더 나은 곳으로 만드는 것이 우리의 사명입니다. 
                인공지능, 클라우드, IoT 등 최첨단 기술을 활용하여 고객의 디지털 
                트랜스포메이션을 성공적으로 지원합니다.
              </p>
              
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                <div className="text-center p-3 sm:p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1 sm:mb-2">500+</div>
                  <div className="text-gray-700 text-xs sm:text-sm font-medium">성공 프로젝트</div>
                </div>
                <div className="text-center p-3 sm:p-4 bg-purple-50 rounded-lg">
                  <div className="text-2xl sm:text-3xl font-bold text-purple-600 mb-1 sm:mb-2">100+</div>
                  <div className="text-gray-700 text-xs sm:text-sm font-medium">글로벌 파트너</div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-6 sm:p-8 rounded-2xl order-1 lg:order-2">
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-lg sm:text-xl">🎯</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">혁신적인 솔루션</h4>
                    <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">최신 기술 트렌드를 선도하는 혁신적인 솔루션을 제공합니다.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-lg sm:text-xl">🚀</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">빠른 실행력</h4>
                    <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">신속하고 정확한 프로젝트 실행으로 고객 만족을 실현합니다.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-lg sm:text-xl">💡</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">전문성</h4>
                    <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">10년 이상의 경험을 바탕으로 한 깊이 있는 전문성을 제공합니다.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">상품 소개</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto px-4">
              다양한 산업 분야에서 검증된 우리의 핵심 솔루션들을 소개합니다.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Product 1 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-32 sm:h-40 md:h-48 flex items-center justify-center">
                <span className="text-4xl sm:text-5xl md:text-6xl">🤖</span>
              </div>
              <div className="p-4 sm:p-6 md:p-8">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">AI Analytics Platform</h3>
                <p className="text-gray-700 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                  머신러닝과 빅데이터 분석을 통해 비즈니스 인사이트를 제공하는 
                  차세대 분석 플랫폼입니다.
                </p>
                <ul className="space-y-2 mb-4 sm:mb-6">
                  <li className="flex items-center text-gray-700 text-sm sm:text-base">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></span>
                    실시간 데이터 분석
                  </li>
                  <li className="flex items-center text-gray-700 text-sm sm:text-base">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></span>
                    예측 모델링
                  </li>
                  <li className="flex items-center text-gray-700 text-sm sm:text-base">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></span>
                    시각화 대시보드
                  </li>
                </ul>
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 text-sm sm:text-base min-h-[48px]">
                  자세히 보기
                </button>
              </div>
            </div>

            {/* Product 2 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 h-32 sm:h-40 md:h-48 flex items-center justify-center">
                <span className="text-4xl sm:text-5xl md:text-6xl">☁️</span>
              </div>
              <div className="p-4 sm:p-6 md:p-8">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Cloud Infrastructure</h3>
                <p className="text-gray-700 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                  확장 가능하고 안정적인 클라우드 인프라 솔루션으로 
                  기업의 디지털 전환을 지원합니다.
                </p>
                <ul className="space-y-2 mb-4 sm:mb-6">
                  <li className="flex items-center text-gray-700 text-sm sm:text-base">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 flex-shrink-0"></span>
                    자동 스케일링
                  </li>
                  <li className="flex items-center text-gray-700 text-sm sm:text-base">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 flex-shrink-0"></span>
                    보안 강화
                  </li>
                  <li className="flex items-center text-gray-700 text-sm sm:text-base">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 flex-shrink-0"></span>
                    24/7 모니터링
                  </li>
                </ul>
                <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-200 text-sm sm:text-base min-h-[48px]">
                  자세히 보기
                </button>
              </div>
            </div>

            {/* Product 3 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 sm:col-span-2 lg:col-span-1">
              <div className="bg-gradient-to-r from-green-500 to-green-600 h-32 sm:h-40 md:h-48 flex items-center justify-center">
                <span className="text-4xl sm:text-5xl md:text-6xl">📱</span>
              </div>
              <div className="p-4 sm:p-6 md:p-8">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Mobile Solutions</h3>
                <p className="text-gray-700 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                  크로스 플랫폼 모바일 앱 개발부터 운영까지 
                  완벽한 모바일 솔루션을 제공합니다.
                </p>
                <ul className="space-y-2 mb-4 sm:mb-6">
                  <li className="flex items-center text-gray-700 text-sm sm:text-base">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></span>
                    iOS/Android 지원
                  </li>
                  <li className="flex items-center text-gray-700 text-sm sm:text-base">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></span>
                    반응형 디자인
                  </li>
                  <li className="flex items-center text-gray-700 text-sm sm:text-base">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></span>
                    오프라인 지원
                  </li>
                </ul>
                <button className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200 text-sm sm:text-base min-h-[48px]">
                  자세히 보기
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">연락처</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto px-4">
              프로젝트 문의나 궁금한 사항이 있으시면 언제든지 연락해 주세요.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Info */}
            <div className="order-2 lg:order-1">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8">연락 정보</h3>
              
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 text-lg sm:text-xl">📍</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">주소</h4>
                    <p className="text-gray-700 text-sm sm:text-base">서울특별시 강남구 테헤란로 123, TechCorp 빌딩 10층</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-green-600 text-lg sm:text-xl">📞</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">전화번호</h4>
                    <p className="text-gray-700 text-sm sm:text-base">02-1234-5678</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-600 text-lg sm:text-xl">✉️</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">이메일</h4>
                    <p className="text-gray-700 text-sm sm:text-base">contact@techcorp.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-orange-600 text-lg sm:text-xl">🕐</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">운영시간</h4>
                    <p className="text-gray-700 text-sm sm:text-base">평일 09:00 - 18:00</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 order-1 lg:order-2">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">문의하기</h3>
              
              <form className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-800 mb-2">이름</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 bg-white text-sm sm:text-base min-h-[48px]"
                      placeholder="홍길동"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-800 mb-2">회사명</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 bg-white text-sm sm:text-base min-h-[48px]"
                      placeholder="회사명"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-800 mb-2">이메일</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 bg-white text-sm sm:text-base min-h-[48px]"
                    placeholder="hong@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-800 mb-2">전화번호</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 bg-white text-sm sm:text-base min-h-[48px]"
                    placeholder="010-1234-5678"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-800 mb-2">문의 내용</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none text-gray-900 bg-white text-sm sm:text-base"
                    placeholder="문의하실 내용을 자세히 적어주세요."
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 text-sm sm:text-base min-h-[48px]"
                >
                  문의 보내기
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="sm:col-span-2">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg sm:text-xl">T</span>
                </div>
                <div className="ml-3">
                  <h3 className="text-lg sm:text-xl font-bold">TechCorp</h3>
                  <p className="text-gray-400 text-xs sm:text-sm">Innovation Solutions</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4 max-w-md text-sm sm:text-base leading-relaxed">
                TechCorp는 혁신적인 기술 솔루션을 통해 고객의 성공을 이끄는 
                글로벌 기술 기업입니다.
              </p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-200 cursor-pointer">
                  <span className="text-xs sm:text-sm">f</span>
                </div>
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-200 cursor-pointer">
                  <span className="text-xs sm:text-sm">t</span>
                </div>
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-200 cursor-pointer">
                  <span className="text-xs sm:text-sm">in</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-sm sm:text-base">빠른 링크</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#home" className="hover:text-white transition-colors duration-200 text-sm sm:text-base">홈</a></li>
                <li><a href="#about" className="hover:text-white transition-colors duration-200 text-sm sm:text-base">회사소개</a></li>
                <li><a href="#products" className="hover:text-white transition-colors duration-200 text-sm sm:text-base">상품소개</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors duration-200 text-sm sm:text-base">연락처</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-sm sm:text-base">고객지원</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors duration-200 text-sm sm:text-base">고객센터</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200 text-sm sm:text-base">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200 text-sm sm:text-base">기술지원</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200 text-sm sm:text-base">개발자 문서</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-gray-400">
            <p className="text-xs sm:text-sm">&copy; 2024 TechCorp. All rights reserved. | 개인정보처리방침 | 이용약관</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
