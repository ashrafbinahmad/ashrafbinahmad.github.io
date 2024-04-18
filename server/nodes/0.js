import * as server from '../entries/pages/_layout.server.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.js";
export const imports = ["app/immutable/nodes/0.DL3va7St.js","app/immutable/chunks/scheduler.D47Qt2U3.js","app/immutable/chunks/index.9Jzmy_or.js"];
export const stylesheets = ["app/immutable/assets/0.DkhK5Zv8.css"];
export const fonts = [];
