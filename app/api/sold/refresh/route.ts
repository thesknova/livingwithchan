import { NextResponse } from "next/server";
import { revalidatePath, revalidateTag } from "next/cache";

// Called by the CRM right after Chan publishes, edits or unpublishes a sold
// post, so /sold updates on the next visit instead of after the ten-minute
// cache. Unauthenticated on purpose: all it does is make the site re-read a
// public list, so the worst a stranger can do is cause an extra fetch.
export async function POST() {
  // expire: 0 rather than "max": the next visitor should get the fresh list,
  // not one more stale copy while it refetches in the background.
  revalidateTag("sold-posts", { expire: 0 });
  revalidatePath("/sold");
  return NextResponse.json({ ok: true, revalidated: new Date().toISOString() });
}
