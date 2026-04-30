// src/app/terms-of-use/page.tsx
import AnimatedSection from "@/components/AnimatedSection";

export const metadata = { title: "Terms of Use | MICROMEGAS" };

export default function TermsOfUse() {
  return (
    <>
      {/* Hero Section - Following Products page style */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-violet-900 via-black to-purple-900" />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative container mx-auto px-6 text-center z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl">
            TERMS OF USE
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto drop-shadow">
            MICROMEGAS Spółka z ograniczoną odpowiedzialnością
          </p>
        </div>
      </section>

      {/* Content Section - Simplified prose following Privacy Policy style but with AnimatedSections */}
      <article className="py-24 bg-background">
        <div className="container mx-auto px-6 max-w-4xl">
          <AnimatedSection>
            <div className="mb-12">
              <p className="text-muted-foreground">
                Last updated: March 23rd, 2026.
              </p>
            </div>
          </AnimatedSection>

          <div className="prose prose-lg dark:prose-invert space-y-12 text-muted-foreground">
            <AnimatedSection>
              <section id="introduction">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  1. Introduction
                </h2>
                <p>
                  These Terms of Use (“Terms”) govern your access to and use of
                  the website{" "}
                  <a
                    href="https://micro-megas.com/"
                    className="text-primary hover:underline">
                    https://micro-megas.com/
                  </a>{" "}
                  (the “Website”), operated by MICROMEGAS Spółka z ograniczoną
                  odpowiedzialnością (the “Company”, “we”, “us”, or “our”).
                </p>
                <p>
                  By accessing or using the Website, you agree to be bound by
                  these Terms. If you do not agree, you must not use the
                  Website.
                </p>
              </section>
            </AnimatedSection>

            <AnimatedSection>
              <section id="nature-of-website">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  2. Nature of the Website
                </h2>
                <p>
                  The Website is provided for informational and business
                  communication purposes only. It presents general information
                  about the Company’s services, including international
                  logistics, procurement, and industrial equipment supply.
                </p>
                <p>
                  Nothing on this Website constitutes a binding offer to sell
                  goods or services. Any engagement between the Company and a
                  client shall be subject to a separate written agreement.
                </p>
              </section>
            </AnimatedSection>

            <AnimatedSection>
              <section id="use-of-website">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  3. Use of the Website
                </h2>
                <p>
                  You agree to use the Website only for lawful purposes and in a
                  manner that does not:
                </p>
                <ul>
                  <li>
                    violate applicable laws or regulations (including EU and
                    Polish law);
                  </li>
                  <li>infringe the rights of the Company or third parties;</li>
                  <li>
                    interfere with or disrupt the operation or security of the
                    Website.
                  </li>
                </ul>
                <p>
                  We reserve the right to restrict or terminate access to the
                  Website at any time without notice.
                </p>
              </section>
            </AnimatedSection>

            <AnimatedSection>
              <section id="no-professional-advice">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  4. No Professional or Technical Advice
                </h2>
                <p>
                  All content on the Website is provided for general
                  informational purposes only and does not constitute
                  professional, technical, engineering, or commercial advice.
                </p>
                <p>
                  Any decisions regarding procurement, logistics, or equipment
                  use should be based on independent evaluation and formal
                  contractual arrangements.
                </p>
              </section>
            </AnimatedSection>

            <AnimatedSection>
              <section id="intellectual-property">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  5. Intellectual Property and Third-Party Materials
                </h2>
                <p>
                  All content on the Website, including text, layout, design
                  elements, and graphics, is owned by or licensed to the Company
                  unless otherwise indicated.
                </p>
                <p>
                  The Website may display trademarks, logos, and brand names of
                  third-party manufacturers (including but not limited to
                  industrial equipment producers). Such trademarks and logos are
                  the property of their respective owners and are used solely
                  for identification and informational purposes.
                </p>
                <p>
                  The Company is not affiliated with, endorsed by, or an
                  official distributor of such third-party brands unless
                  explicitly stated.
                </p>
                <p>
                  You may not reproduce, distribute, modify, or otherwise use
                  Website content without prior written consent from the
                  Company, except as permitted by applicable law.
                </p>
              </section>
            </AnimatedSection>

            <AnimatedSection>
              <section id="accuracy-of-information">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  6. Accuracy of Information
                </h2>
                <p>
                  While we aim to ensure that the information on the Website is
                  accurate and up to date, we make no representations or
                  warranties, express or implied, regarding:
                </p>
                <ul>
                  <li>
                    completeness, accuracy, or reliability of the content;
                  </li>
                  <li>availability of products or services;</li>
                  <li>timelines, delivery speeds, or logistics performance;</li>
                  <li>suitability of any solutions for specific purposes.</li>
                </ul>
                <p>
                  All specifications, delivery timeframes (including statements
                  such as “24–72h” or “within 4 hours”), and performance-related
                  descriptions are indicative only and subject to confirmation
                  in a separate binding agreement.
                </p>
              </section>
            </AnimatedSection>

            <AnimatedSection>
              <section id="no-warranties">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  7. No Warranties
                </h2>
                <p>
                  To the fullest extent permitted by applicable law, the Website
                  and its content are provided on an “as is” and “as available”
                  basis.
                </p>
                <p>The Company does not guarantee that:</p>
                <ul>
                  <li>the Website will be uninterrupted or error-free;</li>
                  <li>
                    the Website will be secure or free from harmful components;
                  </li>
                  <li>
                    any described services will achieve specific commercial or
                    operational outcomes.
                  </li>
                </ul>
              </section>
            </AnimatedSection>

            <AnimatedSection>
              <section id="limitation-of-liability">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  8. Limitation of Liability
                </h2>
                <p>
                  To the maximum extent permitted by law, the Company shall not
                  be liable for any indirect, incidental, consequential, or
                  special damages, including but not limited to:
                </p>
                <ul>
                  <li>loss of profits;</li>
                  <li>loss of contracts or business opportunities;</li>
                  <li>operational delays or downtime;</li>
                  <li>loss of data;</li>
                </ul>
                <p>arising out of or in connection with:</p>
                <ul>
                  <li>the use of or inability to use the Website;</li>
                  <li>reliance on information presented on the Website.</li>
                </ul>
              </section>
            </AnimatedSection>

            <AnimatedSection>
              <section id="services-and-commercial-terms">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  9. Services and Commercial Terms
                </h2>
                <p>
                  Descriptions of services on the Website, including but not
                  limited to:
                </p>
                <ul>
                  <li>air, sea, and intermodal transportation;</li>
                  <li>heavy and oversized logistics;</li>
                  <li>turnkey procurement;</li>
                  <li>customs and documentation support;</li>
                  <li>project logistics;</li>
                </ul>
                <p>are for informational purposes only.</p>
                <p>
                  Any specific obligations, service levels, timelines,
                  certifications, or guarantees shall be defined exclusively in
                  separate written agreements between the Company and the
                  client.
                </p>
                <p>
                  Any references to “quality guaranteed”, “on-time delivery”,
                  “full compliance”, or similar statements are indicative and do
                  not constitute legally binding guarantees unless expressly
                  agreed in writing.
                </p>
              </section>
            </AnimatedSection>

            <AnimatedSection>
              <section id="logistics-disclaimer">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  10. Logistics and International Trade Disclaimer
                </h2>
                <p>Logistics and international trade services may involve:</p>
                <ul>
                  <li>third-party carriers and subcontractors;</li>
                  <li>customs authorities and regulatory bodies;</li>
                  <li>cross-border compliance requirements.</li>
                </ul>
                <p>
                  The Company does not assume responsibility beyond the scope
                  expressly agreed in a separate contract.
                </p>
                <p>
                  Transport of oversized, complex, or regulated goods may be
                  subject to additional legal and operational risks.
                </p>
              </section>
            </AnimatedSection>

            <AnimatedSection>
              <section id="third-party-links">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  11. Third-Party Links and Services
                </h2>
                <p>
                  The Website may reference or link to third-party products,
                  services, or platforms. The Company does not control and is
                  not responsible for such third parties or their content.
                </p>
                <p>
                  Any interaction with third parties is solely between you and
                  the respective third party.
                </p>
              </section>
            </AnimatedSection>

            <AnimatedSection>
              <section id="personal-data">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  12. Personal Data
                </h2>
                <p>
                  By submitting information through the Website (including
                  contact forms), you acknowledge that you have read and
                  understood the Privacy Policy and consent to the processing of
                  your personal data in accordance with:
                </p>
                <ul>
                  <li>
                    the General Data Protection Regulation (EU) 2016/679
                    (“GDPR”);
                  </li>
                  <li>applicable Polish data protection laws.</li>
                </ul>
              </section>
            </AnimatedSection>

            <AnimatedSection>
              <section id="indemnification">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  13. Indemnification
                </h2>
                <p>
                  You agree to indemnify and hold harmless the Company from any
                  claims, damages, losses, or expenses arising out of:
                </p>
                <ul>
                  <li>your misuse of the Website;</li>
                  <li>your violation of these Terms;</li>
                  <li>your infringement of any third-party rights.</li>
                </ul>
              </section>
            </AnimatedSection>

            <AnimatedSection>
              <section id="changes-to-terms">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  14. Changes to the Terms
                </h2>
                <p>
                  We may update these Terms from time to time. Any changes will
                  be published on this page and will take effect upon
                  publication.
                </p>
                <p>
                  Your continued use of the Website constitutes acceptance of
                  the updated Terms.
                </p>
              </section>
            </AnimatedSection>

            <AnimatedSection>
              <section id="governing-law">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  15. Governing Law and Jurisdiction
                </h2>
                <p>
                  These Terms shall be governed by and construed in accordance
                  with the laws of the Republic of Poland.
                </p>
                <p>
                  Any disputes arising out of or in connection with these Terms
                  shall be subject to the exclusive jurisdiction of the
                  competent courts of Warsaw, Poland.
                </p>
              </section>
            </AnimatedSection>

            <AnimatedSection>
              <section id="contact-information">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  16. Contact Information
                </h2>
                <p>
                  If you have any questions regarding these Terms, you may
                  contact us at:
                </p>
                <div className="bg-muted/30 p-8 rounded-2xl border">
                  <p className="font-bold text-foreground mb-2">
                    MICROMEGAS Spółka z ograniczoną odpowiedzialnością
                  </p>
                  <p>Plac Bankowy 2, lok. 1309, 00-095 Warszawa, Poland</p>
                  <p>NIP: 5273007007</p>
                  <p className="mt-4">
                    Email:{" "}
                    <a
                      href="mailto:info@micro-megas.com"
                      className="text-primary hover:underline">
                      info@micro-megas.com
                    </a>
                  </p>
                </div>
              </section>
            </AnimatedSection>
          </div>
        </div>
      </article>
    </>
  );
}
