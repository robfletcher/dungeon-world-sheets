export const theWarlock = {
  name: 'The Warlock',
  hitPoints: 16,
  damageModifier: 0,
  looks: [
    'Inky-Black Eyes, Glowing Eyes, or Blindfold',
    'Unkempt Hair, Tattooed Scalp, or Deep Hood',
    'Meticulously Groomed, Alien Robes, or Corpulent Body',
    'Missing Shadow, Chilling Skin, or Conspicuous Mark'
  ],
  drives: [
    {
      name: 'Harbinger',
      description: 'Increase your patron’s influence among mortals.'
    },
    {
      name: 'Lore',
      description: 'Discover a piece of lost knowledge.'
    },
    {
      name: 'Domination',
      description: 'Gain power or prestige for yourself at someone else’s expense.'
    }
  ],
  background: [
    'Do you keep a low profile because of your patron and powers? Why or why not?',
    'What has your patron promised you?',
    'How does your patron treat you?',
    'What small things does your patron request of you to keep your pact?'
  ],
  bonds: [
    'Which of you does my patron desire the soul of? ____',
    'Who thinks they call the shots around here? ____',
    'Whose deepest desires have I learned something of? ____',
    'Who will help me achieve my patron\'s goals, wittingly or not? ____'
  ],
  baseLoad: 4,
  startingMoves: {
    backgroundOptions: [
      'Cultist',
      'Seeker',
      'Oblate'
    ],
    allOf: [
      'Pact',
      'Hex'
    ],
    oneOf: [
      'Serpent’s Guile',
      'The Stars are Right',
      'The Power Flows Through Me',
      'Elder Sign',
      'Forbidden Knowledge',
      'Mesmerize',
      'Thaumaturgy',
    ]
  },
  moves: [
    {
      name: 'Cultist',
      description: '<p>Your patron is supported by a mystery cult; describe them and where they are typically found, then describe one advantage and one complication they have. When you <strong>search for your patron\'s followers in a place where they would be reasonably found</strong>, you\'ll usually find someone willing to offer you aid in your patron’s name.</p>'
    },
    {
      name: 'Seeker',
      description: '<p>In your search for arcane knowledge, you have discovered Things Man Was Not Meant to Know. Add the following option to Hex:</p>' +
        '<ul>' +
        '<li>You create an effect from the Wizard’s Cantrip list</li>' +
        '</ul>'
    },
    {
      name: 'Oblate',
      description: '<p>Your patron has chosen you to be their herald in this world, perhaps because you sought them out, you were offered as a sacrifice, or for their own unfathomable reasons. At the beginning of the session, mark this box:</p>' +
        '<ul class="move-options">' +
        '<li>When you <strong>would gain a Debt</strong>, you may erase the mark in above box instead.</li>' +
        '</ul>'
    },
    {
      name: 'Pact',
      description: '<p>You have made a pact with a powerful being from beyond your reality that desires more influence in your world. In exchange, it has given you power. Fill in the following blanks:</p>' +
        '<ul class="move-options">' +
        '<li class="move-option-custom-value" data-option-id="patron">My patron is</li>'+
        '<li class="move-option-custom-value" data-option-id="domain">…master of the domain of</li>'+
        '<li class="move-option-custom-value" data-option-id="known-as">…known among mortals as the</li>'+
        '<li class="move-option-custom-value" data-option-id="appears-as">…It appears in my visions as</li>'+
        '<li class="move-option-custom-value" data-option-id="mark">…and has marked me with</li>'+
        '<li class="move-option-custom-value" data-option-id="desire">…Its desire for this world is</li>' +
        '</ul>' +
        '<p>When you <strong>Discern Realities</strong>, add the following question to the list:</p>' +
        '<ul>' +
        '<li>How can I best serve my patron’s desire here?</li>' +
        '</ul>' +
        '<p>When you <strong>fulfill your patron’s desire</strong>, lose up to 3 Debt you hold.</p>'
    },
    {
      name: 'Hex',
      description: '<p>When you <strong>draw upon the power of your patron to cripple your foes</strong>, name your target in <em>near</em> range and roll+INT.</p>' +
        '<ul>' +
        '<li>On a hit, choose one, describing how your patron\'s power manifests itself in the real world.</li>' +
        '<li>On a 7-9, also gain 1 Debt:' +
        '<ul>' +
        '<li>They are filled with a supernatural sense of dread, making them cower or flinch for a few moments</li>' +
        '<li>They are blinded, deafened or stricken mute for a few moments</li>' +
        '<li>They briefly stumble or drop what they\'re holding</li>' +
        '<li>You deal your damage to your target, and add one of these tags to the effect: <em>forceful</em>, <em>subtle</em>, <em>+CHA piercing</em></li>' +
        '</ul>' +
        '</li>' +
        '</ul>' +
        '<p>When you <strong>roll doubles for any move while you hold Debt</strong>, if the number showing on either die is less than or equal to your Debt, the move is automatically a miss, and the GM may spend up to 3 of your Debt; they choose one for each Debt spent, describing how the effect manifests:</p>' +
        '<ul>' +
        '<li>Corruption seeps out around you, someone or something nearby is corrupted, warped, or tainted</li>' +
        '<li>Your patron takes an action through you, using your body as its vessel</li>' +
        '<li>The power warps your body or mind, the GM will describe how, and may also tell you to mark a debility of their choice</li>' +
        '</ul>'
    },
    {
      name: 'Serpent’s Guile',
      description: '<p>When you <strong>Parley with someone or Discern Realities concerning them</strong>, on a 10+ you also learn something about their true nature or what they desire most, the GM will tell you what. When you <strong>act on this information</strong>, the next move you make gets advantage.</p>'
    },
    {
      name: 'The Stars are Right',
      description: '<p>When you <strong>perform a ritual to summon one of your patron\'s servants from beyond this world</strong>, describe what you wish to summon, then roll+CHA and find out what comes through.</p>' +
        '<ul>' +
        '<li>On a 10+, choose three.</li>' +
        '<li>On a 7-9, choose two.</li>' +
        '<li>On a 6-, choose one anyway, but what you call forth will not be what you wanted.' +
        '<ul>' +
        '<li>You stay firmly in control (otherwise, not so much)</li>' +
        '<li>It fulfills its purpose and leaves without incident (otherwise, it has its own agenda or will try to subvert your intent)</li>' +
        '<li>It’s perfect for the job (otherwise, there\'s collateral damage)</li>' +
        '<li>Your soul isn’t tainted (otherwise, gain a Debt)</li>' +
        '</ul>' +
        '</li>' +
        '</ul>'
    },
    {
      name: 'The Power Flows Through Me',
      description: '<p>When you <strong>summon an aspect of your patron\'s domain to perform a service for you</strong>, describe what you wish to happen and roll+CHA.</p>' +
        '<ul>' +
        '<li>On a 10+, choose two.</li>' +
        '<li>On a 7-9, choose one:' +
        '<ul>' +
        '<li>The effect comes to pass exactly as you envisioned it</li>' +
        '<li>You avoid paying your patron\'s price</li>' +
        '<li>You retain control</li>' +
        '</ul>' +
        '</li>' +
        '</ul>' +
        '<p>The larger your task, the greater price you can expect to pay, and the greater the dangers that may arise from losing control.</p>'
    },
    {
      name: 'Elder Sign',
      description: '<p>When you <strong>use arcane words and sigils to banish a creature from another plane of existence</strong>, roll+INT.</p>' +
        '<ul>' +
        '<li>On a hit, it may not approach you further unless you allow it to (or you let your guard down).</li>' +
        '<li>On a 10+, if it lacks an anchor in this world, it must return to whence it came, and the GM will also tell you one further thing you can do to bar it from ever returning to this plane.</li>' +
        '</ul>'
    },
    {
      name: 'Forbidden Knowledge',
      description: '<p>When you <strong>ritually petition your patron for knowledge</strong>, ask a question about anything you like, then roll+CHA.</p>' +
        '<ul>' +
        '<li>On a 10+, choose one.</li>' +
        '<li>On a 7-9, choose two.</li>' +
        '<li>On a 6-, all three.' +
        '<ul>' +
        '<li>The vision is unclear and shrouded in symbolism</li>' +
        '<li>The answer is twisted to serve your patron\'s will</li>' +
        '<li>You gain a Debt</li>' +
        '</ul>' +
        '</li>' +
        '</ul>' +
        '<p>The GM will describe your vision to you, answering your question as clearly as the vision allows.</p>'
    },
    {
      name: 'Mesmerize',
      description: '<p>When you <strong>gaze deeply into a person\'s eyes</strong>, roll+CHA.</p>' +
        '<ul>' +
        '<li>On a 10+, choose three.</li>' +
        '<li>On a 7-9, gain a Debt and choose two:' +
        '<ul>' +
        '<li>They treat you as a friend until you prove otherwise • They run in terror</li>' +
        '<li>They give you something they hold</li>' +
        '<li>They truthfully answer one question</li>' +
        '<li>They forget that you were ever there</li>' +
        '<li>Their mind is not damaged by the contact</li>' +
        '</ul>' +
        '</li>' +
        '</ul>'
    },
    {
      name: 'Thaumaturgy',
      description: '<p>Gain an advanced move from the Wizard playbook.</p>'
    },
    {
      name: 'Capstone',
      requiresLevel: 6,
      description: '<p>Add either an additional desire or an additional domain to your Pact.</p>'
    }
  ]
};
