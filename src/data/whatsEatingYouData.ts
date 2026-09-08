export interface CategoryOption {
  id: string;
  label: string;
  descriptor: string;
  status: 'active' | 'coming_soon';
}

export interface QuestionChoice {
  id: string;
  label: string;
  detail?: string;
}

export type QuestionType = 'choice' | 'scale' | 'text';

export interface Question {
  id: string;
  category: string;
  stepNumber: number;
  type: QuestionType;
  headline: string;
  subheading?: string;
  options?: QuestionChoice[];
  placeholder?: string;
  scaleLabels?: { min: string; max: string };
}

export interface RealityCheckResult {
  categoryLabel: string;
  assessmentHeadline: string;
  whatsTrue: string;
  whatYouCanControl: [string, string, string];
  doThisNext: string;
  closingThought: string;
}

// The 8 Core Categories
export const CATEGORIES: CategoryOption[] = [
  { id: 'money', label: 'Money', descriptor: 'Debt, spending, income, the comparison trap.', status: 'active' },
  { id: 'relationship', label: 'Relationship', descriptor: 'Resentment, unspoken words, blurred boundaries.', status: 'active' },
  { id: 'direction', label: 'Direction', descriptor: 'Meaningless routine, paralysis, the 5-year drift.', status: 'active' },
  { id: 'work', label: 'Work', descriptor: 'Burnout, political dread, quiet exhaustion.', status: 'coming_soon' },
  { id: 'confidence', label: 'Confidence', descriptor: 'Imposter syndrome, hesitation, public shame.', status: 'coming_soon' },
  { id: 'motivation', label: 'Motivation', descriptor: 'Dopamine cycles, inertia, unkept promises.', status: 'coming_soon' },
  { id: 'anger', label: 'Anger', descriptor: 'Chronic irritation, bitterness, cold grudges.', status: 'coming_soon' },
  { id: 'loneliness', label: 'Loneliness', descriptor: 'Isolation, emotional distance, unseen effort.', status: 'coming_soon' },
];

