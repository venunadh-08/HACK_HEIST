import React, { useState, useEffect } from 'react';
import { Users, AlertCircle } from 'lucide-react';
import { User } from '../types';
// Logo will be referenced from the public folder, no import needed

const parseCSV = (csvText: string): any[] => {
  const lines = csvText.trim().split('\n');
  if (lines.length < 2) return [];
  const headers = lines[0].split(',').map(h => h.trim().toLowerCase());
  return lines.slice(1).map(line => {
    const values = line.split(',').map(v => v.trim());
    const obj: any = {};
    headers.forEach((header, i) => {
      obj[header] = values[i];
    });
    return obj;
  });
};

interface LoginPageProps {
  onLogin: (user: User) => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [organizers, setOrganizers] = useState<any[]>([]);

  useEffect(() => {
    const loadOrganizers = async () => {
      try {
        // CHANGE 2: Construct the correct path for the CSV file
        const csvPath = `${import.meta.env.BASE_URL}Organizers.csv`;
        const response = await fetch(csvPath);

        if (response.ok) {
          const organizersText = await response.text();
          setOrganizers(parseCSV(organizersText));
        }
      } catch (err) {
        console.error("Failed to load Organizers.csv", err);
      }
    };
    loadOrganizers();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    const organizer = organizers.find(o => o.email && o.email.toLowerCase() === email.toLowerCase());
    if (organizer) {
      onLogin({
        id: email.split('@')[0],
        email: email,
        role: 'organizer',
        name: organizer.name,
      });
    } else {
      setError('Operative not found in the manifest.');
    }
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gfg-gradient-start to-gfg-gradient-end flex items-center justify-center relative overflow-hidden">
      <div className="relative z-10 w-full max-w-md mx-4">
        <div className="text-center mb-8">
          <div className="mb-4">
            {/* CHANGE 3: Use the imported logo variable in the src attribute */}
            {/* CHANGE 3: Reference the logo from the public folder */}
            <img src="/gfg_logo.png" alt="GFG Logo" className="mx-auto h-24 sm:h-28" />
          <p className="text-gfg-gold text-lg font-body uppercase tracking-widest mb-2">GFG CAMPUS BODY KARE PRESENTS</p>
          <h1 className="text-6xl font-extrabold text-gfg-text-light font-heading mb-4 tracking-tight">
            HACK <span className="bg-gfg-red text-gfg-text-light px-2 py-1 leading-none inline-block">HEIST</span>
          </h1>
        </div>
        <div className="bg-gfg-card-bg rounded-lg shadow-2xl border border-gfg-border overflow-hidden">
          <div className="bg-gradient-to-r from-gfg-red to-gfg-red-hover p-4">
            <h2 className="text-xl font-bold text-gfg-text-light text-center font-heading tracking-widest">ORGANIZER ACCESS</h2>
          </div>
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-body font-medium text-gfg-text-dark mb-2 tracking-wide">ORGANIZER EMAIL</label>
              <input
                type="email" id="email" value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 bg-gfg-dark-bg border border-gfg-border rounded-lg text-gfg-text-light placeholder-gfg-text-dark focus:border-gfg-gold focus:ring-1 focus:ring-gfg-gold outline-none transition-colors"
                placeholder="gfg.organizer@example.com"
                disabled={isLoading}
              />
            </div>
            {error && (
              <div className="flex items-center space-x-2 text-gfg-gold bg-gfg-gold/10 p-3 rounded-lg border border-gfg-gold/20">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm font-body">{error}</span>
              </div>
            )}
            <button type="submit" disabled={isLoading}
              className="w-full bg-gfg-gold hover:bg-gfg-gold-hover text-gfg-card-bg py-3 px-4 rounded-lg font-bold font-heading hover:shadow-lg uppercase tracking-widest disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              {isLoading ? 'VERIFYING...' : 'LOGIN'}
            </button>
          </form>
        </div>
      </div>
      </div>
    </div>
  );
};

export default LoginPage;