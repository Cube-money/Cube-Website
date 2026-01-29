"use client";

import Header from "@/utils/Header";
import Footer from "@/utils/Footer";
import Image from "next/image";

export default function WalletManagementPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: '#fcfaf7' }}>
      <Header />
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 items-start">
            {/* Left Section - Text */}
            <div style={{ display: 'flex', flexDirection: 'column', minHeight: '500px' }}>
              <div>
                <p 
                  className="text-xs mb-8 uppercase"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    color: '#666666',
                    fontWeight: 400,
                    letterSpacing: '0.05em'
                  }}
                >
                  CUBE LIBRARY · JAN 26, 2026
                </p>
                <h1 
                  className="text-6xl sm:text-7xl lg:text-8xl leading-tight mb-8"
                  style={{
                    fontFamily: 'var(--font-instrument-serif), serif',
                    color: '#222222',
                    fontWeight: 400
                  }}
                >
                  What is wallet<br />management?
                </h1>
              </div>
              <div 
                className="flex items-center justify-start"
                style={{ marginTop: 'auto' }}
              >
                <a
                  href="#how-cube-knows"
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    border: '1px solid #999999',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    textDecoration: 'none',
                    transition: 'opacity 0.2s'
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('how-cube-knows')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                >
                  <svg 
                    width="20" 
                    height="20" 
                    viewBox="0 0 20 20" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      d="M10 5V15M10 15L6 11M10 15L14 11" 
                      stroke="#222222" 
                      strokeWidth="1.5" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Right Section - Image Container */}
            <div>
              <div 
                className="overflow-hidden"
                style={{
                  minHeight: '500px',
                  borderRadius: '0',
                  position: 'relative',
                  backgroundColor: '#B6E0E5'
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center p-10">
                  <Image
                    src="/learn/wallet-management.png"
                    alt="Wallet management illustration"
                    width={900}
                    height={900}
                    style={{
                      maxWidth: '400px',
                      width: '65%',
                      height: 'auto',
                      objectFit: 'contain'
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              width: '100%',
              height: '1px',
              backgroundColor: '#999999',
              marginTop: '40px'
            }}
          />
          
          {/* Content Section */}
          <div id="content" style={{ marginTop: '60px', maxWidth: '800px' }}>
            <h2
              id="how-cube-knows"
              className="text-4xl mb-6"
              style={{
                fontFamily: 'var(--font-instrument-serif), serif',
                color: '#222222',
                fontWeight: 600,
                scrollMarginTop: '100px'
              }}
            >
              How Cube knows where to send your money
            </h2>
            <p
              className="text-base mb-8"
              style={{
                fontFamily: 'Inter, sans-serif',
                color: '#222222',
                fontWeight: 400,
                lineHeight: '1.6'
              }}
            >
              Cube keeps wallet setup simple because it only needs one thing: a way for other members to send you money when it's your turn to win.
            </p>
            <p
              className="text-base mb-8"
              style={{
                fontFamily: 'Inter, sans-serif',
                color: '#222222',
                fontWeight: 400,
                lineHeight: '1.6'
              }}
            >
              Cube does not hold money, manage balances, or move funds on your behalf. Instead, you connect a payment method so contributions can flow directly between members.
            </p>

            <h3
              className="text-3xl mb-4 mt-12"
              style={{
                fontFamily: 'var(--font-instrument-serif), serif',
                color: '#222222',
                fontWeight: 600
              }}
            >
              How wallet setup works
            </h3>
            <p
              className="text-base mb-4"
              style={{
                fontFamily: 'Inter, sans-serif',
                color: '#222222',
                fontWeight: 400,
                lineHeight: '1.6'
              }}
            >
              Inside Cube, you can connect either Zelle or Venmo as your payment method. This information is only used so other members know exactly where to send contributions when you win a cycle.
            </p>
            <p
              className="text-base mb-2"
              style={{
                fontFamily: 'Inter, sans-serif',
                color: '#222222',
                fontWeight: 400,
                lineHeight: '1.6'
              }}
            >
              For Zelle, you can connect using:
            </p>
            <ul
              className="mb-4 ml-6"
              style={{
                fontFamily: 'Inter, sans-serif',
                color: '#222222',
                fontWeight: 400,
                lineHeight: '1.6',
                listStyleType: 'disc'
              }}
            >
              <li className="mb-2">Your email address, or</li>
              <li>Your phone number</li>
            </ul>
            <p
              className="text-base mb-2"
              style={{
                fontFamily: 'Inter, sans-serif',
                color: '#222222',
                fontWeight: 400,
                lineHeight: '1.6'
              }}
            >
              For Venmo, you connect using:
            </p>
            <ul
              className="mb-8 ml-6"
              style={{
                fontFamily: 'Inter, sans-serif',
                color: '#222222',
                fontWeight: 400,
                lineHeight: '1.6',
                listStyleType: 'disc'
              }}
            >
              <li>Your Venmo username</li>
            </ul>
            <p
              className="text-base mb-8"
              style={{
                fontFamily: 'Inter, sans-serif',
                color: '#222222',
                fontWeight: 400,
                lineHeight: '1.6'
              }}
            >
              Once connected, this becomes your default payout destination for Cubes you participate in.
            </p>

            <h3
              className="text-3xl mb-4 mt-12"
              style={{
                fontFamily: 'var(--font-instrument-serif), serif',
                color: '#222222',
                fontWeight: 600
              }}
            >
              Why Cube needs this information
            </h3>
            <p
              className="text-base mb-4"
              style={{
                fontFamily: 'Inter, sans-serif',
                color: '#222222',
                fontWeight: 400,
                lineHeight: '1.6'
              }}
            >
              When you win a cycle, other members need a clear and reliable way to send you money. Your connected wallet ensures:
            </p>
            <ul
              className="mb-8 ml-6"
              style={{
                fontFamily: 'Inter, sans-serif',
                color: '#222222',
                fontWeight: 400,
                lineHeight: '1.6',
                listStyleType: 'disc'
              }}
            >
              <li className="mb-2">No confusion about where to send funds</li>
              <li className="mb-2">Faster payouts</li>
              <li>Fewer follow ups outside the app</li>
            </ul>
            <p
              className="text-base mb-8"
              style={{
                fontFamily: 'Inter, sans-serif',
                color: '#222222',
                fontWeight: 400,
                lineHeight: '1.6'
              }}
            >
              Cube only displays your selected payment method to members of the same Cube when it's time to contribute.
            </p>

            <h3
              className="text-3xl mb-4 mt-12"
              style={{
                fontFamily: 'var(--font-instrument-serif), serif',
                color: '#222222',
                fontWeight: 600
              }}
            >
              What Cube does and does not do
            </h3>
            <p
              className="text-base mb-2"
              style={{
                fontFamily: 'Inter, sans-serif',
                color: '#222222',
                fontWeight: 400,
                lineHeight: '1.6'
              }}
            >
              Cube does not store money.
            </p>
            <p
              className="text-base mb-2"
              style={{
                fontFamily: 'Inter, sans-serif',
                color: '#222222',
                fontWeight: 400,
                lineHeight: '1.6'
              }}
            >
              Cube does not process payments.
            </p>
            <p
              className="text-base mb-6"
              style={{
                fontFamily: 'Inter, sans-serif',
                color: '#222222',
                fontWeight: 400,
                lineHeight: '1.6'
              }}
            >
              Cube does not access your bank account.
            </p>
            <p
              className="text-base mb-6"
              style={{
                fontFamily: 'Inter, sans-serif',
                color: '#222222',
                fontWeight: 400,
                lineHeight: '1.6'
              }}
            >
              All contributions are sent directly between members using services like Zelle or Venmo. Cube simply coordinates timing and records confirmations so everyone stays aligned.
            </p>
            <p
              className="text-base mb-8"
              style={{
                fontFamily: 'Inter, sans-serif',
                color: '#222222',
                fontWeight: 400,
                lineHeight: '1.6'
              }}
            >
              At no point can Cube move money on your behalf or initiate transfers for you.
            </p>

            <h3
              className="text-3xl mb-4 mt-12"
              style={{
                fontFamily: 'var(--font-instrument-serif), serif',
                color: '#222222',
                fontWeight: 600
              }}
            >
              Updating your wallet
            </h3>
            <p
              className="text-base mb-8"
              style={{
                fontFamily: 'Inter, sans-serif',
                color: '#222222',
                fontWeight: 400,
                lineHeight: '1.6'
              }}
            >
              You can update or change your connected payment method at any time. If you switch wallets, future contributions will follow your new preference.
            </p>
            <p
              className="text-base mb-8"
              style={{
                fontFamily: 'Inter, sans-serif',
                color: '#222222',
                fontWeight: 400,
                lineHeight: '1.6'
              }}
            >
              This gives you full control over how you receive funds, without locking you into a single option.
            </p>

            <h3
              className="text-3xl mb-4 mt-12"
              style={{
                fontFamily: 'var(--font-instrument-serif), serif',
                color: '#222222',
                fontWeight: 600
              }}
            >
              The takeaway
            </h3>
            <p
              className="text-base mb-4"
              style={{
                fontFamily: 'Inter, sans-serif',
                color: '#222222',
                fontWeight: 400,
                lineHeight: '1.6'
              }}
            >
              Wallet management on Cube isn't about holding money. It's about clarity.
            </p>
            <ul
              className="mb-6 ml-6"
              style={{
                fontFamily: 'Inter, sans-serif',
                color: '#222222',
                fontWeight: 400,
                lineHeight: '1.6',
                listStyleType: 'disc'
              }}
            >
              <li className="mb-2">You choose how you want to be paid.</li>
              <li className="mb-2">Others know exactly where to send funds.</li>
              <li>And Cube stays out of the way.</li>
            </ul>
            <p
              className="text-base mb-8"
              style={{
                fontFamily: 'Inter, sans-serif',
                color: '#222222',
                fontWeight: 400,
                lineHeight: '1.6'
              }}
            >
              That's how Cube keeps payouts fast, simple, and secure.
            </p>
          </div>
          <div
            style={{
              width: '100%',
              height: '1px',
              backgroundColor: '#999999',
              marginTop: '60px'
            }}
          />
          <h2
            className="text-4xl mt-12 mb-8"
            style={{
              fontFamily: 'var(--font-instrument-serif), serif',
              color: '#222222',
              fontWeight: 600
            }}
          >
            Related Articles
          </h2>
          
          {/* Related Articles Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {/* Card 1 */}
            <div>
              <div 
                className="overflow-hidden"
                style={{
                  minHeight: '300px',
                  borderRadius: '0',
                  backgroundColor: '#f5f5f0'
                }}
              >
              </div>
              <div className="pt-6">
                <p 
                  className="text-xs mb-3"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    color: '#666666',
                    fontWeight: 400,
                    letterSpacing: '0.05em'
                  }}
                >
                  CUBE LIBRARY · JAN 26, 2026
                </p>
                <h3 
                  className="text-2xl mb-2"
                  style={{
                    fontFamily: 'var(--font-instrument-serif), serif',
                    color: '#222222',
                    fontWeight: 600
                  }}
                >
                  What is the badge system?
                </h3>
                <p 
                  className="text-sm"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    color: '#666666',
                    fontWeight: 400
                  }}
                >
                  Unveiling the Future of Web Design
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div>
              <div 
                className="overflow-hidden"
                style={{
                  minHeight: '300px',
                  borderRadius: '0',
                  backgroundColor: '#ffe4d6'
                }}
              >
              </div>
              <div className="pt-6">
                <p 
                  className="text-xs mb-3"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    color: '#666666',
                    fontWeight: 400,
                    letterSpacing: '0.05em'
                  }}
                >
                  CUBE LIBRARY · JAN 26, 2026
                </p>
                <h3 
                  className="text-2xl mb-2"
                  style={{
                    fontFamily: 'var(--font-instrument-serif), serif',
                    color: '#222222',
                    fontWeight: 600
                  }}
                >
                  What is a Trust Score?
                </h3>
                <p 
                  className="text-sm"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    color: '#666666',
                    fontWeight: 400
                  }}
                >
                  Unveiling the Future of Web Design
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div>
              <div 
                className="overflow-hidden"
                style={{
                  minHeight: '300px',
                  borderRadius: '0',
                  backgroundColor: '#e0f2fe'
                }}
              >
              </div>
              <div className="pt-6">
                <p 
                  className="text-xs mb-3"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    color: '#666666',
                    fontWeight: 400,
                    letterSpacing: '0.05em'
                  }}
                >
                  CUBE LIBRARY · JAN 26, 2026
                </p>
                <h3 
                  className="text-2xl mb-2"
                  style={{
                    fontFamily: 'var(--font-instrument-serif), serif',
                    color: '#222222',
                    fontWeight: 600
                  }}
                >
                  How are winners chosen?
                </h3>
                <p 
                  className="text-sm"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    color: '#666666',
                    fontWeight: 400
                  }}
                >
                  Unveiling the Future of Web Design
                </p>
              </div>
            </div>
          </div>

          {/* Second Row of Related Articles */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {/* Card 4 */}
            <div>
              <div 
                className="overflow-hidden"
                style={{
                  minHeight: '300px',
                  borderRadius: '0',
                  backgroundColor: '#f0e7ff'
                }}
              >
              </div>
              <div className="pt-6">
                <p 
                  className="text-xs mb-3"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    color: '#666666',
                    fontWeight: 400,
                    letterSpacing: '0.05em'
                  }}
                >
                  CUBE LIBRARY · JAN 26, 2026
                </p>
                <h3 
                  className="text-2xl mb-2"
                  style={{
                    fontFamily: 'var(--font-instrument-serif), serif',
                    color: '#222222',
                    fontWeight: 600
                  }}
                >
                  How is contributions handled?
                </h3>
                <p 
                  className="text-sm"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    color: '#666666',
                    fontWeight: 400
                  }}
                >
                  Unveiling the Future of Web Design
                </p>
              </div>
            </div>

            {/* Card 5 */}
            <div>
              <div 
                className="overflow-hidden"
                style={{
                  minHeight: '300px',
                  borderRadius: '0',
                  backgroundColor: '#dcfce7'
                }}
              >
              </div>
              <div className="pt-6">
                <p 
                  className="text-xs mb-3"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    color: '#666666',
                    fontWeight: 400,
                    letterSpacing: '0.05em'
                  }}
                >
                  CUBE LIBRARY · JAN 26, 2026
                </p>
                <h3 
                  className="text-2xl mb-2"
                  style={{
                    fontFamily: 'var(--font-instrument-serif), serif',
                    color: '#222222',
                    fontWeight: 600
                  }}
                >
                  How do invites work?
                </h3>
                <p 
                  className="text-sm"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    color: '#666666',
                    fontWeight: 400
                  }}
                >
                  Unveiling the Future of Web Design
                </p>
              </div>
            </div>

            {/* Card 6 */}
            <div>
              <div 
                className="overflow-hidden"
                style={{
                  minHeight: '300px',
                  borderRadius: '0',
                  backgroundColor: '#fef3c7'
                }}
              >
              </div>
              <div className="pt-6">
                <p 
                  className="text-xs mb-3"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    color: '#666666',
                    fontWeight: 400,
                    letterSpacing: '0.05em'
                  }}
                >
                  CUBE LIBRARY · JAN 26, 2026
                </p>
                <h3 
                  className="text-2xl mb-2"
                  style={{
                    fontFamily: 'var(--font-instrument-serif), serif',
                    color: '#222222',
                    fontWeight: 600
                  }}
                >
                  How to submit a receipt?
                </h3>
                <p 
                  className="text-sm"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    color: '#666666',
                    fontWeight: 400
                  }}
                >
                  Unveiling the Future of Web Design
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