// Branch Questions
export const QUESTIONS_BY_CATEGORY: Record<string, Question[]> = {
  money: [
    {
      id: 'money_q1',
      category: 'money',
      stepNumber: 1,
      type: 'choice',
      headline: 'Okay. What’s actually wrong?',
      subheading: 'Identify the primary friction before rationalizing it.',
      options: [
        { id: 'debt', label: 'I’m drowning in debt' },
        { id: 'income', label: 'I don’t make enough' },
        { id: 'spending', label: 'I spend too much' },
        { id: 'behind', label: 'I feel behind everyone else' },
        { id: 'blind', label: 'I have no idea where my money goes' },
      ],
    },
    {
      id: 'money_q2',
      category: 'money',
      stepNumber: 2,
      type: 'choice',
      headline: 'Where does the panic actually come from?',
      subheading: 'The math creates the problem; your reaction creates the suffering.',
      options: [
        { id: 'balance_dread', label: 'Looking at bank balances feels like physical dread' },
        { id: 'dopamine_hit', label: 'Buying things gives me a temporary hit of control or relief' },
        { id: 'social_envy', label: 'Comparing my life to peers and feeds makes me sick' },
        { id: 'obligations', label: 'Carrying lifestyle expenses I didn’t have the courage to decline' },
      ],
    },
    {
      id: 'money_q3',
      category: 'money',
      stepNumber: 3,
      type: 'choice',
      headline: 'How much of this anxiety is survival versus comfort or status?',
      subheading: 'Separate genuine physical danger from bruised pride.',
      options: [
        { id: 'survival', label: 'Survival — basic food, shelter, and essentials are genuinely threatened' },
        { id: 'comfort', label: 'Comfort — I dread forfeiting convenience, dining, and effortless ease' },
        { id: 'status', label: 'Status — I am terrified of people discovering that I’m struggling' },
        { id: 'fog', label: 'Fog — I’m running blind without having audited the actual numbers' },
      ],
    },
    {
      id: 'money_q4',
      category: 'money',
      stepNumber: 4,
      type: 'text',
      headline: 'What is the single expense or purchase you know you should eliminate today?',
      subheading: 'Name it plainly. You are not required to justify keeping it.',
      placeholder: 'E.g., unused membership, takeout habit, financing an image...',
    },
  ],

  relationship: [
    {
      id: 'rel_q1',
      category: 'relationship',
      stepNumber: 1,
      type: 'choice',
      headline: 'What is actually happening?',
      subheading: 'Strip away the polite narrative.',
      options: [
        { id: 'resentment', label: 'I’m resenting someone I’m supposed to love' },
        { id: 'dodging_talk', label: 'A crucial conversation needs to happen, and I’m dodging it' },
        { id: 'invisible', label: 'I feel taken for granted or chronically invisible' },
        { id: 'dead_dynamic', label: 'I’m clutching onto a dynamic that is already dead' },
        { id: 'mind_reading', label: 'I expect them to know what I need without having to say it' },
      ],
    },
    {
      id: 'rel_q2',
      category: 'relationship',
      stepNumber: 2,
      type: 'choice',
      headline: 'Be honest. What did you concede that you never wanted to accept?',
      subheading: 'Where did your own compliance enable this outcome?',
      options: [
        { id: 'silent_yes', label: 'I said yes when every fiber of my being wanted to say no' },
        { id: 'martyr_silence', label: 'I suffered in silence hoping they would notice and reward it' },
        { id: 'bought_peace', label: 'I traded my boundaries just to avoid an uncomfortable argument' },
        { id: 'emotional_hostage', label: 'I gave them total custody over my daily mood and validation' },
      ],
    },
    {
      id: 'rel_q3',
      category: 'relationship',
      stepNumber: 3,
      type: 'choice',
      headline: 'What are you trying to control about them?',
      subheading: 'Suffering begins where your control ends.',
      options: [
        { id: 'their_reaction', label: 'Their mood and whether they get upset with me' },
        { id: 'their_shortcomings', label: 'Their personal flaws, habits, and lack of ambition' },
        { id: 'preventing_loss', label: 'Preventing the relationship from ending at all costs' },
        { id: 'no_illusions', label: 'Nothing — I simply lack the resolve to decide whether to stay or walk' },
      ],
    },
    {
      id: 'rel_q4',
      category: 'relationship',
      stepNumber: 4,
      type: 'text',
      headline: 'What is the one sentence you have been rehearsing in your head for weeks?',
      subheading: 'Type the raw truth without polishing it.',
      placeholder: 'E.g., I cannot keep pretending this arrangement works for me...',
    },
  ],

  direction: [
    {
      id: 'dir_q1',
      category: 'direction',
      stepNumber: 1,
      type: 'choice',
      headline: 'Where is the fog thickest?',
      subheading: 'Identify the nature of your paralysis.',
      options: [
        { id: 'meaningless', label: 'I’m trading my finite life for work that feels completely hollow' },
        { id: 'scattered', label: 'I have too many options and commit ruthlessly to none of them' },
        { id: 'late_start', label: 'I’m terrified it’s too late to change course at this point' },
        { id: 'waiting_certainty', label: 'I’m waiting for certainty before taking the first real step' },
        { id: 'paralyzed', label: 'I know exactly what I should do, but I sit motionless' },
      ],
    },
    {
      id: 'dir_q2',
      category: 'direction',
      stepNumber: 2,
      type: 'choice',
      headline: 'What defense mechanism are you using to avoid moving?',
      subheading: 'Inaction always wears a clever mask.',
      options: [
        { id: 'endless_research', label: 'Researching, reading, and planning instead of executing' },
        { id: 'waiting_for_mood', label: 'Waiting until I feel motivated, confident, or less tired' },
        { id: 'spectator_fear', label: 'Obsessing over what peers, family, or colleagues will think' },
        { id: 'perfection_shield', label: 'Dreading that my best effort will turn out to be mediocre' },
      ],
    },
    {
      id: 'dir_q3',
      category: 'direction',
      stepNumber: 3,
      type: 'choice',
      headline: 'If you repeat this exact week for five more years, what happens?',
      subheading: 'Look straight at the arithmetic of your trajectory.',
      options: [
        { id: 'same_chair', label: 'In the exact same chair, five years older and full of quiet bitterness' },
        { id: 'golden_coffin', label: 'Financially comfortable, but spiritually hollowed out' },
        { id: 'burned_out', label: 'Completely burned out from living a script written by other people' },
        { id: 'wasted_capacity', label: 'Haunted by capability I was too cautious to ever test' },
      ],
    },
    {
      id: 'dir_q4',
      category: 'direction',
      stepNumber: 4,
      type: 'text',
      headline: 'Name the single project, move, or decision you keep deferring to "someday".',
      subheading: 'The thing you think about when everything goes quiet.',
      placeholder: 'E.g., leaving the firm, publishing the work, initiating the move...',
    },
  ],
};

