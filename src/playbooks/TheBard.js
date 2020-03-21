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
  }
};
