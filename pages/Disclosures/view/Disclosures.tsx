export default function Disclosures() {
  return (
    <div className="pt-24 sm:pt-48 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <p className="text-lg sm:text-2xl text-black mb-4 sm:mb-8 uppercase font-bold text-left" style={{ fontFamily: 'Inter, sans-serif' }}>
          CUBE MONEY
        </p>
        <h1 className="text-4xl sm:text-6xl lg:text-8xl font-sans font-bold text-black mb-4 uppercase text-left" style={{ fontFamily: 'Inter, sans-serif' }}>
          Disclosures
        </h1>
        <p className="text-base text-black mb-8 font-bold text-left" style={{ fontFamily: 'Inter, sans-serif' }}>
          Last updated: January 30, 2026
        </p>

        <div className="text-black space-y-8 text-left" style={{ fontFamily: 'Inter, sans-serif' }}>
          <section>
            <h2 className="text-2xl font-bold mb-4">Important Information About Cube Money</h2>
            <p className="text-base leading-relaxed text-gray-800">
              These disclosures provide important information about the nature of Cube Money's services and your use of the Cube Money application and website (the "Services"). Please read them carefully.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Cube Money Is Not a Bank or Financial Institution</h2>
            <p className="text-base leading-relaxed text-gray-800 mb-3">
              Cube Money provides software that helps groups operate savings circles by tracking contributions and coordinating transparent payout schedules.
            </p>
            <p className="text-base leading-relaxed text-gray-800 mb-3">
              Cube Money is <strong>not</strong> a bank, credit union, or other depository institution. Cube Money is <strong>not</strong> FDIC insured. Cube Money does <strong>not</strong> hold, custody, or safeguard user funds. Funds move directly between users through third-party payment services (such as Zelle or Venmo) that you choose to use. Cube Money does not process, transmit, or have access to your money.
            </p>
            <p className="text-base leading-relaxed text-gray-800">
              Cube Money is not a lender and does not extend credit. Cube Money does not provide interest, returns, or investment advice. Participation in a savings circle through Cube Money does not create a banking or lending relationship with Cube Money.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">How Payouts Work</h2>
            <p className="text-base leading-relaxed text-gray-800 mb-3">
              When a cycle winner is selected, other members are responsible for sending their contributions directly to the winner using their own Zelle or Venmo accounts (or other payment methods the circle agrees to). Cube Money does not hold, process, or transmit these funds.
            </p>
            <p className="text-base leading-relaxed text-gray-800">
              Cube Money's role is limited to coordinating timing, sending reminders, and allowing members to confirm payments within the app. Cube Money is not responsible for failed, delayed, reversed, or disputed transfers, including issues caused by third-party payment platforms, financial institutions, insufficient funds, or incorrect recipient information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Risks of Participating in Savings Circles</h2>
            <p className="text-base leading-relaxed text-gray-800 mb-3">
              Savings circles depend on trust and timely payments among members. You should be aware of the following:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-800">
              <li><strong>No guarantee of payment:</strong> Cube Money cannot guarantee that other members will pay on time or at all. If a member does not pay, Cube Money does not reimburse you or enforce payment on your behalf.</li>
              <li><strong>No guarantee of cycle completion:</strong> A savings circle may not complete successfully. Cube Money does not guarantee that any cycle will finish or that you will receive your expected payout.</li>
              <li><strong>User-to-user risk:</strong> You are responsible for assessing the trustworthiness of your circle members. Cube Money does not screen members, verify their ability to pay, or guarantee their performance.</li>
              <li><strong>Third-party payment limits:</strong> Zelle, Venmo, and other payment services have their own limits, rules, and availability. Delays or failures may occur for reasons outside Cube Money's control.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">No Financial, Legal, or Tax Advice</h2>
            <p className="text-base leading-relaxed text-gray-800">
              Cube Money does not provide financial, investment, legal, or tax advice. Information in the Services is for general coordination and transparency only. You should consult your own advisors regarding the legal, tax, or financial implications of participating in a savings circle.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Third-Party Services</h2>
            <p className="text-base leading-relaxed text-gray-800">
              The Services rely on third-party platforms, including Zelle, Venmo, and other payment or analytics providers. These services operate under their own terms, privacy policies, and availability. Cube Money does not control and is not responsible for third-party outages, payment issues, service interruptions, or failures. Disputes about payments should be addressed with the relevant payment provider or financial institution.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Fees</h2>
            <p className="text-base leading-relaxed text-gray-800">
              Cube Money may offer free access during beta or early access. If fees are introduced in the future, they will be disclosed in advance through the app or by email. Third-party payment services (e.g., Zelle, Venmo) may apply their own fees; those are governed by their respective terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Changes to These Disclosures</h2>
            <p className="text-base leading-relaxed text-gray-800">
              Cube Money may update these disclosures from time to time. Material changes will be communicated as appropriate. Continued use of the Services after the effective date constitutes acceptance of the updated disclosures.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Contact</h2>
            <p className="text-base leading-relaxed text-gray-800">
              If you have questions about these disclosures, please contact us at:{" "}
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
