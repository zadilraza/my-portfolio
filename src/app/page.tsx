const skills = [
  "Circuit Analysis",
  "LTspice",
  "Arduino",
  "C/C++",
  "Verilog",
  "FPGA",
  "Quartus Prime",
  "Questa / ModelSim",
  "Oscilloscopes",
  "Digital Multimeters",
  "Power Systems",
  "Semiconductor Devices",
];

const projects = [
  {
    number: "01",
    title: "Gesture-Controlled Portable Workstation",
    subtitle: "Arduino · Embedded Systems · Motor Control",
    description:
      "Built an Arduino-based electromechanical workstation integrating DC motors, motor-driver circuitry, embedded control logic, and a wheeled chassis. Tested and refined the system for responsive and reliable movement.",
  },
  {
    number: "02",
    title: "Analog Circuit Simulation & Characterization",
    subtitle: "LTspice · OP07 · Filters · AC Analysis",
    description:
      "Simulated op-amp circuits and RC filters using transient and AC sweep analysis. Evaluated gain, phase response, cutoff frequency, bandwidth, and unity-gain frequency while comparing theoretical and simulated results.",
  },
  {
    number: "03",
    title: "Digital Logic & FPGA Labs",
    subtitle: "Verilog · Quartus Prime · Questa",
    description:
      "Currently developing digital hardware skills through Verilog modules, testbenches, waveform simulation, combinational logic, and FPGA development workflows.",
  },
];

const coursework = [
  "Circuits I",
  "Circuits II",
  "Hardware Design Language",
  "Properties of Semiconductors",
  "Power Systems",
  "Quantum Mechanics",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-blue-500/30">

      {/* NAVBAR */}
      <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a
            href="#home"
            className="text-lg font-bold tracking-tight transition hover:opacity-70"
          >
            AZ<span className="text-blue-400">.</span>
          </a>

          <div className="hidden items-center gap-7 text-sm text-gray-400 md:flex">
            <a href="#about" className="transition hover:text-white">
              About
            </a>
            <a href="#skills" className="transition hover:text-white">
              Skills
            </a>
            <a href="#projects" className="transition hover:text-white">
              Projects
            </a>
            <a href="#coursework" className="transition hover:text-white">
              Coursework
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              className="rounded-full border border-white/20 px-4 py-2 text-white transition hover:border-white"
            >
              Resume
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section
        id="home"
        className="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
      >
        <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[120px]" />

        <div className="absolute right-[10%] top-[20%] h-48 w-48 rounded-full bg-purple-600/5 blur-[100px]" />

        <div className="relative z-10 max-w-5xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-gray-400">
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
            Open to Engineering Internships & Co-ops
          </div>

          <h1 className="text-5xl font-bold tracking-[-0.04em] sm:text-7xl md:text-8xl">
            Adil Zaidi
          </h1>

          <h2 className="mt-4 text-2xl font-medium text-gray-400 sm:text-3xl">
            Electrical Engineering Student
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-gray-400">
            Building experience across circuits, power systems, semiconductor
            devices, embedded systems, and digital hardware at Arizona State
            University.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="#projects"
              className="rounded-full bg-white px-7 py-3 font-medium text-black transition duration-300 hover:scale-105 hover:bg-gray-200"
            >
              Explore My Work
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              className="rounded-full border border-white/20 px-7 py-3 font-medium transition duration-300 hover:border-white hover:bg-white/5"
            >
              View Resume ↗
            </a>
          </div>

          <div className="mt-9 flex justify-center gap-6 text-sm text-gray-500">
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white"
            >
              LinkedIn ↗
            </a>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white"
            >
              GitHub ↗
            </a>

            <a
              href="mailto:zaidiraza@gmail.com"
              className="transition hover:text-white"
            >
              Email ↗
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="border-t border-white/10 px-6 py-28">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
            01 / About
          </p>

          <div className="mt-8 grid gap-14 md:grid-cols-[1fr_1.2fr]">
            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Learning engineering by building, testing, and understanding.
            </h2>

            <div className="space-y-5 text-lg leading-8 text-gray-400">
              <p>
                I&apos;m an Electrical Engineering student at Arizona State
                University with interests spanning analog circuits, power
                systems, semiconductor devices, embedded systems, and digital
                hardware.
              </p>

              <p>
                I enjoy connecting classroom theory with hands-on engineering —
                whether that means analyzing a circuit in LTspice, taking
                measurements with laboratory equipment, building an embedded
                system, or developing Verilog and FPGA skills.
              </p>

              <p>
                I&apos;m currently seeking opportunities where I can contribute,
                learn from experienced engineers, and build deeper practical
                experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section
        id="skills"
        className="border-t border-white/10 bg-white/[0.015] px-6 py-28"
      >
        <div className="mx-auto max-w-6xl">
          <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
            02 / Technical Skills
          </p>

          <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
            Tools I&apos;m working with.
          </h2>

          <div className="mt-12 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm text-gray-300 transition duration-300 hover:-translate-y-1 hover:border-blue-400/50 hover:text-white"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="border-t border-white/10 px-6 py-28">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
            03 / Engineering Work
          </p>

          <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
            Selected projects & labs.
          </h2>

          <div className="mt-14 grid gap-6">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group grid gap-6 rounded-3xl border border-white/10 bg-white/[0.02] p-8 transition duration-300 hover:-translate-y-1 hover:border-white/20 md:grid-cols-[100px_1fr]"
              >
                <div className="text-4xl font-light text-white/20 transition group-hover:text-blue-400">
                  {project.number}
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                    {project.subtitle}
                  </p>

                  <h3 className="mt-3 text-2xl font-semibold sm:text-3xl">
                    {project.title}
                  </h3>

                  <p className="mt-5 max-w-3xl leading-7 text-gray-400">
                    {project.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* COURSEWORK */}
      <section
        id="coursework"
        className="border-t border-white/10 bg-white/[0.015] px-6 py-28"
      >
        <div className="mx-auto max-w-6xl">
          <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
            04 / Coursework
          </p>

          <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
            Electrical engineering foundation.
          </h2>

          <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2 md:grid-cols-3">
            {coursework.map((course) => (
              <div
                key={course}
                className="bg-[#080808] p-7 text-gray-300 transition hover:bg-white/[0.04] hover:text-white"
              >
                {course}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="border-t border-white/10 px-6 py-32">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
            05 / Contact
          </p>

          <h2 className="mt-6 text-5xl font-semibold tracking-tight sm:text-6xl">
            Let&apos;s build something.
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-400">
            I&apos;m currently looking for electrical engineering internship and
            co-op opportunities and would be glad to connect.
          </p>

          <a
            href="mailto:zaidiraza@gmail.com"
            className="mt-10 inline-block rounded-full bg-white px-8 py-4 font-medium text-black transition duration-300 hover:scale-105"
          >
            Get In Touch
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 text-sm text-gray-600 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Adil Zaidi</p>
          <p>Designed & built with Next.js + Tailwind CSS</p>
        </div>
      </footer>
    </main>
  );
}