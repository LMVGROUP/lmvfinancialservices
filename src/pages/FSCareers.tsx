import { useEffect, useRef, useState } from "react";
import { useNavigate, Link } from "react-router-dom";  // ✅ Added Link here
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Briefcase, MapPin, Clock, ChevronRight, ArrowRight,
  Send, Heart, Upload, X, Check, Loader2,
  Users, Shield, Award, Target, HeartHandshake
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { getFSOpenPositions, submitFSApplication, type FSJobPosition } from "@/lib/api/fsCareers";

gsap.registerPlugin(ScrollTrigger);

const perks = [
  { icon: Heart, title: "Health & Wellness", desc: "Comprehensive health insurance for you and your family" },
  { icon: Users, title: "Growth First", desc: "Learning budgets, certifications, and conference sponsorships" },
  { icon: Shield, title: "Job Security", desc: "Stable career with long-term growth opportunities" },
  { icon: Target, title: "Client First Culture", desc: "We prioritize customer satisfaction above everything" },
];

const FSCareers = () => {
  const heroRef = useRef<HTMLElement>(null);
  const navigate = useNavigate();
  const [expandedJob, setExpandedJob] = useState<string | null>(null);
  const [jobs, setJobs] = useState<FSJobPosition[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [deptFilter, setDeptFilter] = useState<string>("all");
  const [applyJob, setApplyJob] = useState<FSJobPosition | null>(null);

  useEffect(() => {
    getFSOpenPositions()
      .then((data) => {
        console.log("Fetched FS jobs:", data);
        setJobs(data || []);
      })
      .catch((error) => {
        console.error("Error in component:", error);
        setJobs([]);
      })
      .finally(() => setLoading(false));
  }, []);

  const departments: string[] = ["all", ...new Set(
    jobs.map((j) => j.department_name || "General")
  )];
  
  const filtered: FSJobPosition[] = deptFilter === "all" 
    ? jobs 
    : jobs.filter((j) => j.department_name === deptFilter);

  useEffect(() => {
    if (loading) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.from(".careers-hero-badge", { opacity: 0, y: -20, scale: 0.8, duration: 0.5, ease: "back.out(2)" });
      tl.from(".careers-hero-word", { opacity: 0, y: 60, rotationX: 45, filter: "blur(8px)", stagger: 0.08, duration: 0.7, ease: "power3.out" }, "-=0.2");
      tl.from(".careers-hero-sub", { clipPath: "inset(0 100% 0 0)", opacity: 0, duration: 0.8, ease: "power3.out" }, "-=0.3");
      tl.from(".careers-hero-cta", { opacity: 0, scale: 0.7, y: 20, duration: 0.5, ease: "back.out(2.5)" }, "-=0.2");

      gsap.from(".perk-card", { opacity: 0, y: 40, scale: 0.9, stagger: 0.12, duration: 0.6, ease: "power3.out", scrollTrigger: { trigger: ".perks-grid", start: "top 80%" } });
      gsap.from(".job-card", { opacity: 0, x: -60, rotationY: 8, stagger: 0.1, duration: 0.7, ease: "power3.out", scrollTrigger: { trigger: ".jobs-list", start: "top 80%" } });
    }, heroRef);
    return () => ctx.revert();
  }, [loading]);

  return (
    <Layout>
      <main ref={heroRef}>
        {/* Hero Section - WhyChooseUs style */}
        <section className="section-padding bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container-section">
            <div className="max-w-3xl mx-auto text-center">
              <div className="careers-hero-badge inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-medium mb-8">
                <Briefcase className="w-3.5 h-3.5" /> We're Hiring
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Build Your Career with <span className="text-primary">LMV Financial</span>
              </h1>
              <p className="careers-hero-sub text-lg md:text-xl text-muted-foreground leading-relaxed">
                Join a team that's transforming the financial services industry. 
                Work with experts. Grow your career.
              </p>
              <div className="careers-hero-cta mt-8">
                <Button asChild size="lg" className="rounded-full">
                  <a href="#openings">
                    View Open Positions <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section - WhyChooseUs style */}
        <section className="py-12 bg-primary">
          <div className="container-section">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">14+</div>
                <p className="text-sm text-primary-foreground/80">Years of Excellence</p>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">10,000+</div>
                <p className="text-sm text-primary-foreground/80">Happy Clients</p>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">₹500Cr+</div>
                <p className="text-sm text-primary-foreground/80">Assets Under Management</p>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">98%</div>
                <p className="text-sm text-primary-foreground/80">Client Retention</p>
              </div>
            </div>
          </div>
        </section>


        {/* Open Positions Section */}
        <section id="openings" className="section-padding bg-muted/30">
          <div className="container-section">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Open <span className="text-primary">Positions</span></h2>
              <p className="text-muted-foreground text-lg">
                We're looking for passionate professionals who want to make an impact in financial services.
              </p>
            </div>

            {/* Department filter */}
            {departments.length > 2 && (
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {departments.map((dept) => (
                  <button 
                    key={dept} 
                    onClick={() => setDeptFilter(dept)} 
                    className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                      deptFilter === dept 
                        ? "bg-primary text-primary-foreground" 
                        : "bg-card border border-border text-muted-foreground hover:border-primary/40"
                    }`}
                  >
                    {dept === "all" ? "All Departments" : dept}
                  </button>
                ))}
              </div>
            )}

            {loading ? (
              <div className="text-center py-16">
                <Loader2 className="w-6 h-6 animate-spin text-primary mx-auto" />
                <p className="mt-3 text-sm text-muted-foreground">Loading positions...</p>
              </div>
            ) : filtered.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-muted-foreground text-sm">No openings right now.</p>
                <p className="text-muted-foreground text-xs mt-2">
                  Send your CV to <a href="mailto:careers@lmvfinancial.com" className="text-primary hover:underline">careers@lmvfinancial.com</a>
                </p>
              </div>
            ) : (
              <div className="jobs-list max-w-3xl mx-auto space-y-4">
                {filtered.map((job) => {
                  const isExpanded = expandedJob === job.id;
                  const requirements = Array.isArray(job.requirements) ? job.requirements : [];
                  const benefits = Array.isArray(job.benefits) ? job.benefits : [];
                  
                  return (
                    <div key={job.id} className="job-card">
                      <button 
                        onClick={() => setExpandedJob(isExpanded ? null : job.id)} 
                        className="w-full text-left p-5 rounded-xl border border-border bg-card hover:border-primary/40 transition-all duration-300 group"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <Briefcase className="w-5 h-5 text-primary" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 flex-wrap">
                              <h3 className="text-sm font-semibold font-primary">{job.title}</h3>
                              {job.is_urgent && (
                                <span className="px-2 py-0.5 text-[10px] font-bold rounded-full bg-destructive/10 text-destructive">
                                  🔥 Urgent
                                </span>
                              )}
                              {job.is_featured && (
                                <span className="px-2 py-0.5 text-[10px] font-bold rounded-full bg-primary/10 text-primary">
                                  ⭐ Featured
                                </span>
                              )}
                            </div>
                            <div className="flex flex-wrap gap-3 mt-1">
                              {job.department_name && (
                                <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                                  <Briefcase className="w-3 h-3" /> {job.department_name}
                                </span>
                              )}
                              <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                                <MapPin className="w-3 h-3" /> {job.location}
                              </span>
                              <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                                <Clock className="w-3 h-3" /> {job.job_type}
                              </span>
                              <span className="text-xs text-muted-foreground">
                                {job.experience_min}–{job.experience_max} yrs
                              </span>
                            </div>
                          </div>
                          <ChevronRight className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${isExpanded ? "rotate-90" : ""}`} />
                        </div>
                      </button>

                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div 
                            initial={{ height: 0, opacity: 0 }} 
                            animate={{ height: "auto", opacity: 1 }} 
                            exit={{ height: 0, opacity: 0 }} 
                            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }} 
                            className="overflow-hidden"
                          >
                            <div className="px-5 pb-5 pt-2 ml-14">
                              <p className="text-sm text-muted-foreground mb-3">{job.summary || job.description?.substring(0, 200)}</p>
                              
                              {job.salary_min && (
                                <p className="text-xs font-semibold text-primary mb-2">
                                  ₹{(job.salary_min / 1000).toFixed(0)}K – ₹{((job.salary_max || job.salary_min) / 1000).toFixed(0)}K / month
                                </p>
                              )}
                              
                              {requirements.length > 0 && (
                                <div className="mb-3">
                                  <p className="text-xs font-semibold text-foreground mb-1">Requirements</p>
                                  <ul className="space-y-1">
                                    {requirements.map((r, i) => (
                                      <li key={i} className="text-xs text-muted-foreground flex items-center gap-2">
                                        <span className="w-1 h-1 rounded-full bg-primary shrink-0" />
                                        {r}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                              
                              {benefits.length > 0 && (
                                <div className="mb-3">
                                  <p className="text-xs font-semibold text-foreground mb-1">Benefits</p>
                                  <ul className="space-y-1">
                                    {benefits.map((r, i) => (
                                      <li key={i} className="text-xs text-muted-foreground flex items-center gap-2">
                                        <span className="w-1 h-1 rounded-full bg-primary shrink-0" />
                                        {r}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                              
                              <Button onClick={() => setApplyJob(job)} className="mt-2 rounded-full">
                                Apply Now <Send className="ml-2 h-3 w-3" />
                              </Button>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding">
          <div className="container-section">
            <div className="relative overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 via-background to-primary/10 p-10 md:p-16 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 relative z-10">
                Don't see your role? <span className="text-gradient">Reach out anyway.</span>
              </h2>
              <p className="text-sm text-muted-foreground mb-8 max-w-md mx-auto relative z-10">
                We're always looking for exceptional talent. Send us your resume and tell us what excites you.
              </p>
              <Button asChild size="lg" className="rounded-full relative z-10">
                <Link to="/contact">
                  Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* APPLICATION MODAL */}
        <AnimatePresence>
          {applyJob && <ApplicationModal job={applyJob} onClose={() => setApplyJob(null)} />}
        </AnimatePresence>
      </main>
    </Layout>
  );
};

// Application Modal Component
interface ApplicationFormData {
  full_name: string;
  email: string;
  phone: string;
  current_location: string;
  current_company: string;
  current_role: string;
  experience: number;
  cover_letter: string;
  expected_salary: string;
  notice_period: string;
}

function ApplicationModal({ job, onClose }: { job: FSJobPosition; onClose: () => void }) {
  const [step, setStep] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const fileRef = useRef<HTMLInputElement>(null);
  const [resumeFile, setResumeFile] = useState<File | null>(null);

  const [form, setForm] = useState<ApplicationFormData>({
    full_name: "",
    email: "",
    phone: "",
    current_location: "",
    current_company: "",
    current_role: "",
    experience: 0,
    cover_letter: "",
    expected_salary: "",
    notice_period: "Immediate",
  });

  const update = (k: keyof ApplicationFormData, v: any) => setForm((f) => ({ ...f, [k]: v }));

  const handleSubmit = async () => {
    if (!resumeFile) {
      setError("Please upload your resume");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const result = await submitFSApplication({
        job_id: job.id,
        full_name: form.full_name,
        email: form.email,
        phone: form.phone,
        current_location: form.current_location,
        current_company: form.current_company,
        current_role: form.current_role,
        experience: form.experience,
        expected_salary: form.expected_salary,
        notice_period: form.notice_period,
        cover_letter: form.cover_letter,
      }, resumeFile);

      setLoading(false);

      if (result.success) {
        setSuccess(true);
      } else {
        setError(result.error || result.message || "Something went wrong.");
      }
    } catch (err: any) {
      setLoading(false);
      setError(err.message || "Network error. Please try again.");
    }
  };

  const inputClass = "w-full px-4 py-2.5 text-sm bg-background border border-border rounded-xl focus:border-primary focus:ring-1 focus:ring-primary/30 outline-none transition-all";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-card border border-border rounded-2xl p-6 md:p-8 w-full max-w-lg max-h-[90vh] overflow-y-auto"
      >
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-lg font-bold">Apply for {job.title}</h2>
            <p className="text-xs text-muted-foreground">{job.department_name} · {job.location}</p>
          </div>
          <button onClick={onClose} className="p-1 rounded-lg hover:bg-muted transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex items-center gap-2 mb-6">
          {["Personal", "Professional", "Resume"].map((s, i) => (
            <div key={s} className="flex items-center gap-2 flex-1">
              <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold ${step > i + 1 ? "bg-primary text-primary-foreground" : step === i + 1 ? "bg-primary/20 text-primary border border-primary" : "bg-muted text-muted-foreground"}`}>
                {step > i + 1 ? <Check className="w-3 h-3" /> : i + 1}
              </div>
              <span className="text-[10px] text-muted-foreground hidden sm:inline">{s}</span>
              {i < 2 && <div className={`flex-1 h-px ${step > i + 1 ? "bg-primary" : "bg-border"}`} />}
            </div>
          ))}
        </div>

        {!success ? (
          <>
            {step === 1 && (
              <div className="space-y-3">
                <input placeholder="Full Name *" value={form.full_name} onChange={(e) => update("full_name", e.target.value)} className={inputClass} />
                <input placeholder="Email Address *" type="email" value={form.email} onChange={(e) => update("email", e.target.value)} className={inputClass} />
                <input placeholder="Phone Number *" value={form.phone} onChange={(e) => update("phone", e.target.value)} className={inputClass} />
                <input placeholder="Current Location" value={form.current_location} onChange={(e) => update("current_location", e.target.value)} className={inputClass} />
                {error && <p className="text-xs text-destructive">{error}</p>}
                <button onClick={() => { setStep(2); setError(""); }} className="w-full py-2.5 text-sm font-medium bg-primary text-primary-foreground rounded-xl">
                  Next →
                </button>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-3">
                <input placeholder="Current Company" value={form.current_company} onChange={(e) => update("current_company", e.target.value)} className={inputClass} />
                <input placeholder="Current Role" value={form.current_role} onChange={(e) => update("current_role", e.target.value)} className={inputClass} />
                <div className="grid grid-cols-2 gap-3">
                  <input type="number" placeholder="Years Experience" value={form.experience || ""} onChange={(e) => update("experience", parseInt(e.target.value) || 0)} className={inputClass} />
                  <input type="number" placeholder="Expected salary (₹/mo)" value={form.expected_salary} onChange={(e) => update("expected_salary", e.target.value)} className={inputClass} />
                </div>
                <select value={form.notice_period} onChange={(e) => update("notice_period", e.target.value)} className={inputClass}>
                  <option>Immediate</option><option>15 days</option><option>30 days</option><option>60 days</option><option>90 days</option>
                </select>
                <div className="flex gap-3">
                  <button onClick={() => setStep(1)} className="flex-1 py-2.5 text-sm font-medium border border-border rounded-xl hover:bg-muted">← Back</button>
                  <button onClick={() => setStep(3)} className="flex-1 py-2.5 text-sm font-medium bg-primary text-primary-foreground rounded-xl">Next →</button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-3">
                <div
                  className={`border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-colors ${resumeFile ? "border-primary bg-primary/5" : "border-border hover:border-primary/40"}`}
                  onClick={() => fileRef.current?.click()}
                >
                  <input ref={fileRef} type="file" hidden accept=".pdf,.doc,.docx" onChange={(e) => e.target.files?.[0] && setResumeFile(e.target.files[0])} />
                  {resumeFile ? (
                    <div className="flex items-center justify-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary" />
                      <span>{resumeFile.name}</span>
                      <button onClick={(e) => { e.stopPropagation(); setResumeFile(null); }} className="text-destructive text-xs">Remove</button>
                    </div>
                  ) : (
                    <>
                      <Upload className="w-6 h-6 text-muted-foreground mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">Drop resume here or click to upload</p>
                    </>
                  )}
                </div>
                <textarea placeholder="Cover letter (optional)" value={form.cover_letter} onChange={(e) => update("cover_letter", e.target.value)} rows={3} className={inputClass + " resize-none"} />
                {error && <p className="text-xs text-destructive">{error}</p>}
                <div className="flex gap-3">
                  <button onClick={() => setStep(2)} className="flex-1 py-2.5 text-sm font-medium border border-border rounded-xl">← Back</button>
                  <button onClick={handleSubmit} disabled={loading} className="flex-1 py-2.5 text-sm font-medium bg-primary text-primary-foreground rounded-xl disabled:opacity-50">
                    {loading ? <Loader2 className="w-4 h-4 animate-spin mx-auto" /> : "Submit Application"}
                  </button>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-8">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Check className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-bold mb-2">Application Submitted!</h3>
            <p className="text-sm text-muted-foreground">Thank you! We'll review and respond within 3–5 business days.</p>
            <button onClick={onClose} className="mt-6 px-6 py-2.5 text-sm font-medium bg-primary text-primary-foreground rounded-xl">Close</button>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

export default FSCareers;