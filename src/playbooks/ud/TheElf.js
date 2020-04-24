export const theElf = {
  name: 'The Elf',
  hitPoints: 16,
  damageModifier: 1,
  looks: [
    'Wise Eyes, Vibrant Eyes, or Sad Eyes',
    'Braided Hair, Glimmering Hair, or Green Hood',
    'Nature Colors, Pristine Robes, or Fancy Cloak',
    'Fit Body, Tall Body, or Willowy Body'
  ],
  drives: [
    {
      name: 'Keeper',
      description: 'Endanger yourself to protect the world from corruption.'
    },
    {
      name: 'Artistry',
      description: 'Experience something of beauty or grace.'
    },
    {
      name: 'Accord',
      description: 'Find virtue in others not of your own kind.'
    }
  ],
  background: [
    'What tradition do elves always observe? What common human tradition would no elf ever do?',
    'How well known are your kind among humans? Do your people have some history, friendly or not?',
    'Why are songs significant to elves, and to you, personally?'
  ],
  bonds: [
    'Which of you has helped me hunt a foe before? ____',
    'Who is most well-known among my kind? ____',
    'Who knows the burden I carry in my heart? ____',
    'Who has a spark of beauty in their soul? ____'
  ],
  baseLoad: 5,
  startingMoves: {
    backgroundOptions: [
      'Fey Exile',
      'Children of the Forest',
      'Firstborn of the Stars'
    ],
    allOf: [
      'Uncanny Grace',
      'Elven Songs'
    ],
    oneOf: [
      'Tree-Speaker',
      'Elder Sight',
      'Eagle Shot',
      'Pathfinder',
      'Swordsinger',
      'Dirge of Doom',
      'Wildling',
    ]
  },
  moves: [
    {
      name: 'Fey Exile',
      description: '<p>Your heritage is that of the fairies. When you <strong>meld into fog, mist, or natural surroundings</strong>, you are invisible until you move or take some action that reveals your presence.</p>'
    },
    {
      name: 'Children of the Forest',
      description: '<p>Your people have lived in the primeval forests since time immemorial. When you <strong>Undertake a Perilous Journey through the wilderness</strong>, don’t roll; you automatically get a 10+. When you <strong>Make Camp in the wilderness</strong>, your campsite is undetectable to outside threats.</p>'
    },
    {
      name: 'Firstborn of the Stars',
      description: '<p>Your kind were one of the first intelligent species to walk the earth. You know the Canticle of Ages, an elven song that causes Wonderment in addition to your normal three starting choices for Elven Song. When you <strong>sing the Canticle of Ages</strong>, in addition to its usual effects, other elves will recognize you as a figure of importance and treat you with increased respect.</p>'
    },
    {
      name: 'Uncanny Grace',
      description: '<p>You can walk on top of snow or thin ice, across thin tree branches or along precarious ledges such as a tighrope, all without Defying Danger. Additionally, any one-handed bladed weapon in your hand with 1 weight or less gains the <em>precise</em> tag.</p>'
    },
    {
      name: 'Elven Songs',
      description: '<p>You imbue powerful emotional energy into rhyme, verse, and melody in a way that no human bard could match. <strong>Choose three</strong> of the following emotions you can evoke with an elven song, and write the name the song you chant to evoke that emotion:</p>' +
        '<ul class="move-options">' +
        '<li>Wonderment</li>' +
        '<li>Cold fury</li>' +
        '<li>Grief</li>' +
        '<li>Courage</li>' +
        '<li>Lethargic Calm</li>' +
        '<li>Joy</li>' +
        '<li>Clarity</li>' +
        '<li>Fellowship</li>' +
        '</ul>' +
        '<p>When you <strong>sing an elven song</strong>, choose the emotion you wish to evoke from your list and roll+CHA.</p>' +
        '<ul>' +
        '<li>On a hit, all those who hear you—including yourself—fall under the sway of that emotion, until something shakes them out of it.</li>' +
        '<li>On a 10+, choose two.</li>' +
        '<li>On a 7-9, choose one.' +
        '<ul>' +
        '<li>' +
        '<li>You don\'t exhaust your emotional reserves (otherwise, you can\'t use this move until you Make Camp)</li>' +
        '<li>You may choose a number of people up to your level who are not affected (yes, you can choose yourself)</li>' +
        '<li>The emotion is strong, and those affected must act on it right now</li>' +
        '<li>Everyone\'s attention is focused upon you while you sing</li>' +
        '</li>' +
        '</ul>' +
        '</li>' +
        '</ul>' +
        '<p>If you are already feeling the emotion you are trying to evoke, choose one additional option on a hit. Wonderment is an exception; you are always considered to be feeling wonderment.</p>' +
        '<p>Mindless creatures (such as zombies or golems) or creatures with hearts of darkness or superhuman will may be resistant or immune to the effects of your songs; the GM will tell you if this is the case.</p>' +
        '<p>When you reach level 3, 6, or 9, gain 1 Age. When you <strong>experience an intense emotion from the above list that you do not have an elven song for</strong>, you may spend an Age to add that song to your list, giving it a name as usual.</p>'
    },
    {
      name: 'Tree-Speaker',
      description: '<p>When you <strong>Discern Realities when surrounded by pristine wilderness</strong>, you may ask an additional question, even on a miss. This extra question can be anything, not limited by the list. The answer comes from voices on the wind, the whisper of the leaves, and so on.</p>'
    },
    {
      name: 'Elder Sight',
      description: '<p>You can see clearly in the faintest of light; even starlight is enough for you, though you still cannot see in total darkness. Additionally, when you gain this move, choose a type of energy: emotional residues, infernal taint, or magic. You can sense this type of energy as if it were tangible and visible.</p>'
    },
    {
      name: 'Eagle Shot',
      description: '<p>Any bow you wield has <em>far</em> range, and any elven bow you wield has <em>very far</em> range in additional to their normal ranges. When you <strong>Volley with a bow</strong>, on a 10+ you may choose one of the following in addition to dealing your damage:</p>' +
        '<ul>' +
        '<li>Your attack gets +WIS piercing</li>' +
        '<li>Instead of dealing damage, your target falls into a light sleep</li>' +
        '<li>Ask the GM, "where are they most vulnerable?" and get an honest answer</li>' +
        '</ul>'
    },
    {
      name: 'Pathfinder',
      description: '<p>You know places in the wild where secret paths lie unseen. When you <strong>travel by a hidden path through the wilderness</strong>, roll+WIS.</p>' +
        '<ul>' +
        '<li>On a hit, it leads you where you want.</li>' +
        '<li>On a 7-9, choose one:' +
        '<ul>' +
        '<li>The path is left revealed for others to discover or follow</li>' +
        '<li>The journey takes longer than it seemed to</li>' +
        '<li>You encounter some danger upon the road</li>' +
        '</ul>' +
        '</li>' +
        '</ul>'
    },
    {
      name: 'Swordsinger',
      description: '<p>Swordsmanship is like poetry to you. When you <strong>begin the blade dance with a <em>precise</em> weapon in melee</strong>, roll+DEX.</p>' +
        '<ul>' +
        '<li>On a 10+, hold 3.</li>' +
        '<li>On a 7-9, hold 2.</li>' +
        '<li>On a 6-, hold 1 anyway, but your enemies already have you, in particular, at a disadvantage.</li>' +
        '</ul>' +
        '<p>Spend a hold to perform a maneuver that achieves one of the following results:</p>' +
        '<ul>' +
        '<li>You create an advantage, you or an ally gains advantage on their move when it is first exploited</li>' +
        '<li>You disengage from melee with one foe</li>' +
        '<li>You immediately cross the distance between you and one foe it is possible for you to reach</li>' +
        '<li>You throw off the effects of being stunned, confused, or enchanted</li>' +
        '</ul>'
    },
    {
      name: 'Dirge of Doom',
      description: '<p>When you <strong>chant the verses of the Oath Against the Shadow</strong>, roll+CHA</p>' +
        '<ul>' +
        '<li>On a hit, choose one:' +
        '<ul>' +
        '<li>Weak or cowardly servants of evil flee from your presence</li>' +
        '<li>An agent of evil flinches or hesitates, briefly unable to act</li>' +
        '<li>Your allies are freed from the effects or fear or corruption</li>' +
        '</ul>' +
        '</li>' +
        '<li>On a 7-9, your emotions overtake you; you cannot retreat from this battle, you must stand and fight until either you or the enemy falls.</li>' +
        '</ul>'
    },
    {
      name: 'Wildling',
      description: '<p>Gain an advanced move from the Ranger playbook.</p>'
    },
    {
      name: 'Capstone',
      requiresLevel: 6,
      description: '<p>When you <strong>sing an elven song</strong>, on a 12+ you may choose as many options as you like</p>'
    }
  ]
};
