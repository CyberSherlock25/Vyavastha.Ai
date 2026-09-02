import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link to="/" className="text-2xl font-bold">
              Vyavastha
              <span className="text-violet-400">.AI</span>
            </Link>

            <p className="mt-4 max-w-md leading-7 text-slate-400">
              An AI powered platform designed to simplify event and
              infrastructure approval workflows through intelligent insights
              and transparent collaboration.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white">Platform</h3>

            <div className="mt-4 flex flex-col gap-3 text-sm text-slate-400">
              <a
                href="#features"
                className="transition hover:text-violet-300"
              >
                Features
              </a>

              <a
                href="#how-it-works"
                className="transition hover:text-violet-300"
              >
                How It Works
              </a>

              <a
                href="#stakeholders"
                className="transition hover:text-violet-300"
              >
                Stakeholders
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white">Account</h3>

            <div className="mt-4 flex flex-col gap-3 text-sm text-slate-400">
              <Link
                to="/login"
                className="transition hover:text-violet-300"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="transition hover:text-violet-300"
              >
                Register
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-7 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Vyavastha.AI. All rights reserved.
          </p>

          <p>AI Powered Governance & Intelligent Approvals</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;