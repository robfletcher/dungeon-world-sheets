export const theImmolator = {
  name: "The Immolator",
  description: "<p>Some people pray to their gods for strength like fools; others, too smart for their own good, read books. Others, still, train with their sword-arms or their tongues. Not you, though. Somehow, somewhy, you found power through another way, one wrought in fire and pain. You made a sacrifice, then and there, freely given, for powers beyond the ken of mere mortals.</p>" +
    "<p>And it feels so, so good.</p>" +
    "<p>You’re the wildcard now. The uncaged flame, burning with passion and leaving ruin in your wake. Everyone else can feel it, too; your fire stokes theirs, filling your new adventuring comrades with furore and brightening the lives of every yokel and maiden lucky enough to cross your path. You’ve never felt so alive! And so what if there’s trouble following you every which way; all the more reason to live life to the fullest, right?</p>" +
    "<p>Live fast, die young, and make sure you’re not the one who’s gotta pick up all the pieces.</p>",
  baseHitPoints: 4,
  damageDieFaces: 8,
  looks: [
    {
      category: "Body",
      suggestions: "Strange brands, ritual scars, perfect skin…"
    },
    {
      category: "Eyes",
      suggestions: "Smouldering, warm, searing…"
    },
    {
      category: "Voice",
      suggestions: "Crackling, whispering, roaring…"
    },
    {
      category: "Demeanor",
      suggestions: "Imperious bearing, manic attitude, barely-hidden rage…"
    }
  ],
  drives: [
    {
      name: "Exuberance",
      description: "Cause widespread destruction or collateral damage."
    },
    {
      name: "Fervor",
      description: "Spread a dangerous new idea."
    },
    {
      name: "Provocation",
      description: "Spur another into unplanned decisive action."
    },
    {
      name: "Hunger",
      description: "Wantonly consume a limited resource."
    },
    {
      name: "Vehemence",
      description: "Sacrifice an unwilling victim to the flames."
    }
  ],
  bonds: [
    '____ has felt the hellish touch of fire, now they know my strength.',
    'I will teach ____ the true meaning of sacrifice.',
    'I cast something into the fire for ____ and still owe them their due.',
  ],
  baseLoad: 9,
  startingMoves: {
    raceOptions: [
      'Human',
      'Salamander'
    ],
    allOf: [
      "Burning Brand",
      "Fighting Fire with Fire",
      "Give Me Fuel, Give Me Fire",
      "Zuko Style",
      "Hand Crafted"
    ]
  },
  moves: [
    {
      name: 'Human',
      description: '<p>When you <strong>Make Camp next to a large, open flame</strong>, regain all of your HP.\n</p>'
    },
    {
      name: 'Salamander',
      description: '<p>Non-magical heat and fire cannot harm you.</p>'
    },
    {
      name: "Burning Brand",
      description: '<p>When you <strong>conjure a weapon of pure flame</strong>, roll+CON. On a 10+ choose two of the following tags, on a 7-9 choose one. You may treat your INT as your STR or DEX in regards to making attacks with this weapon. The weapon always begins with the <em>fiery</em>, <em>touch</em>, <em>dangerous</em>, and <em>3 uses</em> tags. Each attack with the weapon consumes one use.</p>' +
        '<ul>' +
        '<li><em>hand</em></li>' +
        '<li><em>thrown</em>, <em>near</em></li>' +
        '<li>+1 damage</li>' +
        '<li>remove the <em>dangerous</em> tag</li>' +
        '</ul>'
    },

    {
      name: "Fighting Fire with Fire",
      description: '<p>When you take damage, and that damage is odd (after armor) the flames within you come to your aid. Roll 1d4 and either add that many uses to your burning brand (if active), take that result forward to summon your burning brand, or reduce the damage by that amount, your choice.</p>'
    },

    {
      name: "Give Me Fuel, Give Me Fire",
      description: '<p>When you <strong>gaze intensely into someones eyes</strong>, you may ask their player “what fuels the flames of your desire?” they’ll answer with the truth, even if the character does not know or would otherwise keep this hidden.</p>'
    },

    {
      name: "Zuko Style",
      description: '<p>When you <strong>bend a flame to your will</strong>, roll+WIS. On a 10+ it does as you command, taking the shape and movement you desire for as long as it has fuel on which to burn. On a 7-9 the effect is short-lived, lasting only a moment.</p>'
    },

    {
      name: "Hand Crafted",
      description: '<p>You may use your hands in place of tools and fire to craft metal objects. Mundane weapons, armor and metal jewellery can all be formed from their raw components. You may unmake these things, as well, but to do so without time and safety might require that you Defy Danger first.</p>'
    },

    {
      name: "Lore Of Flame",
      requiresLevel: 2,
      description: '<p>When you <strong>stare into a source of fire</strong>, looking for answers, roll+WIS. On a hit, the GM will tell you something new and interesting about the current situation. On a 10+, the GM will give you good detail. On a 7–9, the GM will give you an impression. If you already know all there is to know, the GM will tell you that.</p>'
    },

    {
      name: "Burns Twice As Bright",
      requiresLevel: 2,
      grants: ['Burns Half As Long'],
      description: '<p>When you <strong>channel the flames of fate</strong>, you may treat a missed roll as a 7-9 or a 7-9 result as a 10+. This may be a roll you or another character has made. Tell the GM something you’ve lost; an emotion, a memory or some innate piece of your being. You may not use this move again until you’ve used <em>Burns Half As Long</em>.</p>'
    },

    {
      name: "Burns Half As Long",
      requiresLevel: 2,
      grants: ['Burns Twice As Bright'],
      description: '<p>You gain this move when you gain <em>Burns Twice As Bright</em>.</p>' +
        '<p>When you <strong>sacrifice a victory to the flames of fate</strong>, treat any roll of 10+ as a miss.</p>'
    },

    {
      name: "This Killing Fire",
      requiresLevel: 2,
      description: '<p>Add the following tags to your options for <em>Burning Brand</em>: <em>messy</em>, <em>forceful</em>, <em>reach</em>, <em>near</em>,<em>far</em>.</p>'
    },

    {
      name: "Firebrand",
      requiresLevel: 2,
      description: '<p>When you <strong>introduce a new idea to an NPC</strong>, roll+CHA. On a 10+ They believe the idea to be their own and take to it with fervour. On a 7-9, Their passion fades after a day or two. On a miss, they respond negatively, speaking out against the idea.</p>'
    },

    {
      name: "Ogdru Jahad",
      requiresLevel: 2,
      description: '<p>Gain the Wizard move <em>Ritual</em>. The GM will always tell you what you have to sacrifice to gain the effect you desire.</p>'
    },

    {
      name: "Moth To The Flame",
      requiresLevel: 2,
      description: '<p>When you <strong>tempt a weak mind with your inner fire</strong>, roll+WIS. On a 10+ their will is suppressed, they’ll follow you and do as you desire, so long as nothing startles or surprises them. On a 7-9, the effect is only strong enough to distract or confuse them. On a miss, they become agitated and upset, your fire having sparked their hidden desires.</p>'
    },

    {
      name: "Burning Bridges",
      requiresLevel: 2,
      description: '<p>When you <strong>would take your last breath</strong>, don’t. Instead, you may erase one of your Bonds. This is permanent and lowers your total available Bonds forever. You are alive and have 1d6 hp. If you have no more Bonds, take your last breath as normal.</p>'
    },

    {
      name: "The Enkindler",
      requiresLevel: 2,
      description: '<p>When you <strong>bolster the courage of others</strong> roll+CHA. On a 10+ they shake off all fear and doubt, becoming brave in an instant. On a 7-9, this effect is fleeting, they realize its superficiality and resort to cowardice after a moment or two. On a miss, they’re cowed or terrified by your presence.</p>'
    },

    {
      name: "Sick Burn",
      requiresLevel: 2,
      description: '<p>When you <strong>insult an NPC</strong>, roll + CHA. On a 10+ you leave them no room to react, they bear your insult and the scorn of all who hear it. On a 7-9 you cross a line, they will have their revenge, someday. On a miss you\'ve gone too far, they blow up here and now.</p>'
    },

    {
      name: "From Hell’s Heart",
      requiresLevel: 6,
      description: '<p>When you <strong>summon fire</strong> with any of your moves, you can replace it with the black fires of hell itself. This fire does not burn with heat and ignores armor, scorching the soul itself. Those creatures without souls cannot be harmed by this type of flame.</p>'
    },

    {
      name: "Burning Ring Of Fire",
      requiresLevel: 6,
      description: '<p>When you <strong>fuse a willing person’s soul to yours</strong>, roll+CHA. On a hit you are bound together, able to sense each other at any distance, as well as sharing your emotional state. On a 7-9, the connection is unstable and dangerous, when you take a debility, so do they (and vice versa). On a miss, the branding is rejected and you both erase any Bonds you have to each other. You may write new Bonds with them at the <em>End of Session</em> as usual. This fusion, once performed, cannot be undone by mortal means.</p>'
    },

    {
      name: "Fanning The Flames",
      requiresLevel: 6,
      requiresMove: "Firebrand",
      description: '<p>You may apply the effects of your <em>Firebrand</em> move to a group of people - a dozen or so - all at once.</p>'
    },

    {
      name: "Watch The World Burn",
      requiresLevel: 6,
      description: '<p>When you <strong>open a channel to the burning planes</strong> and call a firestorm, tell the GM what you’re sacrificing and roll+WIS. The sky opens up and fire pours like rain from it within an area about equal to a small village. Everyone and everything in the area takes damage as appropriate. On a 10+ you can extinguish the storm with a little effort. On a 7-9 the fires rage out of your control, spreading and gusting where they are carried by wind and weather. On a miss, something cruel, intelligent and hungry comes with the storm.</p>'
    },
  ]
};
