import type { Metadata } from "next";

import { NotFoundContent } from "@/components/not-found-content";
import { SiteShell } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <SiteShell>
      <NotFoundContent />
    </SiteShell>
  );
}
