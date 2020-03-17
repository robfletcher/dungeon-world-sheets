export const theCleric = {
  name: "The Cleric",
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
  startingMoves: [
    "Deity",
    "Divine Guidance",
    "Cast A Spell (WIS)",
    "Commune",
    "Turn Undead"
  ]
};
