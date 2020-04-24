export const theBarbarian = {
  name: 'The Barbarian',
  hitPoints: 24,
  damageModifier: 2,
  looks: [
    'Mighty Thews, Long Shanks, Scrawny Body, or Supple Body',
    'Tormented Eyes, Haunted Eyes, Wild Eyes, or Shrouded Eyes',
    'Strange Tattoos, Unusual Jewelry, or Unmarred by Decoration',
    'Scraps, Silks, Scavenger\'s Outfit, or Crude Hides'
  ],
  drives: [
    {
      name: 'Exile',
      description: 'Teach someone the ways of your people and learn about them in exchange.'
    },
    {
      name: 'Honor',
      description: 'Uphold your personal code of honor despite the cost or inconvenience.'
    },
    {
      name: 'Conquest',
      description: 'Prove yourself superior to someone in power.'
    }
  ],
  background: [
    'What land do you come from?',
    'What mannerism of yours most clearly marks you as an outsider?',
    'What do you admire most about the “civilized lands”?',
    'Why do the people of this land fear or hate you?'
  ],
  bonds: [
    'Which of you is just a soft city-dweller? ____',
    'To which of you do I owe a debt? ____',
    'Which of you thinks I am but a savage? ____',
    'Which of you most enjoys my stories? ____'
  ],
  baseLoad: 7,
  startingMoves: {
    backgroundOptions: [
      'Far Traveler',
      'Beast-kin',
      'Vandal'
    ],
    allOf: [
      'Pantherish Grace',
      'Herculean Appetites',
      'Musclebound',
      'The Upper Hand'
    ],
    oneOf: [
      'Herald of War',
      'Mark of Might',
      'For the Blood God',
      'Unbowed, Unbent, Unbroken',
      'Great Khan',
      'Bloodlust',
      'Is That All You\'ve Got?'
    ]
  },
  moves: [
    {
      name: 'Far Traveler',
      description: '<p>When you <strong>lead the way while you Undertake a Perilous Journey or Defy a Danger caused by the natural environment</strong>, you may tell how you have dealt with a similar trouble in your journeys before; if you do, gain advantage on your roll.</p>' +
        '<p>Additionally, when you <strong>Spout Lore about your homeland or its traditions</strong>, you cannot get a 6-, treat any such result as a 7-9 instead.</p>'
    },
    {
      name: 'Beast-kin',
      description: '<p>Your heritage includes the blood of a beast or a monster. Describe your species and appearance! You begin with three Heritage moves and three Heritage boxes, and at the start of each session (including the first one), you mark two Heritage boxes instead of one. (refer to the Heritage mechanic in the rules)</p>'
    },
    {
      name: 'Vandal',
      description: '<p>Your people know only war and violence. When you <strong>Discern Realities</strong>, on a hit you may also ask "What here is weak or vulnerable?" for free.</p>' +
        '<p>Additionally, when you <strong>prove yourself superior to someone in power</strong>, gain advantage on your next move made against their followers, underlings, and hangers-on.</p>'
    },
    {
      name: 'Pantherish Grace',
      description: '<p>While <strong>you are below your Load and not wearing armor</strong>, you have 1 armor. Shields do not count as armor for this move.</p>'
    },
    {
      name: "Herculean Appetites",
      description: '<p>Others may content themselves with just a taste of wine, or dominion over a servant or two, but you want more. <strong>Choose two appetites:</strong></p>' +
        '<ul class="move-options">' +
        '<li>Conflict and destruction</li>' +
        '<li>Bloody vengeance</li>' +
        '<li>Power over others</li>' +
        '<li>Mortal pleasures</li>' +
        '<li>Conquest</li>' +
        '<li>Discovering lost knowledge</li>' +
        '<li>Riches and property</li>' +
        '<li>Fame and glory</li>' +
        '</ul>' +
        '<p>When you <strong>would roll for a move while pursuing one of your appetites</strong>, you may re-roll one of the dice, but you must keep the second roll. If you choose to re-roll and die you re-rolled is a 1, the GM will also introduce a complication or danger that comes about due to your heedless pursuits.</p>' +
        '<p>When you level up, you may cross off one of your appetites if you feel that you have satisfied it or it no longer applies to you; if you do, you may select a new appetite in exchange. You may only do this once.</p>'
    },
    {
      name: 'Musclebound',
      description: '<p>Any melee weapon you wield gains the <em>forceful</em> and <em>messy</em> tags.</p>'
    },
    {
      name: "The Upper Hand",
      description: '<p>When you <strong>take your Last Breath</strong>, on a 7-9, you may make an offer to Death in return for your life. If Death accepts, he will return you to life. If not, you die.</p>'
    },
    {
      name: 'Herald of War',
      description: '<p>When you <strong>blow a mighty note on your brazen horn in the midst of battle</strong>, roll+CON.</p>' +
        '<ul>' +
        '<li>On a 10+, choose two.</li>' +
        '<li>On a 7-9, choose one.</li>' +
        '</ul>' +
        '<ul>' +
        '<li>Your allies shake off any fear and gain advantage on their next damage rolls</li>' +
        '<li>Choose an enemy, they are distracted, shaken, or they lose focus</li>' +
        '<li>Choose a worthy opponent, they will treat you as the greatest threat on the battlefield</li>' +
        '<li>Your enemies are stricken with fear, and may rout if pressed hard</li>' +
        '</ul>' +
        '<p>If you have not yet slain an enemy either in the current battle or since the last time you used this move, your roll gets disadvantage.</p>'
    },
    {
      name: "Mark Of Might",
      description: '<p>When you <strong>take this move and spend some uninterrupted time reflecting on your past glories</strong>, you may mark yourself with a symbol of your power (a long braid tied with bells, ritual scars or tattoos, etc.) Any intelligent mortal creature who sees this symbol knows instinctively that you are a force to be reckoned with and treats you appropriately.</p>'
    },
    {
      name: "For The Blood God",
      description: '<p>You are initiated in the old ways, the ways of sacrifice. Choose something your gods (or the ancestor spirits, or your totem, etc.) value—gold, blood, bones or the like. When you <strong>sacrifice those things as per your rites and rituals</strong>, roll+WIS.</p>' +
        '<ul>' +
        '<li>On a 10+ the GM will grant you a useful insight into your current trouble or a boon to help you.</li>' +
        '<li>On a 7-9 the sacrifice is not enough and your gods take of your flesh as well, but still grant you some insight or boon.</li>' +
        '</ul>'
    },
    {
      name: 'Unbowed, Unbent, Unbroken',
      description: '<p>When you <strong>Make Camp</strong>, you may describe a scar you gained in your most recent fight. If you do, heal an extra 1d6 HP or a debility.</p>'
    },
    {
      name: 'Great Khan',
      description: '<p>When you <strong>Recruit by rallying warriors to your banner</strong>, add your CON to the roll, and any followers you recruit gain the <em>Warrior</em> tag for free while you are leading them.</p>'
    },
    {
      name: 'Bloodlust',
      description: '<p>When you <strong>spill blood in the heat of battle—yours or another\'s—and lose yourself in battle</strong>, you ignore fear, pain, mind control, and the effects of debilities as long as you keep fighting.</p>'
    },
    {
      name: 'Is That All You\'ve Got?',
      description: '<p>When you <strong>deliberately take the full brunt of an attack</strong>, roll+CON.</p>' +
        '<ul>' +
        '<li>On a hit, choose one:' +
        '<ul>' +
        '<li>Your enemy leaves themselves open to your next move</li>' +
        '<li>You learn one of the enemy\'s weaknesses, describe it</li>' +
        '<li>Your lack of reaction infuriates or terrifies your enemy</li>' +
        '<li>You ignore all effects of the attack, other than damage. (<em>e.g.</em>: you are not moved, set on fire, poisoned, restrained, or anything else the attack would have done to you.)</li>' +
        '</ul>' +
        '</li>' +
        '<li>On a 10+, you also reduce the damage taken by half, before any armor is applied.</li>' +
        '</ul>'
    },
    {
      name: 'Multiclass Dabbler',
      requiresLevel: 6,
      description: '<p>Gain an advanced move from another playbook.</p>'
    },
    {
      name: 'Capstone',
      requiresLevel: 6,
      description: '<p>When you <strong>Hack and Slash</strong>, on a 12+ deal your damage and choose something physical your target has (a weapon, their position, a limb); they lose it.</p>'
    }
  ]
};
