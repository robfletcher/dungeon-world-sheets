export const theTemplar = {
  name: "The Templar",
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
  startingMoves: [
    "It's Not Them You Should Be Afraid Of",
    "I Am the Law",
    "Inquisition",
    "Unrelenting"
  ]
};
