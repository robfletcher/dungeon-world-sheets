export const theThief = {
  name: 'The Thief',
  hitPoints: 16,
  damageModifier: 1,
  looks: [
    'Shifty Eyes, Eyepatch, or Criminal Eyes',
    'Hooded Head, Messy Hair, or Cropped Hair',
    'Dark Clothes, Fancy Clothes, or Common Clothes',
    'Lean Body, Tense Body, or Quick Body'
  ],
  drives: [
    {
      name: 'Treasure Hunter',
      description: 'Take a major risk to acquire something valuable.'
    },
    {
      name: 'Infiltrator',
      description: 'Infiltrate a secure or dangerous location.'
    },
    {
      name: 'Daredevil',
      description: 'Leap into danger without a plan.'
    }
  ],
  background: [
    'What made you turn to a thieves\' life?',
    'What was your biggest score?',
    'What\'s the ace up your sleeve? How did you get it?',
    'What makes you trust your companions? Why should they trust you?'
  ],
  bonds: [
    'Which of you is the only one that trusts me? ____',
    'Which of you has my back? ____',
    'Which of you thinks I\'m a worthless rat? ____',
    'Which of you is willing to do what it takes? ____'
  ],
  baseLoad: 6,
  startingMoves: {
    backgroundOptions: [
      'Burglar',
      'Assassin',
      'Street Rat'
    ],
    allOf: [
      'Danger Sense',
      'Backstab',
      'Tricks of the Trade',
      'Pants on Fire'
    ],
    oneOf: [
      'Connections',
      'Shoot First',
      'Silvertongue',
      'Escape Route',
      'Poisoner',
      'Heist',
      'Like a Ghost',
    ]
  },
  moves: [
    {
      name: 'Burglar',
      description: '<p>When you <strong>Discern Realities or use Danger Sense</strong>, you may ask the GM "What here is useful or valuable to me?" for free, even on a miss.</p>'
    },
    {
      name: 'Assassin',
      description: '<p>Add the following to the list of options for Backstab:</p>' +
        '<ul>' +
        '<li>You temporarily disable one of their limbs or senses</li>' +
        '</ul>' +
        '<p>When you <strong>Backstab</strong>, on a 10+ you get three choices from the list instead of two.</p>'
    },
    {
      name: 'Street Rat',
      description: '<p>When you <strong>have a moment\'s distraction and available cover</strong>, you can disappear from view and get into hiding, just like that.</p>'
    },
    {
      name: 'Danger Sense',
      description: '<p>When you <strong>take a moment to survey an area</strong>, you may ask the GM "Is there an ambush or trap here?" If the answer is "yes", roll+WIS.</p>' +
        '<ul>' +
        '<li>On a 10+, ask the GM three questions from the list below. </li>' +
        '<li>On a 7- 9, ask one.' +
        '<ul>' +
        '<li>What will trigger the trap or ambush?</li>' +
        '<li>What will happen once it\'s triggered?</li>' +
        '<li>How could it be disarmed or thwarted?</li>' +
        '<li>What else should I be on the lookout for?</li>' +
        '</ul>' +
        '</li>' +
        '</ul>'
    },
    {
      name: 'Backstab',
      description: '<p>When you <strong>attack an unaware foe in melee</strong>, either deal your damage or roll+DEX.</p>' +
        '<ul>' +
        '<li>On a 10+, deal your damage and pick two.</li>' +
        '<li>On a 7-9, deal your damage and pick one.' +
        '<ul>' +
        '<li>Your damage roll ignores armor</li>' +
        '<li>You slip away before they can react or strike back</li>' +
        '<li>You stun or hamper them for a few moments, anyone taking advantage of this gains advantage</li>' +
        '<li>You steal a visible, unprotected item off of their person; they won\'t notice it\'s gone until you flaunt that you have it</li>' +
        '<li>You reduce their armor by 1 until they repair it</li>' +
        '<li>They can\'t make any noise or raise the alarm for a few moments after you strike</li>' +
        '</ul>' +
        '</li>' +
        '</ul>'
    },
    {
      name: 'Tricks of the Trade',
      description: '<p>When you <strong>pick locks or pockets or disable traps</strong>, roll+DEX.</p>' +
        '<ul>' +
        '<li>On a 10+, you do it, no problem.</li>' +
        '<li>On a 7-9, you still do it, but the GM will offer you two options between suspicion, danger, or cost.</li>' +
        '</ul>'
    },
    {
      name: 'Pants on Fire',
      description: '<p>When <strong>a move has another player (including the GM) ask you a question about your character</strong>, you can answer however you like, honestly or not.</p>'
    },
    {
      name: 'Connections',
      description: '<p>When you put out word to the criminal underbelly about something you want or need, roll+CHA.</p>' +
        '<ul>' +
        '<li>On a 10+, someone has it or can get it, for a reasonable price.</li>' +
        '<li>On a 7-9, you\'ll have to settle for something close or it comes with strings attached, your choice.</li>' +
        '</ul>'
    },
    {
      name: 'Shoot First',
      description: '<p>You\'re never caught by surprise. When <strong>an enemy would get the drop on you</strong>, you get to act first instead.</p>'
    },
    {
      name: 'Silvertongue',
      description: '<p>When you <strong>use lies, bluster, or deception to avoid suspicion or get out of trouble</strong>, roll+CHA.</p>' +
        '<ul>' +
        '<li>On 10+, hold 3</li>' +
        '<li>On 7-9, hold 1.</li>' +
        '</ul>' +
        '<p>Spend a hold to do one of the following, describing how you do it:</p>' +
        '<ul>' +
        '<li>Move about or maneuver unchallenged</li>' +
        '<li>Withstand direct scrutiny or questioning</li>' +
        '<li>Direct suspicion or attention elsewhere</li>' +
        '<li>Provide cover for an ally</li>' +
        '</ul>' +
        '<p>Remember that every lie is doomed to be revealed, eventually. When <strong>your deception is exposed</strong>, lose any hold remaining on this move.</p>'
    },
    {
      name: 'Escape Route',
      description: '<p>When <strong>you\'re in too deep and need a way out</strong>, name your escape route and roll+DEX.</p>' +
        '<ul>' +
        '<li>On a hit, you\'re gone.</li>' +
        '<li>On a 7-9, you leave something behind or take something with you, the GM will say what.</li>' +
        '</ul>'
    },
    {
      name: 'Poisoner',
      description: '<p>You may spend a use of Supplies to produce a vial of poison. When you do, say what it does, and the GM will choose one:<p>' +
        '<ul>' +
        '<li>It will have some limitation on its use (it must be ingested to take effect, it\'s unstable and must be used right away, etc.)</li>' +
        '<li>It\'s not as strong as you would wish</li>' +
        '<li>It\'ll take a while to take effect</li>' +
        '<li>It\'ll have obvious or undesirable side effects</li>' +
        '</ul>' +
        '<p>Regardless of the GM\'s choice, all poisons are <em>dangerous</em> to handle.</p>'
    },
    {
      name: 'Heist',
      description: '<p>When you <strong>take time to make a plan to steal something</strong>, name the thing you want to steal and ask the GM two the following questions:</p>' +
        '<ul>' +
        '<li>Who will notice it\'s missing?</li>' +
        '<li>What\'s its most powerful defense?</li>' +
        '<li>Who will come after it?</li>' +
        '<li>Who else wants it?</li>' +
        '</ul>' +
        '<p>When <strong>someone acts on an answer for the first time</strong>, they gain advantage on a move that follows.</p>'
    },
    {
      name: 'Like a Ghost',
      description: '<p>When you <strong>roll for another move that you want to perform in a clandestine manner</strong>, you may choose options equal to your DEX or less (but not fewer than none), and then tell the other players:</p>' +
        '<ul>' +
        '<li>…how you draw attention elsewhere instead of to you</li>' +
        '<li>…how you stay out of sight</li>' +
        '<li>…that you remain silent</li>' +
        '<li>…why you leave no trace behind</li>' +
        '</ul>' +
        '<ul>' +
        '<li>On a 10+, all that you say is true.</li>' +
        '<li>On a 7-9, the GM chooses one of your statements to be false, the others are true.</li>' +
        '<li>On a 6-, no guarantees.</li>' +
        '</ul>'
    },
    {
      name: 'Capstone',
      requiresLevel: 6,
      description: '<p>When you <strong>Volley</strong>, on a 12+ your shot hits a vital point, ignoring armor and debilitating or crippling the target somehow. The GM will describe it.</p>'
    }
  ]
};
