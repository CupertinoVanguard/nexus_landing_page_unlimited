import Link from "next/link";
import Image from "next/image";
import LogoMark from "@/public/images/nexuslogo (3) (1).png";

export default function Logo() {
  return (
    <Link
      href="/"
      className="inline-flex shrink-0 items-center gap-2"
      aria-label="Nexus"
    >
      <Image
        src={LogoMark}
        alt=""
        width={26}
        height={26}
        className="h-[26px] w-[26px] object-contain"
        priority
      />
      <span className="text-[19px] font-semibold tracking-tight text-fg">
        nexus
      </span>
    </Link>
  );
}
