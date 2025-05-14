import Link from "next/link";
import HomePage from "./home/page";

export default function Home() {
  return (
    <>
      <div>
        <h1>Main Page</h1>
        <Link href="/home">Home</Link>
        <HomePage />
      </div>
    </>
  );
}
