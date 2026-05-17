import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { usePageTitle } from "@/lib/seo";

export default function Disclaimer() {
  usePageTitle({
    title: "Disclaimer | EHL Engineering Group",
    description:
      "Disclaimer for EHL Engineering Group. Learn about the limitations of our website materials.",
  });

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20" style={{ backgroundColor: "#002e5d" }}>
        <section className="py-20" style={{ backgroundColor: "#002e5d" }}>
          <div className="section-container">
            <h1 className="text-5xl font-bold text-white mb-8">Disclaimer</h1>

            <div className="max-w-3xl prose prose-lg">
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

              <h3 className="text-xl font-bold text-white mt-6 mb-3">
                Contact Us
              </h3>
              <p className="text-white mb-4">
                If you have questions about our Disclaimer, please contact us at:
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
