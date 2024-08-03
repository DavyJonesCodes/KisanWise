"use client";

export default function TermsAndConditions() {
  return (
    <section
      id="terms-conditions"
      className="max-w-5xl bg-background px-4 py-8 text-foreground"
    >
      <h2 className="text-3xl font-semibold">Terms & Conditions</h2>
      <p className="mt-4 text-muted-foreground">
        Welcome to KisanWise! By using our platform, you agree to comply with
        and be bound by the following terms and conditions.
      </p>
      <ul className="mt-4 list-inside list-disc space-y-2">
        <li>
          You must be at least{" "}
          <span className="text-primary">18 years old</span> to use our
          services. (Remember <span className="text-primary">Luffy's age</span>{" "}
          when he started his pirate journey?)
        </li>
        <li>
          Your use of the service is at your{" "}
          <span className="text-primary">sole risk</span>. The service is
          provided on an "as is" and "as available" basis.
        </li>
        <li>
          Unauthorized use of our services may give rise to a claim for{" "}
          <span className="text-primary">damages</span> and/or be a{" "}
          <span className="text-primary">criminal offense</span>.
        </li>
        <li>
          You are responsible for maintaining the{" "}
          <span className="text-primary">confidentiality</span> of your account
          and password.
        </li>
        <li>
          We may terminate or suspend access to our service immediately, without
          prior notice or liability, for any reason whatsoever, including
          without limitation if you breach the terms.
        </li>
        <li>
          Our failure to enforce any right or provision of these terms will not
          be considered a waiver of those rights.
        </li>
        <li>
          Any disputes arising from the use of this platform will be governed by
          the laws of <span className="text-primary">Grand Line</span>.
        </li>
      </ul>
    </section>
  );
}
