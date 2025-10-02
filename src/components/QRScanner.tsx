import React, { useEffect } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';
import { AlertCircle, ScanLine } from 'lucide-react';

interface QRScannerProps {
  onScan: (decodedText: string) => void;
  scanResult: { type: 'success' | 'error' | 'warning'; text: string } | null;
}

const QRScanner: React.FC<QRScannerProps> = ({ onScan, scanResult }) => {
  const scannerId = "qr-reader-container";

  useEffect(() => {
    const scanner = new Html5QrcodeScanner(
      scannerId,
      {
        qrbox: { width: 250, height: 400 },
        fps: 5,
      },
      false
    );

    const handleScan = (decodedText: string) => {
      onScan(decodedText);
    };
    
    const onScanError = (errorMessage: string) => {
      // Ignore errors
    };
    
    scanner.render(handleScan, onScanError);

    return () => {
      if (scanner && scanner.getState() !== 1) {
        scanner.clear().catch(error => {
          console.error("Failed to clear scanner on unmount.", error);
        });
      }
    };
  }, [onScan]);

  return (
    <div className="bg-gfg-card-bg rounded-lg border border-gfg-border p-6">
      <h3 className="text-gfg-text-light font-bold text-lg mb-4 flex items-center font-heading uppercase tracking-wider">
        <ScanLine className="w-5 h-5 mr-2 text-gfg-gold" />
        Identity Scan
      </h3>
      <div className="w-full max-w-sm mx-auto p-1 bg-gfg-dark-bg rounded-lg shadow-inner">
        <div className="w-full aspect-square rounded overflow-hidden relative">
          <div id={scannerId}></div>
        </div>
      </div>
      {scanResult && (
        <div className={`mt-4 flex items-start space-x-2 p-3 rounded-lg border ${
            scanResult.type === 'success' ? 'text-green-400 bg-green-500/10 border-green-500/20' 
          : scanResult.type === 'warning' ? 'text-yellow-400 bg-yellow-500/10 border-yellow-500/20'
          : 'text-gfg-gold bg-gfg-gold/10 border-gfg-gold/20'
        }`}>
          <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
          <span className="text-sm font-body">{scanResult.text}</span>
        </div>
      )}
    </div>
  );
};

export default QRScanner;