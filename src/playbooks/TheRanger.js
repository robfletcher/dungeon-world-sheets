export const theRanger = {
  name: "The Ranger",
  description: "<p>These city-born folk you travel with. Have they heard the call of the wolf? Felt the winds howl in the bleak deserts of the East? Have they hunted their prey with the bow and the knife like you? Hell no. That’s why they need you.</p>" +
    "<p>Guide. Hunter. Creature of the wilds. You are these things and more. Your time in the wilderness may have been solitary until now, but the call of some greater thing—call it fate if you like—has cast your lot with these folk. Brave, they may be. Powerful and strong, too. You know the secrets of the spaces between, though.</p>" +
    "<p>Without you, they’d be lost. Blaze a trail through the blood and dark, strider.</p>",
  baseHitPoints: 8,
  damageDieFaces: 8,
  looks: [
    {
      category: "Body",
      suggestions: "Lithe, wild, sharp…"
    },
    {
      category: "Eyes",
      suggestions: "Wild, sharp, animal…"
    },
    {
      category: "Hair",
      suggestions: "Wild, bald, hooded…"
    },
    {
      category: "Clothes",
      suggestions: "Cape, camouflage, traveling clothes…"
    }
  ],
  drives: [
    {
      name: "Companionship",
      description: "Alienate someone by putting your animal companion’s desires above theirs."
    },
    {
      name: "The Hunt",
      description: "Slay a creature of considerable might or cunning."
    },
    {
      name: "Liberty",
      description: "Free someone from bondage, figuratively or literally."
    },
    {
      name: "Tenacity",
      description: "Doggedly pursue a course of action, to your or your allies detriment."
    },
    {
      name: "Wonder",
      description: "Show someone a place or thing of natural beauty that they have not seen before."
    }
  ],
  baseLoad: 11,
  startingMoves: {
    allOf: [
      "Hunt and Track",
      "Called Shot",
      "Animal Companion"
    ]
  },
  moves: [
    {
      name: "Hunt and Track",
      description: '<p>When you <strong>follow a trail of clues left behind by passing creatures</strong>, roll+WIS.</p>' +
        '<ul>' +
        '<li>' +
        'On a 7+, you follow the creature\'s trail until there\'s a significant change in its direction or mode of travel.' +
        '</li>' +
        '<li>On a 10+, you also choose 1:' +
        '<ul>' +
        '<li>Gain a useful bit of information about your quarry, the GM will tell you what.</li>' +
        '<li>Determine what caused the trail to end.</li>' +
        '</ul>' +
        '</li>' +
        '</ul>'
    },

    {
      name: "Called Shot",
      description: '<p>When you <strong>attack a defenseless or surprised enemy at range</strong>, you can choose to deal your damage or name your target and roll+DEX.</p>' +
        '<ul>' +
        '<li>' +
        '<strong>Head</strong>' +
        '<ul>' +
        '<li>10+: As 7–9, plus your damage.</li>' +
        '<li>7-9: They do nothing but stand and drool for a few moments.</li>' +
        '</ul>' +
        '</li>' +
        '<li>' +
        '<strong>Arms</strong>' +
        '<ul>' +
        '<li>10+: As 7-9, plus your damage.</li>' +
        '<li>7-9: They drop anything they\'re holding.</li>' +
        '</ul>' +
        '</li>' +
        '<li>' +
        '<strong>Legs</strong>' +
        '<ul>' +
        '<li>10+: As 7-9, plus your damage.</li>' +
        '<li>7-9: They\'re hobbled and slow moving.</li>' +
        '</ul>' +
        '</li>' +
        '</ul>'
    },

    {
      name: "Animal Companion",
      description: "<p>You are accompanied by a beast of uncommon loyalty, with whom you have bonded deeply and communicate without words. Treat it as a follower with starting Loyalty +3. Choose its size (and base stats) plus a species or breed:</p>" +
        '<ul class="move-options">' +
        '<li data-value="tiny"><em>tiny</em>: Quality +2, d4 damage, 3 HP, Load 0</li>' +
        '<li data-value="small"><em>small</em>: Quality +1, d4 damage, 6 HP, Load 1</li>' +
        '<li data-value="medium"><em>medium</em>: Quality +1, d6 damage, 9 HP, Load 2</li>' +
        '<li data-value="large"><em>large</em>: Quality +1, d6 damage (<em>forceful</em>), 12 HP, Load 4</li>' +
        '</ul>' +
        '<p>Choose tags and/or moves based on its size: 6 if tiny or small, 4 if medium, 3 if large:</p>' +
        '<h3>Tags:</h3>' +
        '<ul class="move-options move-options-inline">' +
        '<li data-value="athletic">athletic</li>' +
        '<li data-value="beautiful">beautiful</li>' +
        '<li data-value="cautious">cautious</li>' +
        '<li data-value="cunning">cunning</li>' +
        '<li data-value="hardy">hardy (+3 HP and +2 Load)</li>' +
        '<li data-value="meek">meek</li>' +
        '<li data-value="organized">organized</li>' +
        '<li data-value="stealthy">stealthy</li>' +
        '<li data-value="vicious">vicious (+1 damage and messy)</li>' +
        '<li data-value="warrior">warrior (increase damage die)</li>' +
        '<li data-value="armor1">+1 armor</li>' +
        '<li data-value="armor2">+1 armor per check.</li>' +
        '</ul>' +
        '<h3>Moves:</h3>' +
        '<ul class="move-options move-options-inline">' +
        '<li data-value="deliver a message">deliver a message</li>' +
        '<li data-value="drag down its prey">drag down its prey</li>' +
        '<li data-value="escape from a bind">escape from a bind</li>' +
        '<li data-value="fetch something">fetch something</li>' +
        '<li data-value="poison its prey">poison its prey</li>' +
        '<li data-value="serve as a steed">serve as a steed</li>' +
        '<li data-value="stand watch">stand watch</li>' +
        '<li data-value="track by scent">track by scent</li>' +
        '<li data-value="threaten and intimidate">threaten and intimidate</li>' +
        '<li data-value="trample, break, and wreck stuff">trample, break, and wreck stuff</li>' +
        //  TODO: custom option
        '</ul>' +
        '<p>Choose an Instinct and a Cost (1 of each):</p>' +
        '<h3>Instinct:</h3>' +
        '<ul class="move-options move-options-inline">to&hellip;' +
        '<li data-value="challenge rivals">challenge rivals</li>' +
        '<li data-value="follow its stomach">follow its stomach</li>' +
        '<li data-value="freeze up">freeze up</li>' +
        '<li data-value="get distracted">get distracted</li>' +
        '<li data-value="give chase">give chase</li>' +
        '<li data-value="make mischief">make mischief</li>' +
        '<li data-value="panic">panic</li>' +
        '<li data-value="run rampant">run rampant</li>' +
        '<li data-value="savage its prey">savage its prey</li>' +
        '<li data-value="wander off">wander off</li>' +
        '</ul>' +
        '<h3>Cost:</h3>' +
        '<ul class="move-options move-options-inline">' +
        '<li data-value="attention">attention (play, grooming, training)</li>' +
        '<li data-value="freedom">freedom (time off on its own, free to roam)</li>' +
        '<li data-value="comfort">comfort (cozy quarters, warmth, plenty of food)</li>' +
        '</ul>'
    },

    {
      name: "Half-Elven",
      requiresLevel: 2,
      description: '<p><strong>You may take this move only if it is your first advancement.</strong></p>' +
        '<p>Somewhere in your lineage lies mixed blood and it begins to show its presence. You gain the elf starting move if you took the human one at character creation or vice versa.</p>'
    },

    {
      name: "A Safe Place",
      requiresLevel: 2,
      description: '<p>When you <strong>choose and prepare the party\'s camp site</strong>, whomever the GM chooses to roll during the night takes +1 to their roll.</p>'
    },

    {
      name: "Blot Out the Sun",
      requiresLevel: 2,
      description: '<p>When you <strong>Volley</strong> you may spend extra ammo before rolling. For each ammo spent, you may choose an extra target. Roll once and apply damage to all targets.</p>'
    },

    {
      name: "Camouflage",
      requiresLevel: 2,
      description: '<p>When you <strong>keep still in natural surroundings</strong>, enemies never spot you until you make a movement.</p>'
    },

    {
      name: "Familiar Prey",
      requiresLevel: 2,
      description: '<p>When you <strong>Spout Lore about a monster</strong> you use WIS instead of INT.</p>'
    },

    {
      name: "Follow Me",
      requiresLevel: 2,
      description: '<p>When you <strong>scout ahead</strong>, choose 1 extra option from the list, even on a miss. When you navigate, you can use WIS instead of INT.</p>'
    },

    {
      name: "God Amidst the Wastes",
      requiresLevel: 2,
      description: '<p>Dedicate yourself to a deity (name a new one or choose one that\'s already been established). You gain the <em>Commune</em> and<em>Cast A Spell</em> cleric moves. When you select this move, treat yourself as a cleric of level 1 for using spells. Every time you gain a level thereafter, increase your effective cleric level by 1.</p>'
    },

    {
      name: "Improved Companion",
      requiresLevel: 2,
      description: '<p>Each time you take this move (up to twice), your animal companion gains 2 additional tags or moves of your choice.</p>'
    },

    {
      name: "Improved Companion 2",
      requiresLevel: 2,
      requiresMove: "Improved Companion"
    },

    {
      name: "Loyal to the End",
      requiresLevel: 2,
      description: '<p>When you <strong>allow your animal companion to take a blow that was meant for you</strong>, it takes the damage instead of you. If it is reduced to 0 hit points, it succeeds at its Last Breath as if it rolled a 10+.</p>'
    },

    {
      name: "On the Hoof",
      requiresLevel: 2,
      description: '<p>When you <strong>travel through safe lands or undertake a perilous journey</strong>, you can also attempt to forage in addition to any other role you take. You can\'t trap or hunt while doing so, so at best you get 1d4 rations.</p>'
    },

    {
      name: "Viper's Strike",
      requiresLevel: 2,
      description: '<p>When you <strong>strike an enemy with two weapons at once</strong>, add an extra 1d4 damage for your off-hand strike.</p>'
    },

    {
      name: "Wild Empathy",
      requiresLevel: 2,
      description: '<p>You can speak with and understand animals.</p>'
    },

    {
      name: "A Safer Place",
      requiresLevel: 6,
      replacesMove: "A Safe Place",
      description: '<p>When you <strong>choose and prepare the party\'s camp site</strong>, whomever the GM chooses to roll during the night adds your WIS to their roll.</p>'
    },

    {
      name: "Beast of Legend",
      requiresLevel: 6,
      description: '<p>When you take this move, your animal companion begins to manifest supernatural, even mythic powers. It gains the <em>magical</em> tag and at least one move to reflect its new-found abilities. Work out the details with the GM.</p>'
    },

    {
      name: "Constant Vigilance",
      requiresLevel: 6,
      description: '<p>You can always roll to stay sharp, even if you are asleep, distracted, or someone else is on watch. If someone else is on watch, you both roll Only the better result applies.</p>'
    },

    {
      name: "Hunter's Prey",
      requiresLevel: 6,
      replacesMove: "Familiar Prey",
      description: '<p>When you <strong>Spout Lore about a monster</strong> you use WIS instead of INT. On a 12+, in addition to the normal effects, you get to ask the GM any one question about the subject.</p>'
    },

    {
      name: "Magnificent Specimen",
      requiresLevel: 6,
      description: '<p>Each time you take this move (up to twice), either increase your animal companion\'s Quality by +1 (max +3) or increase both its armor by +1 and its max HP by +4.</p>'
    },

    {
      name: "Magnificent Specimen 2",
      requiresLevel: 6,
      requiresMove: "Magnificent Specimen"
    },

    {
      name: "Observant",
      requiresLevel: 6,
      description: '<p>When you <strong>Hunt and Track</strong>, on a hit you may also ask one question about the creature you are tracking from the <em>Discern Realities</em> list for free.</p>'
    },

    {
      name: "Smaug's Belly",
      requiresLevel: 6,
      description: '<p>When you <strong>know your target\'s weakest point</strong> your arrows have <em>2 piercing</em>.</p>'
    },

    {
      name: "Special Trick",
      requiresLevel: 6,
      description: '<p>Choose a move from another class. So long as you are working with your animal companion you have access to that move.</p>'
    },

    {
      name: "Strider",
      requiresLevel: 6,
      requiresMove: "Follow Me",
      description: '<p>When you <strong>navigate</strong>, on a 12+ you reach your destination with time to spare. You can either press on to another spot of the GM\'s choosing (without having to navigate or scout ahead again) or give the party +1 forward to make camp and manage provisions.</p>'
    },

    {
      name: "Viper's Fangs",
      requiresLevel: 6,
      replacesMove: "Viper's Strike",
      description: '<p>When you <strong>strike an enemy with two weapons at once</strong>, add an extra 1d8 damage for your off-hand strike.</p>'
    },

    {
      name: "Wild Speech",
      requiresLevel: 6,
      replacesMove: "Wild Empathy",
      description: '<p>You can speak with and understand any non-magical, non-planar creature.</p>'
    },
  ]
};