// Deterministic, personalized evaluation engine
export function evaluateRealityCheck(
  categoryId: string,
  answers: Record<string, string>
): RealityCheckResult {
  if (categoryId === 'money') {
    const q1 = answers['money_q1'] || 'debt';
    const q2 = answers['money_q2'] || 'balance_dread';
    const q3 = answers['money_q3'] || 'comfort';
    const q4Text = answers['money_q4']?.trim();

    let headline = 'THE DEBT DELUSION';
    let whatsTrue = '';
    let controlPoints: [string, string, string];
    let doThisNext = '';

    if (q1 === 'debt') {
      headline = q3 === 'status' ? 'THE FINANCED FACADE' : 'THE COMPOUNDING MONSTER';
      if (q3 === 'survival') {
        whatsTrue =
          'Your nervous system is overwhelmed because basic security feels endangered. That stress is real, but debt is not a moral failure—it is arithmetic. Every day you avoid looking at the exact figure, your imagination doubles its size. The interest is accumulating, but the psychological penalty of looking away is compounding faster.';
      } else if (q3 === 'status') {
        whatsTrue =
          'You are financing an image for spectators who are not paying attention. The debt is the direct tax on your reluctance to admit that your current lifestyle cannot be maintained. Carrying double-digit interest to preserve appearances is voluntary servitude.';
      } else {
        whatsTrue =
          'Debt is not an abstract cloud; it is a claim someone else has on your future hours. You have been treating credit as a buffer against emotional discomfort. The math does not negotiate with your mood—it only tabulates what you allow.';
      }
    } else if (q1 === 'spending') {
      headline = 'THE ANESTHESIA OF CONSUMPTION';
      whatsTrue =
        'Spending money is your fast-acting sedative. When work, fatigue, or frustration peak, purchasing provides a momentary flash of control. But buying things you do not need with money you cannot spare is an expensive way to numb feelings that will still be there when the package arrives.';
    } else if (q1 === 'behind') {
      headline = 'THE CURATED MIRAGE';
      whatsTrue =
        'You are comparing your backstage wreckage to everyone else’s polished stage lights. Half the people you feel behind are borrowing their lifestyle on credit cards and quiet terror. You are burning your internal peace over a fabricated benchmark.';
    } else if (q1 === 'income') {
      headline = 'THE CAPACITY GAP';
      whatsTrue =
        'You have reached the ceiling of what your current leverage provides. Complaining about the deficit will not expand your income. If the outflow exceeds what your labor commands, you must either radically compress your desires or acquire skills the market actually values.';
    } else {
      // blind
      headline = 'THE COWARDICE OF AMBIGUITY';
      whatsTrue =
        'You keep your finances blurry on purpose. As long as you don’t know the exact balance, you can pretend things are manageable. But ambiguity is not peace—it is perpetual, low-frequency anxiety vibrating under every decision you make.';
    }

    // Dynamic control points
    const control1 =
      q2 === 'balance_dread'
        ? 'Looking directly at your exact balances without flinching, self-pity, or panic.'
        : q2 === 'social_envy'
        ? 'Unfollowing or muting every account that triggers your financial resentment.'
        : 'Freezing non-essential transactions for 72 hours to break the impulse loop.';

    const control2 =
      q3 === 'status'
        ? 'Saying "I cannot afford that right now" with zero apology or explanation.'
        : q3 === 'survival'
        ? 'Triaging absolute essentials: shelter, food, utilities first; everything else waits.'
        : 'Auditing your fixed recurring subscriptions with zero sentimental attachment.';

    const control3 =
      'Treating money strictly as a tool of personal autonomy, not an emotional scoreboard.';

    controlPoints = [control1, control2, control3];

    // Dynamic Do This Next
    if (q4Text && q4Text.length > 2) {
      doThisNext = `Cancel or confront "${q4Text}" today. If it is a subscription, delete the account in the next 15 minutes. If it is a debt or purchase, write down the exact cost on a physical index card and face it.`;
    } else if (q2 === 'balance_dread' || q1 === 'blind') {
      doThisNext =
        'Log into your primary bank account right now. Open a blank document or notebook. Write down your total liquid cash and total debt in raw numbers. Look at it for two full minutes in silence.';
    } else {
      doThisNext =
        'Declare an absolute zero-spend freeze for the next 48 hours. No takeout, no incidental purchases, no digital impulse buys. Eat what is in your pantry and notice the urge to spend as it arises.';
    }

    return {
      categoryLabel: 'Money',
      assessmentHeadline: headline,
      whatsTrue,
      whatYouCanControl: controlPoints,
      doThisNext,
      closingThought: 'You don’t need to solve your life tonight.\nYou need to stop avoiding the next move.',
    };
  }

  if (categoryId === 'relationship') {
    const q1 = answers['rel_q1'] || 'resentment';
    const q2 = answers['rel_q2'] || 'silent_yes';
    const q3 = answers['rel_q3'] || 'their_reaction';
    const q4Text = answers['rel_q4']?.trim();

    let headline = 'THE RESENTMENT LEDGER';
    let whatsTrue = '';
    let controlPoints: [string, string, string];
    let doThisNext = '';

    if (q1 === 'resentment') {
      headline = 'THE POISON OF SILENT COMPLIANCE';
      whatsTrue =
        'Resentment is the emotional interest on boundaries you failed to set. You blame the other person for taking advantage of you, but you were the one who handed them the keys. You cannot hold someone responsible for violating a rule that you never had the spine to speak aloud.';
    } else if (q1 === 'dodging_talk') {
      headline = 'THE COMFORT TAX';
      whatsTrue =
        'You are trading long-term integrity for temporary peace. Every day you postpone this conversation, the unspoken words turn toxic. You are not protecting the other person from getting hurt—you are protecting yourself from twenty uncomfortable minutes.';
    } else if (q1 === 'invisible') {
      headline = 'THE MARTYR’S TRAP';
      whatsTrue =
        'Suffering in silence and expecting applause for endurance is an immature defense. Other people are consumed by their own lives, not reading your subtle cues. If you refuse to state your worth and standards plainly, you grant automatic permission for neglect.';
    } else if (q1 === 'dead_dynamic') {
      headline = 'MOURNING A GHOST';
      whatsTrue =
        'You are clinging to who this person used to be, or who you hoped they would become. The relationship as it currently exists is draining you. Staying out of nostalgia or fear of empty evenings is prolonging an autopsy.';
    } else {
      headline = 'THE TELEPATHY ILLUSION';
      whatsTrue =
        'Expecting someone to decipher your moods without clean communication is setting a trap for them to fail. You use their inability to guess your needs as evidence that they don’t care. Speak with direct clarity or forfeit the right to complain.';
    }

    const control1 =
      q2 === 'silent_yes' || q2 === 'bought_peace'
        ? 'Saying no the very next time you feel hesitation, without inventing fake excuses.'
        : 'Speaking your perspective neutrally, without tears, drama, or accusation.';

    const control2 =
      q3 === 'their_reaction'
        ? 'Allowing the other person to feel anger or disappointment without rushing to soothe them.'
        : 'Deciding what you will do if their behavior stays identical, rather than demanding they change.';

    const control3 =
      'Protecting your own dignity over maintaining an artificial, polite harmony.';

    controlPoints = [control1, control2, control3];

    if (q4Text && q4Text.length > 2) {
      doThisNext = `Take that rehearsed sentence: "${q4Text}". Strip out the defensive fluff. Send a calm message today: "We need 20 minutes tonight to talk through something important. No screens, just us."`;
    } else if (q1 === 'dodging_talk') {
      doThisNext =
        'Send this exact message right now: "Hey, let’s find 20 minutes tonight to talk through something on my mind calmly." Do not debate over text. Set the appointment.';
    } else {
      doThisNext =
        'The next time this person asks for your time, agreement, or concession, pause for three seconds. If it violates your peace, say: "I’m not able to do that this time." Stop talking. Let the silence stand.';
    }

    return {
      categoryLabel: 'Relationship',
      assessmentHeadline: headline,
      whatsTrue,
      whatYouCanControl: controlPoints,
      doThisNext,
      closingThought: 'You don’t need to solve your life tonight.\nYou need to stop avoiding the next move.',
    };
  }

  // direction (default fallback for active categories)
  const q1 = answers['dir_q1'] || 'paralyzed';
  const q2 = answers['dir_q2'] || 'endless_research';
  const q3 = answers['dir_q3'] || 'same_chair';
  const q4Text = answers['dir_q4']?.trim();

  let headline = 'THE IMMOBILITY TRAP';
  let whatsTrue = '';
  let controlPoints: [string, string, string];
  let doThisNext = '';

  if (q1 === 'scattered') {
    headline = 'THE ILLUSION OF OPTIONALITY';
    whatsTrue =
      'You don’t have an abundance of interests; you have a fear of failure. Juggling five half-hearted pursuits allows you to preserve the fantasy of unlimited potential without ever risking a real verdict on your ability. By committing to nothing, you guarantee mediocrity in everything.';
  } else if (q1 === 'waiting_certainty') {
    headline = 'THE REASSURANCE ADDICTION';
    whatsTrue =
      'Certainty is a myth invented by spectators. You are waiting for a guarantee of victory before stepping onto the field. Clarity does not precede action; it is generated by the friction of movement. Every day you spend waiting for a green light is time you will never buy back.';
  } else if (q1 === 'meaningless') {
    headline = 'THE LEASED MORTALITY';
    whatsTrue =
      'You are trading your irrecoverable days for predictable comfort. If the work feels hollow today, another five years will not sanctify it. You don’t need an elaborate multi-year master plan—you need the courage to stop pouring your vitality into a tomb.';
  } else if (q1 === 'late_start') {
    headline = 'THE FICTION OF TIMING';
    whatsTrue =
      'You are using your age as an alibi for cowardice. The time will pass regardless of whether you begin or remain idle. Mourning the years you wasted will not resurrect them; it only wastes the hours remaining in front of you.';
  } else {
    headline = 'THE AMATEUR’S PARALYSIS';
    whatsTrue =
      'You know what you need to do, but you are waiting to feel like doing it. Mood is an unreliable partner. Waiting for motivation before acting is how dreams decay into quiet bitterness. Discipline is doing the work before your emotions submit an opinion.';
  }

  const control1 =
    q2 === 'endless_research'
      ? 'Closing all guides, books, and tutorial tabs and producing one raw, imperfect page of work.'
      : 'Working for 30 minutes before checking your phone, messages, or news.';

  const control2 =
    q3 === 'spectator_fear' || q2 === 'spectator_fear'
      ? 'Accepting that the people you fear disappointing will not be present on your deathbed.'
      : 'Eliminating two superficial obligations this week that siphon your mental bandwidth.';

  const control3 =
    'Choosing one single pursuit and letting the other alternatives starve for the next 30 days.';

  controlPoints = [control1, control2, control3];

  if (q4Text && q4Text.length > 2) {
    doThisNext = `Open a blank document or workspace for "${q4Text}". Set a timer for 25 minutes. Do not open another browser tab or check notifications. Work until the timer rings.`;
  } else if (q1 === 'scattered') {
    doThisNext =
      'Write down your top three ideas on a piece of paper. Cross out two of them with a thick black pen. The remaining one gets all of your focus for the next 14 days.';
  } else {
    doThisNext =
      'Pick the single most uncomfortable task you have postponed this week. Set a timer for 20 minutes right now. Start immediately. No background music, no excuses.';
  }

  return {
    categoryLabel: 'Direction',
    assessmentHeadline: headline,
    whatsTrue,
    whatYouCanControl: controlPoints,
    doThisNext,
    closingThought: 'You don’t need to solve your life tonight.\nYou need to stop avoiding the next move.',
  };
}
