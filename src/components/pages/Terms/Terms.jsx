import Navbar from "../../Sections/NavBar/Navbar"
import Footer from "../../Sections/Footer/Footer"
import { motion } from 'framer-motion'

const Terms = () => {
  return (
    <div>
      <Navbar />

      <section className="terms_cont pt-32 pb-20 px-6 md:px-24 lg:px-48 bg-tltwhite text-gray-800">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-tltgreen mb-2">Terms and Conditions</h1>
          <p className="text-sm text-gray-500 mb-10">Last Updated: February 19, 2026</p>

          <div className="space-y-8">
            {/* Section 01 */}
            <div>
              <h2 className="text-2xl font-semibold text-tltorange flex items-center gap-3 mb-4">
                <span className="text-sm bg-tltgreen text-white px-2 py-1 rounded">01</span>
                Introduction and Acceptance
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-justify mb-4">
                Welcome to The Light Tutors Limited (“TLT,” “we,” “us,” or “our”). These Terms and Conditions govern your access to and use of our online tutoring platform, website, and related services. By registering an account, purchasing tutoring hours, or participating in any session, you (the “Parent,” “Guardian,” or “User”) agree to be bound by these Terms. If you do not agree, you must not use our services.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-justify">
                <li><strong>Electronic Communications and Signatures:</strong> By clicking “I Agree” or utilizing our services, you consent to receive all mandatory legal notices electronically, and you acknowledge that your digital acceptance constitutes a legally binding signature.</li>
                <li><strong>Modifications to the Terms:</strong> TLT reserves the unilateral right to update or modify these Terms at any time. We will notify you of material changes via email or platform notification. Continued use of the platform after such updates constitutes legal acceptance of the revised Terms.</li>
              </ul>
            </div>

            {/* Section 02 */}
            <div>
              <h2 className="text-2xl font-semibold text-tltorange flex items-center gap-3 mb-4">
                <span className="text-sm bg-tltgreen text-white px-2 py-1 rounded">02</span>
                Eligibility and Parental Consent
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-justify mb-4">
                Our platform provides educational services to minors. By registering a minor (the “Student”), you warrant that you are their legal parent or guardian.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-justify">
                <li><strong>Consent to Process Data:</strong> You explicitly consent to the collection and processing of the Student's data (including names, emails, and learning data) strictly for educational purposes, in compliance with the Nigeria Data Protection Regulation (NDPR) and the Data Protection Act 2023.</li>
                <li><strong>Consent to Video Services:</strong> You explicitly consent to the Student's participation in live video sessions via integrated third-party platforms (e.g., Zoom).</li>
                <li><strong>Account Security:</strong> You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</li>
              </ul>
            </div>

            {/* Section 03 */}
            <div>
              <h2 className="text-2xl font-semibold text-tltorange flex items-center gap-3 mb-4">
                <span className="text-sm bg-tltgreen text-white px-2 py-1 rounded">03</span>
                Child Safeguarding and Acceptable Use Policy
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-justify mb-4">
                TLT holds a zero-tolerance policy for abuse, harassment, or inappropriate conduct. We enforce the following protocols:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-justify">
                <li><strong>Tutor Screening:</strong> All TLT tutors undergo rigorous identity verification, credential checks, and background screening prior to onboarding.</li>
                <li><strong>Prohibited Behaviours:</strong> Tutors and Students must maintain a professional environment. Exchanging personal contact information, communicating outside the TLT platform, cyberbullying, inappropriate dress, and the use of offensive language are strictly prohibited.</li>
                <li><strong>Technical Acceptable Use:</strong> Users are strictly prohibited from utilizing the platform for malicious technical activities. You may not scrape data, utilize bots, reverse-engineer or decompile our code, or launch distributed denial-of-service (DDoS) attacks against TLT's infrastructure.</li>
                <li><strong>Session Monitoring:</strong> TLT reserves the right to have administrative staff conduct random drop-ins or utilize automated monitoring tools during live sessions to ensure compliance with our safeguarding standards.</li>
                <li><strong>Reporting Procedures:</strong> Any suspected breach of conduct must be reported immediately to support@thelightutors.com. TLT will suspend the involved parties pending a thorough investigation.</li>
              </ul>
            </div>

            {/* Section 04 */}
            <div>
              <h2 className="text-2xl font-semibold text-tltorange flex items-center gap-3 mb-4">
                <span className="text-sm bg-tltgreen text-white px-2 py-1 rounded">04</span>
                Zoom Session Protocols, Recording, and Integrations
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-justify mb-4">
                To ensure quality assurance and the safety of all users, TLT utilizes Zoom (or similar secure platforms) for service delivery.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-justify">
                <li><strong>Recording Policy:</strong> All tutoring sessions are recorded by default strictly for safeguarding, quality control, and dispute resolution purposes.</li>
                <li><strong>Access to Footage:</strong> Recordings are securely stored and are only accessible by authorized TLT administrative personnel. Parents may request supervised access to a specific recording concerning their child in the event of a dispute or safeguarding concern.</li>
                <li><strong>Retention Period:</strong> Session recordings are retained for 30 days, after which they are permanently deleted, unless required longer for an ongoing investigation or legal compliance.</li>
                <li><strong>Third-Party Links and Integrations:</strong> TLT formally disclaims liability for the security, privacy practices, or content of any external websites or third-party tools integrated into or linked from our platform. Zoom data is processed in accordance with our Privacy Policy. TLT does not sell user data to Zoom or any third-party advertisers.</li>
              </ul>
            </div>

            {/* Section 05 */}
            <div>
              <h2 className="text-2xl font-semibold text-tltorange flex items-center gap-3 mb-4">
                <span className="text-sm bg-tltgreen text-white px-2 py-1 rounded">05</span>
                Financial Terms, Billing, and Flutterwave Compliance
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-justify mb-4">
                TLT utilizes Flutterwave as our primary payment gateway, fully compliant with Payment Card Industry Data Security Standards (PCI-DSS) and Central Bank of Nigeria (CBN) regulations.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-justify">
                <li><strong>Multi-Currency Support:</strong> We accept payments in Naira (NGN), US Dollars (USD), British Pounds (GBP), and Euros (EUR).</li>
                <li><strong>Pricing and Conversion:</strong> Prices are primarily quoted in NGN. Payments made in foreign currencies will be converted by Flutterwave at the prevailing exchange rate at the time of the transaction. You are responsible for any currency conversion fees levied by your bank.</li>
                <li><strong>Advance Payment:</strong> All tutoring hours or course packages must be paid in full prior to the commencement of any session.</li>
                <li><strong>Chargebacks:</strong> In the event of a payment dispute, you agree to contact TLT support first. Initiating an illegitimate chargeback with your bank without prior communication constitutes a breach of these Terms and may result in account termination and legal recovery of the disputed funds plus administrative costs.</li>
              </ul>
            </div>

            {/* Section 06 */}
            <div>
              <h2 className="text-2xl font-semibold text-tltorange flex items-center gap-3 mb-4">
                <span className="text-sm bg-tltgreen text-white px-2 py-1 rounded">06</span>
                Cancellation, Refund Policy, and Termination
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-justify mb-4">
                In compliance with the Federal Competition and Consumer Protection Act (FCCPA) 2018, TLT offers a transparent refund process for unrendered services.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-justify">
                <li><strong>Unused Hours:</strong> Purchased tutoring hours are valid for 60 days from the date of purchase. Unused hours expire after this period and are non-refundable.</li>
                <li><strong>Cancellation Window:</strong> You may cancel a purchased package and request a full refund within 7 days of payment, provided no sessions have been attended.</li>
                <li><strong>Refund Timeframes:</strong> Approved refunds will be processed back to the original payment method (via Flutterwave) within 5 business days. Refunds for foreign currency transactions will be issued in the original currency or the NGN equivalent at the current exchange rate, subject to bank processing times.</li>
                <li><strong>Termination for Cause vs. Convenience:</strong> TLT reserves the right to suspend or terminate your account at any time. If terminated for convenience by TLT, you will receive a prorated refund for unrendered services. If terminated for cause (e.g., violating the Acceptable Use Policy), any unused hours are immediately forfeited and non-refundable.</li>
              </ul>
            </div>

            {/* Section 07 */}
            <div>
              <h2 className="text-2xl font-semibold text-tltorange flex items-center gap-3 mb-4">
                <span className="text-sm bg-tltgreen text-white px-2 py-1 rounded">07</span>
                Privacy Policy and NDPR Compliance Overview
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-justify mb-4">
                Your privacy is paramount. TLT operates in strict compliance with the NDPR.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-justify">
                <li><strong>Data Processing:</strong> We collect and process your personal and payment data solely to deliver our services, process transactions, and communicate with you.</li>
                <li><strong>Parental Rights:</strong> Under the NDPR, Parents have the right to access, rectify, or request the deletion of their data and their child's data at any time.</li>
                <li><strong>Data Breach Notification:</strong> In the event of a security breach compromising personal data, TLT will notify affected users within the legal timelines established by the NDPR and applicable laws.</li>
                <li><strong>Full Policy:</strong> For comprehensive details on cookies, third-party sharing, and data security measures, please refer to our full Privacy Policy.</li>
              </ul>
            </div>

            {/* Section 08 */}
            <div>
              <h2 className="text-2xl font-semibold text-tltorange flex items-center gap-3 mb-4">
                <span className="text-sm bg-tltgreen text-white px-2 py-1 rounded">08</span>
                Intellectual Property and Content Ownership
              </h2>
              <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-justify">
                <li><strong>TLT Intellectual Property:</strong> All educational materials, curricula, website content, and proprietary methodologies provided by TLT remain the exclusive intellectual property of The Light Tutors Limited. Users are granted a limited, non-exclusive license to use these materials solely for personal educational purposes. Recording, reproducing, or distributing TLT content without written permission is strictly prohibited.</li>
                <li><strong>User-Generated Content (UGC) License:</strong> By submitting content (e.g., assignments, profile images), you grant TLT a global, royalty-free, sub-licensable right to host, process, and display that content strictly to provide our educational services.</li>
                <li><strong>DMCA / Copyright Infringement:</strong> TLT respects intellectual property rights. If you believe any content on our platform infringes upon your copyright, please submit a formal takedown notice to legal@thelightutors.com.</li>
                <li><strong>Feedback and Unsolicited Ideas:</strong> Any suggestions, feedback, or feature requests you provide regarding the platform become the sole property of TLT, and we may implement them without any obligation to compensate or credit you.</li>
              </ul>
            </div>

            {/* Section 09 */}
            <div>
              <h2 className="text-2xl font-semibold text-tltorange flex items-center gap-3 mb-4">
                <span className="text-sm bg-tltgreen text-white px-2 py-1 rounded">09</span>
                Limitation of Liability and Operational Warranties
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-justify mb-4">
                While TLT strives to provide exceptional educational support, we do not guarantee specific academic outcomes, grades, or test scores.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-justify">
                <li><strong>Service Interruptions:</strong> The platform is provided on an “as is” basis. TLT explicitly disclaims liability for scheduled maintenance windows, third-party platform (Zoom/Flutterwave) downtimes, hardware failures, or user internet outages.</li>
                <li><strong>Beta Services:</strong> If you opt to use experimental or pre-release (“Beta”) features on our platform, you accept all risks of potential data loss or platform instability.</li>
                <li><strong>Force Majeure:</strong> TLT is not liable for service failures or delays caused by unforeseeable events beyond our reasonable control, including natural disasters, global pandemics, government actions, or catastrophic infrastructure failures.</li>
                <li><strong>Maximum Liability:</strong> To the maximum extent permitted by Nigerian law, TLT's total liability for any claim arising out of these Terms shall not exceed the total amount paid by the User for the specific services giving rise to the claim.</li>
              </ul>
            </div>

            {/* Section 10 */}
            <div>
              <h2 className="text-2xl font-semibold text-tltorange flex items-center gap-3 mb-4">
                <span className="text-sm bg-tltgreen text-white px-2 py-1 rounded">10</span>
                Governing Law and Dispute Resolution
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-justify mb-4">
                These Terms and Conditions are governed by and construed in accordance with the laws of the Federal Republic of Nigeria.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-justify">
                <li><strong>Dispute Resolution:</strong> Any disputes arising from these Terms shall first be subject to mandatory amicable negotiation. If unresolved within 30 days, the dispute shall be submitted to the Lagos Multi-Door Courthouse for mediation, prior to any formal litigation in Nigerian courts.</li>
                <li><strong>Statute of Limitations:</strong> You agree that any claim or cause of action arising out of your use of TLT services must be formally filed within one (1) year after such claim arose, or it shall be permanently legally barred.</li>
              </ul>
            </div>

            {/* Section 11 */}
            <div>
              <h2 className="text-2xl font-semibold text-tltorange flex items-center gap-3 mb-4">
                <span className="text-sm bg-tltgreen text-white px-2 py-1 rounded">11</span>
                General Provisions
              </h2>
              <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-justify">
                <li><strong>Entire Agreement:</strong> These Terms, alongside our Privacy Policy and Starter pack, constitute the final and entire agreement between you and TLT, legally superseding any prior verbal agreements, emails, or marketing materials.</li>
                <li><strong>Severability:</strong> If any single clause in these Terms is deemed invalid or unenforceable by a judge, the remaining clauses will remain in full legal force and effect.</li>
                <li><strong>Waiver of Rights:</strong> If TLT fails to strictly enforce any rule in these Terms at any given time, it does not constitute a waiver of our right to enforce that rule in the future.</li>
                <li><strong>Assignment and Delegation:</strong> You may not transfer or assign your account or legal rights to anyone else. TLT reserves the right to assign this contract to another corporate entity (e.g., during a merger or acquisition) without restriction.</li>
                <li><strong>Survival Clause:</strong> Key provisions meant to protect the business, including Intellectual Property, Limitation of Liability, General Provisions, and Dispute Resolution, will remain legally binding even if you delete your account or terminate this agreement.</li>
                <li><strong>App Store Pass-Through Terms:</strong> If you access our platform via Apple iOS or Google Android applications, you acknowledge that Apple Inc. and Google LLC are not parties to this agreement and bear no responsibility for the platform or its support.</li>
                <li><strong>Anti-Bribery and Anti-Corruption:</strong> You agree to fully comply with all applicable global anti-corruption laws, including the Nigerian Corrupt Practices and Other Related Offences Act, prohibiting the offering or receiving of illegal incentives.</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  )
}

export default Terms
