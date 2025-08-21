import { Activity, ActivityIcon, Briefcase, ClipboardCheck, Code, Code2Icon, CodepenIcon, CodeSquare, CodeSquareIcon, CodeXml, Monitor, MonitorCheckIcon, MonitorDot, MonitorOffIcon, User, User2Icon } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              <span className="text-primary">Software Enthusiast</span>
            </h3>

            <p className="text-muted-foreground">
           I'm actively working on Data Structures and Algorithms to strengthen my problem-solving skills, primarily using C++ and currently learning Python. Being a software enthusiast I solve problems on platforms like Codeforces and Leetcode to challenge myself and grow as a developer.
            </p>

            <p className="text-muted-foreground">
              I'm passionate about tech — from software and web development to exploring the latest tools and frameworks. I enjoy working with modern technologies to build responsive and user-friendly web applications. With a strong focus, I strive to grow and create meaningful digital experiences.




            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="https://drive.google.com/file/d/1SocIZUW9FVxCYqXQXbToBcnO5-kM_xYS/view?usp=sharing"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download Resume
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Web Development</h4>
                  <p className="text-muted-foreground">
                   Crafting responsive, dynamic web experiences with the help of modern frameworks.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Activity className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Data Structures & Algorithms</h4>
                  <p className="text-muted-foreground">
                    Strengthening problem-solving skills through regular DSA practice and competitive programming.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <ClipboardCheck className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Project Management</h4>
                  <p className="text-muted-foreground">
                    Worked on real-world applications in a professional setting, strengthening my technical skills and development.
                    </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};