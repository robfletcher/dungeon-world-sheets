export const theMage = {
  name: "The Mage",
  description: "<p>Dungeon World holds many secrets. You know, because you've found one of them. You found the font of power that is magic, and you have held it close. It is yours, and with it you can work wonders. Whether you found power in The Dragon or The Mask or something else entirely, all those secrets were tucked away into that little wand you found. And now those secrets are yours to command.</p>" +
    "<p>You've found your power. You've only begun to see the heights to which you can rise. But you've also begun to find your limits. As much as you wish it was, your magic is not absolute. You can't do everything. You need your pitiful companions to win the day. But you know they could never do it without you.</p>" +
    "<p>For you are Magus, and none compare to your might.</p>",
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
    "Arcane Learning",
    "Cast A Spell (INT)",
    "Spell Focus"
  ]
};
