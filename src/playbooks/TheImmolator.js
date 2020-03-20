export const theImmolator = {
  name: "The Immolator",
  description: "<p>Some people pray to their gods for strength like fools; others, too smart for their own good, read books. Others, still, train with their sword-arms or their tongues. Not you, though. Somehow, somewhy, you found power through another way, one wrought in fire and pain. You made a sacrifice, then and there, freely given, for powers beyond the ken of mere mortals.</p>" +
    "<p>And it feels so, so good.</p>" +
    "<p>You’re the wildcard now. The uncaged flame, burning with passion and leaving ruin in your wake. Everyone else can feel it, too; your fire stokes theirs, filling your new adventuring comrades with furore and brightening the lives of every yokel and maiden lucky enough to cross your path. You’ve never felt so alive! And so what if there’s trouble following you every which way; all the more reason to live life to the fullest, right?</p>" +
    "<p>Live fast, die young, and make sure you’re not the one who’s gotta pick up all the pieces.</p>",
  baseHitPoints: 4,
  damageDieFaces: 8,
  looks: [
    {
      category: "Body",
      suggestions: "Strange brands, ritual scars, perfect skin…"
    },
    {
      category: "Eyes",
      suggestions: "Smouldering, warm, searing…"
    },
    {
      category: "Voice",
      suggestions: "Crackling, whispering, roaring…"
    },
    {
      category: "Demeanor",
      suggestions: "Imperious bearing, manic attitude, barely-hidden rage…"
    }
  ],
  drives: [
    {
      name: "Exuberance",
      description: "Cause widespread destruction or collateral damage."
    },
    {
      name: "Fervor",
      description: "Spread a dangerous new idea."
    },
    {
      name: "Provocation",
      description: "Spur another into unplanned decisive action."
    },
    {
      name: "Hunger",
      description: "Wantonly consume a limited resource."
    },
    {
      name: "Vehemence",
      description: "Sacrifice an unwilling victim to the flames."
    }
  ],
  baseLoad: 9,
  startingMoves: [
    "Burning Brand",
    "Fighting Fire with Fire",
    "Give Me Fuel, Give Me Fire",
    "Zuko Style",
    "Hand Crafted"
  ]
};
