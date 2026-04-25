import { motion } from "framer-motion";
import { useState } from "react";
import { FiBriefcase, FiChevronDown, FiChevronUp, FiMapPin, FiCalendar, FiTrendingUp } from "react-icons/fi";

const experiences = [
  {
    title: "Full Stack Software Developer",
    company: "LeisurePay",
    location: "Remote",
    period: "Jan 2025 - Jan 2026",
    highlights: [
      "Architected distributed payment authorization workflows using Kubernetes-orchestrated microservices improving transaction throughput by 35% across high-volume settlement processing paths.",
      "Implemented concurrency-safe idempotent transaction validation services ensuring consistency across retry scenarios triggered by upstream payment gateway failures.",
      "Optimized SQL Server access layers using Entity Framework Core query tuning and Redis caching strategies reducing reconciliation latency by 50% across finance reporting workflows.",
      "Designed GraphQL aggregation services using ASP.NET Core enabling unified transaction visibility across multi-service reconciliation dashboards used by finance operations teams.",
      "Integrated OpenAI API–based transaction anomaly classification services into exception-handling pipelines reducing manual fraud-review routing effort by 30% across payment validation workflows.",
      "Developed LLM-assisted transaction metadata enrichment workflows improving downstream reconciliation accuracy across distributed payment datasets supporting finance operations reporting.",
      "Implemented prompt-engineered decision-support services enabling adaptive exception-triage prioritization across high-volume authorization workflows.",
      "Collaborated with product analytics and frontend engineering teams to deliver React.js and Angular-driven reconciliation dashboards backed by GraphQL APIs improving operational usability for transaction support teams.",
    ],
  },
  {
    title: "Software Developer",
    company: "JPMorgan Chase & Co",
    location: "Remote",
    period: "Sep 2022 - Jan 2025",
    highlights: [
      "Re-architected legacy banking transaction services into independently deployable components routed through API Gateway improving deployment independence across transaction platforms by 40%.",
      "Developed secure REST APIs using Spring Security, OAuth2, JWT, and RBAC enforcement supporting regulated financial transaction workloads aligned with enterprise access governance requirements.",
      "Implemented role-based access control enforcement policies strengthening governance across distributed service communication layers supporting regulated financial workloads.",
      "Applied circuit breaker and retry resilience patterns improving availability stability across service-to-service communication during downstream dependency interruptions.",
      "Automated enterprise deployment promotion pipelines using Azure DevOps and Azure Storage artifacts with Jenkins and GitHub Actions increasing release frequency across transaction platform updates.",
      "Configured Spring Cloud Config, Eureka, and Gateway routing mechanisms improving runtime resilience across distributed banking service environments.",
      "Collaborated with enterprise architecture teams to decompose monolithic transaction processing layers improving operational isolation across distributed banking workflows.",
      "Partnered with compliance engineering stakeholders to align service authentication policies with audit readiness requirements across regulated financial APIs.",
    ],
  },
  {
    title: "Software Engineer",
    company: "Zensar Technologies",
    location: "India",
    period: "Jan 2021 - Jul 2022",
    highlights: [
      "Engineered Apache Kafka event-driven architecture pipelines supporting ingestion of partitioned enterprise datasets increasing ingestion throughput capacity by 40% across analytics processing services.",
      "Developed Spring Boot microservices using Hibernate ORM with Maven and Gradle supporting event-driven workflow orchestration improving reliability across cross-system integrations handling large transactional payloads.",
      "Implemented AWS Lambda event-triggered processing pipelines integrated with SNS and SQS messaging services reducing persistent compute usage and lowering infrastructure cost by 25% across ingestion workloads.",
      "Modeled DynamoDB partition strategies improving query efficiency across high-volume NoSQL datasets supporting distributed analytics reporting services.",
      "Optimized MongoDB indexing structures enhancing retrieval performance across aggregation services supporting near real-time analytics dashboards.",
      "Provisioned AWS infrastructure environments using Terraform supporting EC2, S3, and RDS deployment automation improving environment consistency across distributed service rollout pipelines.",
      "Containerized Spring Boot services using Docker improving runtime portability between staging and production analytics environments.",
      "Collaborated with QA automation teams to stabilize integration testing pipelines and centralized logging visibility improving regression reliability across distributed microservice releases.",
    ],
  },
];

