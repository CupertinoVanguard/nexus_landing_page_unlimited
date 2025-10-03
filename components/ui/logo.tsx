import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex shrink-0" aria-label="Nexus">
      <span
        className="text-white tracking-tighter text-3xl md:text-4xl font-bold"
        style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
      >
        Nexus
      </span>
    </Link>
  );
}
