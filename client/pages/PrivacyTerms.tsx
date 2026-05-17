import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { usePageTitle } from "@/lib/seo";

export default function PrivacyTerms() {
  usePageTitle({
    title: "Privacy Policy | Terms & Conditions | Disclaimer | EHL Engineering Group",
    description:
      "Privacy policy, terms and conditions, and disclaimer for EHL Engineering Group. Learn about our data protection practices and service terms.",
  });

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20" style={{ backgroundColor: "#002e5d" }}>
        <section className="py-20" style={{ backgroundColor: "#002e5d" }}>
          <div className="section-container">
            <h1 className="text-5xl font-bold text-white mb-8">
              Privacy Policy · Terms &amp; Conditions · Disclaimer
            </h1>

            <div className="max-w-3xl prose prose-lg">
              {/* Privacy Section */}
              <h2 id="privacy" className="text-2xl font-bold text-white mt-8 mb-4 scroll-mt-24">
                Privacy Policy
              </h2>
              <p className="text-white mb-4">
                At EHL Engineering Group, we are committed to protecting your
                privacy and ensuring you have a positive experience on our
                website and when interacting with our services.
              </p>

              <h3 className="text-xl font-bold text-white mt-6 mb-3">
                Information We Collect
              </h3>
              <p className="text-white mb-4">
                We collect information to provide better services to our users.
                This includes:
              </p>
              <ul className="list-disc list-inside text-white mb-4 space-y-2">
                <li>
                  Information you provide directly (contact forms, inquiries)
                </li>
                <li>
                  Automatically collected information (IP address, browser type,
                  pages visited)
                </li>
                <li>Cookies and similar tracking technologies</li>
              </ul>

              <h3 className="text-xl font-bold text-white mt-6 mb-3">
                How We Use Your Information
              </h3>
              <p className="text-white mb-4">Your information is used to:</p>
              <ul className="list-disc list-inside text-white mb-4 space-y-2">
                <li>Provide and improve our services</li>
                <li>Respond to your inquiries and requests</li>
                <li>Send communications about updates and announcements</li>
                <li>Monitor and analyze usage patterns</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h3 className="text-xl font-bold text-white mt-6 mb-3">
                Data Security
              </h3>
              <p className="text-white mb-4">
                We implement appropriate technical and organizational measures
                to protect your personal data against unauthorized processing,
                accidental loss, and unauthorized access.
              </p>

              <h3 className="text-xl font-bold text-white mt-6 mb-3">
                Your Rights
              </h3>
              <p className="text-white mb-4">You have the right to:</p>
              <ul className="list-disc list-inside text-white mb-4 space-y-2">
                <li>Access your personal data</li>
                <li>Rectify inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of communications</li>
                <li>Data portability</li>
              </ul>

              {/* Terms Section */}
              <h2 id="terms" className="text-2xl font-bold text-white mt-12 mb-4 scroll-mt-24">
                Terms &amp; Conditions
              </h2>
              <p className="text-white mb-4">
                These terms and conditions govern your use of our website and
                services. By accessing and using our website, you accept and
                agree to be bound by the terms and provision of this agreement.
              </p>

              <h3 className="text-xl font-bold text-white mt-6 mb-3">
                Use License
              </h3>
              <p className="text-white mb-4">
                Permission is granted to temporarily download one copy of the
                materials (information or software) on our website for personal,
                non-commercial transitory viewing only. This is the grant of a
                license, not a transfer of title, and under this license you may
                not:
              </p>
              <ul className="list-disc list-inside text-white mb-4 space-y-2">
                <li>Modify or copy the materials</li>
                <li>
                  Use the materials for any commercial purpose or for any public
                  display
                </li>
                <li>
                  Attempt to decompile or reverse engineer any software
                  contained on the website
                </li>
                <li>
                  Remove any copyright or other proprietary notations from the
                  materials
                </li>
                <li>
                  Transfer the materials to another person or "mirror" the
                  materials on any other server
                </li>
              </ul>

              <h3 id="disclaimer" className="text-xl font-bold text-white mt-6 mb-3 scroll-mt-24">
                Disclaimer
              </h3>
              <p className="text-white mb-4">
                The materials on our website are provided on an 'as is' basis.
                EHL Engineering Group makes no warranties, expressed or implied,
                and hereby disclaims and negates all other warranties including,
                without limitation, implied warranties or conditions of
                merchantability, fitness for a particular purpose, or
                non-infringement of intellectual property or other violation of
                rights.
              </p>

              <h3 className="text-xl font-bold text-white mt-6 mb-3">
                Limitations
              </h3>
              <p className="text-white mb-4">
                In no event shall EHL Engineering Group or its suppliers be
                liable for any damages (including, without limitation, damages
                for loss of data or profit, or due to business interruption)
                arising out of the use or inability to use the materials on our
                website, even if we or our authorized representative has been
                notified orally or in writing of the possibility of such damage.
              </p>

              <h3 className="text-xl font-bold text-white mt-6 mb-3">
                Accuracy of Materials
              </h3>
              <p className="text-white mb-4">
                The materials appearing on our website could include technical,
                typographical, or photographic errors. We do not warrant that
                any of the materials on our website are accurate, complete, or
                current. We may make changes to the materials contained on our
                website at any time without notice.
              </p>

              {/* Contact Section */}
              <h3 className="text-xl font-bold text-white mt-6 mb-3">
                Contact Us
              </h3>
              <p className="text-white mb-4">
                If you have questions about our Privacy Policy, Terms &amp; Conditions, or Disclaimer, or our
                practices, please contact us at:
              </p>
              <p className="text-white">
                EHL Engineering Group
                <br />
                Email:{" "}
                <a
                  href="mailto:popi@ehl.co.za"
                  className="text-lime-500 hover:text-lime-600"
                >
                  popi@ehl.co.za
                </a>
              </p>

              <p className="text-sm text-white mt-8">
                Last updated: {new Date().getFullYear()}
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
