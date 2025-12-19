import Link from "next/link";
import ButtonLogin from "@/components/ButtonLogin";

export default function Home() {
  const isLoggedIn = true;
  const name = "James Bond";
  return (
    <main>
      <section className="bg-base-200">
        <div className="flex justify-between items-center px-8 py-2 max-w-3xl mx-auto">
          <div className="font-bold">GetSafeAds</div>
          <div className="space-x-4">
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
        <h1 className="text-5xl font-extrabold mb-6">
          Stop wasting ad spend on bots and competitors
        </h1>
        <div className="opacity-80 mb-10">
          Automatically block and get what you need so Google will refund you on
          wated clicks. We pay for ourselves or we are free.
        </div>
        <ButtonLogin isLoggedIn={isLoggedIn} name={name} />
      </section>
    </main>
  );
}
