
import { ProjectData } from './types';

export const PROJECTS: Record<string, ProjectData> = {
  ineed: {
    id: 'ineed',
    title: 'iNeed',
    bgClass: 'bg-[#111]',
    previewText: 'Eine Nachbarschaftsapp mit dem Ziel Menschen zusammenzubringen und sich gegenseitig zu helfen',
    text: `iNeed ist ein persönliches Herzensprojekt, das seit Sommer 2025 entsteht: Eine Marktplatz-App, mit der Menschen Alltagsgegenstände aus ihrer Community leihen oder mieten können – ähnlich wie Airbnb, aber für fast alles. Das Ziel: Weniger kaufen, mehr teilen!\n\nSo wird Nachhaltigkeit gefördert, Geld gespart und der Gemeinschaftssinn gestärkt. Die Idee entstand, als ich als Künstler eine spezielle Sprühdose brauchte, aber niemanden konnte, der sie verleihen konnte.`
  },
  ai_news: {
    id: 'ai_news',
    title: 'AI News',
    bgClass: 'bg-[#1a1a1a]',
    imageUrl: 'https://i.imgur.com/Td8f1sW.jpeg',
    previewText: 'Ein effizienter und observatorischer Nachrichtendienst',
    text: `Das Ziel mit AI News war es, ein KI-gesteuertes Nachrichtenportal zu schaffen, das als All-in-1-Plattform dient. Die Aufgabe der KI ist es, nach Berichten zu einem aktuellen Thema zu suchen, diese zu filtern und eine vollständig abgedeckte Version des Artikels zu erstellen.`,
    details: {
      research: 'Research',
      researchIntro: 'Untersuchung von News-Consumption-Patterns und der Rolle von LLMs in der Kuratierung von Inhalten.',
      personaTitle: 'User Persona',
      personaText: 'Ben (25), Künstler: Schätzt Effizienz und möchte durch KI-Zusammenfassungen Zeit sparen, ohne wichtige Details zu verpassen.',
      define: 'Define Phase: Fokus auf Transparenz und Quellenverifizierung durch KI.',
      ideate: 'Ideation: Interface für "Deep-Dive" oder "Quick-Read" Modi.'
    }
  },
  artatlas: {
    id: 'artatlas',
    title: 'ArtAtlas',
    bgClass: 'bg-[#191a1e]',
    text: 'Ein Konzept für einen digitalen Navigator durch die globale Kunstwelt, der Ausstellungen und Künstlerprofile intuitiv verknüpft.'
  },
  other: {
    id: 'other',
    title: 'Weitere Designs',
    bgClass: 'bg-[#0a2540]',
    text: 'Sammlung verschiedener grafischer Arbeiten, von Branding bis hin zu UI-Experimenten.'
  },
  aktuelles: {
    id: 'aktuelles',
    title: 'UCI Kinowelt App',
    bgClass: 'bg-black',
    status: 'Coming Soon',
    text: 'Ein umfassendes Redesign der UCI Kinowelt App für ein moderneres Buchungserlebnis.'
  }
};

export interface DesignItem {
  id: string;
  title: string;
  url: string;
}

export const OTHER_DESIGNS_DATA: Record<string, DesignItem[]> = {
  'Marketing & Branding': [
    { id: 'vm-1', title: '', url: 'https://i.imgur.com/vhV6IIM.jpeg' },
    { id: 'vm-2', title: '', url: 'https://i.imgur.com/94VrHQM.jpeg' },
    { id: 'vm-3', title: '', url: 'https://i.imgur.com/KnJgoxX.jpeg' },
    { id: 'vm-4', title: '', url: 'https://i.imgur.com/e5GT97m.png' }
  ],
  'Illustration': [
    { id: 'illu-1', title: '', url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop' },
    { id: 'illu-2', title: '', url: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=2070&auto=format&fit=crop' }
  ],
  'Editorial Media': [
    { id: 'ed-1', title: '', url: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1974&auto=format&fit=crop' },
    { id: 'ed-2', title: '', url: 'https://images.unsplash.com/photo-1561070791-26c11d6d9e3d?q=80&w=1970&auto=format&fit=crop' }
  ]
};

export const OTHER_DESIGNS_ITEMS = Object.keys(OTHER_DESIGNS_DATA).map(name => ({ name }));
