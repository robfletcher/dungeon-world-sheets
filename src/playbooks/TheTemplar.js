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
  }
};
