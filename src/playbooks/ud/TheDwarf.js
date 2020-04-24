export const theDwarf = {
  name: 'The Dwarf',
  hitPoints: 24,
  damageModifier: 2,
  looks: [
    'Weary Eyes, Hard Eyes, or Beady Eyes',
    'Braided Beard, Long Moustache, or Thick Sideburns',
    'Calloused Skin, Bronzed Skin, or Hairy Skin',
    'Broad Shoulders, Wide Girth, or Muscular Body'
  ],
  drives: [
    {
      name: 'Greed',
      description: 'Take for yourself that which was meant for others.'
    },
    {
      name: 'Artisan',
      description: 'Create, restore, or protect something of lasting value.'
    },
    {
      name: 'Justice',
      description: 'Keep your sworn word despite difficulty or inconvenience, or punish an oathbreaker.'
    }
  ],
  background: [
    'What tradition do dwarves always observe? What common human tradition would no dwarf ever do?',
    'How well known are your kind among humans? Do your people have some history, friendly or not?',
    'Who taught you your craft, and why? How did you repay them?'
  ],
  bonds: [
    'Who do I owe a life debt to? ____',
    'Who knows my secret shame? ____',
    'Whose forefather knew one of my forefathers? ____',
    'Who is a worthy drinking companion? ____'
  ],
  baseLoad: 8,
  startingMoves: {
    backgroundOptions: [
      'Stoneborn',
      'Firebeard',
      'Deepdelver'
    ],
    allOf: [
      'Armored',
      'Shaper',
      'Greed is Good',
      'Unbreakable'
    ],
    oneOf: [
      'Clear the Path',
      'Stoneborn Stamina',
      'Sworn Enemies',
      'Good For What Ales You',
      'Mountain-Speaker',
      'Immovable Object',
      'Axe Battler',
    ]
  },
  moves: [
    {
      name: 'Stoneborn',
      description: '<p>Your kin were the first to see sunlight when they emerged from the stone, and have stood ever since. While you <strong>stand on solid ground</strong>, you cannot be knocked off your feet and you ignore the <em>forceful</em> tag on attacks made against you.</p>'
    },
    {
      name: 'Firebeard',
      description: '<p>Your people have a history of martial empire that spreads both above and below ground. When you <strong>Undertake a Perilous Journey through the mountains, hills, or Underdark</strong>, or when you <strong>Spout Lore about your ancestors\' histories</strong>, you roll with CON instead of the usual stat.</p>'
    },
    {
      name: 'Deepdelver',
      description: '<p>Your people mined more deeply than any other. You can see clearly even in total darkness. Additionally, when you <strong>Spout Lore about the Underdark or its inhabitants</strong>, your roll gains advantage.</p>'
    },
    {
      name: 'Armored',
      description: '<p>You ignore the <em>clumsy</em> tag on armor you wear, and any armor you wear, not including shields, has -2 weight, to a minimum of zero.</p>'
    },
    {
      name: 'Alchemist Flasks',
      description: '<p>You are skilled in a field of crafting. <strong>Choose a field of expertise:</strong></p>' +
        '<ul class="move-options">' +
        '<li>Stonecrafting, masonry, and tunneling</li>' +
        '<li>Blacksmithing and metallurgy</li>' +
        '<li>Gems, jewelry, crystals, and precious metals</li>' +
        '<li>Beer and other strong drinks</li>' +
        '<li>Engineering and artifice</li>' +
        '</ul>' +
        '<p>When you <strong>craft something within your field of expertise (and have the appropriate resources to do so)</strong>, roll+CON.</p>' +
        '<ul>' +
        '<li>On a hit, you make what you set out to create, anyone who examines it will recognize the fine quality, and it gains the <em>dwarf-made</em> tag.</li>' +
        '<li>On a 10+, describe an additional perk or feature of your craftsmanship that marks it as the work of a master.</li>' +
        '<li>On a 6-, you can still make it, but the GM will give you an extra cost or requirement, pay it or what you make will be shoddy—by dwarf standards anyways—and lack the <em>dwarf-made</em> tag.</li>' +
        '</ul>' +
        '<p>When you <strong>Spout Lore about something related to your field</strong>, you gain advantage to your roll, and on a 10+ you may ask the GM a follow-up question, they\'ll answer it honestly.</p>'
    },
    {
      name: 'Greed is Good',
      description: '<p>A dwarf can virtually smell gems or gold. When you <strong>Discern Realities</strong>, you may also ask the GM, "Is there treasure here, and if so, where?" for free.</p>' +
        '<p>When you <strong>desire a treasure or valuable item you have seen or heard of</strong>, you may declare it to be the object of your greed. When you <strong>make a move to secure the object of your greed for yourself (<em>not</em> someone else)</strong>, you gain advantage to your roll. When you <strong>make a move that would make you surrender or give up on the object of your greed</strong>, you get disadvantage to your roll.</p>' +
        '<p>You cannot choose a new object of your greed until you have acquired your current one, or it becomes unattainable. You can\'t just give up on it because it would be difficult to acquire.</p>'
    },
    {
      name: 'Unbreakable',
      description: '<p>When you <strong>Defy Danger by tenacity or endurance</strong>, you cannot miss; treat any 6- result as a 7-9 instead.</p>'
    },
    {
      name: 'Clear the Path',
      description: '<p>When you <strong>charge through something standing in between you and where you\'re going</strong>, roll+CON.</p>' +
        '<ul>' +
        '<li>On a hit, you charge through and leave a path for your allies to follow.</li>' +
        '<li>On a 7-9, also choose one:' +
        '<ul>' +
        '<li>You have to go alone</li>' +
        '<li>You leave yourself open to danger, which may include taking damage</li>' +
        '<li>Something important is damaged, the GM will tell you what</li>' +
        '</ul>' +
        '</li>' +
        '</ul>'
    },
    {
      name: 'Stoneborn Stamina',
      description: '<ul class="move-options"><li data-value="stoneborn-stamina-hold">When you <strong>sleep or Make Camp upon bare earth, stone, or a bed made of such</strong>, mark this box:</li></ul>' +
        '<p>When you <strong>would mark a debility</strong>, you may erase the mark in the above box instead.</p>' +
        '<p>Additionally, you recover from mundane illnesses and poisons (but not more serious debilities) by Making Camp, without requiring bed rest or magic.</p>'
    },
    {
      name: 'Sworn Enemies',
      description: '<p>When you gain this move, choose one of the following categories of creatures and tell us why you have sworn deathly vengeance against them, and how you are marked by this oath:</p>' +
        '<ul class="move-options">' +
        '<li>Orcs and Goblinoids</li>' +
        '<li>Giants and Giantkin</li>' +
        '<li>Elves and their Allies</li>' +
        '<li>Dragons and their Minions</li>' +
        '<li>The Deep Things that Lurk Below</li>' +
        '<li>Oathbreakers and Kinslayers</li>' +
        '</ul>' +
        '<p>When you <strong>attack a creature of your chosen type</strong>, your damage roll gains advantage and the <em>forceful</em> tag, and on a 10+ you also scar, mark, or diminish them in some way; the GM will say how, or ask you to describe it.</p>'
    },
    {
      name: 'Good For What Ales You',
      description: '<p>Given enough ale or beer, you can drink anyone under the table. You never need to Defy Danger from intoxication. When you Carouse, your roll gains advantage.</p>' +
        '<p>Additionally, you can spend a use of Supplies to produce a flask of strong drink, and when you <strong>Parley with someone you have shared a drink with</strong>, you roll with CON instead of CHA. More than one of your strong drinks is enough to make any non-dwarf very drunk.</p>'
    },
    {
      name: 'Mountain-Speaker',
      description: '<p>When you <strong>Discern Realities when underground</strong>, you may ask an additional question, even on a miss. This extra question can be anything, not limited by the list. The answer comes from your intuitive connection with the earth and stone.</p>'
    },
    {
      name: 'Immovable Object',
      description: '<p>When you <strong>Defend by bracing yourself in place and raising your shield</strong>, you get +1 hold, even on a miss, and add the following option to Defend:</p>' +
        '<ul>' +
        '<li>You halt any advance that tries to go through or around you, stopping your foes dead in their tracks</li>' +
        '</ul>'
    },
    {
      name: 'Axe Battler',
      description: '<p>Gain an advanced move from the Fighter playbook.</p>'
    },
    {
      name: 'Capstone',
      requiresLevel: 6,
      description: '<p>When you <strong>use Shaper</strong>, on a 12+ you may imbue your work with magic. Describe your desired effect, and the GM will tell you an extra cost or consequence. When you pay the cost or accept the consequence, you get your desired effect.</p>'
    }
  ]
};
