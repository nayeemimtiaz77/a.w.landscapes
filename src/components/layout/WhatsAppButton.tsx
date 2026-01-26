import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/447772683802"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Chat on WhatsApp"
    >
      <div className="relative">
        {/* Pulse ring */}
        <div className="absolute inset-0 bg-[#25D366] rounded-full animate-pulse-ring opacity-30" />
        
        {/* Main button */}
        <div className="relative flex items-center gap-3 bg-[#25D366] text-white px-5 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
          <MessageCircle className="h-6 w-6" />
          <span className="font-medium text-sm hidden sm:block">Chat on WhatsApp</span>
        </div>
      </div>
    </a>
  );
};

export default WhatsAppButton;
