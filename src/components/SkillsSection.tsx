import { motion } from "framer-motion";
import {
  FiPieChart, FiCode, FiCloud, FiShield, FiServer, FiZap, FiDatabase, FiActivity, FiBarChart2, FiMaximize, FiCpu, FiSettings
} from "react-icons/fi";

const skillCategories = [
  {
    icon: FiCode,
    title: "Programming Languages",
    skills: ["Java", "C#", "Python", "SQL"],
  },
  {
    icon: FiServer,
    title: "Backend Development & Frameworks",
    skills: ["Spring Boot", "Spring MVC", "Spring Security", ".NET / ASP.NET Core", "REST APIs", "API Design", "GraphQL", "Hibernate", "Entity Framework Core"],
  },
  {
    icon: FiPieChart,
    title: "Frontend Development",
    skills: ["JavaScript", "TypeScript", "React.js", "Angular", "HTML5", "CSS3"],
  },
  {
    icon: FiZap,
    title: "Microservices & Distributed Systems",
    skills: ["Microservices Architecture", "Spring Cloud (Config, Eureka, Gateway)", "API Gateway", "Service Discovery", "Distributed Systems", "Event-Driven Architecture", "Concurrency", "Fault Tolerance"],
  },
  {
    icon: FiCloud,
    title: "Cloud Platforms",
    skills: ["AWS (EC2, S3, Lambda, RDS, DynamoDB, SNS, SQS)", "Microsoft Azure", "Azure Storage"],
  },
  {
    icon: FiSettings,
    title: "Containerization & DevOps",
    skills: ["Docker", "Kubernetes", "Terraform", "CI/CD", "Jenkins", "Azure DevOps", "GitHub Actions"],
  },
  {
    icon: FiDatabase,
    title: "Databases & Caching",
    skills: ["PostgreSQL", "SQL Server", "MySQL", "MongoDB", "DynamoDB", "Redis"],
  },
  {
    icon: FiActivity,
    title: "Messaging & Streaming",
    skills: ["Apache Kafka", "RabbitMQ"],
  },
  {
    icon: FiMaximize,
    title: "System Design & Scalability",
    skills: ["System Design", "Scalable Systems", "Asynchronous Processing", "High Availability"],
  },
  {
    icon: FiBarChart2,
    title: "Monitoring & Observability",
    skills: ["Prometheus", "Grafana", "AWS CloudWatch", "Logging"],
  },
  {
    icon: FiShield,
    title: "Security & Build Tools",
    skills: ["Spring Security", "OAuth2", "JWT", "RBAC", "Maven", "Gradle", "Git", "Postman"],
  },
  {
    icon: FiCpu,
    title: "AI & Generative AI Engineering",
    skills: ["OpenAI APIs", "LLM Integration", "Prompt Engineering", "Retrieval-Augmented Validation Workflows", "AI-Assisted Backend Automation", "Transaction Anomaly Classification Using LLMs"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-accent text-sm tracking-widest uppercase font-body mb-2">Expertise</p>
          <h2 className="text-4xl md:text-8xl font-heading font-black text-foreground tracking-tighter">
            Technical Skills
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              className="rounded-3xl bg-card border border-border p-8 card-3d-hover group"
              initial={{ opacity: 0, y: 40, rotateY: 15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  className="w-14 h-14 rounded-2xl gradient-accent flex items-center justify-center shadow-lg card-3d-content"
                  animate={{ rotateY: [0, 360] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  <cat.icon className="text-accent-foreground" size={28} />
                </motion.div>
                <h3 className="text-xl font-heading font-black text-foreground">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2 card-3d-content">
                {cat.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    className="px-3 py-1.5 text-xs font-heading font-bold rounded-lg bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-all cursor-default"
                    whileHover={{ scale: 1.1, translateZ: 10 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
