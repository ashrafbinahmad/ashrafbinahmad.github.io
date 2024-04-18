import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { L as LogoMarquee } from "../../../chunks/logoMarquee.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(LogoMarquee, "LogoMarquee").$$render($$result, { bgColor: "black", class: "h-[20rem]" }, {}, {})}`;
});
export {
  Page as default
};
