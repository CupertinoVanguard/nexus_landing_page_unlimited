import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex shrink-0" aria-label="Nexus">
      <span
        className="tracking-tighter text-2xl md:text-3xl font-semibold font-nacelle"
        style={{ fontFamily: "Helvetica, Arial, sans-serif", color: "#1e3a5f" }}
      >
        Nexus
      </span>
    </Link>
  );
}
