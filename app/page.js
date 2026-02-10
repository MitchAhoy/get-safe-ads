import ButtonLogin from "@/components/ButtonLogin";
import FAQListItem from "@/components/FAQListItem";
import Image from "next/image";
import productDemoImage from "@/public/assets/productDemo.jpeg";

export default function Home() {
  const isLoggedIn = true;
  const name = "James Bond";
  return (
    <main>
      <section className="bg-base-200">
        <div className="flex justify-between items-center px-8 py-2 max-w-5xl mx-auto">
          <div className="font-bold">GetSafeAds</div>
          <div className="space-x-4 max-md:hidden">
            <a className="link link-hover" href="#pricing">
              Pricing
            </a>
            <a className="link link-hover" href="#faq">
              FAQs
            </a>
            <a className="link link-hover">Support</a>
          </div>
          <div>
            <ButtonLogin isLoggedIn={isLoggedIn} name={name} />
          </div>
        </div>
      </section>

      <section className="text-center py-32 px-8 max-w-5xl mx-auto flex flex-col lg:flex-row gap-14 lg:text-left items-center lg:items-start">
        <Image
          src={productDemoImage}
          alt="product demo"
          className="w-96 rounded-xl"
        />
        <div>
          <h1 className="text-3xl font-extrabold mb-6 lg:text-5xl">
            Stop wasting ad spend on bots and competitors
          </h1>
          <div className="opacity-80 mb-10">
            Automatically block and get what you need so Google will refund you
            on wated clicks. We pay for ourselves or we are free.
          </div>
          <ButtonLogin isLoggedIn={isLoggedIn} name={name} />
        </div>
      </section>

      {/* PRICING */}
      <section className="bg-base-200 py-32" id="pricing">
        <div className="px-8 max-w-3xl mx-auto">
          <p className="text-sm uppercase text-center font-medium text-primary mb-4">
            Pricing
          </p>
          <h2 className="text-3xl font-extrabold mb-6 lg:text-3xl text-center">
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
              {[
                "Save time on manual placement exclusions",
                "Ensure you only get the best placements",
                "Stop showing on spam sites",
                "Only show on DR site levels you decide",
              ].map((listItem) => {
                return (
                  <li className="flex gap-2 items-center" key={listItem}>
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
                    {listItem}
                  </li>
                );
              })}
            </ul>
            <ButtonLogin
              isLoggedIn={isLoggedIn}
              name={name}
              extraStyle="w-full"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-base-200" id="faq">
        <div className="py-32 px-8 max-w-3xl mx-auto">
          <p className="text-sm uppercase text-center font-medium text-primary mb-4">
            FAQ
          </p>
          <h2 className="text-3xl font-extrabold mb-6 lg:text-3xl text-center">
            Frequently Asked Questions
          </h2>

          <ul className="max-w-lg mx-auto">
            {[
              {
                question: "How much doees it cost?",
                answer:
                  "Get started for free with a 7-day trial. Then $20/mo per account after that.",
              },
              {
                question: "Is it safe?",
                answer:
                  "The only edits we make to an account are to your placement lists. Yes",
              },
              {
                question: "Does it take long to set up?",
                answer: "Get up and running in < 3min.",
              },
            ].map((qa) => (
              <FAQListItem key={qa.question} qa={qa} />
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
