
import { ProjectData, DesignItem } from './types';

export const PROJECTS: Record<string, ProjectData> = {
  ineed: {
    id: 'ineed',
    title: 'iNeed',
    status: 'Aktuell noch in Entwicklung',
    logoUrl: 'https://i.imgur.com/Clw6Xac.png',
    imageUrl: 'https://i.imgur.com/qe0A45n.jpeg',
    bgClass: 'bg-[#111]',
    previewText: 'Eine Nachbarschaftsapp mit dem Ziel Menschen zusammenzubringen und sich gegenseitig zu helfen',
    text: `iNeed ist ein persönliches Herzensprojekt, das seit Sommer 2025 entsteht: Eine Marktplatz-App, mit der Menschen Alltagsgegenstände aus ihrer Community leihen oder mieten können – ähnlich wie Airbnb, aber für fast alles. Das Ziel: Weniger kaufen, mehr teilen!\n\nSo wird Nachhaltigkeit gefördert, Geld gespart und der Gemeinschaftssinn gestärkt. Die Idee entstand, als ich als Künstler eine spezielle Sprühdose brauchte, aber niemanden konnte, der sie verleihen konnte.`,
    details: {
      sitemapUrl: 'https://i.imgur.com/LgiRJD8.jpeg',
      userFlowUrl: 'https://i.imgur.com/QoJqjw6.png',
      wireframeUrls: [
        'https://i.imgur.com/ZQxEuMv.png',
        'https://i.imgur.com/aCNAa0H.png'
      ],
      finalDesignUrls: [
        'https://i.imgur.com/R91DvAD.jpeg',
        'https://i.imgur.com/aafaN2r.png',
        'https://i.imgur.com/aAE4MWE.png',
        'https://i.imgur.com/GhZhVL1.png',
        'https://i.imgur.com/wLpQVTV.png'
      ]
    }
  },
  ai_news: {
    id: 'ai_news',
    title: 'AI News',
    bgClass: 'bg-[#1a1a1a]',
    imageUrl: 'https://i.imgur.com/f5KabUY.jpeg',
    previewText: 'Ein effizienter und observatorischer Nachrichtendienst',
    text: `Das Ziel mit AI News war es, ein KI-gesteuertes Nachrichtenportal zu schaffen, das als All-in-1-Plattform dient. Die Aufgabe der KI ist es, nach Berichten zu einem aktuellen Thema zu suchen, diese zu filtern und eine vollständig abgedeckte Version des Artikels zu erstellen.`,
    details: {
      research: 'Research',
      researchIntro: 'Es erfolgte eine allgemeine Recherche mithilfe vom KI LLM Perplexity und ich ging auch folgende Kriterien ein und fasste abschließend die Infos zusammen.',
      userBehavior: {
        mainImageUrl: 'https://i.imgur.com/flWbDOO.png',
        items: [
          { label: 'Kontext & Umfeld', imageUrl: ['https://i.imgur.com/pBYTJ0b.png', 'https://i.imgur.com/aTdCwyK.png'] },
          { label: 'Emotionen', imageUrl: ['https://i.imgur.com/RQaXm7d.png', 'https://i.imgur.com/thKsChz.png'] },
          { label: 'Ziele der Nutzer', imageUrl: 'https://i.imgur.com/tg675Yh.png' },
          { label: 'Pain Points', imageUrl: 'https://i.imgur.com/8D86D77.png' },
          { label: 'Demographisches', imageUrl: 'https://i.imgur.com/btQ3KgP.png' }
        ]
      },
      define: 'Fokus auf Transparenz und Quellenverifizierung durch KI.',
      persona: {
        name: 'Ben',
        avatarUrl: 'https://i.imgur.com/W6cx5tw.jpeg',
        age: '20-30',
        gender: 'männlich',
        job: 'Künstler',
        techSavvy: 'Sehr hoch',
        behavior: 'Liest morgens & abends Nachrichten',
        usage: 'News-snacking',
        goals: ['Informiert bleiben', 'Effizienz'],
        painPoints: ['Vertrauensverlust', 'Informationsflut'],
        environment: 'Beschäftigt',
        interests: ['Trends', 'Kunst'],
        values: ['Transparenz'],
        channels: ['Web', 'YouTube'],
        bio: 'Ben ist ein Künstler aus Deutschland und schätzt es sehr, auf dem neuesten Stand der Dinge zu sein.'
      },
      ideateImageUrls: [
        'https://i.imgur.com/6zKQH55.png',
        'https://i.imgur.com/JwEL5yu.png',
        'https://i.imgur.com/AS5cqXB.png'
      ],
      sitemapUrl: 'https://i.imgur.com/US6heTo.jpeg',
      userFlowUrl: 'https://i.imgur.com/xzJUEgN.png',
      wireframeUrls: [
        'https://i.imgur.com/1Lw6Dp7.jpeg',
        'https://i.imgur.com/bsE8c53.jpeg',
        'https://i.imgur.com/n61QET8.png'
      ]
    }
  },
  artatlas: {
    id: 'artatlas',
    title: 'ArtAtlas',
    bgClass: 'bg-[#191a1e]',
    text: 'Ein Konzept für einen digitalen Navigator durch die globale Kunstwelt.'
  },
  other: {
    id: 'other',
    title: 'Weitere Designs',
    bgClass: 'bg-[#0a2540]',
    text: 'Sammlung verschiedener grafischer Arbeiten.'
  },
  aktuelles: {
    id: 'aktuelles',
    title: 'UCI Kinowelt App',
    bgClass: 'bg-black',
    status: 'Coming Soon',
    text: 'Ein umfassendes Redesign der UCI Kinowelt App.'
  }
};

