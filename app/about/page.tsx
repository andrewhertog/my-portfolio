import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

const skills = [
  { category: "Cloud & Infrastructure", items: ["AWS (EKS, EC2, RDS, S3, IAM, CloudWatch)", "Kubernetes", "Terraform", "Helm"] },
  { category: "Reliability & Observability", items: ["Datadog", "Incident response", "Capacity planning", "On-call operations"] },
  { category: "DevOps & CI/CD", items: ["GitHub Actions", "Jenkins", "CircleCI", "GitOps (Argo, Flux)"] },
  { category: "Systems", items: ["Linux (Ubuntu, RHEL, Amazon Linux)", "JFrog Artifactory", "Docker", "Bash/Python scripting"] },
];

export default function AboutPage() {
  return (
    <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 min-h-screen">
      <Navigation />
      <div className="px-6 pt-16 mx-auto max-w-4xl lg:px-8 md:pt-24 lg:pt-32 pb-24">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl font-display">
            About
          </h1>
          <div className="w-full h-px bg-zinc-800 mt-8 mb-10" />
          <div className="space-y-6 text-zinc-400 leading-relaxed">
            <p>
              I&apos;m Andrew denHertog — a Staff Site Reliability Engineer with a focus on
              cloud-native infrastructure and platform engineering on AWS. I currently own the
              reliability and scalability of Prodigy Education&apos;s Kubernetes platform, working
              closely with engineering leadership to shape the long-term direction of the
              infrastructure.
            </p>
            <p>
              Alongside my work at Prodigy, I run{" "}
              <a
                href="https://www.scalepoynt.io"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-300 underline underline-offset-4 hover:text-white duration-200"
              >
                scalepoynt.io
              </a>
              , an AWS consulting practice that helps startups and SMBs build scalable,
              secure infrastructure without the overhead of an in-house platform team.
            </p>
            <p>
              I&apos;m an AWS certified practitioner and have contributed bug fixes to open source
              infrastructure tooling including OpenTofu and Terraform. When I&apos;m not working on
              production systems, I&apos;m usually exploring new tools that could make my
              team&apos;s lives easier.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-xl font-semibold text-zinc-200 mb-8">Skills & Stack</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {skills.map((group) => (
              <Card key={group.category}>
                <div className="p-6">
                  <h3 className="text-sm font-medium text-zinc-300 mb-3">{group.category}</h3>
                  <ul className="space-y-1.5">
                    {group.items.map((item) => (
                      <li key={item} className="text-sm text-zinc-500 flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-amber-400/60 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-zinc-800">
          <p className="text-sm text-zinc-500">
            Want to work together?{" "}
            <a
              href="/contact"
              className="text-zinc-300 underline underline-offset-4 hover:text-white duration-200"
            >
              Get in touch.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
