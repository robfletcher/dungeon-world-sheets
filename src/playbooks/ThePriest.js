export const thePriest = {
  description: "<p>The lands of Dungeon World have been forsaken. No gods walk these lands, not anymore. Now these lands are a battleground between their followers, their remnants, their men of the cloth. It is not a battle that is always fought with blades, and that is why this battleground needs you.</p>" +
    "<p>With simple words, you spread the faith of your deity to those who would not believe. With humble words, you beseech your deity for a miracle, and it listens. Where you walk, so too walks your god, and it is through your faith that this power is made manifest. Wherever you go, the heavens follow. Your deity watches your every move, and through him, your success is guaranteed.</p>" +
    "<p>Spread the faith, Priest, and know that none shall dare lay a hand on you.</p>",
  name: "The Priest",
  baseHitPoints: 6,
  damageDieFaces: 6,
  looks: [
    {
      category: "Body",
      suggestions: "Thin, knobby, flabby…"
    },
    {
      category: "Eyes",
      suggestions: "Kind, sharp, sad…"
    },
    {
      category: "Hair",
      suggestions: "Strange, tonsure, bald…"
    },
    {
      category: "Clothes",
      suggestions: "Flowing robes, habit, common…"
    }
  ],
  drives: [
    {
      name: "Ambition",
      description: "Gain recognition from or hold a debt over an NPC of importance."
    },
    {
      name: "Charity",
      description: "Bring relief to an NPC who is suffering."
    },
    {
      name: "Evangelism",
      description: "Instruct an NPC in the tenets of your faith."
    },
    {
      name: "Inquisition",
      description: "Reveal the failings or falsehoods of another."
    },
    {
      name: "Orthodoxy",
      description: "Start trouble (for yourself or others) by adhering strictly to doctrine.",
    }
  ],
  baseLoad: 7,
  startingMoves: {
    allOf: [
      "Invocation",
      "Divine Ward",
      "Lead the Flock"
    ]
  },
  moves: [
    {
      name: "Invocation",
      description: '<p>When you <strong>call out for your deity\'s aid in a time of need</strong>, choose a Blessing and roll +WIS.</p>' +
        '<ul>' +
        '<li>On a 10+, your deity will intervene on your behalf - the GM will tell you how.</li>' +
        '<li>On a 7-9, your deity will grant your Blessing, but you will also need to choose a Requirement.</li>' +
        '</ul>' +
        '<p><strong>Blessing</strong></p>' +
        '<ul>' +
        '<li>Your invocation manipulates the realm your deity Controls.</li>' +
        '<li>Your invocation commands something your deity Represents.</li>' +
        '<li>Your invocation bolsters your deity\'s Worshippers.</li>' +
        '<li>Your invocation rebukes your deity\'s Enemies.</li>' +
        '</ul>' +
        '<p><strong>Requirement</strong></p>' +
        '<ul>' +
        '<li>Your invocation is obvious and immediate, drawing attention to you.</li>' +
        '<li>The intervention is subtle or takes a while to manifest.</li>' +
        '<li>Your deity demands something in return. The GM will tell you what.</li>' +
        '<li>The divine experience leaves you dizzy with euphoria (or terror). You take -1 ongoing to Invoke until you have time to pray quietly for a while.</li>' +
        '</ul>'
    },

    {
      name: "Divine Ward",
      description: '<p>When you <strong>call upon your deity for protection for yourself or an ally</strong>, roll +WIS.</p>' +
        '<ul>' +
        '<li>On a 10+, grant two of the following effects to the subject of your prayers.</li>' +
        '<li>On a 7-9, grant one, and your prayers draw unwanted attention.</li>' +
        '</ul>' +
        '<ul>' +
        '<li>Heal 1d8 damage</li>' +
        '<li>Take +2 Armor forward</li>' +
        '<li>Take +1 forward to Defy Danger</li>' +
        '<li>An approaching enemy is driven back</li>' +
        '</ul>'
    },

    {
      name: "Lead the Flock",
      description: '<p>When you <strong>preach to a mob</strong>, roll +CHA.</p>' +
        '<ul>' +
        '<li>On a 10+, hold 3.</li>' +
        '<li>On a 7-9, hold 1.</li>' +
        '<li>On a miss, the mob turns on you.</li>' +
        '</ul>' +
        '<p>Spend your hold 1-for-1 on the following:</p>' +
        '<ul>' +
        '<li>bring people forward and deliver them to you.</li>' +
        '<li>bring forward all their precious things.</li>' +
        '<li>unite and fight for you.</li>' +
        '<li>fall into a frenzy of emotion: joy, sorrow, or rage, as you choose.</li>' +
        '<li>go quietly back to their lives.</li>' +
        '</ul>'
    },

    {
      name: "Deity's Insight",
      requiresLevel: 2,
      description: '<p>When you <strong>take a moment to consult your deity</strong>, you can Spout Lore using +WIS instead of +INT.</p>'
    },

    {
      name: "Devoted Healer",
      requiresLevel: 2,
      description: '<p>When you <strong>heal someone else of damage</strong>, add your level to the amount of damage healed. You may choose to take 1d6 damage (ignores armor) to remove a debility from a person you are healing.</p>'
    },

    {
      name: "Divine Protection",
      requiresLevel: 2,
      description: '<p>When you <strong>wear no armor or shield</strong>, you have 2 armor.</p>'
    },

    {
      name: "First Aid",
      requiresLevel: 2,
      description: '<p>You ignore the <em>Slow</em> tag on Bandages and Poultices & Herbs. When you <strong>are attacked while you are healing someone</strong>, gain +1 armor against the attack.</p>'
    },

    {
      name: "Greater Warding",
      requiresLevel: 2,
      description: '<p>When you <strong>use Divine Ward</strong>, select one additional option, even on a 6-.</p>'
    },

    {
      name: "Holy Fervor",
      requiresLevel: 2,
      description: '<p>Gain one move from the Templar or Cultist class list.</p>'
    },

    {
      name: "Miracle Worker",
      requiresLevel: 2,
      description: '<p>Gain one move from the Mage class list. If you choose <em>Cast a Spell</em>, the Spell Focus you choose must be related to your deity. In addition, add the following to the list of options under Spell Focus:</p>' +
        '<dl>' +
        '<dt>Focus:</dt>' +
        '<dd>The Divinity</dd>' +
        '<dt>Look:</dt>' +
        '<dd>Divine Voice, Glowing Symbol of Faith, or Glowing Tattoos</dd>' +
        '<dt>Aligned:</dt>' +
        '<dd>Aid Worshippers, Channel your Deity, Manipulate its Representation</dd>' +
        '<dt>Opposed:</dt>' +
        '<dd>Aiding Enemies, Desecrating the Realm your Deity Controls' +
        '</dd>' +
        '</dl>'
    },

    {
      name: "Orison for Guidance",
      requiresLevel: 2,
      description: '<p>When you <strong>fulfill your deity\'s Demands and and pray for guidance</strong>, your deity tells you what it would have you do. If you do it, mark experience.</p>'
    },

    {
      name: "Penitent",
      requiresLevel: 2,
      description: '<p>When you <strong>take damage and embrace the pain</strong>, you may take +1d4 damage (ignoring armor). If you do, take +1 forward.</p>'
    },

    {
      name: "Serenity",
      requiresLevel: 2,
      description: '<p>When you <strong>calmly walk through a dangerous situation</strong>, take +1 to <em>Defy Danger</em>.</p>'
    },

    {
      name: "The Scales of Life and Death",
      requiresLevel: 2,
      description: '<p>When <strong>someone else takes their Last Breath in your presence</strong>, they take +1 to the roll.</p>'
    },

    {
      name: "Anathema",
      requiresLevel: 6,
      description: '<p>When you <strong>strike down an Enemy of your deity</strong>, roll +WIS.</p>' +
        '<ul>' +
        '<li>On a 10+, that enemy is disintegrated, struck down by the power of your faith.</li>' +
        '<li>On a 7-9, the enemy is still destroyed, but choose one:' +
        '<ul>' +
        '<li>your deity\'s wrath is not yet over. It causes massive collateral damage.</li>' +
        '<li>your deity draws upon your strength for this act. Take -1 forward.</li>' +
        '</ul>' +
        '</li>' +
        '<li>On a miss, your deity cannot destroy this Enemy. The GM will tell you why.</li>' +
        '</ul>'
    },

    {
      name: "Apotheosis",
      requiresLevel: 6,
      description: '<p>The next time you spend time in prayer after taking this move, choose a feature associated with your deity (rending claws, wings of sapphire feathers, an all-seeing third eye, etc.). When you emerge from prayer, you permanently gain that physical feature.</p>'
    },

    {
      name: "Divine Armor",
      requiresLevel: 6,
      replacesMove: "Divine Protection",
      description: '<p>When you <strong>wear no armor or shield</strong>, you have 3 armor.</p>'
    },

    {
      name: "Gaze Not Upon Him",
      requiresLevel: 6,
      description: '<p>When you <strong>use Invocation and get a result of 12+</strong>, your deity\'s magnificence inspires awe from all who see it. Allies take +1 forward and NPCs cower in awe, fear, or ecstasy, as is appropriate.</p>'
    },

    {
      name: "Invigorate",
      requiresLevel: 6,
      description: '<p>When you <strong>heal someone</strong>, they take +2 forward against the cause of their damage.</p>'
    },

    {
      name: "Martyr",
      requiresLevel: 6,
      replacesMove: "Penitent",
      description: '<p>When you <strong>take damage and embrace the pain</strong>, you may take +1d4 damage (ignoring armor). If you do, take +1 ongoing until you roll a 12+.</p>'
    },

    {
      name: "Multiclass Dabbler",
      requiresLevel: 6,
      description: '<p>Gain one move from another class. Treat your level as one lower for choosing the move.</p>'
    },

    {
      name: "Prayer of Unity",
      requiresLevel: 6,
      description: '<p>You no longer need to specify who you protect with <em>Divine Ward</em>. When you <strong>protect a group with Divine Ward</strong>, the chosen effect(s) applies to everyone in the group.</p>'
    },

    {
      name: "Providence",
      requiresLevel: 6,
      description: '<p>Add the following option to the <em>Divine Ward</em> list:</p>' +
        '<ul>' +
        '<li>An enemy move fails due to a moment of divine providence, related to your deity\'s domain (a gust of wind, a flash of light, or something similar)</li>' +
        '</ul>'
    },

    {
      name: "Reaper",
      requiresLevel: 6,
      description: '<p>When you <strong>take time after a conflict to dedicate your victory to your deity and deal with the dead</strong>, take +1 forward.</p>'
    },
  ]
};
