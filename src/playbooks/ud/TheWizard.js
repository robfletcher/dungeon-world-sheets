export const theWizard = {
  name: 'The Wizard',
  hitPoints: 12,
  damageModifier: -1,
  looks: [
    'Haunted Eyes, Sharp Eyes, or Crazy Eyes',
    'Styled Hair, Wild Hair, or Pointed Hat',
    'Worn Robes, Stylish Robes, or Strange Robes',
    'Pudgy Body, Creepy Body, or Thin Body'
  ],
  drives: [
    {
      name: 'Power',
      description: 'Use your magic to command the respect of others or enhance your prestige.'
    },
    {
      name: 'Knowledge',
      description: 'Discover something about a magical mystery.'
    },
    {
      name: 'Weird',
      description: 'Confront or embrace something strange or other-worldly.'
    }
  ],
  background: [
    'What price did you pay to learn magic?',
    'What is a "place of power" for you?',
    'How common is magic? How do most people react to it?',
    'What dire omens have you foreseen?'
  ],
  bonds: [
    'Which of you has a dark fate that I have foreseen? ____',
    'Which of you understands magic the least? ____',
    'Which of you is keeping secrets from me? ____'
  ],
  baseLoad: 5,
  startingMoves: {
    backgroundOptions: [
      'Arcane Student',
      'Natural Gift',
      'Blood Mage'
    ],
    allOf: [
      'Cast a Spell',
      'Ritual'
    ],
    oneOf: [
      'Antiquarian',
      'Spellbreaker',
      'Know-It-All',
      'Empower',
      'Magic Circle',
      'Logical',
      'Mystic Tether',
    ]
  },
  moves: [
    {
      name: 'Arcane Student',
      description: '<p>Add the following option to the 7-9 list for Cast a Spell:</p>' +
        '<ul>' +
        '<li>You need to consume magical reagents to power your magic, describe them and spend 1 use of Supplies</li>' +
        '</ul>'
    },
    {
      name: 'Natural Gift',
      description: '<p>Describe the heritage of yours that makes you naturally inclined to magic, and choose one option from the Cantrip list. You can create that effect whenever you like, without having to Cast a Spell.</p>'
    },
    {
      name: 'Blood Mage',
      description: '<p>When you <strong>shed your blood while Casting a Spell</strong>, you lose HP equal to the lower of the two dice rolled, ignoring armor, and on a hit, your spell gets +1 Power.</p>'
    },
    {
      name: 'Cast a Spell',
      description: '<p>You have mastered the workings of magic. Take the Wizard domains sheet. You begin with mastery of the Cantrip domain. <strong>Choose two more domains that you have mastered, and choose one Bane from the following list (or work with the GM to make up your own Bane):</strong></p>' +
        '<ul class="move-options">' +
        '<li>While you cannot speak clearly, you do not have both hands free, or you wear or wield something made of metal, you cannot cast a spell.</li>' +
        '<li>Your magic can never affect anyone or anything wearing, holding, or warded by cold iron.</li>' +
        '<li>Your magic is granted to you by a greater power, and they will occasionally make demands of you. Ignore them at your own risk.</li>' +
        '<li>While you are without your _______________________, you can\'t Cast a Spell. You can craft a replacement with a Ritual, but it will be time-consuming and expensive.</li>' +
        '</ul>' +
        '<p>When you <strong>weave a spell using one of your mastered domains</strong>, roll+INT.</p>' +
        '<ul>' +
        '<li>On a 10+, you get 2 Power to spend on your spell.</li>' +
        '<li>On a 7-9, you get 1 Power, and choose one of the following as well:' +
        '<ul>' +
        '<li>Your spell will have some undesirable side effect or limitation</li>' +
        '<li>You draw unwelcome attention or put yourself in a spot</li>' +
        '<li>The spell disturbs the fabric of reality as it is cast; you have disadvantage to Cast a Spell until you take some time to rest and refocus yourself</li>' +
        '</ul>' +
        '</li>' +
        '</ul>' +
        '<p>Power not spent on your spell is wasted, it cannot be saved for later. Power has no effect on Cantrips, just ignore it.</p>' +
        '<p>When you reach level 3, 6, or 9, choose an additional domain from the list to master.</p>'
    },
    {
      name: 'Ritual',
      description: '<p>When you <strong>draw on a place of power to create a magical effect</strong>, tell the GM what you\'re trying to achieve. Ritual effects are always possible, but the GM will give you one to four of the following conditions:</p>' +
        '<ul>' +
        '<li>It\'s going to take days/weeks/months</li>' +
        '<li>First you must ________</li>' +
        '<li>You\'ll need help from ________</li>' +
        '<li>It will require a lot of money</li>' +
        '<li>The effect will be unreliable or limited</li>' +
        '<li>You and your allies will risk danger from ________</li>' +
        '<li>You\'ll have to disenchant ________ to do it</li>' +
        '</ul>'
    },
    {
      name: 'Antiquarian',
      description: '<p>When you <strong>closely examine an interesting object for the first time</strong>, roll+INT.</p>' +
        '<ul>' +
        '<li>On a 10+, ask the GM three of the following questions.</li>' +
        '<li>On 7-9, ask two.</li>' +
        '<li>On a 6-, ask two anyway, but the GM will give you a false answer for one of them:' +
        '<ul>' +
        '<li>What does this do, or what does it signify?</li>' +
        '<li>What is it made of?</li>' +
        '<li>Who created this object and how old is it?</li>' +
        '<li>Who used this object last?</li>' +
        '<li>What has been done to or with it recently?</li>' +
        '<li>What\'s wrong with it and how could it be fixed?</li>' +
        '<li>Does this have magical properties, and if so, what are they?</li>' +
        '</ul>' +
        '</li>' +
        '</ul>'
    },
    {
      name: 'Spellbreaker',
      description: '<p>When you <strong>counter a magical spell as it is being cast or unweave an ongoing magical effect</strong>, roll+INT.</p>' +
        '<ul>' +
        '<li>On a hit, the spell is successfully countered or disrupted.</li>' +
        '<li>On a 7-9, choose one:' +
        '<ul>' +
        '<li>The unraveled magic causes some undesirable collateral damage or side effects</li>' +
        '<li>A weaker version gets through or lingers, or it is only temporarily suppressed</li>' +
        '</ul>' +
        '</li>' +
        '</ul>'
    },
    {
      name: 'Know-It-All',
      description: '<p>When you <strong>Spout Lore</strong>, on a 10+ you may also ask the GM a follow- up question about the subject, they will answer truthfully.</p>' +
        '<p>Additionally, when you Spout Lore, hit or miss, you may also ask the GM "How or where could I find out more?" after they reply to your original question.</p>'
    },
    {
      name: 'Empower',
      description: '<p>When you <strong>Cast a Spell</strong>, on a 10+ you may choose from the 7-9 list. If you do, you get 3 Power instead of 2 Power.</p>'
    },
    {
      name: 'Magic Circle',
      description: '<p>When you <strong>have adequate time, arcane materials, and a safe place to work</strong>, you can create your own place of power. Describe to the GM what kind of power it is and how you\'re binding it to this place, which may include paying a cost described by the GM, and the GM will tell you one problem or limitation that you\'ll have to deal with when you use it.</p>'
    },
    {
      name: 'Logical',
      description: '<p>When you <strong>Discern Realities by using strict deduction or logic to analyze your surroundings</strong>, you roll with INT instead of WIS.</p>'
    },
    {
      name: 'Mystic Tether',
      description: '<p>While <strong>a spell you cast is ongoing on another person</strong>, you may aid, interfere, or study them closely, no matter where they are, and you gain advantage when you do so. If your target is willing, they can communicate with you through the spell as if you were in the room with them.</p>'
    },
    {
      name: 'Capstone',
      requiresLevel: 6,
      description: '<p>When you <strong>Cast a Spell</strong>, on a 12+ your spell performs even better than expected or has an additional perk to it, the GM will describe it</p>'
    }
  ]
};
