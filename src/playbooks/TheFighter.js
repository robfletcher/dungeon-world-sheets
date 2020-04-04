export const theFighter = {
  name: "The Fighter",
  description: "<p>It’s a thankless job—living day to day by your armor and the skill of your arm. To dive heedlessly into danger. They won’t be playing golden horns for the time you took that knife to the ribs for them in the bar in Bucksberg. No flock of angels to sing of the time you dragged them, still screaming, from the edge of the Pits of Madness, no.</p>" +
    "<p>Forget them.</p>" +
    "<p>You do this for the guts and the glory. The scream of battle and the hot, hot blood of it. You are a beast of iron. Your friends may carry blades of forged steel but, fighter, you are steel. While your traveling companions might moan about their wounds over a campfire in the wilderness, you bear your scars with pride.</p>" +
    "<p>You are the wall—let every danger smash itself to nothing on you. In the end, you’ll be the last one standing.</p>",
  baseHitPoints: 10,
  damageDieFaces: 10,
  looks: [
    {
      category: "Body",
      suggestions: "Built, lithe, ravaged…"
    },
    {
      category: "Eyes",
      suggestions: "Hard, dead, eager…"
    },
    {
      category: "Hair",
      suggestions: "Wild, shorn, battered helm…"
    },
    {
      category: "Skin",
      suggestions: "Calloused, tanned, scarred…"
    }
  ],
  drives: [
    {
      name: "Challenge",
      description: "Provoke a fight with a notable enemy, just you and them."
    },
    {
      name: "Glory",
      description: "Show off in front of NPCs who can go on to tell your tale."
    },
    {
      name: "Peace",
      description: "Settle a dispute or end a fight without bloodshed."
    },
    {
      name: "Pride",
      description: "Put someone in their place (or their grave) for disrespecting you."
    },
    {
      name: "Vengeance",
      description: "Avenge a wrong or hurt done to you or your allies."
    }
  ],
  bonds: [
    '____ owes me their life, whether they admit it or not.',
    'I have sworn to protect ____.',
    'I worry about the ability of ____ to survive in the dungeon.',
    '____ is soft, but I will make them hard like me.',
    '____ and I were both hired by a boss who turned on us.',
    '____ proved a worthy ally in the last war, even considering that one mistake they made.',
    '____ saw me kill someone important.',
    '____ stood up to me and got away with it. That’s how it is, I guess.',
  ],
  baseLoad: 12,
  startingMoves: {
    raceOptions: [
      'Dwarf',
      'Elf',
      'Halfling',
      'Human'
    ],
    allOf: [
      "Signature Weapon",
      "Bend Bars, Lift Gates",
      "Armored"
    ]
  },
  moves: [
    {
      name: 'Dwarf',
      description: '<p>When you <strong>share a drink with someone</strong>, you may parley with them using CON instead of CHA.</p>'
    },
    {
      name: 'Elf',
      description: '<p>Choose one weapon—you can always treat weapons of that type as if they had the precise tag.</p>' +
        '<ul class="move-options">' +
        '<li class="move-option-custom-value" data-option-id="weapon-type">Weapon:</li>' +
        '</ul>'
    },
    {
      name: 'Halfling',
      description: '<p>When you <strong>Defy Danger</strong> and use your small size to your advantage, take +1.</p>'
    },
    {
      name: 'Human',
      description: '<p>Once per battle you may reroll a single damage roll (yours or someone else’s).</p>'
    },
    {
      name: "Signature Weapon",
      description: '<p>This is your weapon. There are many like it, but this one is yours. Your weapon is your best friend. It is your life. You master it as you master your life. Your weapon, without you, is useless. Without your weapon, you are useless. You must wield your weapon true.</p>' +
        '<p><em>Choose a base description, all are 2 weight:</em></p>' +
        '<ul class="move-options">' +
        '<li>Sword</li>' +
        '<li>Axe</li>' +
        '<li>Hammer</li>' +
        '<li>Spear</li>' +
        '<li>Flail</li>' +
        '<li>Fists</li>' +
        '</ul>' +
        '<p><em>Choose a range that best fits your weapon:</em></p>' +
        '<ul class="move-options">' +
        '<li>hand</li>' +
        '<li>close</li>' +
        '<li>reach</li>' +
        '</ul>' +
        '<p><em>Choose two enhancements:</em></p>' +
        '<ul class="move-options">' +
        '<li data-value="Hooks and spikes">Hooks and spikes. +1 damage, but +1 weight.</li>' +
        '<li data-value="Sharp">Sharp. +2 piercing.</li>' +
        '<li data-value="Perfectly weighted">Perfectly weighted. Add <em>precise</em>.</li>' +
        '<li data-value="Serrated edges">Serrated edges. +1 damage.</li>' +
        '<li data-value="Glows">Glows in the presence of one type of creature, your choice.</li>' +
        '<li data-value="Huge">Huge. Add <em>messy</em> and <em>forceful</em>.</li>' +
        '<li data-value="Versatile">Versatile. Choose an additional range.</li>' +
        '<li data-value="Well-crafted">Well-crafted. -1 weight.</li>' +
        '</ul>' +
        '<p><em>Choose a look:</em></p>' +
        '<ul class="move-options">' +
        '<li>Ancient</li>' +
        '<li>Blood-stained</li>' +
        '<li>Unblemished</li>' +
        '<li>Sinister</li>' +
        '<li>Ornate</li>' +
        '</ul>'
    },

    {
      name: "Bend Bars, Lift Gates",
      description: '<p>When you use pure strength to destroy an inanimate obstacle, roll+STR.</p>' +
        '<ul>' +
        '<li>On a 10+, choose 3.</li>' +
        '<li>On a 7-9 choose 2.</li>' +
        '</ul>' +
        '<ul>' +
        '<li>It doesn\'t take a very long time</li>' +
        '<li>Nothing of value is damaged</li>' +
        '<li>It doesn\'t make an inordinate amount of noise</li>' +
        '<li>You can fix the thing again without a lot of effort</li>' +
        '</ul>'
    },

    {
      name: "Armored",
      description: '<p>You ignore the <em>clumsy</em> tag on any armor you wear.</p>'
    },

    {
      name: "Merciless",
      requiresLevel: 2,
      description: '<p>When you <strong>deal damage</strong>, deal +1d4 damage.</p>'
    },

    {
      name: "Heirloom",
      requiresLevel: 2,
      description: '<p>When you <strong>consult the spirits that reside within your signature weapon</strong>, they will give you an insight relating to the current situation, and might ask you some questions in return, roll+CHA.</p>' +
        '<ul>' +
        '<li>On a 10+, the GM will give you good detail.</li>' +
        '<li>On a 7-9, the GM will give you an impression.</li>' +
        '</ul>'
    },

    {
      name: "Improved Weapon",
      requiresLevel: 2,
      description: '<p>Choose one extra enhancement for your signature weapon.</p>'
    },

    {
      name: "Blacksmith",
      requiresLevel: 2,
      description: '<p>When you <strong>have access to a forge</strong> you can graft the magical powers of a weapon onto your signature weapon. This process destroys the magical weapon. Your signature weapon gains the magical powers of the destroyed weapon.</p>'
    },

    {
      name: "Iron Hide",
      requiresLevel: 2,
      description: '<p>You gain +1 armor.</p>'
    },

    {
      name: "Armor Mastery",
      requiresLevel: 2,
      description: '<p>When you <strong>make your armor take the brunt of damage</strong> dealt to you, the damage is negated but you must reduce the armor value of your armor or shield (your choice) by 1. The value is reduced each time you make this choice. If the reduction leaves the item with 0 armor it is destroyed.</p>'
    },

    {
      name: "Seeing Red",
      requiresLevel: 2,
      description: '<p>When you <strong>Discern Realities during combat</strong>, you take +1.</p>'
    },

    {
      name: "Interrogator",
      requiresLevel: 2,
      description: '<p>When you <strong>parley using threats of violence</strong> as leverage, you may use STR instead of CHA.</p>'
    },

    {
      name: "Scent Of Blood",
      requiresLevel: 2,
      description: '<p>When you <strong>Hack & Slash</strong> an enemy, your next attack against that same foe deals +1d4 damage.</p>'
    },

    {
      name: "Multiclass Dabbler",
      requiresLevel: 2,
      description: '<p>Get one move from another class. Treat your level as one lower for choosing the move.</p>'
    },

    {
      name: "Bloodthirsty",
      requiresLevel: 6,
      replacesMove: "Merciless",
      description: '<p>When you <strong>deal damage</strong>, deal +1d8 damage.</p>'
    },

    {
      name: "Through Death's Eyes",
      requiresLevel: 6,
      description: '<p>When you <strong>go into battle</strong>, roll+WIS.</p>' +
        '<ul>' +
        '<li>On a 10+, name someone who will live and someone who will die.</li>' +
        '<li>On a 7-9, name someone who will live or someone who will die. Name NPCs, not player characters. The GM will make your vision come true, if it’s even remotely possible.</li>' +
        '<li>On a 6- you see your own death and consequently take -1 ongoing throughout the battle.</li>' +
        '</ul>'
    },

    {
      name: "Eye For Weaponry",
      requiresLevel: 6,
      description: '<p>When you <strong>look over an enemy’s weaponry</strong>, ask the GM how much damage they do.</p>'
    },

    {
      name: "Superior Warrior",
      requiresLevel: 6,
      description: '<p>When you <strong>Hack & Slash</strong>, on a 12+ you deal your damage, avoid their attack, and impress, dismay, or frighten your enemy.</p>'
    },

    {
      name: "Steel Hide",
      requiresLevel: 6,
      replacesMove: "Iron Hide",
      description: '<p>You gain +2 armor.</p>'
    },

    {
      name: "Armored Perfection",
      requiresLevel: 6,
      replacesMove: "Armor Mastery",
      description: '<p>When you choose to <strong>let your armor take the brunt of damage</strong> dealt to you, the damage is negated and you take +1 forward against the attacker, but you must reduce the armor value of your armor or shield (your choice) by 1. The value is reduced each time you make this choice. If the reduction leaves the item with 0 armor it is destroyed.</p>'
    },

    {
      name: "Evil Eye",
      requiresLevel: 6,
      requiresMove: "Seeing Red",
      description: '<p>When you <strong>enter combat</strong>, roll+CHA.</p>' +
        '<ul>' +
        '<li>On a 10+, hold 2.</li>' +
        '<li>On a 7-9, hold 1. Spend your hold to make eye contact with an NPC present, who freezes or flinches and can’t act until you break it off.</li>' +
        '<li>On a 6-, your enemies immediately identify you as their biggest threat.</li>' +
        '</ul>'
    },

    {
      name: "Taste Of Blood",
      requiresLevel: 6,
      replacesMove: "Scent Of Blood",
      description: '<p>When you <strong>Hack & Slash</strong> an enemy, your next attack against that same foe deals +1d8 damage.</p>'
    },

    {
      name: "Multiclass Initiate",
      requiresLevel: 6,
      description: '<p>Get a move from another class. Treat your level as one lower for choosing the move.</p>'
    },
  ]
};