export const thePaladin = {
  name: "The Paladin",
  description: "<p>Hell awaits. An eternity of torment in fire or ice or whatever best suits the sins of the damned throngs of Dungeon World. All that stands between the pits of that grim torture and salvation is you. Holy man, armored war machine, templar of the Good and the Light, right? The cleric may say his prayers at night to the gods, dwelling in their heavens. The fighter may wield his sharp sword in the name of “good” but you know. Only you.</p>" +
    "<p>Eyes, hands, and sweet killing blow of the gods, you are. Yours is the gift of righteousness and virtue. Of justice. Vision, too. A purity of intent that your companions do not have.</p>" +
    "<p>So guide these fools, paladin. Take up your holy cause and bring salvation to the wastrel world.</p>" +
    "<p>Vae victis, right?</p>",
  baseHitPoints: 10,
  damageDieFaces: 10,
  looks: [
    {
      category: "Body",
      suggestions: "Fit, bulky, thin…"
    },
    {
      category: "Eyes",
      suggestions: "Kind, fiery, glowing…"
    },
    {
      category: "Hair",
      suggestions: "Bald, styled, helmet…"
    },
    {
      category: "Holy symbol",
      suggestions: "Worn, fancy…"
    }
  ],
  drives: [
    {
      name: "Courage",
      description: "Lead another to act despite fear or doubt."
    },
    {
      name: "Doubt",
      description: "Question the tenets of your faith, the law, or your order."
    },
    {
      name: "Mercy",
      description: "Forgive a helpless enemy and set them free."
    },
    {
      name: "Justice",
      description: "Capture or punish a criminal or evildoer."
    },
    {
      name: "Sacrifice",
      description: "Suffer pain and hardship so that someone does not need to."
    }
  ],
  baseLoad: 12,
  startingMoves: {
    allOf: [
      "Quest",
      "Lay On Hands",
      "I Am The Law",
      "Armored"
    ]
  }
};
