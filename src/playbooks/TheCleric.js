export const theCleric = {
  name: "The Cleric",
  description: "<p>The lands of Dungeon World are a gods-forsaken mess. They’re lousy with the walking dead, beasts of all sorts, and the vast unnatural spaces between safe and temple-blessed civilizations. It is a godless world out there. That’s why it needs you.</p>" +
    "<p>Bringing the glory of your god to the heathens isn’t just in your nature—it’s your calling. It falls to you to proselytize with sword and mace and spell. To cleave deep into the witless heart of the wilds and plant the seed of divinity there. Some say that it is best to keep god close to your heart. You know that’s rubbish. God lives at the edge of a blade.</p>" +
    "<p>Show the world who is lord.</p>",
  baseHitPoints: 8,
  damageDieFaces: 6,
  looks: [
    {
      category: "Body",
      suggestions: "Thin, knobby, flabby…"
    },
    {
      category: "Eyes",
      suggestions: "Kind, sharp, sad…"
    },
    {
      category: "Hair",
      suggestions: "Strange, tonsure, bald…"
    },
    {
      category: "Clothes",
      suggestions: "Flowing robes, habit, common…"
    }
  ],
  drives: [
    {
      name: "Ambition",
      description: "Gain recognition from or hold a debt over an NPC of importance."
    },
    {
      name: "Charity",
      description: "Bring relief to an NPC who is suffering."
    },
    {
      name: "Evangelism",
      description: "Instruct an NPC in the tenets of your faith."
    },
    {
      name: "Inquisition",
      description: "Reveal the failings or falsehoods of another."
    },
    {
      name: "Orthodoxy",
      description: "Start trouble (for yourself or others) by adhering strictly to doctrine.",
    }
  ],
  baseLoad: 10,
  startingMoves: {
    allOf: [
      "Deity",
      "Divine Guidance",
      "Cast A Spell (WIS)",
      "Commune",
      "Turn Undead"
    ]
  }
};
