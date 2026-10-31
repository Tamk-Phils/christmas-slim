import React from 'react';
import { Link } from 'react-router-dom';
import { useGlow } from '../../context/GlowContext';
import type { GlowMode } from '../../types';
import { Sparkles, Sun, Flame, Moon, Box } from 'lucide-react';

export const UtilityBar: React.FC = () => {
  const { glowMode, setGlowMode } = useGlow();

  const modes: { mode: GlowMode; label: string; icon: React.ReactNode }[] = [
    { mode: 'daylight', label: 'Day', icon: <Sun size={13} /> },
    { mode: 'candlelight', label: 'Candlelight', icon: <Flame size={13} /> },
    { mode: 'twinkly', label: 'Twinkly', icon: <Sparkles size={13} /> },
    { mode: 'night', label: 'Night', icon: <Moon size={13} /> }
  ];

  return (
    <div className="utility-bar">
      <div className="container utility-bar-inner">
        <div className="utility-links">
          <Link to="/branch-sample-kit">
            <Box size={14} />
            Branch Sample Kit ($29 Rebated)
          </Link>
          <Link to="/catalog-request">Request Free 2026 Catalog</Link>
          <Link to="/inspiration">Sam's Decorating Journal</Link>
          <Link to="/customer-support">Customer Care: <strong>1-888-55-BALSAM</strong></Link>
        </div>

        {/* Ambient Glow Mode Switcher */}
        <div className="glow-mode-selector">
          <span className="glow-mode-label">
            <Sparkles size={13} />
            Glow Mode:
          </span>
          <div className="glow-btn-group">
            {modes.map(item => (
              <button
                key={item.mode}
                className={`glow-btn ${glowMode === item.mode ? 'is-active' : ''}`}
                onClick={() => setGlowMode(item.mode)}
                title={`Switch to ${item.label} ambiance`}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
