import { revalidateTag } from "next/cache";

import { contentTag, repositoryName } from "@/lib/prismic/client";
import { clearProjectIndex } from "@/lib/prismic/project-index";
import { handlePrismicWebhook } from "@/lib/prismic/webhook";

export function POST(request: Request) {
  return handlePrismicWebhook(request, process.env.PRISMIC_WEBHOOK_SECRET?.trim(), repositoryName, () => {
    revalidateTag(contentTag, { expire: 0 });
    clearProjectIndex();
  });
}
