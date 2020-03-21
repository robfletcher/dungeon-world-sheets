export const theDruid = {
  name: "The Druid",
  description: "<p>Cast your eyes around the fire. What has brought you to these people, stinking of the dust and sweat of the city? Perhaps it is a kindness—do you protect them as the mother bear watches over her cubs? Are they your pack, now? Strange brothers and sisters you have. Whatever your inspiration, they would certainly fail without your sharp senses and sharper claws.</p>" +
    "<p>You are of the sacred spaces; you are born of soil and wear the marks of her spirits on your skin. You may have had a life before, maybe you were a city dweller like them, but not now. You’ve given up that static shape. Listen to your allies pray to their carved stone gods and polish their silver shells. They speak of the glory they’ll find back in that festering town you left behind.</p>" +
    "<p>Their gods are children, their steel is false protection. You walk the old ways, you wear the pelts of the earth itself. You’ll take your share of the treasure, but will you ever walk as one of them? Only time will tell.</p>",
  baseHitPoints: 6,
  damageDieFaces: 6,
  looks: [
    {
      category: "Hair",
      suggestions: "Messy, braided, furry hood…"
    },
    {
      category: "Eyes",
      suggestions: "Wise, wild, haunting…"
    },
    {
      category: "Clothes",
      suggestions: "Ceremonial garb, practical leathers, weathered hides…"
    }
  ],
  drives: [
    {
      name: "Cultivation",
      description: "Help an NPC learn, grow, or improve themselves."
    },
    {
      name: "Detachment",
      description: "Act (or refuse to do so) in a way that harms an ally or bystander."
    },
    {
      name: "Heritage",
      description: "Unnerve another with your strange ways and stranger rites."
    },
    {
      name: "Preservation",
      description: "Convince others to protect something of the natural world."
    },
    {
      name: "Restoration",
      description: "Deface, destroy, or bury a symbol or artifice of civilization."
    }
  ],
  baseLoad: 6,
  startingMoves: {
    allOf: [
      "Born Of The Soil",
      "By Nature Sustained",
      "Spirit Tongue",
      "Shapeshifter",
      "Studied Essence"
    ]
  }
};
