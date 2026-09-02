import { useState } from "react";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-3">
      <div className="relative flex h-11 w-11 items-center justify-center">
        <div className="absolute inset-0 rounded-xl bg-violet-600/20 blur-md" />

        <svg
          viewBox="0 0 48 48"
          className="relative h-11 w-11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24 4L40 10V22C40 32.5 33.5 40.5 24 44C14.5 40.5 8 32.5 8 22V10L24 4Z"
            fill="url(#shieldGradient)"
            stroke="#A78BFA"
            strokeWidth="1.5"
          />

          <path
            d="M24 13L32 16V22C32 28.2 28.6 33.1 24 35C19.4 33.1 16 28.2 16 22V16L24 13Z"
            fill="#111827"
          />

          <path
            d="M20.5 24L23 26.5L28 21"
            stroke="#A78BFA"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <defs>
            <linearGradient
              id="shieldGradient"
              x1="8"
              y1="4"
              x2="40"
              y2="44"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#C084FC" />
              <stop offset="1" stopColor="#4F46E5" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="text-2xl font-bold tracking-tight">
        Vyavastha
        <span className="text-violet-400">.AI</span>
      </div>
    </Link>
  );
}

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "About Us", href: "#stakeholders" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-3 pt-2 sm:px-5">
      <div className="mx-auto max-w-7xl">
        <nav className="rounded-2xl border border-white/10 bg-slate-950/80 px-5 py-3 shadow-2xl shadow-black/20 backdrop-blur-xl">
          <div className="flex items-center justify-between">
            <Logo />

            <div className="hidden items-center gap-8 lg:flex">
              {navItems.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`relative py-2 text-sm font-medium transition ${
                    index === 0
                      ? "text-white"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  {item.label}

                  {index === 0 && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-violet-500" />
                  )}
                </a>
              ))}
            </div>

            <div className="hidden items-center gap-3 sm:flex">
              <Link
                to="/login"
                className="rounded-xl border border-violet-400/40 px-5 py-2.5 text-sm font-semibold text-violet-200 transition hover:border-violet-400 hover:bg-violet-500/10 hover:text-white"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-violet-900/30 transition hover:scale-[1.02] hover:from-violet-500 hover:to-indigo-500"
              >
                Register
              </Link>
            </div>

            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="rounded-lg border border-white/10 p-2 text-slate-200 sm:hidden"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {mobileOpen && (
            <div className="mt-4 border-t border-white/10 pt-4 sm:hidden">
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-lg px-3 py-2.5 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white"
                  >
                    {item.label}
                  </a>
                ))}

                <div className="mt-2 flex gap-2 border-t border-white/10 pt-4">
                  <Link
                    to="/login"
                    className="flex-1 rounded-xl border border-violet-400/40 px-4 py-2.5 text-center text-sm font-semibold text-violet-200"
                  >
                    Login
                  </Link>

                  <Link
                    to="/register"
                    className="flex-1 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-4 py-2.5 text-center text-sm font-semibold"
                  >
                    Register
                  </Link>
                </div>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;