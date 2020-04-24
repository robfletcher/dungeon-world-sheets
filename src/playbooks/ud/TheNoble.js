export const theNoble = {
  name: 'The Noble',
  hitPoints: 16,
  damageModifier: 0,
  looks: [
    'Coronet, Fancy Hat, or Flowing Locks',
    'Shrewd Eyes, Haughty Eyes, or Greedy Eyes',
    'Ostentatious Clothing, Fashionable Clothing, or Military Dress',
    'Rotund Body, Immaculately Groomed, or Graceful Body'
  ],
  drives: [
    {
      name: 'Celebrity',
      description: 'Increase the prestige of yourself or your family.'
    },
    {
      name: 'Noblesse Oblige',
      description: 'Aid the lower classes when other rulers can\'t or won\'t.'
    },
    {
      name: 'Pride',
      description: 'Show your or your family\'s superiority over other members of the nobility.'
    }
  ],
  background: [
    'Where is your home, and what does it look like?',
    'How do you feel about the common folk, and how do they feel about you?',
    'What mannerism of yours sets you apart from commoners?',
    'What is your family name most well-known for?'
  ],
  bonds: [
    'Which of you has helped me get where I am today? ____',
    'Which of you would I not be caught dead with under normal circumstances (which adventuring certainly is not)? ____',
    'Which of you has some complicated history with my family? ____',
    'Which of you am I most likely to listen to for counsel? ____'
  ],
  baseLoad: 6,
  startingMoves: {
    backgroundOptions: [
      'Decadent Dilettante',
      'Prodigal Progeny',
      'Last Scion'
    ],
    allOf: [
      'Mark of Privilege',
      'Well-Educated',
      'Lord of the Manor'
    ],
    oneOf: [
      'Council',
      'Cutting Words',
      'Sly Flourish',
      'Courtier',
      'Money Talks',
      'Born Leader',
      'Blood of Heroes',
    ]
  },
  moves: [
    {
      name: 'Decadent Dilettante',
      description: '<p><strong><em>Your Estates is +2</em></strong></p>' +
        '<p>You\'ve lived a life of luxury, and you know how to throw the best parties. When you <strong>Carouse</strong>, your roll gains advantage, and add the following option to the Carouse list:</p>' +
        '<ul>' +
        '<li>You make some useful connections; you gain advantage the next time you use Mark of Privilege in this place</li>' +
        '</ul>'
    },
    {
      name: 'Prodigal Progeny',
      description: '<p><strong><em>Your Estates is +1</em></strong></p>' +
        '<p>You\'re far down the line of your family\'s succession, so you must earn your glory the hard way. Your damage modifier is now +1.</p>'
    },
    {
      name: 'Last Scion',
      description: '<p><strong><em>Your Estates is +0</em></strong></p>' +
        '<p>Your once-proud family has fallen upon hard times. You can use your Mark of Privilege move with shady dealers, outlaws and other rogues; if you do so, you roll with +CHA instead of +Estates.</p>'
    },
    {
      name: 'Mark of Privilege',
      description: '<p>You are a scion of a noble line, and your family name carries weight. This is represented by your Estates ability, which comes from your choice of Background. Note that this does not mean you have easy, immediate access to wealth, but you can arrange it.</p>' +
        '<p>When you leverage your family\'s resources and influence among people who respect the nobility to get something done, roll+Estates.</p>' +
        '<ul>' +
        '<li>On a 10+, you can make it happen, but choose one.</li>' +
        '<li>On a 7-9, it can be done, but choose one, and the GM chooses one.' +
        '<ul>' +
        '<li>You\'ll owe someone; you can\'t use this move again until the debt is settled</li>' +
        '<li>You\'ll have to settle for something close to what you wanted</li>' +
        '<li>You\'ll draw unwanted attention to yourself</li>' +
        '<li>There will be some strings attached</li>' +
        '</ul>' +
        '</li>' +
        '</ul>' +
        '<p>The bigger your request, the bigger the troubles you can expect from acquiring it.</p>'
    },
    {
      name: 'Well-Educated',
      description: '<p>As a member of the nobility, you have been given an excellent education. <strong>Choose your two best subjects:</strong></p>' +
        '<ul class="move-options">' +
        '<li>History of the Known World</li>' +
        '<li>Gods and Their Servants</li>' +
        '<li>Geography and Politics</li>' +
        '<li>Languages and Culture</li>' +
        '<li>Warfare and Strategy</li>' +
        '<li>Magic and Legends</li>' +
        '</ul>' +
        '<p>When you <strong>Spout Lore concerning one of your best subjects</strong>, your roll gains advantage.</p>'
    },
    {
      name: 'Lord of the Manor',
      description: '<p>Your family owns a manor or similar house; describe it and add it to the map! While you <strong>are in your family’s manor</strong>, any roll you make with +Estates gets advantage.</p>' +
        '<p><strong>Choose properties for your manor equal to your Estates+1:</strong></p>' +
        '<ul class="move-options">' +
        '<li>Fortified walls</li>' +
        '<li>Famous history (describe it!)</li>' +
        '<li>Loyal servants (name them!)</li>' +
        '<li>Useful location (choose strategic, hidden, or commercial)</li>' +
        '<li>Hidden passages and catacombs</li>' +
        '<li>Magical laboratory</li>' +
        '<li>Secret entrance or escape route</li>' +
        '<li>Notable resident (name them, and say why they are important)</li>' +
        '</ul>'
    },
    {
      name: 'Council',
      description: '<p>When you <strong>arrange a council to discuss politics</strong>, roll+Estates.</p>' +
        '<ul>' +
        '<li>On a 10+, ask the GM two of the following questions.</li>' +
        '<li>On a 7-9, ask one.' +
        '<ul>' +
        '<li>What is the greatest threat to me or my home, right now?</li>' +
        '<li>Who holds influence in/with ________?</li>' +
        '<li>What is the relationship between ________ and ________?</li>' +
        '<li>Can I trust ________? (to ________?)</li>' +
        '</ul>' +
        '</li>' +
        '</ul>'
    },
    {
      name: 'Cutting Words',
      description: '<p>When you <strong>viciously rebuke, mock, or taunt an NPC</strong>, roll+CHA.</p>' +
        '<ul>' +
        '<li>On a hit, they must either rush to attack you or lose the respect of their peers, their choice.</li>' +
        '<li>On a 10+, you also choose one:' +
        '<ul>' +
        '<li>Your next move against them gains advantage</li>' +
        '<li>They let something hidden slip when you fluster them, ask the GM a question about them, they must answer it honestly</li>' +
        '</ul>' +
        '</li>' +
        '</ul>'
    },
    {
      name: 'Sly Flourish',
      description: '<p>When you cross blades with an uncouth brute, roll+CHA.</p>' +
        '<ul>' +
        '<li>On a 10+, choose three.</li>' +
        '<li>On a 7-9, choose one:' +
        '<ul>' +
        '<li>You lock blades with them, holding their full attention for a few moments</li>' +
        '<li>You close the distance or disengage with them</li>' +
        '<li>You move your enemy somewhere within your reach, but not a place that would be immediately harmful</li>' +
        '<li>You avoid any counterattack or retaliation</li>' +
        '<li>You deal your damage with disadvantage</li>' +
        '</ul>' +
        '</li>' +
        '</ul>'
    },
    {
      name: 'Courtier',
      description: '<p>When you <strong>meet with someone for diplomatic affairs</strong>, ask the GM two questions from the list below, they will answer truthfully:</p>' +
        '<ul>' +
        '<li>Is there an ambush waiting for me?</li>' +
        '<li>What are they really feeling?</li>' +
        '<li>What is my best way out of this?</li>' +
        '<li>Who is watching?</li>' +
        '</ul>'
    },
    {
      name: 'Money Talks',
      description: '<p>When you <strong>attempt to sway a person or group using your wealth or status</strong>, roll+Estates.' +
        '<ul>' +
        '<li>On a 10+, they are impressed and treat you with respect and deference. Not everyone in the community may feel this way, but the majority does.</li>' +
        '<li>On a 7-9, they are cordial at least, but your actions have stirred up something unwelcome as well.</li>'+
        '</ul>'
    },
    {
      name: 'Born Leader',
      description: '<p>When you <strong>take the lead in a charged situation and give someone else orders</strong>:</p>' +
        '<p>For a PC, if they follow your order, they gain advantage on their next move, no more than once per situation.</p>' +
        '<p>For an NPC, roll+CHA.</p>' +
        '<ul>' +
        '<li>On a 10+, hold 3.</li>' +
        '<li>On a 7-9, hold 1.</li>' +
        '</ul>' +
        '<p>Spend a hold to make them:</p>' +
        '<ul>' +
        '<li>Obey even a dangerous or degrading order</li>' +
        '<li>Rally together and shake off any fear, doubt, or hesitation</li>' +
        '<li>Maintain or re-establish discipline when things are chaotic</li>' +
        '</ul>'
    },
    {
      name:'Blood of Heroes',
      description: '<p>Your noble ancestry includes a famous hero, and you show signs of their talents. Describe them, then gain a move from another playbook that your ancestor would reasonably have, even a starting move.</p>' +
        '<p><em>(Other playbooks may not take this move.)</em></p>'
    },
    {
      name: 'Capstone',
      requiresLevel: 6,
      description: '<p>Increase your Estates by 1, describing how your actions have increased you or your family’s wealth and prestige</p>'
    }
  ]
};
