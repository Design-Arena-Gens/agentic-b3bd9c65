export default function HomePage() {
  return (
    <main className="bg-hero-gradient">
      <section className="container-content pt-24 pb-20">
        <div className="badge mb-6">
          <span className="w-2 h-2 rounded-full bg-brand-saffron"></span>
          IIFS — Indian Institute of Future Skills
        </div>
        <h1 className="max-w-4xl text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">
          Reimagining India’s education for the AI age
        </h1>
        <p className="mt-6 max-w-2xl text-lg md:text-xl text-white/80">
          A modern, skill-first, AI-powered curriculum aligning learners with 21st-century industry needs. Accessible, inclusive, and outcome-driven.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a className="btn-primary" href="#programs">Explore Programs</a>
          <a className="btn-secondary" href="#vision">Our Vision</a>
        </div>
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            ['1M+', 'Learners by 2028'],
            ['200+', 'Industry partners'],
            ['100%', 'Placement support'],
            ['24x7', 'AI mentor access'],
          ].map(([stat, label]) => (
            <div className="card p-6" key={label}>
              <div className="text-3xl font-extrabold text-brand-blue">{stat}</div>
              <div className="mt-1 text-brand-blue/70">{label}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="vision" className="container-content py-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold">Why IIFS</h2>
            <p className="mt-4 text-white/80">
              India’s demographic dividend needs future-ready skills. IIFS blends rigorous foundations with hands-on projects, apprenticeships, and AI-powered personalized learning.
            </p>
            <ul className="mt-6 space-y-3 text-white/85">
              <li className="flex gap-3"><span className="text-brand-saffron">◆</span> National Curriculum aligned with NEP and industry frameworks</li>
              <li className="flex gap-3"><span className="text-brand-saffron">◆</span> AI Mentor for 24/7 feedback and adaptive pathways</li>
              <li className="flex gap-3"><span className="text-brand-saffron">◆</span> Placement-ready portfolios with real internships</li>
            </ul>
          </div>
          <div className="card p-8">
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                ['AI & Data', 'ML, GenAI, NLP, MLOps'],
                ['Digital Systems', 'Cloud, DevOps, Cybersecurity'],
                ['Product & Design', 'UX, No-code, PM'],
                ['Core Engineering', 'Robotics, IoT, EV'],
              ].map(([title, text]) => (
                <div key={title}>
                  <div className="font-bold text-brand-blue">{title}</div>
                  <div className="text-brand-blue/70 mt-1 text-sm">{text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="programs" className="container-content py-20">
        <h2 className="text-3xl md:text-4xl font-extrabold">Programs</h2>
        <p className="mt-3 text-white/80 max-w-2xl">
          Modular, stackable credentials from foundation to advanced levels. Learn full-time or alongside school/college.
        </p>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {[
            {
              title: 'IIFS Foundation (Class 6-12)',
              desc: 'Math+Logic+Computing with creativity and ethics, integrated with school learning.',
              cta: 'Explore Foundation',
            },
            {
              title: 'IIFS Undergraduate Tracks',
              desc: 'Specialized tracks in AI, Software, Cybersecurity, and Design with co-op semesters.',
              cta: 'Explore UG Tracks',
            },
            {
              title: 'IIFS Professional Diplomas',
              desc: '6-12 month, job-ready diplomas with guaranteed interview pathways.',
              cta: 'Explore Diplomas',
            },
          ].map((p) => (
            <div className="card p-6 flex flex-col" key={p.title}>
              <div className="font-extrabold text-xl">{p.title}</div>
              <div className="mt-2 text-brand-blue/70 flex-1">{p.desc}</div>
              <a className="mt-6 self-start btn-primary" href="#contact">{p.cta}</a>
            </div>
          ))}
        </div>
      </section>

      <section className="container-content py-20">
        <div className="card p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="badge mb-3">AI Mentor</div>
              <h3 className="text-2xl font-extrabold text-brand-blue">Personalized AI guidance for every learner</h3>
              <p className="mt-3 text-brand-blue/70">
                Get instant feedback, code reviews, doubt clearing, and project suggestions. Bilingual support in English and Hindi.
              </p>
            </div>
            <form className="grid gap-3">
              <input className="rounded-lg border border-brand-blue/20 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-saffron/60" placeholder="Email address"/>
              <button className="btn-primary w-full" type="button">Get Early Access</button>
              <div className="text-xs text-brand-blue/60">By signing up, you agree to our terms.</div>
            </form>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="container-content py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-white/70">© {new Date().getFullYear()} IIFS — Indian Institute of Future Skills</div>
          <div className="flex gap-4 text-white/80">
            <a href="#vision" className="hover:underline">Vision</a>
            <a href="#programs" className="hover:underline">Programs</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
