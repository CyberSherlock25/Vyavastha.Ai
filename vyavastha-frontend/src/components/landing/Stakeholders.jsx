function Stakeholders() {
  const stakeholders = [
    {
      title: "Event Hosts",
      subtitle: "Citizens & Organizers",
      description:
        "Submit events, provide required information, upload documents and track approval status from one place.",
      icon: "◎",
    },
    {
      title: "Government Authorities",
      subtitle: "Decision Makers",
      description:
        "Review applications, access AI assisted insights and make informed approval decisions.",
      icon: "◇",
    },
    {
      title: "Administrators",
      subtitle: "Platform Supervisors",
      description:
        "Monitor users, events, applications and the overall approval ecosystem through centralized supervision.",
      icon: "✦",
    },
  ];

  return (
    <section id="stakeholders" className="relative py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <div className="mb-4 inline-flex rounded-full border border-violet-400/20 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-300">
              One Platform
            </div>

            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Built for every
              <span className="block bg-gradient-to-r from-violet-300 to-indigo-400 bg-clip-text text-transparent">
                stakeholder
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
              Vyavastha.AI creates a common digital platform where citizens,
              government authorities and administrators can collaborate with
              clarity and accountability.
            </p>

            <div className="mt-8 flex items-center gap-3 text-sm text-slate-300">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
                ✓
              </span>
              Role based access for every stakeholder
            </div>

            <div className="mt-3 flex items-center gap-3 text-sm text-slate-300">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
                ✓
              </span>
              Transparent application lifecycle
            </div>

            <div className="mt-3 flex items-center gap-3 text-sm text-slate-300">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
                ✓
              </span>
              AI assisted decision support
            </div>
          </div>

          <div className="grid gap-5">
            {stakeholders.map((stakeholder, index) => (
              <div
                key={stakeholder.title}
                className={`group rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition hover:border-violet-400/30 ${
                  index === 1 ? "lg:translate-x-8" : ""
                }`}
              >
                <div className="flex gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-500/10 text-2xl text-violet-300">
                    {stakeholder.icon}
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-violet-400">
                      {stakeholder.subtitle}
                    </p>

                    <h3 className="mt-1 text-xl font-semibold text-white">
                      {stakeholder.title}
                    </h3>

                    <p className="mt-2 leading-7 text-slate-400">
                      {stakeholder.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stakeholders;