export const theWizard = {
  name: "The Wizard",
  description: "<p>Dungeon World has rules. Not the laws of men or the rule of some petty tyrant. Bigger, better rules. You drop something—it falls. You can’t make something out of nothing. The dead stay dead, right?</p>" +
    "<p>Oh, the things we tell ourselves to feel better about the long, dark nights.\n</p>" +
    "<p>You’ve spent so very long poring over those tomes of yours. The experiments that nearly drove you mad and all the botched summonings that endangered your very soul. For what? For power. What else is there? Not just the power of King or Country but the power to boil a man’s blood in his veins. To call on the thunder of the sky and the churn of the roiling earth. To shrug off the rules the world holds so dear.</p>" +
    "<p>Let them cast their sidelong glances. Let them call you “warlock” or “diabolist.” Who among them can hurl fireballs from their eyes?</p>" +
    "<p>Yeah. We didn’t think so.</p>",
  baseHitPoints: 4,
  damageDieFaces: 4,
  looks: [
    {
      category: "Body",
      suggestions: "Pudgy, creepy, thin…"
    },
    {
      category: "Eyes",
      suggestions: "Haunted, sharp, crazy…"
    },
    {
      category: "Hair",
      suggestions: "Styled, wild, pointed hat…"
    },
    {
      category: "Robes",
      suggestions: "Worn, stylish, strange…"
    }
  ],
  drives: [
    {
      name: "Curiosity",
      description: "Cause trouble by touching, opening, or tinkering with something."
    },
    {
      name: "Cunning",
      description: "Set up a ploy and then take advantage of it."
    },
    {
      name: "Eccentricity",
      description: "Alienate an NPC with your strange behavior."
    },
    {
      name: "Mystery",
      description: "Deflect or evade an inquiry into your doings."
    },
    {
      name: "Obeisance",
      description: "Get an NPC to acknowledge your superiority."
    }
  ],
  baseLoad: 7,
  startingMoves: [
    "Cast A Spell (INT)",
    "Prepare Spells",
    "Spellbook",
    "Spell Defense",
    "Ritual"
  ]
};
