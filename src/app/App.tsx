import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronRight, X, CheckCircle2, Loader2, Printer } from "lucide-react";
import svgPaths from "../imports/svg-jqujp1fmyh";
import imgImageHarveysLoans from "figma:asset/e91ed6d83f2690a79935309cf8f1610c8d4c98b8.png";

const Logo = ({ className = "h-12 w-auto" }: { className?: string }) => (
  <img
    src={imgImageHarveysLoans}
    alt="Harvey's Loans"
    className={`object-contain ${className}`}
  />
);

const InlineInput = ({ width = "w-32", type = "text", className: _className, ...props }: any) => (
  <input
    type={type}
    {...props}
    className={`inline-block border-b border-gray-400 focus:border-[#4F39F6] outline-none px-1 mx-1 bg-transparent text-center text-[#101828] font-medium transition-colors placeholder-gray-300 ${width} ${props.readOnly ? 'pointer-events-none' : ''}`}
  />
);

const LoanAgreementDocument = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const [formData, setFormData] = useState({
    effectiveDate: "",
    borrowerName: "",
    address: "",
    email: "",
    phone: "",
    principalSum: "",
    installments: "",
    installmentAmount: "",
    paymentDay: "",
    agreementDate: "",
    borrowerSignature: "",
    signatureDate: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Construct email parameters
    const subject = encodeURIComponent(`New Loan Agreement Submission - ${formData.borrowerName}`);
    const body = encodeURIComponent(
`New Loan Agreement Submission

Effective Date: ${formData.effectiveDate}

Borrower Details:
Name: ${formData.borrowerName}
Address: ${formData.address}
Email: ${formData.email}
Phone: ${formData.phone}

Loan Details:
Principal Sum: $${formData.principalSum}
Interest Rate: 30% per month
Repayment: ${formData.installments} monthly payments of $${formData.installmentAmount} on the ${formData.paymentDay} of the month.

Agreement Date: ${formData.agreementDate}

Borrower Signature: ${formData.borrowerSignature}
Signature Date: ${formData.signatureDate}

The borrower has agreed to all terms and conditions outlined in the loan agreement.
`);

    const mailtoUrl = `mailto:Harveysloansllc@outlook.com?subject=${subject}&body=${body}`;

    // Use a hidden anchor to open mailto without navigating the page away
    setTimeout(() => {
      const link = document.createElement("a");
      link.href = mailtoUrl;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  const resetAndClose = () => {
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        effectiveDate: "",
        borrowerName: "",
        address: "",
        email: "",
        phone: "",
        principalSum: "",
        installments: "",
        installmentAmount: "",
        paymentDay: "",
        agreementDate: "",
        borrowerSignature: "",
        signatureDate: "",
      });
    }, 300);
    onClose();
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            key="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={resetAndClose}
            className="fixed inset-0 bg-[#101828]/60 backdrop-blur-sm z-[100] print:hidden"
          />
          <motion.div
            key="modal-wrapper"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[101] flex items-center justify-center p-4 md:p-8 pointer-events-none print:p-0 print:relative print:z-auto"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.4, bounce: 0.15 }}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl pointer-events-auto overflow-hidden flex flex-col max-h-full print:shadow-none print:rounded-none print:max-w-full"
            >
              {/* Header Actions */}
              <div className="flex items-center justify-between p-4 md:p-6 border-b border-gray-100 bg-white sticky top-0 z-10 print:hidden">
                <div className="flex items-center gap-4">
                  <h2 className="text-xl font-bold text-[#101828]">
                    {isSubmitted ? "Agreement Signed" : "Complete Loan Agreement"}
                  </h2>
                </div>
                <div className="flex items-center gap-2">
                  {!isSubmitted && (
                    <button
                      onClick={handlePrint}
                      type="button"
                      className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                    >
                      <Printer size={16} /> Print
                    </button>
                  )}
                  <button
                    onClick={resetAndClose}
                    className="text-gray-400 hover:text-gray-700 transition-colors p-2 rounded-full hover:bg-gray-50"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 md:p-10 overflow-y-auto bg-gray-50 print:bg-white print:p-0 custom-scrollbar">
                {isSubmitted ? (
                  <div className="text-center py-16 max-w-lg mx-auto print:hidden">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 size={40} className="text-green-600" />
                    </div>
                    <h3 className="text-3xl font-bold text-[#101828] mb-4">Agreement Ready to Send</h3>
                    <p className="text-[#4a5565] mb-8 leading-relaxed text-lg">
                      Your default email client should have opened with the completed loan agreement. Please send the email to officially submit your application to Harveysloansllc@outlook.com.
                    </p>
                    <button
                      onClick={resetAndClose}
                      className="w-full bg-[#101828] text-white py-4 rounded-xl font-semibold hover:bg-black transition-colors"
                    >
                      Close & Return Home
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 shadow-sm border border-gray-200 mx-auto max-w-3xl print:border-none print:shadow-none print:p-0">
                    
                    {/* Document Letterhead */}
                    <div className="text-center mb-10 text-sm leading-relaxed text-black font-serif">
                      <h1 className="text-xl font-bold mb-2">HARVEY SWABY</h1>
                      <p>P.O. BOX 309, KY1-1501</p>
                      <p>GRAND CAYMAN, CAYMAN ISLANDS</p>
                      <p>CELL: 1-(345) 917-8564</p>
                      <p className="uppercase">EMAIL: Harveysloansllc@outlook.COM</p>
                    </div>

                    <h2 className="text-2xl font-bold text-center mb-8 uppercase tracking-wide text-black font-serif underline underline-offset-4">
                      Loan Agreement
                    </h2>

                    <div className="space-y-6 text-[15px] text-black font-serif leading-loose">
                      
                      <div className="mb-8">
                        This Loan Agreement is made and entered into as of Effective Date, 
                        <InlineInput 
                          name="effectiveDate" 
                          value={formData.effectiveDate} 
                          onChange={handleChange} 
                          placeholder="MM/DD/YYYY"
                          width="w-40" 
                          required 
                        /> 
                        by and between:
                      </div>

                      <div className="space-y-4 mb-8 pl-4 border-l-2 border-gray-200">
                        <div className="flex items-center">
                          <span className="font-bold w-24">Lender:</span>
                          <span className="font-bold">HARVEY SWABY</span>
                        </div>
                        <div className="flex items-center">
                          <span className="font-bold w-24">Borrower:</span>
                          <InlineInput name="borrowerName" value={formData.borrowerName} onChange={handleChange} width="w-64" required />
                        </div>
                        <div className="flex items-center">
                          <span className="font-bold w-24">Address:</span>
                          <InlineInput name="address" value={formData.address} onChange={handleChange} width="w-full max-w-md" required />
                        </div>
                        <div className="flex items-center">
                          <span className="font-bold w-24">Email:</span>
                          <InlineInput name="email" type="email" value={formData.email} onChange={handleChange} width="w-64" required />
                        </div>
                        <div className="flex items-center">
                          <span className="font-bold w-24">Phone:</span>
                          <InlineInput name="phone" type="tel" value={formData.phone} onChange={handleChange} width="w-48" required />
                        </div>
                      </div>

                      {/* Clauses */}
                      <ol className="list-decimal pl-5 space-y-6">
                        <li className="pl-2 font-bold">
                          Loan Amount
                          <p className="font-normal mt-1">
                            Lender agrees to loan Borrower the principal sum of $
                            <InlineInput name="principalSum" type="number" step="0.01" min="0" value={formData.principalSum} onChange={handleChange} width="w-32" required />
                            .
                          </p>
                        </li>

                        <li className="pl-2 font-bold">
                          Interest
                          <p className="font-normal mt-1">
                            The Loan shall bear interest at a rate of 30% per month.
                          </p>
                        </li>

                        <li className="pl-2 font-bold">
                          Repayment
                          <p className="font-normal mt-1">
                            Borrower agrees to repay the Loan in installments 
                            <InlineInput name="installments" value={formData.installments} onChange={handleChange} width="w-24" required />
                            (Month/s) payments of $
                            <InlineInput name="installmentAmount" type="number" step="0.01" min="0" value={formData.installmentAmount} onChange={handleChange} width="w-24" required />
                            each 
                            <InlineInput name="paymentDay" value={formData.paymentDay} onChange={handleChange} width="w-32" required />
                            of the Month.
                          </p>
                        </li>

                        <li className="pl-2 font-bold">
                          Late Fees
                          <p className="font-normal mt-1">
                            Any payment not received within 30 days of its due date may be subject to a late fee of $ 5.00 per day.
                          </p>
                        </li>

                        <li className="pl-2 font-bold">
                          Default
                          <p className="font-normal mt-1">
                            Failure to make payments when due constitutes default. Upon default, the full remaining balance may become immediately due.
                          </p>
                        </li>

                        <li className="pl-2 font-bold">
                          Governing Law
                          <p className="font-normal mt-1">
                            This Agreement shall be governed by the laws of the State/Country of Cayman Islands.
                          </p>
                        </li>

                        <li className="pl-2">
                          <span className="font-normal">
                            This is to formally notify you that any failure to pay the agreed charges or fees related to the loan agreement dated
                            <InlineInput name="agreementDate" value={formData.agreementDate} onChange={handleChange} placeholder="MM/DD/YYYY" width="w-32" required />
                            will be the sole responsibility of the borrower: 
                            <InlineInput 
                              name="borrowerNameDisplay" 
                              value={formData.borrowerName} 
                              readOnly 
                              width="w-48" 
                            />
                            .
                          </span>
                        </li>

                        <li className="pl-2">
                          <span className="font-normal">
                            The borrower shall bear all additional costs, penalties, or charges resulting from non-payment. Please ensure that all communications regarding outstanding amounts are directed to the borrower.
                          </span>
                        </li>

                        <li className="pl-2 font-bold">
                          Entire Agreement
                          <p className="font-normal mt-1">
                            This document represents the entire agreement between the parties.
                          </p>
                        </li>
                      </ol>

                      {/* Signatures */}
                      <div className="mt-16 space-y-12 pb-8">
                        <div className="flex flex-col md:flex-row items-end justify-between gap-8 md:gap-4">
                          <div className="w-full md:w-1/2">
                            <div className="border-b border-black pb-2 mb-2 font-['Brush_Script_MT',cursive] text-2xl">
                              Harvey Swaby
                            </div>
                            <div className="font-bold text-sm">LENDER SIGNATURE</div>
                          </div>
                          <div className="w-full md:w-1/3">
                            <div className="border-b border-black pb-2 mb-2">
                              {new Date().toLocaleDateString()}
                            </div>
                            <div className="font-bold text-sm">DATE</div>
                          </div>
                        </div>

                        <div className="flex flex-col md:flex-row items-end justify-between gap-8 md:gap-4">
                          <div className="w-full md:w-1/2">
                            <div className="border-b border-black mb-2">
                              <input 
                                type="text"
                                name="borrowerSignature"
                                value={formData.borrowerSignature}
                                onChange={handleChange}
                                placeholder="Type full name to sign"
                                className="w-full outline-none bg-transparent font-['Brush_Script_MT',cursive] text-2xl placeholder:font-sans placeholder:text-base placeholder:text-gray-300 pb-1"
                                required
                              />
                            </div>
                            <div className="font-bold text-sm">BORROWER SIGNATURE</div>
                          </div>
                          <div className="w-full md:w-1/3">
                            <div className="border-b border-black mb-2">
                              <input 
                                type="text"
                                name="signatureDate"
                                value={formData.signatureDate}
                                onChange={handleChange}
                                placeholder="MM/DD/YYYY"
                                className="w-full outline-none bg-transparent pb-1 placeholder-gray-300"
                                required
                              />
                            </div>
                            <div className="font-bold text-sm">DATE</div>
                          </div>
                        </div>
                      </div>

                    </div>

                    {/* Submit Area */}
                    <div className="mt-8 pt-8 border-t border-gray-200 flex flex-col items-center print:hidden">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full max-w-md bg-[#4F39F6] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#3d2bd9] transition-colors shadow-lg shadow-indigo-200 disabled:bg-indigo-300 disabled:shadow-none text-lg"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 size={24} className="animate-spin" />
                            Processing Agreement...
                          </>
                        ) : (
                          "Sign & Submit Agreement"
                        )}
                      </button>
                      <p className="text-sm text-center text-[#6a7282] mt-4 max-w-md">
                        By clicking submit, you acknowledge that you have read, understood, and agree to be bound by the terms of this Loan Agreement.
                      </p>
                    </div>

                  </form>
                )}
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f9fafb] font-sans selection:bg-indigo-100">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm print:hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center">
          <Logo />
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-24 print:hidden">
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
                  onClick={() => setIsModalOpen(true)}
                  className="bg-[#4F39F6] text-white px-8 py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-[#3d2bd9] transition-colors shadow-md shadow-indigo-200"
                >
                  Apply Now <ChevronRight size={20} />
                </button>
              </div>
            </div>

            {/* Right Content / Image Area */}
            <div className="relative mt-12 lg:mt-0">
              <div className="aspect-square lg:aspect-auto lg:h-[544px] w-full max-w-[584px] mx-auto rounded-3xl overflow-hidden relative group">
                <div 
                  className="absolute inset-0"
                  style={{ backgroundImage: "linear-gradient(137.031deg, rgb(238, 242, 255) 0%, rgb(239, 246, 255) 100%)" }}
                />
                <div className="absolute inset-0 opacity-30 bg-[radial-gradient(#4F39F6_1px,transparent_1px)] [background-size:20px_20px]" />
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
      <section className="bg-white py-20 md:py-32 print:hidden">
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
      <footer className="bg-[#101828] py-8 print:hidden">
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

      {/* Agreement Modal */}
      <LoanAgreementDocument isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}