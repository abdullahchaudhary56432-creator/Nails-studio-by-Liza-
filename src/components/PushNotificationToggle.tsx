import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Bell, BellOff, Info } from 'lucide-react';

export const PushNotificationToggle = () => {
  const [permissionState, setPermissionState] = useState<NotificationPermission>('default');
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    if ('Notification' in window) {
      setPermissionState(Notification.permission);
    }
  }, []);

  const handleToggle = async () => {
    if (!('Notification' in window)) {
      alert('This browser does not support desktop notification');
      return;
    }

    if (permissionState === 'granted') {
      // In a real app, you would unsubscribe from the push service here.
      // Since browser APIs don't let you programmatically revoke permission from granted to default gracefully
      // we'll simulate the toggle state if they want to 'turn off' in the UI.
      // E.g., removing the service worker push subscription.
      setPermissionState('denied'); // Simulating denial/unsubscribe for UI purposes
      return;
    }

    if (permissionState !== 'denied') {
      try {
        const permission = await Notification.requestPermission();
        setPermissionState(permission);
        if (permission === 'granted') {
          new Notification('Welcome to Liza Nails!', {
            body: 'You will now receive updates on new collection drops and limited-time offers.',
            icon: '/icon.svg' // Assuming an icon exists, could be omitted
          });
        }
      } catch (error) {
        console.error('Error requesting notification permission:', error);
      }
    } else {
      alert('Notifications are disabled in your browser settings. Please enable them to receive updates.');
    }
  };

  const isSubscribed = permissionState === 'granted';

  return (
    <div className="relative inline-flex items-center">
      <button
        onClick={handleToggle}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="flex items-center justify-center w-10 h-10 rounded-full bg-brand-pink-100 text-brand-pink-600 hover:bg-brand-pink-200 transition-colors"
        aria-label={isSubscribed ? "Disable notifications" : "Enable notifications"}
      >
        {isSubscribed ? <Bell className="w-5 h-5 fill-current" /> : <BellOff className="w-5 h-5" />}
      </button>

      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-12 right-0 md:right-auto md:left-1/2 md:-translate-x-1/2 w-64 p-3 bg-white border border-brand-pink-100 shadow-xl rounded-xl z-50 text-sm text-gray-700"
          >
            <div className="flex gap-2">
              <Info className="w-5 h-5 text-brand-pink-500 flex-shrink-0" />
              <div>
                <p className="font-medium text-brand-pink-900 mb-1">
                  {isSubscribed ? 'Notifications Enabled' : 'Get Notified'}
                </p>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {isSubscribed 
                    ? "You're subscribed to alerts for new collection drops and limited-time offers."
                    : "Turn on notifications to be the first to know about new collection drops and exclusive limited-time offers."}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
