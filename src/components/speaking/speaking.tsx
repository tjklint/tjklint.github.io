import React, { useMemo } from 'react';
import {
  FaExternalLinkAlt,
  FaFilePdf,
  FaGithub,
  FaMicrophone,
  FaYoutube,
} from 'react-icons/fa';
import talksData from '../../data/talks.json';
import speakingPhoto from '../../assets/me/jpg/speaking.jpg';
import './speaking.scss';

interface Talk {
  title?: string;
  kind?: string;
  event: string;
  date: string;
  website: string;
  slides?: string;
  repo?: string;
  video?: string;
  location?: string;
}

const parseDate = (iso: string) => {
  const d = new Date(iso);
  d.setHours(0, 0, 0, 0);
  return d;
};

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

const Speaking: React.FC = () => {
  const { upcoming, past } = useMemo(() => {
    const talks = (talksData as { talks: Talk[] }).talks;
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const future: Talk[] = [];
    const history: Talk[] = [];
    talks.forEach((t) => {
      if (parseDate(t.date) >= today) future.push(t);
      else history.push(t);
    });
    future.sort((a, b) => parseDate(a.date).getTime() - parseDate(b.date).getTime());
    history.sort((a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime());
    return { upcoming: future, past: history };
  }, []);

  const renderCard = (talk: Talk, kind: 'upcoming' | 'past') => (
    <article className={`speaking-card speaking-card--${kind}`} key={`${talk.event}-${talk.date}`}>
      <div className="speaking-card__head">
        <FaMicrophone className="speaking-card__icon" aria-hidden="true" />
        <span className="speaking-card__date">{formatDate(talk.date)}</span>
        {talk.kind && <span className="speaking-card__kind">{talk.kind}</span>}
      </div>
      <h3 className="speaking-card__title">{talk.title ?? talk.event}</h3>
      {talk.title && <p className="speaking-card__event-line">{talk.event}</p>}
      {talk.location && <p className="speaking-card__location">{talk.location}</p>}
      <div className="speaking-card__links">
        <a
          href={talk.website}
          target="_blank"
          rel="noopener noreferrer"
          className="speaking-card__link"
        >
          <FaExternalLinkAlt /> Event
        </a>
        {talk.slides && (
          <a
            href={talk.slides}
            target="_blank"
            rel="noopener noreferrer"
            className="speaking-card__link"
          >
            <FaFilePdf /> Slides
          </a>
        )}
        {talk.repo && (
          <a
            href={talk.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="speaking-card__link"
          >
            <FaGithub /> Repo
          </a>
        )}
        {talk.video && (
          <a
            href={talk.video}
            target="_blank"
            rel="noopener noreferrer"
            className="speaking-card__link speaking-card__link--video"
          >
            <FaYoutube /> Watch
          </a>
        )}
      </div>
    </article>
  );

  return (
    <section className="speaking-container" id="speaking">
      <div className="speaking-intro">
        <div className="speaking-intro__text">
          <h2 className="speaking-title">Speaking</h2>
          <p>
            I love sharing what I learn. I talk about{' '}
            <span className="purple-text">AI and AI agents</span>,{' '}
            <span className="purple-text">ethical hacking</span>,{' '}
            <span className="purple-text">rate limiting and backend patterns</span>,
            and the messy bits of starting a career in tech: honest
            stories, no sales pitches, and takeaways people can actually use
            on Monday.
          </p>
          <p>
            Anything from a 20-minute lightning talk to a half-day workshop
            works for me. Conferences, meetups, company events, panels. I&rsquo;ll tailor the format and tone to your crowd.
          </p>
          <p className="speaking-intro__cta">
            Want me on your lineup?{' '}
            <a href="mailto:timothyjklint@gmail.com?subject=Speaking Opportunity">
              Let&rsquo;s talk.
            </a>
          </p>
        </div>
        <div className="speaking-intro__photo">
          <img src={speakingPhoto} alt="TJ speaking" loading="lazy" />
        </div>
      </div>

      {upcoming.length > 0 && (
        <div className="speaking-group">
          <h3 className="speaking-group__label">Upcoming</h3>
          <div className="speaking-grid">
            {upcoming.map((t) => renderCard(t, 'upcoming'))}
          </div>
        </div>
      )}

      {past.length > 0 && (
        <div className="speaking-group">
          <h3 className="speaking-group__label">Past</h3>
          <div className="speaking-grid">
            {past.map((t) => renderCard(t, 'past'))}
          </div>
        </div>
      )}

      {upcoming.length === 0 && past.length === 0 && (
        <p className="speaking-empty">
          No talks scheduled yet.{' '}
          <a href="mailto:timothyjklint@gmail.com?subject=Speaking Opportunity">
            Invite me to yours.
          </a>
        </p>
      )}
    </section>
  );
};

export default Speaking;
