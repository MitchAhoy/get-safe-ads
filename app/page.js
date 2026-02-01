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

      {/* PRICING */}
      <section className="bg-base-200 py-32">
        <div className="py-32 px-8 max-w-3xl mx-auto">
          <p className="text-sm uppercase text-center font-medium text-primary mb-4">
            Pricing
          </p>
          <h2 className="text-3xl font-extrabold mb-6 lg:text-3xl mb-12 text-center">
            A pricing that adapts to your needs
          </h2>
          <div className="p-8 bg-base-100 max-w-96 rounded-3xl mx-auto space-y-6">
            <div className="flex gap-2 items-baseline">
              <div className="text-4xl font-black">$19</div>
              <div className="uppercase text-sm font-medium opacity-60">
                /month
              </div>
            </div>
            <ul className="space-y-2">
              <li className="flex gap-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="text-green-600 size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
                Save time
              </li>
            </ul>
            <ButtonLogin isLoggedIn={isLoggedIn} name={name} />
          </div>
        </div>
      </section>
    </main>
  );
}
