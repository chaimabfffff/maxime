import React from 'react';
import { Award, GraduationCap, Clock, Heart, Trophy, ChefHat, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold mb-4">À Propos de Max</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Passionné par la cuisine et le sport depuis plus de 15 ans, je crée des repas équilibrés
            et délicieux pour aider les athlètes à atteindre leurs objectifs.
          </p>
        </motion.div>

        {/* Bio Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="/chef-max.jpg"
              alt="Chef Max"
              className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-6">Mon Parcours</h2>
            <p className="text-gray-600 mb-4">
              Diplômé de l'École de Cuisine de Marseille et certifié en nutrition sportive,
              j'ai développé une expertise unique dans la création de repas adaptés aux besoins
              des athlètes de tous niveaux.
            </p>
            <p className="text-gray-600 mb-4">
              Mon parcours a débuté dans les cuisines de restaurants étoilés où j'ai perfectionné
              mes techniques culinaires. Passionné de sport et pratiquant régulier de CrossFit,
              j'ai naturellement orienté ma carrière vers la nutrition sportive.
            </p>
            <p className="text-gray-600 mb-4">
              Aujourd'hui, je combine mes connaissances en nutrition sportive et mon expertise
              culinaire pour créer des repas qui non seulement nourrissent le corps mais
              ravissent aussi les papilles.
            </p>
          </motion.div>
        </div>

        {/* Philosophy Section */}
        <motion.div 
          className="bg-green-50 rounded-xl p-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-center mb-8">Ma Philosophie</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <motion.div 
                className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Heart className="h-8 w-8 text-green-600" />
              </motion.div>
              <h3 className="font-semibold mb-2">Passion</h3>
              <p className="text-gray-600">Chaque plat est préparé avec amour et attention aux détails</p>
            </div>
            <div className="text-center">
              <motion.div 
                className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Trophy className="h-8 w-8 text-green-600" />
              </motion.div>
              <h3 className="font-semibold mb-2">Excellence</h3>
              <p className="text-gray-600">Je vise l'excellence dans chaque préparation</p>
            </div>
            <div className="text-center">
              <motion.div 
                className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Users className="h-8 w-8 text-green-600" />
              </motion.div>
              <h3 className="font-semibold mb-2">Personnalisation</h3>
              <p className="text-gray-600">Chaque sportif est unique, ses repas le sont aussi</p>
            </div>
          </div>
        </motion.div>

        {/* Qualifications */}
        <motion.div 
          className="bg-gray-50 rounded-xl p-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Qualifications</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <motion.div 
              className="text-center"
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold mb-2">Formation Culinaire</h3>
              <p className="text-gray-600">Diplômé de l'École de Cuisine de Marseille</p>
            </motion.div>
            <motion.div 
              className="text-center"
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold mb-2">Certification Nutrition</h3>
              <p className="text-gray-600">Expert en Nutrition Sportive</p>
            </motion.div>
            <motion.div 
              className="text-center"
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold mb-2">Expérience</h3>
              <p className="text-gray-600">15+ ans d'expertise</p>
            </motion.div>
            <motion.div 
              className="text-center"
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ChefHat className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold mb-2">Spécialisation</h3>
              <p className="text-gray-600">Expert en Cuisine Sportive</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Services Section */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Mes Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-lg"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-xl font-bold mb-4">Coaching Nutritionnel</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  Plans alimentaires personnalisés
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  Suivi des objectifs
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  Conseils nutritionnels
                </li>
              </ul>
            </motion.div>
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-lg"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-xl font-bold mb-4">Préparation de Repas</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  Repas sur mesure
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  Livraison à domicile
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  Menus hebdomadaires
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;