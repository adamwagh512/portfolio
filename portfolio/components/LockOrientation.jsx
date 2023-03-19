import { useEffect } from 'react';

function LockOrientation() {
  useEffect(() => {
    // Check if screen orientation API is supported
    if (screen.orientation) {
      // Lock screen orientation to portrait mode
      screen.orientation.lock('portrait');
    } else {
      // If not supported, display an error message
      alert('Screen orientation lock not supported');
    }

    // Clean up function to unlock screen orientation when component unmounts
    return () => {
      if (screen.orientation) {
        screen.orientation.unlock();
      }
    };
  }, []);

  return (
    <div>
      <h1>Lock Screen Orientation</h1>
      <p>This page will lock the screen orientation in portrait mode.</p>
    </div>
  );
}

export default LockOrientation;