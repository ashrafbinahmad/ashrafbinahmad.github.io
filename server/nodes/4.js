

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/test/_page.svelte.js')).default;
export const imports = ["app/immutable/nodes/4.BtFHhPq3.js","app/immutable/chunks/scheduler.D47Qt2U3.js","app/immutable/chunks/index.9Jzmy_or.js","app/immutable/chunks/logoMarquee.frOo74SW.js"];
export const stylesheets = ["app/immutable/assets/logoMarquee.CqZQEhIB.css"];
export const fonts = [];
