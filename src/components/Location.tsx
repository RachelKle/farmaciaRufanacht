import { motion } from 'framer-motion';
import { MapPin, Navigation, Clock, Phone } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Location() {
  const { ref, isVisible } = useScrollAnimation(0.15);

  return (
    <section id="ubicacion" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-sm font-semibold text-pharmacy-600 uppercase tracking-wider mb-3"
          >
            Ubicación
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
          >
            Encontranos en Romang
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Estamos en el corazón de Romang, Santa Fe. Fácil acceso y estacionamiento disponible.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-2xl overflow-hidden border border-gray-200 shadow-lg"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27063.408812375526!2d-60.17467457510986!3d-32.19853176198984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b12b8c9b5b5b5b%3A0x5b5b5b5b5b5b5b5b!2sRomang%2C%20Santa%20Fe%2C%20Argentina!5e0!3m2!1ses!2sar!4v1719288000000!5m2!1ses!2sar"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Farmacia Rufanacht"
              className="w-full h-[400px]"
            />
          </motion.div>

          {/* Info cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col gap-4"
          >
            <div className="bg-pharmacy-50 rounded-2xl p-6 lg:p-8 border border-pharmacy-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-pharmacy-100 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-pharmacy-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Dirección</h3>
                  <p className="text-gray-600">San Martín 1245, Romang, Santa Fe</p>
                </div>
              </div>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=San+Martín+1245,+Romang,+Santa+Fe,+Argentina"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-pharmacy-600 text-white font-medium text-sm hover:bg-pharmacy-700 transition-colors"
              >
                <Navigation className="w-4 h-4" />
                Cómo llegar
              </a>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 lg:p-8 border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-soft-100 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-soft-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Horarios</h3>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Lunes a Viernes</span>
                  <span className="font-medium text-gray-900">08:00 - 20:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sábados</span>
                  <span className="font-medium text-gray-900">08:00 - 13:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Domingos</span>
                  <span className="font-medium text-gray-900">Cerrado (turno por guardia)</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 lg:p-8 border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Teléfono</h3>
                  <p className="text-gray-600">+54 9 342 555-0123</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
