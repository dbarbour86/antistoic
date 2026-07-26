import { Principle } from '../types';
import controlDithered from '../assets/control_dithered.jpg';
import courageDithered from '../assets/courage_dithered.jpg';
import disciplineDithered from '../assets/discipline_dithered.jpg';
import perspectiveDithered from '../assets/perspective_dithered.jpg';
import mortalityDithered from '../assets/mortality_dithered.jpg';

export const PRINCIPLES: Principle[] = [
  {
    id: 'control',
    title: 'CONTROL',
    latinTag: 'DICHOTOMY OF CONTROL',
    shortQuote: 'Focus only on what is yours to control.',
    description: 'Anxiety arises when we attempt to govern external fate. Surrender outcomes and dedicate full effort to what lies within your domain.',
    detailedAnalysis: 'Epictetus famously opened the Enchiridion with this single divide: "Some things are in our control and others not." When you anchor your peace solely to internal character and preparation, you become invulnerable to circumstance.',
    imageUrl: controlDithered,
    imageAlt: 'Marble sculpture in dramatic monochrome spotlight',
    keyPractices: [
      'Focus strictly on effort, never outcome',
      'Categorize incoming events as inside or outside your sphere',
      'Surrender desire for external approval'
    ]
  },
  {
    id: 'courage',
    title: 'COURAGE',
    latinTag: 'FORTITUDO',
    shortQuote: 'Do difficult things willingly.',
    description: 'Courage is not the absence of fear, but the mastery of action in its presence. Forge virtue through voluntary hardship.',
    detailedAnalysis: 'To Seneca, virtue is tested in resistance. "A man who has never been tested has no idea what he is capable of." Voluntary discomfort prepares the spirit for the unpredictable storms of fate.',
    imageUrl: courageDithered,
    imageAlt: 'Classical Greek warrior statue in dark relief',
    keyPractices: [
      'Seek voluntary friction to build fortitude',
      'Speak truth plainly without performance',
      'Act decisively when fear demands hesitation'
    ]
  },
  {
    id: 'discipline',
    title: 'DISCIPLINE',
    latinTag: 'DISCIPLINA',
    shortQuote: 'Comfort costs more than effort.',
    description: 'Discipline is the bridge between intention and sovereign character. Instant gratification demands a lifetime tax of fragility.',
    detailedAnalysis: 'Marcus Aurelius reminded himself every morning: "At dawn, tell yourself: I have to go to work — as a human being." Discipline is not punishment; it is the highest form of self-respect.',
    imageUrl: disciplineDithered,
    imageAlt: 'Monochrome ancient temple columns in deep shadow',
    keyPractices: [
      'Establish unwavering non-negotiable rituals',
      'Eliminate friction between decision and execution',
      'Treat fatigue as a sensation, not an order to halt'
    ]
  },
  {
    id: 'perspective',
    title: 'PERSPECTIVE',
    latinTag: 'AMOR FATI',
    shortQuote: 'Events are neutral. Your judgment gives them meaning.',
    description: 'Events carry no intrinsic commentary. Master your framing and you master your reality. Turn every obstacle into fuel.',
    detailedAnalysis: 'Marcus Aurelius wrote: "Choose not to be harmed — and you won\'t feel harmed." The mind possesses sovereign power to convert friction into raw material for wisdom.',
    imageUrl: perspectiveDithered,
    imageAlt: 'Monochrome marble bust gazing upward',
    keyPractices: [
      'View crises from a cosmic distance',
      'Strip events of emotional commentary',
      'Reframe every setback as training'
    ]
  },
  {
    id: 'mortality',
    title: 'MORTALITY',
    latinTag: 'MEMENTO MORI',
    shortQuote: 'Time is your most valuable possession.',
    description: 'Remember that you must die. Not to induce gloom, but to awaken urgency, gratitude, and absolute clarity of purpose.',
    detailedAnalysis: 'Seneca observed that we act like mortals in all that we fear, and like immortals in all that we desire. Memento Mori dissolves petty grievances and false priorities instantly.',
    imageUrl: mortalityDithered,
    imageAlt: 'Classical marble portrait in quiet meditation',
    keyPractices: [
      'Begin each day acknowledging life is finite',
      'Prune empty obligations that waste spirit',
      'Act with the weight of ultimate clarity'
    ]
  }
];

export const MANIFESTO_STATEMENTS = [
  'We reject excuses.',
  'We reject victimhood.',
  'We reject endless distraction.',
  'We reject fake motivation.',
  'We choose ownership.',
  'We choose discipline.',
  'We choose courage.',
  'We choose action.',
  'We choose truth over comfort.'
];

