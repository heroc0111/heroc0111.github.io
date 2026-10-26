export type Project = {
  name: string;
  eyebrow: string;
  summary: string;
  contribution: string;
  status: 'Product walkthrough' | 'Working prototype';
  videoUrl: string;
  posterUrl: string;
  accent: 'teal' | 'orange' | 'violet' | 'blue';
  visual: 'signals' | 'diligence' | 'contract' | 'vision';
};

export const projects: Project[] = [
  {
    name: 'Sentio',
    eyebrow: 'AI-powered market intelligence',
    summary: 'An AI research agent that tracks companies, identifies meaningful developments, and turns scattered information into structured, source-backed intelligence.',
    contribution: 'Product judgment, AI workflow design, and hands-on engineering delivery.',
    status: 'Product walkthrough',
    videoUrl: 'https://dzpshoqedjlvgvgjjcbg.supabase.co/storage/v1/object/public/mildly/sentio-run-agent.mp4',
    posterUrl: 'https://mildly.ai/_astro/sentio-run-agent-poster.Cym_4e0B.png',
    accent: 'teal',
    visual: 'signals',
  },
  {
    name: 'RiskLens',
    eyebrow: 'AI due diligence',
    summary: 'Research companies, analyze documents, and generate evidence-backed due-diligence reports without spending hours manually gathering information.',
    contribution: 'AI architecture · Document analysis · Full-stack',
    status: 'Product walkthrough',
    videoUrl: 'https://dzpshoqedjlvgvgjjcbg.supabase.co/storage/v1/object/public/mildly/risklens-demo.mp4',
    posterUrl: 'https://mildly.ai/_astro/risklens-demo-poster.i3H15wW9.png',
    accent: 'orange',
    visual: 'diligence',
  },
  {
    name: 'ClauseCheck',
    eyebrow: 'AI contract review',
    summary: 'An AI-assisted contract review tool that identifies risky clauses, explains potential issues, and suggests editable improvements.',
    contribution: 'AI architecture · Product design · Full-stack',
    status: 'Product walkthrough',
    videoUrl: 'https://dzpshoqedjlvgvgjjcbg.supabase.co/storage/v1/object/public/mildly/clausecheck-demo.mp4',
    posterUrl: 'https://mildly.ai/_astro/clausecheck-demo-poster.BagcKuG2.png',
    accent: 'violet',
    visual: 'contract',
  },
  {
    name: 'StreetSense',
    eyebrow: 'AI-powered traffic monitoring',
    summary: 'Turns existing camera feeds into real-time traffic insights and actionable incident alerts.',
    contribution: 'Computer vision · Operator workflow · No new roadside hardware',
    status: 'Working prototype',
    videoUrl: 'https://dzpshoqedjlvgvgjjcbg.supabase.co/storage/v1/object/public/mildly/streetsense-demo.mp4',
    posterUrl: 'https://mildly.ai/_astro/streetsense-demo-poster.ChRWWXNc.png',
    accent: 'blue',
    visual: 'vision',
  },
];