const ExperienceCard = ({ exp, index }: { exp: typeof experiences[0]; index: number }) => {
  const [expanded, setExpanded] = useState(index === 0);

  return (
    <motion.div
      className="rounded-[2rem] bg-card border border-border overflow-hidden card-3d-hover shadow-xl relative"
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, rotateY: index % 2 === 0 ? 15 : -15 }}
      whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.7, type: "spring" }}
    >
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full p-6 md:p-8 flex items-center justify-between text-left group"
      >
        <div className="flex flex-col sm:flex-row items-center sm:items-center gap-4 md:gap-6">
          <motion.div
            className="w-12 h-12 md:w-16 md:h-16 rounded-2xl gradient-accent flex items-center justify-center shrink-0 shadow-lg card-3d-content"
            whileHover={{ rotateY: 180, scale: 1.1 }}
            transition={{ duration: 0.6 }}
          >
            <FiBriefcase className="text-accent-foreground" size={24} />
          </motion.div>
          <div className="text-center sm:text-left">
            <h3 className="text-xl md:text-2xl font-heading font-black text-foreground group-hover:text-accent transition-colors leading-tight">{exp.title}</h3>
            <p className="text-accent font-heading font-bold text-sm md:text-base mt-2 tracking-wide uppercase">{exp.company}</p>
            <div className="flex flex-wrap gap-2 md:gap-4 mt-3 text-muted-foreground text-[10px] md:text-xs font-heading font-bold uppercase tracking-widest justify-center sm:justify-start">
              <span className="flex items-center gap-1.5 bg-muted/50 px-3 py-1 rounded-full"><FiCalendar size={12} className="text-accent" />{exp.period}</span>
              <span className="flex items-center gap-1.5 bg-muted/50 px-3 py-1 rounded-full"><FiMapPin size={12} className="text-accent" />{exp.location}</span>
            </div>
          </div>
        </div>
        <motion.div
          className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-border flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300 shrink-0"
          animate={{ rotate: expanded ? 180 : 0, scale: expanded ? 1.1 : 1 }}
        >
          <FiChevronDown size={20} />
        </motion.div>
      </button>

      <motion.div
        initial={false}
        animate={{ height: expanded ? "auto" : 0, opacity: expanded ? 1 : 0 }}
        transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
        className="overflow-hidden"
      >
        <div className="px-8 pb-10 pt-2 card-3d-content">
          <div className="h-px w-full bg-border mb-8" />
          <ul className="grid md:grid-cols-2 gap-4">
            {exp.highlights.map((h, i) => (
              <motion.li
                key={i}
                className="flex items-start gap-3 text-muted-foreground font-body text-base group/item"
                initial={{ opacity: 0, y: 10 }}
                animate={expanded ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ delay: i * 0.05 }}
              >
                <div className="w-8 h-8 rounded-lg bg-accent/5 flex items-center justify-center shrink-0 mt-0.5 group-hover/item:bg-accent group-hover/item:text-accent-foreground transition-all">
                  <FiTrendingUp size={16} />
                </div>
                <span className="group-hover/item:text-foreground transition-colors">{h}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 blur-[100px] -z-10 rounded-full" />
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-accent text-sm tracking-[0.4em] uppercase font-heading font-black mb-4">Journey</p>
          <h2 className="text-4xl md:text-8xl font-heading font-black text-foreground tracking-tighter">
            Professional Experience
          </h2>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <ExperienceCard key={exp.company} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
