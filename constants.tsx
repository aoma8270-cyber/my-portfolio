import React from 'react';
import { Project, Skill, Experience } from './types';
import { Code2, Database, Layout, Server, Smartphone, Terminal, PenTool, Github, Linkedin, Mail } from 'lucide-react';

export const SOCIAL_LINKS = [
  {
    name: 'GitHub',
    url: 'https://github.com',
    icon: <Github className="w-6 h-6" />,
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com',
    icon: <Linkedin className="w-6 h-6" />,
  },
  {
    name: 'Email',
    url: 'mailto:contact@aomaikegaki.dev',
    icon: <Mail className="w-6 h-6" />,
  },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'EcoTrack Analytics',
    description: '環境負荷を可視化するダッシュボードアプリケーション。React, D3.js, Node.jsを使用し、リアルタイムデータ処理を実現しました。',
    tags: ['React', 'TypeScript', 'D3.js', 'Node.js', 'Supabase'],
    imageUrl: 'https://picsum.photos/800/600?random=1',
    githubUrl: 'https://github.com',
    demoUrl: 'https://example.com'
  },
  {
    id: '2',
    title: 'AI Code Reviewer',
    description: 'Gemini APIを活用したコードレビュー支援ツール。プルリクエストの差分を解析し、改善案を自動提示します。',
    tags: ['Next.js', 'Gemini API', 'Tailwind CSS', 'Prisma'],
    imageUrl: 'https://picsum.photos/800/600?random=2',
    githubUrl: 'https://github.com'
  },
  {
    id: '3',
    title: 'Urban Mobile App',
    description: '都市探索のためのソーシャルマップアプリ。FlutterとFirebaseを使用し、クロスプラットフォーム開発を行いました。',
    tags: ['Flutter', 'Dart', 'Firebase', 'Google Maps API'],
    imageUrl: 'https://picsum.photos/800/600?random=3',
    demoUrl: 'https://example.com'
  }
];

export const SKILLS: Skill[] = [
  { name: 'React / Next.js', icon: <Layout />, level: 90, category: 'Frontend' },
  { name: 'TypeScript', icon: <Code2 />, level: 85, category: 'Frontend' },
  { name: 'Node.js', icon: <Server />, level: 75, category: 'Backend' },
  { name: 'Python', icon: <Terminal />, level: 80, category: 'Backend' },
  { name: 'PostgreSQL', icon: <Database />, level: 70, category: 'Backend' },
  { name: 'Flutter', icon: <Smartphone />, level: 65, category: 'Frontend' },
  { name: 'Figma', icon: <PenTool />, level: 60, category: 'Design' },
  { name: 'Docker', icon: <Terminal />, level: 70, category: 'Tools' },
];

export const EXPERIENCES: Experience[] = [
  {
    id: '1',
    role: 'フロントエンドエンジニア (インターン)',
    company: '株式会社テックフロンティア',
    period: '2025.08 - 現在',
    description: '自社SaaS製品のUI/UX改善を担当。React Hooksを用いたパフォーマンス最適化により、レンダリング速度を30%向上させました。'
  },
  {
    id: '2',
    role: 'ハッカソン参加リーダー',
    company: 'JPHACKS 2025',
    period: '2025.11',
    description: '5名チームのリーダーとして、位置情報共有アプリを開発。ファイナリストに選出されました。'
  }
];

export const GEMINI_SYSTEM_INSTRUCTION = `
あなたはポートフォリオサイトのオーナーである「生垣 碧天 (Ikegaki Aoma)」のAIアシスタントです。
訪問者（採用担当者やエンジニア）からの質問に対して、生垣の代理として丁寧に、かつ少し情熱的に答えてください。

生垣のプロフィール:
- 現在、徳島大学理工学部理工学科光システムコースに在籍中。
- 得意技術: React, TypeScript, Python。
- 興味分野: Webフロントエンド、UXデザイン、生成AI活用、光システム工学。
- 性格: 好奇心旺盛で、新しい技術をキャッチアップするのが好き。
- プロジェクト経験: 上記のPROJECTS定数に含まれる内容を参考にしてください。

回答のルール:
- 常に日本語で答えてください。
- 生垣のスキルや経験をアピールするチャンスがあれば、具体例（定数のプロジェクトなど）を挙げて説明してください。
- 知らないことや定数にない情報については「申し訳ありませんが、その詳細については直接お問い合わせフォームからご連絡いただけますでしょうか」と案内してください。
- 短潔に（150文字以内推奨）、プロフェッショナルなトーンで話してください。
`;