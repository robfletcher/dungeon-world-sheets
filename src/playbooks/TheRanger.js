export const theRanger = {
  name: "The Ranger",
  description: "<p>These city-born folk you travel with. Have they heard the call of the wolf? Felt the winds howl in the bleak deserts of the East? Have they hunted their prey with the bow and the knife like you? Hell no. That’s why they need you.</p>" +
    "<p>Guide. Hunter. Creature of the wilds. You are these things and more. Your time in the wilderness may have been solitary until now, but the call of some greater thing—call it fate if you like—has cast your lot with these folk. Brave, they may be. Powerful and strong, too. You know the secrets of the spaces between, though.</p>" +
    "<p>Without you, they’d be lost. Blaze a trail through the blood and dark, strider.</p>",
  baseHitPoints: 8,
  damageDieFaces: 8,
  looks: [
    {
      category: "Body",
      suggestions: "Lithe, wild, sharp…"
    },
    {
      category: "Eyes",
      suggestions: "Wild, sharp, animal…"
    },
    {
      category: "Hair",
      suggestions: "Wild, bald, hooded…"
    },
    {
      category: "Clothes",
      suggestions: "Cape, camouflage, traveling clothes…"
    }
  ],
  drives: [
    {
      name: "Companionship",
      description: "Alienate someone by putting your animal companion’s desires above theirs."
    },
    {
      name: "The Hunt",
      description: "Slay a creature of considerable might or cunning."
    },
    {
      name: "Liberty",
      description: "Free someone from bondage, figuratively or literally."
    },
    {
      name: "Tenacity",
      description: "Doggedly pursue a course of action, to your or your allies detriment."
    },
    {
      name: "Wonder",
      description: "Show someone a place or thing of natural beauty that they have not seen before."
    }
  ],
  baseLoad: 11,
  startingMoves: {
    allOf: [
      "Hunt and Track",
      "Called Shot",
      "Animal Companion"
    ]
  }
};
