"use client";

export default function PrivacyPolicy() {
  return (
    <section
      id="privacy-policy"
      className="max-w-5xl bg-background px-4 py-8 text-foreground"
    >
      <h2 className="text-3xl font-semibold">Privacy Policy</h2>
      <p className="mt-4 text-muted-foreground">
        At KisanWise, we respect your privacy and are committed to protecting it
        through our compliance with this policy.
      </p>
      <ul className="mt-4 list-inside list-disc space-y-2">
        <li>
          We collect information to provide better services to our users. (Just
          like the <span className="text-primary">Straw Hat crew</span> gathers
          allies for their journey!)
        </li>
        <li>
          We will not share your{" "}
          <span className="text-primary">personal information</span> with any
          third party without your consent.
        </li>
        <li>
          You have the right to request access to your personal data and to ask
          for <span className="text-primary">correction</span> or{" "}
          <span className="text-primary">deletion</span> of such data.
        </li>
        <li>
          We implement a variety of{" "}
          <span className="text-primary">security measures</span> to maintain
          the safety of your personal information.
        </li>
        <li>
          Our website may use cookies to enhance your experience. (Think of them
          as tiny <span className="text-primary">treasure chests</span> from
          Grand Line!)
        </li>
        <li>
          We may update our Privacy Policy from time to time. We will notify you
          of any changes by posting the new Privacy Policy on this page.
        </li>
        <li>
          By using our service, you consent to our{" "}
          <span className="text-primary">Privacy Policy</span>.
        </li>
      </ul>
    </section>
  );
}
