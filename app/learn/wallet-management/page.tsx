"use client";

import Header from "@/utils/Header";
import Footer from "@/utils/Footer";
import Image from "next/image";
import Link from "next/link";

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
              <Link href="/learn/badge-system">
                <div 
                  className="overflow-hidden cursor-pointer"
                  style={{
                    minHeight: '300px',
                    borderRadius: '0',
                    backgroundColor: '#F3EAD6',
                    position: 'relative'
                  }}
                >
                  <div className="absolute inset-0 flex items-center justify-center p-10">
                    <Image
                      src="/learn/badge-systems.png"
                      alt="Badge system"
                      width={900}
                      height={900}
                      style={{
                        maxWidth: '260px',
                        width: '75%',
                        height: 'auto',
                        objectFit: 'contain',
                        transition: 'transform 0.5s ease-out',
                        transform: 'scale(1)',
                        willChange: 'transform',
                        backfaceVisibility: 'hidden'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.1)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                      }}
                    />
                  </div>
                </div>
              </Link>
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
                  Badges are earned automatically as you hit meaningful milestones across your Cubes. They’re designed to reflect how reliably you show up, how often you follow through, and how trusted you are by others.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div>
              <Link href="/learn/trust-score">
                <div 
                  className="overflow-hidden cursor-pointer"
                  style={{
                    minHeight: '300px',
                    borderRadius: '0',
                    backgroundColor: '#FFDDAA',
                    position: 'relative'
                  }}
                >
                  <div className="absolute inset-0 flex items-center justify-center p-10">
                    <Image
                      src="/learn/trust-score.png"
                      alt="Trust Score"
                      width={900}
                      height={900}
                      style={{
                        maxWidth: '240px',
                        width: '70%',
                        height: 'auto',
                        objectFit: 'contain',
                        transition: 'transform 0.5s ease-out',
                        transform: 'scale(1)',
                        willChange: 'transform',
                        backfaceVisibility: 'hidden'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.1)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                      }}
                    />
                  </div>
                </div>
              </Link>
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
                  When you join Cube, you start with a Trust Score of 100%. From there, your actions do the talking. Trust Score isn't about promises or intentions. It's a simple reflection of how reliably you show up for your Cube.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div>
              <Link href="/learn/choosing-winner">
                <div 
                  className="overflow-hidden cursor-pointer"
                  style={{
                    minHeight: '300px',
                    borderRadius: '0',
                    backgroundColor: '#008BF2',
                    position: 'relative'
                  }}
                >
                  <div className="absolute inset-0 flex items-center justify-center p-10">
                    <Image
                      src="/learn/choosing-winner.png"
                      alt="Choosing winner"
                      width={900}
                      height={900}
                      style={{
                        maxWidth: '320px',
                        width: '85%',
                        height: 'auto',
                        objectFit: 'contain',
                        transition: 'transform 0.5s ease-out',
                        transform: 'scale(1)',
                        willChange: 'transform',
                        backfaceVisibility: 'hidden'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.1)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                      }}
                    />
                  </div>
                </div>
              </Link>
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
                  When you create or join a Cube, everyone agrees upfront on the cycle duration. That can be weekly, bi-weekly, monthly, or every three months. Once the cycle starts, the rules are locked in. No one can tweak them mid-stream. No one can influence the outcome.
                </p>
              </div>
            </div>
          </div>

          {/* Second Row of Related Articles */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {/* Card 4 */}
            <div>
              <Link href="/learn/contributions">
                <div 
                  className="overflow-hidden cursor-pointer"
                  style={{
                    minHeight: '300px',
                    borderRadius: '0',
                    backgroundColor: '#C68CC0',
                    position: 'relative'
                  }}
                >
                  <div className="absolute inset-0 flex items-center justify-center p-10">
                    <Image
                      src="/learn/contributions.png"
                      alt="Contributions"
                      width={900}
                      height={900}
                      style={{
                        maxWidth: '280px',
                        width: '80%',
                        height: 'auto',
                        objectFit: 'contain',
                        transition: 'transform 0.5s ease-out',
                        transform: 'scale(1)',
                        willChange: 'transform',
                        backfaceVisibility: 'hidden'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.1)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                      }}
                    />
                  </div>
                </div>
              </Link>
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
                  When a winner is selected in a Cube, contributions happen user to user, directly between members. Cube coordinates the process, but the money always moves on your terms.
                </p>
              </div>
            </div>

            {/* Card 5 */}
            <div>
              <Link href="/learn/invites">
                <div 
                  className="overflow-hidden cursor-pointer"
                  style={{
                    minHeight: '300px',
                    borderRadius: '0',
                    backgroundColor: '#FFCADB',
                    position: 'relative'
                  }}
                >
                  <div className="absolute inset-0 flex items-center justify-center p-10">
                    <Image
                      src="/learn/invites.png"
                      alt="Invites"
                      width={900}
                      height={900}
                      style={{
                        maxWidth: '300px',
                        width: '85%',
                        height: 'auto',
                        objectFit: 'contain',
                        transition: 'transform 0.5s ease-out',
                        transform: 'scale(1)',
                        willChange: 'transform',
                        backfaceVisibility: 'hidden'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.1)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                      }}
                    />
                  </div>
                </div>
              </Link>
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
                  Cube works best with people you trust. That’s why inviting friends isn’t just encouraged, it’s built directly into how the product grows. When you invite friends to Cube, you’re not just adding people. You’re unlocking the ability to create and run more Cubes.
                </p>
              </div>
            </div>

            {/* Card 6 */}
            <div>
              <Link href="/learn/submit-receipt">
                <div 
                  className="overflow-hidden cursor-pointer"
                  style={{
                    minHeight: '300px',
                    borderRadius: '0',
                    backgroundColor: '#FFCADB',
                    position: 'relative'
                  }}
                >
                  <div className="absolute inset-0 flex items-center justify-center p-10">
                    <Image
                      src="/learn/recepit.png"
                      alt="Receipt submission"
                      width={900}
                      height={900}
                      style={{
                        maxWidth: '220px',
                        width: '70%',
                        height: 'auto',
                        objectFit: 'contain',
                        transition: 'transform 0.5s ease-out',
                        transform: 'scale(1)',
                        willChange: 'transform',
                        backfaceVisibility: 'hidden'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.1)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                      }}
                    />
                  </div>
                </div>
              </Link>
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
                  Cube keeps contributions simple by breaking them into two clear actions: sending the payment and confirming it with a receipt. This keeps everyone aligned and cycles moving without friction.
                </p>
              </div>
            </div>
          </div>

          {/* Third Row - Create cube & Join cube */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div>
              <Link href="/learn/create-cube">
                <div 
                  className="overflow-hidden cursor-pointer"
                  style={{
                    minHeight: '300px',
                    borderRadius: '0',
                    backgroundColor: '#FF9DB6',
                    position: 'relative'
                  }}
                >
                  <div className="absolute inset-0 flex items-center justify-center p-10">
                    <Image
                      src="/learn/create-cube.png"
                      alt="Create a cube"
                      width={900}
                      height={900}
                      style={{
                        maxWidth: '280px',
                        width: '80%',
                        height: 'auto',
                        objectFit: 'contain',
                        transition: 'transform 0.5s ease-out',
                        transform: 'scale(1)',
                        willChange: 'transform',
                        backfaceVisibility: 'hidden'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.1)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                      }}
                    />
                  </div>
                </div>
              </Link>
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
                  How to create a cube?
                </h3>
                <p 
                  className="text-sm"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    color: '#666666',
                    fontWeight: 400
                  }}
                >
                  Creating a Cube is about defining structure upfront so everything runs smoothly later. Cube walks you through the process step by step, with clear guardrails to keep things fair, simple, and predictable for everyone involved.
                </p>
              </div>
            </div>

            <div>
              <Link href="/learn/join-cube">
                <div 
                  className="overflow-hidden cursor-pointer"
                  style={{
                    minHeight: '300px',
                    borderRadius: '0',
                    backgroundColor: '#34D457',
                    position: 'relative'
                  }}
                >
                  <div className="absolute inset-0 flex items-center justify-center p-10">
                    <Image
                      src="/learn/join-cube.png"
                      alt="Join a cube"
                      width={900}
                      height={900}
                      style={{
                        maxWidth: '280px',
                        width: '80%',
                        height: 'auto',
                        objectFit: 'contain',
                        transition: 'transform 0.5s ease-out',
                        transform: 'scale(1)',
                        willChange: 'transform',
                        backfaceVisibility: 'hidden'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.1)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                      }}
                    />
                  </div>
                </div>
              </Link>
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
                  How to join a cube?
                </h3>
                <p 
                  className="text-sm"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    color: '#666666',
                    fontWeight: 400
                  }}
                >
                  Joining a Cube is designed to be fast and intentional. Every Cube is private by default, and access is controlled through an invitation code so groups stay focused and trusted.
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
