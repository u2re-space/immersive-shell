/**
 * HTTPS demo: immersive shell + default view `viewer` (markdown-view).
 * NOTE: Prepended Vite aliases in vite.config.js mirror CrossWord `shared/*` → subsystem/src.
 */
import "fest/icon";
import { bootImmersive } from "boot/ts/BootLoader";

const app = document.querySelector<HTMLElement>("#app") ?? document.body;

void bootImmersive(app, "viewer", { rememberChoice: false }).catch((err) => {
    console.error(err);
    app.textContent = err instanceof Error ? err.message : String(err);
});
