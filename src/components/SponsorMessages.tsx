import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  id: number;
  content: string;
}

const SponsorMessages: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, content: "Fatou de Ndioum a parrainé 10 arbres 🌱" },
    { id: 2, content: "Moussa de Mbidi a parrainé 5 arbres 🌱" },
  ]);
  const [newMessage, setNewMessage] = useState("");
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim() === "") return;

    const message: Message = {
      id: Date.now(), // Use timestamp for unique key
      content: newMessage,
    };
    setMessages([message, ...messages]);
    setNewMessage("");
  };

  useEffect(() => {
    if (messagesContainerRef.current) {
        messagesContainerRef.current.scrollTop = 0;
    }
  }, [messages]);

  return (
    <section className="bg-green-50 py-16">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h2 
            className="text-3xl font-bold text-green-800 mb-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-green-600 via-yellow-500 to-green-600 bg-clip-text text-transparent drop-shadow-lg">
              💬 Messages des Parrains
          </h2>
        </motion.h2>

        {/* Formulaire */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-4 mb-8 justify-center"
        >
          <input
            type="text"
            placeholder="Écrivez votre message de soutien..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            className="px-4 py-3 rounded-lg border border-gray-300 w-full sm:w-2/3 focus:ring-2 focus:ring-green-400 transition"
          />
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition transform hover:scale-105"
          >
            Envoyer
          </button>
        </form>

        {/* Liste des messages avec animations */}
        <div ref={messagesContainerRef} className="space-y-4 max-h-72 overflow-y-auto p-4 bg-white/50 rounded-lg border border-green-200">
          <AnimatePresence initial={false}>
            {messages.map((msg) => (
              <motion.div
                key={msg.id}
                layout
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.5, type: 'spring' }}
                className="bg-white p-4 rounded-lg shadow text-left hover:bg-green-50 transition"
              >
                {msg.content}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default SponsorMessages;
