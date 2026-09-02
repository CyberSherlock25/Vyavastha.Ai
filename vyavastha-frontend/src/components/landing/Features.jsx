function FeatureIcon({ type }) {
  const icons = {
    intelligence: (
      <svg
        className="h-7 w-7"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 7l-1.5-1.5M18.5 18.5L17 17M17 7l1.5-1.5M6.5 18.5L8 17"
        />
        <rect x="7" y="7" width="10" height="10" rx="2" strokeWidth="1.5" />
        <path
          strokeLinecap="round"
          strokeWidth={1.5}
          d="M10 11h4M10 14h4"
        />
      </svg>
    ),

    automation: (
      <svg
        className="h-7 w-7"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 3v3M12 18v3M3 12h3M18 12h3"
        />
        <circle cx="12" cy="12" r="5" strokeWidth="1.5" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15.5 8.5l1.5-1.5M7 17l1.5-1.5M15.5 15.5l1.5 1.5M7 7l1.5 1.5"
        />
      </svg>
    ),

    visibility: (
      <svg
        className="h-7 w-7"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12z"
        />
        <circle cx="12" cy="12" r="3" strokeWidth="1.5" />
      </svg>
    ),

    security: (
      <svg
        className="h-7 w-7"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 3l8 4v5c0 4.5-3.1 8.5-8 10-4.9-1.5-8-5.5-8-10V7l8-4z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4"
        />
      </svg>
    ),

    transparency: (
      <svg
        className="h-7 w-7"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4 19V9m5 10V5m5 14v-7m5 7V3"
        />
      </svg>
    ),

    insights: (
      <svg
        className="h-7 w-7"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4 19V5M4 19h16"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M7 15l4-4 3 2 5-6"
        />
      </svg>
    ),
  };

  return icons[type];
}

function Features() {
  const features = [
    {
      type: "intelligence",
      title: "AI Powered Intelligence",
      description:
        "Analyze event information, infrastructure requirements and crowd impact to provide intelligent decision support.",
    },
    {
      type: "automation",
      title: "Seamless Automation",
      description:
        "Automate application routing, status updates, notifications and approval workflows across stakeholders.",
    },
    {
      type: "visibility",
      title: "Real Time Visibility",
      description:
        "Track applications and approval progress with clear status information at every stage.",
    },
    {
      type: "security",
      title: "Secure & Reliable",
      description:
        "Role based access ensures that event hosts, authorities and administrators only access relevant information.",
    },
    {
      type: "transparency",
      title: "Transparent Workflow",
      description:
        "Create a clear and accountable approval process where every application moves through defined stages.",
    },
    {
      type: "insights",
      title: "Data Driven Insights",
      description:
        "Transform event and infrastructure data into actionable recommendations for better decision making.",
    },
  ];

  return (
    <section id="features" className="relative py-28">
      <div className="absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-violet-600/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 inline-flex rounded-full border border-violet-400/20 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-300">
            Platform Capabilities
          </div>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Everything needed for
            <span className="block bg-gradient-to-r from-violet-300 to-indigo-400 bg-clip-text text-transparent">
              smarter approvals
            </span>
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-400">
            Vyavastha.AI connects citizens, government authorities and
            administrators through one intelligent approval platform.
          </p>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-violet-400/30 hover:bg-violet-500/[0.05]"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-500/10 text-violet-300 transition group-hover:bg-violet-500/20">
                <FeatureIcon type={feature.type} />
              </div>

              <h3 className="text-xl font-semibold text-white">
                {feature.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-400">
                {feature.description}
              </p>

              <div className="mt-6 h-px w-12 bg-gradient-to-r from-violet-500 to-transparent transition-all group-hover:w-20" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;