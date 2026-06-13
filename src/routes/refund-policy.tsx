import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/refund-policy")({
  head: () => ({
    meta: [
      { title: "Refund & Cancellation Policy — Vynta" },
      { name: "description", content: "Vynta Refund and Cancellation Policy. Learn about our billing, cancellation, and top-up procedures." },
      { property: "og:title", content: "Refund & Cancellation Policy — Vynta" },
      { property: "og:description", content: "Vynta Refund and Cancellation Policy." },
    ],
  }),
  component: RefundPolicy,
});

function RefundPolicy() {
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
          Refund & <em className="italic text-gradient">Cancellation</em>
        </h1>
        <p className="mt-6 leading-relaxed text-muted-foreground">
          At VyntaOne, we are committed to complete transparency in our billing, refund, and subscription management procedures. Because our services involve intensive, manual custom configuration work as well as high-cost third-party API deployments, we operate under a strict, clear Refund and Cancellation Policy to satisfy Paddle's merchant standards.
        </p>

        <section className="mt-14">
          <h2 className="font-display text-2xl md:text-3xl">Subscription & Cancellation</h2>
          <div className="mt-6 space-y-5 text-muted-foreground">
            <p><strong className="text-foreground">Upfront Billing:</strong> Billing is processed upfront to cover infrastructure costs, and we are unable to offer pro-rated refunds.</p>
            <p><strong className="text-foreground">Flexible Cancellation:</strong> You are free to cancel your subscription at any time. When you cancel, your access to the Softr portal, dashboards, call logs, and calendar settings remains fully active and accessible until the end of your current paid billing cycle. This ensures you can utilize the remaining time of your plan without interruption. Once the cycle ends, access to everything (including the portal and voice routing) is completely deactivated. No further renewals will be processed.</p>
            <p><strong className="text-foreground">Minute Usage vs. Portal Access:</strong> If you consume your 120 monthly minutes before the billing cycle ends, your voice assistant calls will temporarily pause (playing a busy notification). However, you will still retain full access to your Softr portal, dashboards, and historical call logs. You can purchase a top-up at any time to resume calls immediately.</p>
          </div>

          <h3 className="mt-8 text-lg font-medium text-foreground">How to Cancel</h3>
          <p className="mt-4 text-muted-foreground">You can cancel your subscription at any time through:</p>
          <ul className="mt-4 list-disc space-y-3 pl-5 text-muted-foreground">
            <li>Your VyntaOne Billing Dashboard.</li>
            <li>Sending a request to our support team at <a href="mailto:hello@vyntaone.com" className="text-primary underline underline-offset-4 transition hover:text-accent">hello@vyntaone.com</a></li>
          </ul>
        </section>

        <section className="mt-14">
          <h2 className="font-display text-2xl md:text-3xl">Prepaid Top-Ups</h2>
          <div className="mt-6 space-y-5 text-muted-foreground">
            <p><strong className="text-foreground">Instant Access:</strong> Prepaid top-ups are added instantly to your live account balance, making the system ready to handle incoming calls right away.</p>
            <p><strong className="text-foreground">Final Purchases:</strong> Since top-up credits are immediately available and dynamically allocated for live call-handling, all top-up purchases are final.</p>
          </div>
        </section>

        <section className="mt-14">
          <h2 className="font-display text-2xl md:text-3xl">Billing Support & Inquiries</h2>
          <div className="mt-6 space-y-5 text-muted-foreground">
            <p>We are here to help resolve any billing questions or concerns you might have. If you notice any potential errors, duplicate charges, or have questions about an invoice, please contact us first. We prefer to work collaboratively with our clients to resolve billing queries directly and efficiently.</p>
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
