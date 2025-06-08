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
                Business networks are complex by nature. Add in multiple locations and vendors, different ways of working, and evolving technology needs and the infrastructure can quickly get out of control. Without proper transparency, oversight, and expertise, companies end up relying on insufficient legacy systems, building out unsustainable networks, and overspending on services they don't need.
              </p>
              
              <p 
                className="font-[family-name:var(--font-poppins)] font-normal text-gray-700 leading-relaxed mb-8"
                style={{ fontSize: "16px" }}
              >
                Nadalabs can help you right-fit your technology to meet your current network needs and scale as you grow. Your network may be complex, but it doesn't have to be unmanageable. Let NadaLabs show you how.
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

	  

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <Image
                src="/logo.png"
                alt="Logo"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <p className="text-gray-400 text-sm">
              © 2025 All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
