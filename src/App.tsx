import { motion, useScroll, useTransform } from 'motion/react';
import { 
  Dumbbell, 
  Timer, 
  Users, 
  MapPin, 
  Phone, 
  MessageCircle, 
  Clock, 
  ChevronRight, 
  Star, 
  CheckCircle2,
  ArrowRight,
  Instagram,
  Facebook,
  Twitter
} from 'lucide-react';
import { useRef } from 'react';

const PROGRAMS = [
  {
    title: "Cardio Training",
    description: "High-performance treadmills, cycles, and cross trainers for peak endurance.",
    icon: <Timer className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Weight Training",
    description: "Premium dumbbells, barbells, and machines for serious muscle growth.",
    icon: <Dumbbell className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Personal Training",
    description: "One-on-one coaching tailored to your specific goals and body type.",
    icon: <Users className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Group Classes",
    description: "Zumba, Yoga, Aerobics, and HIIT sessions led by expert instructors.",
    icon: <Users className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1571388208497-71bedc66e932?auto=format&fit=crop&q=80&w=800"
  }
];

const TESTIMONIALS = [
  {
    name: "Kaki Vishwas",
    role: "Member",
    content: "Absolutely loving my experience! The environment is energetic and well-maintained. Special thanks to trainer Sidhu — his guidance and personalized plans have made a huge difference.",
    rating: 5
  },
  {
    name: "Dhanunjay Prattipati",
    role: "Personal Training Client",
    content: "My trainer Sandeep helped me in form corrections and structured a perfect routine. I see gradual improvement in muscle gain and overall fitness. Highly recommend!",
    rating: 5
  },
  {
    name: "M. Vickey",
    role: "Member",
    content: "The facility is clean, equipment is top-notch, and the vibe is welcoming. PT with Shyam Rao actually got me results. If you want real progress, this is the place.",
    rating: 5
  }
];

const SCHEDULE = [
  { day: "Monday - Saturday", hours: "6:00 AM – 10:00 PM" },
  { day: "Sunday", hours: "6:00 AM – 12:00 PM" }
];

const MEMBERSHIPS = [
  { duration: "1 Month", price: "Offers Dropping Soon", features: ["General Training", "Locker Access", "Drinking Water"] },
  { duration: "3 Months", price: "Offers Dropping Soon", features: ["General Training", "Locker Access", "Beginner Plans"] },
  { duration: "6 Months", price: "Offers Dropping Soon", features: ["General Training", "Locker Access", "Diet Suggestions"] },
  { duration: "12 Months", price: "Offers Dropping Soon", features: ["All Access", "Priority Support", "Full Transformation"] }
];

const GALLERY_IMAGES = [
  "https://lh3.googleusercontent.com/d/13sSJrSwVweU5_YUYa4Jp69kyXWURr-YI",
  "https://lh3.googleusercontent.com/d/1BfTlKfbbYLOdxIxSr9DyA1Jios0vxg_y",
  "https://lh3.googleusercontent.com/d/1O6k8PBivVoDWPQ55S_5KrYovHQWgXdmm",
  "https://lh3.googleusercontent.com/d/1_IqSNSCdhRW8ZgrGzoELOYtOx2AxqtcT",
  "https://lh3.googleusercontent.com/d/1cvPiOJRMVx75e0tZemYhIQV26aq9KCBu",
  "https://lh3.googleusercontent.com/d/1cvkUVlyC-QvZtpwPPSfc2V1jGW_5lYmI",
  "https://lh3.googleusercontent.com/d/1jx6mwj9vWx6zRUeXeP64zpAyOvfIZLbT",
  "https://lh3.googleusercontent.com/d/1u3lXZIJ1OBLZZYroU99hEzDPjLQU-fkz",
  "https://lh3.googleusercontent.com/d/1uUNNyD8SwtQBq_OY9BjQyYCBCZUQF2xQ"
];

