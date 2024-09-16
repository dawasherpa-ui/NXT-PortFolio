import { aboutYou } from "@/lib/data";
import { Github, Linkedin } from "lucide-react";
import { Icon } from "@iconify/react";
import Link from "next/link";
export default function Sidebar() {
  return (
    <div className="rounded-xl border bg-card text-card-foreground shadow flex flex-col space-y-2 p-4 h-fit static md:sticky top-24">
      {/* Title/Name */}
      <p className="font-semibold leading-none tracking-tight">
        {aboutYou.name}
      </p>
      {/* Description */}
      <p className="text-sm text-muted-foreground tracking-tight">
        {aboutYou.description}
      </p>
      {/* Social Media Icons */}
      <div className="flex space-x-2">
        <Link href="https://github.com/dawasherpa-ui">
          <Github />
        </Link>
        <Link href="https://x.com/dawashe56776442">
          <Icon icon="ri:twitter-x-fill" className="w-6 h-6"/>
        </Link>
        <Link href="https://www.linkedin.com/in/dawa-sherpa-650b60283/">
          <Linkedin />
        </Link>
      </div>
    </div>
  );
}
