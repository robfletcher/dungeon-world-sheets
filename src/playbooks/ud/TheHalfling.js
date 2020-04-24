export const theHalfling = {
  name: 'The Halfling',
  hitPoints: 16,
  damageModifier: 0,
  looks: [
    'Twinkling Eyes, Clever Eyes, or Piercing Eyes',
    'Thick Sideburns, Curly Hair, or Hooded Face',
    'Sensible Clothes, Traveling Clothes, or Borrowed Clothes',
    'Rotund Body, Wiry Body, or Hairy Body'
  ],
  drives: [
    {
      name: 'Hope',
      description: 'Give hope or cheer to someone who needs it.'
    },
    {
      name: 'Wanderlust',
      description: 'Experience something you can tell your friends back home about in a tall tale, and take a souvenir to prove it.'
    },
    {
      name: 'Mischief',
      description: 'Evade responsibility for the consequences of your actions.'
    }
  ],
  background: [
    'What tradition do halflings always observe? What common human tradition would no halfling ever do?',
    'How well known are your kind among humans? Do your people have some history, friendly or not?',
    'What are you most likely to get into trouble for?'
  ],
  bonds: [
    'Which of you dragged me from my home and on the road to adventure? ____',
    'Which of you really enjoys the finer things in life? ____',
    'Who will be in the most trouble if they don\'t get me out of this mess? ____',
    'Who doesn\'t think I\'m cut out for hardscrabble adventure? ____',
    'Whose pockets have I dipped my fingers into before? ____'
  ],
  baseLoad: 5,
  startingMoves: {
    backgroundOptions: [
      'Stout',
      'Lightfoot',
      'Tallfellow'
    ],
    allOf: [
      'Halfling Bravery',
      'Curiosity',
      'Troublemaker'
    ],
    oneOf: [
      'Distracting Shot',
      'Deep Pockets',
      'Sting',
      'Beneath Notice',
      'Truth to Power',
      'Escape Artist',
      'Burglar',
    ]
  },
  moves: [
    {
      name: 'Stout',
      description: '<p>You\'re more renowned for cooking and gardening than adventuring. When you Make Camp and handle all of the cooking, choose someone in your party—or yourself; they heal an additional +1d6 HP. If you spend an extra Supply to make a feast while Making Camp, everyone heals an additional +1d6 HP instead.</p>'
    },
    {
      name: 'Lightfoot',
      description: '<p>The Big Folk tend to underestimate you. When you <strong>are outnumbered or facing a foe bigger than you</strong>, you have advantage to hide from, escape from, or sneak past them.</p>'
    },
    {
      name: 'Tallfellow',
      description: '<p>Your people have blended well with other civilized races. Add the following Bond to your sheet, bringing your total Bonds to six:</p>' +
        '<ul>' +
        '<li>Who treats me as an equal despite our differences? ____</li>' +
        '</ul>'
    },
    {
      name: 'Uncanny Grace',
      description: '<p>Despite their size, halflings are capable of great courage. When you <strong>Make Camp</strong>, you may share a tale or anecdote about home with someone else, or ask them to share with you; if you do, lose any Brave you hold and roll+Bond with them.</p>' +
        '<ul>' +
        '<li>On a 10+, hold 3 Brave.</li>' +
        '<li>On a 7-9, hold 2 Brave.</li>' +
        '<li>On a 6-, hold 1 Brave anyway, but you must also confess a lingering doubt or secret fear.</li>' +
        '</ul>' +
        '<p>You may spend a Brave to do one of the following, describing how you do it:</p>' +
        '<ul>' +
        '<li>Give someone courage (including yourself); they shake off the effects of any fear, doubt, or corruption</li>' +
        '<li>Throw caution to the wind; gain advantage to any move, but treat a 10+ as a 7-9 result</li>' +
        '<li>Endure harm through grit, cunning, or outright luck; when you would take damage, reduce that damage by half, after armor is applied</li>' +
        '</ul>'
    },
    {
      name: 'Curiosity',
      description: '<p>When you <strong>put yourself at risk to check something out</strong>, ask the GM any one question related to the risks and roll+whatever the GM thinks most appropriate.</p>' +
        '<ul>' +
        '<li>On a 10+, the GM will answer it, as clearly as the circumstances allow.</li>' +
        '<li>On a 7-9, choose one.</li>' +
        '<li>On a 6-, both:' +
        '<ul>' +
        '<li>The GM will tell you what more you need to do to find the answer</li>' +
        '<li>Your curiosity gets you in trouble, the GM will tell you how</li>' +
        '</ul>' +
        '</li>' +
        '</ul>'
    },
    {
      name: 'Troublemaker',
      description: '<p>When <strong>someone else Aids or Interferes with you</strong>, their roll gains advantage, but they treat a 10+ as a 7-9 result.</p>' +
        '<p>When you <strong>do something so incredibly foolhardy that everyone else just stares at you in disbelief</strong>, you get +1 Brave. You\'ll probably need it soon.</p>'
    },
    {
      name: 'Distracting Shot',
      description: '<p>When you <strong>Volley</strong>, on a hit, instead of dealing damage you may distract your target. Anyone who tries to exploit the target\'s distracted state gains advantage on their next roll.</p>'
    },
    {
      name: 'Deep Pockets',
      description: '<p>When you <strong>conceal an item no bigger than your hand on your person</strong>, no one can find it unless you are bound, stripped, and thoroughly searched. You can easily conceal a number of items in this way equal to your DEX or 1, whichever is higher.</p>' +
        '<p>Additionally, <strong>when you check your pockets for something useful that you had "picked up” in town</strong>, you may spend a preparation to produce a bag of Supplies with 1d6-3 uses. (minimum 1)</p>'
    },
    {
      name: 'Sting',
      description: '<p>When you <strong>Hack and Slash</strong>, on a hit, you may spend a Brave; if you do, choose one:</p>' +
        '<ul>' +
        '<li>Your enemy stumbles or gets knocked down</li>' +
        '<li>You steal something small from them in the confusion</li>' +
        '<li>Your damage roll gains advantage</li>' +
        '</ul>'
    },
    {
      name: 'Beneath Notice',
      description: '<p>When you <strong>take advantage of the fact that no one is paying attention to you to discreetly do something</strong>, roll+DEX.</p>' +
        '<ul>' +
        '<li>On a hit, no one will notice what you did until you\'re no longer around.</li>' +
        '<li>On a 10+, they won’t even think to blame you unless you personally tell them you did it.</li>' +
        '</ul>'
    },
    {
      name: 'Truth to Power',
      description: '<p>When you <strong>brashly speak out of turn to someone more powerful than you</strong>, roll+CHA.</p>' +
        '<ul>' +
        '<li>On a hit, they unwittingly let slip a bit of useful information, the GM will say what they reveal.</li>' +
        '<li>On a 10+, you also avoid any reprisal for your actions… for now, at least.</li>' +
        '</ul>'
    },
    {
      name: 'Escape Artist',
      description: '<p>When you <strong>try to slip free of anything physically restraining you</strong>, roll+DEX.</p>' +
        '<ul>' +
        '<li>On a hit, you’re free.</li>' +
        '<li>On a 10+, also choose one:' +
        '<ul>' +
        '<li>You take a parting shot at your captor, deal your damage</li>' +
        '<li>You make it easier for someone else nearby to escape</li>' +
        '<li>You take a little souvenir with you, the GM will tell you what you got</li>' +
        '</ul>' +
        '</li>' +
        '</ul>'
    },
    {
      name: 'Burglar',
      description: '<p>Gain an advanced move from the Thief playbook.</p>'
    },
    {
      name: 'Capstone',
      requiresLevel: 6,
      description: '<p>When you <strong>use Halfling Bravery</strong>, on a 12+ your ally also gains 1 Brave, which they can spend any way that you can</p>'
    }
  ]
};
