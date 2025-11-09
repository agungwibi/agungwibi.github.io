// src/pages/Home.tsx

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Download, Github, Mail, Linkedin } from "lucide-react"; // Import Linkedin

// Helper component for skill lists
const SkillBadge = ({ children }: { children: React.ReactNode }) => (
  <Badge variant="secondary" className="text-md">
    {children}
  </Badge>
);

export function Home() {
  /*
    [cite_start]Skills data pulled from your CV [cite: 11, 15, 16, 17, 24, 25, 26, 27]
  */
  const embeddedSkills = [
    "C/C++ (Advanced)",
    "RTOS (FreeRTOS/Zephyr)",
    "Bare Metal",
    "MCU / SoC",
    "FPGA (VHDL)",
    "IoT (MQTT, LoRa, BLE)",
    "NFC (Mifare, ISO14443)",
    "Schematic & PCB Design",
  ];

  const fullStackSkills = [
    "React",
    "TypeScript",
    "Python",
    "Fastify (Node.js)",
    "PostgreSQL",
    "SQLite",
    "C++ Websockets",
    "Android (Kotlin)",
    "iOS (Swift)",
  ];

  return (
    <div className="w-full">
      {/* Hero Section 
        [cite_start]Content based on CV Summary [cite: 8, 12]
      */}
      <section className="container mx-auto flex flex-col items-center justify-center text-center py-24 md:py-32">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
          Hi, I'm Agung Wibisono!
        </h1>
        <p className="max-w-3xl text-lg md:text-xl text-muted-foreground mb-8">
A versatilist software engineer with 10+ years in embedded software R&D and <br />
real-time embedded systems — evolving from low-level firmware and FPGA design to crafting full-stack web platforms, mobile apps, and IoT ecosystems.        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" asChild>
            <a href="#projects">
              View My Projects
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a
              href="https://github.com/agungwibi"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* [cite_start]Link to your GitHub profile [cite: 5] */}
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </a>
          </Button>
          {/* Add LinkedIn Button */}
          <Button size="lg" variant="outline" asChild>
            <a
              href="https://www.linkedin.com/in/agungwibi/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="/AGUNG_WIBISONO.pdf" download>
              {/* This should link to your PDF file in the /public folder */}
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </a>
          </Button>
        </div>
      </section>

      {/* Skills Section 
      */}
      <section className="container mx-auto py-16 md:py-24 text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">
          My Tech Stack
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Core Expertise */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">
              Core Expertise (Embedded)
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {embeddedSkills.map((skill) => (
                <SkillBadge key={skill}>{skill}</SkillBadge>
              ))}
            </div>
          </div>
          {/* Full-Stack & Application */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">
              Full-Stack & Application
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {fullStackSkills.map((skill) => (
                <SkillBadge key={skill}>{skill}</SkillBadge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section 
        [cite_start]Content based on CV Work Experience [cite: 26, 27, 29, 30]
      */}
      <section id="projects" className="bg-muted py-16 md:py-24">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Featured Projects
          </h2>
          <p className="max-w-2xl text-lg text-muted-foreground mb-12 mx-auto">
            A selection of projects that showcase my range from deep embedded
            hardware to modern full-stack applications.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {/* [cite_start]Project 1: MES [cite: 26] */}
            <Card>
              <CardHeader>
                <CardTitle>Smartcard MES</CardTitle>
                <CardDescription>
                  Full-stack Manufacturing Execution System (MES) for a
                  smartcard production line.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Developed the complete system, including the backend API,
                  real-time database, and frontend UI.
                </p>
              </CardContent>
              <CardFooter className="flex flex-wrap gap-2">
                <Badge>React</Badge>
                <Badge>Fastify</Badge>
                <Badge>PostgreSQL</Badge>
                <Badge>Redis</Badge>
              </CardFooter>
            </Card>

            {/* [cite_start]Project 2: NFC Tester [cite: 27] */}
            <Card>
              <CardHeader>
                <CardTitle>Intelligent NFC Tester</CardTitle>
                <CardDescription>
                  A test machine for NFC devices running on Windows IoT.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Built a native C++ backend to interface with hardware and a
                  real-time React frontend UI via WebSockets.
                </p>
              </CardContent>
              <CardFooter className="flex flex-wrap gap-2">
                <Badge>React</Badge>
                <Badge>C++ Websocket</Badge>
                <Badge>SQLite</Badge>
                <Badge>Windows IoT</Badge>
              </CardFooter>
            </Card>

            {/* [cite_start]Project 3: IoT Sensor [cite: 29, 30] */}
            <Card>
              <CardHeader>
                <CardTitle>IoT Wind Turbine Sensor</CardTitle>
                <CardDescription>
                  R&D for a wireless IoT sensor for wind turbines.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  A complex hardware project using an STM32 SoC, external
                  ADC, and a Lattice FPGA for high-speed data processing.
                </p>
              </CardContent>
              <CardFooter className="flex flex-wrap gap-2">
                <Badge>STM32</Badge>
                <Badge>FPGA (VHDL)</Badge>
                <Badge>LoRaWAN</Badge>
                <Badge>C/C++</Badge>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA Section 
        [cite_start]Email from CV [cite: 4]
      */}
      <section className="container mx-auto py-24 md:py-32 text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Let's Connect
        </h2>
        <p className="max-w-xl text-lg text-muted-foreground mb-8 mx-auto">
          I'm always open to new opportunities and interesting collaborations.
          Feel free to get in touch.
        </p>
        <Button size="lg" asChild>
          <a href="mailto:gungwibisono@gmail.com">
            <Mail className="mr-2 h-5 w-5" />
            Send me an Email
          </a>
        </Button>
      </section>
    </div>
  );
}