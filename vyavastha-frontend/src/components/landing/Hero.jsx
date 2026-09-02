import { Link } from "react-router-dom";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden pt-32"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_45%,rgba(124,58,237,0.18),transparent_30%),radial-gradient(circle_at_20%_20%,rgba(79,70,229,0.14),transparent_30%)]" />

      <div className="absolute inset-0 opacity-20">
        <div className="h-full w-full bg-[linear-gradient(rgba(139,92,246,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.08)_1px,transparent_1px)] bg-[size:70px_70px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 pb-24 sm:px-8">
        <div className="grid min-h-[650px] items-center gap-16 lg:grid-cols-2">
          <div className="relative z-10">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-violet-400/40 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-200 backdrop-blur">
              <span className="flex h-2 w-2 rounded-full bg-violet-400 shadow-lg shadow-violet-500" />

              AI Powered Crowd Intelligence & Infrastructure Approval Platform
            </div>

            <h1 className="max-w-3xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Connect
              <span className="mx-3 text-violet-500">•</span>
              Simplify
              <br />

              <span className="bg-gradient-to-r from-violet-300 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                Assist
              </span>

              <span className="mx-3 text-violet-500">•</span>

              <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                Govern
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300 sm:text-xl">
              Vyavastha.AI streamlines event and infrastructure approvals
              using AI powered insights, intelligent automation and
              transparent workflows for every stakeholder.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/login"
                className="group inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-7 py-4 font-semibold text-white shadow-xl shadow-violet-900/30 transition hover:scale-[1.02] hover:from-violet-500 hover:to-indigo-500"
              >
                Get Started

                <svg
                  className="h-5 w-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>

              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/15 bg-white/5 px-7 py-4 font-semibold text-white backdrop-blur transition hover:border-violet-400/50 hover:bg-violet-500/10"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-violet-400/50 text-violet-300">
                  <svg
                    className="ml-0.5 h-3.5 w-3.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M6.5 4.5L15 10l-8.5 5.5v-11z" />
                  </svg>
                </span>

                See How It Works
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-400">
              <span>AI Assisted Decisions</span>
              <span>Secure Workflows</span>
              <span>Role Based Access</span>
            </div>
          </div>

          <div className="relative flex min-h-[500px] items-center justify-center">
            <div className="absolute h-80 w-80 rounded-full bg-violet-600/20 blur-3xl" />

            <div className="absolute h-[390px] w-[390px] rounded-full border border-violet-500/20" />
            <div className="absolute h-[310px] w-[310px] rounded-full border border-indigo-500/20" />
            <div className="absolute h-[230px] w-[230px] rounded-full border border-purple-500/30" />

            <div className="relative flex h-52 w-52 items-center justify-center rounded-full border border-violet-400/50 bg-slate-950/80 shadow-2xl shadow-violet-900/40 backdrop-blur-xl">
              <div className="absolute inset-4 rounded-full border border-violet-400/20" />

              <div className="text-center">
                <div className="mx-auto mb-2 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500/30 to-indigo-500/20">
                  <svg
                    className="h-10 w-10 text-violet-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 3a9 9 0 100 18 9 9 0 000-18z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M8.5 12a3.5 3.5 0 017 0"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M10 15.5a3 3 0 014 0"
                    />
                  </svg>
                </div>

                <div className="text-4xl font-bold text-white">AI</div>
                <div className="mt-1 text-xs uppercase tracking-[0.3em] text-violet-300">
                  Intelligence
                </div>
              </div>
            </div>

            <div className="absolute right-0 top-4 w-52 rounded-2xl border border-violet-400/30 bg-slate-900/80 p-4 shadow-xl shadow-violet-950/20 backdrop-blur-xl sm:right-4">
              <div className="flex gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-500/15 text-violet-300">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M7 3h10a2 2 0 012 2v14a2 2 0 01-2 2H7a2 2 0 01-2-2V5a2 2 0 012-2z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 8h6M9 12h6M9 16h4"
                    />
                  </svg>
                </div>

                <div>
                  <p className="text-sm font-semibold text-white">
                    Intelligent Review
                  </p>
                  <p className="mt-1 text-xs leading-5 text-slate-400">
                    AI analyzes applications and documents
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute left-0 top-1/2 w-52 -translate-y-1/2 rounded-2xl border border-indigo-400/30 bg-slate-900/80 p-4 shadow-xl shadow-indigo-950/20 backdrop-blur-xl sm:left-2">
              <div className="flex gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-500/15 text-indigo-300">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2"
                    />
                    <circle
                      cx="9"
                      cy="7"
                      r="4"
                      strokeWidth="1.5"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M22 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"
                    />
                  </svg>
                </div>

                <div>
                  <p className="text-sm font-semibold text-white">
                    Crowd Intelligence
                  </p>
                  <p className="mt-1 text-xs leading-5 text-slate-400">
                    Predicts footfall and crowd impact
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-4 right-0 w-52 rounded-2xl border border-indigo-400/30 bg-slate-900/80 p-4 shadow-xl shadow-indigo-950/20 backdrop-blur-xl sm:right-4">
              <div className="flex gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-500/15 text-indigo-300">
                  <svg
                    className="h-5 w-5"
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
                </div>

                <div>
                  <p className="text-sm font-semibold text-white">
                    Risk Assessment
                  </p>
                  <p className="mt-1 text-xs leading-5 text-slate-400">
                    Identifies risks and safety concerns
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-0 left-1/2 hidden w-52 -translate-x-1/2 rounded-2xl border border-violet-400/30 bg-slate-900/80 p-4 shadow-xl shadow-violet-950/20 backdrop-blur-xl sm:block">
              <div className="flex gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-500/15 text-violet-300">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 8v4l3 2"
                    />
                    <circle
                      cx="12"
                      cy="12"
                      r="9"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>

                <div>
                  <p className="text-sm font-semibold text-white">
                    Smart Automation
                  </p>
                  <p className="mt-1 text-xs leading-5 text-slate-400">
                    Automates routing and updates
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-4 rounded-3xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "AI Powered Intelligence",
              text: "Smart analysis and recommendations",
              icon: "✦",
            },
            {
              title: "Seamless Automation",
              text: "Automated routing and updates",
              icon: "⚙",
            },
            {
              title: "Real Time Visibility",
              text: "Live tracking and application status",
              icon: "◉",
            },
            {
              title: "Secure & Reliable",
              text: "Role based access and security",
              icon: "◈",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="flex items-center gap-4 border-white/10 px-3 py-4 sm:border-r last:border-r-0"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-violet-400/30 bg-violet-500/10 text-xl text-violet-300">
                {item.icon}
              </div>

              <div>
                <h3 className="text-sm font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs leading-5 text-slate-400">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;