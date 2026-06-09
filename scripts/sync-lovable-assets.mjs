// Downloads Lovable-hosted assets (referenced by src/assets/*.asset.json via /__l5e/... URLs)
// into public/__l5e/... so the self-hosted Vercel build serves them directly, instead of
// 404ing against Lovable's asset pipeline.
//
// Re-run this whenever you add or change images in Lovable:  bun run sync-assets
// Override the source if your Lovable domain differs:  LOVABLE_ASSET_BASE=https://<your>.lovable.app bun run sync-assets

import { readdir, readFile, mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";

const BASE = process.env.LOVABLE_ASSET_BASE || "https://skyland-beacon-build.lovable.app";
const ASSETS_DIR = "src/assets";
const PUBLIC_DIR = "public";

const files = (await readdir(ASSETS_DIR)).filter((f) => f.endsWith(".asset.json"));
let ok = 0;
let fail = 0;

for (const f of files) {
  const meta = JSON.parse(await readFile(join(ASSETS_DIR, f), "utf8"));
  if (!meta.url) continue;
  const dest = join(PUBLIC_DIR, meta.url); // meta.url is like /__l5e/assets-v1/<id>/<name>
  try {
    const res = await fetch(BASE + meta.url);
    if (!res.ok) {
      console.error(`FAIL  ${res.status}  ${meta.url}`);
      fail++;
      continue;
    }
    const buf = Buffer.from(await res.arrayBuffer());
    await mkdir(dirname(dest), { recursive: true });
    await writeFile(dest, buf);
    console.log(`ok   ${String(buf.length).padStart(8)}  ${meta.url}`);
    ok++;
  } catch (err) {
    console.error(`ERROR ${meta.url}: ${err.message}`);
    fail++;
  }
}

console.log(`\nDownloaded ${ok} asset(s), ${fail} failed.`);
if (fail) process.exit(1);
