export type Project = {
  name: string;
  eyebrow: string;
  summary: string;
  contribution: string;
  status: 'Featured build' | 'Product walkthrough' | 'Launched AI product' | 'Prototype walkthrough';
  videoUrl: string;
  posterUrl: string;
  accent: 'teal' | 'orange' | 'violet' | 'blue';
  visual: 'signals' | 'diligence' | 'contract' | 'vision';
};

export const projects: Project[] = [
  {
    name: 'Sentio',
    eyebrow: 'Applied AI · Research & intelligence',
    summary: 'A self-service intelligence system with company strategy dossiers, frozen query plans, relevance gating, and full source lineage.',
    contribution: 'Product judgment, AI workflow design, and hands-on engineering delivery.',
    status: 'Featured build',
    videoUrl: 'https://dzpshoqedjlvgvgjjcbg.supabase.co/storage/v1/object/public/mildly/sentio-run-agent.mp4',
    posterUrl: 'https://mildly.ai/_astro/sentio-run-agent-poster.Cym_4e0B.png',
    accent: 'teal',
    visual: 'signals',
  },
  {
    name: 'RiskLens',
    eyebrow: 'AI due-diligence research',
    summary: 'AI-assisted due diligence that analyzes complex documents, extracts relevant information, and helps analysts identify potential discrepancies.',
    contribution: 'AI architecture · Document analysis · Full-stack',
    status: 'Product walkthrough',
    videoUrl: 'https://dzpshoqedjlvgvgjjcbg.supabase.co/storage/v1/object/public/mildly/risklens-demo.mp4',
    posterUrl: 'https://mildly.ai/_astro/risklens-demo-poster.i3H15wW9.png',
    accent: 'orange',
    visual: 'diligence',
  },
  {
    name: 'ClauseCheck',
    eyebrow: 'AI-powered contract review',
    summary: 'AI document understanding that parses complex legal agreements, flags high-risk commitments, and drafts verified clause-level modifications.',
    contribution: 'AI architecture · Product design · Full-stack',
    status: 'Launched AI product',
    videoUrl: 'https://dzpshoqedjlvgvgjjcbg.supabase.co/storage/v1/object/public/mildly/clausecheck-demo.mp4',
    posterUrl: 'https://mildly.ai/_astro/clausecheck-demo-poster.BagcKuG2.png',
    accent: 'violet',
    visual: 'contract',
  },
  {
    name: 'StreetSense',
    eyebrow: 'Computer vision for operations',
    summary: 'Turns existing traffic camera feeds into live incident and congestion alerts that operators can review, confirm, and dispatch.',
    contribution: 'Computer vision · Operator workflow · No new roadside hardware',
    status: 'Prototype walkthrough',
    videoUrl: 'https://dzpshoqedjlvgvgjjcbg.supabase.co/storage/v1/object/public/mildly/streetsense-demo.mp4',
    posterUrl: 'https://mildly.ai/_astro/streetsense-demo-poster.ChRWWXNc.png',
    accent: 'blue',
    visual: 'vision',
  },
];
