export type Project = {
  name: string;
  eyebrow: string;
  summary: string;
  contribution: string;
  status: 'Featured build' | 'Prototype concept';
  videoUrl?: string;
  accent: 'teal' | 'orange' | 'violet' | 'blue';
  visual: 'signals' | 'diligence' | 'contract' | 'vision';
};

export const projects: Project[] = [
  {
    name: 'Sentio',
    eyebrow: 'AI-powered technology scouting',
    summary:
      'A research workspace for turning a noisy technology landscape into focused signals, evidence, and decisions.',
    contribution: 'Product concept, AI workflow design, and end-to-end prototype.',
    status: 'Featured build',
    accent: 'teal',
    visual: 'signals',
  },
  {
    name: 'RiskLens',
    eyebrow: 'AI due-diligence research',
    summary: 'Structured research flows for surfacing risks, sources, and decision-ready briefs.',
    contribution: 'Workflow architecture and prototype implementation.',
    status: 'Prototype concept',
    accent: 'orange',
    visual: 'diligence',
  },
  {
    name: 'ClauseCheck',
    eyebrow: 'AI-powered contract review',
    summary: 'A focused interface for making clause-level review clearer and faster.',
    contribution: 'Product direction, information design, and AI interaction design.',
    status: 'Prototype concept',
    accent: 'violet',
    visual: 'contract',
  },
  {
    name: 'StreetSense',
    eyebrow: 'Computer vision for operations',
    summary: 'Operational visibility for teams working from visual signals in the field.',
    contribution: 'Product framing and applied AI prototype.',
    status: 'Prototype concept',
    accent: 'blue',
    visual: 'vision',
  },
];
