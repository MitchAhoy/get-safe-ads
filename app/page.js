import Link from "next/link";
import ButtonLogin from "@/components/ButtonLogin";

export default function Home() {
  const isLoggedIn = false;
  return (
    <main>
      <h1>Stop wasting ad spend on bots and competitors</h1>
      <div>
        Automatically block and get what you need so Google will refund you on
        wated clicks. We pay for ourselves or we are free.
      </div>
      <Link href="/dashboard">Click me</Link>
      <ButtonLogin isLoggedIn />
    </main>
  );
}
