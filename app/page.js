import ButtonLogin from "@/components/ButtonLogin";
import Image from "next/image";

export default function Home() {
  const isLoggedIn = true;
  const name = "James Bond";
  return (
    <main>
      <section className="bg-base-200">
        <div className="flex justify-between items-center px-8 py-2 max-w-3xl mx-auto">
          <div className="font-bold">GetSafeAds</div>
          <div className="space-x-4 max-md:hidden">
            <a className="link link-hover">Pricing</a>
            <a className="link link-hover">FAQs</a>
            <a className="link link-hover">Support</a>
          </div>
          <div>
            <ButtonLogin isLoggedIn={isLoggedIn} name={name} />
          </div>
        </div>
      </section>

      <section className="text-center py-32 px-8 max-w-3xl mx-auto">
        <h1 className="text-3xl font-extrabold mb-6 lg:text-5xl">
          Stop wasting ad spend on bots and competitors
        </h1>
        <div className="opacity-80 mb-10">
          Automatically block and get what you need so Google will refund you on
          wated clicks. We pay for ourselves or we are free.
        </div>
        <ButtonLogin isLoggedIn={isLoggedIn} name={name} />
      </section>

      <section className="bg-base-200 py-32">
        <div className="py-32 px-8 max-w-3xl mx-auto">
          <p className="text-sm uppercase font-medium text-center text-primary mb-4">
            Pricing
          </p>
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-12 text-center">
            Pricing that pays for itself
          </h2>
          <div className="pricing-card max-w-sm">
            <div className="upper-card flex flex-row justify-between">
              <div className="bolt-icon-container border rounded-3xl p-1 border-black">
                <Image src="/bolt-icon.svg" width={24} height={24} />
              </div>
              <div className="upper-chip badge badge-primary">
                Limited time offer
              </div>
            </div>
            <div className="card-title-description">
              <p className="text-bold">Starter</p>
              <p className="text-bold">Best for startups and small teams</p>
            </div>
            <div className="pricing-amount">
              <div className="pricing-figures">
                <span className="pricing-actual">$8,900</span>
                <span className="pricing-mo">/mo</span>
              </div>
              <p className="pricing-terms">Cancel or pause any time</p>
            </div>
            <div className="pricing-features">
              <ul>
                <li>Production-ready web-app deisgns</li>
                <li>Production-ready web-app deisgns</li>
                <li>Production-ready web-app deisgns</li>
                <li>Production-ready web-app deisgns</li>
                <li>Production-ready web-app deisgns</li>
                <button className="btn btn-primary">Get started</button>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
