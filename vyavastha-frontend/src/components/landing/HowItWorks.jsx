function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Register & Create Event",
      description:
        "The event host registers and provides the required event, location, crowd and infrastructure information.",
    },
    {
      number: "02",
      title: "Submit Application",
      description:
        "The event application is submitted digitally with the required documents and supporting information.",
    },
    {
      number: "03",
      title: "AI Assessment",
      description:
        "Vyavastha.AI analyzes event information and provides crowd, infrastructure and risk insights.",
    },
    {
      number: "04",
      title: "Government Review",
      description:
        "The relevant authority reviews the application, supporting information and AI generated recommendations.",
    },
    {
      number: "05",
      title: "Decision & Tracking",
      description:
        "The application is approved or rejected and the event host can track the complete status transparently.",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden border-y border-white/5 bg-slate-900/30 py-28"
    >
      <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-indigo-600/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 inline-flex rounded-full border border-indigo-400/20 bg-indigo-500/10 px-4 py-2 text-sm font-medium text-indigo-300">
            Simple Process
          </div>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            How Vyavastha
            <span className="bg-gradient-to-r from-violet-300 to-indigo-400 bg-clip-text text-transparent">
              {" "}
              works
            </span>
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-400">
            From event submission to government approval, every step is
            connected through one transparent workflow.
          </p>
        </div>

        <div className="relative mx-auto mt-20 max-w-5xl">
          <div className="absolute left-[31px] top-10 hidden h-[calc(100%-80px)] w-px bg-gradient-to-b from-violet-500/50 via-indigo-500/30 to-transparent md:block" />

          <div className="space-y-7">
            {steps.map((step) => (
              <div
                key={step.number}
                className="relative flex gap-5 rounded-2xl border border-white/10 bg-white/[0.025] p-5 backdrop-blur-xl transition hover:border-violet-400/30 md:gap-8 md:p-7"
              >
                <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-violet-400/30 bg-slate-950 text-sm font-bold text-violet-300 shadow-lg shadow-violet-950/20">
                  {step.number}
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {step.title}
                  </h3>

                  <p className="mt-2 max-w-3xl leading-7 text-slate-400">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;