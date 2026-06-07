import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ArrowRight, RotateCcw, Check } from 'lucide-react';
import { useAudio } from '../contexts/AudioContext';

const QUESTIONS = [
  {
    id: 'skinTone',
    question: 'What best describes your skin tone?',
    options: [
      { label: 'Fair / Light', value: 'fair', bg: 'bg-[#fcdcd1]' },
      { label: 'Medium / Tan', value: 'medium', bg: 'bg-[#d8a081]' },
      { label: 'Olive', value: 'olive', bg: 'bg-[#a37e58]' },
      { label: 'Deep / Dark', value: 'deep', bg: 'bg-[#5c3a21]' }
    ]
  },
  {
    id: 'occasion',
    question: "What's the occasion for your next set?",
    options: [
      { label: 'Everyday Wear', value: 'everyday' },
      { label: 'Wedding / Bridal', value: 'wedding' },
      { label: 'Party / Night Out', value: 'party' },
      { label: 'Vacation', value: 'vacation' }
    ]
  },
  {
    id: 'vibe',
    question: 'What is your preferred nail vibe?',
    options: [
      { label: 'Minimalist & Clean', value: 'minimal' },
      { label: 'Glam & Sparkly', value: 'glam' },
      { label: 'Bold & Artistic', value: 'bold' },
      { label: 'Classic & Elegant', value: 'classic' }
    ]
  }
];

const getRecommendation = (answers: Record<string, string>) => {
  const { vibe, occasion, skinTone } = answers;
  
  let result = {
    title: 'Your Perfect Match',
    description: 'Based on your preferences, we have curated the ideal custom set for you.',
    style: 'Classic French',
    color: 'Nude Pink',
    shape: 'Almond'
  };

  if (vibe === 'minimal') {
    result.style = 'Glazed Donut / Pearl Chrome';
    result.shape = 'Short Squoval';
  } else if (vibe === 'glam') {
    result.style = 'Cat Eye with Rhinestones';
    result.shape = 'Long Coffin';
  } else if (vibe === 'bold') {
    result.style = '3D Chrome & Gems Art';
    result.shape = 'Medium Stiletto';
  } else {
    result.style = 'Soft French Fade (Ombre)';
    result.shape = 'Medium Almond';
  }

  if (skinTone === 'fair') {
    result.color = 'Soft Blush / Sheer Pink';
  } else if (skinTone === 'medium') {
    result.color = 'Warm Peachy Nude';
  } else if (skinTone === 'olive') {
    result.color = 'Earthy Terracotta / Creamy White';
  } else {
    result.color = 'Deep Mauve / Rich Chocolate';
  }

  if (occasion === 'wedding') {
    result.title = 'Bridal Elegance';
    result.style = 'Pearl Embellished French';
    result.color = 'Milky White / Soft Pink';
  } else if (occasion === 'vacation') {
    result.title = 'Tropical Getaway';
    result.color = 'Vibrant Coral / Sunset Ombre';
  } else if (occasion === 'party') {
    result.title = 'Night Out Glamour';
  }

  return result;
};

