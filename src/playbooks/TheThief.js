export const theThief = {
  name: "The Thief",
  description: "<p>You’ve heard them, sitting around the campfire. Bragging about this battle or that. About how their gods are smiling on your merry band. You count your coins and smile to yourself—this is the thrill above all. You alone know the secret of Dungeon World—filthy filthy lucre.</p>" +
    "<p>Sure, they give you lip for all the times you’ve snuck off alone but without you, who among them wouldn’t have been dissected by a flying guillotine or poisoned straight to death by some ancient needle trap? So, let them complain. When you’re done with all this delving you’ll toast their hero’s graves.</p>" +
    "<p>From your castle. Full of gold. You rogue.</p>",
  baseHitPoints: 6,
  damageDieFaces: 8,
  looks: [
    {
      category: "Body",
      suggestions: "Lithe, knobby, flabby…"
    },
    {
      category: "Eyes",
      suggestions: "Shifty, criminal…"
    },
    {
      category: "Hair",
      suggestions: "Cropped, messy, hooded…"
    },
    {
      category: "Clothes",
      suggestions: "Dark, fancy, common…"
    }
  ],
  drives: [
    {
      name: "Defiance",
      description: "Stand up to a bully or tyrant."
    },
    {
      name: "Conscience",
      description: "Forego comfort or advantage in order to do the right thing."
    },
    {
      name: "Excitement",
      description: "Cause trouble for your allies by taking an unnecessary risk."
    },
    {
      name: "Greed",
      description: "Increase your wealth or power at someone else’s expense."
    },
    {
      name: "Trickery",
      description: "Get someone to act on false information"
    }
  ],
  baseLoad: 9,
  startingMoves: {
    allOf: [
      "Trap Expert",
      "Tricks Of The Trade",
      "Backstab",
      "Flexible Morals",
      "Poisoner"
    ]
  }
};
