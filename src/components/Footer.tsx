import React, { useState } from 'react';
import { Mail, Phone, MapPin, Instagram } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    try {
      // Ici, vous pouvez ajouter la logique pour enregistrer l'email dans votre base de données
      setSubscribed(true);
      setEmail('');
    } catch (error) {
      console.error('Erreur lors de l\'inscription à la newsletter:', error);
    }
  };

  return (
    <footer className="bg-[#2e7d32] text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Max Eat'Fit</h3>
            <p className="text-green-100">
              Votre partenaire nutrition pour atteindre vos objectifs sportifs.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5" />
                <span>contact@maxeatfit.fr</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>01 23 45 67 89</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5" />
                <span>Marseille, France</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Suivez-nous</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#d4833b]">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Newsletter</h4>
            {subscribed ? (
              <div className="text-green-100">
                Merci de votre inscription !
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit}>
                <div className="flex">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Votre email"
                    className="px-4 py-2 rounded-l-lg text-black flex-1"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-[#d4833b] hover:bg-[#c27535] px-4 py-2 rounded-r-lg"
                  >
                    OK
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
        <div className="border-t border-green-700 mt-8 pt-8 text-center text-green-100">
          <p>&copy; 2024 Max Eat'Fit. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;