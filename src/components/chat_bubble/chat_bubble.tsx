import React, { useCallback, useEffect, useRef, useState } from 'react';
import './chat_bubble.scss';

type Phase = 'typing' | 'running' | 'output' | 'clearing';
type Status = 'ready' | 'running' | 'done' | 'connected';

interface Command {
  code: string;
  output: string;
  duration: number;
}

const COMMANDS: Command[] = [
  { code: 'whoami',             output: '→ tj klint',              duration: 600 },
  { code: 'tj.role',            output: '→ full-stack @ botpress', duration: 700 },
  { code: 'tj.stack',           output: '→ ts, py, go, c#',        duration: 500 },
  { code: 'tj.cusec',           output: '→ co-chair 2025',         duration: 600 },
  { code: "ask('projects')",    output: '→ 9 shipped',             duration: 500 },
  { code: 'openChat()',         output: '→ click me :)',           duration: 400 },
];

declare global {
  interface Window {
    botpress?: { open?: () => void };
  }
}

const ChatBubble: React.FC = () => {
  const [commandIndex, setCommandIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [phase, setPhase] = useState<Phase>('typing');
  const [status, setStatus] = useState<Status>('ready');
  const [codeText, setCodeText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [footerLift, setFooterLift] = useState(0);
  const timeoutRef = useRef<number | null>(null);
  const bubbleRef = useRef<HTMLDivElement | null>(null);

  const openChat = useCallback(() => {
    if (window.botpress?.open) {
      window.botpress.open();
      setStatus('connected');
    }
  }, []);

  // Typing / running / output / clearing cycle
  useEffect(() => {
    const current = COMMANDS[commandIndex];

    const run = (delay: number, fn: () => void) => {
      timeoutRef.current = window.setTimeout(fn, delay);
    };

    if (phase === 'typing') {
      if (charIndex < current.code.length) {
        setCodeText(current.code.substring(0, charIndex + 1));
        run(70 + Math.random() * 50, () => setCharIndex((c) => c + 1));
      } else {
        setStatus('running');
        setPhase('running');
      }
    } else if (phase === 'running') {
      run(current.duration, () => {
        setOutputText(current.output);
        setStatus('done');
        setPhase('output');
      });
    } else if (phase === 'output') {
      run(2000, () => {
        setOutputText('');
        setStatus('ready');
        setPhase('clearing');
      });
    } else if (phase === 'clearing') {
      run(300, () => {
        setCodeText('');
        setCharIndex(0);
        setCommandIndex((i) => (i + 1) % COMMANDS.length);
        setPhase('typing');
      });
    }

    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, [phase, charIndex, commandIndex]);

  // Belt-and-suspenders: hide the default Botpress FAB. The CSS override
  // handles it when the element lives in the light DOM, but Botpress renders
  // the widget asynchronously after inject.js loads, so walk the DOM (and any
  // shadow roots we can reach) on intervals until we find and hide it.
  useEffect(() => {
    let disposed = false;

    const hideFab = (root: Document | ShadowRoot | HTMLElement) => {
      const candidates = root.querySelectorAll<HTMLElement>(
        '.bpFabContainer, [class*="bpFabContainer"]'
      );
      candidates.forEach((el) => {
        el.style.setProperty('display', 'none', 'important');
      });
      // Descend into any shadow roots we encounter.
      const hosts = root.querySelectorAll<HTMLElement>('*');
      hosts.forEach((host) => {
        if (host.shadowRoot) hideFab(host.shadowRoot);
      });
      return candidates.length > 0;
    };

    const interval = window.setInterval(() => {
      if (disposed) return;
      hideFab(document);
    }, 500);

    // Stop polling after a reasonable window; Botpress loads within seconds.
    const stop = window.setTimeout(() => window.clearInterval(interval), 20000);

    return () => {
      disposed = true;
      window.clearInterval(interval);
      window.clearTimeout(stop);
    };
  }, []);

  // Lift the bubble above the footer as the user reaches the bottom of the
  // page, and expose the bubble's height as a CSS variable so the Botpress
  // webchat panel can sit above it without overlap.
  useEffect(() => {
    const footer = document.querySelector<HTMLElement>('.footer-container');
    const bubble = bubbleRef.current;
    if (bubble) {
      const h = bubble.getBoundingClientRect().height;
      document.documentElement.style.setProperty('--chat-bubble-height', `${h}px`);
    }
    if (!footer) return;

    const computeLift = () => {
      const rect = footer.getBoundingClientRect();
      const overlap = window.innerHeight - rect.top;
      setFooterLift(Math.max(0, overlap + 16));
    };

    computeLift();
    window.addEventListener('scroll', computeLift, { passive: true });
    window.addEventListener('resize', computeLift);
    return () => {
      window.removeEventListener('scroll', computeLift);
      window.removeEventListener('resize', computeLift);
    };
  }, []);

  // Press "/" to open the chat (skip while typing in form fields)
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement | null;
      const inField = !!t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || (t as HTMLElement).isContentEditable);
      if (e.key === '/' && !e.ctrlKey && !e.metaKey && !inField) {
        e.preventDefault();
        openChat();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [openChat]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openChat();
    }
  };

  return (
    <div
      ref={bubbleRef}
      className={`chat-bubble${phase === 'running' ? ' is-running' : ''}${status === 'connected' ? ' is-open' : ''}`}
      role="button"
      tabIndex={0}
      aria-label="Open chat"
      onClick={openChat}
      onKeyDown={handleKeyDown}
      style={{ transform: `translateY(-${footerLift}px)` }}
    >
      <div className="chat-bubble__header">
        <div className="chat-bubble__dots">
          <span className="chat-bubble__dot chat-bubble__dot--red" />
          <span className="chat-bubble__dot chat-bubble__dot--yellow" />
          <span className="chat-bubble__dot chat-bubble__dot--green" />
        </div>
        <span className="chat-bubble__title">ask xero</span>
      </div>
      <div className="chat-bubble__body">
        <div className="chat-bubble__line">
          <span className="chat-bubble__prompt">❯</span>
          <span className="chat-bubble__code">{codeText}</span>
          <span className="chat-bubble__cursor">▋</span>
        </div>
        <div className={`chat-bubble__output${outputText ? ' show' : ''}`}>{outputText}</div>
      </div>
      <div className="chat-bubble__status">
        <span className="chat-bubble__status-dot" />
        <span className="chat-bubble__status-text">{status}</span>
      </div>
    </div>
  );
};

export default ChatBubble;
