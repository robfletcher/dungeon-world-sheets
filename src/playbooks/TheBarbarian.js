export const theBarbarian = {
  name: "The Barbarian",
  description: "<p>Hither you came from parts unknown. Sword in hand—a reaver. A slayer.</p>" +
    "<p>Let the wizard cast his spells. What good is magick when steel cuts through flesh and bone just the same? The Paladin swears fealty to the divine. She can keep her fairy tale god—you are your own master.</p>" +
    "<p>You hail from the far reaches of Dungeon World in search of—what? Glory? Treasure? Spilt blood? In the end it matters not. They call you barbarian. Uncivilized. Let them. You know better. Their world of nobles and laws is fleeting.</p>" +
    "<p>You know what is best in life.</p>",
  baseHitPoints: 8,
  damageDieFaces: 10,
  looks: [
    {
      category: "Body",
      suggestions: "Mighty thews, long shanks, scrawny, supple…"
    },
    {
      category: "Eyes",
      suggestions: "Tormented, haunted, wild, shrouded…"
    },
    {
      category: "Decoration",
      suggestions: "Tattoos, bejeweled, unmarred…"
    },
    {
      category: "Clothes",
      suggestions: "Scraps, silks, scavenger’s outfit, weather-inappropriate…"
    }
  ],
  drives: [
    {
      name: "Contempt",
      description: "Offend an NPC of importance with your brutish ways."
    },
    {
      name: "Gigantic Melancholy",
      description: "Let a problem escalate while you brood, drown your sorrows, or express your disgust."
    },
    {
      name: "Gigantic Mirth",
      description: "Cause trouble for your allies by indulging in revelry, romance, or celebration."
    },
    {
      name: "Honor",
      description: "Keep an oath that you have made to an NPC."
    },
    {
      name: "Pride",
      description: "Refuse an order or request that is beneath you."
    }
  ],
  baseLoad: 8,
  startingMoves: [
    "The Upper Hand",
    "What Are You Waiting For?",
    "Herculean Appetites",
    "Musclebound"
  ]
};
