export const thePriest = {
  description: "<p>The lands of Dungeon World have been forsaken. No gods walk these lands, not anymore. Now these lands are a battleground between their followers, their remnants, their men of the cloth. It is not a battle that is always fought with blades, and that is why this battleground needs you.</p>" +
    "<p>With simple words, you spread the faith of your deity to those who would not believe. With humble words, you beseech your deity for a miracle, and it listens. Where you walk, so too walks your god, and it is through your faith that this power is made manifest. Wherever you go, the heavens follow. Your deity watches your every move, and through him, your success is guaranteed.</p>" +
    "<p>Spread the faith, Priest, and know that none shall dare lay a hand on you.</p>",
  name: "The Priest",
  baseHitPoints: 6,
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
  baseLoad: 7,
  startingMoves: {
    allOf: [
      "Invocation",
      "Divine Ward",
      "Lead the Flock"
    ]
  }
};
