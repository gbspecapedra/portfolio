import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";

import { Button } from "@/components/ui/button";
import { homeSectionIds } from "@/data/site";

export function NavButton() {
  return (
    <Button
      asChild
      variant="outline"
      size="sm"
      className="min-h-11 min-w-11 rounded-xl bg-background/75 px-3.5 font-semibold motion-reduce:transition-none"
    >
      <Link href={`/#${homeSectionIds.projects}`} prefetch={false}>
        <span className="flex items-center gap-2">
          <FiArrowLeft aria-hidden="true" className="size-4" />
          Back to projects
        </span>
      </Link>
    </Button>
  );
}
