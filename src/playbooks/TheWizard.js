export const theWizard = {
  name: "The Wizard",
  description: "<p>Dungeon World has rules. Not the laws of men or the rule of some petty tyrant. Bigger, better rules. You drop something—it falls. You can’t make something out of nothing. The dead stay dead, right?</p>" +
    "<p>Oh, the things we tell ourselves to feel better about the long, dark nights.\n</p>" +
    "<p>You’ve spent so very long poring over those tomes of yours. The experiments that nearly drove you mad and all the botched summonings that endangered your very soul. For what? For power. What else is there? Not just the power of King or Country but the power to boil a man’s blood in his veins. To call on the thunder of the sky and the churn of the roiling earth. To shrug off the rules the world holds so dear.</p>" +
    "<p>Let them cast their sidelong glances. Let them call you “warlock” or “diabolist.” Who among them can hurl fireballs from their eyes?</p>" +
    "<p>Yeah. We didn’t think so.</p>",
  baseHitPoints: 4,
  damageDieFaces: 4,
  looks: [
    {
      category: "Body",
      suggestions: "Pudgy, creepy, thin…"
    },
    {
      category: "Eyes",
      suggestions: "Haunted, sharp, crazy…"
    },
    {
      category: "Hair",
      suggestions: "Styled, wild, pointed hat…"
    },
    {
      category: "Robes",
      suggestions: "Worn, stylish, strange…"
    }
  ],
  drives: [
    {
      name: "Curiosity",
      description: "Cause trouble by touching, opening, or tinkering with something."
    },
    {
      name: "Cunning",
      description: "Set up a ploy and then take advantage of it."
    },
    {
      name: "Eccentricity",
      description: "Alienate an NPC with your strange behavior."
    },
    {
      name: "Mystery",
      description: "Deflect or evade an inquiry into your doings."
    },
    {
      name: "Obeisance",
      description: "Get an NPC to acknowledge your superiority."
    }
  ],
  bonds: [
    '____ will play an important role in the events to come. I have foreseen it!',
    '____ is keeping an important secret from me.',
    '____ is woefully misinformed about the world; I will teach them all that I can.',
    '____ and I shared a mystical vision, after drinking the blood of the demon world together.',
    '____ has supplied me with forbidden tomes.',
    '____ once brought me safely through the Haunted Forest.',
  ],
  baseLoad: 7,
  startingMoves: {
    raceOptions: [
      'Elf',
      'Human'
    ],
    allOf: [
      "Cast A Spell (INT)",
      "Prepare Spells",
      "Spellbook",
      "Spell Defense",
      "Ritual"
    ]
  },
  moves: [
    {
      name: 'Elf',
      description: '<p>Magic is as natural as breath to you. <em>Detect Magic</em> is a cantrip for you.</p>'
    },
    {
      name: 'Human',
      description: '<p>Choose one cleric spell. You can cast it as if it was a wizard spell</p>'
    },
    {
      name: "Cast A Spell (INT)",
      description: '<p>When you <strong>release a spell you’ve prepared</strong>, roll+INT.</p>' +
        '<ul>' +
        '<li>On a 10+ the the spell is successfully cast and you may cast the spell again later.</li>' +
        '<li>On a 7-9 the spell is cast, but choose one:' +
        '<ul>' +
        '<li>You draw unwelcome attention or put yourself in a spot. The GM will tell you how.</li>' +
        '<li>The spell disturbs the fabric of reality as it is cast; take -1 ongoing to cast a spell until the next time you Prepare Spells.</li>' +
        '<li>After it is cast, the spell is forgotten. You cannot cast the spell again until you prepare spells.</li>' +
        '</ul>' +
        '</li>' +
        '</ul>' +
        '<p>Note that maintaining spells with ongoing effects will sometimes cause a penalty to your roll to cast a spell.</p>'
    },

    {
      name: "Prepare Spells",
      description: '<p>When you <strong>spend uninterrupted time (an hour or so) in quiet contemplation of your spellbook</strong>, you:</p>' +
        '<ul>' +
        '<li>Lose any spells you already prepared.</li>' +
        '<li>Prepare new spells chosen from your spellbook whose total levels don’t exceed your own level +1.</li>' +
        '<li>Prepare your cantrips which never count against your limit.</li>' +
        '</ul>'
    },

    {
      name: "Spellbook",
      description: '<p>You have mastered several spells and inscribed them in your spellbook. You start out with three first level spells, as well as all your cantrips. Whenever you gain a level, you inscribe a new spell of your level or lower. Your spellbook is 1 weight.</p>'
    },

    {
      name: "Spell Defense",
      description: '<p>You may end any ongoing spell immediately and use the energy of its dissipation to deflect an oncoming attack. The spell ends and you subtract its level from the damage done to you.</p>'
    },

    {
      name: "Ritual",
      description: '<p>When you <strong>draw on a place of power to create a magical effect</strong>, tell the GM what you’re trying to achieve. Ritual effects are always possible, but the GM will give you one to four of the following conditions:</p>' +
        '<ul>' +
        '<li>It’s going to take days/weeks/months</li>' +
        '<li>First you must ____</li>' +
        '<li>You’ll need help from ____</li>' +
        '<li>It will require a lot of money</li>' +
        '<li>The best you can do is a lesser version, unreliable and limited</li>' +
        '<li>You and your allies will risk danger from ____</li>' +
        '<li>You’ll have to disenchant ____ to do it</li>' +
        '</ul>'
    },

    {
      name: "Prodigy",
      requiresLevel: 2,
      description: '<p>Choose a spell. You prepare that spell as if it were one level lower.</p>'
    },

    {
      name: "Empowered Magic",
      requiresLevel: 2,
      description: '<p>When you <strong>cast a spell</strong>, on a 10+ you have the option of choosing from the 7-9 list. If you do, you may additionally choose one of the following effects:</p>' +
        '<ul>' +
        '<li>The spell\'s effects are maximized</li>' +
        '<li>The spell\'s targets are doubled</li>' +
        '</ul>'
    },

    {
      name: "Fount Of Knowledge",
      requiresLevel: 2,
      description: '<p>When you <strong>Spout Lore about something no one else has any clue about</strong>, take +1.</p>'
    },

    {
      name: "Know-It-All",
      requiresLevel: 2,
      description: '<p>When another player’s character comes to you for advice and you <strong>tell them what you think is best</strong>, they get +1 forward when following your advice and you mark experience if they do.</p>'
    },

    {
      name: "Expanded Spellbook",
      requiresLevel: 2,
      description: '<p>Add a new spell from the spell list of any class to your spellbook.</p>'
    },

    {
      name: "Enchanter",
      requiresLevel: 2,
      description: '<p>When you <strong>have time and safety with a magic</strong> item you may ask the GM what it does. The GM will answer truthfully.</p>'
    },

    {
      name: "Logical",
      requiresLevel: 2,
      description: '<p>When you <strong>use strict deduction to analyse your surroundings</strong>, you can <em>Discern Realities</em> with INT instead of WIS.</p>'
    },

    {
      name: "Arcane Ward",
      requiresLevel: 2,
      description: '<p>As long as you have at least one prepared spell of first level or higher, you have +2 armor.</p>'
    },

    {
      name: "Counterspell",
      requiresLevel: 2,
      description: '<p>When you attempt to <strong>counter an arcane spell</strong> that will otherwise affect you, stake one of your prepared spells on the defense and roll+INT.</p>' +
        '<ul>' +
        '<li>On a 10+, the spell is countered and has no effect on you.</li>' +
        '<li>On a 7-9, the spell is countered and you forget the spell that you staked.</li>' +
        '</ul>' +
        '<p>Your counterspell protects you alone; if the countered spell has other targets they are affected as normal.</p>'
    },

    {
      name: "Quick Study",
      requiresLevel: 2,
      description: '<p>When you <strong>see the effects of an arcane spell</strong>, ask the GM the name of the spell and its effects. You take +1 when acting on the answers.</p>'
    },

    {
      name: "Master",
      requiresLevel: 6,
      requiresMove: "Prodigy",
      description: '<p>Choose one spell in addition to the one you picked for Prodigy. You prepare that spell as if it were one level lower.</p>'
    },

    {
      name: "Greater Empowered Magic",
      requiresLevel: 6,
      replacesMove: "Empowered Magic",
      description: '<p>When you <strong>cast a spell</strong>, on a 10-11 you have the option of choosing from the 7-9 list. If you do, you may additionally choose one of the following effects. On a 12+ you get to choose one of these effects for free:</p>' +
        '<ul>' +
        '<li>The spell\'s effects are maximized</li>' +
        '<li>The spell\'s targets are doubled</li>' +
        '</ul>'
    },

    {
      name: "Enchanter’s Soul",
      requiresLevel: 6,
      requiresMove: "Enchanter",
      description: '<p>When you <strong>have time and safety with a magic item in a place of power</strong> you can empower that item so that the next time you use it its effects are amplified, the GM will tell you exactly how.</p>'
    },

    {
      name: "Highly Logical",
      requiresLevel: 6,
      replacesMove: "Logical",
      description: '<p>When you <strong>use strict deduction to analyse your surroundings</strong>, you can <em>Discern Realities</em> with INT instead of WIS. On a 12+ you get to ask the GM any three questions, not limited by the list.</p>'
    },

    {
      name: "Mystical Puppet Strings",
      requiresLevel: 6,
      description: '<p>When you <strong>use magic to control a person’s actions</strong>, they have no memory of what you had them do and bear you no ill will.</p>'
    },

    {
      name: "Arcane Armor",
      requiresLevel: 6,
      replacesMove: "Arcane Ward",
      description: '<p>As long as you have at least one prepared spell of first level or higher, you have +4 armor.</p>'
    },

    {
      name: "Protective Counter",
      requiresLevel: 6,
      requiresMove: "Counterspell",
      description: '<p>When <strong>an ally within sight of you is affected by an arcane spell</strong>, you can counter it as if it affected you. If the spell affects multiple allies you must counter for each ally separately.</p>'
    },

    {
      name: "Ethereal Tether",
      requiresLevel: 6,
      description: '<p>When you <strong>have time with a willing or helpless subject</strong> you can craft an ethereal tether with them. You perceive what they do and can discern realities about them or their surroundings, no matter the distance. Someone willingly tethered to you can communicate with you over the tether as if you were in the room with them.</p>'
    },

    {
      name: "Spell Augmentation",
      requiresLevel: 6,
      description: '<p>When you <strong>deal damage to a creature</strong>, you can shunt a spell’s energy into them—end one of your ongoing spells and add the spell’s level to the damage dealt.</p>'
    },

    {
      name: "Self-Powered",
      requiresLevel: 6,
      description: '<p>When you <strong>have time, arcane materials, and a safe space</strong>, you can create your own place of power. Describe to the GM what kind of power it is and how you’re binding it to this place, the GM will tell you one kind of creature that will have an interest in this.</p>'
    },
  ]
};
