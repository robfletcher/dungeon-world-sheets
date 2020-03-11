export const theBard = {
  name: "The Bard",
  baseHitPoints: 6,
  damageDieFaces: 6,
  looks: [
    {
      category: "Body",
      suggestions: ["fit", "well-fed", "thin"]
    },
    {
      category: "Eyes",
      suggestions: ["knowing", "fiery" , "joyous"]
    },
    {
      category: "Hair",
      suggestions: ["fancy", "wild", "stylish cap"]
    },
    {
      category: "Clothes",
      suggestions: ["finery", "traveling", "poor"]
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
  ]
};
