// src/pages/About.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion"; // Import motion for animations

// NOTE: Icons are no longer needed in this file after removing the profile card
// import { Github, Mail, Download } from "lucide-react";

// NOTE: These components are no longer needed after removing the profile card
// import { Avatar } from "@/components/ui/avatar";
// import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export function About() {
const skills = [
    { name: "C / C++", level: 9 },
    { name: "RTOS (FreeRTOS / Zephyr)", level: 9 },
    { name: "Embedded Linux", level: 8 },
    { name: "IoT (MQTT / LoRaWAN)", level: 8 },
    { name: "Python", level: 7 },
    { name: "TypeScript / Full-stack", level: 7 },
    { name: "Schematic & PCB Design", level: 7 },
    { name: "Kotlin / Swift", level: 5 },
    { name: "AI Tools", level: 7 },
    { name: "VHDL / FPGA", level: 6 },
  ];

  const timeline = [
    {
      year: "2024 – Now",
      role: "Embedded Engineer",
      company: "Stone Devices Sdn Bhd, Johor, Malaysia",
      bullets: [
        "SoC-based access control device (ARM + NFC). Deep NFC and cybersecurity experience.",
        "Android (Kotlin) and iOS (Swift) apps for NFC testing.",
        "MES/MIS development (React, Fastify, Redis, PostgreSQL)."
      ]
    },
    {
      year: "2020 – 2023",
      role: "Embedded System Consultant (Freelance)",
      company: "Various",
      bullets: [
        "LoRaWAN sensors, STM32 + external ADC + Lattice FPGA.",
        "ESP32/Embedded Linux IoT projects and low-power sensor firmware.",
        "EDC, WiFi/Bluetooth devices and remote collaborations."
      ]
    },
    {
      year: "2017 – 2020",
      role: "Head of R&D / Senior Firmware Engineer",
      company: "PT Prasimax Inovasi Teknologi",
      bullets: [
        "Managed and shipped firmware/hardware for mass-produced products.",
        "Mentoring and legacy firmware management for ARM + FPGA systems."
      ]
    }
  ];

  // Animation variants for framer-motion
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  const ProficiencyScale = ({ level }: { level: number }) => {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 10 }).map((_, index) => (
        <div
          key={index}
          className={`h-2 w-full rounded-sm ${
            index < level ? "bg-primary" : "bg-muted"
          }`}
        />
      ))}
    </div>
  );
};

  return (
    <main className="min-h-screen bg-background py-12 px-6 sm:px-12 lg:px-24">
      {/* REMOVED: The multi-column grid.
        We now use a single-column (max-w-6xl) for a cleaner flow.
      */}
      <div className="max-w-6xl mx-auto">
        
        {/* Main "About" section */}
        <section>
          <motion.div {...fadeIn}>
            <div className="flex items-start justify-between gap-6">
              <h2 className="text-3xl font-extrabold">About Me</h2>
            </div>
          </motion.div>

          <motion.div {...fadeIn} transition={{ duration: 0.5, delay: 0.1 }}>
            <Card className="mt-6 p-6 shadow-sm">
              <CardContent className="p-0">
                <div className="text-sm text-foreground leading-relaxed space-y-4">
                  <p>
                    Hey there 👋,  I’m <strong>Agung</strong>, a curious engineer who’s been writing code since floppy disks were still cool. My coding journey started at age 12, when I used{" "}
                    <strong>Pascal on Windows 3.1</strong>  just to make math calculations look cooler. From there, I'm continuing my obesession with{" "}
                    <strong>Visual Basic, 8051 assembly, C on countless microcontrollers</strong>, and even <strong>schematic and PCB design</strong> — 
                    because I just couldn’t stop building things that blinked, beeped, or even moved.
                  </p>

                  <p>
                    That spark grew into a career in <strong>embedded software R&amp;D</strong>, where I learned to make devices think in real time and connected to the real world. Starting from tiny microcontrollers to{" "}
                    <strong>FPGA</strong> and then <strong>embedded Linux systems</strong>. Over time, my curiosity expanded : I began crafting {" "}
                    <strong>full-stack web platforms</strong>, <strong>mobile apps</strong>, and exploring how <strong>AI</strong> can supercharge software development. 
                  </p>

                  <p>
                    I’ve been enjoying the shift to <strong>modern JavaScript frameworks</strong> lately, appreciating the high developer experience on building responsive web app, 
                    and vast community support they provide. It's been a rewarding challenge to shift my low-level embedded-style thinking into building fast, responsive, and reliable web apps.
                  </p>
                  <p>
                    These days, I’m diving deep into the <strong>NFC and cybersecurity world</strong>, learning about <strong>cryptography, PKI</strong>, and the good old <strong>CIA triad</strong> (Confidentiality, Integrity, Availability) — basically, how to make sure your data sleeps better at night.
                  </p>

                  <p>
                    Through it all, one thing hasn’t changed : I’m still that kid who loves to learn, tinker, and create. Whether it’s firmware for a sensor, a web dashboard for IoT, 
                    or just another side project that probably started with “what if I could improve this?”
                  </p>
                </div>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-sm font-semibold">Selected Projects</h3>
                    <ul className="mt-3 space-y-3 text-sm text-muted-foreground">
                      <li>
                        <strong>Access Control SoC (ARM + NFC)</strong> : NFC expertise (MIFARE, ISO14443) and secure device design; accompanying
                        mobile apps for nfc testing (Kotlin / Swift).
                      </li>
                      <li>
                        <strong>NFC Tester machine</strong> : C++ backend, SQLite, React frontend, and Windows IoT.
                      </li>
                      <li>
                        <strong>MES / MIS for Smartcard Manufacturing</strong> — React front-end with Fastify backend, MQTT broker, and PostgreSQL.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold">What I bring</h3>
                    <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                      <li>Hardware-aware software design and performance-first engineering.</li>
                      <li>Experience shipping embedded products to production at scale.</li>
                      <li>Strong system thinking: Real-time systems, signal processing, and deterministic behavior.</li>
                    </ul>
                  </div>
                </div>

                <Separator className="my-6" />

                <h3 className="text-sm font-semibold">Experience Timeline</h3>
                <div className="mt-4 space-y-4">
                  {timeline.map((item) => (
                    <article key={item.year} className="flex gap-4 items-start">
                      <div className="w-28 text-xs text-muted-foreground">{item.year}</div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-sm font-semibold">{item.role}</div>
                            <div className="text-xs text-muted-foreground">{item.company}</div>
                          </div>
                        </div>

                        <ul className="mt-2 text-sm text-muted-foreground list-disc list-inside space-y-1">
                          {item.bullets.map((b) => (
                            <li key={b}>{b}</li>
                          ))}
                        </ul>
                      </div>
                    </article>
                  ))}
                </div>

                <Separator className="my-6" />

                <div className="flex items-center justify-between">
                  <div className="text-sm text-muted-foreground">Education: B.Eng (Electrical Engineering - Control), University of Indonesia</div>

                  <div className="flex gap-2">
                    <Button asChild>
                      <a href="https://github.com/agungwibi" target="_blank" rel="noreferrer">View GitHub</a>
                    </Button>
                    <Button variant="default" asChild className="">
                      <a href="/AGUNG_WIBISONO.pdf" download >Download Full CV</a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* MOVED: The "Core Proficiencies" card is now here,
            below the main "About" card.
          */}
          <motion.div {...fadeIn} transition={{ duration: 0.5, delay: 0.2 }}>
            <Card className="mt-6 p-6">
              <CardHeader className="p-0">
                <CardTitle className="text-sm font-semibold">
                  Core Proficiencies
                </CardTitle>
              </CardHeader>

              <CardContent className="p-0 mt-4">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                  {skills.map((skill) => (
                    <li key={skill.name}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium text-foreground">
                          {skill.name}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {skill.level} / 10
                        </span>
                      </div>
                      <ProficiencyScale level={skill.level} />
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
          
          {/* Contact / Quick Links section */}
          <motion.div {...fadeIn} transition={{ duration: 0.5, delay: 0.3 }}>
            <div className="mt-8 flex flex-wrap gap-4">
              <Card className="p-4 flex-1 min-w-[260px]">
                <CardHeader className="p-0">
                  <CardTitle className="text-sm">Contact</CardTitle>
                </CardHeader>
                <CardContent className="p-0 mt-3 text-sm text-foreground">
                  <div className="space-y-2">
                    <div><strong>Email:</strong> gungwibisono@gmail.com</div>
                    <div><strong>Phone:</strong> (+60) 194468389</div>
                    <div><strong>Location:</strong> Johor, Malaysia</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-4 min-w-[260px]">
                <CardHeader className="p-0">
                  <CardTitle className="text-sm">Quick Links</CardTitle>
                </CardHeader>
                <CardContent className="p-0 mt-3 text-sm text-foreground">
                  <ul className="space-y-2">
                    <li><a href="https://github.com/agungwibi" target="_blank" rel="noreferrer" className="underline">GitHub</a></li>
                    <li><a href="mailto:gungwibisono@gmail.com" className="underline">Email</a></li>
                    <li><a href="/AGUNG_WIBISONO.pdf" download className="underline">Download CV</a></li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </section>

      </div>
    </main>
  );
}