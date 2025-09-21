import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      {/* <Image src="/logo.png" height="60" width="60" alt="The Wild Oasis logo" /> */}
      <Image
        src={logo}
        alt="The Wild Oasis logo"
        className="h-16 w-16 max-sm:h-8 max-sm:w-8"
        priority
      />
      <span className="text-xl max-sm:text-lg font-semibold text-primary100">
        The Wild Oasis
      </span>
    </Link>
  );
}

export default Logo;
