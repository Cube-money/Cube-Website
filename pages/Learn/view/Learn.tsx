import Image from 'next/image';
import Link from 'next/link';

export default function Learn() {
  return (
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
                    position: 'relative'
                  }}
                >
                  <Image
                    src="/learn/couch.png"
                    alt="Wallet Management"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{
                      objectFit: 'cover',
                      objectPosition: 'center',
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
                  Every business aspires to grow, but not all growth is sustainable. Rapid expansion without a solid foundation can lead to operational challenges, financial strain, and inefficiencies that ultimately stifle success.
                </p>
              </div>
            </div>

            {/* Trust Score */}
            <div>
              {/* Illustration Section */}
              <div 
                className="flex items-center justify-center p-12"
                style={{
                  backgroundColor: '#ffe4d6',
                  minHeight: '500px',
                  borderRadius: '0'
                }}
              >
              </div>
              
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
                  Every business aspires to grow, but not all growth is sustainable. Rapid expansion without a solid foundation can lead to operational challenges, financial strain, and inefficiencies that ultimately stifle success.
                </p>
              </div>
            </div>
          </div>

          {/* Second Row of Content Cards */}
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            {/* Card 3 */}
            <div>
              {/* Illustration Section */}
              <div 
                className="flex items-center justify-center p-12"
                style={{
                  backgroundColor: '#f0e7ff',
                  minHeight: '500px',
                  borderRadius: '0',
                  marginTop: '40px'
                }}
              >
              </div>
              
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
                  How does security work?
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
                  Every business aspires to grow, but not all growth is sustainable. Rapid expansion without a solid foundation can lead to operational challenges, financial strain, and inefficiencies that ultimately stifle success.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div>
              {/* Illustration Section */}
              <div 
                className="flex items-center justify-center p-12"
                style={{
                  backgroundColor: '#dcfce7',
                  minHeight: '500px',
                  borderRadius: '0',
                  marginTop: '40px'
                }}
              >
              </div>
              
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
                  What are savings circles?
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
                  Every business aspires to grow, but not all growth is sustainable. Rapid expansion without a solid foundation can lead to operational challenges, financial strain, and inefficiencies that ultimately stifle success.
                </p>
              </div>
            </div>
          </div>

          {/* Third Row of Content Cards */}
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            {/* Card 5 */}
            <div>
              {/* Illustration Section */}
              <div 
                className="flex items-center justify-center p-12"
                style={{
                  backgroundColor: '#fef3c7',
                  minHeight: '500px',
                  borderRadius: '0',
                  marginTop: '40px'
                }}
              >
              </div>
              
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
                  How do I join a circle?
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
                  Every business aspires to grow, but not all growth is sustainable. Rapid expansion without a solid foundation can lead to operational challenges, financial strain, and inefficiencies that ultimately stifle success.
                </p>
              </div>
            </div>

            {/* Card 6 */}
            <div>
              {/* Illustration Section */}
              <div 
                className="flex items-center justify-center p-12"
                style={{
                  backgroundColor: '#fee2e2',
                  minHeight: '500px',
                  borderRadius: '0',
                  marginTop: '40px'
                }}
              >
              </div>
              
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
                  When do I get paid?
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
                  Every business aspires to grow, but not all growth is sustainable. Rapid expansion without a solid foundation can lead to operational challenges, financial strain, and inefficiencies that ultimately stifle success.
                </p>
              </div>
            </div>
          </div>

          {/* Fourth Row of Content Cards */}
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            {/* Card 7 */}
            <div>
              {/* Illustration Section */}
              <div 
                className="flex items-center justify-center p-12"
                style={{
                  backgroundColor: '#e0e7ff',
                  minHeight: '500px',
                  borderRadius: '0',
                  marginTop: '40px'
                }}
              >
              </div>
              
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
                  How much can I contribute?
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
                  Every business aspires to grow, but not all growth is sustainable. Rapid expansion without a solid foundation can lead to operational challenges, financial strain, and inefficiencies that ultimately stifle success.
                </p>
              </div>
            </div>

            {/* Card 8 */}
            <div>
              {/* Illustration Section */}
              <div 
                className="flex items-center justify-center p-12"
                style={{
                  backgroundColor: '#d1fae5',
                  minHeight: '500px',
                  borderRadius: '0',
                  marginTop: '40px'
                }}
              >
              </div>
              
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
                  How do I manage my account?
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
                  Every business aspires to grow, but not all growth is sustainable. Rapid expansion without a solid foundation can lead to operational challenges, financial strain, and inefficiencies that ultimately stifle success.
                </p>
              </div>
            </div>
          </div>

          {/* Fifth Row of Content Cards */}
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            {/* Card 9 */}
            <div>
              {/* Illustration Section */}
              <div 
                className="flex items-center justify-center p-12"
                style={{
                  backgroundColor: '#fce7f3',
                  minHeight: '500px',
                  borderRadius: '0',
                  marginTop: '40px'
                }}
              >
              </div>
              
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
                  How do I get notifications?
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
                  Every business aspires to grow, but not all growth is sustainable. Rapid expansion without a solid foundation can lead to operational challenges, financial strain, and inefficiencies that ultimately stifle success.
                </p>
              </div>
            </div>

            {/* Card 10 */}
            <div>
              {/* Illustration Section */}
              <div 
                className="flex items-center justify-center p-12"
                style={{
                  backgroundColor: '#fef9c3',
                  minHeight: '500px',
                  borderRadius: '0',
                  marginTop: '40px'
                }}
              >
              </div>
              
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
                  Need more help?
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
                  Every business aspires to grow, but not all growth is sustainable. Rapid expansion without a solid foundation can lead to operational challenges, financial strain, and inefficiencies that ultimately stifle success.
                </p>
              </div>
            </div>
          </div>

          {/* Sixth Row of Content Cards */}
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            {/* Card 11 */}
            <div>
              {/* Illustration Section */}
              <div 
                className="flex items-center justify-center p-12"
                style={{
                  backgroundColor: '#e0f2fe',
                  minHeight: '500px',
                  borderRadius: '0',
                  marginTop: '40px'
                }}
              >
              </div>
              
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
                  What are the terms and conditions?
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
                  Every business aspires to grow, but not all growth is sustainable. Rapid expansion without a solid foundation can lead to operational challenges, financial strain, and inefficiencies that ultimately stifle success.
                </p>
              </div>
            </div>

            {/* Card 12 */}
            <div>
              {/* Illustration Section */}
              <div 
                className="flex items-center justify-center p-12"
                style={{
                  backgroundColor: '#f3e8ff',
                  minHeight: '500px',
                  borderRadius: '0',
                  marginTop: '40px'
                }}
              >
              </div>
              
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
                  Is my money safe?
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
                  Every business aspires to grow, but not all growth is sustainable. Rapid expansion without a solid foundation can lead to operational challenges, financial strain, and inefficiencies that ultimately stifle success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
