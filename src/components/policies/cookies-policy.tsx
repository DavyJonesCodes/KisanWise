"use client";

export default function CookiesPolicy() {
  return (
    <section
      id="cookies-policy"
      className="max-w-5xl bg-background px-4 py-8 text-foreground"
    >
      <h2 className="text-3xl font-semibold">Cookies Policy</h2>
      <p className="mt-4 text-muted-foreground">
        Our website uses cookies to distinguish you from other users. This helps
        us to provide you with a good experience when you browse our website.
      </p>
      <ul className="mt-4 list-inside list-disc space-y-2">
        <li>
          Cookies are small files stored on your device. (Think of them as tiny{" "}
          <span className="text-primary">treasure chests</span> from Grand
          Line!)
        </li>
        <li>
          We use cookies to understand how you use our site and to improve your
          experience.
        </li>
        <li>
          You can choose to accept or decline cookies. Most web browsers
          automatically accept cookies, but you can usually modify your browser
          setting to <span className="text-primary">decline cookies</span> if
          you prefer.
        </li>
        <li>
          We use the following types of cookies:
          <ul className="ml-4 mt-2 list-inside list-disc space-y-1">
            <li>
              <span className="text-primary">Necessary cookies</span>: These
              cookies are essential for the website to function properly.
            </li>
            <li>
              <span className="text-primary">Functional cookies</span>: These
              cookies allow the website to provide personalized functionality.
            </li>
            <li>
              <span className="text-primary">Performance cookies</span>: These
              cookies help to improve the performance of the website.
            </li>
            <li>
              <span className="text-primary">Advertising cookies</span>: These
              cookies are used to deliver advertisements relevant to you.
            </li>
          </ul>
        </li>
        <li>
          If you have any questions about our Cookies Policy, please contact us
          at <span className="text-primary">devjonescodes@gmail.com</span>.
        </li>
      </ul>
    </section>
  );
}
