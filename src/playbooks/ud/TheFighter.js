export const theFighter = {
  name: 'The Fighter',
  hitPoints: 20,
  damageModifier: 2,
  looks: [
    'Hard Eyes, Dead Eyes, or Eager Eyes',
    'Wild Hair, Shorn Hair, or Battered Helm',
    'Calloused Skin, Tanned Skin, or Scarred Skin',
    'Built Body, Lithe Body, or Ravaged Body'
  ],
  drives: [
    {
      name: 'Guardian',
      description: 'Endanger yourself to defend those weaker than you.'
    },
    {
      name: 'Warlord',
      description: 'Prove yourself in battle against a worthy opponent.'
    },
    {
      name: 'Champion',
      description: 'Choose honor over personal gain.'
    }
  ],
  background: [
    'Who taught you how to fight?',
    'What was the most memorable fight you\'ve ever been in? How did it mark you, physically or mentally?',
    'What is worth fighting for to you?',
    'What was the last major battle or war around here? Were you in it?'
  ],
  bonds: [
    'Which of you has fought with me before? Beside or against? ____',
    'Which of you am I sworn to protect? ____',
    'Which of you is most likely to get us all killed? ____',
    'Which of you needs me to toughen them up? ____'
  ],
  baseLoad: 7,
  startingMoves: {
    backgroundOptions: [
      'Military Veteran',
      'Disciple of War',
      'Intimidating Brute'
    ],
    allOf: [
      'Armored',
      'Fighting Style',
      'Victory Rush'
    ],
    oneOf: [
      'Bend Bars, Lift Gates',
      'Come and Get It',
      'Battlefield Tactics',
      'Tactical Awareness',
      'Armor Mastery',
      'Through Death\'s Eyes',
      'War Cry',
    ]
  },
  moves: [
    {
      name: 'Military Veteran',
      description: '<p>When you <strong>Spout Lore about a military unit or combat situation</strong>, you may describe a similar situation you have faced before; if you do, you roll with STR instead of INT. The first person acting on your information gains advantage on their next move.</p>' +
        '<p>Additionally, when <strong>an enemy is watching you and there\'s a difficult choice to make</strong>, the GM will tell you what the enemy expects you to do.</p>'
    },
    {
      name: 'Disciple of War',
      description: '<p>While <strong>you are not wearing armor</strong>, your maximum Focus is 4 instead of 3, and you subtract one from your roll when using Victory Rush.</p>'
    },
    {
      name: 'Intimidating Brute',
      description: '<p>When you <strong>Parley while making threats impending violence as leverage</strong>, you roll with STR instead of CHA.</p>'
    },
    {
      name: 'Armored',
      description: '<p>You ignore the <em>clumsy</em> tag on armor you wear, and any armor you wear, not including shields, has -2 weight, to a minimum of zero.</p>'
    },
    {
      name: 'Fighting Style',
      description: '<p>You\'ve been trained in a variety of combat tricks and techniques. Name your fighting style, and <strong>choose three maneuvers that are part of your style</strong>:</p>' +
        '<ul class="move-options">' +
        '<li data-value="Swordbreaker"><strong>Swordbreaker</strong>: You disarm your opponent.</li>' +
        '<li data-value="Run Through"><strong>Run Through</strong>: Your damage roll gets +3 piercing.</li>' +
        '<li data-value="Parry"><strong>Parry</strong>: The next damage roll made against you has disadvantage.</li>' +
        '<li data-value="Rally"><strong>Rally</strong>: Either you or an ally that can both see and hear you heals 1d6 HP and shakes off any fear affecting them.</li>' +
        '<li data-value="Crushing Blow"><strong>Crushing Blow</strong>: If your enemy has armor, reduce their armor by 1, to a minimum of zero.</li>' +
        '<li data-value="Cleave"><strong>Cleave</strong>: You deal your damage with disadvantage to another enemy within reach.</li>' +
        '<li data-value="Disengage"><strong>Disengage</strong>: You disengage from melee range with your enemy and safely withdraw a few steps, either before or after both of you would deal damage, your choice.</li>' +
        '<li data-value="Taunt"><strong>Taunt</strong>: You draw the enemy\'s attention fully to yourself, for as long as you keep eye contact.</li>' +
        '<li data-value="Trip"><strong>Trip</strong>: You knock the enemy to the ground.</li>' +
        '</ul>' +
        '<p>When you <strong>prepare yourself for battle (through careful strategizing, tranquil meditation, or otherwise)</strong>, lose any Focus you currently hold and hold 3 Focus. Your maximum Focus is 3.</p>' +
        '<p>When you <strong>Hack and Slash</strong>, on a hit, in addition to your dealing your damage, you may also spend a Focus. If you do, you perform a maneuver that is part of your style in addition to dealing your damage.</p>' +
        '<p>When you reach level 3, 6, or 9, choose an additional maneuver from the list to add your style.</p>'
    },
    {
      name: 'Victory Rush',
      description: '<p>When you <strong>slay an enemy in melee combat</strong>, roll a d6. If the result is less than or equal to the slain enemy\'s damage bonus, gain +1 Focus, up to your normal maximum.</p>'
    },
    {
      name: 'Bend Bars, Lift Gates',
      description: '<p>When you <strong>use pure strength to destroy an inanimate obstacle</strong>, roll+STR.</p>' +
        '<ul>' +
        '<li>On a 10+, choose three.</li>' +
        '<li>On a 7-9, choose two.</li>' +
        '</ul>' +
        '<ul>' +
        '<li>It doesn\'t take a very long time</li>' +
        '<li>Nothing of value is damaged</li>' +
        '<li>It doesn\'t make an inordinate amount of noise</li>' +
        '<li>You can fix the thing again without a lot of effort</li>' +
        '</ul>'
    },
    {
      name: 'Come and Get It',
      description: '<p>When you <strong>single out a foe in combat</strong>, roll+STR.</p>' +
        '<ul>' +
        '<li>On a 10+, choose two.</li>' +
        '<li>On a 7-9, choose one.</li>' +
        '<li>On a 6-, your foe chooses one to use against you!</li>' +
        '</ul>' +
        '<ul>' +
        '<li>No one else will attack you, except your chosen foe, until you attack someone else</li>' +
        '<li>Your damage rolls against them have advantage until you attack someone else</li>' +
        '<li>If they attack someone else or break off the fight, you may deal your damage to them as they drop their guard</li>' +
        '<li>You learn something about their true nature as you cross blades; the GM will tell you what</li>' +
        '</ul>'
    },
    {
      name: 'Battlefield Tactics',
      description: '<p>When you <strong>survey a battlefield or dangerous environment</strong>, ask the GM two of the following questions. The GM will answer truthfully.<p>' +
        '<ul>' +
        '<li>Where\'s the best way in, out, or through?</li>' +
        '<li>Where is the best place to make a defensive stand?</li>' +
        '<li>Where is the best place to attack from?</li>' +
        '<li>What here is the biggest threat to me?</li>' +
        '<li>What is the enemy\'s true position?</li>' +
        '</ul>'
    },
    {
      name: 'Tactical Awareness',
      description: '<p>When you <strong>spend Focus</strong>, you may also immediately ask one question from the Discern Realities list.</p>'
    },
    {
      name: 'Armor Mastery',
      description: '<p>When you <strong>make your armor take the brunt of damage dealt to you</strong>, the damage is negated but you must reduce the armor value of your armor or shield (your choice) by 1. If the reduction leaves the item with 0 armor it is destroyed. Damaged armor can be repaired with a few hours of work and suitable materials (1 use of Supplies).</p>'
    },
    {
      name: 'Through Death\'s Eyes',
      description: '<p>When you <strong>go into battle</strong>, roll+WIS.</p>' +
        '<ul>' +
        '<li>On a 10+, name someone who will live and someone who will die.</li>' +
        '<li>On a 7-9, name someone who will live or someone who will die. Name NPCs, not player characters. The GM will make your vision come true, if it\'s even remotely possible.</li>' +
        '<li>On a 6-, you see your own death and consequently have disadvantage on all rolls throughout the battle.</li>' +
        '</ul>'
    },
    {
      name: 'War Cry',
      description: '<p>When you <strong>enter battle with a show of force, such a shout or battle cry</strong>, roll+STR.</p>' +
        '<ul>' +
        '<li>On a 10+, choose two.</li>' +
        '<li>On a 7-9, choose one.</li>' +
        '</ul>' +
        '<ul>' +
        '<li>Your allies gain advantage on their next move</li>' +
        '<li>You gain 1 Focus, up to your normal maximum</li>' +
        '<li>Your enemies feel fear and act accordingly (avoiding you, hiding, attacking with fear-driven abandon, etc.)</li>' +
        '<li>Your enemies treat you as the most obvious threat to be dealt with, ignoring your allies until they draw attention</li>' +
        '</ul>'
    },
    {
      name: 'Capstone',
      requiresLevel: 6,
      description: '<p>When you <strong>Hack and Slash</strong>, on a 12+ you deal your damage, avoid their attack, and impress, dismay, or frighten your enemy.</p>'
    }
  ]
};
