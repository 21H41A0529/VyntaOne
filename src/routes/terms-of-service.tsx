import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/terms-of-service")({
  head: () => ({
    meta: [
      { title: "Terms of Service — Vynta" },
      { name: "description", content: "Vynta Terms of Service. Read our terms and conditions for using our AI voice receptionist services." },
      { property: "og:title", content: "Terms of Service — Vynta" },
      { property: "og:description", content: "Vynta Terms of Service and conditions." },
    ],
  }),
  component: TermsOfService,
});

function TermsOfService() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[600px]"
        style={{ background: "var(--gradient-radial)" }}
      />

      <header className="relative z-20">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <Link to="/" className="flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-full border border-border bg-surface-elevated">
              <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_12px_var(--color-primary)]" />
            </span>
            <span className="font-display text-2xl">Vynta</span>
          </Link>
          <Link
            to="/"
            className="rounded-full border border-border bg-surface/60 px-4 py-2 text-sm text-foreground backdrop-blur-md transition hover:bg-secondary"
          >
            ← Back to Home
          </Link>
        </div>
      </header>

      <article className="relative z-10 mx-auto max-w-3xl px-6 pb-24 pt-12">
        <div className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-muted-foreground">
          <span className="h-px w-8 bg-border" />
          Legal
        </div>
        <h1 className="font-display text-4xl md:text-6xl">
          Terms of <em className="italic text-gradient">Service</em>
        </h1>
        <p className="mt-6 leading-relaxed text-muted-foreground">
          Welcome to VyntaOne. These Terms of Service ("Terms", "Agreement") govern your access to and use of the website, software, configuration, custom prompt design, and integration services provided by VyntaOne ("VyntaOne", "we", "us", or "our"). By purchasing our services, subscribing to our plans, or accessing our platform, you ("Client", "User", "you") agree to be bound by these Terms.
        </p>

        <section className="mt-14">
          <h2 className="font-display text-2xl md:text-3xl">Scope of Services</h2>
          <div className="mt-6 space-y-5 text-muted-foreground">
            <p>VyntaOne is a specialized AI voice agent configuration, prompt engineering, and API integration service.</p>
            <p><strong className="text-foreground">What We Provide:</strong> We design, configure, train, and integrate automated AI voice receptionists utilizing third-party application programming interfaces (APIs), software-as-a-service (SaaS) systems, and telecommunication connectors (including but not limited to Vapi, Cal.com).</p>
            <p><strong className="text-foreground">Service Delivery:</strong> All configuration, knowledge mapping, custom instructions, and voice-to-calendar integrations are hosted in the cloud. No physical hardware or local software installation is required on the Client's premises.</p>
            <p><strong className="text-foreground">Service Boundaries:</strong> VyntaOne is not a telecommunications provider, a public utility, or a native telephone carrier. We do not sell hardware or telecommunications bandwidth. We configure software layers that sit on top of third-party platforms chosen by or assigned to the Client.</p>
          </div>
        </section>

        <section className="mt-14">
          <h2 className="font-display text-2xl md:text-3xl">Licensing and Intellectual Property</h2>
          <div className="mt-6 space-y-5 text-muted-foreground">
            <p><strong className="text-foreground">VyntaOne Intellectual Property:</strong> We retain all rights, titles, and interests in and to our proprietary onboarding methodologies, customized system prompts, and configuration templates designed by us.</p>
            <p><strong className="text-foreground">Client License:</strong> Subject to your compliance with these Terms and timely payment of all applicable fees, VyntaOne grants you a limited, non-exclusive, non-transferable, revocable license to access and use the configured AI voice receptionist service for your internal business operations during the term of your active subscription.</p>
            <p><strong className="text-foreground">Client Data & Content:</strong> The Client retains all ownership rights to any business information, FAQs, scheduling rules, customer details, and proprietary data provided to VyntaOne for the purpose of configuring the AI voice agent. The Client grants VyntaOne a worldwide, royalty-free license to use, process, and analyze this data solely to deliver, maintain, and optimize the AI voice agent service for the Client.</p>
          </div>
        </section>

        <section className="mt-14">
          <h2 className="font-display text-2xl md:text-3xl">Subscription Plans, Call Limits, and Overages</h2>
          <div className="mt-6 space-y-5 text-muted-foreground">
            <p><strong className="text-foreground">Subscription Services:</strong> Ongoing maintenance, continuous model optimization, knowledge base updates, and integration support are billed on a recurring monthly or annual subscription basis.</p>
            <p><strong className="text-foreground">Call Volume Allotments:</strong> Subscription plans include pre-defined monthly call-duration allotments (measured in active operational minutes, with a base allotment of 120 minutes).</p>
            <p><strong className="text-foreground">No Post-Facto Overage Billing:</strong> To protect Clients from unexpected or runaway usage fees, VyntaOne does not bill for overages in arrears. We do not support automated post-facto overage charges at the end of a billing cycle.</p>
            <p><strong className="text-foreground">Hard-Gate Limit and Immediate Pause:</strong> The service operates on a strict "Hard-Gate at 100%" usage model. The exact second a Client's cumulative monthly minute consumption reaches 100% of their total allowed limit (defined as the 120 minute base plan allotment plus any active, purchased prepaid top-ups), the AI receptionist service is paused immediately. Inbound calls received while the service is paused will not be answered by the active AI voice receptionist; instead, callers will hear an automated, polite pre-recorded notification explaining that the phone lines are busy, after which the call will be disconnected.</p>
            <p><strong className="text-foreground">Prepaid Top-Ups for Service Resumption:</strong> To reactivate and resume the service immediately, the Client must purchase a prepaid top-up package (such as a $30 top-up package for 45 additional, non-expiring minutes) through their VyntaOne Client Portal. Prepaid top-ups are billed immediately at checkout via Paddle. Once payment is successfully verified, the additional minutes are automatically credited to the Client's account, and the AI receptionist service will resume operations immediately.</p>
          </div>
        </section>

        <section className="mt-14">
          <h2 className="font-display text-2xl md:text-3xl">Client Responsibilities and Permitted Use</h2>
          <div className="mt-6 space-y-5 text-muted-foreground">
            <p><strong className="text-foreground">Compliance with Laws:</strong> You will comply with all local, state, national, and international laws, regulations, and industry standards applicable to call recording, automated calling, telemarketing, and consumer protection (including but not limited to the Telephone Consumer Protection Act [TCPA], the Telemarketing Sales Rule [TSR], and the EU General Data Protection Regulation [GDPR]).</p>
            <p><strong className="text-foreground">Consent and Disclosures:</strong> You are solely responsible for ensuring that all necessary disclosures are made and appropriate consents are obtained from callers before their calls are processed, recorded, or transcribed by the AI voice agent.</p>
            <p><strong className="text-foreground">Prohibited Conduct:</strong> You will not use the service to: engage in outbound spamming, unsolicited telemarketing, or cold calling in violation of any legal regulatory frameworks; impersonate any person or entity, or falsely state or misrepresent your affiliation with a person or entity; design an agent with the intent to deceive callers, run automated phishing schemes, or execute fraudulent financial activities; or transmit or record any material that is unlawful, harassing, defamatory, abusive, threatening, harmful, vulgar, obscene, or otherwise objectionable.</p>
            <p><strong className="text-foreground">Third-Party Accounts:</strong> To enable specific integrations (e.g., booking appointments), you may be required to maintain active accounts with third-party providers, such as Cal.com or whatever you use for appointment booking. You are solely responsible for compliance with those third-party terms of service and for any fees, costs, or liabilities associated with those accounts.</p>
          </div>
        </section>

        <section className="mt-14">
          <h2 className="font-display text-2xl md:text-3xl">Service Availability, Latency, and SLA Disclaimers</h2>
          <div className="mt-6 space-y-5 text-muted-foreground">
            <p><strong className="text-foreground">Dependence on Third Parties:</strong> The performance of VyntaOne's AI voice agents depends heavily on third-party cloud infrastructure, AI models (such as OpenAI, Anthropic, or Deepgram), speech-to-text (STT) processors, text-to-speech (TTS) synthesis engines, and telecommunications APIs (such as Vapi or Twilio).</p>
            <p><strong className="text-foreground">No Absolute Guarantee of Uptime:</strong> While VyntaOne strives to maintain 99.9% uptime for our configured integrations, we do not guarantee uninterrupted or error-free operations. Service interruptions, temporary delays, or packet drops caused by underlying telecommunication carriers, API outages, or general cloud infrastructure failures are entirely outside VyntaOne's control.</p>
            <p><strong className="text-foreground">Latency Disclaimer:</strong> Call response latency (the brief pause between a human caller finishing a sentence and the AI agent speaking) can fluctuate based on real-time internet traffic, third-party LLM processing times, and carrier performance. VyntaOne is not responsible for performance degradation caused by these external variables.</p>
          </div>
        </section>

        <section className="mt-14">
          <h2 className="font-display text-2xl md:text-3xl">Limitation of Liability</h2>
          <div className="mt-6 space-y-5 text-muted-foreground">
            <p className="uppercase tracking-wide">To the maximum extent permitted by applicable law, in no event shall VyntaOne, its directors, employees, partners, or agents be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the services; (ii) any behavior or content of other third parties on the service; or (iii) the unintended disclosure, transcription, or disposition of call recordings and customer data.</p>
            <p className="uppercase tracking-wide">VyntaOne's total liability for all claims arising out of or related to this agreement, whether in contract, tort, or otherwise, shall not exceed the total amount of fees actually paid by the client to VyntaOne in the three (3) months immediately preceding the event giving rise to the liability.</p>
          </div>
        </section>

        <section className="mt-14">
          <h2 className="font-display text-2xl md:text-3xl">Governing Law and Dispute Resolution</h2>
          <div className="mt-6 space-y-5 text-muted-foreground">
            <p>VyntaOne's total liability for all claims arising out of or related to this agreement, whether in contract, tort, or otherwise, shall not exceed the total amount of fees actually paid by the client to VyntaOne in the three (3) months immediately preceding the event giving rise to the liability.</p>
          </div>
        </section>

        <section className="mt-14">
          <h2 className="font-display text-2xl md:text-3xl">Amendments and Contact</h2>
          <div className="mt-6 space-y-5 text-muted-foreground">
            <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect.</p>
            <p>If you have any questions about these Terms, please contact us at:</p>
            <p><strong className="text-foreground">Email:</strong> <a href="mailto:hello@vyntaone.com" className="text-primary underline underline-offset-4 transition hover:text-accent">hello@vyntaone.com</a></p>
          </div>
        </section>
      </article>

      <footer className="relative z-10 border-t border-border-subtle">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-6 py-12 md:flex-row md:items-center">
          <div>
            <div className="flex items-center gap-2">
              <span className="grid h-8 w-8 place-items-center rounded-full border border-border bg-surface-elevated">
                <span className="h-2 w-2 rounded-full bg-primary" />
              </span>
              <span className="font-display text-2xl">Vynta</span>
            </div>
            <p className="mt-3 max-w-xs text-sm text-muted-foreground">
              The 24/7 AI voice receptionist for high-growth businesses.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-muted-foreground">
            <Link to="/" className="transition hover:text-foreground">Home</Link>
            <Link to="/terms-of-service" className="transition hover:text-foreground">Terms</Link>
            <Link to="/privacy-policy" className="transition hover:text-foreground">Privacy</Link>
            <Link to="/refund-policy" className="transition hover:text-foreground">Refunds</Link>
          </div>
          <div className="font-mono text-xs text-muted-foreground">
            © {new Date().getFullYear()} Vynta. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
