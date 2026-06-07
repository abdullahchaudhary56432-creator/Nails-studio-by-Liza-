import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar as CalendarIcon, Clock, ChevronLeft, ChevronRight, User, Check, Loader2 } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const technicians = [
  { id: '1', name: 'Liza', role: 'Master Technician', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150' },
  { id: '2', name: 'Ayesha', role: 'Senior Artist', image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&q=80&w=150' },
  { id: '3', name: 'Madam Ayesha', role: 'Nail Technician', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150' }
];

export const BookingModal = ({ isOpen, onClose }: BookingModalProps) => {
  const [step, setStep] = useState(1);
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [remindMe, setRemindMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [availableSlots, setAvailableSlots] = useState<string[]>([]);
  
  // Reset state when opened
  useEffect(() => {
    if (isOpen) {
      setStep(1);
      setSelectedTech(null);
      setSelectedDate(null);
      setSelectedTime(null);
      setRemindMe(false);
    }
  }, [isOpen]);

  // Mock fetching available slots when a date and tech is selected
  useEffect(() => {
    if (selectedDate && selectedTech) {
      setIsLoading(true);
      setSelectedTime(null);
      
      // Simulate network request
      const timer = setTimeout(() => {
        // Generate random slots based on tech id and date to simulate real availability
        const allSlots = ["10:00 AM", "11:30 AM", "1:00 PM", "2:30 PM", "4:00 PM", "5:30 PM", "7:00 PM"];
        const randomAvailability = allSlots.filter(() => Math.random() > 0.3);
        setAvailableSlots(randomAvailability.length > 0 ? randomAvailability : ["10:00 AM", "1:00 PM"]);
        setIsLoading(false);
      }, 800);
      
      return () => clearTimeout(timer);
    }
  }, [selectedDate, selectedTech]);

  // Mock Calendar data
  const currentDay = 3;
  const daysInMonth = 30;
  const startOffset = 0;
  const weekdays = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
  
  const calendarCells = Array.from({ length: 35 }, (_, i) => {
    const day = i - startOffset + 1;
    return (day > 0 && day <= daysInMonth) ? day : null;
  });

  const handleNext = () => {
    if (step === 1 && selectedTech) setStep(2);
    else if (step === 2 && selectedDate && selectedTime) {
      const techName = technicians.find(t => t.id === selectedTech)?.name;
      
      const proceedToBooking = () => {
        const messageText = `Hello! I'd like to book an appointment with ${techName} on June ${selectedDate} at ${selectedTime}.`;
        window.open(`https://wa.me/923205205319?text=${encodeURIComponent(messageText)}`, '_blank');
        onClose();
      };

      if (remindMe && 'Notification' in window) {
        // Request permission for notifications
        Notification.requestPermission().then(permission => {
          if (permission === 'granted') {
            // Simulate a notification that would appear 24 hours before the appointment
            // For demo purposes, we trigger it after 3 seconds instead
            setTimeout(() => {
              new Notification('Upcoming Nail Appointment!', {
                body: `Reminder: Your appointment with ${techName} is tomorrow at ${selectedTime}.`,
                icon: '/favicon.ico' // Or any suitable icon
              });
            }, 3000);
          }
          proceedToBooking();
        });
      } else {
        proceedToBooking();
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <React.Fragment>
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-brand-pink-900/60 backdrop-blur-sm z-[100]"
          />
          
          {/* Modal */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg bg-white rounded-3xl shadow-2xl z-[101] overflow-hidden flex flex-col max-h-[90vh]"
          >
            {/* Header */}
            <div className="bg-brand-pink-50 p-6 flex items-center justify-between border-b border-brand-pink-100 shrink-0">
              <div>
                <h3 className="font-serif text-2xl text-brand-pink-900">Book Appointment</h3>
                <p className="text-brand-pink-600 outline-none text-xs tracking-widest uppercase mt-1">
                  {step === 1 ? 'Step 1: Choose Technician' : 'Step 2: Choose Date & Time'}
                </p>
              </div>
              <button 
                onClick={onClose}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-brand-pink-400 hover:text-brand-pink-900 hover:bg-brand-pink-100 transition-colors shadow-sm"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto">
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div 
                    key="step1"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4"
                  >
                    {technicians.map(tech => (
                      <button
                        key={tech.id}
                        onClick={() => setSelectedTech(tech.id)}
                        className={`w-full flex items-center p-4 rounded-2xl border-2 transition-all text-left ${selectedTech === tech.id ? 'border-brand-pink-600 bg-brand-pink-50' : 'border-gray-100 hover:border-brand-pink-200 hover:bg-gray-50'}`}
                      >
                        <img src={tech.image} alt={tech.name} loading="lazy" decoding="async" className="w-14 h-14 rounded-full object-cover mr-4" />
                        <div className="flex-1">
                          <h4 className="font-serif text-lg text-brand-pink-900">{tech.name}</h4>
                          <p className="text-gray-500 text-sm">{tech.role}</p>
                        </div>
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center ${selectedTech === tech.id ? 'bg-brand-pink-600 text-white' : 'bg-gray-200 text-transparent'}`}>
                          <Check className="w-4 h-4" />
                        </div>
                      </button>
                    ))}
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div 
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                  >
                    {/* Calendar Modeled */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-brand-pink-900 font-serif text-xl">June 2026</span>
                      <div className="flex gap-1">
                        <button className="p-1.5 rounded-full border border-gray-200 text-gray-400 hover:text-brand-pink-600 transition-colors">
                          <ChevronLeft className="w-4 h-4" />
                        </button>
                        <button className="p-1.5 rounded-full border border-gray-200 text-gray-400 hover:text-brand-pink-600 transition-colors">
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    <div className="mb-6">
                      <div className="grid grid-cols-7 gap-1 mb-2">
                        {weekdays.map(day => (
                          <div key={day} className="text-center text-[10px] font-semibold text-gray-400 uppercase tracking-wider py-1">
                            {day}
                          </div>
                        ))}
                      </div>
                      <div className="grid grid-cols-7 gap-1">
                        {calendarCells.map((day, i) => {
                          if (!day) return <div key={i} className="aspect-square" />;
                          
                          const isPast = day < currentDay;
                          const isSelected = selectedDate === day;
                          
                          return (
                            <button
                              key={i}
                              disabled={isPast}
                              onClick={() => setSelectedDate(day)}
                              className={`aspect-square rounded-full flex items-center justify-center text-sm font-medium transition-all ${isPast ? 'text-gray-300 cursor-not-allowed' : 'hover:bg-brand-pink-100 hover:text-brand-pink-900'} ${isSelected ? 'bg-brand-pink-600 text-white shadow-md' : 'text-gray-700'}`}
                            >
                              {day}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Time Slots */}
                    <AnimatePresence mode="popLayout">
                      {selectedDate && (
                        <motion.div 
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="pt-4 border-t border-gray-100"
                        >
                          <h4 className="text-gray-500 text-xs font-medium tracking-widest uppercase mb-4 flex items-center gap-2">
                            Available Slots {isLoading && <Loader2 className="w-3 h-3 animate-spin"/>}
                          </h4>
                          
                          <div className="grid grid-cols-3 gap-2 mb-6">
                            {!isLoading && availableSlots.map((time) => {
                              const isSelectedTime = selectedTime === time;
                              return (
                                <button
                                  key={time}
                                  onClick={() => setSelectedTime(time)}
                                  className={`py-2 px-1 rounded-xl text-xs font-medium transition-all text-center border ${isSelectedTime ? 'bg-brand-pink-900 text-brand-offwhite' : 'bg-transparent text-gray-600 border-gray-200 hover:border-brand-pink-400'}`}
                                >
                                  {time}
                                </button>
                              );
                            })}
                          </div>
                          
                          {/* Notification Toggle */}
                          {!isLoading && selectedTime && (
                            <motion.label 
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="flex items-center gap-3 p-3 rounded-lg bg-brand-pink-50/50 border border-brand-pink-100 cursor-pointer hover:bg-brand-pink-50 transition-colors"
                            >
                              <div className="relative flex items-center justify-center">
                                <input 
                                  type="checkbox" 
                                  className="peer sr-only"
                                  checked={remindMe}
                                  onChange={(e) => setRemindMe(e.target.checked)}
                                />
                                <div className="w-5 h-5 border-2 border-brand-pink-300 rounded peer-checked:bg-brand-pink-600 peer-checked:border-brand-pink-600 transition-colors flex items-center justify-center">
                                  <Check className={`w-3 h-3 text-white transition-opacity ${remindMe ? 'opacity-100' : 'opacity-0'}`} />
                                </div>
                              </div>
                              <span className="text-sm text-brand-pink-900/80 font-medium">Alert me 24 hours before my appointment</span>
                            </motion.label>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Footer */}
            <div className="p-6 bg-gray-50 border-t border-gray-100 shrink-0 flex gap-3">
              {step === 2 && (
                <button 
                  onClick={() => setStep(1)}
                  className="px-6 py-3 rounded-xl border border-gray-200 text-gray-600 font-medium hover:bg-gray-100 transition-colors"
                >
                  Back
                </button>
              )}
              <button 
                disabled={step === 1 ? !selectedTech : !(selectedDate && selectedTime)}
                onClick={handleNext}
                className={`flex-1 py-3 rounded-xl uppercase tracking-[0.2em] text-xs font-semibold transition-all flex items-center justify-center ${(step === 1 ? selectedTech : (selectedDate && selectedTime)) ? 'bg-brand-pink-900 text-brand-offwhite hover:bg-brand-pink-800 shadow-md' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
              >
                {step === 1 ? 'Continue' : 'Confirm via WhatsApp'}
              </button>
            </div>
          </motion.div>
        </React.Fragment>
      )}
    </AnimatePresence>
  );
};