export const StyleQuiz = ({ onBookClick }: { onBookClick: () => void }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isFinished, setIsFinished] = useState(false);
  const { playClick, playPop } = useAudio();

  const handleOptionClick = (questionId: string, value: string) => {
    playClick();
    setAnswers(prev => ({ ...prev, [questionId]: value }));
    
    setTimeout(() => {
      if (currentStep < QUESTIONS.length - 1) {
        setCurrentStep(prev => prev + 1);
      } else {
        playPop();
        setIsFinished(true);
      }
    }, 400); // slight delay for animation/feedback
  };

  const resetQuiz = () => {
    playClick();
    setCurrentStep(0);
    setAnswers({});
    setIsFinished(false);
  };

  const recommendation = isFinished ? getRecommendation(answers) : null;

  return (
    <section className="py-24 bg-brand-pink-100 relative" id="style-quiz">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-serif text-brand-pink-900 mb-4 flex items-center justify-center gap-3">
            <Sparkles className="w-8 h-8 text-brand-pink-500" />
            Find Your Style
            <Sparkles className="w-8 h-8 text-brand-pink-500" />
          </h2>
          <p className="text-brand-pink-900/70 text-lg">Take our quick quiz to discover your perfect nail match.</p>
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-brand-pink-200 min-h-[400px] relative overflow-hidden">
          
          <AnimatePresence mode="wait">
            {!isFinished ? (
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col h-full justify-center"
              >
                <div className="mb-8">
                  <span className="text-brand-pink-400 font-medium tracking-widest text-sm uppercase mb-2 block">
                    Question {currentStep + 1} of {QUESTIONS.length}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-serif text-brand-pink-900">
                    {QUESTIONS[currentStep].question}
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {QUESTIONS[currentStep].options.map((option) => {
                    const isSelected = answers[QUESTIONS[currentStep].id] === option.value;
                    return (
                      <button
                        key={option.value}
                        onClick={() => handleOptionClick(QUESTIONS[currentStep].id, option.value)}
                        className={`p-4 rounded-xl border text-left transition-all duration-300 flex items-center justify-between group ${
                          isSelected 
                            ? 'border-brand-pink-500 ring-1 ring-brand-pink-500 bg-brand-pink-50' 
                            : 'border-brand-pink-200 hover:border-brand-pink-400 hover:bg-brand-pink-50/50'
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          {option.bg && (
                            <div className={`w-8 h-8 rounded-full shadow-sm ${option.bg} border border-black/10`} />
                          )}
                          <span className={`font-medium ${isSelected ? 'text-brand-pink-900' : 'text-brand-pink-800'}`}>
                            {option.label}
                          </span>
                        </div>
                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${
                          isSelected ? 'bg-brand-pink-500 border-brand-pink-500 text-white' : 'border-brand-pink-300'
                        }`}>
                          {isSelected && <Check className="w-3 h-3" />}
                        </div>
                      </button>
                    )
                  })}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center flex flex-col h-full justify-center items-center"
              >
                <div className="w-16 h-16 bg-brand-pink-100 rounded-full flex items-center justify-center mb-6 border border-brand-pink-200">
                  <Sparkles className="w-8 h-8 text-brand-pink-600" />
                </div>
                
                <h3 className="text-3xl font-serif text-brand-pink-900 mb-2">{recommendation?.title}</h3>
                <p className="text-brand-pink-900/70 mb-8 max-w-md mx-auto">{recommendation?.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mb-8">
                  <div className="bg-brand-pink-50 p-6 rounded-2xl border border-brand-pink-100">
                    <span className="text-xs font-semibold text-brand-pink-400 uppercase tracking-widest block mb-2">Ideal Shape</span>
                    <p className="font-serif text-lg text-brand-pink-900">{recommendation?.shape}</p>
                  </div>
                  <div className="bg-brand-pink-50 p-6 rounded-2xl border border-brand-pink-100">
                    <span className="text-xs font-semibold text-brand-pink-400 uppercase tracking-widest block mb-2">Perfect Color</span>
                    <p className="font-serif text-lg text-brand-pink-900">{recommendation?.color}</p>
                  </div>
                  <div className="bg-brand-pink-50 p-6 rounded-2xl border border-brand-pink-100">
                    <span className="text-xs font-semibold text-brand-pink-400 uppercase tracking-widest block mb-2">Style Details</span>
                    <p className="font-serif text-lg text-brand-pink-900">{recommendation?.style}</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-md mx-auto">
                  <button 
                    onClick={() => { playClick(); onBookClick(); }}
                    className="flex-1 bg-brand-pink-900 text-brand-pink-50 py-3 px-6 rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-brand-pink-800 transition-colors"
                  >
                    Book This Look <ArrowRight className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={resetQuiz}
                    className="flex-1 bg-white border border-brand-pink-200 text-brand-pink-900 py-3 px-6 rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-brand-pink-50 transition-colors"
                  >
                    <RotateCcw className="w-4 h-4" /> Retake Quiz
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Progress Bar */}
          {!isFinished && (
            <div className="absolute bottom-0 left-0 w-full h-1 bg-brand-pink-50">
              <motion.div 
                className="h-full bg-brand-pink-400"
                initial={{ width: 0 }}
                animate={{ width: `${((currentStep) / QUESTIONS.length) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