export default function App() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="min-h-screen bg-brand-dark overflow-x-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between glass rounded-2xl px-4 py-2">
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 bg-white/5 rounded-xl overflow-hidden flex items-center justify-center p-1 border border-white/10">
              <img 
                src="https://lh3.googleusercontent.com/d/15fq6S_OvdcML02_q6jot0cHsU6EfkFSp" 
                alt="Cross Hammer Logo" 
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const parent = e.currentTarget.parentElement;
                  if (parent) parent.innerHTML = '<div class="text-brand-red font-black text-2xl italic">CH</div>';
                }}
              />
            </div>
            <span className="text-xl font-black tracking-tighter uppercase italic hidden sm:block">
              Cross Hammer
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold uppercase tracking-wider">
            <a href="#about" className="hover:text-brand-red transition-colors">About</a>
            <a href="#programs" className="hover:text-brand-red transition-colors">Programs</a>
            <a href="#gallery" className="hover:text-brand-red transition-colors">Gallery</a>
            <a href="#membership" className="hover:text-brand-red transition-colors">Membership</a>
            <a href="#contact" className="hover:text-brand-red transition-colors">Contact</a>
          </div>

          <a 
            href="#contact"
            className="bg-brand-red hover:bg-red-700 text-white px-6 py-2.5 rounded-xl font-bold text-sm transition-all hover:scale-105 active:scale-95 shadow-lg shadow-brand-red/20"
          >
            JOIN NOW
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/gym-hero/1920/1080" 
            alt="Gym Hero" 
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/20 via-brand-dark/60 to-brand-dark" />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 bg-brand-red/20 text-brand-red border border-brand-red/30 rounded-full text-xs font-bold tracking-[0.2em] uppercase mb-6">
              Hyderabad's Premium Fitness Destination
            </span>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black italic uppercase leading-[0.9] mb-8 tracking-tighter">
              STOP. DROP.<br />
              <span className="text-brand-red">TRANSFORM.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 font-medium">
              Elevate your fitness journey with modern equipment, expert coaches, and a community that pushes you to your limits.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="#contact"
                className="w-full sm:w-auto bg-brand-red hover:bg-red-700 text-white px-10 py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-2 transition-all hover:scale-105 group"
              >
                START YOUR TRIAL
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="https://wa.me/6309488555"
                className="w-full sm:w-auto glass hover:bg-white/20 text-white px-10 py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-2 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                WHATSAPP US
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div 
          style={{ opacity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase opacity-50">Scroll to explore</span>
          <div className="w-px h-12 bg-gradient-to-b from-brand-red to-transparent" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto grid lg:grid-template-columns-[1fr_1.2fr] gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-red/10 rounded-full blur-3xl" />
            <img 
              src="https://images.unsplash.com/photo-1590487988256-9ed24133863e?auto=format&fit=crop&q=80&w=1200" 
              alt="Gym Environment" 
              className="rounded-3xl shadow-2xl relative z-10 grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-6 -right-6 glass p-8 rounded-2xl z-20 max-w-[240px]">
              <p className="text-4xl font-black text-brand-red mb-1">100%</p>
              <p className="text-sm font-bold uppercase tracking-wider text-gray-300">Dedication to your transformation</p>
            </div>
          </div>

          <div>
            <span className="text-brand-red font-black tracking-widest uppercase text-sm mb-4 block">Our Philosophy</span>
            <h2 className="text-5xl md:text-6xl font-black italic uppercase mb-8 leading-tight">
              More Than Just A Gym. <br />
              <span className="text-gray-500">A Community.</span>
            </h2>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              At Cross Hammer Gym, we believe fitness is a lifestyle, not a chore. Located in the heart of Alkapur Township, we provide a high-energy environment designed to motivate and inspire. Whether you're a beginner or a seasoned athlete, our facility and expert coaches are here to ensure you hit your goals.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              {[
                "Modern Equipment",
                "Expert Coaching",
                "Flexible Plans",
                "Motivating Vibe"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-brand-red w-6 h-6" />
                  <span className="font-bold uppercase tracking-tight">{item}</span>
                </div>
              ))}
            </div>

            <button className="text-brand-red font-black flex items-center gap-2 hover:gap-4 transition-all group">
              LEARN MORE ABOUT US
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-24 bg-brand-gray/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-brand-red font-black tracking-widest uppercase text-sm mb-4 block">What We Offer</span>
            <h2 className="text-5xl md:text-7xl font-black italic uppercase mb-6">Elite Programs</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              From high-intensity group sessions to personalized one-on-one coaching, we have the perfect program for your fitness level.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PROGRAMS.map((program, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-3xl bg-brand-dark border border-white/5"
              >
                <div className="aspect-[4/5] relative overflow-hidden">
                  <img 
                    src={program.image} 
                    alt={program.title} 
                    className="w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent" />
                  <div className="absolute top-6 left-6 w-14 h-14 glass rounded-2xl flex items-center justify-center text-brand-red">
                    {program.icon}
                  </div>
                </div>
                <div className="p-8 relative -mt-20">
                  <h3 className="text-2xl font-black italic uppercase mb-3">{program.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {program.description}
                  </p>
                  <button className="text-xs font-black tracking-widest uppercase flex items-center gap-2 text-brand-red">
                    Explore Program <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 px-6 bg-brand-dark">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-brand-red font-black tracking-widest uppercase text-sm mb-4 block">The Facility</span>
              <h2 className="text-5xl md:text-7xl font-black italic uppercase leading-[0.9]">Visual Tour</h2>
            </div>
            <p className="text-gray-400 font-medium max-w-xs md:text-right">
              Take a look inside our premium training grounds. Designed for performance.
            </p>
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {GALLERY_IMAGES.map((img, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative group overflow-hidden rounded-3xl"
              >
                <img 
                  src={img} 
                  alt={`Gallery ${i}`} 
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-red/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-red scale-0 group-hover:scale-100 transition-transform duration-500">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Section */}
      <section id="membership" className="py-24 px-6 bg-brand-gray/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-brand-red font-black tracking-widest uppercase text-sm mb-4 block">Membership Plans</span>
            <h2 className="text-5xl md:text-7xl font-black italic uppercase mb-6">Join The Tribe</h2>
            <div className="inline-block px-6 py-2 bg-brand-red/10 border border-brand-red/20 rounded-full">
              <p className="text-brand-red font-bold uppercase tracking-widest text-sm">
                🔥 Exclusive Offers Dropping Soon
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {MEMBERSHIPS.map((plan, i) => (
              <div key={i} className="glass p-8 rounded-[2.5rem] flex flex-col border-white/5 hover:border-brand-red/30 transition-colors group">
                <h3 className="text-2xl font-black italic uppercase mb-2">{plan.duration}</h3>
                <div className="mb-8">
                  <p className="text-brand-red font-black text-xl uppercase tracking-tighter">{plan.price}</p>
                  <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mt-1">Coming Soon</p>
                </div>
                
                <div className="space-y-4 mb-10 flex-grow">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-brand-red" />
                      <span className="text-sm font-medium text-gray-400">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="w-full py-4 rounded-2xl bg-white/5 group-hover:bg-brand-red text-white font-black uppercase tracking-widest text-xs transition-all">
                  Notify Me
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us / Bento Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-brand-red rounded-[3rem] p-12 flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl" />
              <div className="relative z-10">
                <h2 className="text-5xl md:text-7xl font-black italic uppercase text-white mb-6 leading-[0.9]">
                  Modern Gear.<br />Real Results.
                </h2>
                <p className="text-white/80 text-lg max-w-md mb-8 font-medium">
                  We invest in the best equipment because you deserve the best tools for your transformation.
                </p>
              </div>
              <div className="relative z-10 flex items-center gap-4">
                <div className="flex -space-x-4">
                  {[1,2,3,4].map(i => (
                    <img key={i} src={`https://i.pravatar.cc/100?u=${i}`} className="w-12 h-12 rounded-full border-4 border-brand-red" alt="User" />
                  ))}
                </div>
                <p className="text-sm font-bold uppercase tracking-wider text-white">Joined by 500+ members</p>
              </div>
            </div>

            <div className="bg-white rounded-[3rem] p-12 flex flex-col justify-center text-brand-dark">
              <Star className="text-brand-red w-12 h-12 mb-6 fill-brand-red" />
              <h3 className="text-4xl font-black italic uppercase mb-4 leading-tight">Expert Coaches</h3>
              <p className="text-gray-600 font-medium">
                Our trainers aren't just instructors; they're partners in your journey, pushing you past your limits every single day.
              </p>
            </div>

            <div className="bg-brand-gray/10 rounded-[3rem] p-12 flex flex-col justify-center border border-white/5">
              <Clock className="text-brand-red w-12 h-12 mb-6" />
              <h3 className="text-4xl font-black italic uppercase mb-4 leading-tight">Flexible Hours</h3>
              <p className="text-gray-400 font-medium">
                Open from 6 AM to 10 PM. We fit into your schedule, not the other way around.
              </p>
            </div>

            <div className="lg:col-span-2 bg-brand-dark rounded-[3rem] p-12 border border-white/10 relative overflow-hidden group">
              <img 
                src="https://picsum.photos/seed/gym-interior/1200/400" 
                alt="Gym Interior" 
                className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-105 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="relative z-10 h-full flex flex-col justify-center">
                <h3 className="text-4xl md:text-5xl font-black italic uppercase mb-4">Premium Facility</h3>
                <p className="text-gray-400 max-w-xl font-medium">
                  Changing rooms, secure lockers, clean drinking water, and full AC. We provide everything you need to focus entirely on your workout.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-brand-red/5 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black italic uppercase whitespace-nowrap">
            TRANSFORM TRANSFORM TRANSFORM
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="text-brand-red font-black tracking-widest uppercase text-sm mb-4 block">Success Stories</span>
            <h2 className="text-5xl md:text-7xl font-black italic uppercase mb-6">Member Results</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="glass p-10 rounded-[2.5rem] relative">
                <div className="flex gap-1 mb-6">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-brand-red text-brand-red" />
                  ))}
                </div>
                <p className="text-lg font-medium italic mb-8 text-gray-200 leading-relaxed">
                  "{t.content}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand-red rounded-full flex items-center justify-center font-black text-xl">
                    {t.name[0]}
                  </div>
                  <div>
                    <h4 className="font-black uppercase italic tracking-tight">{t.name}</h4>
                    <p className="text-xs font-bold text-brand-red uppercase tracking-widest">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit Us / Schedule Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto glass rounded-[3rem] overflow-hidden grid lg:grid-cols-2">
          <div className="p-12 md:p-16">
            <h2 className="text-5xl font-black italic uppercase mb-8">Visit The Forge</h2>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-4">
                <MapPin className="text-brand-red w-6 h-6 shrink-0 mt-1" />
                <div>
                  <h4 className="font-black uppercase italic mb-1">Location</h4>
                  <p className="text-gray-400 font-medium">
                    4th floor, Qube by Aryamitra, Rd Number 9, Huda, Alkapur Twp, Puppalguda, Manikonda, Hyderabad, 500089
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="text-brand-red w-6 h-6 shrink-0 mt-1" />
                <div>
                  <h4 className="font-black uppercase italic mb-1">Opening Hours</h4>
                  <div className="space-y-1">
                    {SCHEDULE.map((s, i) => (
                      <div key={i} className="flex justify-between gap-8">
                        <span className="text-gray-400 font-medium">{s.day}</span>
                        <span className="font-bold">{s.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <a 
              href="https://maps.app.goo.gl/5PcBfZVKntXQoSF29"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-brand-dark px-8 py-4 rounded-2xl font-black uppercase tracking-tight hover:bg-brand-red hover:text-white transition-all"
            >
              Get Directions <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          <div className="relative h-[400px] lg:h-auto">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.388710323347!2d78.3712!3d17.3948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDIzJzQxLjMiTiA3OMKwMjInMTYuMyJF!5e0!3m2!1sen!2sin!4v1712640000000!5m2!1sen!2sin" 
              className="absolute inset-0 w-full h-full border-0 grayscale invert opacity-60"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* Contact / Membership CTA */}
      <section id="contact" className="py-24 px-6 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-red/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-6xl md:text-8xl font-black italic uppercase mb-8 leading-[0.85]">
            Ready to <span className="text-brand-red underline decoration-8 underline-offset-8">Start?</span>
          </h2>
          <p className="text-xl text-gray-400 mb-12 font-medium">
            Join Cross Hammer Gym today and take the first step towards a stronger, healthier you. No excuses, just results.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a 
              href="tel:6309488555"
              className="w-full md:w-auto bg-brand-red hover:bg-red-700 text-white px-12 py-6 rounded-2xl font-black text-xl flex items-center justify-center gap-3 transition-all hover:scale-105"
            >
              <Phone className="w-6 h-6" />
              CALL 6309488555
            </a>
            <a 
              href="https://wa.me/6309488555"
              className="w-full md:w-auto glass hover:bg-white/20 text-white px-12 py-6 rounded-2xl font-black text-xl flex items-center justify-center gap-3 transition-all"
            >
              <MessageCircle className="w-6 h-6" />
              WHATSAPP US
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-red rounded flex items-center justify-center">
              <Dumbbell className="text-white w-5 h-5" />
            </div>
            <span className="text-lg font-black tracking-tighter uppercase italic">
              Cross Hammer
            </span>
          </div>

          <p className="text-gray-500 text-sm font-medium">
            © 2024 Cross Hammer Gym. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-500 hover:text-brand-red transition-colors"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="text-gray-500 hover:text-brand-red transition-colors"><Facebook className="w-5 h-5" /></a>
            <a href="#" className="text-gray-500 hover:text-brand-red transition-colors"><Twitter className="w-5 h-5" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
