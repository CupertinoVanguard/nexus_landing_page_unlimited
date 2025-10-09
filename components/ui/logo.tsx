import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex shrink-0" aria-label="Nexus">
      <span
        className="text-blue-300 tracking-tighter text-2xl md:text-3xl font-semibold font-nacelle"
        style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
      >
        Nexus
      </span>
    </Link>
  );
}
