export default function Security() {
  return (
    <div className="pt-48 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <p className="text-2xl text-black mb-8 uppercase font-bold text-left" style={{ fontFamily: 'Inter, sans-serif' }}>
          CUBE MONEY
        </p>
        <h1 className="text-8xl font-sans font-bold text-black mb-4 uppercase text-left" style={{ fontFamily: 'Inter, sans-serif' }}>
          Security
        </h1>
        <p className="text-base text-black mb-8 font-bold text-left" style={{ fontFamily: 'Inter, sans-serif' }}>
          Last updated: January 30, 2026
        </p>

        <div className="text-black space-y-8 text-left" style={{ fontFamily: 'Inter, sans-serif' }}>
          <section>
            <h2 className="text-2xl font-bold mb-4">Our Commitment to Security</h2>
            <p className="text-base leading-relaxed text-gray-800">
              Cube Money takes the security of your account and data seriously. This page describes how we protect your information and what you can do to stay secure when using our iPhone application and website (the "Services").
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Account Security</h2>
            <p className="text-base leading-relaxed text-gray-800 mb-3">
              Your account is protected by the credentials you use to sign in. We recommend:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-800">
              <li>Using a strong, unique password that you do not reuse on other sites or apps</li>
              <li>Keeping your login credentials private and never sharing them with others</li>
              <li>Enabling any additional security or verification options we offer (such as two-factor authentication, if available)</li>
              <li>Signing out of the app when using a shared or public device</li>
            </ul>
            <p className="text-base leading-relaxed text-gray-800 mt-4">
              You are responsible for all activity that occurs under your account. If you suspect unauthorized access or use of your account, notify us immediately at support@cubemoney.io and change your password.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Data Protection</h2>
            <p className="text-base leading-relaxed text-gray-800 mb-3">
              We use reasonable administrative, technical, and physical safeguards designed to protect your information, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-800">
              <li><strong>Encryption in transit:</strong> Data transmitted between your device and our systems is encrypted using industry-standard protocols (e.g., TLS/HTTPS).</li>
              <li><strong>Secure storage:</strong> Sensitive data is stored using appropriate security measures and access controls.</li>
              <li><strong>Access controls:</strong> Access to user data is limited to personnel who need it to operate and support the Services.</li>
              <li><strong>Monitoring:</strong> We monitor our systems for suspicious activity and take steps to address potential security issues.</li>
            </ul>
            <p className="text-base leading-relaxed text-gray-800 mt-4">
              No system is completely secure. While we work to protect your information, we cannot guarantee absolute security. You can help by protecting your device (e.g., using a passcode or biometric lock) and keeping your app updated.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">What We Do Not Do With Your Money</h2>
            <p className="text-base leading-relaxed text-gray-800">
              Cube Money does not hold, process, or transmit your funds. Payouts occur directly between you and other circle members through third-party payment services (such as Zelle or Venmo). As a result, Cube Money does not store or have access to your payment credentials (e.g., bank account or card details) for moving money. You should follow the security practices recommended by the payment services you use.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Infrastructure and Operations</h2>
            <p className="text-base leading-relaxed text-gray-800">
              Our Services run on infrastructure provided by reputable third-party providers that implement industry-standard security and compliance measures. We select and configure these services with security in mind and review our practices as we grow.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Your Role in Security</h2>
            <p className="text-base leading-relaxed text-gray-800 mb-3">
              You can help keep your account and circle safe by:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-800">
              <li>Only inviting people you trust to join your savings circles</li>
              <li>Verifying payout details (e.g., Zelle or Venmo information) before sending money</li>
              <li>Being cautious of phishing emails or messages that impersonate Cube Money or ask for your password or payment information—Cube Money will not ask for your password via email or unsolicited message</li>
              <li>Keeping your device and app up to date with the latest software updates</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Reporting Security Issues</h2>
            <p className="text-base leading-relaxed text-gray-800">
              If you discover a security vulnerability or have concerns about the security of the Services, please report it to us at{" "}
              <a href="mailto:support@cubemoney.io" className="text-black underline hover:text-gray-600">
                support@cubemoney.io
              </a>
              . We will investigate and take appropriate action. Please do not publicly disclose unpatched security issues before we have had a chance to address them.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Updates to This Page</h2>
            <p className="text-base leading-relaxed text-gray-800">
              We may update this Security page from time to time to reflect our current practices. The "Last updated" date at the top indicates when this page was last revised.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Contact</h2>
            <p className="text-base leading-relaxed text-gray-800">
              For security-related questions or to report a concern, contact us at:{" "}
              <a href="mailto:support@cubemoney.io" className="text-black underline hover:text-gray-600">
                support@cubemoney.io
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
