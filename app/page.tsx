import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href={"/login"}>Go Login</Link>
    </div>
  )
}
