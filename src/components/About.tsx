import { motion } from 'framer-motion';
import { Heart, Target, Award, Users } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function About() {
  const { ref, isVisible } = useScrollAnimation(0.15);

  return (
    <section id="nosotros" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/806427/pexels-photo-806427.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Equipo de Farmacia Rufanacht"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
            {/* Stats overlay */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-5 grid grid-cols-2 gap-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-pharmacy-600">30+</p>
                <p className="text-sm text-gray-500">Años de experiencia</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-pharmacy-600">+5k</p>
                <p className="text-sm text-gray-500">Clientes felices</p>
              </div>
            </div>
          </motion.div>

          {/* Content side */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block text-sm font-semibold text-pharmacy-600 uppercase tracking-wider mb-3"
            >
              Sobre Nosotros
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6"
            >
              Más de 30 años cuidando la salud de Romang
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-gray-600 leading-relaxed mb-8"
            >
              Farmacia Rufanacht nació con una misión clara: ser un pilar de salud y confianza para la comunidad de Romang. Desde entonces, hemos crecido junto a cada familia, acompañando sus momentos de salud con profesionalismo y calidez.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="grid sm:grid-cols-2 gap-4"
            >
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-gray-100">
                <div className="w-10 h-10 rounded-lg bg-pharmacy-50 flex items-center justify-center flex-shrink-0">
                  <Heart className="w-5 h-5 text-pharmacy-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Compromiso</h4>
                  <p className="text-sm text-gray-500 mt-1">Atención con calidez humana</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-gray-100">
                <div className="w-10 h-10 rounded-lg bg-soft-50 flex items-center justify-center flex-shrink-0">
                  <Target className="w-5 h-5 text-soft-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Misión</h4>
                  <p className="text-sm text-gray-500 mt-1">Salud accesible para todos</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-gray-100">
                <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Calidad</h4>
                  <p className="text-sm text-gray-500 mt-1">Productos certificados</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-gray-100">
                <div className="w-10 h-10 rounded-lg bg-rose-50 flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-rose-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Comunidad</h4>
                  <p className="text-sm text-gray-500 mt-1">Parte de Romang desde siempre</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
