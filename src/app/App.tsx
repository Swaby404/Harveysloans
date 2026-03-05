import React from "react";
import { ChevronRight } from "lucide-react";
import svgPaths from "../imports/svg-jqujp1fmyh";
import imgImageHarveysLoans from "figma:asset/e91ed6d83f2690a79935309cf8f1610c8d4c98b8.png";

const Logo = ({ className = "h-12 w-auto" }: { className?: string }) => (
  <img
    src={imgImageHarveysLoans}
    alt="Harvey's Loans"
    className={`object-contain ${className}`}
  />
);

export default function App() {
  return (
    <div className="min-h-screen bg-[#f9fafb] font-sans selection:bg-indigo-100">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center">
          <Logo />
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            
            {/* Left Content */}
            <div className="max-w-xl">
              <h1 className="text-4xl md:text-[48px] leading-tight font-bold text-[#101828] mb-6 tracking-tight">
                Fast & Easy Loans <br className="hidden md:block"/> for Your Dreams
              </h1>
              <p className="text-lg md:text-[20px] text-[#4a5565] leading-relaxed mb-8">
                Get approved in minutes. Competitive rates. Transparent process. 
                Get the funds you need today.
              </p>
              
              <div className="flex gap-4">
                <button
                  className="bg-[#4F39F6] text-white px-8 py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-[#3d2bd9] transition-colors shadow-md shadow-indigo-200"
                >
                  Apply Now <ChevronRight size={20} />
                </button>
              </div>
            </div>

            {/* Right Content / Image Area */}
            <div className="relative mt-12 lg:mt-0">
              <div className="aspect-square lg:aspect-auto lg:h-[544px] w-full max-w-[584px] mx-auto rounded-3xl overflow-hidden relative group">
                {/* Background Gradient */}
                <div 
                  className="absolute inset-0"
                  style={{ 
                    backgroundImage: "linear-gradient(137.031deg, rgb(238, 242, 255) 0%, rgb(239, 246, 255) 100%)" 
                  }}
                />
                
                {/* Floating Elements Background Pattern (Optional subtle detail) */}
                <div className="absolute inset-0 opacity-30 bg-[radial-gradient(#4F39F6_1px,transparent_1px)] [background-size:20px_20px]" />
                
                {/* Center Logo/Image */}
                <div className="absolute inset-0 flex items-center justify-center p-12">
                  <img 
                    src={imgImageHarveysLoans} 
                    alt="Harvey's Loans Badge" 
                    className="w-full max-w-[400px] h-auto object-contain drop-shadow-2xl transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-[36px] font-bold text-center text-[#101828] mb-16">
            Why Choose Harvey's Loans?
          </h2>

          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            
            {/* Feature 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#e0e7ff] flex items-center justify-center mb-6 shadow-sm">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path d={svgPaths.p29ed4e00} stroke="#4F39F6" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#0a0a0a] mb-3">Fast Approval</h3>
              <p className="text-[#4a5565] leading-relaxed px-4">
                Get approved in as little as 15 minutes with our streamlined process
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#e0e7ff] flex items-center justify-center mb-6 shadow-sm">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path d={svgPaths.p13bade00} stroke="#4F39F6" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#0a0a0a] mb-3">Secure & Safe</h3>
              <p className="text-[#4a5565] leading-relaxed px-4">
                Bank-level encryption to keep your personal information protected
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#dcfce7] flex items-center justify-center mb-6 shadow-sm p-3">
                <img src={imgImageHarveysLoans} alt="Transparent" className="w-full h-full object-contain" />
              </div>
              <h3 className="text-xl font-semibold text-[#0a0a0a] mb-3">Transparent Terms</h3>
              <p className="text-[#4a5565] leading-relaxed px-4">
                No hidden fees. Clear terms. Know exactly what you're agreeing to
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#101828] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            
            <div className="flex items-center">
              <img src={imgImageHarveysLoans} alt="Harvey's Loans" className="h-8 w-auto grayscale brightness-200" />
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-[#d1d5dc]">
              <a href="tel:1-345-917-8564" className="flex items-center gap-2 hover:text-white transition-colors">
                <span role="img" aria-label="phone">📞</span> 1-345-917-8564
              </a>
              <a href="mailto:Harveysloansllc@outlook.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <span role="img" aria-label="email">✉️</span> Harveysloansllc@outlook.com
              </a>
            </div>

            <div className="text-[#99a1af] text-sm text-center md:text-right">
              © 2026 Harvey's Loans. All rights reserved.
            </div>
            
          </div>
        </div>
      </footer>
    </div>
  );
}
