import React, { useState, useEffect } from 'react';
import { GitPullRequest, Star, GitFork, Users, BookOpen, ExternalLink, RefreshCw, AlertCircle, Calendar } from 'lucide-react';
import { GithubIcon } from '../components/BrandIcons';
import { personalData } from '../data/personal';
import SectionHeading from '../components/SectionHeading';

export default function GitHub() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const username = personalData.githubUsername;

  useEffect(() => {
    if (!username || username.trim() === '') {
      setLoading(false);
      return;
    }

    const fetchGithubData = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`https://api.github.com/users/${encodeURIComponent(username)}`);
        if (!res.ok) {
          if (res.status === 404) {
            throw new Error(`GitHub profile "${username}" not found or still pending setup.`);
          } else if (res.status === 403) {
            throw new Error('GitHub API rate limit reached. Fallback preview active.');
          } else {
            throw new Error(`GitHub API error (${res.status})`);
          }
        }
        const data = await res.json();
        setProfile(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGithubData();
  }, [username]);

  const profileUrl = personalData.githubUrl || (username ? `https://github.com/${username}` : 'https://github.com');

  return (
    <section id="github" className="py-24 bg-[#ffffff] text-[#0b0b0c] border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          badge="04. Open Source & Code"
          title="GitHub Engineering Activity"
          subtitle="Continuous commits, open-source repositories, and developer contributions."
          align="center"
          dark={false}
        />

        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Main GitHub Profile Overview Card in Black & Lime */}
          <div className="bg-[#0b0b0c] text-white rounded-3xl p-6 sm:p-8 border border-zinc-800 shadow-2xl relative overflow-hidden">
            {/* Ambient Lime Glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#c6f432]/6 rounded-full blur-3xl pointer-events-none" />

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6 border-b border-zinc-800 relative z-10">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-zinc-800 p-[1px] shadow-lg shrink-0">
                  <div className="w-full h-full rounded-[14px] bg-[#0b0b0c] flex items-center justify-center overflow-hidden">
                    {profile?.avatar_url ? (
                      <img
                        src={profile.avatar_url}
                        alt={personalData.fullName}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <GithubIcon className="w-7 h-7 text-[#c6f432]" />
                    )}
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-heading font-bold text-xl text-white">
                      {profile?.name || personalData.fullName}
                    </h3>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-zinc-900 text-[#c6f432] border border-zinc-800 font-bold">
                      @{username || 'developer'}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-400 mt-1">
                    {profile?.bio || 'Building scalable web systems & machine learning architectures'}
                  </p>
                </div>
              </div>

              {/* View GitHub Profile Link (Electric Lime Button) */}
              <a
                href={profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#c6f432] hover:bg-[#b5e526] text-[#0b0b0c] text-xs font-bold shadow-md hover:shadow-[0_0_20px_rgba(198,244,50,0.35)] transition-all duration-200 hover:-translate-y-0.5 shrink-0"
              >
                <GithubIcon className="w-4 h-4 text-[#0b0b0c]" />
                <span>Visit Profile</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>
            </div>

            {/* Profile Statistics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 relative z-10">
              <div className="bg-[#141416] p-4 rounded-2xl border border-zinc-800 text-center">
                <span className="text-zinc-500 text-xs font-mono block mb-1">REPOSITORIES</span>
                <span className="text-2xl font-bold font-heading text-[#c6f432]">
                  {loading ? '...' : (profile?.public_repos ?? '4+')}
                </span>
                <span className="text-[10px] text-zinc-500 block mt-0.5">Public Repos</span>
              </div>

              <div className="bg-[#141416] p-4 rounded-2xl border border-zinc-800 text-center">
                <span className="text-zinc-500 text-xs font-mono block mb-1">FOLLOWERS</span>
                <span className="text-2xl font-bold font-heading text-white">
                  {loading ? '...' : (profile?.followers ?? '—')}
                </span>
                <span className="text-[10px] text-zinc-500 block mt-0.5">Engineers & Peers</span>
              </div>

              <div className="bg-[#141416] p-4 rounded-2xl border border-zinc-800 text-center">
                <span className="text-zinc-500 text-xs font-mono block mb-1">FOLLOWING</span>
                <span className="text-2xl font-bold font-heading text-white">
                  {loading ? '...' : (profile?.following ?? '—')}
                </span>
                <span className="text-[10px] text-zinc-500 block mt-0.5">Following</span>
              </div>

              <div className="bg-[#141416] p-4 rounded-2xl border border-zinc-800 text-center">
                <span className="text-zinc-500 text-xs font-mono block mb-1">GISTS / SNIPPETS</span>
                <span className="text-2xl font-bold font-heading text-[#c6f432]">
                  {loading ? '...' : (profile?.public_gists ?? '0')}
                </span>
                <span className="text-[10px] text-zinc-500 block mt-0.5">Public Gists</span>
              </div>
            </div>

            {/* Error or Rate-limit Notice */}
            {error && (
              <div className="mt-6 p-3 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center gap-2.5 text-xs text-zinc-400">
                <AlertCircle className="w-4 h-4 shrink-0 text-[#c6f432]" />
                <span>
                  {error} — Configure your confirmed GitHub username in <code>src/data/personal.js</code>.
                </span>
              </div>
            )}
          </div>

          {/* Contribution Heatmap Card */}
          <div className="bg-zinc-50 rounded-2xl p-6 sm:p-8 border border-zinc-200">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 pb-4 border-b border-zinc-200">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-[#0b0b0c]" />
                <h4 className="font-heading font-bold text-[#0b0b0c] text-base">
                  Annual Contribution Calendar
                </h4>
              </div>
              <span className="text-xs text-zinc-500 font-mono">
                Direct sync with GitHub activity
              </span>
            </div>

            {/* Embedded GitHub Contribution Chart (Electric Lime Theme) */}
            <div className="overflow-x-auto pb-2">
              <div className="min-w-[650px] flex justify-center bg-white p-4 rounded-xl border border-zinc-200 shadow-xs">
                {username ? (
                  <img
                    src={`https://ghchart.rshah.org/c6f432/${encodeURIComponent(username)}`}
                    alt={`${username}'s GitHub contribution calendar`}
                    className="w-full max-w-full h-auto"
                    loading="lazy"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      const fallback = document.getElementById('gh-chart-fallback');
                      if (fallback) fallback.classList.remove('hidden');
                    }}
                  />
                ) : null}

                {/* Fallback visualization if chart service or username isn't available */}
                <div
                  id="gh-chart-fallback"
                  className={`${username ? 'hidden' : 'block'} text-center py-8 space-y-2`}
                >
                  <GithubIcon className="w-8 h-8 text-zinc-400 mx-auto" />
                  <p className="text-sm font-medium text-zinc-700">
                    Contribution activity ready for live connection
                  </p>
                  <p className="text-xs text-zinc-400 font-mono">
                    Set your confirmed GitHub username in <code>src/data/personal.js</code>
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between text-[11px] text-zinc-400 mt-4 font-mono">
              <span>Less activity</span>
              <div className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-xs bg-zinc-200" />
                <span className="w-2.5 h-2.5 rounded-xs bg-[#c6f432]/40" />
                <span className="w-2.5 h-2.5 rounded-xs bg-[#c6f432]/75" />
                <span className="w-2.5 h-2.5 rounded-xs bg-[#c6f432]" />
              </div>
              <span>More activity</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
