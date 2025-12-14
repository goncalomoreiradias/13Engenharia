import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, Sparkles, Loader2, Minimize2, Maximize2 } from 'lucide-react';
import { ChatMessage } from '../types';
import { sendToGemini } from '../services/geminiService';

export const AIConsultant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Olá. Sou o assistente virtual da 13 Engenharia. Como posso ajudar com o seu projeto hoje?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    const responseText = await sendToGemini(input);
    
    setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    setIsLoading(false);
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-40 bg-white text-brand-black p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 group flex items-center gap-3"
      >
        <Sparkles className="w-5 h-5 text-brand-gold" />
        <span className="font-serif italic pr-2">Assistente AI</span>
      </button>
    );
  }

  return (
    <div className="fixed bottom-8 right-8 z-50 w-[90vw] md:w-[400px] h-[600px] bg-brand-dark/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-fade-in">
      {/* Header */}
      <div className="p-6 border-b border-white/10 flex justify-between items-center bg-white/5">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          <div>
            <h3 className="text-white font-serif text-lg">Consultor 13</h3>
            <p className="text-xs text-brand-gold uppercase tracking-wider">Powered by Gemini</p>
          </div>
        </div>
        <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition-colors">
          <Minimize2 size={18} />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div 
              className={`max-w-[85%] p-4 text-sm leading-relaxed ${
                msg.role === 'user' 
                  ? 'bg-white text-brand-black rounded-tl-2xl rounded-tr-sm rounded-bl-2xl rounded-br-2xl' 
                  : 'bg-white/10 text-gray-200 rounded-tl-sm rounded-tr-2xl rounded-bl-2xl rounded-br-2xl border border-white/5'
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white/5 p-4 rounded-2xl flex items-center gap-2">
              <Loader2 className="w-4 h-4 animate-spin text-brand-gold" />
              <span className="text-xs text-gray-400">A analisar pedido...</span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 border-t border-white/10 bg-black/20">
        <div className="flex items-center gap-2 bg-brand-black border border-white/10 rounded-full px-4 py-2 focus-within:border-brand-gold/50 transition-colors">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Descreva o seu projeto..."
            className="bg-transparent flex-1 text-sm text-white placeholder-gray-500 focus:outline-none"
            disabled={isLoading}
          />
          <button 
            onClick={handleSend}
            disabled={isLoading || !input.trim()}
            className="text-gray-400 hover:text-brand-gold disabled:opacity-50 transition-colors"
          >
            <Send size={18} />
          </button>
        </div>
        <p className="text-[10px] text-center text-gray-600 mt-2">
          A IA pode cometer erros. Considere consultar um engenheiro humano.
        </p>
      </div>
    </div>
  );
};