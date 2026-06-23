import { o as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { i as require_jsx_runtime, n as Slot, t as Root } from "../_libs/@radix-ui/react-label+[...].mjs";
import { t as useQuery } from "../_libs/tanstack__react-query.mjs";
import { n as toast, t as Toaster } from "../_libs/sonner.mjs";
import { n as motion, r as AnimatePresence, t as useInView } from "../_libs/framer-motion.mjs";
import { A as ChevronRight, C as ExternalLink, D as Coffee, E as Cpu, F as Bot, I as Award, L as Atom, M as Building2, N as Briefcase, O as Cloud, P as Braces, R as ArrowRight, S as GitBranch, T as Database, _ as Mail, a as Trophy, b as GraduationCap, c as Star, d as Send, f as Rocket, g as MapPin, h as Menu, i as UserRound, j as ChevronDown, k as CircleCheck, l as SquareTerminal, m as Phone, n as Workflow, o as TriangleAlert, p as RefreshCw, r as Users, s as Target, t as X, u as Sparkles, v as Linkedin, w as Download, x as Github, y as Layers } from "../_libs/lucide-react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as m } from "../_libs/react-type-animation.mjs";
import { t as format } from "../_libs/date-fns.mjs";
import { n as stringType, t as objectType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-GPqPraHc.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
var PROFILE = {
	name: "SANTHOSH V",
	role: "Software Developer · Cloud Enthusiast",
	email: "vjsanthosh10@gmail.com",
	phone: "+91 9500041161",
	location: "India",
	github: "https://github.com/SANTHOSH-VJ",
	linkedin: "https://www.linkedin.com/in/santhosh-v-146b58293/",
	resumeUrl: "https://drive.google.com/file/d/1rEKi2FwyseXhPayQs4p0W15QSN4TeuBx/view?usp=sharing",
	bio: "Passionate in Cloud Computing and software developer focused on building reliable, scalable systems on AWS."
};
var NAV_LINKS = [
	{
		id: "home",
		label: "Home"
	},
	{
		id: "about",
		label: "About"
	},
	{
		id: "skills",
		label: "Skills"
	},
	{
		id: "projects",
		label: "Projects"
	},
	{
		id: "experience",
		label: "Experience"
	},
	{
		id: "achievements",
		label: "Achievements"
	},
	{
		id: "certifications",
		label: "Certifications"
	},
	{
		id: "github",
		label: "GitHub"
	},
	{
		id: "contact",
		label: "Contact"
	}
];
var TYPING_ROLES = [
	"Software Developer",
	"Cloud Enthusiast",
	"AWS Learner",
	"AWS Certified",
	"ServiceNow Certified"
];
var FLOATING_TECH = [
	"AWS",
	"Docker",
	"Git",
	"Java",
	"Python",
	"Linux",
	"GitHub"
];
var SKILLS = [
	{
		category: "Programming",
		items: [
			{
				name: "Java",
				level: 88
			},
			{
				name: "Python",
				level: 82
			},
			{
				name: "SQL",
				level: 80
			}
		]
	},
	{
		category: "Cloud",
		items: [
			{
				name: "AWS",
				level: 85
			},
			{
				name: "OCI",
				level: 70
			},
			{
				name: "Linux",
				level: 78
			},
			{
				name: "Docker",
				level: 72
			}
		]
	},
	{
		category: "DevOps & Tools",
		items: [
			{
				name: "Git",
				level: 88
			},
			{
				name: "GitHub",
				level: 90
			},
			{
				name: "Postman",
				level: 80
			}
		]
	},
	{
		category: "AI-Assisted Dev",
		items: [
			{
				name: "GitHub Copilot",
				level: 85
			},
			{
				name: "Claude",
				level: 90
			},
			{
				name: "Kiro",
				level: 75
			}
		]
	}
];
var CERTIFICATIONS = [
	{
		name: "AWS Certified Cloud Practitioner",
		issuer: "Amazon Web Services",
		year: "2026",
		credentialUrl: "https://www.credly.com/badges/01b91852-a3aa-45d5-8ebc-9dbd5d0c8899/public_url",
		badgeUrl: "https://res.cloudinary.com/dw42jvqwu/image/upload/v1782122512/aws-certified-cloud-practitioner_1_qpdvun.png"
	},
	{
		name: "ServiceNow Certified System Administrator",
		issuer: "ServiceNow",
		year: "2026",
		credentialUrl: "https://www.credly.com/badges/7e6b6436-21b4-4fd5-919b-177245eda1b8/public_url",
		badgeUrl: "https://res.cloudinary.com/dw42jvqwu/image/upload/v1782123027/servicenow-certified-system-administrator-csa_kmagdm.png"
	},
	{
		name: "ServiceNow Certified Application Developer",
		issuer: "ServiceNow",
		year: "2026",
		credentialUrl: "https://www.credly.com/badges/74573025-c8c5-41f1-bf5f-cdc26022ec23/public_url",
		badgeUrl: "https://res.cloudinary.com/dw42jvqwu/image/upload/v1782122846/certified-application-developer-cad_1_wphuz2.png"
	},
	{
		name: "Oracle OCI Architect Associate",
		issuer: "Oracle",
		year: "2025",
		credentialUrl: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=D8BBD375C3F6B930A80D6C0B768584956B9D45155EC9CA37F753E7C490CE8958",
		badgeUrl: "https://res.cloudinary.com/dw42jvqwu/image/upload/v1782122715/OCI25CAA_s1zpar.jpg"
	},
	{
		name: "Linux Foundation Certified",
		issuer: "The Linux Foundation",
		year: "2025",
		credentialUrl: "https://www.credly.com/badges/11068a56-376b-4375-9b0e-cc4b5e378711/public_url",
		badgeUrl: "https://res.cloudinary.com/dw42jvqwu/image/upload/v1782122575/lfs101-introduction-to-linux_sfmsgf.png"
	}
];
var PROJECTS = [
	{
		title: "Serverless Personal Cloud Storage Platform",
		description: "A secure, fully serverless file storage platform with authentication, signed uploads, and per-user buckets. Built end-to-end on AWS.",
		tech: [
			"AWS Cognito",
			"S3",
			"Lambda",
			"API Gateway",
			"Amplify",
			"Pre-Signed URLs"
		],
		image: "https://res.cloudinary.com/dw42jvqwu/image/upload/v1782117651/03b5f0cb-209a-4db6-821a-8c1d75fe38af_wmcet6.png",
		features: [
			"JWT-based authentication via Cognito",
			"Direct-to-S3 uploads with pre-signed URLs",
			"Lambda functions behind API Gateway",
			"CI/CD with AWS Amplify"
		],
		github: "https://github.com/SANTHOSH-VJ/aws-serverless-cloud-storage.git",
		demo: "#"
	},
	{
		title: "URL Shortener SaaS",
		description: "A production-grade link shortener with auth, expiration, analytics, and click tracking dashboards.",
		tech: [
			"Flask",
			"MySQL",
			"Cloud Deploy",
			"Analytics",
			"Auth"
		],
		image: "https://res.cloudinary.com/dw42jvqwu/image/upload/v1782117887/b886c996-de51-4c93-acd4-6229f45ad248_zbtshj.png",
		features: [
			"Custom short codes with expiry",
			"Real-time click tracking",
			"User accounts and dashboards",
			"Cloud-deployed with monitoring"
		],
		github: "https://github.com/SANTHOSH-VJ/url-saas.git",
		demo: "https://kuttylink.onrender.com/"
	},
	{
		title: "CI/CD Pipeline with GitHub Actions, Docker, and AWS",
		description: "Next project in the pipeline — exploring CI/CD pipelines for event-driven architectures on AWS.",
		tech: [
			"AWS",
			"GitHub Actions",
			"Docker"
		],
		image: "https://res.cloudinary.com/dw42jvqwu/image/upload/v1782118015/9cedda0c-bc03-482d-b60a-a200c6dfd66c_o1gpxy.png",
		features: [
			"Continuous integration and deployment",
			"Automated testing",
			"Containerization with Docker"
		],
		github: "https://github.com/SANTHOSH-VJ/ziffity_Intern.git",
		demo: "#"
	}
];
var EXPERIENCE = [{
	role: "AI Intern",
	company: "Shell",
	period: "June 2025 — July 2025",
	points: ["Worked on basic machine learning algorithms for model training and deployment. Performed dataset preprocessing model training and evaluation to assess model performance."]
}, {
	role: "Software Intern",
	company: "Ziffity Solutions Inc.",
	period: "Ongoing",
	points: ["Specializing in cloud-native architectures and distributed systems.", "Hands-on with AWS, Docker, and Linux."]
}];
var ACHIEVEMENTS = [
	{
		title: "Grand Prix of Code — Winner",
		detail: "1st place, competitive coding event"
	},
	{
		title: "1100+ Problems Solved",
		detail: "Across Java, Python and SQL platforms"
	},
	{
		title: "SQL Competition Finalist",
		detail: "Top performer in inter-college SQL contest"
	},
	{
		title: "Smart India Hackathon",
		detail: "Selected team for national-level hackathon"
	}
];
var STATS = [
	{
		value: 1100,
		suffix: "+",
		label: "Problems Solved"
	},
	{
		value: 5,
		suffix: "",
		label: "Certifications"
	},
	{
		value: 3,
		suffix: "+",
		label: "Projects Built"
	},
	{
		value: 3,
		suffix: "",
		label: "Cloud Platforms"
	}
];
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
function Navbar() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [active, setActive] = (0, import_react.useState)("home");
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => {
			setScrolled(window.scrollY > 24);
			const current = NAV_LINKS.map((l) => {
				const el = document.getElementById(l.id);
				return {
					id: l.id,
					top: el ? el.getBoundingClientRect().top : Infinity
				};
			}).filter((o) => o.top <= 120).sort((a, b) => b.top - a.top)[0];
			if (current) setActive(current.id);
		};
		window.addEventListener("scroll", onScroll, { passive: true });
		onScroll();
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.header, {
		initial: {
			y: -40,
			opacity: 0
		},
		animate: {
			y: 0,
			opacity: 1
		},
		transition: {
			duration: .6,
			ease: "easeOut"
		},
		className: cn("fixed inset-x-0 top-0 z-50 transition-all duration-300", scrolled ? "py-2" : "py-4"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: cn("mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 transition-all duration-300 sm:px-6", scrolled ? "glass h-14 shadow-lg" : "h-16 bg-transparent border border-transparent"),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#home",
					className: "flex items-center gap-2 font-display font-bold",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-primary to-accent text-sm text-primary-foreground",
						children: "SV"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "hidden sm:block",
						children: ["SANTHOSH V", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-primary",
							children: "."
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-1 lg:flex",
					children: NAV_LINKS.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: `#${l.id}`,
						className: cn("relative rounded-md px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground", active === l.id && "text-foreground"),
						children: [l.label, active === l.id && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
							layoutId: "nav-active",
							className: "absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-primary to-accent"
						})]
					}, l.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hidden items-center gap-2 lg:flex",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "icon",
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: PROFILE.github,
								target: "_blank",
								rel: "noreferrer",
								"aria-label": "GitHub",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, { className: "h-4 w-4" })
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "icon",
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: PROFILE.linkedin,
								target: "_blank",
								rel: "noreferrer",
								"aria-label": "LinkedIn",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Linkedin, { className: "h-4 w-4" })
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							asChild: true,
							className: "bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: PROFILE.resumeUrl,
								download: true,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "mr-2 h-4 w-4" }), "Resume"]
							})
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "lg:hidden p-2 text-foreground",
					onClick: () => setOpen((o) => !o),
					"aria-label": "Toggle menu",
					children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			initial: {
				opacity: 0,
				y: -10
			},
			animate: {
				opacity: 1,
				y: 0
			},
			className: "mx-4 mt-2 rounded-2xl glass p-4 lg:hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 gap-2",
				children: NAV_LINKS.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: `#${l.id}`,
					onClick: () => setOpen(false),
					className: "rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground",
					children: l.label
				}, l.id))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 flex gap-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "sm",
					className: "flex-1 bg-gradient-to-r from-primary to-accent text-primary-foreground",
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: PROFILE.resumeUrl,
						download: true,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "mr-2 h-4 w-4" }), "Resume"]
					})
				})
			})]
		})]
	});
}
var GITHUB_USERNAME = "SANTHOSH-VJ";
var GITHUB_API_BASE = "https://api.github.com";
async function fetchGitHubJson(path) {
	const response = await fetch(`${GITHUB_API_BASE}${path}`, { headers: {
		Accept: "application/vnd.github+json",
		"X-GitHub-Api-Version": "2022-11-28"
	} });
	if (!response.ok) throw new Error(`GitHub request failed with status ${response.status}`);
	return response.json();
}
async function fetchGitHubProfile() {
	return fetchGitHubJson(`/users/${GITHUB_USERNAME}`);
}
async function fetchGitHubRepos() {
	return (await fetchGitHubJson(`/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated&direction=desc&type=owner`)).map((repo) => ({
		...repo,
		topics: repo.topics ?? []
	})).sort((left, right) => {
		return new Date(right.updated_at).getTime() - new Date(left.updated_at).getTime();
	});
}
async function fetchGitHubActivity() {
	try {
		const response = await fetch(`https://github-contributions-api.deno.dev/${GITHUB_USERNAME}.json`);
		if (!response.ok) return [];
		const data = await response.json();
		const buckets = [];
		data.contributions.forEach((week) => {
			week.forEach((day) => {
				let level = 0;
				if (day.contributionLevel === "FIRST_QUARTILE") level = 1;
				else if (day.contributionLevel === "SECOND_QUARTILE") level = 2;
				else if (day.contributionLevel === "THIRD_QUARTILE") level = 3;
				else if (day.contributionLevel === "FOURTH_QUARTILE") level = 4;
				buckets.push({
					date: day.date,
					count: day.contributionCount,
					level
				});
			});
		});
		return buckets;
	} catch (error) {
		console.error("Error fetching GitHub activity:", error);
		return [];
	}
}
function buildContributionBoard(activity) {
	const weeks = [];
	const monthLabels = [];
	const weekdayLabels = [
		{
			label: "",
			dayIndex: 0
		},
		{
			label: "Mon",
			dayIndex: 1
		},
		{
			label: "Wed",
			dayIndex: 3
		},
		{
			label: "Fri",
			dayIndex: 5
		}
	];
	activity.forEach((bucket, index) => {
		const weekIndex = Math.floor(index / 7);
		const dayIndex = index % 7;
		if (!weeks[weekIndex]) weeks[weekIndex] = [];
		weeks[weekIndex].push(bucket);
		const date = /* @__PURE__ */ new Date(`${bucket.date}T00:00:00`);
		if (dayIndex === 0 && (!activity[index - 7] || (/* @__PURE__ */ new Date(`${activity[index - 7].date}T00:00:00`)).getMonth() !== date.getMonth())) monthLabels.push({
			label: format(date, "MMM"),
			weekIndex
		});
	});
	const totalContributions = activity.reduce((sum, bucket) => sum + bucket.count, 0);
	const activeDays = activity.filter((bucket) => bucket.count > 0).length;
	let longestStreak = 0;
	let currentStreak = 0;
	activity.forEach((bucket) => {
		if (bucket.count > 0) {
			currentStreak += 1;
			longestStreak = Math.max(longestStreak, currentStreak);
		} else currentStreak = 0;
	});
	return {
		weeks,
		monthLabels,
		weekdayLabels,
		totalContributions,
		activeDays,
		longestStreak
	};
}
async function fetchGitHubDashboard() {
	const [profile, repos, activity] = await Promise.all([
		fetchGitHubProfile(),
		fetchGitHubRepos(),
		fetchGitHubActivity()
	]);
	return {
		profile,
		repos,
		activity
	};
}
function useGitHubDashboard() {
	return useQuery({
		queryKey: ["github-dashboard", GITHUB_USERNAME],
		queryFn: fetchGitHubDashboard,
		staleTime: 1e3 * 60 * 30,
		refetchOnWindowFocus: false
	});
}
function Hero() {
	const { data } = useGitHubDashboard();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "home",
		className: "relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 grid-bg [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_75%)]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 pointer-events-none",
				style: { background: "var(--gradient-glow)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-6xl px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 8
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: { duration: .5 },
						className: "mx-auto mb-6 flex w-fit items-center gap-2 rounded-full border border-border bg-card/50 px-3 py-1 text-xs text-muted-foreground backdrop-blur",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5 text-accent" }), "Available for full-time SDE opportunities — let's connect!"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h1, {
						initial: {
							opacity: 0,
							y: 16,
							filter: "blur(8px)"
						},
						animate: {
							opacity: 1,
							y: 0,
							filter: "blur(0px)"
						},
						transition: {
							duration: .7,
							delay: .05
						},
						className: "text-center text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl",
						children: ["Hi, I'm ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gradient",
							children: PROFILE.name
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 8
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .6,
							delay: .2
						},
						className: "mx-auto mt-6 max-w-2xl text-center text-lg text-muted-foreground sm:text-xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-foreground",
							children: `> `
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(m, {
							sequence: TYPING_ROLES.flatMap((r) => [r, 1800]),
							wrapper: "span",
							speed: 50,
							repeat: Infinity,
							className: "text-foreground font-medium"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						initial: { opacity: 0 },
						animate: { opacity: 1 },
						transition: {
							duration: .6,
							delay: .35
						},
						className: "mx-auto mt-6 max-w-2xl text-center text-base text-muted-foreground",
						children: PROFILE.bio
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 8
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .6,
							delay: .45
						},
						className: "mt-10 flex flex-wrap justify-center gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "lg",
								asChild: true,
								className: "bg-gradient-to-r from-primary to-accent text-primary-foreground glow-ring hover:opacity-90",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "#projects",
									children: ["View Projects ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-2 h-4 w-4" })]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "lg",
								variant: "outline",
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: PROFILE.resumeUrl,
									download: true,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "mr-2 h-4 w-4" }), "Download Resume"]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "lg",
								variant: "ghost",
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "#contact",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "mr-2 h-4 w-4" }), "Contact Me"]
								})
							})
						]
					}),
					data && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 8
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .5,
							delay: .55
						},
						className: "mx-auto mt-6 flex w-fit flex-wrap items-center justify-center gap-3 rounded-full border border-border bg-card/60 px-4 py-2 text-xs text-muted-foreground backdrop-blur",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-primary",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "h-3.5 w-3.5" }),
								data.profile.followers,
								" followers"
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-3 py-1 text-accent",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GitBranch, { className: "h-3.5 w-3.5" }),
								data.profile.public_repos,
								" public repos"
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-16 flex flex-wrap justify-center gap-3",
						children: FLOATING_TECH.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
							initial: {
								opacity: 0,
								y: 10
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								delay: .6 + i * .06,
								duration: .4
							},
							className: "animate-float rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-mono text-muted-foreground backdrop-blur",
							style: { animationDelay: `${i * .5}s` },
							children: t
						}, t))
					})
				]
			})
		]
	});
}
function SectionHeading({ eyebrow, title, description }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto mb-12 max-w-2xl text-center",
		children: [
			eyebrow && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
				initial: {
					opacity: 0,
					y: 6
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: { once: true },
				className: "mb-3 font-mono text-xs uppercase tracking-widest text-accent",
				children: eyebrow
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h2, {
				initial: {
					opacity: 0,
					y: 10
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: { once: true },
				transition: { duration: .5 },
				className: "text-3xl font-bold sm:text-4xl",
				children: title
			}),
			description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
				initial: { opacity: 0 },
				whileInView: { opacity: 1 },
				viewport: { once: true },
				transition: { delay: .1 },
				className: "mt-4 text-muted-foreground",
				children: description
			})
		]
	});
}
var CARDS = [
	{
		icon: GraduationCap,
		title: "Education",
		body: "B.E in Computer Science with a specialization in Cloud Computing at R.M.D. Engineering College. Strong fundamentals in DSA, Problem Solving, and AWS Cloud."
	},
	{
		icon: Briefcase,
		title: "Current Internship",
		body: "Software Intern at Ziffity — building tooling and pipelines that accelerate internal engineering workflows."
	},
	{
		icon: Rocket,
		title: "Currently Learning",
		body: "Event-driven serverless on AWS, system design at scale, and production-grade observability."
	},
	{
		icon: Target,
		title: "Career Goal",
		body: "Join a top-tier engineering org as a Software Engineer focused on cloud infrastructure and developer experience."
	}
];
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "about",
		className: "relative py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "About",
				title: "Engineer who ships, learns, repeats.",
				description: "A snapshot of where I am, what I'm building, and where I'm headed."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
				children: CARDS.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 16
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: { once: true },
					transition: {
						duration: .45,
						delay: i * .06
					},
					className: "group relative rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--shadow-glow)]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-4 grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 text-primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(c.icon, { className: "h-5 w-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-lg font-semibold",
							children: c.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: c.body
						})
					]
				}, c.title))
			})]
		})
	});
}
var darkenColor = (hex, percent) => {
	let color = hex.startsWith("#") ? hex.slice(1) : hex;
	if (color.length === 3) color = color.split("").map((c) => c + c).join("");
	const num = parseInt(color, 16);
	let r = num >> 16 & 255;
	let g = num >> 8 & 255;
	let b = num & 255;
	r = Math.max(0, Math.min(255, Math.floor(r * (1 - percent))));
	g = Math.max(0, Math.min(255, Math.floor(g * (1 - percent))));
	b = Math.max(0, Math.min(255, Math.floor(b * (1 - percent))));
	return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
};
var Folder = ({ color = "#5227FF", size = 1, items = [], className = "" }) => {
	const maxItems = 3;
	const papers = items.slice(0, maxItems);
	while (papers.length < maxItems) papers.push(null);
	const [open, setOpen] = (0, import_react.useState)(false);
	const [paperOffsets, setPaperOffsets] = (0, import_react.useState)(Array.from({ length: maxItems }, () => ({
		x: 0,
		y: 0
	})));
	const folderBackColor = darkenColor(color, .08);
	const paper1 = darkenColor("#ffffff", .1);
	const paper2 = darkenColor("#ffffff", .05);
	const paper3 = "#ffffff";
	const handleClick = () => {
		setOpen((prev) => !prev);
		if (open) setPaperOffsets(Array.from({ length: maxItems }, () => ({
			x: 0,
			y: 0
		})));
	};
	const handlePaperMouseMove = (e, index) => {
		if (!open) return;
		const rect = e.currentTarget.getBoundingClientRect();
		const centerX = rect.left + rect.width / 2;
		const centerY = rect.top + rect.height / 2;
		const offsetX = (e.clientX - centerX) * .15;
		const offsetY = (e.clientY - centerY) * .15;
		setPaperOffsets((prev) => {
			const newOffsets = [...prev];
			newOffsets[index] = {
				x: offsetX,
				y: offsetY
			};
			return newOffsets;
		});
	};
	const handlePaperMouseLeave = (_e, index) => {
		setPaperOffsets((prev) => {
			const newOffsets = [...prev];
			newOffsets[index] = {
				x: 0,
				y: 0
			};
			return newOffsets;
		});
	};
	const folderStyle = {
		"--folder-color": color,
		"--folder-back-color": folderBackColor,
		"--paper-1": paper1,
		"--paper-2": paper2,
		"--paper-3": paper3
	};
	const folderClassName = `folder ${open ? "open" : ""}`.trim();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		style: { transform: `scale(${size})` },
		className,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: folderClassName,
			style: folderStyle,
			onClick: handleClick,
			onKeyDown: (e) => {
				if (e.key === "Enter" || e.key === " ") {
					e.preventDefault();
					handleClick();
				}
			},
			tabIndex: 0,
			role: "button",
			"aria-expanded": open,
			"aria-label": open ? "Close folder" : "Open folder",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "folder__back",
				children: [
					papers.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: `paper paper-${i + 1}`,
						onMouseMove: (e) => handlePaperMouseMove(e, i),
						onMouseLeave: (e) => handlePaperMouseLeave(e, i),
						style: open ? {
							"--magnet-x": `${paperOffsets[i]?.x || 0}px`,
							"--magnet-y": `${paperOffsets[i]?.y || 0}px`
						} : {},
						children: item
					}, i)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "folder__front" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "folder__front right" })
				]
			})
		})
	});
};
var CATEGORY_META = {
	Programming: {
		icon: Braces,
		summary: "Core languages and problem-solving foundations.",
		color: "#F59E0B"
	},
	Cloud: {
		icon: Cloud,
		summary: "Cloud platforms, infra tooling, and delivery-ready environments.",
		color: "#3B82F6"
	},
	"DevOps & Tools": {
		icon: Workflow,
		summary: "Version control, delivery workflows, and productivity tooling.",
		color: "#EF4444"
	},
	"AI-Assisted Dev": {
		icon: Sparkles,
		summary: "AI tools that speed up drafting, debugging, and iteration.",
		color: "#8B5CF6"
	}
};
var SKILL_META = {
	Java: {
		icon: Coffee,
		accent: "from-amber-500/25 to-orange-500/10 text-amber-400",
		gradient: "from-amber-500 to-orange-500",
		note: "Reliable for backend logic, interviews, and DSA practice."
	},
	Python: {
		icon: Atom,
		accent: "from-sky-500/25 to-cyan-500/10 text-sky-400",
		gradient: "from-sky-500 to-cyan-500",
		note: "Used for scripting, automation, and fast prototyping."
	},
	SQL: {
		icon: Database,
		accent: "from-emerald-500/25 to-teal-500/10 text-emerald-400",
		gradient: "from-emerald-500 to-teal-500",
		note: "Comfortable with queries, joins, and structured data work."
	},
	AWS: {
		icon: Cloud,
		accent: "from-orange-500/25 to-amber-500/10 text-orange-400",
		gradient: "from-orange-500 to-amber-500",
		note: "Hands-on exposure to AWS Cloud architecture and services."
	},
	OCI: {
		icon: Cpu,
		accent: "from-rose-500/25 to-red-500/10 text-rose-400",
		gradient: "from-rose-500 to-red-500",
		note: "Basic familiarity with Oracle Cloud and its core services."
	},
	Linux: {
		icon: SquareTerminal,
		accent: "from-zinc-500/25 to-slate-500/10 text-zinc-300",
		gradient: "from-zinc-400 to-slate-500",
		note: "Daily terminal comfort for servers, scripts, and debugging."
	},
	Docker: {
		icon: Layers,
		accent: "from-cyan-500/25 to-blue-500/10 text-cyan-400",
		gradient: "from-cyan-500 to-blue-500",
		note: "Containerization for repeatable local and cloud deployments."
	},
	Git: {
		icon: GitBranch,
		accent: "from-red-500/25 to-orange-500/10 text-red-400",
		gradient: "from-red-500 to-orange-500",
		note: "Branching, collaboration, and clean commit hygiene."
	},
	GitHub: {
		icon: Github,
		accent: "from-slate-500/25 to-zinc-500/10 text-slate-200",
		gradient: "from-slate-400 to-zinc-500",
		note: "Source control, collaboration, and portfolio delivery."
	},
	Postman: {
		icon: Send,
		accent: "from-orange-500/25 to-rose-500/10 text-orange-300",
		gradient: "from-orange-500 to-rose-500",
		note: "API exploration, request testing, and documentation flow."
	},
	"GitHub Copilot": {
		icon: Sparkles,
		accent: "from-violet-500/25 to-fuchsia-500/10 text-violet-300",
		gradient: "from-violet-500 to-fuchsia-500",
		note: "AI-assisted completion while keeping the code intentional."
	},
	Claude: {
		icon: Bot,
		accent: "from-stone-500/25 to-neutral-500/10 text-stone-200",
		gradient: "from-stone-400 to-neutral-500",
		note: "Used for reasoning, drafting, and reviewing implementation choices."
	},
	Kiro: {
		icon: Workflow,
		accent: "from-indigo-500/25 to-blue-500/10 text-indigo-300",
		gradient: "from-indigo-500 to-blue-500",
		note: "Workflow support for planning, refinement, and iteration."
	}
};
var FEATURED_STACK = [
	"Java",
	"AWS",
	"GitHub",
	"Docker",
	"SQL",
	"Git"
];
function SkillCard({ name, delay }) {
	const meta = SKILL_META[name] ?? {
		icon: Braces,
		accent: "from-primary/20 to-accent/10 text-primary",
		gradient: "from-primary to-accent",
		note: "Core skill used in day-to-day engineering work."
	};
	const SkillIcon = meta.icon;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		initial: {
			opacity: 0,
			y: 16,
			scale: .95
		},
		animate: {
			opacity: 1,
			y: 0,
			scale: 1
		},
		exit: {
			opacity: 0,
			y: -10,
			scale: .95
		},
		transition: {
			duration: .35,
			delay: delay * .07
		},
		className: "group relative overflow-visible rounded-2xl border border-border/60 bg-background/60 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_0_30px_-8px_rgba(99,102,241,0.3)]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `relative grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br ${meta.accent} transition-transform duration-300 group-hover:scale-110`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkillIcon, { className: "h-5 w-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 rounded-xl ring-2 ring-white/0 transition-all duration-300 group-hover:ring-white/10" })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "min-w-0 flex-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "truncate text-sm font-semibold text-foreground",
						children: name
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pointer-events-none absolute -top-2 left-1/2 z-50 w-max max-w-[220px] -translate-x-1/2 -translate-y-full rounded-xl border border-border/80 bg-card/95 px-4 py-3 opacity-0 shadow-[0_8px_30px_-6px_rgba(0,0,0,0.6)] backdrop-blur-md transition-all duration-300 group-hover:opacity-100",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs leading-5 text-muted-foreground",
					children: meta.note
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -bottom-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 border-b border-r border-border/80 bg-card/95" })]
			})
		]
	});
}
function Skills() {
	const [activeCategory, setActiveCategory] = (0, import_react.useState)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "skills",
		className: "relative overflow-hidden py-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.12),transparent_34%),radial-gradient(circle_at_top_right,rgba(16,185,129,0.10),transparent_28%),linear-gradient(to_bottom,transparent,rgba(15,23,42,0.04))]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-border to-transparent" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						eyebrow: "Skills",
						title: "A polished stack built to ship",
						description: "Click on a folder to explore the skills inside. Each category represents a core area of expertise."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-2 gap-8 sm:grid-cols-4 lg:gap-12",
						children: SKILLS.map((cat, idx) => {
							const categoryMeta = CATEGORY_META[cat.category];
							const CategoryIcon = categoryMeta.icon;
							const isActive = activeCategory === cat.category;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								initial: {
									opacity: 0,
									y: 24
								},
								whileInView: {
									opacity: 1,
									y: 0
								},
								viewport: { once: true },
								transition: {
									duration: .5,
									delay: idx * .08
								},
								className: "flex flex-col items-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: `group relative cursor-pointer rounded-3xl border p-6 pb-4 transition-all duration-300 ${isActive ? "border-primary/50 bg-card/90 shadow-[0_0_40px_-10px_rgba(99,102,241,0.4)]" : "border-border/60 bg-card/60 hover:border-primary/30 hover:bg-card/80 hover:shadow-[0_0_30px_-10px_rgba(99,102,241,0.2)]"}`,
									onClick: () => setActiveCategory(isActive ? null : cat.category),
									children: [
										isActive && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary to-transparent" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex justify-center",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Folder, {
												color: categoryMeta.color,
												size: 1.4,
												items: cat.items.slice(0, 3).map((skill, i) => {
													return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "flex h-full w-full items-center justify-center",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SKILL_META[skill.name]?.icon ?? Braces, {
															className: "h-4 w-4",
															style: { color: categoryMeta.color }
														})
													}, i);
												})
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-5 text-center",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "mx-auto mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white/5",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategoryIcon, {
														className: "h-4 w-4",
														style: { color: categoryMeta.color }
													})
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
													className: "text-sm font-semibold text-foreground",
													children: cat.category
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
													className: "mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground",
													children: [cat.items.length, " skills"]
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-3 flex justify-center",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: `h-4 w-4 text-muted-foreground/50 transition-transform duration-300 ${isActive ? "rotate-90 text-primary" : ""}` })
										})
									]
								})
							}, cat.category);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
						mode: "wait",
						children: activeCategory && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							initial: {
								opacity: 0,
								height: 0
							},
							animate: {
								opacity: 1,
								height: "auto"
							},
							exit: {
								opacity: 0,
								height: 0
							},
							transition: {
								duration: .4,
								ease: "easeInOut"
							},
							className: "overflow-hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-10",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
									initial: {
										opacity: 0,
										x: -16
									},
									animate: {
										opacity: 1,
										x: 0
									},
									transition: {
										duration: .3,
										delay: .1
									},
									className: "mb-6 flex items-center gap-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "h-6 w-1 rounded-full",
											style: { background: CATEGORY_META[activeCategory]?.color }
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "text-lg font-semibold text-foreground",
											children: activeCategory
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "rounded-full border border-border bg-white/5 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground",
											children: [
												SKILLS.find((s) => s.category === activeCategory)?.items.length,
												" ",
												"skills"
											]
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
									children: SKILLS.find((s) => s.category === activeCategory)?.items.map((skill, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkillCard, {
										name: skill.name,
										delay: i
									}, skill.name))
								})]
							})
						}, activeCategory)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-16 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.aside, {
							initial: {
								opacity: 0,
								y: 18
							},
							whileInView: {
								opacity: 1,
								y: 0
							},
							viewport: { once: true },
							transition: { duration: .5 },
							className: "rounded-3xl border border-border bg-card/90 p-6 shadow-[var(--shadow-elevated)] backdrop-blur",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-mono text-xs uppercase tracking-[0.22em] text-accent",
									children: "Signature stack"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-2 text-2xl font-semibold text-foreground",
									children: "The tools I reach for first"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm leading-6 text-muted-foreground",
									children: "These are the skills that show up most often in real projects, interview prep, and day-to-day delivery."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3",
									children: FEATURED_STACK.map((skillName, i) => {
										const skillMeta = SKILL_META[skillName];
										const SkillIcon = skillMeta.icon;
										return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
											initial: {
												opacity: 0,
												scale: .9
											},
											whileInView: {
												opacity: 1,
												scale: 1
											},
											viewport: { once: true },
											transition: {
												duration: .3,
												delay: i * .05
											},
											className: "group rounded-2xl border border-border bg-background/70 p-3 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-[var(--shadow-glow)]",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: `grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br ${skillMeta.accent} transition-transform duration-300 group-hover:scale-110`,
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkillIcon, { className: "h-5 w-5" })
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-3 text-sm font-semibold text-foreground",
												children: skillName
											})]
										}, skillName);
									})
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								y: 18
							},
							whileInView: {
								opacity: 1,
								y: 0
							},
							viewport: { once: true },
							transition: {
								duration: .5,
								delay: .08
							},
							className: "rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-elevated)]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-xs uppercase tracking-[0.22em] text-accent",
								children: "Delivery style"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "mt-4 space-y-3 text-sm leading-6 text-muted-foreground",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-start gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" }), "Cloud-first thinking with practical deployment choices."]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-start gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" }), "Clean version control habits and readable collaboration flow."]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-start gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" }), "AI tools used for speed, not as a substitute for judgment."]
									})
								]
							})]
						})]
					})
				]
			})
		]
	});
}
function Projects() {
	const [openIdx, setOpenIdx] = (0, import_react.useState)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "projects",
		className: "relative py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Projects",
				title: "Things I've built",
				description: "Production-style projects with real architecture decisions."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-6 md:grid-cols-2",
				children: PROJECTS.map((p, i) => {
					const open = openIdx === i;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.article, {
						initial: {
							opacity: 0,
							y: 18
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: { once: true },
						transition: {
							duration: .5,
							delay: i * .05
						},
						className: "group relative overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--shadow-elevated)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "relative h-48 overflow-hidden bg-gradient-to-br from-primary/20 via-accent/10 to-background",
							children: p.image ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: p.image,
									alt: p.title,
									className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute inset-x-0 bottom-0 p-4",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "inline-flex rounded-full border border-border bg-background/70 px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-muted-foreground backdrop-blur",
										children: p.tech[0]
									})
								})
							] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 grid-bg opacity-40" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute inset-0 flex items-center justify-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-xs uppercase tracking-widest text-muted-foreground",
									children: p.tech[0]
								})
							})] })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-xl font-semibold",
									children: p.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted-foreground",
									children: p.description
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-4 flex flex-wrap gap-1.5",
									children: p.tech.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded-md border border-border bg-background/60 px-2 py-0.5 font-mono text-[11px] text-muted-foreground",
										children: t
									}, t))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
									initial: false,
									animate: {
										height: open ? "auto" : 0,
										opacity: open ? 1 : 0
									},
									className: "overflow-hidden",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-4 rounded-lg border border-border bg-background/40 p-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mb-2 font-mono text-xs uppercase text-accent",
											children: "Features"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
											className: "space-y-1 text-sm text-muted-foreground",
											children: p.features.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
												className: "flex gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-primary",
													children: "▹"
												}), f]
											}, f))
										})]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-5 flex flex-wrap items-center gap-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											size: "sm",
											variant: "outline",
											asChild: true,
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
												href: p.github,
												target: "_blank",
												rel: "noreferrer",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, { className: "mr-1.5 h-3.5 w-3.5" }), "Code"]
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											size: "sm",
											className: "bg-gradient-to-r from-primary to-accent text-primary-foreground",
											asChild: true,
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
												href: p.demo,
												target: "_blank",
												rel: "noreferrer",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "mr-1.5 h-3.5 w-3.5" }), "Demo"]
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
											size: "sm",
											variant: "ghost",
											onClick: () => setOpenIdx(open ? null : i),
											className: "ml-auto",
											children: [open ? "Less" : "Read more", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: cn("ml-1 h-3.5 w-3.5 transition-transform", open && "rotate-180") })]
										})
									]
								})
							]
						})]
					}, p.title);
				})
			})]
		})
	});
}
function Experience() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "experience",
		className: "relative py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-4xl px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Experience",
				title: "Where I've worked",
				description: "Hands-on roles where I've shipped real impact."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative space-y-6 pl-6 sm:pl-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-2 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-accent to-transparent sm:left-3" }), EXPERIENCE.map((e, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						x: -10
					},
					whileInView: {
						opacity: 1,
						x: 0
					},
					viewport: { once: true },
					transition: {
						duration: .5,
						delay: i * .08
					},
					className: "relative rounded-2xl border border-border bg-card p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute -left-[26px] top-7 grid h-3.5 w-3.5 place-items-center rounded-full bg-gradient-to-br from-primary to-accent ring-4 ring-background sm:-left-[30px]" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-baseline justify-between gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
								className: "font-display text-lg font-semibold",
								children: [
									e.role,
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-muted-foreground",
										children: ["· ", e.company]
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-xs text-muted-foreground",
								children: e.period
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-3 space-y-1.5 text-sm text-muted-foreground",
							children: e.points.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-primary",
									children: "▹"
								}), p]
							}, p))
						})
					]
				}, e.role))]
			})]
		})
	});
}
function Counter({ to, suffix = "" }) {
	const ref = (0, import_react.useRef)(null);
	const inView = useInView(ref, { once: true });
	const [n, setN] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		if (!inView) return;
		const start = performance.now();
		const dur = 1400;
		let raf = 0;
		const tick = (t) => {
			const p = Math.min(1, (t - start) / dur);
			setN(Math.floor(to * (1 - Math.pow(1 - p, 3))));
			if (p < 1) raf = requestAnimationFrame(tick);
		};
		raf = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(raf);
	}, [inView, to]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		ref,
		children: [n, suffix]
	});
}
function Achievements() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "achievements",
		className: "relative py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Achievements",
					title: "Milestones along the way"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-12 grid grid-cols-2 gap-4 md:grid-cols-4",
					children: STATS.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 14
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: { once: true },
						transition: { delay: i * .05 },
						className: "rounded-2xl border border-border bg-card p-6 text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-gradient text-3xl font-bold sm:text-4xl",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, {
								to: s.value,
								suffix: s.suffix
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-1 text-xs uppercase tracking-wider text-muted-foreground",
							children: s.label
						})]
					}, s.label))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-4 sm:grid-cols-2",
					children: ACHIEVEMENTS.map((a, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 14
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: { once: true },
						transition: { delay: i * .05 },
						className: "flex gap-4 rounded-2xl border border-border bg-card p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 text-accent",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trophy, { className: "h-5 w-5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-semibold",
								children: a.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: a.detail
							})]
						})]
					}, a.title))
				})
			]
		})
	});
}
function Certifications() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "certifications",
		className: "relative py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Certifications",
				title: "Verified credentials"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 sm:grid-cols-2",
				children: CERTIFICATIONS.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 14
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: { once: true },
					transition: { delay: i * .05 },
					className: "group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-accent/40",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-primary/20 to-accent/10 blur-2xl transition-opacity group-hover:opacity-100" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative flex items-start gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid h-14 w-14 shrink-0 place-items-center overflow-hidden rounded-xl border border-border bg-background/60 text-primary",
							children: c.badgeUrl && c.badgeUrl !== "#" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: c.badgeUrl,
								alt: `${c.name} badge`,
								className: "h-full w-full object-cover"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "h-6 w-6" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0 flex-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display font-semibold",
									children: c.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-1 text-sm text-muted-foreground",
									children: [
										c.issuer,
										" · ",
										c.year
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 flex flex-wrap items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "inline-flex items-center gap-1 rounded-full bg-primary/10 px-2 py-0.5 text-xs text-primary",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-3 w-3" }), " Verified"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										size: "sm",
										variant: "outline",
										className: "ml-auto",
										asChild: true,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: c.credentialUrl ?? "#",
											target: "_blank",
											rel: "noreferrer",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "mr-1.5 h-3.5 w-3.5" }), "Credential"]
										})
									})]
								})
							]
						})]
					})]
				}, c.name))
			})]
		})
	});
}
function GitHubProfile({ profile }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.article, {
		initial: {
			opacity: 0,
			y: 16
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: { once: true },
		transition: { duration: .5 },
		className: "rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-elevated)]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-start gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: profile.avatar_url,
				alt: profile.name ?? profile.login,
				className: "h-20 w-20 shrink-0 rounded-2xl border border-border object-cover"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0 flex-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-xs uppercase tracking-[0.22em] text-accent",
						children: "GitHub Profile"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-2 text-2xl font-semibold text-foreground",
						children: profile.name ?? profile.login
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-6 text-muted-foreground",
						children: profile.bio ?? "No bio available."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 flex flex-wrap gap-2 text-xs text-muted-foreground",
						children: [profile.location && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-1 rounded-full border border-border bg-background/60 px-3 py-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-3.5 w-3.5" }), profile.location]
						}), profile.company && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-1 rounded-full border border-border bg-background/60 px-3 py-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, { className: "h-3.5 w-3.5" }), profile.company]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-5 flex flex-wrap gap-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "sm",
							className: "bg-gradient-to-r from-primary to-accent text-primary-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: profile.html_url,
								target: "_blank",
								rel: "noreferrer",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "mr-1.5 h-3.5 w-3.5" }), "View profile"]
							})
						})
					})
				]
			})]
		})
	});
}
function GitHubStats({ profile, repos }) {
	const totalStars = repos.reduce((sum, repo) => sum + repo.stargazers_count, 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid grid-cols-2 gap-3 sm:grid-cols-4",
		children: [
			{
				label: "Followers",
				value: profile.followers,
				icon: Users
			},
			{
				label: "Following",
				value: profile.following,
				icon: UserRound
			},
			{
				label: "Public repos",
				value: profile.public_repos,
				icon: GitBranch
			},
			{
				label: "Repo stars",
				value: totalStars,
				icon: Star
			}
		].map((stat, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			initial: {
				opacity: 0,
				y: 12
			},
			whileInView: {
				opacity: 1,
				y: 0
			},
			viewport: { once: true },
			transition: {
				duration: .4,
				delay: index * .05
			},
			className: "rounded-2xl border border-border bg-card p-4 shadow-[var(--shadow-elevated)]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(stat.icon, { className: "mb-2 h-4 w-4 text-accent" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-2xl font-bold text-foreground",
					children: stat.value
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs text-muted-foreground",
					children: stat.label
				})
			]
		}, stat.label))
	});
}
var LEVELS = [
	"bg-[#161b22]",
	"bg-[#0e4429]",
	"bg-[#006d32]",
	"bg-[#26a641]",
	"bg-[#39d353]"
];
function ContributionGraph({ activity }) {
	const board = buildContributionBoard(activity);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.section, {
		initial: {
			opacity: 0,
			y: 16
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: { once: true },
		transition: { duration: .45 },
		className: "rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-elevated)]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-end justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-xs uppercase tracking-[0.22em] text-accent",
						children: "Contribution graph"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-2 text-xl font-semibold text-foreground",
						children: "Activity over the last year"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: [
							board.totalContributions,
							" contributions in the last year · ",
							board.longestStreak,
							" day longest streak · ",
							board.activeDays,
							" active days"
						]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "https://github.com/SANTHOSH-VJ",
					target: "_blank",
					rel: "noreferrer",
					className: "text-sm text-muted-foreground transition-colors hover:text-foreground",
					children: "View on GitHub ↗"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 overflow-x-auto rounded-3xl border border-border/70 bg-[#0d1117] p-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-[750px] grid grid-cols-[2.5rem_1fr] gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-5" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-2 grid grid-cols-[repeat(53,minmax(0,1fr))] gap-1 text-xs text-muted-foreground",
							children: board.monthLabels.map((month) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								style: { gridColumnStart: month.weekIndex + 1 },
								children: month.label
							}, `${month.label}-${month.weekIndex}`))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-rows-7 gap-1 text-xs text-muted-foreground",
							children: board.weekdayLabels.map((label) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "h-3.5 leading-none",
								children: label.label
							}, label.dayIndex))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-[repeat(53,minmax(0,1fr))] gap-1",
							children: board.weeks.map((week, weekIndex) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid grid-rows-7 gap-1",
								children: week.map((bucket) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
									title: `${bucket.date}: ${bucket.count} public events`,
									initial: {
										opacity: 0,
										scale: .9
									},
									whileInView: {
										opacity: 1,
										scale: 1
									},
									viewport: { once: true },
									transition: {
										duration: .2,
										delay: weekIndex * .01
									},
									className: `aspect-square w-full rounded-[3px] ring-1 ring-white/5 ${LEVELS[bucket.level]}`
								}, bucket.date))
							}, weekIndex))
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex flex-wrap items-center gap-2 text-xs text-muted-foreground",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mr-2",
						children: "Less"
					}),
					LEVELS.map((level, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `h-3.5 w-3.5 rounded-[3px] ring-1 ring-white/5 ${level}` }, index)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "ml-2",
						children: "More"
					})
				]
			})
		]
	});
}
function Skeleton({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("animate-pulse rounded-md bg-primary/10", className),
		...props
	});
}
function GitHubSectionSkeleton() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-6 xl:grid-cols-[0.9fr_1.1fr]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-elevated)]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-20 w-20 rounded-2xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1 space-y-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-4 w-28" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-7 w-40" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-4 w-full" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-4 w-4/5" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-8 w-24 rounded-full" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-8 w-24 rounded-full" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-9 w-32 rounded-md" })
						]
					})]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 gap-3 sm:grid-cols-4",
				children: Array.from({ length: 4 }).map((_, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-border bg-card p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "mb-2 h-4 w-4" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-7 w-16" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "mt-2 h-3 w-20" })
					]
				}, index))
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-elevated)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-3 w-28" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-6 w-52" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-4 w-52" })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-5 grid grid-flow-col grid-rows-7 gap-1.5 overflow-hidden",
					children: Array.from({ length: 42 }).map((_, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-3.5 w-3.5 rounded-sm" }, index))
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-elevated)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-3 w-36" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "mt-2 h-6 w-56" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-5 grid gap-4 sm:grid-cols-2",
						children: Array.from({ length: 4 }).map((_, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-border bg-background/70 p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-4 w-28" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "mt-3 h-4 w-full" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "mt-2 h-4 w-4/5" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "mt-4 h-9 w-24 rounded-md" })
							]
						}, index))
					})
				]
			})]
		})]
	});
}
function GithubSection() {
	const { data, isLoading, isError, error, refetch, isFetching } = useGitHubDashboard();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "github",
		className: "relative py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "GitHub",
					title: "Live GitHub data",
					description: "A dynamic view of my profile, recent activity, and featured repositories."
				}),
				isLoading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GitHubSectionSkeleton, {}),
				isError && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-elevated)]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-start justify-between gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-10 w-10 place-items-center rounded-xl bg-destructive/10 text-destructive",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "h-5 w-5" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-semibold text-foreground",
								children: "Unable to load GitHub data"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: error instanceof Error ? error.message : "Something went wrong while fetching GitHub data."
							})] })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "outline",
								onClick: () => refetch(),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: `mr-1.5 h-3.5 w-3.5 ${isFetching ? "animate-spin" : ""}` }), "Retry"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								className: "bg-gradient-to-r from-primary to-accent text-primary-foreground",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: PROFILE.github,
									target: "_blank",
									rel: "noreferrer",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, { className: "mr-1.5 h-3.5 w-3.5" }), "Open GitHub"]
								})
							})]
						})]
					})
				}),
				data && !isError && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-6 xl:grid-cols-[0.9fr_1.1fr]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GitHubProfile, { profile: data.profile }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GitHubStats, {
							profile: data.profile,
							repos: data.repos
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContributionGraph, { activity: data.activity })
					})]
				})
			]
		})
	});
}
var Input = import_react.forwardRef(({ className, type, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Input.displayName = "Input";
var Textarea = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Textarea.displayName = "Textarea";
var labelVariants = cva("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
var Label = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
	ref,
	className: cn(labelVariants(), className),
	...props
}));
Label.displayName = Root.displayName;
var schema = objectType({
	name: stringType().trim().min(1, "Name is required").max(100),
	email: stringType().trim().email("Invalid email").max(255),
	message: stringType().trim().min(5, "Message too short").max(1e3)
});
var CONTACT = [
	{
		icon: Mail,
		label: "Email",
		value: PROFILE.email,
		href: `mailto:${PROFILE.email}`
	},
	{
		icon: Phone,
		label: "Phone",
		value: PROFILE.phone,
		href: `tel:${PROFILE.phone}`
	},
	{
		icon: MapPin,
		label: "Location",
		value: PROFILE.location,
		href: "#"
	},
	{
		icon: Linkedin,
		label: "LinkedIn",
		value: "Connect with me",
		href: PROFILE.linkedin
	},
	{
		icon: Github,
		label: "GitHub",
		value: "Follow my work",
		href: PROFILE.github
	}
];
function Contact() {
	const [form, setForm] = (0, import_react.useState)({
		name: "",
		email: "",
		message: ""
	});
	const [submitting, setSubmitting] = (0, import_react.useState)(false);
	const onSubmit = (e) => {
		e.preventDefault();
		const parsed = schema.safeParse(form);
		if (!parsed.success) {
			toast.error(parsed.error.issues[0]?.message ?? "Invalid input");
			return;
		}
		setSubmitting(true);
		setTimeout(() => {
			toast.success("Message sent — I'll get back to you soon.");
			setForm({
				name: "",
				email: "",
				message: ""
			});
			setSubmitting(false);
		}, 700);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		className: "relative py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Contact",
				title: "Let's build something great",
				description: "Open to internships, full-time roles, and interesting collaborations."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 lg:grid-cols-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 14
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: { once: true },
					className: "lg:col-span-2 space-y-3",
					children: [CONTACT.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: c.href,
						target: c.href.startsWith("http") ? "_blank" : void 0,
						rel: "noreferrer",
						className: "group flex items-center gap-4 rounded-2xl border border-border bg-card p-4 transition-all hover:-translate-y-0.5 hover:border-primary/40",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 text-primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(c.icon, { className: "h-5 w-5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs uppercase tracking-wider text-muted-foreground",
								children: c.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "truncate text-sm font-medium",
								children: c.value
							})]
						})]
					}, c.label)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						className: "w-full bg-gradient-to-r from-primary to-accent text-primary-foreground",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: PROFILE.resumeUrl,
							download: true,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "mr-2 h-4 w-4" }), "Download Resume"]
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.form, {
					initial: {
						opacity: 0,
						y: 14
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: { once: true },
					onSubmit,
					className: "lg:col-span-3 space-y-4 rounded-2xl border border-border bg-card p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-4 sm:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "name",
								children: "Name"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "name",
								value: form.name,
								onChange: (e) => setForm({
									...form,
									name: e.target.value
								}),
								placeholder: "Jane Doe",
								className: "mt-1.5"
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "email",
								children: "Email"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "email",
								type: "email",
								value: form.email,
								onChange: (e) => setForm({
									...form,
									email: e.target.value
								}),
								placeholder: "jane@company.com",
								className: "mt-1.5"
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "message",
							children: "Message"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
							id: "message",
							rows: 6,
							value: form.message,
							onChange: (e) => setForm({
								...form,
								message: e.target.value
							}),
							placeholder: "Tell me about the role or project…",
							className: "mt-1.5"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							type: "submit",
							disabled: submitting,
							className: "w-full bg-gradient-to-r from-primary to-accent text-primary-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "mr-2 h-4 w-4" }), submitting ? "Sending…" : "Send message"]
						})
					]
				})]
			})]
		})
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-border py-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:flex-row",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-sm text-muted-foreground",
					children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" ",
						PROFILE.name,
						". Crafted with care."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "flex flex-wrap justify-center gap-x-4 gap-y-1 text-xs text-muted-foreground",
					children: NAV_LINKS.slice(0, 6).map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: `#${l.id}`,
						className: "hover:text-foreground",
						children: l.label
					}, l.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: PROFILE.github,
							target: "_blank",
							rel: "noreferrer",
							"aria-label": "GitHub",
							className: "hover:text-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, { className: "h-4 w-4" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: PROFILE.linkedin,
							target: "_blank",
							rel: "noreferrer",
							"aria-label": "LinkedIn",
							className: "hover:text-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Linkedin, { className: "h-4 w-4" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `mailto:${PROFILE.email}`,
							"aria-label": "Email",
							className: "hover:text-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4" })
						})
					]
				})
			]
		})
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skills, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Projects, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Experience, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Achievements, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Certifications, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GithubSection, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, {
				theme: "dark",
				position: "bottom-right"
			})
		]
	});
}
//#endregion
export { Index as component };
