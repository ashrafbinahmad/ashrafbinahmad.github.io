import { c as create_ssr_component, a as subscribe, b as add_attribute, d as each, e as escape, v as validate_component } from "../../chunks/ssr.js";
import { w as writable } from "../../chunks/index.js";
import { L as LogoMarquee } from "../../chunks/logoMarquee.js";
const layer0 = "/app/immutable/assets/layer-0.7YbHX49I.png";
const layer1 = "/app/immutable/assets/layer-1.CcgZTEyL.png";
const layer2 = "/app/immutable/assets/layer-2.DX2iGk4a.png";
const PicProfile = "/app/immutable/assets/profile%20photo.B27hZfwy.webp";
const profile = {
  "about": "I’m an independent and passionate full stack developer, self-taught without a formal computer science degree, curious to learn more about developing scalable distributed systems, loves problem solving and cares about writing readable as well as maintainable code.",
  "skillCategories": [
    {
      groupName: "Languages/",
      skills: [
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/240px-HTML5_logo_and_wordmark.svg.png",
          alt: "html"
        },
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg",
          alt: "JavaScript"
        },
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/240px-CSS3_logo_and_wordmark.svg.png",
          alt: "CSS"
        },
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/240px-Node.js_logo.svg.png",
          alt: "Node.js"
        },
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/242px-Python-logo-notext.svg.png",
          alt: "Python"
        },
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/C_Sharp_Logo_2023.svg/256px-C_Sharp_Logo_2023.svg.png",
          alt: "C#"
        }
      ]
    },
    {
      groupName: "Frameworks/",
      skills: [
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
          alt: "Express.js"
        },
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/240px-Bootstrap_logo.svg.png",
          alt: "Bootstrap"
        },
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Tailwind_CSS_logo.svg/400px-Tailwind_CSS_logo.svg.png",
          alt: "Tailwind"
        },
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/128px-Svelte_Logo.svg.png",
          alt: "Svelte"
        },
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/240px-Nextjs-logo.svg.png",
          alt: "Next.js"
        },
        {
          src: "https://nestjs.com/logo-small.ede75a6b.svg",
          alt: "Nest.js"
        }
      ]
    },
    {
      groupName: "Libraries/",
      skills: [
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/240px-React_Logo_SVG.svg.png",
          alt: "React"
        },
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Firebase_Logo.svg/440px-Firebase_Logo.svg.png",
          alt: "Firebase"
        },
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Swagger-logo.png",
          alt: "Swagger"
        },
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Cypress_Software.png",
          alt: "Cypress"
        },
        {
          src: "https://raw.githubusercontent.com/chakra-ui/chakra-ui/main/media/logo-colored@2x.png?raw=true",
          alt: "Chakra UI"
        },
        {
          src: "https://storage.googleapis.com/dycr-web/image/topic/chartjs/chartjs.png",
          alt: "Chart js"
        },
        {
          src: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/JQuery_logo.svg/440px-JQuery_logo.svg.png",
          alt: "JQuery"
        },
        {
          src: "https://miro.medium.com/v2/resize:fit:1050/1*OYpEW3PMltGC2MVvJ-5QTw.png",
          alt: "Mongoose"
        },
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Redux_Logo.png/240px-Redux_Logo.png",
          alt: "Redux"
        },
        {
          src: "https://user-images.githubusercontent.com/8939680/57233884-20344080-6fe5-11e9-8df3-0df1282e1574.png",
          alt: "Axios"
        }
      ]
    },
    {
      groupName: "Databases/",
      skills: [
        {
          src: "https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/MySQL_logo.svg/200px-MySQL_logo.svg.png",
          alt: "MySQL"
        },
        {
          src: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5a/MongoDB_Fores-Green.svg/500px-MongoDB_Fores-Green.svg.png",
          alt: "MongoDB"
        },
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/SQLite370.svg/440px-SQLite370.svg.png",
          alt: "SQLite"
        },
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Firebase_Logo.svg/440px-Firebase_Logo.svg.png",
          alt: "Firebase"
        }
      ]
    },
    {
      groupName: "AWS/",
      skills: [
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/AWS_Simple_Icons_Compute_Amazon_EC2_Instances.svg/400px-AWS_Simple_Icons_Compute_Amazon_EC2_Instances.svg.png",
          alt: "EC2"
        },
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Amazon-S3-Logo.svg/200px-Amazon-S3-Logo.svg.png",
          alt: "S3 Bucket"
        }
      ]
    },
    {
      groupName: "Dev tools/",
      skills: [
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Visual_Studio_Code_1.35_icon.png/128px-Visual_Studio_Code_1.35_icon.png",
          alt: "VS Code"
        },
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Git-logo.svg/300px-Git-logo.svg.png",
          alt: "Git"
        },
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/400px-GitHub_Invertocat_Logo.svg.png",
          alt: "GitHub"
        },
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Postman_%28software%29.png/240px-Postman_%28software%29.png",
          alt: "Postman"
        },
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/128px-Figma-logo.svg.png",
          alt: "Figma"
        },
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/240px-Npm-logo.svg.png",
          alt: "npm"
        },
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Cypress_Software.png",
          alt: "Cypress"
        }
      ]
    }
  ],
  "projects": [
    {
      "projectName": "E-Cart",
      "projectType": "E-commerce project",
      "projectTechStack": "Nest.js, JWT, Prisma, PostgreSQL, Swagger, Validation pipelines, Multer, Next.js, Tailwind CSS, Redux, Lucide react, and ShadCN.",
      "projectDetails": `It is an e-commerce project: with accessibility to customers and sellers; Customers can buy, add to carts, order the products which are provided by the seller; And sellers can showcase their products, add brands and product categories they sell. <br>
                Implemented all the necessary e-commerce functionalities like product listing, cart, orders, etc. <br>
                This project is designed and developed with scalability & maintainability in mind. <br>
                The whole app is split into 7 services namely, Authentication, Products, Brands, Product categories, Sellers, Customers, and Cart-items. <br>
                In this solo project, I used Nest.js for REST API building documenting with Swagger, and Next.js, which is React.js based framework for frontend development.
                `
    },
    {
      "projectName": `Resource
                Mangmnt.
                Software`,
      "projectType": "Arts fest management system",
      "projectTechStack": "Next.js, pure CSS, cookies, axios, Swiper, xlsx, Gsap, and more",
      "projectDetails": `> A Resource Management Software (RMS) for managing the inter-collegiate national arts fest conducted by Darul Huda Islamic University, namely Sibaq '22 National Arts Fest. <br>
            > In this long-term project, worked as frontend developer. <br>
            > Used Next.js for frontend; pure CSS was used for styling of the whole project. <br>
            > The team of 3 frontend developers, and 4 backend developers worked under KT Sulaim Hudawi, Senior Software Engineer at a US-based tech firm. <br>
            > Features: <br>
              o Input marks from controllers’ side. <br>
              o Candidate, program, topic and more registrations from institution side. <br>
              o Check results, view charts, view top 10 scorers, view Kala Pratipas from public side. <br>
              o The project included also a TV screen which shows score tables of all institutions and automatically updates on announcing results. <br>
              o This project included enormous efforts and features we the team worked on. <br>`
    }
  ],
  "education": [
    {
      "degree": "Bachelor of Technology in Computer Science and Engineering",
      "institution": "Darul Huda Islamic University",
      "year": "2018-2022"
    },
    {
      "degree": "Higher Secondary Education",
      "institution": "Darul Huda Islamic University",
      "year": "2016-2018"
    },
    {
      "degree": "Higher Secondary Education",
      "institution": "Darul Huda Islamic University",
      "year": "2016-2018"
    },
    {
      "degree": "Higher Secondary Education",
      "institution": "Darul Huda Islamic University",
      "year": "2016-2018"
    }
  ]
};
const scrollY = writable(0);
const mainRoot = writable();
const projectSection = writable();
const showingAllCertificates = writable(false);
const css$1 = {
  code: "section.svelte-1e0uezd.svelte-1e0uezd{scroll-snap-align:start;scroll-snap-stop:always}menu.svelte-1e0uezd li.svelte-1e0uezd{overflow:hidden;border-radius:5px;border:solid 1px transparent;&:hover {\n			border: solid 1px #FF7E4A;\n		};&::before {\n			content: '';\n			position: absolute;\n			top: 0;\n			left: 0;\n			width: 200%;\n			height: 300%;\n			z-index: -1;\n			transition: all 1s;\n			width: 0;\n			background: #FF7E4A;\n			transform: rotate(-45deg) translate(-20%, -50%);\n		};&:hover::before {\n			width: 200%;\n		}}",
  map: `{"version":3,"file":"header.svelte","sources":["header.svelte"],"sourcesContent":["<script>\\n\\timport layer0 from '$lib/images/layer-0.png';\\n\\timport layer1 from '$lib/images/layer-1.png';\\n\\timport layer2 from '$lib/images/layer-2.png';\\n\\timport PicProfile from '$lib/images/profile photo.webp';\\n\\timport PicParallaxFlat from '$lib/images/parallax flat.png';\\n\\timport profileData from '../profile.js';\\n\\timport { typewriter } from '$lib/transitions.js';\\n\\timport { onMount } from 'svelte';\\n\\timport { scrollY } from '../store.js';\\n\\n\\tlet isVisible = false;\\n\\tonMount(() => {\\n\\t\\tisVisible = true;\\n\\t});\\n\\tlet headerSection;\\n\\tlet menuItems = ['About', 'Skills', 'Projects', 'Contact'];\\n\\tlet parallaxLayers = [\\n\\t\\t{\\n\\t\\t\\timage: layer0,\\n\\t\\t\\ttranslate: '4',\\n\\t\\t\\tscale: 1\\n\\t\\t},\\n\\t\\t{\\n\\t\\t\\timage: layer1,\\n\\t\\t\\ttranslate: '2',\\n\\t\\t\\tscale: 1\\n\\t\\t},\\n\\t\\t{\\n\\t\\t\\timage: layer2,\\n\\t\\t\\ttranslate: '1',\\n\\t\\t\\tscale: 1\\n\\t\\t}\\n\\t\\t// {\\n\\t\\t// \\timage: layer3,\\n\\t\\t// \\ttranslate: ''\\n\\t\\t// },\\n\\t];\\n<\/script>\\n\\n<section\\n\\tclass=\\"bg-color-1 min-h-screen w-screen relative snap-start overflow-hidden z-20 top-0 transition-all\\"\\n\\tbind:this={headerSection}\\n>\\n\\t<nav class=\\"container m-auto text-xl flex justify-between items-center h-[5rem] relative z-10\\">\\n\\t\\t<div class=\\"left text-2xl\\">Ash/</div>\\n\\t\\t<div class=\\"right\\">\\n\\t\\t\\t<menu class=\\"flex gap-2\\">\\n\\t\\t\\t\\t{#each menuItems as item}\\n\\t\\t\\t\\t\\t<a href=\\"#{item}\\">\\n\\t\\t\\t\\t\\t\\t<li class=\\"inline-block px-4 py-2 cursor-pointer relative z-20 transition-all\\">\\n\\t\\t\\t\\t\\t\\t\\t{item}\\n\\t\\t\\t\\t\\t\\t</li>\\n\\t\\t\\t\\t\\t</a>\\n\\t\\t\\t\\t{/each}\\n\\t\\t\\t</menu>\\n\\t\\t</div>\\n\\t</nav>\\n\\t<div class=\\"mt-[2rem] w-screen text-center relative z-10\\">\\n\\t\\t<img class=\\"h-[172px] m-auto rounded-full\\" src={PicProfile} alt=\\"\\" />\\n\\t\\t<h1 class=\\"text-[3.5rem]\\">Muhammed Ashraf</h1>\\n\\t\\t{#if isVisible}\\n\\t\\t\\t<h2 class=\\"text-lg text-color-3\\" transition:typewriter>FULL-STACK DEVELOPER</h2>\\n\\t\\t\\t<p class=\\"text-sm font-sans m-auto max-w-[38rem]\\" transition:typewriter={{}}>\\n\\t\\t\\t\\t{profileData.about}\\n\\t\\t\\t</p>\\n\\t\\t{:else}\\n\\t\\t\\t<h2 class=\\"text-lg text-color-3\\">|</h2>\\n\\t\\t{/if}\\n\\t</div>\\n\\t<div class=\\"z-0\\">\\n\\t\\t{#each parallaxLayers as layer}\\n\\t\\t\\t<img\\n\\t\\t\\t\\tclass=\\"scale-125 absolute bottom-0 w-full\\"\\n\\t\\t\\t\\tstyle=\\"transform: \\n\\t\\t\\t\\t\\ttranslate(0,{(-$scrollY * layer.translate) / 13 / (parallaxLayers.length - 1)}px) \\n\\t\\t\\t\\t\\tscale({$scrollY / 5000 + 1 * layer.scale}); \\"\\n\\t\\t\\t\\tsrc={layer.image}\\n\\t\\t\\t\\talt=\\"parallax layer\\"\\n\\t\\t\\t/>\\n\\t\\t{/each}\\n\\t</div>\\n\\t<!-- <img class=\\"absolute bottom-0 w-full\\" src={PicParallaxFlat} alt=\\"\\" /> -->\\n</section>\\n<slot />\\n\\n<style lang=\\"postcss\\">\\n\\t/* main {\\n\\t\\tscroll-snap-type: y proximity;\\n\\t\\toverflow-y: scroll;\\n\\t\\t\\n\\t} */\\n\\tsection {\\n\\t\\tscroll-snap-align: start;\\n\\t\\tscroll-snap-stop: always;\\n\\t}\\n\\tmenu li {\\n\\t\\toverflow: hidden;\\n\\t\\tborder-radius: 5px;\\n\\t\\tborder: solid 1px transparent;\\n\\t\\t&:hover {\\n\\t\\t\\tborder: solid 1px #FF7E4A;\\n\\t\\t}\\n\\t\\t&::before {\\n\\t\\t\\tcontent: '';\\n\\t\\t\\tposition: absolute;\\n\\t\\t\\ttop: 0;\\n\\t\\t\\tleft: 0;\\n\\t\\t\\twidth: 200%;\\n\\t\\t\\theight: 300%;\\n\\t\\t\\tz-index: -1;\\n\\t\\t\\ttransition: all 1s;\\n\\t\\t\\twidth: 0;\\n\\t\\t\\tbackground: #FF7E4A;\\n\\t\\t\\ttransform: rotate(-45deg) translate(-20%, -50%);\\n\\t\\t}\\n\\t\\t&:hover::before {\\n\\t\\t\\twidth: 200%;\\n\\t\\t}\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AA4FC,qCAAQ,CACP,iBAAiB,CAAE,KAAK,CACxB,gBAAgB,CAAE,MACnB,CACA,mBAAI,CAAC,iBAAG,CACP,QAAQ,CAAE,MAAM,CAChB,aAAa,CAAE,GAAG,CAClB,MAAM,CAAE,KAAK,CAAC,GAAG,CAAC,WAAW,CAC7B,CAAC,MAAM,CAAC;AACV,GAAG,QAAQ,KAAK,CAAC,GAAG,CAAC,OAAO;AAC5B,GAAG,CACD,CAAC,QAAQ,CAAC;AACZ,GAAG,SAAS,EAAE;AACd,GAAG,UAAU,QAAQ;AACrB,GAAG,KAAK,CAAC;AACT,GAAG,MAAM,CAAC;AACV,GAAG,OAAO,IAAI;AACd,GAAG,QAAQ,IAAI;AACf,GAAG,SAAS,EAAE;AACd,GAAG,YAAY,GAAG,CAAC,EAAE;AACrB,GAAG,OAAO,CAAC;AACX,GAAG,YAAY,OAAO;AACtB,GAAG,WAAW,OAAO,MAAM,CAAC,CAAC,UAAU,IAAI,CAAC,CAAC,IAAI,CAAC;AAClD,GAAG,CACD,CAAC,MAAM,QAAQ,CAAC;AAClB,GAAG,OAAO,IAAI;AACd,GACC"}`
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $scrollY, $$unsubscribe_scrollY;
  $$unsubscribe_scrollY = subscribe(scrollY, (value) => $scrollY = value);
  let headerSection;
  let menuItems = ["About", "Skills", "Projects", "Contact"];
  let parallaxLayers = [
    { image: layer0, translate: "4", scale: 1 },
    { image: layer1, translate: "2", scale: 1 },
    { image: layer2, translate: "1", scale: 1 }
  ];
  $$result.css.add(css$1);
  $$unsubscribe_scrollY();
  return `<section class="bg-color-1 min-h-screen w-screen relative snap-start overflow-hidden z-20 top-0 transition-all svelte-1e0uezd"${add_attribute("this", headerSection, 0)}><nav class="container m-auto text-xl flex justify-between items-center h-[5rem] relative z-10"><div class="left text-2xl" data-svelte-h="svelte-z3rqen">Ash/</div> <div class="right"><menu class="flex gap-2 svelte-1e0uezd">${each(menuItems, (item) => {
    return `<a href="${"#" + escape(item, true)}"><li class="inline-block px-4 py-2 cursor-pointer relative z-20 transition-all svelte-1e0uezd">${escape(item)}</li> </a>`;
  })}</menu></div></nav> <div class="mt-[2rem] w-screen text-center relative z-10"><img class="h-[172px] m-auto rounded-full"${add_attribute("src", PicProfile, 0)} alt=""> <h1 class="text-[3.5rem]" data-svelte-h="svelte-88r9ua">Muhammed Ashraf</h1> ${`<h2 class="text-lg text-color-3" data-svelte-h="svelte-miit8x">|</h2>`}</div> <div class="z-0">${each(parallaxLayers, (layer) => {
    return `<img class="scale-125 absolute bottom-0 w-full" style="${"transform: translate(0," + escape(-$scrollY * layer.translate / 13 / (parallaxLayers.length - 1), true) + "px) scale(" + escape($scrollY / 5e3 + 1 * layer.scale, true) + ");"}"${add_attribute("src", layer.image, 0)} alt="parallax layer">`;
  })}</div> </section> ${slots.default ? slots.default({}) : ``}`;
});
const Skills = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let skillCategories = profile.skillCategories;
  return `<section id="Skills" class="bg-color-4 min-h-screen grid snap-start snap-always"><div class="container _max-w-[70rem] m-auto py-5 heading text-white"><h3 class="text-[3rem] border-b border-color-2" data-svelte-h="svelte-1urkuii">Skills</h3> <ul class="grid grid-cols-1 h-[40rem] justify-between mt-4">${each(skillCategories, (skillCategory) => {
    return `<li class="grid grid-cols-[auto_1fr] text-[40px] text-color-1"><h5>${escape(skillCategory.groupName)}</h5> <div>${validate_component(LogoMarquee, "LogoMarquee").$$render(
      $$result,
      {
        class: "mt-1",
        bgColor: "#2D112A",
        logoes: skillCategory.skills
      },
      {},
      {}
    )}</div> </li>`;
  })}</ul></div></section>`;
});
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { class: className } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return `<button${add_attribute("class", `bg-color-3 p-[10px] rounded-lg text-white hover:bg-color-2 transition-all my-1 ${className}`, 0)}>${slots.default ? slots.default({}) : ``}</button>`;
});
const PicZaitooncampus = "/app/immutable/assets/zaitooncampus.in.DxUNOJ-C.webp";
const PicEcart = "/app/immutable/assets/e-cart.BNSANv6e.webp";
const ProjectsHead = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $projectSection, $$unsubscribe_projectSection;
  $$unsubscribe_projectSection = subscribe(projectSection, (value) => $projectSection = value);
  $$unsubscribe_projectSection();
  return `<section id="Projects" class="min-h-screen grid grid-cols-2 gap-3 snap-start relative bg-color-1"${add_attribute("this", $projectSection, 0)}><div class="left-headings my-auto ml-5 grid gap-3"><h3 class="text-[77px] leading-[77px]" data-svelte-h="svelte-1o4p0hi">Projects</h3> <p class="text-[21px]" data-svelte-h="svelte-dpkbtw">Sibaq.in / E-Cart / Zaitooncampus.in / ...</p> <div class="buttons text-[23px]">${validate_component(Button, "Button").$$render($$result, { class: "" }, {}, {
    default: () => {
      return `Contact Me`;
    }
  })} <br> ${validate_component(Button, "Button").$$render($$result, { class: "" }, {}, {
    default: () => {
      return `Hire Me`;
    }
  })}</div></div> <div class="right-images" data-svelte-h="svelte-1gd3xki"><div class="images relative bg-black top-[35vh] mr-16">dsaf
			<img class="absolute translate-y-[calc(-50%-2rem)] opacity-60 translate-x-5 shadow-lg shadow-color-2 rounded border _rotate-3 hover:rotate-6 transition-all"${add_attribute("src", PicEcart, 0)} alt=""> <img class="absolute -translate-y-1/2 shadow-lg shadow-color-2 rounded border hover:rotate-2 transition-all"${add_attribute("src", PicZaitooncampus, 0)} alt=""></div></div> <div class="absolute bottom-0 text-center w-screen pb-8" data-svelte-h="svelte-1w9tmt1">Scroll to show some of my project</div></section>`;
});
const Project = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { projectName } = $$props;
  let { projectType } = $$props;
  let { projectTechStack } = $$props;
  let { projectDetails } = $$props;
  if ($$props.projectName === void 0 && $$bindings.projectName && projectName !== void 0)
    $$bindings.projectName(projectName);
  if ($$props.projectType === void 0 && $$bindings.projectType && projectType !== void 0)
    $$bindings.projectType(projectType);
  if ($$props.projectTechStack === void 0 && $$bindings.projectTechStack && projectTechStack !== void 0)
    $$bindings.projectTechStack(projectTechStack);
  if ($$props.projectDetails === void 0 && $$bindings.projectDetails && projectDetails !== void 0)
    $$bindings.projectDetails(projectDetails);
  return `<div class="container max-w-[80rem] m-auto grid grid-cols-[1fr_4fr] gap-6 h-full min-h-96 snap-start relative "><div class="left h-full my-auto min-w-[200px] grid gap-1 justify-center content-center"><h4 class="text-[55px] leading-[40px]">${escape(projectName)}</h4> <h5 class="text-[18px] text-color-2">${escape(projectType)}</h5> <h6 class="text-[15px] font-sans italic font-bold">${escape(projectTechStack)}</h6></div> <div class="right grid content-center font-sans text-[17px]"><!-- HTML_TAG_START -->${projectDetails}<!-- HTML_TAG_END --></div></div>`;
});
const Education = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="_bg-color-1 min-h-[25vh] w-screen relative overflow-hidden z-20 top-0 transition-all snap-start bg-color-4 text-white pt-10" id="education"><h3 class="text-[39px] text-center" data-svelte-h="svelte-u1ewmi">Education</h3> <div class="bg-color-2 w-full h-2 mt-5 opacity-50"></div> <div class="container ml-5 grid grid-cols-4">${each(profile.education, (edu) => {
    return `<div class="education"><div class="w-4 h-4 rounded-full bg-color-2 -mt-3 opacity-50"></div> <div class="mt-5"><h5 class="text-color-2">${escape(edu.year)}</h5> <h5 class="text-[15px]">${escape(edu.degree)} <br> ${escape(edu.institution)}</h5></div> </div>`;
  })}</div></section>`;
});
const PicCert1 = "/app/immutable/assets/1.DnPbRhu0.webp";
const PicCert4 = "/app/immutable/assets/4.DyQELp4z.webp";
const PicCert5 = "/app/immutable/assets/5.Fg0i45Z5.webp";
const PicCert6 = "/app/immutable/assets/6.BfFOt5SN.webp";
const PicCert7 = "/app/immutable/assets/7.CSGQgC9W.webp";
const PicCert8 = "/app/immutable/assets/8.CQC2LbqL.webp";
const PicCert10 = "/app/immutable/assets/10.FX00ccw1.webp";
const PicCert11 = "/app/immutable/assets/11.BDH6BE4l.webp";
const PicCert12 = "/app/immutable/assets/12.xP5C05Wl.webp";
const PicCert13 = "/app/immutable/assets/13.CkpM-3aw.webp";
const PicCert14 = "/app/immutable/assets/14.7x5WZsDc.webp";
const PicCert15 = "/app/immutable/assets/15.79NVRG89.webp";
const css = {
  code: ".image-list.show-black.svelte-23unm7::after{content:'';position:absolute;width:100%;height:100%;-webkit-user-select:none;-moz-user-select:none;user-select:none;pointer-events:none;background:linear-gradient(transparent, #2D112A)}",
  map: `{"version":3,"file":"certificates.svelte","sources":["certificates.svelte"],"sourcesContent":["<script>\\n\\timport PicCert1 from '$lib/images/certificates/1.webp';\\n\\timport PicCert4 from '$lib/images/certificates/4.webp';\\n\\timport PicCert5 from '$lib/images/certificates/5.webp';\\n\\timport PicCert6 from '$lib/images/certificates/6.webp';\\n\\timport PicCert7 from '$lib/images/certificates/7.webp';\\n\\timport PicCert8 from '$lib/images/certificates/8.webp';\\n\\timport PicCert10 from '$lib/images/certificates/10.webp';\\n\\timport PicCert11 from '$lib/images/certificates/11.webp';\\n\\timport PicCert12 from '$lib/images/certificates/12.webp';\\n\\timport PicCert13 from '$lib/images/certificates/13.webp';\\n\\timport PicCert14 from '$lib/images/certificates/14.webp';\\n\\timport PicCert15 from '$lib/images/certificates/15.webp';\\n\\timport { blur, fade, fly, scale } from 'svelte/transition';\\n\\timport { AngleDownOutline } from 'flowbite-svelte-icons';\\n\\timport { showingAllCertificates } from '../store';\\n\\n\\tlet images = [\\n\\t\\t{ src: PicCert1, alt: 'Image 1' },\\n\\t\\t{ src: PicCert4, alt: 'Image 2' },\\n\\t\\t{ src: PicCert5, alt: 'Image 2' },\\n\\t\\t{ src: PicCert6, alt: 'Image 2' },\\n\\t\\t{ src: PicCert7, alt: 'Image 2' },\\n\\t\\t{ src: PicCert8, alt: 'Image 2' },\\n\\t\\t{ src: PicCert10, alt: 'Image 2' },\\n\\t\\t{ src: PicCert11, alt: 'Image 2' },\\n\\t\\t{ src: PicCert12, alt: 'Image 2' },\\n\\t\\t{ src: PicCert13, alt: 'Image 2' },\\n\\t\\t{ src: PicCert14, alt: 'Image 2' },\\n\\t\\t{ src: PicCert15, alt: 'Image 2' }\\n\\t\\t// { src: 'image3.jpg', alt: 'Image 3' }\\n\\t\\t// Add more images as needed\\n\\t];\\n\\n\\tlet isDisplayOpen = false;\\n\\tlet displayImage = { src: '', alt: '' };\\n\\n\\tfunction handleCertificateClick() {\\n\\t\\tdisplayImage = { src, alt };\\n\\t\\tisDisplayOpen = true;\\n\\t}\\n\\tfunction handleKeyDown(event) {\\n\\t\\tif (event.key === 'Enter' || event.key === ' ') {\\n\\t\\t\\thandleCertificateClick();\\n\\t\\t}\\n\\t}\\n<\/script>\\n\\n<section\\n\\tid=\\"Certificates\\"\\n\\tclass=\\"min-h-[70vh] w-screen relative overflow-hidden z-20 top-0 transition-all bg-color-4\\"\\n>\\n\\t<div class=\\"container m-auto p-10\\">\\n\\t\\t<h3 class=\\"text-[39px] text-center text-white\\">Awards & Certifications</h3>\\n\\t\\t<div\\n\\t\\t\\tclass=\\"image-list flex flex-wrap justify-center gap-3 py-5 overflow-hidden transition-all {$showingAllCertificates\\n\\t\\t\\t\\t? 'max-h-none'\\n\\t\\t\\t\\t: 'max-h-[450px] show-black'}\\"\\n\\t\\t>\\n\\t\\t\\t{#each images as { src, alt }, i}\\n\\t\\t\\t\\t<button\\n\\t\\t\\t\\t\\ton:keydown={handleKeyDown}\\n\\t\\t\\t\\t\\ton:click={() => {\\n\\t\\t\\t\\t\\t\\tdisplayImage = { src, alt };\\n\\t\\t\\t\\t\\t\\tisDisplayOpen = true;\\n\\t\\t\\t\\t\\t}}\\n\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t<img\\n\\t\\t\\t\\t\\t\\tclass=\\"w-auto max-h-[200px] object-cover opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer\\"\\n\\t\\t\\t\\t\\t\\t{src}\\n\\t\\t\\t\\t\\t\\t{alt}\\n\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t</button>\\n\\t\\t\\t\\t<div class=\\"bg-white h-full w-auto grow\\"></div>\\n\\t\\t\\t{/each}\\n\\t\\t</div>\\n\\t\\t<button\\n\\t\\t\\tclass=\\"text-white absolute z-20 left-1/2 -translate-x-1/2\\"\\n\\t\\t\\ton:click={() => (showingAllCertificates.set(!$showingAllCertificates))}\\n\\t\\t\\ton:keydown={(event) => {\\n\\t\\t\\t\\tif (event.key === 'Enter' || event.key === 'Escape') {\\n\\t\\t\\t\\t\\tshowingAllCertificates.set(!$showingAllCertificates)\\n\\t\\t\\t\\t}\\n\\t\\t\\t}}\\n\\t\\t>\\n\\t\\t\\t{$showingAllCertificates ? 'Show less' : 'Show more'}\\n\\t\\t</button>\\n\\t\\t{#if isDisplayOpen}\\n\\t\\t\\t<button\\n\\t\\t\\t\\ton:click={() => {\\n\\t\\t\\t\\t\\tdisplayImage = { src: '', alt: '' };\\n\\t\\t\\t\\t\\tisDisplayOpen = false;\\n\\t\\t\\t\\t}}\\n\\t\\t\\t\\tclass=\\"fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-70 transition-all\\"\\n\\t\\t\\t\\ttransition:fade\\n\\t\\t\\t>\\n\\t\\t\\t\\t<img\\n\\t\\t\\t\\t\\ttransition:scale\\n\\t\\t\\t\\t\\tclass=\\"display fixed max-w-[calc(100vw_-_2rem)] max-h-[calc(100vh_-_2rem)] z-70 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2\\"\\n\\t\\t\\t\\t\\tsrc={displayImage.src}\\n\\t\\t\\t\\t\\talt={displayImage.alt}\\n\\t\\t\\t\\t/>\\n\\t\\t\\t</button>\\n\\t\\t{/if}\\n\\t</div>\\n</section>\\n\\n<style lang=\\"postcss\\">\\n\\t.image-list.show-black::after {\\n\\t\\tcontent: '';\\n\\t\\tposition: absolute;\\n\\t\\twidth: 100%;\\n\\t\\theight: 100%;\\n\\t\\t-webkit-user-select: none;\\n\\t\\t   -moz-user-select: none;\\n\\t\\t        user-select: none;\\n\\t\\tpointer-events: none;\\n\\t\\tbackground: linear-gradient(transparent, #2D112A);\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AA4GC,WAAW,yBAAW,OAAQ,CAC7B,OAAO,CAAE,EAAE,CACX,QAAQ,CAAE,QAAQ,CAClB,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,mBAAmB,CAAE,IAAI,CACtB,gBAAgB,CAAE,IAAI,CACjB,WAAW,CAAE,IAAI,CACzB,cAAc,CAAE,IAAI,CACpB,UAAU,CAAE,gBAAgB,WAAW,CAAC,CAAC,OAAO,CACjD"}`
};
const Certificates = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $showingAllCertificates, $$unsubscribe_showingAllCertificates;
  $$unsubscribe_showingAllCertificates = subscribe(showingAllCertificates, (value) => $showingAllCertificates = value);
  let images = [
    { src: PicCert1, alt: "Image 1" },
    { src: PicCert4, alt: "Image 2" },
    { src: PicCert5, alt: "Image 2" },
    { src: PicCert6, alt: "Image 2" },
    { src: PicCert7, alt: "Image 2" },
    { src: PicCert8, alt: "Image 2" },
    { src: PicCert10, alt: "Image 2" },
    { src: PicCert11, alt: "Image 2" },
    { src: PicCert12, alt: "Image 2" },
    { src: PicCert13, alt: "Image 2" },
    { src: PicCert14, alt: "Image 2" },
    { src: PicCert15, alt: "Image 2" }
  ];
  $$result.css.add(css);
  $$unsubscribe_showingAllCertificates();
  return `<section id="Certificates" class="min-h-[70vh] w-screen relative overflow-hidden z-20 top-0 transition-all bg-color-4"><div class="container m-auto p-10"><h3 class="text-[39px] text-center text-white" data-svelte-h="svelte-1fnqvb4">Awards &amp; Certifications</h3> <div class="${"image-list flex flex-wrap justify-center gap-3 py-5 overflow-hidden transition-all " + escape(
    $showingAllCertificates ? "max-h-none" : "max-h-[450px] show-black",
    true
  ) + " svelte-23unm7"}">${each(images, ({ src, alt }, i) => {
    return `<button><img class="w-auto max-h-[200px] object-cover opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer"${add_attribute("src", src, 0)}${add_attribute("alt", alt, 0)}></button> <div class="bg-white h-full w-auto grow"></div>`;
  })}</div> <button class="text-white absolute z-20 left-1/2 -translate-x-1/2">${escape($showingAllCertificates ? "Show less" : "Show more")}</button> ${``}</div> </section>`;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<footer class="snap-start bg-black min-h-[10rem] p-10 text-center text-white" data-svelte-h="svelte-1sczkzw"><h1 class="text-3xl">Ash/</h1> <p class="description max-w-[80rem] m-auto font-sans opacity-80">Muhammed Ashraf, an independent and passionate full stack developer, curious to learn more about developing scalable distributed systems, loves problem solving and cares about writing readable as well as maintainable code.</p> <p class="description max-w-[50rem] m-auto font-sans text-color-2">Also known as, ashrafp216, ashraf bin ahmad. Personal brand: Paperboat Creations</p></footer>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $mainRoot, $$unsubscribe_mainRoot;
  let $projectSection, $$unsubscribe_projectSection;
  $$unsubscribe_mainRoot = subscribe(mainRoot, (value) => $mainRoot = value);
  $$unsubscribe_projectSection = subscribe(projectSection, (value) => $projectSection = value);
  let projectSectionPassed = false;
  {
    console.log(projectSectionPassed);
  }
  $$unsubscribe_mainRoot();
  $$unsubscribe_projectSection();
  return ` <main class="${"snap-y overflow-y-scroll overflow-x-hidden h-screen scroll-smooth " + escape(
    "snap-proximity",
    true
  )}"${add_attribute("this", $mainRoot, 0)}>${validate_component(Header, "Header").$$render($$result, {}, {}, {})} ${validate_component(Skills, "Skills").$$render($$result, {}, {}, {})} ${validate_component(ProjectsHead, "ProjectsHead").$$render($$result, {}, {}, {})} <section class="bg-color-1 min-h-screen"${add_attribute("this", $projectSection, 0)}>${each(profile.projects, (project) => {
    return `${validate_component(Project, "Project").$$render(
      $$result,
      {
        projectName: project.projectName,
        projectType: project.projectType,
        projectTechStack: project.projectTechStack,
        projectDetails: project.projectDetails
      },
      {},
      {}
    )}`;
  })}</section> ${validate_component(Education, "Education").$$render($$result, {}, {}, {})} ${validate_component(Certificates, "Certificates").$$render($$result, {}, {}, {})} ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</main>`;
});
export {
  Page as default
};
