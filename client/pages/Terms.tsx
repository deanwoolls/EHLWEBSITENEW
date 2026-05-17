import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { usePageTitle } from "@/lib/seo";

export default function Terms() {
  usePageTitle({
    title: "Terms & Conditions | EHL Engineering Group",
    description:
      "Terms and conditions for EHL Engineering Group. Learn about the terms governing use of our services.",
  });

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20" style={{ backgroundColor: "#002e5d" }}>
        <section className="py-20" style={{ backgroundColor: "#002e5d" }}>
          <div className="section-container">
            <h1 className="text-5xl font-bold text-white mb-8">
              Terms &amp; Conditions
            </h1>

            <div className="max-w-3xl prose prose-lg">
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

              <h3 className="text-xl font-bold text-white mt-6 mb-3">
                Contact Us
              </h3>
              <p className="text-white mb-4">
                If you have questions about our Terms &amp; Conditions, please contact us at:
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
