import singleSpaSvelte from "single-spa-svelte";
import App from "./App.svelte";
import styleguideImport from "./styleguideImport.js";

const svelteLifecycles = singleSpaSvelte({
  component: App,
});

export const { bootstrap, mount, unmount } = svelteLifecycles;