export const OTHER_DESIGNS_DATA: Record<string, DesignItem[]> = {
  'Marketing & Branding': [
    { id: 'm-1', title: 'Branding Concept', url: 'https://i.imgur.com/vhV6IIM.jpeg', type: 'image' },
    { id: 'm-2', title: 'Visual Identity', url: 'https://i.imgur.com/VaJih1J.png', type: 'image' }
  ],
  'Illustration': [
    { id: 'illu-1', title: 'Character Sketch', url: 'https://i.imgur.com/CvWASRg.jpeg', type: 'image', subCategory: 'Zeichnungen' },
    { id: 'illu-2', title: 'Digital Portrait', url: 'https://i.imgur.com/W6cx5tw.jpeg', type: 'image', subCategory: 'Zeichnungen' },
    { id: 'illu-3', title: 'Interface Illustration', url: 'https://i.imgur.com/wLpQVTV.png', type: 'image', subCategory: 'Digitales Produktdesign' },
    { id: 'illu-4', title: 'Concept Art', url: 'https://i.imgur.com/GhZhVL1.png', type: 'image', subCategory: 'Digitales Produktdesign' }
  ],
  'Print- & Editorial Design': [
    { id: 'p-1', title: 'Magazine Layout', url: 'https://i.imgur.com/VaJih1J.png', type: 'image' }
  ],
  'Audiovisuelle Medien': [
    { id: 'av-1', title: 'Animation Reel', url: 'https://i.imgur.com/Ylalvfx.mp4', type: 'video' }
  ],
  'Dokumente': [
    { id: 'd-1', title: 'Portfolio PDF', url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', type: 'pdf' }
  ],
  'Fotografie': [
    { id: 'f-1', title: 'Urban Study', url: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073&auto=format&fit=crop', type: 'image' }
  ],
  'Buchcover Design': [
    { id: 'bc-1', title: 'Novel Cover', url: 'https://i.imgur.com/1NRUjXK.jpeg', type: 'image' }
  ]
};

export const OTHER_DESIGNS_ITEMS = Object.keys(OTHER_DESIGNS_DATA).map(name => ({ name }));
