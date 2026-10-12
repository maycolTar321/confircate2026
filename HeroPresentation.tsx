import React, { useRef, useState } from 'react';
import { PillarId, PillarInfo } from '../../types';
import { PILLARS, PRIMARY_PILLAR_KEYS } from '../../config/pillars';
import { PillarImage } from '../common/PillarImage';
import { PillarDetailModal } from './PillarDetailModal';
import {
  ArrowRight, HeartHandshake, Sprout, Sparkles, BookOpen,
  ChevronDown, Church, MapPin, CheckCircle2
} from 'lucide-react';

interface HeroPresentationProps {
  onStartSurvey: (selectedPillar?: PillarId) => void;
  surveyCount: number;
}

const pillarIcon = (id: string) => {
  if (id === 'casa_comun' || id === 'ecologia') return Sprout;
  if (id === 'corazones_en_accion') return HeartHandshake;
  return Sparkles;
};

export const HeroPresentation: React.FC<HeroPresentationProps> = ({ onStartSurvey }) => {
  const pillarsSectionRef = useRef<HTMLDivElement>(null);
  const [selectedPillarForModal, setSelectedPillarForModal] = useState<PillarInfo | null>(null);

  const handleChooseMission = (pillar: PillarInfo) => {
    setSelectedPillarForModal(null);
    onStartSurvey(pillar.id);
  };

  return (
    <div className="mission-home">
      <section className="mission-hero" aria-labelledby="mission-title">
        <div className="mission-hero-copy">
          <span className="mission-eyebrow"><span className="mission-eyebrow-dot" /> PASTORAL JUVENIL · TARIJA</span>
          <p className="mission-kicker"><Church size={15} aria-hidden="true" /> Parroquia San Martín de Porres</p>
          <h1 id="mission-title">Jóvenes en <span>misión.</span></h1>
          <p className="mission-lead">Tu fe sigue creciendo cuando se convierte en servicio.</p>
          <p className="mission-description">Descubre tus talentos, elige una forma de ayudar y construyamos juntos una comunidad más fraterna, solidaria y cuidadosa de nuestra Casa Común.</p>
          <div className="mission-actions">
            <button type="button" onClick={() => onStartSurvey()} className="mission-button mission-button-primary">
              Comenzar encuesta <ArrowRight size={18} aria-hidden="true" />
            </button>
            <button type="button" onClick={() => pillarsSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })} className="mission-button mission-button-secondary">
              Conocer las misiones <ChevronDown size={17} aria-hidden="true" />
            </button>
          </div>
          <div className="mission-scripture"><BookOpen size={16} aria-hidden="true" /><span>«Aquí estoy, Señor, envíame a mí» <b>· Isaías 6,8</b></span></div>
        </div>

        <div className="mission-hero-art" aria-label="Tres formas de poner la fe al servicio de la comunidad">
          <div className="mission-art-orbit mission-art-orbit-one" />
          <div className="mission-art-orbit mission-art-orbit-two" />
          <div className="mission-art-center"><span className="mission-cross">✝</span><span>La fe se vive<br /><strong>sirviendo</strong></span></div>
          <div className="mission-float-card mission-float-top"><span className="mission-float-icon"><Sprout size={20} /></span><span><b>Cuidar</b><small>Nuestra Casa Común</small></span></div>
          <div className="mission-float-card mission-float-right"><span className="mission-float-icon"><HeartHandshake size={20} /></span><span><b>Acompañar</b><small>Con corazón fraterno</small></span></div>
          <div className="mission-float-card mission-float-bottom"><span className="mission-float-icon"><Sparkles size={20} /></span><span><b>Transformar</b><small>Con esperanza</small></span></div>
          <div className="mission-art-note"><CheckCircle2 size={15} /> Pequeñas acciones, gran esperanza</div>
        </div>
      </section>

      <section ref={pillarsSectionRef} id="pilares-mision" className="mission-pillars" aria-labelledby="pillars-title">
        <div className="mission-section-heading">
          <span className="mission-section-label">Tres caminos · Una misma fe</span>
          <h2 id="pillars-title">¿Dónde te gustaría <span>servir?</span></h2>
          <p>Cada talento cuenta. Conoce las propuestas y elige la misión que más conecta contigo.</p>
        </div>

        <div className="mission-pillar-grid">
          {PRIMARY_PILLAR_KEYS.map((key) => {
            const pillar = PILLARS[key];
            if (!pillar) return null;
            const Icon = pillarIcon(pillar.id);
            return (
              <article key={pillar.id} className="mission-pillar-card">
                <div className="mission-pillar-image-wrap">
                  <PillarImage src={pillar.imageUrl} alt={pillar.imageAlt} pillarNumber={pillar.number} pillarTitle={pillar.title} color={pillar.color} className="mission-pillar-image" />
                </div>
                <div className="mission-pillar-body">
                  <span className="mission-pillar-icon"><Icon size={19} aria-hidden="true" /></span>
                  <h3>{pillar.title}</h3>
                  <p className="mission-pillar-subtitle">{pillar.subtitle}</p>
                  <p className="mission-pillar-description">{pillar.description}</p>
                  <div className="mission-pillar-verse"><BookOpen size={15} /><span>{pillar.bibleQuote}</span></div>
                  <button type="button" className="mission-pillar-link" onClick={() => setSelectedPillarForModal(pillar)}>
                    Explorar esta misión <ArrowRight size={17} />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mission-bottom-cta">
        <div className="mission-bottom-mark"><HeartHandshake size={24} /></div>
        <div><p className="mission-bottom-eyebrow">TU PARTICIPACIÓN IMPORTA</p><h2>Hay muchas formas de hacer el bien.</h2><p>Responde la encuesta para ayudarnos a preparar una misión que tenga sentido para nuestra comunidad.</p></div>
        <button type="button" className="mission-button mission-button-light" onClick={() => onStartSurvey()}>Quiero participar <ArrowRight size={17} /></button>
      </section>

      {selectedPillarForModal && (
        <PillarDetailModal pillar={selectedPillarForModal} isOpen={true} onClose={() => setSelectedPillarForModal(null)} onSelectPillar={handleChooseMission} />
      )}
    </div>
  );
};
