import * as server from '../entries/pages/test/_layout.server.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/test/+layout.server.js";
export const imports = ["app/immutable/nodes/2.D-9H4RiQ.js","app/immutable/chunks/scheduler.D47Qt2U3.js","app/immutable/chunks/index.9Jzmy_or.js"];
export const stylesheets = [];
export const fonts = [];
