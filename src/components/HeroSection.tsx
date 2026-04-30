import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FiArrowDown, FiDownload, FiLinkedin } from "react-icons/fi";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center section-padding pt-28">
      <div className="container mx-auto flex flex-col lg:grid lg:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <motion.div
          className="order-2 lg:order-1 text-center lg:text-left"
          initial={{ opacity: 0, x: -60, rotateY: 20 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          style={{ perspective: 1200 }}
        >
          <motion.p
            className="text-accent font-heading font-semibold text-sm tracking-[0.3em] uppercase mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            Software Engineer
          </motion.p>
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-heading font-black text-foreground leading-[1.1] mb-6 tracking-tighter italic">
            Vinay Kumar
          </h1>
          <p className="text-muted-foreground font-body text-lg lg:text-xl leading-relaxed max-w-xl mb-10 border-l-4 border-accent pl-6 mx-auto lg:mx-0">
            Software Engineer with 5 years of experience designing distributed backend services using Java, Spring Boot, Spring MVC, C#, and
            microservices architecture across fintech platforms supporting high-availability transaction processing workflows.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 lg:gap-6 justify-center lg:justify-start">
            <Link to="projects" smooth offset={-80} duration={600}>
              <motion.button
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-accent text-accent-foreground font-heading font-bold flex items-center justify-center gap-3 shadow-lg shadow-accent/20 hover:shadow-accent/40 transition-all card-3d-hover"
                whileHover={{ scale: 1.05, translateZ: 20 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects <FiArrowDown className="animate-bounce" />
              </motion.button>
            </Link>
            <motion.a
              href="/resume.pdf"
              download="Vinay_Kumar_Resume.pdf"
              className="w-full sm:w-auto px-8 py-4 rounded-xl border-2 border-border text-foreground font-heading font-bold flex items-center justify-center gap-3 hover:bg-card transition-all card-3d-hover shadow-lg"
              whileHover={{ scale: 1.05, translateZ: 20 }}
              whileTap={{ scale: 0.95 }}
            >
              Resume <FiDownload />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/vinay-kumar-reddy-vippala-a5957a300/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-xl border-2 border-border text-foreground font-heading font-bold flex items-center justify-center gap-3 hover:bg-card transition-all card-3d-hover shadow-lg"
              whileHover={{ scale: 1.05, translateZ: 20 }}
              whileTap={{ scale: 0.95 }}
            >
              LinkedIn <FiLinkedin />
            </motion.a>
          </div>

        </motion.div>

        {/* Right - Profile Image */}
        <motion.div
          className="order-1 lg:order-2 flex justify-center lg:justify-end perspective-1000 mb-8 lg:mb-0"
          initial={{ opacity: 0, x: 60, rotateY: -20 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <motion.div
            className="relative w-full max-w-[320px] sm:max-w-sm h-[400px] lg:h-[550px] rounded-full overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border-2 border-border/50 tilt-3d"
            whileHover={{ rotateY: 15, rotateX: -10, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 150, damping: 15 }}
          >
            <div className="relative w-full h-full group">
              <img
                src="/profile.jpg"
                alt="Vinay Kumar"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent flex flex-col items-center justify-end p-8 pb-12 text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <p className="text-accent font-heading font-bold text-xs md:text-sm tracking-[0.2em] uppercase mb-4">
                    Software Engineer
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {["Java", "Spring Boot", "C#", "Kafka", "GenAI"].map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-[10px] font-heading font-bold rounded-full bg-accent/10 text-accent border border-accent/20 backdrop-blur-md"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

