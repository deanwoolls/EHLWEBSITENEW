import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { usePageTitle } from "@/lib/seo";

export default function PrivacyPolicy() {
  usePageTitle({
    title: "Privacy Policy | EHL Engineering Group",
    description:
      "Privacy policy for EHL Engineering Group. Learn about our data protection practices.",
  });

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20" style={{ backgroundColor: "#002e5d" }}>
        <section className="py-20" style={{ backgroundColor: "#002e5d" }}>
          <div className="section-container">
            <h1 className="text-5xl font-bold text-white mb-8">
              Privacy Policy
            </h1>

            <div className="max-w-3xl prose prose-lg">
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

              <h3 className="text-xl font-bold text-white mt-6 mb-3">
                Contact Us
              </h3>
              <p className="text-white mb-4">
                If you have questions about our Privacy Policy, please contact us at:
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
