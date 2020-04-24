export const theCleric = {
  name: 'The Cleric',
  hitPoints: 16,
  damageModifier: 0,
  looks: [
    'Kind Eyes, Sharp Eyes, or Sad Eyes',
    'Tonsure, Strange Hair, or Bald',
    'Flowing Robes, Habit, or Common Garb',
    'Thin Body, Knobby Body, or Flabby Body'
  ],
  drives: [
    {
      name: 'Pilgrim',
      description: 'Bring the light of your faith to a new place or people and leave them better for it.'
    },
    {
      name: 'Evangelist',
      description: 'Prove the superiority of your church or god.'
    },
    {
      name: 'Shepherd',
      description: 'Endanger yourself to help another.'
    }
  ],
  background: [
    'How is your deity worshipped?',
    'What role does (your) religion play in the everyday life of most people?',
    'What downside does your religion or service have for you?',
    'What does your deity command you to always do? To never do?'
  ],
  bonds: [
    'Which of you is the most faithful in my eyes? ____',
    'Which of you is the <em>least</em> faithful in my eyes? ____',
    'Which of you most needs my protection? ____',
    'Which of you has the strongest soul, even if your faith is misguided? ____'
  ],
  baseLoad: 5,
  startingMoves: {
    backgroundOptions: [
      'Cloistered Monk',
      'Militant Order',
      'Miracle Worker'
    ],
    allOf: [
      'Deity',
      'Invocation',
      'Divine Ward'
    ],
    oneOf: [
      'Purification',
      'The Scales of Life and Death',
      'Orison for Guidance',
      'Martyr',
      'Lead the Flock',
      'Bear Witness',
      'Anathema',
    ]
  },
  moves: [
    {
      name: 'Cloistered Monk',
      description: '<p>When you <strong>Spout Lore or perform First Aid</strong>, you roll with WIS instead of INT.</p>'
    },
    {
      name: 'Militant Order',
      description: '<p>You ignore the clumsy tag on armor you wear, and any armor you wear, not including shields, has -2 weight, to a minimum of zero.</p>'
    },
    {
      name: 'Miracle Worker',
      description: '<ul class="move-options"><li data-value="Miracle Worker Hold">When you fulfill your deity\'s Demands, mark this box.</li></ul>' +
        '<p>When you or an ally suffers harm, you may erase that mark to call on your deity, who intervenes with an appropriate manifestation and negates the harm.</p>'
    },
    {
      name: 'Deity',
      description: '<p>You serve and worship some deity, who grants you power. Give your deity a name and define your deity\'s domain by filling in each blank:</p>'+
      '<ul class="move-options">' +
          '<li class="move-option-custom-value" data-option-id="Controls"><strong>Controls</strong> (the sun, the seas, the skies):</li>' +
          '<li class="move-option-custom-value" data-option-id="Represents"><strong>Represents</strong> (love, death, war, wind):</li>' +
          '<li class="move-option-custom-value" data-option-id="Worshippers"><strong>Worshippers</strong> (nobles, dwarves, wizards):</li>' +
          '<li class="move-option-custom-value" data-option-id="Enemies"><strong>Enemies</strong> (demons, undead, heretics): </li>' +
          '<li class="move-option-custom-value" data-option-id="Demands"><strong>Demands</strong> (sacrifices, secrets, victory):</li>' +
        '</ul>' +
        '<p>When you reach level 6, choose one additional facet for your deity; something else that they control, represent, or another type of worshipper, enemy or demand.</p>'
    },
    {
      name: 'Invocation',
      description: '<p>When you <strong>call out for your deity\'s aid in a time of need</strong>, choose a Blessing:</p>'+
        '<ul>' +
        '<li>Your invocation manipulates the realm your deity Controls</li>' +
        '<li>Your invocation commands something your deity Represents</li>' +
        '<li>Your invocation bolsters your deity\'s Worshippers</li>' +
        '<li>Your invocation rebukes or repels your deity\'s Enemies</li>' +
        '</ul>' +
        '<p>…and roll+WIS.</p>' +
        '<ul>' +
        '<li>On a hit, your deity will intervene on your behalf according to your chosen Blessing, the GM will tell you how.</li>' +
        '<li>On a 7-9, you will also need to choose a Requirement:' +
        '<ul>' +
        '<li>Your invocation is obvious and immediate, drawing attention to you</li>' +
        '<li>The intervention is subtle or takes a while to manifest</li>' +
        '<li>Your deity asks you to fulfill their Demands in return</li>' +
        '<li>The experience overwhelms you; you get disadvantage on all WIS rolls until you take a few minutes to clear your head (you cannot choose this if you are already affected by it)</li>' +
        '</ul>' +
        '</li>' +
        '</ul>'
    },
    {
      name: 'Divine Ward',
      description: '<p>When you <strong>call upon your deity for protection for yourself or an ally</strong>, roll+WIS.</p>' +
        '<ul>' +
        '<li>On a 10+, grant two of the following effects to the subject of your prayers.</li>' +
        '<li>On a 7-9, grant one, and choose a Requirement from the Invocation list as well.</li>' +
        '</ul>' +
        '<ul>' +
        '<li>They are healed for 1d6+1 HP</li>' +
        '<li>The next damage roll made against them has disadvantage</li>' +
        '<li>If they are Defying Danger now or in the next few moments, their roll gains advantage</li>' +
        '<li>An enemy facing them is briefly driven back</li>' +
        '</ul>'
    },
    {
      name: 'Purification',
      description: '<p>Add the following options to Divine Ward:</p>' +
        '<ul>' +
        '<li>They are cured of a poison or disease afflicting them</li>' +
        '<li>A malign influence upon their mind or soul is expelled</li>' +
        '</ul>'
    },
    {
      name: 'The Scales of Life and Death',
      description: '<p>When <strong>someone else takes their Last Breath in your presence</strong>, you may Aid them, but on a 7-9 Death will rope you into its bargain.</p>' +
        '<p>Additionally, when you <strong>reduce a creature to zero HP or perform funerary rites over a recently deceased creature</strong>, its soul is put to rest and it cannot be raised as any kind of undead creature. If the creature is already undead or lacks a soul, its evil influence is banished instead.</p>'
    },
    {
      name: 'Orison for Guidance',
      description: '<p>When you <strong>fulfill your deity\'s Demands and pray for guidance</strong>, you are granted some useful knowledge or a boon; the GM will tell you what. In return, your deity tells you what it would have you do. If you do it, mark XP.</p>'
    },
    {
      name: 'Martyr',
      description: '<p>When you <strong>take damage and embrace the pain while crying out to your deity for deliverance</strong>, you take an additional +1d6 damage, ignoring armor, and the next move you make gains advantage.</p>'
    },
    {
      name: 'Lead the Flock',
      description: '<p>When you <strong>preach to a mob</strong>, roll+CHA.</p>' +
        '<ul>' +
        '<li>On a 10+, hold 3.</li>' +
        '<li>On a 7-9, hold 1.</li>' +
        '<li>On a 6-, the mob turns on you.</li>' +
        '</ul>' +
        '<p>Spend a hold to do one of the following:</p>' +
        '<ul>' +
        '<li>Bring people forward and deliver them to you</li>' +
        '<li>Bring forward all their precious things</li>' +
        '<li>Unite and fight for you</li>' +
        '<li>Fall into a frenzy of emotion: joy, sorrow, or rage, as you choose</li>' +
        '<li>Go quietly back to their lives</li>' +
        '</ul>'
    },
    {
      name: 'Bear Witness',
      description: '<p>When you <strong>approach an enemy to negotiate in good faith</strong>, they will at least hear you out. Even the most debased and savage foe will delay violence until you\'ve had your say, though they must be able to understand you. Mindless or unintelligent enemies won\'t be affected.</p>' +
        '<p>Additionally, when you <strong>speak the truth with conviction and candor</strong>, none can doubt you. They might deny what you say, but in their hearts they recognize the truth.<p>'
    },
    {
      name: 'Anathema',
      description: '<p>When you <strong>Hack and Slash your deity\'s Enemies</strong>, you may roll with WIS instead of STR, and on a hit choose one in addition to dealing your damage:</p>' +
        '<ul>' +
        '<li>Your attack ignores its armor or other defenses</li>' +
        '<li>You suppress one of its unnatural powers</li>' +
        '<li>You force it from its host</li>' +
        '</ul>'
    },
    {
      name: 'Capstone',
      requiresLevel: 6,
      description: '<p>When you <strong>use Invocation</strong>, on a 12+ your deity\'s magnificence shines through you; you describe how your chosen Blessing manifests.</p>'
    }
  ]
};
