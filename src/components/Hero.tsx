import { motion } from 'framer-motion';
import { Pill, MessageCircle, ChevronDown } from 'lucide-react';

const WHATSAPP_NUMBER = '5493425550123';

export default function Hero() {
  const scrollToCatalog = () => {
    document.getElementById('catalogo')?.scrollIntoView({ behavior: 'smooth' });
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent('Hola, me gustaría consultar sobre un producto.');
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image full-screen */}
      <div className="absolute inset-0">
        <img
          src="/farmacia.webp"
          alt="Farmacia Rufanacht"
          className="w-full h-full object-cover"
          loading="eager"
        />
        {/* Dark overlay + blur */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-0">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 text-white text-sm font-medium mb-6 backdrop-blur-md border border-white/20">
              <Pill className="w-4 h-4" />
              Farmacia de confianza en Romang
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 drop-shadow-lg"
          >
            Tu salud es{' '}
            <span className="text-pharmacy-400">nuestra prioridad</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="text-lg sm:text-xl text-white/90 leading-relaxed mb-8 max-w-lg drop-shadow"
          >
            Medicamentos, cuidado personal y atención farmacéutica de confianza. Siempre cerca de vos.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button
              onClick={openWhatsApp}
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-pharmacy-600 text-white font-semibold text-base hover:bg-pharmacy-700 transition-colors shadow-lg shadow-pharmacy-900/40"
            >
              <MessageCircle className="w-5 h-5" />
              Consultar por WhatsApp
            </button>
            <button
              onClick={scrollToCatalog}
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl border-2 border-white/40 text-white font-semibold text-base hover:bg-white/10 hover:border-white transition-colors backdrop-blur-sm"
            >
              Ver catálogo
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 flex flex-wrap items-center gap-6 text-sm text-white/80"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-pharmacy-400" />
              Atención personalizada
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-pharmacy-400" />
              Productos de calidad
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-pharmacy-400" />
              Envíos a domicilio
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="cursor-pointer"
          onClick={() => document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <ChevronDown className="w-6 h-6 text-white/70" />
        </motion.div>
      </motion.div>
    </section>
  );
}
