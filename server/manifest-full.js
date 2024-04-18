export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "app",
	appPath: "app",
	assets: new Set([".nojekyll","favicon.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		client: {"start":"app/immutable/entry/start.D7sFnR7x.js","app":"app/immutable/entry/app.Df6RFX9p.js","imports":["app/immutable/entry/start.D7sFnR7x.js","app/immutable/chunks/entry.Cs0on7-v.js","app/immutable/chunks/scheduler.D47Qt2U3.js","app/immutable/chunks/index.Bp8Viv0Y.js","app/immutable/entry/app.Df6RFX9p.js","app/immutable/chunks/scheduler.D47Qt2U3.js","app/immutable/chunks/index.9Jzmy_or.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/test",
				pattern: /^\/test\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
