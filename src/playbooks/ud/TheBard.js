export const theBard = {
  name: 'The Bard',
  hitPoints: 16,
  damageModifier: 0,
  looks: [
    'Knowing Eyes, Fiery Eyes, or Joyous Eyes',
    'Fancy Hair, Wild Hair, or Stylish Cap',
    'Finery, Traveling Clothes, or Poor Clothes',
    'Fit Body, Well-fed Body, or Thin Body'
  ],
  drives: [
    {
      name: 'Fellowship',
      description: 'Use your art to help those in need.'
    },
    {
      name: 'Adventure',
      description: 'Spur others to significant and decisive action.'
    },
    {
      name: 'Diplomacy',
      description: 'Avoid a conflict or defuse a tense situation.'
    }
  ],
  background: [
    'What role do bards play in society? How are they chosen or trained?',
    'What does your instrument look like, and why is it significant to you?',
    'What tales or legends do you most enjoy telling?',
    'What work of art do you hope to contribute, and what do you need for inspiration?'
  ],
  bonds: [
    'Which of you has travelled with me the longest? ____',
    'With which of you do I share a… complicated past? ____',
    'Which of you have I heard stories about before I met them? ____',
    'Which of you is the subject of my next masterpiece? ____',
    'Which of you trusts me the most, and why? ____',
    'Which of you trusts me the <em>least</em>, and why? ____'
  ],
  baseLoad: 7,
  startingMoves: {
    backgroundOptions: [
      'Loremaster',
      'Blade-Singer',
      'Courtier'
    ],
    allOf: [
      'Vox Arcanus',
      'Bardic Lore'
    ],
    oneOf: [
      'Charming and Open',
      'Web of Contacts',
      'Swashbuckler',
      'Tall Tales',
      'Words of Fire',
      'Wide-Wanderer',
      'Jack of All Trades'
    ]
  },
  moves: [
    {
      name: 'Loremaster',
      description: '<p>When you <strong>use Bardic Lore</strong>, on a 10+ you may also ask the GM an additional follow-up question about the subject, they will answer truthfully.</p>'
    },
    {
      name: 'Blade-Singer',
      description: '<p>When you <strong>use Vox Arcanus</strong>, on a 10+, if your next action is to Hack and Slash, you gain advantage when you make your Hack and Slash roll.</p>'
    },
    {
      name: 'Courtier',
      description: '<p>When you <strong>Parley with someone</strong>, on a 10+, you may ask them one question, which they must answer truthfully. This information comes from a slip of the tongue or their body language giving it away; they won\'t notice that they gave up their information.</p>'
    },
    {
      name: 'Vox Arcanus',
      description: '<p>You have the ability to weave magical effects into your performances, be it music, song, dance, oratory, or otherwise. Describe your style of performance, then <strong>choose three songs you know:</strong></p>' +
        '<ul class="move-options">' +
        '<li data-value="Soothing Hymn"><strong>Soothing Hymn:</strong> Choose an ally, they heal 1d6+1 HP.</li>' +
        '<li data-value="Anthem of Courage"><strong>Anthem of Courage:</strong> Choose an ally, their mind is cleared of fear, despair, or enchantment.</li>' +
        '<li data-value="Countersong"><strong>Countersong:</strong> You drown out the incantations or other sound-based effects of a magic-user you can hear, causing their magic to fail.</li>' +
        '<li data-value="Battle Ballad"><strong>Battle Ballad:</strong> Choose an ally, they gain advantage on the next damage roll they make.</li>' +
        '<li data-value="Frightening Dirge"><strong>Frightening Dirge:</strong> Choose an enemy, they feel fear and react accordingly, as long as you keep performing this song.</li>' +
        '<li data-value="Discordant Blast"><strong>Discordant Blast:</strong> Choose an enemy, they become briefly stunned and deafened.</li>' +
        '<li data-value="Fascinating Melody"><strong>Fascinating Melody:</strong> You hold the attention of a number of creatures equal to your level, they will do nothing except listen to you until you stop performing or something distracts them.</li>' +
        '<li data-value="Vicious Mockery"><strong>Vicious Mockery:</strong> Choose an enemy, they will go after you with extreme prejudice, but they also leave themselves open or make a rash decision as they act, the GM will describe how.</li>' +
        '<li data-value="Ancient Tongue"><strong>Ancient Tongue:</strong> You gain the ability to speak the language of any sentient creature for a short time.</li>' +
        '</ul>' +
        '<p>When you <strong>weave magic into your performance</strong>, choose one of the songs you know and roll+CHA.<p>' +
        '<ul>' +
        '<li>On a hit, you achieve your selected song\'s effect.</li>' +
        '<li>On a 7-9, choose one:' +
        '<ul>' +
        '<li>Your performance reverberates to other targets you didn\'t intend to hit, affecting them as well, the GM will say how</li>' +
        '<li>The performance intoxicates you like wine, you have disadvantage to all CHA rolls until you take a few minutes to clear your head</li>' +
        '<li>You draw unwanted attention or expose yourself to danger</li>' +
        '</ul>' +
        '</li>' +
        '</ul>' +
        '<p>When you reach level 3, 6, or 9, choose an additional song from the list to learn.</p>'
    },
    {
      name: 'Bardic Lore',
      description: '<p>When you <strong>Spout Lore about someone or something you\'ve heard tales, songs, or legends about</strong>, you roll with CHA instead of INT. The GM may then ask you what tale, song, or legend you heard that information in. Tell them the truth, now.</p>'
    },
    {
      name: 'Charming and Open',
      description: '<p>When you <strong>speak frankly with someone</strong>, you can ask their player a question from the list below. They must answer it truthfully, then they may ask you a question from the list, which you must answer truthfully:</p>' +
        '<ul>' +
        '<li>Can I trust you (to __________)?</li>' +
        '<li>What are you feeling right now?</li>' +
        '<li>What do you most desire?</li>' +
        '<li>What do you wish I\'d do?</li>' +
        '<li>Whom do you serve?</li>' +
        '</ul>'
    },
    {
      name: 'Web of Contacts',
      description: '<p>When you <strong>declare that you know someone who can help you solve a task</strong>, describe that person and roll+CHA.</p>' +
        '<ul>' +
        '<li>On a 10+, choose two.</li>' +
        '<li>On a 7-9, choose one.</li>' +
        '</ul>' +
        '<ul>' +
        '<li>You don\'t owe them a favor</li>' +
        '<li>They\'re not already in some sort of trouble</li>' +
        '<li>They don\'t have a dangerous secret</li>' +
        '</ul>'
    },
    {
      name: 'Swashbuckler',
      description: '<p>When you <strong>dash into a fray or dangerous situation</strong>, roll+DEX.</p>' +
        '<ul>' +
        '<li>On a 10+, hold 3.</li>' +
        '<li>On a 7-9, hold 1.</li>' +
        '</ul>' +
        '<p>You may spend a hold to:</p>' +
        '<ul>' +
        '<li>Leap around, over, or through an obstacle in your path</li>' +
        '<li>Create an obstacle or distraction an enemy has to deal with</li>' +
        '<li>Divert attention from yourself to an ally, or from an ally to yourself</li>' +
        '</ul>' +
        '<p>When the <strong>danger is passed or resolved</strong>, any remaining hold is lost.</p>'
    },
    {
      name: 'Tall Tales',
      description: '<p>When you <strong>spend some time trading gossip in a community</strong>, roll+CHA.<p>' +
        '<ul>' +
        '<li>On a hit, you learn of an interesting opportunity nearby.</li>' +
        '<li>On a 10+, you can also start a rumor of your own; it will spread like wildfire.</li>' +
        '</ul>'
    },
    {
      name: 'Words of Fire',
      description: '<p>When you <strong>use your words to enflame the passions of a group</strong>, roll+CHA.</p>' +
        '<ul>' +
        '<li>On a 10+, choose two.</li>' +
        '<li>On a 7-9, choose one.</li>' +
        '</ul>' +
        '<ul>' +
        '<li>The passion you enflame need not be the foremost in their mind; you may choose it: love, lust, hatred, fear, loyalty, greed, jealousy, savagery, etc.</li>' +
        '<li>They must act on their passion right now.</li>' +
        '<li>The effect is great. They feel an overwhelming passion that is plain for all to see.</li>' +
        '</ul>'
    },
    {
      name: 'Wide-Wanderer',
      description: '<p>You\'ve travelled the wide world over. When you <strong>arrive someplace</strong>, ask the GM about any important traditions, rituals, and so on, they\'ll tell you what you need to know. When you <strong>return to a civilized settlement you\'ve visited before</strong>, you may answer one of the following questions; if you do, the GM answers the other:</p>'+
        '<ul>' +
        '<li>Who have you met here before?</li>' +
        '<li>What did you leave behind here?</li>' +
        '</ul>'
    },
    {
      name: 'Jack of All Trades',
      description: '<p>Gain a move from another playbook, even a starting move.</p>'+
        '<p><em>(Other playbooks may not take this move.)</em></p>'
    },
    {
      name: 'Capstone',
      requiresLevel: 6,
      description: '<p>When you <strong>Parley with someone</strong>, on a 12+ the GM will also tell you something you could do to make them your ally.</p>'
    }
  ]
};
