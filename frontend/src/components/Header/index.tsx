import Link from "next/link";

export default function Header() {
  return (
    <header className="flex mt-10 justify-center">
      <nav className="flex gap-10">
        <Link href={"/"}>Logo</Link>
        <Link href={"menu/"}>Menu</Link>
        <span>Rewards</span>
        <span>Gift Cards</span>
        <span>Find a store</span>
        <span>Sign in</span>
        <span>Join now</span>
      </nav>
    </header>
  );
}
