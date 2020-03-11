export const theWizard = {
  name: "The Wizard",
  baseHitPoints: 4,
  damageDieFaces: 4,
  looks: [
    {
      category: "Body",
      suggestions: ["pudgy", "creepy", "thin"]
    },
    {
      category: "Eyes",
      suggestions: ["haunted", "sharp", "crazy"]
    },
    {
      category: "Hair",
      suggestions: ["styled", "wild", "pointed hat"]
    },
    {
      category: "Robes",
      suggestions: ["worn", "stylish", "strange"]
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
  ]
};
