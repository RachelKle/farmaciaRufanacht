import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock, MapPin, Phone, AlertCircle } from 'lucide-react';
import { supabase, type PharmacyTurn } from '../lib/supabase';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Turns() {
  const { ref, isVisible } = useScrollAnimation(0.15);
  const [turns, setTurns] = useState<PharmacyTurn[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTurns() {
      const { data } = await supabase
        .from('pharmacy_turns')
        .select('*')
        .order('is_on_duty', { ascending: false });
      if (data) setTurns(data);
      setLoading(false);
    }
    fetchTurns();
  }, []);

  const onDuty = turns.find((t) => t.is_on_duty);
  const upcoming = turns.filter((t) => !t.is_on_duty);

  return (
    <section id="turnos" className="py-20 lg:py-28 bg-pharmacy-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-sm font-semibold text-pharmacy-600 uppercase tracking-wider mb-3"
          >
            Farmacias de Turno
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
          >
            ¿Necesitás atención urgente?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Consultá la farmacia de turno actual y las próximas en Romang.
          </motion.p>
        </div>

        {loading ? (
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-gray-100 h-64 animate-pulse" />
            <div className="rounded-2xl bg-gray-100 h-64 animate-pulse" />
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {/* On Duty */}
            {onDuty && (
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white rounded-2xl border-2 border-pharmacy-500 p-6 lg:p-8 shadow-lg shadow-pharmacy-100"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-pharmacy-100 flex items-center justify-center">
                    <AlertCircle className="w-6 h-6 text-pharmacy-600" />
                  </div>
                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded-md bg-pharmacy-600 text-white text-xs font-bold uppercase tracking-wider">
                      De turno ahora
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 mt-1">{onDuty.name}</h3>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 text-gray-600">
                    <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-pharmacy-500" />
                    <span>{onDuty.address}</span>
                  </div>
                  <div className="flex items-start gap-3 text-gray-600">
                    <Phone className="w-5 h-5 mt-0.5 flex-shrink-0 text-pharmacy-500" />
                    <span>{onDuty.phone}</span>
                  </div>
                  <div className="flex items-start gap-3 text-gray-600">
                    <Clock className="w-5 h-5 mt-0.5 flex-shrink-0 text-pharmacy-500" />
                    <span>Abierto las 24hs (turno actual)</span>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Upcoming */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-2xl border border-gray-100 p-6 lg:p-8 shadow-sm"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-5 flex items-center gap-2">
                <Clock className="w-5 h-5 text-gray-400" />
                Próximos turnos
              </h3>
              <div className="space-y-4">
                {upcoming.map((turn) => (
                  <div
                    key={turn.id}
                    className="flex items-start gap-3 p-3 rounded-xl bg-gray-50"
                  >
                    <div className="w-2 h-2 rounded-full bg-gray-300 mt-2 flex-shrink-0" />
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900">{turn.name}</p>
                      <p className="text-sm text-gray-500">{turn.address}</p>
                      <p className="text-sm text-gray-500 mt-0.5">{turn.phone}</p>
                    </div>
                  </div>
                ))}
                {upcoming.length === 0 && (
                  <p className="text-gray-500 text-center py-4">No hay próximos turnos registrados.</p>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}
