import React from 'react';
import { Church, MapPin, Heart, Sparkles } from 'lucide-react';
import { APP_INFO } from '../../config/constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-[#303632] border-t border-[#E1E7E2] mt-8 sm:mt-16 pt-8 sm:pt-12 pb-6 sm:pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-10 border-b border-[#E1E7E2]">
          
          {/* Col 1 */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-[#F1F3F1] p-1 flex items-center justify-center border border-[#DDE7DF] shadow-sm">
                <img
                  src="/logo.png"
                  alt="Logo Catequistas San Martín de Porres"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-serif font-bold text-lg text-[#303632]">
                {APP_INFO.name}
              </span>
            </div>
            <p className="text-sm text-[#737B76] mb-3 leading-relaxed">
              Sistema pastoral para investigar, planificar, ejecutar y evaluar la obra social post-retiro de Confirmación.
            </p>
            <p className="text-xs text-[#214C3B] font-serif italic flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              "{APP_INFO.motto}"
            </p>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="font-serif font-bold text-[#303632] mb-3 text-sm uppercase tracking-wider">
              Ubicación y Comunidad
            </h4>
            <ul className="text-sm space-y-2 text-[#737B76]">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#214C3B] shrink-0 mt-0.5" />
                <span>{APP_INFO.parish}</span>
              </li>
              <li className="ml-6 text-xs text-[#737B76]">
                Diócesis de Tarija — Tarija, Bolivia
              </li>
              <li className="ml-6 text-xs text-[#737B76]">
                Pastoral de Confirmación y Acción Social 2026
              </li>
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="font-serif font-bold text-[#303632] mb-3 text-sm uppercase tracking-wider">
              Pilares de la Misión
            </h4>
            <div className="space-y-1.5 text-xs text-[#737B76]">
              <p>• 1. Niñez y Familias Vulnerables</p>
              <p>• 2. Adultos Mayores y Personas Solas</p>
              <p>• 3. Ecología Integral y Casa Común</p>
            </div>
          </div>

        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#737B76] gap-3">
          <p>© 2026 {APP_INFO.parish}. Todos los derechos reservados.</p>
          <p className="flex items-center gap-1 text-[#737B76]">
            Hecho con <Heart className="w-3.5 h-3.5 text-[#214C3B] fill-[#214C3B]" /> para la comunidad juvenil de Tarija
          </p>
        </div>
      </div>
    </footer>
  );
};
