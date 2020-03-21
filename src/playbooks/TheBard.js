export const theBard = {
  name: "The Bard",
  description: "<p>The poems say an adventurer’s life is all open roads and the glory of coin and combat. The tales told in every farmhand-filled inn have to have some ring of truth to them, don’t they? The songs to inspire peasantry and royals alike—to soothe the savage beast or drive men to a frenzy—have to come from somewhere.</p>" +
    "<p>Enter the bard. You, with your smooth tongue and quick wit. You teller-of-tales and singer-of-songs. It takes a mere minstrel to retell a thing but a true bard to live it. Strap on your boots, noble orator. Sharpen that hidden dagger and take up the call. Someone’s got to be there, fighting shoulder-to-shoulder with the goons and the thugs and the soon-to-be-heroes. Who better than you to write the tale of your own heroism?</p>" +
    "<p>Nobody. Get going.</p>",
  baseHitPoints: 6,
  damageDieFaces: 6,
  looks: [
    {
      category: "Body",
      suggestions: "Fit, well-fed, thin…"
    },
    {
      category: "Eyes",
      suggestions: "Knowing, fiery , joyous…"
    },
    {
      category: "Hair",
      suggestions: "Fancy, wild, stylish cap…"
    },
    {
      category: "Clothes",
      suggestions: "Finery, traveling, poor…"
    }
  ],
  drives: [
    {
      name: "Fame",
      description: "Ensure that others will spread word of your name or deeds."
    },
    {
      name: "Drama",
      description: "Provoke conflict between others."
    },
    {
      name: "Romance",
      description: "Share a passionate moment with another."
    },
    {
      name: "Wisdom",
      description: "An NPC acts on your advice."
    },
    {
      name: "Wonder",
      description: "Expose someone else to a thing of beauty, majesty, or awe."
    }
  ],
  baseLoad: 9,
  startingMoves: {
    allOf: [
      "Arcane Art",
      "Charming & Open",
      "Bardic Lore",
      "A Port In The Storm"
    ]
  },
  moves: [
    {
      name: "Arcane Art",
      description: '<p>When you <strong>weave a performance into a basic spell</strong>, choose an ally and an effect:</p>' +
        '<ul>' +
        '<li>Heal 1d8 damage</li>' +
        '<li>+1d4 forward to damage</li>' +
        '<li>Their mind is shaken clear of one enchantment</li>' +
        '<li>The next time someone successfully assists the target with aid, they get +2 instead of +1</li>' +
        '</ul>' +
        '<p>Then roll+CHA.</p>' +
        '<ul>' +
        '<li>On a 10+, the ally gets the selected effect.</li>' +
        '<li>On a 7-9, your spell still works, but you draw unwanted attention or your magic reverberates to other targets affecting them as well, GM’s choice. </li>' +
        '</ul>'
    },

    {
      name: "Charming & Open",
      description: '<p>When you <strong>speak frankly with someone</strong>, you can ask their player a question from the list below. They must answer it truthfully, then they may ask you a question from the list (which you must answer truthfully).</p>' +
        '<ul>' +
        '<li>Whom do you serve?</li>' +
        '<li>What do you wish I would do?</li>' +
        '<li>How can I get you to _____?</li>' +
        '<li>What are you really feeling right now?</li>' +
        '<li>What do you most desire?</li>' +
        '</ul>'
    },

    {
      name: "Bardic Lore",
      description: '<p>Choose an area of expertise:</p>' +
        '<ul class="move-options">' +
        '<li>Spells and Magicks</li>' +
        '<li>The Dead and Undead</li>' +
        '<li>Grand Histories of the Known World</li>' +
        '<li>A Bestiary of Creatures Unusual</li>' +
        '<li>The Planar Spheres</li>' +
        '<li>Legends of Heroes Past</li>' +
        '<li>Gods and Their Servants</li>' +
        '</ul>' +
        '<p>When you <strong>first encounter an important creature, location, or item</strong> (your call) covered by your bardic lore you can ask the GM any one question about it; the GM will answer truthfully. The GM may then ask you what tale, song, or legend you heard that information in.</p>'
    },

    {
      name: "A Port In The Storm",
      description: '<p>When you <strong>return to a civilized settlement you’ve visited before</strong>, tell the GM when you were last here. They’ll tell you how it’s changed since then.</p>'
    },

    {
      name: "Healing Song",
      requiresLevel: 2,
      description: '<p>When you <strong>heal with Arcane Art</strong>, you heal +1d8 damage.</p>'
    },

    {
      name: "Vicious Cacophony",
      requiresLevel: 2,
      description: '<p>When you <strong>grant bonus damage with Arcane Art</strong>, you grant an extra +1d4 damage.</p>'
    },

    {
      name: "It Goes To Eleven",
      requiresLevel: 2,
      description: '<p>When you <strong>unleash a crazed performance</strong> (a righteous lute solo or mighy brass blast, maybe) choose a target who can hear you and roll+CHA.</p>' +
        '<ul>' +
        '<li>On a 10+ the target attacks their nearest ally in range.</li>' +
        '<li>On a 7-9 they attack their nearest ally, but you also draw their attention and ire.</li>' +
        '</ul>'
    },

    {
      name: "Metal Hurlant",
      requiresLevel: 2,
      description: '<p>When you <strong>shout with great force or play a shattering note</strong> choose a target and roll+CON.' +
        '<ul>' +
        '<li>On a 10+ the target takes 1d10 damage and is deafened for a few minutes.</li>' +
        '<li>On a 7-9 you still damage your target, but it\'s out of control: the GM will choose an additional target nearby.</li>' +
        '</ul>'
    },

    {
      name: "A Little Help From My Friends",
      requiresLevel: 2,
      description: '<p>When you <strong>successfully aid someone</strong> you take +1 forward as well.</p>'
    },

    {
      name: "Eldritch Tones",
      requiresLevel: 2,
      description: '<p>Your <strong>Arcane Art</strong> is strong, allowing you to choose two effects instead of one.</p>'
    },

    {
      name: "Duelist's Parry",
      requiresLevel: 2,
      description: '<p>When you <strong>Hack & Slash</strong>, you take +1 armor forward.</p>'
    },

    {
      name: "Bamboozle",
      requiresLevel: 2,
      description: '<p>When you <strong>parley with someone</strong>, on a 7+ you also take +1 forward with them.</p>'
    },

    {
      name: "Multiclass Dabbler",
      requiresLevel: 2,
      description: '<p>Get one move from another class. Treat your level as one lower for choosing the move.</p>'
    },

    {
      name: "Multiclass Initiate",
      requiresLevel: 2,
      description: '<p>Get one move from another class. Treat your level as one lower for choosing the move.</p>'
    },

    {
      name: "Healing Chorus",
      requiresLevel: 6,
      replacesMove: "Healing Song",
      description: '<p>When you <strong>heal with Arcane Art</strong>, you heal +2d8 damage.</p>'
    },

    {
      name: "Vicious Blast",
      requiresLevel: 6,
      replacesMove: "Vicious Cacophony",
      description: '<p>When you <strong>grant bonus damage with Arcane Art</strong>, you grant an extra +2d4 damage.</p>'
    },

    {
      name: "Unforgettable Face",
      requiresLevel: 6,
      description: '<p>When you <strong>meet someone you’ve met before</strong> (your call) after some time apart you take +1 forward against them.</p>'
    },

    {
      name: "Reputation",
      requiresLevel: 6,
      description: '<p>When you <strong>first meet someone who’s heard songs about you</strong>, roll+CHA.</p>' +
        '<ul>' +
        '<li>On a 10+, tell the GM two things they’ve heard about you.</li>' +
        '<li>On a 7-9, tell the GM one thing they’ve heard, and the GM tells you one thing.</li>' +
        '</ul>'
    },

    {
      name: "Eldritch Chord",
      requiresLevel: 6,
      replacesMove: "Eldritch Tones",
      description: '<p>When you use <strong>Arcane Art</strong>, you choose two effects. You also get to choose one of those effects to double.</p>'
    },

    {
      name: "An Ear For Magic",
      requiresLevel: 6,
      description: '<p>When you <strong>hear an enemy cast a spell</strong> the GM will tell you the name of the spell and its effects. Take +1 forward when acting on the answers.</p>'
    },

    {
      name: "Devious",
      requiresLevel: 6,
      description: '<p>When you use <strong>Charming & Open</strong> you may also ask “How are you vulnerable to me?” Your subject may not ask this question of you.</p>'
    },

    {
      name: "Duelist's Block",
      requiresLevel: 6,
      replacesMove: "Duelist’s Parry",
      description: '<p>When you <strong>Hack & Slash</strong>, you take +2 armor forward.</p>'
    },

    {
      name: "Con",
      requiresLevel: 6,
      replacesMove: "Bamboozle",
      description: '<p>When you <strong>parley with someone</strong>, on a 7+ you also take +1 forward with them and get to ask their player one question which they must answer truthfully.</p>'
    },

    {
      name: "Multiclass Master",
      requiresLevel: 6,
      description: '<p>Get a move from another class. Treat your level as one lower for choosing the move.</p>'
    },
  ]
};
