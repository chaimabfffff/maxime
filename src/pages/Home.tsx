import React, { useState } from 'react';
import { ChefHat, Weight, Heart, Trophy, Star } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icon
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const testimonials = [
  {
    id: 1,
    name: "Thomas D.",
    role: "Athlète CrossFit",
    content: "Les repas de Max ont complètement transformé ma récupération. Je me sens plus énergique que jamais !",
    rating: 5,
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 2,
    name: "Sophie M.",
    role: "Coureuse Marathon",
    content: "Une nutrition adaptée qui m'a permis d'améliorer significativement mes performances.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1526510747491-58f928ec870f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 3,
    name: "Lucas P.",
    role: "Coach Sportif",
    content: "Je recommande Max à tous mes clients. Des repas délicieux et parfaitement équilibrés.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  }
];

const Home = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('sending');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'e064a6d5-bffc-4d61-b38a-9a591ae17436', // Remplacez par votre clé Web3Forms
          subject: 'Nouvelle inscription à la newsletter',
          from_name: email,
          to_name: 'Max Eat\'Fit',
          to_email: 'contact@maxeatfit.fr',
          message: `Nouvelle inscription à la newsletter : ${email}`,
        }),
      });

      if (response.ok) {
        setStatus('success');
        setSubscribed(true);
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Erreur lors de l\'inscription à la newsletter:', error);
      setStatus('error');
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <motion.div 
        className="relative h-[600px] bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")'
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50">
          <div className="max-w-7xl mx-auto h-full flex items-center px-4">
            <motion.div 
              className="text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-5xl font-bold mb-4">Nutrition Sur Mesure pour Sportifs</h1>
              <p className="text-xl mb-8">Des repas équilibrés et délicieux adaptés à vos objectifs sportifs</p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  to="/recipes" 
                  className="bg-[#d4833b] hover:bg-[#c27535] text-white px-8 py-3 rounded-lg font-semibold inline-block transition-colors duration-200"
                >
                  Découvrir nos menus
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Features Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Nos Services
          </motion.h2>
          <motion.div 
            className="grid md:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { icon: ChefHat, title: "Repas Sur Mesure", desc: "Menus personnalisés selon vos besoins" },
              { icon: Weight, title: "Objectifs Sportifs", desc: "Nutrition adaptée à votre discipline" },
              { icon: Heart, title: "Santé & Bien-être", desc: "Ingrédients frais et de qualité" },
              { icon: Trophy, title: "Performance", desc: "Optimisation des résultats" }
            ].map((service, index) => (
              <motion.div 
                key={index}
                className="text-center transform hover:-translate-y-2 transition-transform duration-300"
                variants={itemVariants}
              >
                <motion.div 
                  className="bg-[#e8f5e9] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <service.icon className="h-8 w-8 text-[#2e7d32]" />
                </motion.div>
                <h3 className="font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ce que disent nos clients
          </motion.h2>
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={testimonial.id}
                className="bg-gray-50 p-6 rounded-xl shadow-sm transform hover:-translate-y-2 transition-all duration-300"
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
              >
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-[#d4833b] fill-current" />
                  ))}
                </div>
                <p className="text-gray-600">{testimonial.content}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Map Section */}
      <motion.div 
        className="py-16 bg-gray-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Où nous trouver</h2>
          <div className="h-[400px] rounded-xl overflow-hidden shadow-lg">
            <MapContainer 
              center={[43.2965, 5.3698]} 
              zoom={13} 
              style={{ height: '100%', width: '100%' }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={[43.2965, 5.3698]}>
                <Popup>
                  Max Eat'Fit <br /> Votre expert en nutrition sportive
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </motion.div>

      {/* Newsletter and Video Section */}
      <motion.div 
        className="py-16 bg-white"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Video Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-6">Notre Passion</h2>
              <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
                <iframe
                  className="absolute w-full h-full"
                  src="https://www.youtube.com/embed/dA0VGEbbw4g"
                  title="Cuisine saine et équilibrée"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <p className="text-gray-600 mt-4">
                Découvrez comment nous préparons des repas sains et délicieux pour nos athlètes
              </p>
            </motion.div>

            {/* Newsletter Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-[#e8f5e9] rounded-xl p-8">
                <h2 className="text-3xl font-bold mb-4">Restez informé</h2>
                <p className="text-gray-600 mb-8">
                  Inscrivez-vous à notre newsletter pour recevoir nos dernières recettes et conseils nutritionnels
                </p>
                
                {status === 'success' ? (
                  <motion.div 
                    className="text-[#2e7d32] font-semibold"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                  >
                    Merci de votre inscription ! Vous recevrez bientôt nos actualités.
                  </motion.div>
                ) : (
                  <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                    <div className="flex">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Votre email"
                        className="flex-1 px-4 py-2 rounded-l-lg border-2 border-[#2e7d32] focus:outline-none focus:ring-2 focus:ring-[#2e7d32]"
                        required
                        disabled={status === 'sending'}
                      />
                      <motion.button
                        type="submit"
                        className={`bg-[#2e7d32] text-white px-6 py-2 rounded-r-lg transition duration-200 ${
                          status === 'sending' ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#1b5e20]'
                        }`}
                        disabled={status === 'sending'}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {status === 'sending' ? 'Envoi...' : 'S\'inscrire'}
                      </motion.button>
                    </div>
                    {status === 'error' && (
                      <motion.div 
                        className="mt-4 text-red-600"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        Une erreur est survenue. Veuillez réessayer.
                      </motion.div>
                    )}
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;