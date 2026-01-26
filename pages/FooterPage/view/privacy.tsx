export default function Privacy() {
  return (
    <div className="pt-48 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <p className="text-2xl text-black mb-8 uppercase font-bold text-left" style={{ fontFamily: 'Inter, sans-serif' }}>
          CUBE TECHNOLOGIES, INC.
        </p>
        <h1 className="text-8xl font-sans font-bold text-black mb-4 uppercase text-left" style={{ fontFamily: 'Inter, sans-serif' }}>
          Privacy Policy
        </h1>
        <p className="text-base text-black mb-8 font-bold text-left" style={{ fontFamily: 'Inter, sans-serif' }}>
          Last updated: January 25, 2026
        </p>
        
        <div className="text-black space-y-8 text-left" style={{ fontFamily: 'Inter, sans-serif' }}>
          <section>
            <h2 className="text-2xl font-bold mb-4">Introduction</h2>
            <p className="text-base leading-relaxed text-gray-800">
              This Privacy Policy describes how Cube collects, uses, shares, and protects information when you use our iPhone application and our website (collectively, the "Services").
            </p>
            <p className="text-base leading-relaxed text-gray-800 mt-4">
              Cube helps groups operate savings circles by automating contribution tracking and coordinating transparent payout schedules. At this time, when a payout is ready, users are notified and instructed to send funds through their Zelle or Venmo accounts. Users are required to upload a payment receipt, which is shared with the payout recipient to help verify authenticity.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">A. Information You Provide</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-800">
                  <li><strong>Account and profile information:</strong> name, email address, and phone number</li>
                  <li><strong>Group information:</strong> cube name, membership lists, roles (organizer or member), payout schedules, contribution amounts, rules you set, and messages or updates you post</li>
                  <li><strong>Support and communications:</strong> messages sent to support, surveys, bug reports, and feedback</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">B. Financial and Transaction Information</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-800">
                  <li><strong>Payout details:</strong> Zelle email address or phone number, or Venmo username</li>
                  <li><strong>Transaction records within Cube:</strong> contributions marked as paid, missed, late, or rescheduled; payout confirmations; timestamps; and associated notes</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">D. Device and Usage Information</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-800">
                  <li><strong>Device details:</strong> device identifiers, app version, operating system version, language, and time zone</li>
                  <li><strong>Usage data:</strong> pages or screens viewed, features used, clicks, and crash logs</li>
                  <li><strong>Approximate location:</strong> inferred from IP address (not precise GPS unless permission is granted)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">E. Cookies and Similar Technologies (Website)</h3>
                <p className="text-gray-800">
                  We may use cookies, pixels, and similar technologies to support website functionality and analytics.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
            <p className="text-base leading-relaxed text-gray-800 mb-3">We use information to:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-800">
              <li><strong>Provide the Services:</strong> create and manage accounts, operate cubes, coordinate schedules, and share your Zelle or Venmo payout information with members who need to pay you when you win a cycle</li>
              <li><strong>Operate and improve the Services:</strong> fix bugs, improve features, measure usage, and test new product flows</li>
              <li><strong>Communicate with you:</strong> send transactional messages such as payout updates and schedule reminders, respond to support inquiries, and send product updates (you may opt out of marketing communications)</li>
              <li><strong>Comply with legal obligations:</strong> meet applicable legal requirements and respond to valid legal requests</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">How We Share Information</h2>
            <p className="text-base leading-relaxed text-gray-800 mb-4">
              Cube does not sell your personal information. We share information only as necessary, as described below.
            </p>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">A. With Your Savings Circle</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-800">
                  <li>Members can typically view group-level details such as schedules, contribution status, who has paid, who is late, and payout status, as transparency is a core function of a cube</li>
                  <li>Organizers may have access to additional operational details for the circles they manage</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">B. With Service Providers</h3>
                <p className="text-gray-800">
                  We use third-party vendors to support the operation of the Services, including cloud hosting and analytics providers. These providers process information only to perform services on Cube's behalf.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">C. For Legal and Safety Reasons</h3>
                <p className="text-gray-800 mb-2">We may share information if we believe it is necessary to:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-800">
                  <li>Comply with applicable laws, regulations, or court orders</li>
                  <li>Investigate fraud, security issues, or abuse</li>
                  <li>Protect the rights, safety, and property of Cube, our users, or others</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">D. Business Transfers</h3>
                <p className="text-gray-800">
                  If Cube is involved in a merger, acquisition, or sale of assets, information may be transferred as part of that transaction, subject to appropriate safeguards.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Your Choices and Controls</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-800">
              <li><strong>Account information:</strong> You may update certain profile details within the app</li>
              <li><strong>Marketing communications:</strong> You may opt out of promotional emails, though service-related messages may still be sent</li>
              <li><strong>Permissions:</strong> You can control device permissions such as notifications, contacts (if enabled), and camera access (if used for verification)</li>
              <li><strong>Account deletion:</strong> You may request account deletion by contacting support@cubemoney.io</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Data Retention</h2>
            <p className="text-base leading-relaxed text-gray-800 mb-3">We retain information for as long as necessary to:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-800">
              <li>Provide the Services</li>
              <li>Maintain accurate cube histories for transparency and dispute resolution</li>
              <li>Comply with legal, accounting, and risk requirements</li>
            </ul>
            <p className="text-base leading-relaxed text-gray-800 mt-4">
              When information is no longer needed, we delete or de-identify it, subject to applicable legal retention requirements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Security</h2>
            <p className="text-base leading-relaxed text-gray-800">
              We use reasonable administrative, technical, and physical safeguards designed to protect your information. However, no system is completely secure. You are responsible for using a strong password and protecting access to your device.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Children's Privacy</h2>
            <p className="text-base leading-relaxed text-gray-800">
              The Services are not intended for children under the age of 13 (or under 16 in certain jurisdictions). Cube does not knowingly collect personal information from children.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">U.S. State Privacy Rights</h2>
            <p className="text-base leading-relaxed text-gray-800">
              Depending on your state of residence (such as California or Virginia), you may have rights to access, correct, delete, or obtain a copy of your personal information, and to opt out of certain data processing activities. Requests can be submitted to support@cubemoney.io. We may verify your identity before fulfilling a request.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">International Users</h2>
            <p className="text-base leading-relaxed text-gray-800">
              If you access the Services from outside the United States, your information may be processed in the United States, where Cube and its service providers operate.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Changes to This Policy</h2>
            <p className="text-base leading-relaxed text-gray-800">
              We may update this Privacy Policy from time to time. If changes are material, we will provide notice through the app or by email. The "Effective Date" above reflects the most recent update.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Contacting Us</h2>
            <p className="text-base leading-relaxed text-gray-800">
              If you have any questions about this Privacy Policy, please contact us at:{" "}
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
