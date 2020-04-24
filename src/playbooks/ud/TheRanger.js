export const theRanger = {
  name: 'The Ranger',
  hitPoints: 18,
  damageModifier: 1,
  looks: [
    'Wild Eyes, Sharp Eyes, or Animal Eyes',
    'Hooded Head, Wild Hair, or Bald',
    'Camouflaged Clothing, Dark Clothing, or All-Weather Clothing',
    'Long Shanks, Lean Body, or Rugged Body'
  ],
  drives: [
    {
      name: 'Wildling',
      description: 'Eschew a convention of the civilized world.'
    },
    {
      name: 'Naturalist',
      description: 'Help an animal or spirit of the wild.'
    },
    {
      name: 'Sentinel',
      description: 'Endanger yourself to combat an unnatural threat.'
    }
  ],
  background: [
    'What keeps you coming back to civilization? How do other people treat you?',
    'How do most people view the wilderness, and why?',
    'What\'s the most significant monster you\'ve encountered?',
    'What are you most often asked to do by others?'
  ],
  bonds: [
    'Which of you have I guided before? ____',
    'Which of you is a friend of nature? ____',
    'Which of you has no business being out here? ____',
    'Which of you looks more like prey to me? ____'
  ],
  baseLoad: 6,
  startingMoves: {
    backgroundOptions: [
      'Outrider',
      'Wilderness Guide',
      'Warden of Nature'
    ],
    allOf: [
      'Scout Ahead',
      'Skirmisher',
      'Wild Quiver'
    ],
    oneOf: [
      'Blot Out the Sun',
      'Camouflage',
      'Wild Empathy',
      'Hunt and Track',
      'Trailblazer',
      'Trick Shot',
      'Trapper',
    ]
  },
  moves: [
    {
      name: 'Outrider',
      description: '<p>When you <strong>Scout Ahead</strong>, choose one more option, even on a miss, and add the following to the questions you can ask by spending a pick from Scout Ahead:</p>' +
        '<ul>' +
        '<li>Where could I best hide or blend in around here?</li>' +
        '<li>Where\'s my best way in, out, or through this place?</li>' +
        '<li>What can I see that no one else can see?</li>' +
        '</ul>'
    },
    {
      name: 'Wilderness Guide',
      description: '<p>You can always find your way back to a place you have been to before without Defying Danger from getting lost or any natural rough terrain, and you can make a map of any place you have been or explored with ease. When you <strong>lead the way while Undertaking a Perilous Journey</strong>, you gain advantage to the roll.</p>'
    },
    {
      name: 'Warden of Nature',
      description: '<p>When you <strong>Spout Lore about a monster</strong>, you roll with WIS instead of INT.</p>' +
        '<p>Additionally, choose a favorite type of enemy such as dragons, giants, goblin-kin, or demons: <ul class="move-options"><li class="move-option-custom-value" data-option-id="favorite-enemy"></li></ul></p>' +
        '<p>Also, add the following to the list of questions for Skirmisher:</p>' +
        '<ul>' +
        '<li>Am I fighting my favorite type of enemy?</li>' +
        '</ul>'
    },
    {
      name: 'Scout Ahead',
      description: '<p>When you <strong>go off on your own to explore a dangerous area</strong>, say how you do it and roll+DEX.</p>' +
        '<ul>' +
        '<li>On a hit, you make it back safely; the GM will describe what you encountered.</li>' +
        '<li>On a 10+, choose three.</li>' +
        '<li>On a 7-9, choose one.' +
        '<ul>' +
        '<li>Ask a question from the Discern Realities list about what you encountered (you may choose this more than once)</li>' +
        '<li>You were able to sneak something out of there; the GM will tell you what you got</li>' +
        '<li>You made some preparation or created some advantage to exploit upon your return; work out the details with the GM</li>' +
        '<li>You got away clean, leaving no trace and rousing no suspicion</li>' +
        '</ul>' +
        '</li>' +
        '<li>On a 6-, choose one:' +
        '<ul>' +
        '<li>You make it back, but with trouble hot on your heels! The GM will tell you what follows you</li>' +
        '<li>You\'re missing in action; the details will be revealed later</li>' +
        '</ul>' +
        '</li>' +
        '</ul>'
    },
    {
      name: 'Skirmisher',
      description: '<p>When you <strong>enter a battle</strong>, answer the following questions:</p>' +
        '<ul>' +
        '<li>Am I neither encumbered, nor wearing armor with the clumsy tag?</li>' +
        '<li>Have I scouted this threat?</li>' +
        '<li>Is there ample room to maneuver here?</li>' +
        '<li>Is the enemy much larger than I am?</li>' +
        '</ul>' +
        '<p>For each question you answered "yes" to, hold 1 Readiness. During the battle, you may spend a Readiness to accomplish one of the following, describing how you do it:</p>' +
        '<ul>' +
        '<li>Draw an enemy\'s attention to you and lure them into a bad position</li>' +
        '<li>Close the distance between you and an enemy before they can react</li>' +
        '<li>Disengage from melee range of an enemy, avoiding any retaliation</li>' +
        '<li>Evade a hazard on the battlefield without Defying Danger</li>' +
        '</ul>' +
        '<p>When <strong>the battle ends</strong>, lose any remaining Readiness you hold.</p>'
    },
    {
      name: 'Wild Quiver',
      description: '<ul class="move-options">' +
        '<li data-value="wild-quiver">When you <strong>Make Camp</strong>, mark this box:</li>' +
        '</ul>' +
        '<p>When you <strong>would mark Supplies to spend ammo</strong>, you may erase the mark in above box instead. You cannot use this ability if you are without your quiver of arrows (it\'s been dropped, stolen, confiscated, etc.), or you are otherwise established as being out of ammo in the fiction.</p>'
    },
    {
      name: 'Blot Out the Sun',
      description: '<p>When you <strong>Volley</strong>, you can spend 1 Supply of ammo (or mark your Wild Quiver box) before you roll to give your attack the area tag; roll damage separately for each target.</p>'
    },
    {
      name: 'Camouflage',
      description: '<p>When you <strong>keep still in natural surroundings</strong>, enemies never spot you until you do something to reveal yourself (such as attacking or moving quickly).</p>' +
        '<p>When you <strong>move with care and calm</strong>, you make no noise and leave no sign of your passage.</p>'
    },
    {
      name: 'Wild Empathy',
      description: '<p>You can speak with and understand animals, and you can closely study and Parley with them as if they were people, and you may also Recruit animals as if they were followers, with all the normal rules.</p>'
    },
    {
      name: 'Hunt and Track',
      description: '<p>When you <strong>spend a few moments scanning your surroundings</strong>, you can ask the GM "What tracks or signs of passage are here?", they will answer honestly.</p>' +
        '<p>When you <strong>Discern Realities by studying tracks or signs of passage</strong>, you gain advantage on the roll, and add "Where did they go?" and "Where did they come from?" to the list of questions you may ask. If you ask either of these questions, you can follow the trail until there\'s a significant change in direction or mode of travel.</p>'
    },
    {
      name: 'Trailblazer',
      description: '<p>When you <strong>Defy Danger to overcome a natural obstacle or difficult terrain</strong>, on a hit, you may also bring one of your companions through with you safely. Whatever you roll, you may sacrifice a piece of your gear to ignore a consequence—whichever piece is most readily at hand or makes the most sense. If this is gear that is still undefined, say what it is now.<p>'
    },
    {
      name: 'Trick Shot',
      description: '<p>When you <strong>make an improbable bow shot with an unusual effect</strong>, describe what you want to happen and roll+DEX.</p>' +
        '<ul>' +
        '<li>On a 10+, the GM will tell you one thing you have to do to pull off the shot.</li>' +
        '<li>On a 7-9, up to three things.' +
        '<ul>' +
        '<li>Spend some time lining up the shot</li>' +
        '<li>Get into a vulnerable position</li>' +
        '<li>Spend 1 Supplies of ammo or mark your Wild Quiver box</li>' +
        '<li>Sacrifice or endanger something important</li>' +
        '</ul>' +
        '</li>' +
        '</ul>'
    },
    {
      name: 'Trapper',
      description: '<p>You may spend a use of Supplies to produce materials for a trap. When you <strong>set a trap</strong>, describe how you set it and choose two effects:</p>' +
        '<ul>' +
        '<li>The trap deals your damage to the target</li>' +
        '<li>The target is ensnared and cannot escape until it breaks the trap; strong monsters can break out of the trap faster</li>' +
        '<li>The trap sets off a loud alarm; no matter where you are, you\'ll hear it or be able to sense when it goes off</li>' +
        '<li>The target\'s ability to run is impaired, describe how</li>' +
        '<li>The target is moved a short distance</li>' +
        '</ul>' +
        '<p>When <strong>a monster stumbles into your trap</strong>, roll+WIS.</p>' +
        '<ul>' +
        '<li>On a 10+, you get both effects.</li>' +
        '<li>On a 7-9, you get one, your choice.</li>' +
        '</ul>'
    },
    {
      name: 'Capstone',
      requiresLevel: 6,
      description: '<p>When you <strong>Volley</strong>, on a 12+ your shot hits a vital point, ignoring armor and debilitating or crippling the target somehow. The GM will describe it.</p>'
    }
  ]
};
