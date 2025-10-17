import { ModeToggle } from "@/components/theme-toggle";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h1>J'apprend Next.js</h1>
      <Link href="/formations" className="text-blue-500 underline">
        Plan de formations 
      </Link>
      <ModeToggle />
    </div>
  );
}
