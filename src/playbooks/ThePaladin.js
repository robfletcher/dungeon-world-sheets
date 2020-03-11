export const thePaladin = {
  name: "The Paladin",
  baseHitPoints: 10,
  damageDieFaces: 10,
  looks: [
    {
      category: "Body",
      suggestions: ["fit", "bulky", "thin"]
    },
    {
      category: "Eyes",
      suggestions: ["kind", "fiery", "glowing"]
    },
    {
      category: "Hair",
      suggestions: ["bald", "styled", "helmet"]
    },
    {
      category: "Holy symbol",
      suggestions: ["worn", "fancy"]
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
      name: "Mercy",
      description: "Forgive a helpless enemy and set them free."
    },
    {
      name: "Justice",
      description: "Capture or punish a criminal or evildoer."
    },
    {
      name: "Sacrifice",
      description: "Suffer pain and hardship so that someone does not need to."
    }
  ]
};
