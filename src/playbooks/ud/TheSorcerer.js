export const theSorcerer = {
  name: 'The Sorcerer',
  hitPoints: 12,
  damageModifier: -1,
  looks: [
    'Haunted Eyes, Sharp Eyes, or Crazy Eyes',
    'Styled Hair, Wild Hair, or Pointed Hat',
    'Worn Robes, Stylish Robes, or Strange Robes',
    'Pudgy Body, Creepy Body, or Thin Body'
  ],
  drives: [
    {
      name: 'Power',
      description: 'Use your magic to command the respect of others or enhance your prestige.'
    },
    {
      name: 'Knowledge',
      description: 'Discover something about a magical mystery.'
    },
    {
      name: 'Weird',
      description: 'Confront or embrace something strange or other-worldly.'
    }
  ],
  background: [
    'What price did you pay to learn magic?',
    'What is a "place of power" for you?',
    'How common is magic? How do most people react to it?',
    'What dire omens have you foreseen?'
  ],
  bonds: [
    'Which of you has a dark fate that I have foreseen? ____',
    'Which of you understands magic the least? ____',
    'Which of you is keeping secrets from me? ____'
  ],
  baseLoad: 5,
  startingMoves: {
    backgroundOptions: [
      'Arcane Student',
      'Natural Gift',
      'Sorcerer’s Apprentice'
    ],
    allOf: [
      'Cast a Spell',
      'Ritual'
    ],
    oneOf: [
      'Antiquarian',
      'Spellbreaker',
      'Know-It-All',
      'Black Magic',
      'Magic Circle',
      'Logical',
      'Cantrip',
    ]
  },
  moves: [
    {
      name: 'Arcane Student',
      description: '<p>When you <strong>spend some time in arcane study and research in an appropriate place</strong>, hold 1 Research if you spend a day or two, or 3 Research if you spend a week or more, and add the following to the Cast a Spell list:</p>' +
        '<ul>' +
        '<li>You spend 1 Research</li>' +
        '</ul>'
    },
    {
      name: 'Natural Gift',
      description: '<p>When a <strong>magical effect occurs in your vicinity</strong>, you can feel it, and ask the GM one of the following:</p>' +
        '<ul>' +
        '<li>What direction is it?</li>' +
        '<li>How powerful or intense is it?</li>' +
        '<li>What sort of magical energy is involved?</li>' +
        '</ul>'
    },
    {
      name: 'Sorcerer’s Apprentice',
      description: '<p>You learned from a great and powerful mentor, describe them and where they live! Your mentor has access to a place of power, which they will let you use if you ask nicely, and when you perform a Ritual in your mentor\'s place of power, you may substitute your mentor\'s assistance for one of the requirements, but their help won\'t come cheap.</p>'
    },
    {
      name: 'Cast a Spell',
      description: '<p>You have mastered the workings of magic. <strong>Choose two domains that you have mastered</strong>. If a domain asks you to choose a specialty, you can choose an additional specialty as your second choice.</p>' +
        '<ul class="move-options">' +
        '<li>Shaping and transmutation of corporeal flesh</li>' +
        '<li>Prophecy and divination</li>' +
        '<li>Warding and abjuration</li>' +
        '<li>Illusions and the workings of the mind</li>' +
        '<li>The command of elemental power (<em>Choose one</em>: fire, water, stone, air, plants, _______________)</li>' +
        '<li>Summoning and binding of spirits (<em>Choose one</em>: of nature, of the dead, from the seven hells, ________________)</li>' +
        '</ul>' +
        '<p>When you <strong>weave a spell using one of your mastered domains</strong>, describe what you are trying to accomplish and roll+INT.</p>' +
        '<ul>' +
        '<li>On a 10+, your spell takes effect as you desire, but choose one.</li>' +
        '<li>On a 7-9, you still get your desired effect, but choose one and the GM chooses one:' +
        '<ul>' +
        '<li>The magic slips from your grasp, producing additional, undesirable effects</li>' +
        '<li>The effect is temporary, limited, or otherwise reduced (if your spell would deal damage, you make the damage roll with disadvantage)</li>' +
        '<li>You put someone in a spot or draw unwanted attention</li>' +
        '<li>The spell disturbs the fabric of reality as it is cast; you have disadvantage to Cast a Spell until you take some time to rest and refocus yourself</li>' +
        '</ul>' +
        '</li>' +
        '</ul>' +
        '<p>If you Cast a Spell to inflict harm, it deals 1d6+1 damage and has either <em>hand</em> or <em>near</em> range, your choice.</p>' +
        '<p>When you reach level 6, choose an additional domain to master.</p>'
    },
    {
      name: 'Ritual',
      description: '<p>When you <strong>draw on a place of power to create a magical effect</strong>, tell the GM what you\'re trying to achieve. Ritual effects are always possible, but the GM will give you one to four of the following conditions:</p>' +
        '<ul>' +
        '<li>It\'s going to take days/weeks/months</li>' +
        '<li>First you must ________</li>' +
        '<li>You\'ll need help from ________</li>' +
        '<li>It will require a lot of money</li>' +
        '<li>The effect will be unreliable or limited</li>' +
        '<li>You and your allies will risk danger from ________</li>' +
        '<li>You\'ll have to disenchant ________ to do it</li>' +
        '</ul>'
    },
    {
      name: 'Antiquarian',
      description: '<p>When you <strong>closely examine an interesting object for the first time</strong>, roll+INT.</p>' +
        '<ul>' +
        '<li>On a 10+, ask the GM three of the following questions.</li>' +
        '<li>On 7-9, ask two.</li>' +
        '<li>On a 6-, ask two anyway, but the GM will give you a false answer for one of them:' +
        '<ul>' +
        '<li>What does this do, or what does it signify?</li>' +
        '<li>What is it made of?</li>' +
        '<li>Who created this object and how old is it?</li>' +
        '<li>Who used this object last?</li>' +
        '<li>What has been done to or with it recently?</li>' +
        '<li>What\'s wrong with it and how could it be fixed?</li>' +
        '<li>Does this have magical properties, and if so, what are they?</li>' +
        '</ul>' +
        '</li>' +
        '</ul>'
    },
    {
      name: 'Spellbreaker',
      description: '<p>When you <strong>counter a magical spell as it is being cast or unweave an ongoing magical effect</strong>, roll+INT.</p>' +
        '<ul>' +
        '<li>On a hit, the spell is successfully countered or disrupted.</li>' +
        '<li>On a 7-9, choose one:' +
        '<ul>' +
        '<li>The unraveled magic causes some undesirable collateral damage or side effects</li>' +
        '<li>A weaker version gets through or lingers, or it is only temporarily suppressed</li>' +
        '</ul>' +
        '</li>' +
        '</ul>'
    },
    {
      name: 'Know-It-All',
      description: '<p>When you <strong>Spout Lore</strong>, on a 10+ you may also ask the GM a follow- up question about the subject, they will answer truthfully.</p>' +
        '<p>Additionally, when you Spout Lore, hit or miss, you may also ask the GM "How or where could I find out more?" after they reply to your original question.</p>'
    },
    {
      name: 'Black Magic',
      description: '<p>When you <strong>Cast a Spell to deal damage</strong>, add one of the following tags to your effect: <em>forceful</em>, <em>messy</em>, <em>+INT piercing</em>, <em>area</em>, <em>far</em> range</p>'
    },
    {
      name: 'Magic Circle',
      description: '<p>When you <strong>have adequate time, arcane materials, and a safe place to work</strong>, you can create your own place of power. Describe to the GM what kind of power it is and how you\'re binding it to this place, which may include paying a cost described by the GM, and the GM will tell you one problem or limitation that you\'ll have to deal with when you use it.</p>'
    },
    {
      name: 'Logical',
      description: '<p>When you <strong>Discern Realities by using strict deduction or logic to analyze your surroundings</strong>, you roll with INT instead of WIS.</p>'
    },
    {
      name: 'Cantrip',
      description: '<p>When you <strong>conjure a minor magical effect</strong>, roll+INT.</p>' +
        '<ul>' +
        '<li>On a hit, choose one:' +
        '<ul>' +
        '<li>An item you touch glows with arcane light, about as bright as a torch, until you dispel it or it leaves your presence</li>' +
        '<li>The GM will tell you what here is magical</li>' +
        '<li>You make cosmetic changes to an object you touch: clean it, soil it, cool it, warm it, flavor it, or change its color</li>' +
        '<li>You repair a single break or tear in an object you hold</li>' +
        '<li>You slowly telekinetically lift or move an unattended object that you can see which weighs no more than one pound</li>' +
        '</ul>' +
        '</li>' +
        '<li>On a 7-9, you also choose an option from the Cast a Spell list.</li>' +
        '<li>On a 6-, the effect still occurs, but the GM chooses an option from the Cast a Spell list.</li>' +
        '</ul>'
    },
    {
      name: 'Capstone',
      requiresLevel: 6,
      description: '<p>When you <strong>Cast a Spell</strong>, on a 12+ you succeed beyond all expectation; choose no options from the list</p>'
    }
  ]
};
