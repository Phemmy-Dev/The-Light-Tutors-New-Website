import LegalPage from "../../Layout/LegalPage"

const Privacy = () => (
  <LegalPage
    title="Privacy Policy"
    description="How The Light Tutors collects, uses and protects personal data, including children’s data."
    updated="19 February 2026"
  >
          <div className="space-y-8">
            {/* Section 01 */}
            <div>
              <h2 className="text-2xl font-semibold text-tltorange flex items-center gap-3 mb-4">
                <span className="text-sm bg-tltgreen text-white px-2 py-1 rounded">01</span>
                Introduction and Scope
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-justify mb-4">
                The Light Tutors Limited (“TLT,” “we,” “us,” or “our”) is committed to protecting the privacy and security of our users' data. This Global Privacy Policy explains how we collect, process, share, and protect personal data when you use our online tutoring platform, website, and related services (the “Platform”).
              </p>
              <p className="text-sm md:text-base leading-relaxed text-justify mb-4">
                This policy is strictly compliant with the Nigeria Data Protection Act (NDPA) 2023, the Nigeria Data Protection Regulation (NDPR) 2019, and international data protection frameworks, including the GDPR, UK-GDPR, and COPPA. By accessing our Platform, you (“Parent,” “Guardian,” or “User”) acknowledge that you have read and understood this Privacy Policy.
              </p>
            </div>

            {/* Section 02 */}
            <div>
              <h2 className="text-2xl font-semibold text-tltorange flex items-center gap-3 mb-4">
                <span className="text-sm bg-tltgreen text-white px-2 py-1 rounded">02</span>
                Information We Collect
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-justify mb-4">
                To provide our tutoring services, we must collect specific categories of personal data. We distinguish between data belonging to the Parent/Guardian and data concerning the minor Student.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-justify">
                <li><strong>Identity and Contact Data (Parent/Guardian):</strong> Full name, billing address, email address, telephone number, and account credentials.</li>
                <li><strong>Identity and Educational Data (Student):</strong> First name (or pseudonym), age, grade level, learning assessments, progress reports, and educational goals.</li>
                <li><strong>Financial and Transaction Data:</strong> Payment history, billing details, and transaction IDs. Note: TLT does not store complete Primary Account Numbers (PANs) or CVVs. All sensitive card data is securely tokenized and processed directly by our PCI-DSS compliant partner, Flutterwave.</li>
                <li><strong>Audio-Visual and Session Data:</strong> Live video feeds, chat transcripts, and audio recordings generated during tutoring sessions hosted via third-party integrations (e.g., Zoom).</li>
                <li><strong>Technical and Usage Data:</strong> IP addresses, browser types, device identifiers, operating systems, time zone settings, and data on how you navigate and interact with our Platform.</li>
              </ul>
            </div>

            {/* Section 03 */}
            <div>
              <h2 className="text-2xl font-semibold text-tltorange flex items-center gap-3 mb-4">
                <span className="text-sm bg-tltgreen text-white px-2 py-1 rounded">03</span>
                Children's Privacy, Minor Safeguarding, and Verifiable Parental Consent
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-justify mb-4">
                Because our primary end-users are minors, we apply enhanced data protection protocols mandated by the NDPA and the US Children's Online Privacy Protection Act (COPPA).
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-justify">
                <li><strong>Strict Parental Consent:</strong> We do not knowingly collect personal data directly from children. All accounts must be created, managed, and consented to by a legal Parent or Guardian.</li>
                <li><strong>Verifiable Parental Consent (VPC) Mechanism:</strong> To ensure the person providing consent is an adult, TLT utilizes the act of processing a valid credit card, debit card, or bank transfer via Flutterwave as legal, verifiable proof of adult identity and parental consent for the child to use the platform.</li>
                <li><strong>Data Minimization for Minors:</strong> We strictly limit the collection of a minor's data to what is absolutely necessary to deliver the educational curriculum.</li>
                <li><strong>Right to Review:</strong> Parents possess the absolute right to review their child's educational records and request the deletion of their child's personal data at any time, subject to legal and safeguarding retention requirements.</li>
              </ul>
            </div>

            {/* Section 04 */}
            <div>
              <h2 className="text-2xl font-semibold text-tltorange flex items-center gap-3 mb-4">
                <span className="text-sm bg-tltgreen text-white px-2 py-1 rounded">04</span>
                Lawful Basis and Purposes for Processing
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-justify mb-4">
                Under the NDPA and NDPR, we process your personal data under the following legal bases:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-justify">
                <li><strong>Contractual Necessity:</strong> To register your account, schedule sessions, and deliver the tutoring services you purchased.</li>
                <li><strong>Explicit Consent:</strong> To process minor data, record Zoom sessions for safeguarding purposes, and place non-essential tracking cookies on your device.</li>
                <li><strong>Legal Obligation:</strong> To comply with financial regulations, including anti-money laundering (AML) laws and Central Bank of Nigeria (CBN) directives.</li>
                <li><strong>Legitimate Interest:</strong> To monitor platform security, prevent fraud, troubleshoot technical issues, and improve our educational methodologies.</li>
              </ul>
            </div>

            {/* Section 05 */}
            <div>
              <h2 className="text-2xl font-semibold text-tltorange flex items-center gap-3 mb-4">
                <span className="text-sm bg-tltgreen text-white px-2 py-1 rounded">05</span>
                Data Sharing, Sub-Processors, and Business Transfers
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-justify mb-4">
                TLT explicitly states: We do not, and will not, sell your personal data or your child's data to third parties. We only share data with vetted third-party sub-processors necessary for our operations:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-justify">
                <li><strong>Payment Gateways:</strong> Flutterwave, to process multi-currency transactions and execute fraud checks.</li>
                <li><strong>Communications Infrastructure:</strong> Zoom Video Communications, Inc., to host live tutoring sessions.</li>
                <li><strong>Cloud Hosting Providers:</strong> Secure, enterprise-grade cloud servers where our platform databases are hosted.</li>
                <li><strong>Business Transfers (M&A):</strong> User data is considered a business asset. If TLT undergoes a merger, acquisition, bankruptcy, or sale of assets, your personal information may be transferred to the acquiring entity, provided that the new entity agrees to honor the material terms of this Privacy Policy.</li>
              </ul>
            </div>

            {/* Section 06 */}
            <div>
              <h2 className="text-2xl font-semibold text-tltorange flex items-center gap-3 mb-4">
                <span className="text-sm bg-tltgreen text-white px-2 py-1 rounded">06</span>
                Automated Decision-Making and AI Profiling
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-justify mb-4">
                TLT may utilize automated algorithms and artificial intelligence (AI) tools to match Students with appropriate tutors based on scheduling and subject matter, or to scan platform chat logs for prohibited safeguarding behaviors (e.g., detecting inappropriate language). We do not use automated decision-making in a way that produces legal or similarly significant adverse effects on you or your child. Parents have the right to request human intervention or manual review of any automated platform decision by contacting our support team.
              </p>
            </div>

            {/* Section 07 */}
            <div>
              <h2 className="text-2xl font-semibold text-tltorange flex items-center gap-3 mb-4">
                <span className="text-sm bg-tltgreen text-white px-2 py-1 rounded">07</span>
                Transborder Data Flows
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-justify mb-4">
                As a platform facilitating international payments and utilizing global software, your data may be transferred to, and processed in, countries outside of Nigeria. TLT ensures that all cross-border data transfers comply with the NDPA. We rely on adequacy decisions by the Nigeria Data Protection Commission (NDPC) or implement legally binding Standard Contractual Clauses (SCCs) to guarantee your data receives equivalent legal protection.
              </p>
            </div>

            {/* Section 08 */}
            <div>
              <h2 className="text-2xl font-semibold text-tltorange flex items-center gap-3 mb-4">
                <span className="text-sm bg-tltgreen text-white px-2 py-1 rounded">08</span>
                Data Retention Protocols
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-justify mb-4">
                We retain personal data only for as long as necessary:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-justify">
                <li><strong>Video Recordings:</strong> All Zoom session recordings are strictly retained for 30 days for safeguarding and quality control, after which they are permanently and automatically deleted, unless required longer for an active dispute investigation.</li>
                <li><strong>Financial Records:</strong> Transactional data is retained for a minimum of five (5) to seven (7) years to comply with Nigerian tax laws and CBN AML/CFT regulations.</li>
                <li><strong>Account Data:</strong> If you request account deletion, your profile and learning data will be purged within 30 days, barring statutory retention mandates.</li>
              </ul>
            </div>

            {/* Section 09 */}
            <div>
              <h2 className="text-2xl font-semibold text-tltorange flex items-center gap-3 mb-4">
                <span className="text-sm bg-tltgreen text-white px-2 py-1 rounded">09</span>
                Communications, Direct Marketing, and Opt-Out Rights
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-justify mb-4">
                TLT may occasionally send promotional materials, platform updates, or special tutoring offers to the Parent/Guardian's email address based on our legitimate interest.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-justify">
                <li><strong>Right to Object:</strong> You have the absolute right to opt out of marketing communications at any time by clicking the “Unsubscribe” link at the bottom of our emails.</li>
                <li><strong>Transactional Emails:</strong> Opting out of promotional marketing will not opt you out of essential transactional emails necessary for the service (e.g., billing receipts, password resets, or Zoom session links).</li>
              </ul>
            </div>

            {/* Section 10 */}
            <div>
              <h2 className="text-2xl font-semibold text-tltorange flex items-center gap-3 mb-4">
                <span className="text-sm bg-tltgreen text-white px-2 py-1 rounded">10</span>
                Third-Party Links Disclaimer
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-justify mb-4">
                During tutoring sessions, tutors or platform materials may provide links to external educational websites (e.g., YouTube, Wikipedia, external quizzes). Clicking on these external links is done at your own risk. TLT is not responsible for the privacy practices, cookies, or content of external domains. We encourage you to read the privacy policies of any third-party websites you visit.
              </p>
            </div>

            {/* Section 11 */}
            <div>
              <h2 className="text-2xl font-semibold text-tltorange flex items-center gap-3 mb-4">
                <span className="text-sm bg-tltgreen text-white px-2 py-1 rounded">11</span>
                Data Security Architecture
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-justify mb-4">
                We deploy “privacy by design” and utilize reasonable technical and organizational measures, including AES-256 encryption at rest, TLS/SSL encryption in transit, strict role-based access controls (RBAC), and mandatory multi-factor authentication (MFA) for administrative staff. While we strive to protect your data, no internet-based system is 100% secure.
              </p>
            </div>

            {/* Section 12 */}
            <div>
              <h2 className="text-2xl font-semibold text-tltorange flex items-center gap-3 mb-4">
                <span className="text-sm bg-tltgreen text-white px-2 py-1 rounded">12</span>
                Your Data Subject Rights (NDPR/NDPA)
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-justify mb-4">
                Under Nigerian data protection laws, you possess actionable rights regarding your personal data:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-justify">
                <li><strong>Right to Access:</strong> Request a copy of the data we hold about you/your child.</li>
                <li><strong>Right to Rectification:</strong> Request correction of inaccurate data.</li>
                <li><strong>Right to Erasure:</strong> Request the deletion of your data (the “Right to be Forgotten”).</li>
                <li><strong>Right to Restrict Processing:</strong> Ask us to suspend processing in specific scenarios.</li>
                <li><strong>Right to Data Portability:</strong> Request your data in a machine-readable format.</li>
                <li><strong>Right to Withdraw Consent:</strong> Withdraw consent at any time (Note: Withdrawing consent for video recordings renders the Student ineligible for live sessions).</li>
              </ul>
              <p className="text-sm md:text-base leading-relaxed text-justify mt-4">
                To exercise these rights, email tltadmin@thelightutors.com. We aim to respond within 30 days.
              </p>
            </div>

            {/* Section 13 */}
            <div>
              <h2 className="text-2xl font-semibold text-tltorange flex items-center gap-3 mb-4">
                <span className="text-sm bg-tltgreen text-white px-2 py-1 rounded">13</span>
                Global Regional Disclosures
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-justify mb-4">
                Because we process international transactions, the following regional rights apply:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-justify">
                <li><strong>California Residents (CCPA/CPRA):</strong> TLT has not sold any personal information to third parties in the preceding 12 months. You have the right to request information regarding the categories of data we collect and share. Regarding “Do Not Track” (DNT) browser signals, our platform currently does not respond to DNT signals due to a lack of industry standardization.</li>
                <li><strong>EEA and UK Residents (GDPR / UK-GDPR):</strong> You have the right to lodge a complaint with your local supervisory authority if you believe our processing violates the GDPR. Our lawful bases for processing cross-border data rely strictly on Article 6 and Article 46 (Standard Contractual Clauses) of the GDPR.</li>
              </ul>
            </div>

            {/* Section 14 */}
            <div>
              <h2 className="text-2xl font-semibold text-tltorange flex items-center gap-3 mb-4">
                <span className="text-sm bg-tltgreen text-white px-2 py-1 rounded">14</span>
                Cookie Policy and Tracking
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-justify mb-4">
                Our Platform uses cookies to function correctly and analyze traffic.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-justify">
                <li><strong>Essential Cookies:</strong> Strictly necessary for the platform to operate. These cannot be disabled.</li>
                <li><strong>Analytics Cookies:</strong> Help us understand user navigation.</li>
                <li><strong>Consent Mechanism:</strong> Upon your first visit, a Cookie Banner will request your explicit consent for non-essential cookies. You can manage preferences via your account settings.</li>
              </ul>
            </div>

            {/* Section 15 */}
            <div>
              <h2 className="text-2xl font-semibold text-tltorange flex items-center gap-3 mb-4">
                <span className="text-sm bg-tltgreen text-white px-2 py-1 rounded">15</span>
                Changes to this Privacy Policy
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-justify mb-4">
                TLT reserves the right to update this Privacy Policy to reflect changes in legal, regulatory, or operational requirements. We will update the “Last Updated” date at the top of this document. For material changes that significantly alter how we process your or your child's data, we will provide direct notice to the email address associated with your account prior to the changes taking effect.
              </p>
            </div>

            {/* Section 16 */}
            <div>
              <h2 className="text-2xl font-semibold text-tltorange flex items-center gap-3 mb-4">
                <span className="text-sm bg-tltgreen text-white px-2 py-1 rounded">16</span>
                Contact Information
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-justify mb-4">
                For any questions, privacy requests, or data deletion inquiries, please contact our Data Protection Officer:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="font-semibold text-tltgreen">The Light Tutors Limited</p>
                <p className="text-gray-600">Data Protection Officer</p>
                <p className="text-gray-600">Email: <a href="mailto:tltadmin@thelightutors.com" className="text-tltorange hover:underline">tltadmin@thelightutors.com</a></p>
                <p className="text-gray-600">Lagos, Nigeria</p>
              </div>
              <p className="text-sm md:text-base leading-relaxed text-justify mt-4">
                If you are unsatisfied with our response, you have the right to lodge a formal complaint with the Nigeria Data Protection Commission (NDPC).
              </p>
            </div>

          </div>
  </LegalPage>
)

export default Privacy
