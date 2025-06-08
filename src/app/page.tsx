import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Sticky Header Menu */}
      <header className="sticky top-0 z-50 h-[106px] bg-white/90 backdrop-blur-sm shadow-lg shadow-black/10">
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-[1275px] h-full flex items-center justify-between">
            <div className="flex flex-col items-start">
              <Image
                src="/logo.png"
                alt="Logo"
                width={167}
                height={42}
              />
              <p style={{fontSize: "11px"}} className="text-black mt-1">Simplifying Managed Services</p>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-foreground hover:text-blue-600 font-normal transition-colors font-[family-name:var(--font-poppins)]" style={{fontSize: "14px"}}>
                Home
              </a>
              <a href="#" className="text-foreground hover:text-blue-600 font-normal transition-colors font-[family-name:var(--font-poppins)]" style={{fontSize: "14px"}}>
                Company
              </a>
              <a href="#" className="text-foreground hover:text-blue-600 font-normal transition-colors font-[family-name:var(--font-poppins)]" style={{fontSize: "14px"}}>
                Services
              </a>
              <a href="#" className="text-foreground hover:text-blue-600 font-normal transition-colors font-[family-name:var(--font-poppins)]" style={{fontSize: "14px"}}>
                Resources
              </a>
              <a href="#" className="text-foreground hover:text-blue-600 font-normal transition-colors font-[family-name:var(--font-poppins)]" style={{fontSize: "14px"}}>
                Contact Us
              </a>
            </nav>

            <button 
              className="hidden md:block font-[family-name:var(--font-figtree)] rounded-full px-7 py-2.5 transition-colors hover:opacity-90"
              style={{
                backgroundColor: "var(--brand-yellow)",
                fontSize: "16px",
                color: "#000"
              }}
            >
              Request a Demo
            </button>

            {/* Mobile Menu Button */}
            <button className="md:hidden flex flex-col space-y-1">
              <span className="w-6 h-0.5 bg-foreground"></span>
              <span className="w-6 h-0.5 bg-foreground"></span>
              <span className="w-6 h-0.5 bg-foreground"></span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Slider Section */}
      <section className="relative w-full h-[671px] bg-gray-100">
        {/* Image positioned relative to full section */}
        <div className="absolute right-0 bottom-0 w-1/2 h-[608px] overflow-hidden">
          <Image
            src="/slider_right_desk.png"
            alt="Slider Desktop"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto object-cover object-top-left"
            style={{ minHeight: '100%' }}
          />
        </div>
        
        {/* Boxed layout for content */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[1275px] h-[608px] ">
          <div className="relative w-full h-full">
            {/* Left column for content */}
            <div className="absolute left-0 top-0 w-1/2 h-full flex flex-col justify-start items-start">
              <h1 
                className="font-[family-name:var(--font-inter)] font-normal text-black leading-tight mb-15"
                style={{ fontSize: "3.2rem", "textTransform": "uppercase" }}
              >
                NextGen<br />
                Communications &<br />
                Managed Services
              </h1>
              
              <p 
                className="font-[family-name:var(--font-poppins)] font-normal text-gray-700 mb-15 leading-relaxed"
                style={{ fontSize: "20px" }}
              >
                Nadalabs takes the complexity out of business communications for Large-enterprises and<br /> resellers.
              </p>
              
              <div className="flex items-center space-x-4">
                <button 
                  className="font-[family-name:var(--font-figtree)] rounded-full px-8 py-3 transition-colors hover:opacity-90"
                  style={{
                    backgroundColor: "var(--brand-yellow)",
                    fontSize: "16px",
                    color: "#000"
                  }}
                >
                  Talk to a Expert
                </button>
                
                <button 
                  className="w-12 h-12 rounded-full flex items-center justify-center transition-colors hover:opacity-90"
                  style={{
                    backgroundColor: "var(--brand-orange-light)",
					border: "1px solid var(--brand-orange)",
                  }}
                >
                  <svg 
                    width="16" 
                    height="16" 
                    viewBox="0 0 16 16" 
                    fill="none"
                    style={{ color: "var(--brand-yellow)" }}
                  >
                    <path 
                      d="M3 2L13 8L3 14V2Z" 
                      fill="currentColor"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="relative w-full py-20 bg-white">
        <div className="w-full flex items-center justify-center">
          <div className="w-[1275px] flex items-start space-x-12">
            {/* First column - 40% */}
            <div className="w-2/5 flex flex-col">
              <div 
                className="inline-block w-fit rounded-full px-6 py-3 mb-8"
                style={{
                  backgroundColor: "var(--brand-orange-light)",
				  border: "1px solid var(--brand-orange)",
                  color: "var(--brand-orange)"
                }}
              >
                <span 
                  className="font-[family-name:var(--font-poppins)] font-normal"
                  style={{ fontSize: "16px" }}
                >
                  Who We Are
                </span>
              </div>
              
              <h2 
                className="font-[family-name:var(--font-inter)] font-normal text-black leading-tight"
                style={{ fontSize: "48px" }}
              >
                Streamline your entire network.
              </h2>
            </div>
            
            {/* Second column - 60% */}
            <div className="w-3/5 flex flex-col space-y-6">
              <p 
                className="font-[family-name:var(--font-poppins)] font-semibold text-gray-800 leading-relaxed"
                style={{ fontSize: "16px" }}
              >
                NadaLabs provides comprehensive, managed technology solutions to help businesses streamline their network to make communications, collaboration and connectivity simple and cost-effective.
              </p>
              
              <p 
                className="font-[family-name:var(--font-poppins)] font-normal text-gray-700 leading-relaxed"
                style={{ fontSize: "16px" }}
              >
                Business networks are complex by nature. Add in multiple locations and vendors, different ways of working, and evolving technology needs and the infrastructure can quickly get out of control. Without proper transparency, oversight, and expertise, companies end up relying on insufficient legacy systems, building out unsustainable networks, and overspending on services they don&apos;t need.
              </p>
              
              <p 
                className="font-[family-name:var(--font-poppins)] font-normal text-gray-700 leading-relaxed mb-8"
                style={{ fontSize: "16px" }}
              >
                Nadalabs can help you right-fit your technology to meet your current network needs and scale as you grow. Your network may be complex, but it doesn&apos;t have to be unmanageable. Let NadaLabs show you how.
              </p>
              
              <div className="mt-8">
                <button 
                  className="font-[family-name:var(--font-figtree)] rounded-full px-8 py-3 transition-colors hover:opacity-90"
                  style={{
                    backgroundColor: "var(--brand-yellow)",
                    fontSize: "16px",
                    color: "#000"
                  }}
                >
                  Talk to an Expert
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative w-full py-20" style={{backgroundColor: "#fff6db"}}>
        <div className="w-full flex items-center justify-center">
          <div className="w-[1275px] px-6 flex flex-col items-center">
            {/* Section Header */}
            <div className="flex flex-col items-center mb-16">
              <div 
                className="inline-block w-fit rounded-full px-6 py-3 mb-8"
                style={{
                  backgroundColor: "var(--brand-orange-light)",
                  border: "1px solid var(--brand-orange)",
                  color: "var(--brand-orange)"
                }}
              >
                <span 
                  className="font-[family-name:var(--font-poppins)] font-normal"
                  style={{ fontSize: "16px" }}
                >
                  Why Choose Us
                </span>
              </div>
              
              <h2 
                className="font-[family-name:var(--font-inter)] font-normal text-black leading-tight text-center mb-6"
                style={{ fontSize: "48px" }}
              >
                NadaLabs Solutions
              </h2>
              
              <p 
                className="font-[family-name:var(--font-poppins)] font-normal text-gray-700 text-center leading-relaxed max-w-4xl"
                style={{ fontSize: "16px" }}
              >
                Broad network expertise from a single provider. This is what an intelligent infrastructure looks like.
              </p>
            </div>
            
            {/* Two Column List */}
            <div className="w-full flex items-start space-x-12">
              {/* Column 1 - NextGen Communications */}
              <div className="w-1/2 flex flex-col">
                <h3 
                  className="font-[family-name:var(--font-inter)] font-normal text-black mb-6"
                  style={{ fontSize: "20px" }}
                >
                  NextGen Communications
                </h3>
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center space-x-3">
                    <Image
                      src="/bubble.png"
                      alt="Bullet"
                      width={16}
                      height={16}
                      className="flex-shrink-0"
                    />
                    <span 
                      className="font-[family-name:var(--font-poppins)] font-normal text-gray-700"
                      style={{ fontSize: "16px" }}
                    >
                      UCaaS
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Image
                      src="/bubble.png"
                      alt="Bullet"
                      width={16}
                      height={16}
                      className="flex-shrink-0"
                    />
                    <span 
                      className="font-[family-name:var(--font-poppins)] font-normal text-gray-700"
                      style={{ fontSize: "16px" }}
                    >
                      Managed SIP
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Image
                      src="/bubble.png"
                      alt="Bullet"
                      width={16}
                      height={16}
                      className="flex-shrink-0"
                    />
                    <span 
                      className="font-[family-name:var(--font-poppins)] font-normal text-gray-700"
                      style={{ fontSize: "16px" }}
                    >
                      SIP Trunking
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Image
                      src="/bubble.png"
                      alt="Bullet"
                      width={16}
                      height={16}
                      className="flex-shrink-0"
                    />
                    <span 
                      className="font-[family-name:var(--font-poppins)] font-normal text-gray-700"
                      style={{ fontSize: "16px" }}
                    >
                      Voice Enabled Teams
                    </span>
                  </li>
                </ul>
                
                <p 
                  className="font-[family-name:var(--font-poppins)] font-normal text-gray-700 leading-relaxed"
                  style={{ fontSize: "16px" }}
                >
                  NextGen Communications providing communication and collaboration for businesses
                </p>
              </div>
              
              {/* Column 2 - Managed Services */}
              <div className="w-1/2 flex flex-col">
                <h3 
                  className="font-[family-name:var(--font-inter)] font-normal text-black mb-6"
                  style={{ fontSize: "20px" }}
                >
                  Managed Services
                </h3>
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center space-x-3">
                    <Image
                      src="/hub.png"
                      alt="Bullet"
                      width={16}
                      height={16}
                      className="flex-shrink-0"
                    />
                    <span 
                      className="font-[family-name:var(--font-poppins)] font-normal text-gray-700"
                      style={{ fontSize: "16px" }}
                    >
                      Managed Connectivity
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Image
                      src="/hub.png"
                      alt="Bullet"
                      width={16}
                      height={16}
                      className="flex-shrink-0"
                    />
                    <span 
                      className="font-[family-name:var(--font-poppins)] font-normal text-gray-700"
                      style={{ fontSize: "16px" }}
                    >
                      Managed SD-WAN
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Image
                      src="/hub.png"
                      alt="Bullet"
                      width={16}
                      height={16}
                      className="flex-shrink-0"
                    />
                    <span 
                      className="font-[family-name:var(--font-poppins)] font-normal text-gray-700"
                      style={{ fontSize: "16px" }}
                    >
                      Technology Expense Management
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Image
                      src="/hub.png"
                      alt="Bullet"
                      width={16}
                      height={16}
                      className="flex-shrink-0"
                    />
                    <span 
                      className="font-[family-name:var(--font-poppins)] font-normal text-gray-700"
                      style={{ fontSize: "16px" }}
                    >
                      Network Monitoring & Management
                    </span>
                  </li>
                </ul>
                
                <p 
                  className="font-[family-name:var(--font-poppins)] font-normal text-gray-700 leading-relaxed"
                  style={{ fontSize: "16px" }}
                >
                  Managed services offering connectivity, cloud computing, proactive network management and optimization
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative w-full py-20 bg-white">
        <div className="w-full flex items-center justify-center">
          <div className="w-[1275px] px-6 flex items-start space-x-12">
            {/* Column 1 - Contact Information */}
            <div className="w-1/2 flex flex-col justify-between h-full">
              {/* Top Content */}
              <div>
                <div 
                  className="inline-block w-fit rounded-full px-6 py-3 mb-8"
                  style={{
                    backgroundColor: "var(--brand-orange-light)",
                    border: "1px solid var(--brand-orange)",
                    color: "var(--brand-orange)"
                  }}
                >
                  <span 
                    className="font-[family-name:var(--font-poppins)] font-normal"
                    style={{ fontSize: "16px" }}
                  >
                    Talk to an Expert
                  </span>
                </div>
                
                <h2 
                  className="font-[family-name:var(--font-inter)] font-normal text-black leading-tight mb-6"
                  style={{ fontSize: "48px" }}
                >
                  Need more information
                </h2>
                
                <p 
                  className="font-[family-name:var(--font-poppins)] font-normal text-gray-700 leading-relaxed mb-12"
                  style={{ fontSize: "16px" }}
                >
                  Tell us about your preferences and we&apos;ll guide you through the process.
                </p>
              </div>
              
              {/* Bottom Content - Contact Details */}
              <div className="mt-auto">
                <h3 
                  className="font-[family-name:var(--font-inter)] font-normal text-black mb-6"
                  style={{ fontSize: "24px" }}
                >
                  Contact Us Now
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Image
                      src="/phone.png"
                      alt="Phone"
                      width={20}
                      height={20}
                      className="flex-shrink-0"
                    />
                    <span 
                      className="font-[family-name:var(--font-poppins)] font-normal text-gray-700"
                      style={{ fontSize: "16px" }}
                    >
                      +94 11 294 9203
                    </span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Image
                      src="/email.png"
                      alt="Email"
                      width={20}
                      height={20}
                      className="flex-shrink-0"
                    />
                    <span 
                      className="font-[family-name:var(--font-poppins)] font-normal text-gray-700"
                      style={{ fontSize: "16px" }}
                    >
                      info@nadalabs.biz
                    </span>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Image
                      src="/location.png"
                      alt="Location"
                      width={20}
                      height={20}
                      className="flex-shrink-0 mt-1"
                    />
                    <div 
                      className="font-[family-name:var(--font-poppins)] font-normal text-gray-700 leading-relaxed"
                      style={{ fontSize: "16px" }}
                    >
                      157/4A Awariwatta Rd,<br />
                      Wattala,<br />
                      Sri Lanka.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Column 2 - Contact Form */}
            <div className="w-1/2">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
                <form className="space-y-6">
                  {/* Name Fields - Two Columns */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                      <input
                        type="text"
                        placeholder="John"
                        className="w-full px-4 py-3 rounded-lg border border-gray-400 focus:border-gray-600 focus:outline-none transition-colors"
                        style={{ fontSize: "16px" }}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">&nbsp;</label>
                      <input
                        type="text"
                        placeholder="Doe"
                        className="w-full px-4 py-3 rounded-lg border border-gray-400 focus:border-gray-600 focus:outline-none transition-colors"
                        style={{ fontSize: "16px" }}
                      />
                    </div>
                  </div>
                  
                  {/* Email Field */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      placeholder="johndoe@example.com"
                      className="w-full px-4 py-3 rounded-lg border border-gray-400 focus:border-gray-600 focus:outline-none transition-colors"
                      style={{ fontSize: "16px" }}
                    />
                  </div>
                  
                  {/* Contact Number Field */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Contact No.</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 rounded-lg border border-gray-400 focus:border-gray-600 focus:outline-none transition-colors"
                      style={{ fontSize: "16px" }}
                    />
                  </div>
                  
                  {/* Message Textarea */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Need help? Let us know your preferences.</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-gray-400 focus:border-gray-600 focus:outline-none transition-colors resize-vertical"
                      style={{ fontSize: "16px" }}
                    ></textarea>
                  </div>
                  
                  {/* Checkbox */}
                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="email-preference"
                      className="mt-1 w-4 h-4 text-blue-600 border-gray-400 rounded focus:ring-blue-500"
                    />
                    <label 
                      htmlFor="email-preference" 
                      className="font-[family-name:var(--font-poppins)] font-normal text-gray-600 leading-relaxed"
                      style={{ fontSize: "11px" }}
                    >
                      I prefer not to receive emails from Nadalabs about product updates, promotions, marketing tips, or related news. If I don&apos;t check this box, I understand I&apos;ll be automatically subscribed.
                    </label>
                  </div>
                  
                  {/* Submit Button */}
                  <div className="pt-4">
                    <button 
                      type="submit"
                      className="font-[family-name:var(--font-figtree)] rounded-full px-8 py-3 transition-colors hover:opacity-90"
                      style={{
                        backgroundColor: "var(--brand-yellow)",
                        fontSize: "16px",
                        color: "#000"
                      }}
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

	  

      {/* Footer */}
      <footer className="bg-black text-white py-20">
        <div className="w-full flex items-center justify-center">
          <div className="w-[1275px] px-6 flex items-start space-x-12">
            {/* Column 1 */}
            <div className="w-1/2 flex flex-col">
              <h2 
                className="font-[family-name:var(--font-inter)] font-normal text-white leading-tight mb-8"
                style={{ fontSize: "36px" }}
              >
                End-to-End UC Automation for Smarter Business Operations and Managed Services
              </h2>
              
              <h3 
                className="font-[family-name:var(--font-poppins)] font-semibold text-white mb-4"
                style={{ fontSize: "20px" }}
              >
                Location
              </h3>
              
              <div 
                className="font-[family-name:var(--font-poppins)] font-normal text-white leading-relaxed"
                style={{ fontSize: "20px" }}
              >
                157/4A Awariwatta Rd,<br />
                Wattala,<br />
                Sri Lanka.
              </div>
            </div>
            
            {/* Column 2 */}
            <div className="w-1/2 flex flex-col justify-between h-full">
              {/* Top Content - Email Subscribe */}
              <div className="flex items-center space-x-4 mb-12">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-black border border-gray-600 text-white rounded-lg focus:border-gray-400 focus:outline-none transition-colors"
                  style={{ fontSize: "16px" }}
                />
                <button 
                  className="font-[family-name:var(--font-figtree)] rounded-full px-8 py-3 transition-colors hover:opacity-90 whitespace-nowrap"
                  style={{
                    backgroundColor: "var(--brand-yellow)",
                    fontSize: "16px",
                    color: "#000"
                  }}
                >
                  Subscribe Us
                </button>
              </div>
              
              {/* Bottom Content - Follow Us */}
              <div className="mt-auto">
                <h3 
                  className="font-[family-name:var(--font-poppins)] font-semibold text-white mb-6"
                  style={{ fontSize: "20px" }}
                >
                  Follow Us
                </h3>
                
                <div className="flex items-center space-x-4">
                  {/* Facebook */}
                  <div className="w-12 h-12 bg-black border border-gray-600 rounded-full flex items-center justify-center hover:border-gray-400 transition-colors cursor-pointer">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </div>
                  
                  {/* Google */}
                  <div className="w-12 h-12 bg-black border border-gray-600 rounded-full flex items-center justify-center hover:border-gray-400 transition-colors cursor-pointer">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                  </div>
                  
                  {/* Instagram */}
                  <div className="w-12 h-12 bg-black border border-gray-600 rounded-full flex items-center justify-center hover:border-gray-400 transition-colors cursor-pointer">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                  
                  {/* YouTube */}
                  <div className="w-12 h-12 bg-black border border-gray-600 rounded-full flex items-center justify-center hover:border-gray-400 transition-colors cursor-pointer">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
