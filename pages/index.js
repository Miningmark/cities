import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>Welcome to my cities App.</h1>
      <Link href="/cities">Go to cities</Link>
    </div>
  );
}
