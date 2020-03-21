export const theTemplar = {
  name: "The Templar",
  description: "<p>Heretics. Heretics all. Everywhere you look in Dungeon World, you find blasphemy. Everyone pretends to be goodly, but you don't buy it. It's just different degrees of heresy. In the face of evil, you do not back down. You do not surrender, and you make sure none of those weaker types do either. You are here to do a job, and no man, no beast will stop you.</p>" +
    "<p>These men and women you travel with, they're better than most, but they're still mortal. They're still fallible. You're not. You're pure. Your cause is absolute. If there is an ends you must reach, you will take any means necessary to achieve them.</p>" +
    "<p>For you are Templar, and failure is not an option.</p>",
  baseHitPoints: 10,
  damageDieFaces: 8,
  looks: [
    {
      category: "Body",
      suggestions: "Fit, bulky, iron…"
    },
    {
      category: "Eyes",
      suggestions: "Harsh, fiery, glowing…"
    },
    {
      category: "Hair",
      suggestions: "Bald, styled, helmet…"
    },
    {
      category: "Holy symbol",
      suggestions: "Worn, fancy…"
    }
  ],
  drives: [
    {
      name: "Courage",
      description: "Lead another to act despite fear or doubt."
    },
    {
      name: "Doubt",
      description: "Question the tenets of your faith, the law, or your order."
    },
    {
      name: "Fanaticism",
      description: "Deny mercy to a criminal or unbeliever."
    },
    {
      name: "Justice",
      description: "Capture or punish a criminal or evildoer."
    },
    {
      name: "Sacrifice",
      description: "Suffer pain and hardship so that someone does not need to."
    }
  ],
  baseLoad: 12,
  startingMoves: {
    allOf: [
      "It's Not Them You Should Be Afraid Of",
      "I Am the Law",
      "Inquisition",
      "Unrelenting"
    ]
  },
  moves: [
    {
      name: "It's Not Them You Should Be Afraid Of",
      description: '<p>When you <strong>are at an ally\'s back and they flounder</strong>, you can give them some "encouragement." You can <em>Aid</em> an ally with any action as long as they can hear you threatening them. If you are also close enough you could hurt them, take +1 to your <em>Aid</em> roll.</p>'
    },

    {
      name: "I Am The Law",
      description: '<p>When you <strong>give an NPC an order based on your position of power</strong>, roll+CHA.</p>' +
        '<ul>' +
        '<li>On a 7+, they choose one:' +
        '<ul>' +
        '<li>Do what you say.</li>' +
        '<li>Back away cautiously, then flee.</li>' +
        '<li>Attack you.</li>' +
        '</ul>' +
        '</li>' +
        '<li>On a 10+, you also take +1 forward against them.</li>' +
        '<li>On a miss, they do as they please and you take -1 forward against them.</li>' +
        '</ul>'
    },

    {
      name: "Inquisition",
      description: '<p>When <strong>you and an NPC have a private chat</strong>, roll+CHA.</p>' +
        '<ul>' +
        '<li>On a 10+, hold 3.</li>' +
        '<li>On a 7-9, hold 2.</li>' +
        '<li>On a 6-, hold 1, but the NPC will try to run away or attack you.</li>' +
        '</ul>' +
        '<p>Spend your hold 1 for 1 on the following:</p>' +
        '<ul>' +
        '<li>You find out who they work for and why.</li>' +
        '<li>You find out their goal and how far they\'ll go to get it.</li>' +
        '<li>You find out if they intend to harm anyone, and if so, who.</li>' +
        '<li>You find out if they are hiding something, and if so, what.</li>' +
        '</ul>' +
        '<p>After hearing their answers, you can put serious pressure on them for more - break some bones, threaten loved ones, or something similar. If you do, take +1 hold, but the NPC will never want anything to do with you ever again.</p>'
    },

    {
      name: "Unrelenting",
      description: '<p>When you <strong>are in no condition to continue but do so anyway</strong>, roll +CON.</p>' +
        '<ul>' +
        '<li>On a 10+, choose both.</li>' +
        '<li>On a 7-9, choose one.</li>' +
        '<li>On a miss, choose one, but your condition worsens significantly: you take 1d8 damage as you push yourself beyond your limits.</li>' +
        '</ul>' +
        '<ul>' +
        '<li>You ignore your debilities and injuries until the moment before you accomplish your immediate goal. Until then, you take action as if you were perfectly fine.</li>' +
        '<li>You stay standing and will not fall. One ally of your choice gets +1 ongoing as long as you stay standing.</li>' +
        '</ul>' +
        '<p>When you <strong>hit 0 HP while you are Unrelenting</strong>, you keep going and do not take your <em>Last Breath</em> until you fall or your goal is accomplished, whichever comes first.</p>' +
        '<p>When you <strong>die while you are Unrelenting</strong>, take +1 to your <em>Last Breath</em>.</p>'
    },

    {
      name: "Armored",
      requiresLevel: 2,
      description: '<p>You ignore the clumsy tag on armor you wear.</p>'
    },

    {
      name: "Bloody Aegis",
      requiresLevel: 2,
      description: '<p>When you <strong>take damage</strong> you can grit your teeth and accept the blow. If you do you take no damage but instead suffer a debility of your choice. If you already have all six debilities you can’t use this move.</p>'
    },

    {
      name: "Charge!",
      requiresLevel: 2,
      description: '<p>When you <strong>lead the charge into combat</strong>, those you lead take +1 forward.</p>'
    },

    {
      name: "Combat Inquisition",
      requiresLevel: 2,
      description: '<p>You may use the <em>Inquisition</em> move on an enemy while you fight them.</p>'
    },

    {
      name: "Heretical Dabbling",
      requiresLevel: 2,
      description: '<p>Gain one non-multiclass move from the Thief or Ranger class list.</p>'
    },

    {
      name: "Holy Scripts",
      requiresLevel: 2,
      description: '<p>Gain one non-multiclass move from the Mage or Priest class list.</p>'
    },

    {
      name: "Professional Courtesy",
      requiresLevel: 2,
      description: '<p>You and Death have an understanding. When you <strong>take your Last Breath</strong>, take +1. When <strong>an ally takes their Last Breath while you are close enough to rush to their side</strong>, you can <em>Aid</em> with their<em>Last Breath</em> roll. Be warned: Death will try to rope you into any bargains involving your comrade.</p>'
    },

    {
      name: "Smite",
      requiresLevel: 2,
      description: '<p>While you <strong>are Unrelenting</strong>, you deal +1d4 damage.</p>'
    },

    {
      name: "There is no war in Ba-Sing-Sei",
      requiresLevel: 2,
      description: '<p>Add the following option to the <em>Inquisition</em> move list:</p>' +
        '<ul>' +
        '<li>The NPC will willfully ignore all evidence that an event of your choice ever happened.</li>' +
        '</ul>'
    },

    {
      name: "Unfailing Commitment",
      requiresLevel: 2,
      description: '<p>While you <strong>are Unrelenting</strong>, you get +1 armor and gain +1 hold when you <em>Defend</em>.</p>'
    },

    {
      name: "Voice of Authority",
      requiresLevel: 2,
      description: '<p>You gain followers. You have 3 of them at any given time, and they are all Hirelings with +2 Loyalty, no skills, and Cost: <em>Blind Religious Fervor</em>. Should any of them die, you get replacements the next time you visit a holy temple of your order.</p>'
    },

    {
      name: "Who Told You To Stop",
      requiresLevel: 2,
      description: '<p>When you <strong>Aid an ally</strong>, you push them beyond their limits.</p>' +
        '<ul>' +
        '<li>On a 7-9, your ally may mark a debility to select one of the following options.</li>' +
        '<li>On a 10+, they may mark a debility to select two of the following options.</li>' +
        '</ul>' +
        '<ul>' +
        '<li>They take +3 Armor forward.</li>' +
        '<li>They deal +1d6 damage forward.</li>' +
        '<li>They heal 2d6 damage.</li>' +
        '<li>They ignore a debility, effect, or condition for a short while.</li>' +
        '</ul>'
    },

    {
      name: "Ever Onward",
      requiresLevel: 6,
      replacesMove: "Charge!",
      description: '<p>When you <strong>lead the charge into combat</strong>, those you lead take +1 forward and +2 armor forward.</p>'
    },

    {
      name: "Exterminatus",
      requiresLevel: 6,
      description: '<p>When you <strong>speak aloud your promise to defeat an enemy</strong>, you deal +2d4 damage against that enemy and -4 damage against anyone else. This effect lasts until the enemy is defeated. If you fail to defeat the enemy or give up the fight, you can admit your failure, but the effect continues until you find a way to redeem yourself.</p>'
    },

    {
      name: "Indomitable",
      requiresLevel: 6,
      description: '<p>When you <strong>suffer a debility</strong> (even through <em>Bloody Aegis</em>) take +1 forward against whatever caused it.</p>'
    },

    {
      name: "Multiclass Dabbler",
      requiresLevel: 6,
      description: '<p>Get one move from another class. Treat your level as one lower for choosing the move.</p>'
    },

    {
      name: "Never Back Down",
      requiresLevel: 6,
      requiresMove: "Unfailing Commitment",
      description: '<p>When you <strong>Defend</strong> and get a result of 12+, instead of gaining hold, the attacker is simply held off, no matter the odds. In addition, they fear you - you gain +1 forward against them.</p>'
    },

    {
      name: "Rallying Point",
      requiresLevel: 6,
      description: '<p>When you <strong>Defend</strong>, any allies who also commit to defending with you gain 1 hold each. They can spend this hold at any time to give +2 armor forward to an ally or to whatever is being defended.</p>'
    },

    {
      name: "Shining Beacon",
      requiresLevel: 6,
      description: '<p>Change the second option of <em>Unrelenting</em> to the following:</p>' +
        '<ul>' +
        '<li>You stay standing and will not fall. Your allies gets +1 ongoing as long as you stay standing. If you hit 0 HP, you keep going and do not take your <em>Last Breath</em> until you fall or your goal is accomplished, whichever comes first.</li>' +
        '</ul>'
    },

    {
      name: "To Hell With You",
      requiresLevel: 6,
      replacesMove: "Smite",
      description: '<p>While you <strong>are Unrelenting</strong>, you deal +1d8 damage.</p>'
    },

    {
      name: "Unquestioned Authority",
      requiresLevel: 6,
      requiresMove: "Voice of Authority",
      description: '<p>Take +1 to order and recruit hirelings. When you roll a 12+, the hireling transcends their moment of fear and doubt and carries out your order with particular effectiveness or efficiency.</p>'
    },
  ]
};
