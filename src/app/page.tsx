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
    subtitle: "Embedded Systems · Motor Control",
    description:
      "Built an Arduino-based electromechanical workstation using DC motors, motor-driver circuitry, embedded control logic, and a wheeled chassis.",
    did:
      "Integrated the electrical, mechanical, and software parts of the system and tested movement and control behavior.",
    learned:
      "Improved my troubleshooting, hardware integration, and system testing skills.",
    tags: ["Arduino", "C/C++", "Motor Drivers", "Embedded Systems"],
  },
  {
    number: "02",
    title: "Analog Circuit Simulation & Characterization",
    subtitle: "Op-Amps · Filters · Frequency Response",
    description:
      "Simulated and analyzed analog circuits in LTspice, including op-amp configurations and filter behavior.",
    did:
      "Used transient and AC sweep analysis to evaluate gain, phase, cutoff frequency, bandwidth, and unity-gain frequency.",
    learned:
      "Strengthened my understanding of practical circuit behavior and the relationship between theoretical and simulated results.",
    tags: ["LTspice", "OP07", "AC Sweep", "Circuit Analysis"],
  },
  {
    number: "03",
    title: "Digital Logic & FPGA Development",
    subtitle: "Verilog · Simulation · FPGA",
    description:
      "Developing digital hardware skills through Verilog design, waveform simulation, and FPGA-based laboratory work.",
    did:
      "Created logic modules, wrote and tested digital designs, analyzed simulation waveforms, and worked through FPGA development workflows.",
    learned:
      "Building experience with digital logic design, debugging, verification, and hardware implementation.",
    tags: ["Verilog", "FPGA", "Quartus Prime", "Questa / ModelSim"],
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
<nav className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#050505]/80 backdrop-blur-xl">
  <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
    <a
      href="#home"
      className="text-lg font-bold tracking-tight transition hover:opacity-70"
    >
      AZ<span className="text-blue-400">.</span>
    </a>

    {/* Desktop Navigation */}
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
        rel="noopener noreferrer"
        className="rounded-full border border-white/20 px-4 py-2 text-white transition hover:border-white hover:bg-white/5"
      >
        Resume ↗
      </a>
    </div>

    {/* Mobile Navigation */}
    <details className="relative md:hidden">
      <summary className="cursor-pointer list-none rounded-full border border-white/15 px-4 py-2 text-sm text-gray-300">
        Menu
      </summary>

      <div className="absolute right-0 mt-3 w-52 overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a] p-2 shadow-2xl">
        <a
          href="#about"
          className="block rounded-xl px-4 py-3 text-sm text-gray-400 transition hover:bg-white/5 hover:text-white"
        >
          About
        </a>

        <a
          href="#skills"
          className="block rounded-xl px-4 py-3 text-sm text-gray-400 transition hover:bg-white/5 hover:text-white"
        >
          Skills
        </a>

        <a
          href="#projects"
          className="block rounded-xl px-4 py-3 text-sm text-gray-400 transition hover:bg-white/5 hover:text-white"
        >
          Projects
        </a>

        <a
          href="#coursework"
          className="block rounded-xl px-4 py-3 text-sm text-gray-400 transition hover:bg-white/5 hover:text-white"
        >
          Coursework
        </a>

        <a
          href="#contact"
          className="block rounded-xl px-4 py-3 text-sm text-gray-400 transition hover:bg-white/5 hover:text-white"
        >
          Contact
        </a>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1 block rounded-xl bg-white px-4 py-3 text-sm font-medium text-black"
        >
          View Resume ↗
        </a>
      </div>
    </details>
  </div>
</nav>

{/* HERO */}
<section
  id="home"
  className="relative flex min-h-screen items-center overflow-hidden px-6 pb-16 pt-28"
>
  {/* Background glows */}
  <div className="pointer-events-none absolute left-1/2 top-[32%] h-[550px] w-[550px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[130px]" />

  <div className="pointer-events-none absolute right-0 top-1/4 h-96 w-96 rounded-full bg-violet-600/10 blur-[140px]" />

  <div className="relative z-10 mx-auto w-full max-w-6xl">
    <div className="max-w-4xl">
      {/* Availability */}
      <div className="animate-fade-up mb-7 inline-flex items-center gap-3 rounded-full border border-blue-400/20 bg-blue-400/[0.05] px-4 py-2 text-sm text-blue-200">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-40" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
        </span>

        Open to Electrical Engineering Internships & Co-ops
      </div>

      {/* Name */}
      <h1 className="animate-fade-up-delay-1 text-6xl font-bold tracking-[-0.05em] sm:text-7xl md:text-8xl lg:text-9xl">
        Adil Zaidi
        <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
          .
        </span>
      </h1>

      {/* Main positioning */}
      <h2 className="animate-fade-up-delay-2 mt-6 max-w-3xl text-2xl font-medium leading-tight text-gray-300 sm:text-3xl md:text-4xl">
        Electrical engineering student building experience across
        <span className="bg-gradient-to-r from-blue-300 to-violet-300 bg-clip-text text-transparent">
          {" "}
          circuits, power, embedded systems, and digital hardware.
        </span>
      </h2>

      <p className="animate-fade-up-delay-3 mt-7 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
        Studying Electrical Engineering at Arizona State University with
        experience across circuit analysis, power systems, semiconductor
        devices, embedded systems, and digital hardware.
      </p>

      {/* Buttons */}
      <div className="animate-fade-up-delay-3 mt-10 flex flex-wrap gap-4">
        <a
          href="#projects"
          className="rounded-full bg-gradient-to-r from-blue-500 to-violet-500 px-7 py-3.5 font-medium text-white transition duration-300 hover:scale-[1.03] hover:brightness-110"
        >
          Explore My Work
        </a>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-white/20 px-7 py-3.5 font-medium text-white transition duration-300 hover:border-violet-400/50 hover:bg-white/5"
        >
          View Resume ↗
        </a>
      </div>

      {/* Social Links */}
      <div className="mt-9 flex flex-wrap gap-x-7 gap-y-3 text-sm text-gray-400">
        <a
          href="https://www.linkedin.com/in/adil-zaidi-aa62b8254/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition hover:text-blue-300"
        >
          LinkedIn ↗
        </a>

        <a
          href="https://github.com/zadilraza"
          target="_blank"
          rel="noopener noreferrer"
          className="transition hover:text-violet-300"
        >
          GitHub ↗
        </a>

        <a
          href="mailto:zaidiraza@gmail.com"
          className="transition hover:text-blue-300"
        >
          Email ↗
        </a>
      </div>
    </div>

    {/* Currently Building */}
    <div className="mt-16 max-w-4xl border-t border-white/10 pt-7">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
        <p className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-xs uppercase tracking-[0.25em] text-transparent">
          Currently Building
        </p>

        <div className="flex flex-wrap gap-2">
          {[
            "Verilog",
            "FPGA Development",
            "Quartus Prime",
            "Questa / ModelSim",
          ].map((item) => (
            <span
              key={item}
              className="rounded-full border border-violet-400/15 bg-violet-400/[0.04] px-3 py-1.5 text-xs text-gray-300 transition hover:border-violet-400/40 hover:text-white"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>

      {/* ABOUT */}
<section id="about" className="border-t border-white/10 px-6 py-28">
  <div className="mx-auto max-w-6xl">
    <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
      01 / About
    </p>

    <div className="mt-8 grid gap-14 lg:grid-cols-[1.05fr_1fr]">
      <div>
        <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Engineering through analysis, testing, and hands-on problem solving.
        </h2>

        <div className="mt-8 flex flex-wrap gap-3">
          <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-gray-400">
            Arizona State University
          </span>

          <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-gray-400">
            Electrical Engineering
          </span>

          <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-gray-400">
            Open to Internships & Co-ops
          </span>
        </div>
      </div>

      <div className="space-y-6 text-lg leading-8 text-gray-400">
        <p>
          I&apos;m an Electrical Engineering student at Arizona State University
          building experience across analog circuits, power systems,
          semiconductor devices, embedded systems, and digital hardware.
        </p>

        <p>
          I enjoy connecting classroom theory with practical engineering work.
          That includes circuit simulation in LTspice, using laboratory
          equipment, working with embedded hardware, and developing my Verilog
          and FPGA skills.
        </p>

        <p>
          I&apos;m especially interested in opportunities where I can strengthen
          my troubleshooting, testing, and design skills while contributing to
          real engineering systems.
        </p>
      </div>
    </div>

    <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-3">
      <div className="bg-[#080808] p-7">
        <p className="text-3xl font-semibold">Analog</p>
        <p className="mt-2 text-sm leading-6 text-gray-500">
          Circuits, op-amps, filters, simulation, and measurement.
        </p>
      </div>

      <div className="bg-[#080808] p-7">
        <p className="text-3xl font-semibold">Digital</p>
        <p className="mt-2 text-sm leading-6 text-gray-500">
          Verilog, FPGA workflows, logic design, and simulation.
        </p>
      </div>

      <div className="bg-[#080808] p-7">
        <p className="text-3xl font-semibold">Power</p>
        <p className="mt-2 text-sm leading-6 text-gray-500">
          Power systems coursework and interest in electrical infrastructure.
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

    <div className="mt-5 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
      <h2 className="max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
        Tools, platforms, and engineering skills.
      </h2>

      <p className="max-w-sm text-sm leading-6 text-gray-500">
        A mix of simulation, hardware, digital design, and laboratory tools I
        have used or am currently developing experience with.
      </p>
    </div>

    <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-7">
        <p className="text-sm font-medium text-blue-400">Circuit & Lab</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {[
            "Circuit Analysis",
            "LTspice",
            "Oscilloscopes",
            "Digital Multimeters",
            "Function Generators",
            "Breadboarding",
          ].map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-gray-400"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-7">
        <p className="text-sm font-medium text-blue-400">
          Digital & Embedded
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {[
            "Arduino",
            "C/C++",
            "Verilog",
            "FPGA",
            "Quartus Prime",
            "Questa / ModelSim",
          ].map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-gray-400"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-7">
        <p className="text-sm font-medium text-blue-400">
          Electrical Engineering
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {[
            "Power Systems",
            "Semiconductor Devices",
            "Analog Circuits",
            "Digital Logic",
            "AC Analysis",
            "Technical Troubleshooting",
          ].map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-gray-400"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>
      {/* PROJECTS */}
      {/* PROJECTS */}
<section id="projects" className="border-t border-white/10 px-6 py-28">
  <div className="mx-auto max-w-6xl">
    <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
      03 / Engineering Work
    </p>

    <div className="mt-5 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
      <h2 className="max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
        Selected projects & engineering labs.
      </h2>

      <p className="max-w-sm text-sm leading-6 text-gray-500">
        Hands-on work across embedded systems, analog circuits, simulation, and
        digital hardware.
      </p>
    </div>

    <div className="mt-14 space-y-6">
      {projects.map((project) => (
        <article
          key={project.title}
          className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-8 transition duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-white/[0.035] sm:p-10"
        >
          <div className="absolute right-6 top-4 text-7xl font-semibold tracking-tight text-white/[0.025] transition duration-300 group-hover:text-blue-400/[0.06]">
            {project.number}
          </div>

          <div className="relative z-10">
            <div className="flex flex-col gap-6 lg:grid lg:grid-cols-[180px_1fr]">
              <div>
                <p className="text-sm font-medium text-blue-400">
                  Project {project.number}
                </p>

                <p className="mt-2 text-xs uppercase leading-5 tracking-[0.18em] text-gray-600">
                  {project.subtitle}
                </p>
              </div>

              <div>
                <h3 className="max-w-3xl text-2xl font-semibold tracking-tight sm:text-3xl">
                  {project.title}
                </h3>

                <p className="mt-5 max-w-3xl leading-7 text-gray-400">
                  {project.description}
                </p>

                <div className="mt-8 grid gap-6 border-t border-white/10 pt-7 md:grid-cols-2">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-gray-600">
                      What I Did
                    </p>

                    <p className="mt-3 leading-7 text-gray-300">
                      {project.did}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-gray-600">
                      What I Learned
                    </p>

                    <p className="mt-3 leading-7 text-gray-300">
                      {project.learned}
                    </p>
                  </div>
                </div>

                <div className="mt-7 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-xs text-gray-400 transition group-hover:border-white/20 group-hover:text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
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

    <div className="mt-5 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
      <h2 className="max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
        Electrical engineering foundation.
      </h2>

      <p className="max-w-sm text-sm leading-6 text-gray-500">
        Coursework supporting my interests in circuits, power, semiconductors,
        and digital hardware.
      </p>
    </div>

    <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {[
        {
          course: "Circuits I",
          area: "Circuit Analysis",
        },
        {
          course: "Circuits II",
          area: "Analog Circuits",
        },
        {
          course: "Hardware Design Language",
          area: "Verilog & Digital Logic",
        },
        {
          course: "Properties of Semiconductors",
          area: "Semiconductor Devices",
        },
        {
          course: "Power Systems",
          area: "Electrical Power",
        },
        {
          course: "Quantum Mechanics",
          area: "Engineering Physics",
        },
      ].map((item) => (
        <div
          key={item.course}
          className="group rounded-3xl border border-white/10 bg-[#080808] p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-white/[0.03]"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-gray-600">
            {item.area}
          </p>

          <p className="mt-4 text-xl font-medium text-gray-200 transition group-hover:text-white">
            {item.course}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* CONTACT */}
<section id="contact" className="border-t border-white/10 px-6 py-32">
  <div className="mx-auto max-w-6xl">
    <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025] p-8 sm:p-12 lg:p-16">
      <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
            05 / Contact
          </p>

          <h2 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
            Interested in working together?
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            I&apos;m currently looking for electrical engineering internships
            and co-op opportunities where I can contribute, learn, and build
            practical engineering experience.
          </p>
        </div>

        <a
          href="mailto:zaidiraza@gmail.com"
          className="inline-flex w-fit items-center justify-center rounded-full bg-white px-8 py-4 font-medium text-black transition duration-300 hover:scale-105 hover:bg-gray-200"
        >
          Get In Touch
        </a>
      </div>

      <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/10 pt-7 text-sm text-gray-500">
        <a
          href="https://www.linkedin.com/in/adil-zaidi-aa62b8254/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition hover:text-white"
        >
          LinkedIn ↗
        </a>

        <a
          href="https://github.com/zadilraza"
          target="_blank"
          rel="noopener noreferrer"
          className="transition hover:text-white"
        >
          GitHub ↗
        </a>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="transition hover:text-white"
        >
          Resume ↗
        </a>
      </div>
    </div>
  </div>
</section>

      {/* FOOTER */}
<footer className="border-t border-white/10 px-6 py-8">
  <div className="mx-auto flex max-w-6xl flex-col gap-4 text-sm text-gray-600 sm:flex-row sm:items-center sm:justify-between">
    <p>© 2026 Adil Zaidi</p>

    <div className="flex flex-wrap gap-5">
      <a href="#home" className="transition hover:text-white">
        Back to top ↑
      </a>

      <span>Built with Next.js + Tailwind CSS</span>
    </div>
  </div>
</footer>
    </main>
  );
}