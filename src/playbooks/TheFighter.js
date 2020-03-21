export const theFighter = {
  name: "The Fighter",
  description: "<p>It’s a thankless job—living day to day by your armor and the skill of your arm. To dive heedlessly into danger. They won’t be playing golden horns for the time you took that knife to the ribs for them in the bar in Bucksberg. No flock of angels to sing of the time you dragged them, still screaming, from the edge of the Pits of Madness, no.</p>" +
    "<p>Forget them.</p>" +
    "<p>You do this for the guts and the glory. The scream of battle and the hot, hot blood of it. You are a beast of iron. Your friends may carry blades of forged steel but, fighter, you are steel. While your traveling companions might moan about their wounds over a campfire in the wilderness, you bear your scars with pride.</p>" +
    "<p>You are the wall—let every danger smash itself to nothing on you. In the end, you’ll be the last one standing.</p>",
  baseHitPoints: 10,
  damageDieFaces: 10,
  looks: [
    {
      category: "Body",
      suggestions: "Built, lithe, ravaged…"
    },
    {
      category: "Eyes",
      suggestions: "Hard, dead, eager…"
    },
    {
      category: "Hair",
      suggestions: "Wild, shorn, battered helm…"
    },
    {
      category: "Skin",
      suggestions: "Calloused, tanned, scarred…"
    }
  ],
  drives: [
    {
      name: "Challenge",
      description: "Provoke a fight with a notable enemy, just you and them."
    },
    {
      name: "Glory",
      description: "Show off in front of NPCs who can go on to tell your tale."
    },
    {
      name: "Peace",
      description: "Settle a dispute or end a fight without bloodshed."
    },
    {
      name: "Pride",
      description: "Put someone in their place (or their grave) for disrespecting you."
    },
    {
      name: "Vengeance",
      description: "Avenge a wrong or hurt done to you or your allies."
    }
  ],
  baseLoad: 12,
  startingMoves: {
    allOf: [
      "Signature Weapon",
      "Bend Bars, Lift Gates",
      "Armored"
    ]
  }
};