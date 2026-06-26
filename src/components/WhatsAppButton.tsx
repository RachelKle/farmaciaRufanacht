import { MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER = '5493425550123';

export default function WhatsAppButton() {
  const openWhatsApp = () => {
    const message = encodeURIComponent('Hola, me gustaría hacer una consulta.');
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  return (
    <button
      onClick={openWhatsApp}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-green-500 text-white shadow-lg shadow-green-500/30 flex items-center justify-center hover:scale-110 hover:bg-green-600 transition-all duration-300"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </button>
  );
}
