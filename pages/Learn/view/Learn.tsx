import Image from 'next/image';
import Link from 'next/link';
import LearnWaitlistSection from './LearnWaitlistSection';

export default function Learn() {
  return (
    <>
    <div className="min-h-screen flex flex-col">
      {/* Top Section - Lime Green (38%) */}
      <div 
        className="flex flex-col justify-start items-start pt-20 sm:pt-24 lg:pt-32"
        style={{ 
          backgroundColor: 'rgb(204, 255, 0)',
          height: '38vh',
          minHeight: '380px',
          position: 'relative'
        }}
      >
        <div 
          style={{
            position: 'absolute',
            left: '7%',
            top: '45%',
            maxWidth: '50%'
          }}
        >
          {/* LIBRARY Tag */}
          <div 
            className="inline-block mb-3"
            style={{
              border: '1px solid rgba(34, 34, 34, 0.2)',
              backgroundColor: 'transparent',
              borderRadius: '9999px',
              padding: '4px 10px'
            }}
          >
            <span 
              className="uppercase tracking-wider"
              style={{
                color: '#222222',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 500,
                fontSize: '13px',
                letterSpacing: '0.05em'
              }}
            >
              LIBRARY
            </span>
          </div>
          
          {/* Cube Library Heading */}
          <h1 
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl"
            style={{
              fontFamily: 'var(--font-instrument-serif), serif',
              color: '#222222',
              fontWeight: 400,
              lineHeight: '1.1',
              letterSpacing: '-0.02em'
            }}
          >
            Cube Library
        </h1>
        </div>
      </div>

      {/* Bottom Section - Off-White (62%) */}
      <div 
        className="flex flex-col justify-start items-start py-12 px-4 sm:px-6 lg:px-8"
        style={{ 
          backgroundColor: '#fcfaf7',
          minHeight: '62vh'
        }}
      >
        <div 
          className="w-full"
          style={{
            paddingLeft: '7%',
            paddingTop: '4%',
            paddingRight: '3%'
          }}
        >
          <p 
            className="text-3xl sm:text-4xl lg:text-5xl mb-12"
            style={{
              fontFamily: 'var(--font-instrument-serif), serif',
              color: '#222222',
              fontWeight: 400
            }}
          >
            All you need about cube
          </p>

          {/* Content Cards */}
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            {/* Wallet Management */}
            <div>
              {/* Illustration Section */}
              <Link href="/learn/wallet-management">
                <div 
                  className="overflow-hidden cursor-pointer"
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
                      placeholder="empty"
                      loading="eager"
                      style={{
                        maxWidth: '400px',
                        width: '65%',
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
              
              {/* Text Section */}
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
                <h2 
                  className="text-4xl mb-4"
                  style={{
                    fontFamily: 'var(--font-instrument-serif), serif',
                    color: '#222222',
                    fontWeight: 600
                  }}
                >
                  What is wallet management?
                </h2>
                <p 
                  className="text-base"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    color: '#222222',
                    fontWeight: 400,
                    lineHeight: '1.6'
                  }}
                >
                  Cube keeps wallet setup simple because it only needs one thing: a way for other members to send you money when it's your turn to win.
                </p>
              </div>
            </div>

            {/* Trust Score */}
            <div>
              {/* Illustration Section */}
              <Link href="/learn/trust-score">
                <div 
                  className="flex items-center justify-center p-12 cursor-pointer"
                  style={{
                    backgroundColor: '#FFDDAA',
                    minHeight: '500px',
                    borderRadius: '0',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  <Image
                    src="/learn/trust-score.png"
                    alt="Trust Score"
                    width={900}
                    height={900}
                    placeholder="empty"
                    loading="eager"
                    style={{
                      maxWidth: '320px',
                      width: '55%',
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
              </Link>
              
              {/* Text Section */}
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
                <h2 
                  className="text-4xl mb-4"
                  style={{
                    fontFamily: 'var(--font-instrument-serif), serif',
                    color: '#222222',
                    fontWeight: 600
                  }}
                >
                  What is a Trust Score?
                </h2>
                <p 
                  className="text-base"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    color: '#222222',
                    fontWeight: 400,
                    lineHeight: '1.6'
                  }}
                >
                  When you join Cube, you start with a Trust Score of 100%. From there, your actions do the talking. Trust Score isn't about promises or intentions. It's a simple reflection of how reliably you show up for your Cube.
                </p>
              </div>
            </div>
          </div>

          {/* Second Row of Content Cards */}
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            {/* Card 3 */}
            <div>
              {/* Illustration Section */}
              <Link href="/learn/choosing-winner">
                <div 
                  className="flex items-center justify-center p-12 cursor-pointer"
                  style={{
                    backgroundColor: '#008BF2',
                    minHeight: '500px',
                    borderRadius: '0',
                    marginTop: '40px',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  <Image
                    src="/learn/choosing-winner.png"
                    alt="Choosing winner"
                    width={900}
                    height={900}
                    placeholder="empty"
                    loading="eager"
                    style={{
                      maxWidth: '520px',
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
              </Link>
              
              {/* Text Section */}
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
                <h2 
                  className="text-4xl mb-4"
                  style={{
                    fontFamily: 'var(--font-instrument-serif), serif',
                    color: '#222222',
                    fontWeight: 600
                  }}
                >
                  How are winners chosen?
                </h2>
                <p 
                  className="text-base"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    color: '#222222',
                    fontWeight: 400,
                    lineHeight: '1.6'
                  }}
                >
                  When you create or join a Cube, everyone agrees upfront on the cycle duration. That can be weekly, bi-weekly, monthly, or every three months. Once the cycle starts, the rules are locked in. No one can tweak them mid-stream. No one can influence the outcome.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div>
              {/* Illustration Section */}
              <Link href="/learn/contributions">
                <div 
                  className="flex items-center justify-center p-12 cursor-pointer"
                  style={{
                    backgroundColor: '#C68CC0',
                    minHeight: '500px',
                    borderRadius: '0',
                    marginTop: '40px'
                  }}
                >
                  <Image
                    src="/learn/contributions.png"
                    alt="Contributions"
                    width={900}
                    height={900}
                    placeholder="empty"
                    loading="eager"
                    style={{
                      maxWidth: '440px',
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
              </Link>
              
              {/* Text Section */}
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
                <h2 
                  className="text-4xl mb-4"
                  style={{
                    fontFamily: 'var(--font-instrument-serif), serif',
                    color: '#222222',
                    fontWeight: 600
                  }}
                >
                  How is contributions handled?
                </h2>
                <p 
                  className="text-base"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    color: '#222222',
                    fontWeight: 400,
                    lineHeight: '1.6'
                  }}
                >
                  When a winner is selected in a Cube, contributions happen user to user, directly between members. Cube coordinates the process, but the money always moves on your terms.
                </p>
              </div>
            </div>
          </div>

          {/* Third Row of Content Cards */}
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            {/* Card 5 */}
            <div>
              {/* Illustration Section */}
              <Link href="/learn/invites">
                <div 
                  className="flex items-center justify-center p-12 cursor-pointer"
                  style={{
                    backgroundColor: '#FFCADB',
                    minHeight: '500px',
                    borderRadius: '0',
                    marginTop: '40px'
                  }}
                >
                  <Image
                    src="/learn/invites.png"
                    alt="Invites"
                    width={900}
                    height={900}
                    style={{
                      maxWidth: '460px',
                      width: '78%',
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
              </Link>
              
              {/* Text Section */}
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
                <h2 
                  className="text-4xl mb-4"
                  style={{
                    fontFamily: 'var(--font-instrument-serif), serif',
                    color: '#222222',
                    fontWeight: 600
                  }}
                >
                  How do invites work?
                </h2>
                <p 
                  className="text-base"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    color: '#222222',
                    fontWeight: 400,
                    lineHeight: '1.6'
                  }}
                >
                  Cube works best with people you trust. That’s why inviting friends isn’t just encouraged, it’s built directly into how the product grows. When you invite friends to Cube, you’re not just adding people. You’re unlocking the ability to create and run more Cubes.
                </p>
              </div>
            </div>

            {/* Card 6 */}
            <div>
              {/* Illustration Section */}
              <Link href="/learn/badge-system">
                <div 
                  className="flex items-center justify-center p-12 cursor-pointer"
                  style={{
                    backgroundColor: '#F3EAD6',
                    minHeight: '500px',
                    borderRadius: '0',
                    marginTop: '40px'
                  }}
                >
                  <Image
                    src="/learn/badge-systems.png"
                    alt="Badge system"
                    width={900}
                    height={900}
                    placeholder="empty"
                    loading="eager"
                    style={{
                      maxWidth: '380px',
                      width: '68%',
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
              </Link>
              
              {/* Text Section */}
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
                <h2 
                  className="text-4xl mb-4"
                  style={{
                    fontFamily: 'var(--font-instrument-serif), serif',
                    color: '#222222',
                    fontWeight: 600
                  }}
                >
                  What is the badge system?
                </h2>
                <p 
                  className="text-base"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    color: '#222222',
                    fontWeight: 400,
                    lineHeight: '1.6'
                  }}
                >
                  Badges are earned automatically as you hit meaningful milestones across your Cubes. They’re designed to reflect how reliably you show up, how often you follow through, and how trusted you are by others.
                </p>
              </div>
            </div>
          </div>

          {/* Fourth Row of Content Cards */}
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            {/* Card 7 */}
            <div>
              {/* Illustration Section */}
              <Link href="/learn/submit-receipt">
                <div 
                  className="flex items-center justify-center p-12 cursor-pointer"
                  style={{
                    backgroundColor: '#FFCADB',
                    minHeight: '500px',
                    borderRadius: '0',
                    marginTop: '40px'
                  }}
                >
                  <Image
                    src="/learn/recepit.png"
                    alt="Receipt submission"
                    width={900}
                    height={900}
                    placeholder="empty"
                    loading="eager"
                    style={{
                      maxWidth: '310px',
                      width: '58%',
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
              </Link>
              
              {/* Text Section */}
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
                <h2 
                  className="text-4xl mb-4"
                  style={{
                    fontFamily: 'var(--font-instrument-serif), serif',
                    color: '#222222',
                    fontWeight: 600
                  }}
                >
                  How to submit a receipt?
                </h2>
                <p 
                  className="text-base"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    color: '#222222',
                    fontWeight: 400,
                    lineHeight: '1.6'
                  }}
                >
                  Cube keeps contributions simple by breaking them into two clear actions: sending the payment and confirming it with a receipt. This keeps everyone aligned and cycles moving without friction.
                </p>
              </div>
            </div>

            {/* Card 8 */}
            <div>
              {/* Illustration Section */}
              <Link href="/learn/send-payment">
                <div 
                  className="flex items-center justify-center p-12 cursor-pointer"
                  style={{
                    backgroundColor: '#CFE2FE',
                    minHeight: '500px',
                    borderRadius: '0',
                    marginTop: '40px'
                  }}
                >
                  <Image
                    src="/learn/send-payment.png"
                    alt="Send payment"
                    width={900}
                    height={900}
                    placeholder="empty"
                    loading="eager"
                    style={{
                      maxWidth: '400px',
                      width: '72%',
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
              </Link>
              
              {/* Text Section */}
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
                <h2 
                  className="text-4xl mb-4"
                  style={{
                    fontFamily: 'var(--font-instrument-serif), serif',
                    color: '#222222',
                    fontWeight: 600
                  }}
                >
                  How do payments get sent?
                </h2>
                <p 
                  className="text-base"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    color: '#222222',
                    fontWeight: 400,
                    lineHeight: '1.6'
                  }}
                >
                  When you send a payment on Cube, the transfer happens directly between you and the winner. Cube does not store funds, route payments, or sit in the middle of the transaction.
                </p>
                <p 
                  className="text-base mt-4"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    color: '#222222',
                    fontWeight: 400,
                    lineHeight: '1.6'
                  }}
                >
                  Instead, Cube acts as a coordinator. It tells you who to pay, how to pay, and when, while keeping a clear record that the payment happened.
                </p>
              </div>
            </div>
          </div>

          {/* Fifth Row of Content Cards */}
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            {/* Card 9 */}
            <div>
              {/* Illustration Section */}
              <Link href="/learn/payouts">
                <div 
                  className="flex items-center justify-center p-12 cursor-pointer"
                  style={{
                    backgroundColor: '#D2C1FF',
                    minHeight: '500px',
                    borderRadius: '0',
                    marginTop: '40px'
                  }}
                >
                  <Image
                    src="/learn/payouts.png"
                    alt="Payouts"
                    width={900}
                    height={900}
                    placeholder="empty"
                    loading="eager"
                    style={{
                      maxWidth: '420px',
                      width: '72%',
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
              </Link>
              
              {/* Text Section */}
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
                <h2 
                  className="text-4xl mb-4"
                  style={{
                    fontFamily: 'var(--font-instrument-serif), serif',
                    color: '#222222',
                    fontWeight: 600
                  }}
                >
                  Learn about payouts
                </h2>
                <p 
                  className="text-base"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    color: '#222222',
                    fontWeight: 400,
                    lineHeight: '1.6'
                  }}
                >
                  Cube payouts are designed to be fast, direct, and predictable. There’s no waiting for funds to clear inside the app, and no balance sitting in limbo. When you win, money moves straight to you.
                </p>
              </div>
            </div>

            {/* Card 10 */}
            <div>
              {/* Illustration Section */}
              <Link href="/learn/safety-securities">
                <div 
                  className="flex items-center justify-center p-12 cursor-pointer"
                  style={{
                    backgroundColor: '#A0C5B5',
                    minHeight: '500px',
                    borderRadius: '0',
                    marginTop: '40px'
                  }}
                >
                  <Image
                    src="/learn/safety-securities.png"
                    alt="Safety and securities"
                    width={900}
                    height={900}
                    placeholder="empty"
                    loading="eager"
                    style={{
                      maxWidth: '420px',
                      width: '72%',
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
              </Link>
              
              {/* Text Section */}
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
                <h2 
                  className="text-4xl mb-4"
                  style={{
                    fontFamily: 'var(--font-instrument-serif), serif',
                    color: '#222222',
                    fontWeight: 600
                  }}
                >
                  Learn about safety and securities
                </h2>
                <p 
                  className="text-base"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    color: '#222222',
                    fontWeight: 400,
                    lineHeight: '1.6'
                  }}
                >
                  Cube is built around one idea: saving together only works when trust, visibility, and accountability are built in by default. That's why Cube doesn't rely on assumptions. It relies on signals.
                </p>
              </div>
            </div>
          </div>

          {/* Sixth Row of Content Cards */}
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            {/* Card 11 */}
            <div>
              {/* Illustration Section */}
              <Link href="/learn/create-cube">
                <div 
                  className="flex items-center justify-center p-12 cursor-pointer"
                  style={{
                    backgroundColor: '#FF9DB6',
                    minHeight: '500px',
                    borderRadius: '0',
                    marginTop: '40px'
                  }}
                >
                  <Image
                    src="/learn/create-cube.png"
                    alt="Create cube"
                    width={900}
                    height={900}
                    placeholder="empty"
                    loading="eager"
                    style={{
                      maxWidth: '360px',
                      width: '65%',
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
              </Link>
              
              {/* Text Section */}
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
                <h2 
                  className="text-4xl mb-4"
                  style={{
                    fontFamily: 'var(--font-instrument-serif), serif',
                    color: '#222222',
                    fontWeight: 600
                  }}
                >
                  How to create a cube?
                </h2>
                <p 
                  className="text-base"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    color: '#222222',
                    fontWeight: 400,
                    lineHeight: '1.6'
                  }}
                >
                  Creating a Cube is about defining structure upfront so everything runs smoothly later. Cube walks you through the process step by step, with clear guardrails to keep things fair, simple, and predictable for everyone involved.
                </p>
              </div>
            </div>

            {/* Card 12 */}
            <div>
              {/* Illustration Section */}
              <Link href="/learn/join-cube">
                <div 
                  className="flex items-center justify-center p-12 cursor-pointer"
                  style={{
                    backgroundColor: '#34D457',
                    minHeight: '500px',
                    borderRadius: '0',
                    marginTop: '40px'
                  }}
                >
                  <Image
                    src="/learn/join-cube.png"
                    alt="Join cube"
                    width={900}
                    height={900}
                    placeholder="empty"
                    loading="eager"
                    style={{
                      maxWidth: '420px',
                      width: '72%',
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
              </Link>
              
              {/* Text Section */}
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
                <h2 
                  className="text-4xl mb-4"
                  style={{
                    fontFamily: 'var(--font-instrument-serif), serif',
                    color: '#222222',
                    fontWeight: 600
                  }}
                >
                  How to join a cube?
                </h2>
                <p 
                  className="text-base"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    color: '#222222',
                    fontWeight: 400,
                    lineHeight: '1.6'
                  }}
                >
                  Joining a Cube is designed to be fast and intentional. Every Cube is private by default, and access is controlled through an invitation code so groups stay focused and trusted.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Spacer between library and video */}
    <div
      style={{
        backgroundColor: "#fcfaf7",
        height: "120px",
      }}
    />
    <LearnWaitlistSection />
    </>
  );
}
