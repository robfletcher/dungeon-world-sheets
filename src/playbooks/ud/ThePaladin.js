export const thePaladin = {
  name: 'The Paladin',
  hitPoints: 20,
  damageModifier: 2,
  looks: [
    'Kind Eyes, Fiery Eyes, or Glowing Eyes',
    'Helmet, Styled Hair, or Bald',
    'Worn Holy Symbol, Fancy Holy Symbol, or Emblazoned Crest',
    'Fit Body, Bulky Body, or Thin Body'
  ],
  drives: [
    {
      name: 'Chivalry',
      description: 'Endanger yourself to defend those weaker than you.'
    },
    {
      name: 'Judgement',
      description: 'Deny mercy to a criminal or unbeliever.'
    },
    {
      name: 'Crusade',
      description: 'Lead others in righteous battle.'
    }
  ],
  background: [
    'What made you devote your life to your code?',
    'What most threatens to lead you astray?',
    'Where can others of your faith or order be found?',
    'What do most people simply <em>not do</em> because they are scared of evil?'
  ],
  bonds: [
    'Which of you is a better soul than you let on? ____',
    'Which of you am I watching closely? ____',
    'Which of you finds me unnerving? ____',
    'Which of you do I tolerate despite your… <em>misguided</em> ways? ____'
  ],
  baseLoad: 7,
  startingMoves: {
    backgroundOptions: [
      'Banneret',
      'Sacred Guardian',
      'Fanatical Hunter'
    ],
    allOf: [
      'Armored',
      'Paladin\'s Oath',
      'Conviction'
    ],
    oneOf: [
      'Lay on Hands',
      'I Am the Law',
      'Inquisition',
      'Beacon of Hope',
      'Quest',
      'Smite',
      'Shield of Faith',
    ]
  },
  moves: [
    {
      name: 'Banneret',
      description: '<p>When you <strong>raise your voice</strong>, it carries far and cuts through even the din of heavy battle. When you Recruit, add your CHA to the roll, and any followers you recruit start with +1 Loyalty.</p>'
    },
    {
      name: 'Sacred Guardian',
      description: '<p>When you <strong>Defend</strong>, you do not need to spend hold to redirect an attack from the thing you Defend to yourself; you can do it for free.</p>'
    },
    {
      name: 'Fanatical Hunter',
      description: '<p>When you <strong>pray for guidance, even for a moment, and ask, "What here is evil?"</strong> the GM will tell you honestly.</p>'
    },
    {
      name: 'Armored',
      description: '<p>You ignore the <em>clumsy</em> tag on armor you wear, and any armor you wear, not including shields, has -2 weight, to a minimum of zero.</p>'
    },
    {
      name: 'Paladin\'s Oath',
      description: '<p>You adhere to a strict moral code that grants you power beyond that wielded by normal folk. <strong>Choose up to four tenets of your oath:</strong></p>' +
        '<ul class="move-options">' +
        '<li>Never lie or cheat</li>' +
        '<li>Always protect the weak</li>' +
        '<li>Never let a crime go unpunished</li>' +
        '<li>Always offer enemies mercy</li>' +
        '<li>Never refuse to help someone in need</li>' +
        '<li>Never indulge in mortal pleasures</li>' +
        '<li>Never show cowardice or deny an honest call to battle</li>' +
        '<li>Never let a ________ live (this tenet supersedes any tenet of mercy)</li>' +
        '</ul>' +
        '<p>When you <strong>spend some time in religious observance</strong>, lose any Zeal you hold, then hold an amount of Zeal equal to the number of tenets of your oath. The maximum Zeal you can hold is equal to the number of tenets of your oath. When you <strong>act in service to your oath</strong>, you may spend a Zeal to:</p>' +
        '<ul>' +
        '<li>When Defying Danger, turn a result of 6- into a 7-9</li>' +
        '<li>When you take damage, reduce the damage by half after applying armor, rounding down in your favor</li>' +
        '<li>Gain advantage on your damage roll and add the forceful tag to your attack</li>' +
        '<li>Stand fast, keeping your position, stance, and course despite what befalls you</li>' +
        '<li>Shake off a poison or disease afflicting you</li>' +
        '</ul>' +
        '<p>When you <strong>break a tenet of your oath</strong>, lose any held Zeal, and that tenet no longer counts when you gain Zeal again until you atone for your misdeeds; the GM will tell you what you must do.</p>' +
        '<p>When you level up, you may cross off one of your tenets if you feel that you have fulfilled it completely or it no longer applies to you; if you do, you may select a new tenet in exchange. You may only do this once.</p>'
    },
    {
      name: 'Conviction',
      description: '<p>When you <strong>would Defy Danger due to pain, fear, or doubt</strong>, you cannot miss; treat any 6- result as a 7-9 instead.</p>'
    },
    {
      name: 'Lay on Hands',
      description: '<p>When you <strong>touch someone else, skin to skin, and pray for their well-being</strong>, choose one of the following:</p>' +
        '<ul>' +
        '<li>They heal 1d6+1 damage</li>' +
        '<li>They are cured of one mortal poison or disease</li>' +
        '</ul>' +
        '<p>Then roll+CHA.</p>' +
        '<ul>' +
        '<li>On a 10+, they are healed or cured, as you wished it.</li>' +
        '<li>On a 7-9, they are healed or cured, but the effect is taxing; you either spend 1 Zeal or whatever damage, poison, or disease you healed is transferred to you.</li>' +
        '</ul>'
    },
    {
      name: 'I Am the Law',
      description: '<p>When you <strong>invoke your divine authority to issue an order or a warning</strong>, roll+CHA.</p>' +
        '<ul>' +
        '<li>On a hit, they choose one:' +
        '<ul>' +
        '<li>Do what you say</li>' +
        '<li>Back away slowly, then flee</li>' +
        '<li>Attack you</li>' +
        '</ul>' +
        '</li>' +
        '<li>On a 10+, you can also tell what they\'re going to do and act first, and the next move you make against them gains advantage.</li>' +
        '</ul>'
    },
    {
      name: 'Inquisition',
      description: '<p>When you <strong>look into someone\'s eyes and gaze upon their soul</strong>, roll+CHA.</p>' +
        '<ul>' +
        '<li>On a 10+, hold 2.</li>' +
        '<li>On a 7-9, hold 1.</li>' +
        '<li>On a 6-, hold 1 anyway, but they also hold 1.</li>' +
        '</ul>' +
        '<p>While in their presence, spend a hold to ask them one of the following and get an honest answer:</p>' +
        '<ul>' +
        '<li>Are you lying?</li>' +
        '<li>Are you hiding something from me?</li>' +
        '</ul>' +
        '<p>If they answer "yes", your next move against them gains advantage.</p>'
    },
    {
      name: 'Beacon of Hope',
      description: '<p>When you <strong>make a heroic stand against the coming darkness</strong>, you immediately gain 1 Zeal, up to your normal maximum, and anyone standing on the front lines with you gains the benefit of your Conviction ability, until the darkness is defeated, you withdraw from the front lines, or you fall.</p>'
    },
    {
      name: 'Quest',
      description: '<p>When you <strong>dedicate yourself to a mission through prayer and ritual cleansing</strong>, state what you set out to do (such as discover the truth about something, or slay a blight on the land). The GM will give you a blessing (such as a voice that transcends language, or an invulnerability to bladed weapons); stay true to your goal, and this blessing remains yours.</p>' +
        '<p>When you <strong>complete your Quest</strong>, mark XP.<p>'
    },
    {
      name: 'Smite',
      description: '<p>When you <strong>Hack and Slash a creature of darkness or chaos</strong>, on a hit, you may spend a Zeal; if you do, your damage roll gains advantage and also choose one:</p>' +
        '<ul>' +
        '<li>You banish them if they lack anchor to this world</li>' +
        '<li>You brand them as an agent of chaos or darkness, describe how you mark them</li>' +
        '<li>You break their resolve, the GM will describe how</li>' +
        '</ul>'
    },
    {
      name: 'Shield of Faith',
      description: '<p>While you <strong>bear a shield</strong>, it can block insubstantial or magical attacks as if they were physical blows, and add the following option to Defend:</p>' +
        '<ul>' +
        '<li>You redirect a spell or magical effect from the thing you defend to the ground, making it fizzle harmlessly</li>' +
        '</ul>'
    },
    {
      name: 'Capstone',
      requiresLevel: 6,
      description: '<p>When you <strong>Defend</strong>, on a 12+ instead of gaining hold the attack you are defending against is repelled, against even insane odds, and you gain some advantage over the attackers, the GM will describe it.</p>'
    }
  ]
};
