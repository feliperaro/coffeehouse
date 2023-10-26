import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav className="flex m-5 h-10 justify-around">
        <div className="w-1/5 pl-16">
          <Link href={"/"}>
            <Image
              height={150}
              width={50}
              src={"/images/logo.png"}
              alt="Logo"
            />
          </Link>
        </div>
        <div className="flex gap-5 w-3/5 justify-center pt-3">
          <Link href={"/"} className="font-semibold hover:text-green-800">
            HOME
          </Link>
          <Link className="font-semibold hover:text-green-800" href={"menu/"}>
            MENU
          </Link>
        </div>
        <div className="flex h-20 w-1/5 gap-5 justify-center content-center pt-3">
          <span className="font-semibold hover:text-green-800">
            Find a store
          </span>
          <span className="font-semibold hover:text-green-800">Sign in</span>
          <span className="font-semibold hover:text-green-800">Join now</span>
        </div>
      </nav>
    </header>
  );
}
