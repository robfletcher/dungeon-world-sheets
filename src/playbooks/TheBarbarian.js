export const theBarbarian = {
  name: "The Barbarian",
  description: "<p>Hither you came from parts unknown. Sword in hand—a reaver. A slayer.</p>" +
    "<p>Let the wizard cast his spells. What good is magick when steel cuts through flesh and bone just the same? The Paladin swears fealty to the divine. She can keep her fairy tale god—you are your own master.</p>" +
    "<p>You hail from the far reaches of Dungeon World in search of—what? Glory? Treasure? Spilt blood? In the end it matters not. They call you barbarian. Uncivilized. Let them. You know better. Their world of nobles and laws is fleeting.</p>" +
    "<p>You know what is best in life.</p>",
  baseHitPoints: 8,
  damageDieFaces: 10,
  looks: [
    {
      category: "Body",
      suggestions: "Mighty thews, long shanks, scrawny, supple…"
    },
    {
      category: "Eyes",
      suggestions: "Tormented, haunted, wild, shrouded…"
    },
    {
      category: "Decoration",
      suggestions: "Tattoos, bejeweled, unmarred…"
    },
    {
      category: "Clothes",
      suggestions: "Scraps, silks, scavenger’s outfit, weather-inappropriate…"
    }
  ],
  drives: [
    {
      name: "Contempt",
      description: "Offend an NPC of importance with your brutish ways."
    },
    {
      name: "Gigantic Melancholy",
      description: "Let a problem escalate while you brood, drown your sorrows, or express your disgust."
    },
    {
      name: "Gigantic Mirth",
      description: "Cause trouble for your allies by indulging in revelry, romance, or celebration."
    },
    {
      name: "Honor",
      description: "Keep an oath that you have made to an NPC."
    },
    {
      name: "Pride",
      description: "Refuse an order or request that is beneath you."
    }
  ],
  baseLoad: 8,
  startingMoves: {
    allOf: [
      "The Upper Hand",
      "What Are You Waiting For?",
      "Herculean Appetites",
      "Musclebound"
    ],
    oneOf: [
      "Full Plate And Packing Steel",
      "Unencumbered, Unharmed"
    ]
  },
  moves: [
    {
      name: "Full Plate And Packing Steel",
      description: '<p>You ignore the clumsy tag on armor you wear.</p>'
    },

    {
      name: "Unencumbered, Unharmed",
      description: '<p>So long as you are below your Load and neither wear armor nor carry a shield, take +1 armor.</p>'
    },

    {
      name: "The Upper Hand",
      description: '<p>You take +1 ongoing to last breath rolls. When you <strong>take your last breath</strong>, on a 7–9 you make an offer to Death in return for your life. If Death accepts he will return you to life. If not, you die.</p>'
    },

    {
      name: "What Are You Waiting For?",
      description: '<p>When you <strong>cry out a challenge to your enemies</strong>, roll+Con.</p>' +
        '<ul>' +
        '<li>On a 10+ they treat you as the most obvious threat to be dealt with and ignore your companions, take +2 damage ongoing against them. </li>' +
        '<li>On a 7–9 only a few (the weakest or most foolhardy among them) fall prey to your taunting. </li>' +
        '</ul>'
    },

    {
      name: "Herculean Appetites",
      description: '<p>Others may content themselves with just a taste of wine, or dominion over a servant or two, but you want more. Choose two appetites. While <strong>pursuing one of your appetites if you would roll for a move</strong>, instead of rolling 2d6 you roll 1d6+1d8. If the d6 is the higher die of the pair, the GM will also introduce a complication or danger that comes about due to your heedless pursuits.</p>' +
        '<ul class="move-options">' +
        '<li>Pure destruction</li>' +
        '<li>Power over others</li>' +
        '<li>Mortal pleasures</li>' +
        '<li>Conquest</li>' +
        '<li>Riches and property</li>' +
        '<li>Fame and glory</li>' +
        '</ul>'
    },

    {
      name: "Musclebound",
      description: '<p>While you wield a weapon it gains the <em>forceful</em> and <em>messy</em> tags.</p>'
    },

    {
      name: "Still Hungry",
      requiresLevel: 2,
      description: '<p>Choose an additional appetite.</p>'
    },

    {
      name: "Appetite For Destruction",
      requiresLevel: 2,
      description: '<p>Take a move from the Fighter, Bard, or Thief class list. You may not take multiclass moves from those classes.</p>'
    },

    {
      name: "My Love For You Is Like A Truck",
      requiresLevel: 2,
      description: '<p>When you <strong>perform a feat of strength</strong>, name someone present whom you have impressed and take +1 forward to parley with them.</p>'
    },

    {
      name: "What Is Best In Life",
      requiresLevel: 2,
      description: '<p>At the end of a session, if during this session you have crushed your enemies, seen them driven before you, or have heard the lamentations of their kinfolk mark XP.</p>'
    },

    {
      name: "Wide-Wanderer",
      requiresLevel: 2,
      description: '<p>You’ve travelled the wide world over. When you <strong>arrive someplace</strong> ask the GM about any important traditions, rituals, and so on, they\'ll tell you what you need to know.</p>'
    },

    {
      name: "Usurper",
      requiresLevel: 2,
      description: '<p>When you <strong>prove yourself superior to a person in power</strong>, take +1 forward with their followers, underlings, and hangers on.</p>'
    },

    {
      name: "Khan Of Khans",
      requiresLevel: 2,
      description: '<p>Your hirelings always accept the gratuitous fulfillment of one of your appetites as payment.</p>'
    },

    {
      name: "Samson",
      requiresLevel: 2,
      description: '<p>You may take a debility to immediately break free of any physical or mental restraint.</p>'
    },

    {
      name: "Smash!",
      requiresLevel: 2,
      description: '<p>When you <em>Hack & Slash</em>, on a 12+ deal your damage and choose something physical your target has (a weapon, their position, a limb): they lose it.</p>'
    },

    {
      name: "Indestructible Hunger",
      requiresLevel: 2,
      description: '<p>When you <strong>take damage</strong> you can choose to take -1 ongoing until you sate one of your appetites instead of taking the damage. If you already have this penalty you cannot choose this option.</p>'
    },

    {
      name: "Eye For Weakness",
      requiresLevel: 2,
      description: '<p>When you <strong>Discern Realities</strong> add "What here is weak or vulnerable?" to the list of questions you can ask.</p>'
    },

    {
      name: "On The Move",
      requiresLevel: 2,
      description: '<p>When you <strong>defy a danger caused by movement</strong> (maybe falling off a narrow bridge or rushing past an armed guard) take +1.</p>'
    },

    {
      name: "A Good Day To Die",
      requiresLevel: 6,
      description: '<p>As long as you have less than your CON in current HP (or 1, whichever is higher) take +1 ongoing.</p>'
    },

    {
      name: "Kill ‘Em All",
      requiresLevel: 6,
      requiresMove: "Appetite for Destruction",
      description: '<p>Take another move from the Fighter, Bard, or Thief class list. You may not take multiclass moves from those classes.</p>'
    },

    {
      name: "War Cry",
      requiresLevel: 6,
      description: '<p>When you <strong>enter the battle with a show of force</strong>, roll +CHA. On a 10+ both, on a 7-9 one or the other.</p>' +
        '<ul>' +
        '<li>Your allies are rallied and take +1 forward.</li>' +
        '<li>Your enemies feel fear and act accordingly (avoiding you, hiding, attacking with fear-driven abandon)</li>' +
        '</ul>'
    },

    {
      name: "Mark Of Might",
      requiresLevel: 6,
      description: '<p>When you take this move and <strong>spend some uninterrupted time reflecting on your past glories</strong>, you may mark yourself with a symbol of your power (a long braid tied with bells, ritual scars or tattoos, etc.) Any intelligent mortal creature who sees this symbol knows instinctively that you are a force to be reckoned with and treats you appropriately.</p>'
    },

    {
      name: "More! Always More!",
      requiresLevel: 6,
      description: '<p>When you <strong>satisfy an appetite to the extreme</strong> (destroying something unique and significant, gaining enormous fame, riches, power, etc.) you may choose to resolve it. Cross it off the list and mark XP. While you may pursue that appetite again, you no longer feel the burning desire you once did. In its place, choose a new appetite from the list or write your own.</p>'
    },

    {
      name: "The One Who Knocks",
      requiresLevel: 6,
      description: '<p>When you <strong>Defy Danger</strong>, on a 12+ you turn the danger back on itself, the GM will describe how.</p>'
    },

    {
      name: "Healthy Distrust",
      requiresLevel: 6,
      description: '<p>Whenever the unclean magic wielded by mortal men causes you to <strong>Defy Danger</strong>, treat any result of 6- as a 7–9.</p>'
    },

    {
      name: "For The Blood God",
      requiresLevel: 6,
      description: '<p>You are initiated in the old ways, the ways of sacrifice. Choose something your gods (or the ancestor spirits, or your totem, etc) value—gold, blood, bones or the like. When you sacrifice those things as per your rites and rituals, roll+WIS.</p>' +
        '<ul>' +
        '<li>On a 10+ the GM will grant you insight into your current trouble or a boon to help you.</li>' +
        '<li> On a 7-9 the sacrifice is not enough and your gods take of your flesh as well, but still grant you some insight or boon.</li>' +
        '<li>On a miss, you earn the ire of the fickle spirits.</li>' +
        '</ul>'
    }
  ]
};
