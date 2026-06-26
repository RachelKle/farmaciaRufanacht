import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Tag, Percent, Clock, ArrowRight } from 'lucide-react';
import { supabase, type Promotion } from '../lib/supabase';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Promotions() {
  const { ref, isVisible } = useScrollAnimation(0.15);
  const [promotions, setPromotions] = useState<Promotion[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPromotions() {
      const { data } = await supabase
        .from('promotions')
        .select('*')
        .eq('active', true)
        .order('created_at', { ascending: false });
      if (data) setPromotions(data);
      setLoading(false);
    }
    fetchPromotions();
  }, []);

  return (
    <section id="promociones" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-sm font-semibold text-pharmacy-600 uppercase tracking-wider mb-3"
          >
            Promociones
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
          >
            Descuentos exclusivos
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Aprovechá nuestras ofertas especiales pensadas para tu bienestar.
          </motion.p>
        </div>

        {loading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="rounded-2xl bg-gray-100 h-72 animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {promotions.map((promo, index) => (
              <motion.div
                key={promo.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                className="group relative rounded-2xl overflow-hidden bg-pharmacy-600 text-white"
              >
                <div className="absolute inset-0">
                  <img
                    src={promo.image_url || 'https://images.pexels.com/photos/3683098/pexels-photo-3683098.jpeg?auto=compress&cs=tinysrgb&w=600'}
                    alt={promo.title}
                    className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity"
                    loading="lazy"
                  />
                </div>
                <div className="relative p-8 lg:p-10 flex flex-col h-full min-h-[300px]">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-sm">
                      <Tag className="w-4 h-4" />
                      <span className="text-sm font-semibold">Promo</span>
                    </div>
                    {promo.discount_percentage > 0 && (
                      <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-sm">
                        <Percent className="w-4 h-4" />
                        <span className="text-sm font-semibold">{promo.discount_percentage}% OFF</span>
                      </div>
                    )}
                  </div>

                  <h3 className="text-2xl font-bold mb-3">{promo.title}</h3>
                  <p className="text-pharmacy-100 leading-relaxed mb-6 flex-1">{promo.description}</p>

                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-2 text-pharmacy-200 text-sm">
                      <Clock className="w-4 h-4" />
                      <span>Oferta por tiempo limitado</span>
                    </div>
                    <button className="inline-flex items-center gap-2 text-sm font-semibold hover:underline">
                      Ver más <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
