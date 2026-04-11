import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/918411017676?text=Hello%20Rima%20Ma'am%2C%20I%20would%20like%20to%20book%20a%20Vastu%20consultation.";

const WhatsAppButton = () => {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110 whatsapp-pulse"
      style={{ backgroundColor: "#25D366" }}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white" />
    </a>
  );
};

export default WhatsAppButton;
