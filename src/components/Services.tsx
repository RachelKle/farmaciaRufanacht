import { motion } from 'framer-motion';
import { Pill, Heart, Droplets, Syringe, MessageSquareHeart, ShieldCheck } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const services = [
  {
    icon: Pill,
    title: 'Medicamentos',
    description: 'Amplio stock de medicamentos con receta y de venta libre. Disponibilidad garantizada.',
    color: 'bg-pharmacy-50 text-pharmacy-600',
  },
  {
    icon: Heart,
    title: 'Control de Presión',
    description: 'Medición de presión arterial sin costo. Atención profesional y seguimiento.',
    color: 'bg-rose-50 text-rose-600',
  },
  {
    icon: Droplets,
    title: 'Toma de Glucemia',
    description: 'Control de glucosa en sangre de forma rápida y confiable.',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: Syringe,
    title: 'Vacunación',
    description: 'Aplicación de vacunas con certificación. Consultá disponibilidad.',
    color: 'bg-amber-50 text-amber-600',
  },
  {
    icon: MessageSquareHeart,
    title: 'Asesoramiento Farmacéutico',
    description: 'Consultá con nuestros farmacéuticos sobre tratamientos y medicamentos.',
    color: 'bg-violet-50 text-violet-600',
  },
  {
    icon: ShieldCheck,
    title: 'Control de Salud',
    description: 'Seguimiento de tratamientos y control de signos vitales periódico.',
    color: 'bg-teal-50 text-teal-600',
  },
];

export default function Services() {
  const { ref, isVisible } = useScrollAnimation(0.15);

  return (
    <section id="servicios" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-sm font-semibold text-pharmacy-600 uppercase tracking-wider mb-3"
          >
            Nuestros Servicios
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
          >
            Todo lo que necesitás para tu salud
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Ofrecemos servicios integrales de atención farmacéutica con profesionales capacitados.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="group p-6 lg:p-8 rounded-2xl bg-gray-50 hover:bg-white border border-transparent hover:border-gray-100 hover:shadow-lg transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-xl ${service.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
