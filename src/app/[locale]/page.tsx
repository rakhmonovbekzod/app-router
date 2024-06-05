import Link from "next/link";

export default function Home() {
  return (
    <main className="flex  justify-between width-100 ">
      <Link href="/about">about</Link>
      <Link href="/contact">contact</Link>
      <Link href="/about/cards">cards</Link>
    </main>
  );
}
