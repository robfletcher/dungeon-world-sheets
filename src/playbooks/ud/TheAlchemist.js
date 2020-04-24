export const theAlchemist = {
  name: 'The Alchemist',
  hitPoints: 16,
  damageModifier: 0,
  looks: [
    'Fiery Eyes, Tired Eyes, or Brass Goggles',
    'Academic Cap, Wispy Hair, or Balding',
    'Scholar\'s Robe, Protective Clothing, or Singed Clothing',
    'Stained Fingertips, Funny Smell, or Esoteric Markings'
  ],
  drives: [
    {
      name: 'Science!',
      description: 'Discover how something new works.'
    },
    {
      name: 'Transformation',
      description: 'Provide or be the catalyst for change in the world.'
    },
    {
      name: 'Utopia',
      description: 'Create or discover something that helps other people.'
    }
  ],
  background: [],
  bonds: [
    'Who is most likely to be the subject of my studies? ____',
    'Who is most likely to help me with my projects? ____',
    'Who needs to be shown that science and rationality are superior to their own ways? ____'
  ],
  baseLoad: 6,
  startingMoves: {
    backgroundOptions: [
      'Physician',
      'Incendiary',
      'Academician'
    ],
    allOf: [
      'Alchemist\'s Kit',
      'Alchemist Flasks',
      'Strange Medicine',
      'Taste Test'
    ],
    oneOf: [
      'Potion Brewer',
      'Explosive Flasks',
      'Experimentation',
      'Mutagen',
      'Pathologist',
      'Logical',
      'Tincture',
    ]
  },
  moves: [
    {
      name: 'Physician',
      description: '<p>When you <strong>treat someone else with Strange Medicine</strong>, any die rolled for the move has advantage, and at your option, the pain and drugs make them babble the truth to you. Ask them what secret they spill.</p>'
    },
    {
      name: 'Incendiary',
      description: '<p>Add the following option to the list of Alchemic Flask effects:</p>' +
        '<ul>' +
        '<li>Phlogiston Flask: Deal your damage to the target with the <em>forceful</em>, <em>fiery</em>, and <em>loud</em> tags</li>' +
        '</ul>'
    },
    {
      name: 'Academician',
      description: '<p>When you <strong>Parley with someone who highly respects knowledge or history</strong>, you roll with INT instead of CHA.</p>' +
        '<p>Additionally, your alchemy kit holds a maximum of 4 Stock instead of 3, due to your superior training.</p>'
    },
    {
      name: 'Alchemist\'s Kit',
      description: '<p>You have a portable kit of alchemical reagents, flasks, and reagents. It can hold a maximum of 3 Stock. When you <strong>spend a few hours gathering and refining reagents for your kit in a suitable place</strong>, refill your Stock to the maximum, though there may be a complication if you are working in a dangerous area.</p>'
    },
    {
      name: 'Alchemist Flasks',
      description: '<p>When you <strong>throw a weaponized alchemic flask</strong>, choose one of the following effects:</p>' +
        '<ul>' +
        '<li><strong>Choking Gas</strong>: The target is stunned for a few moments in a fit of coughing and choking</li>' +
        '<li><strong>Toxic Fumes</strong>: The target\'s damage rolls gain disadvantage until they are cured</li>' +
        '<li><strong>Acid Splash</strong>: Deal your damage to the target, ignoring armor</li>' +
        '<li><strong>Congealing Gel</strong>: Sticky resin binds one of the target\'s limbs until washed off or otherwise removed</li>' +
        '<li><strong>Confounding Vapors</strong>: The target\'s mind becomes clouded, making them unable to concentrate or do anything requiring mental fortitude for a few moments</li>' +
        '</ul>' +
        '<p>Then roll+DEX.</p>' +
        '<ul>' +
        '<li>On a hit, your chosen effect hits the target.</li>' +
        '<li>On a 7-9, also choose one:' +
        '<ul>' +
        '<li>The flask\'s effect splashes onto something you didn\'t intend to hit</li>' +
        '<li>You have to move to make your throw, placing you in danger as described by the GM</li>' +
        '<li>You use up some reagents, spend 1 Stock</li>' +
        '</ul>' +
        '</li>' +
        '</ul>' +
        '<p>Regardless of the option you choose, your flasks have the following tags: <em>thrown</em>, <em>near</em>, and <em>dangerous</em>.</p>'
    },
    {
      name: 'Strange Medicine',
      description: '<p>When you <strong>spend a few minutes treating someone (including yourself) with curious tonics from your alchemy kit</strong>, you can make the First Aid move and spend 1 Stock instead of Supplies, and you can cure them of a poison, disease, or mental malady instead of healing HP.</p>'
    },
    {
      name: 'Taste Test',
      description: '<p>When you <strong>taste any liquid, magical or otherwise</strong>, the GM will tell you what it is and what it does, though you may have to Defy Danger with CON if you try tasting something toxic or dangerous to drink.</p>'
    },
    {
      name: 'Potion Brewer',
      description: '<p>When you <strong>have time, safety, and equipment to brew a potion</strong>, tell the GM what you\'re trying to achieve. Potion effects are always possible, but the GM will give you one to four of the following conditions:</p>' +
        '<ul>' +
        '<li>The potion\'s effects will not last long; you will have to hurry to get use out of it</li>' +
        '<li>It will have some unwanted side effects or limitations</li>' +
        '<li>It will be unstable, and may degrade over time or if mishandled</li>' +
        '<li>You can only make a weaker version of your desired effect</li>' +
        '<li>You will need _________ to complete the potion</li>' +
        '<li>It will take days/weeks/months to brew</li>' +
        '</ul>'
    },
    {
      name: 'Explosive Flasks',
      description: '<p>When you <strong>add an extra volatile agent to one of your flasks just before you throw it</strong>, either spend 1 stock or make the roll with disadvantage, and your flask\'s effect hits everything in a small area around your target.</p>'
    },
    {
      name: 'Experimentation',
      description: '<p>When you <strong>spend some time experimenting with an object or substance</strong>, ask the GM two questions from the following list, they will answer you truthfully. If you spend 1 Stock, ask all of the questions instead:</p>' +
        '<ul>' +
        '<li>What is this made of?</li>' +
        '<li>What could be made from this?</li>' +
        '<li>Who created this and how old is it?</li>' +
        '<li>What has been done most recently with this, or to this?</li>' +
        '</ul>'
    },
    {
      name: 'Mutagen',
      description: '<p>When you <strong>dose yourself with an alchemic mutagen</strong>, describe how you are transformed by it, then spend 1 Stock and choose a stat; your rolls using that stat have advantage. The GM will also choose a stat; your rolls using that stat have disadvantage. The effect lasts until you Make Camp or dose yourself with an antidote by spending 1 Stock.</p>'
    },
    {
      name: 'Pathologist',
      description: '<p>When you <strong>heal someone of an affliction</strong>, you may store that affliction in your kit, taking up the space of 1 Stock. When you throw an alchemic flask, add the following option to the list of effects:</p>' +
        '<ul>' +
        '<li>You inflict an affliction stored in your alchemy kit</li>' +
        '</ul>' +
        '<p>Hit or miss, if you pick this option, the stored affliction is consumed.</p>'
    },
    {
      name: 'Logical',
      description: '<p>When you <strong>Discern Realities by using strict deduction or logic to analyze your surroundings</strong>, you roll with INT instead of WIS.</p>'
    },
    {
      name: 'Tincture',
      description: '<p>Any potion made or used by you can be used by applying it to someone\'s skin instead of drinking it. When you <strong>throw a potion at someone (including a healing potion)</strong>, roll+DEX.</p>' +
        '<ul>' +
        '<li>On a hit, the target takes the effects of that potion, as if they drank it.</li>' +
        '<li>On a 7-9, either the potion splashes on something nearby you didn\'t want to hit, or your target doesn\'t get the full benefit from the potion.</li>' +
        '</ul>'
    },
    {
      name: 'Capstone',
      requiresLevel: 6,
      description: '<p>When you <strong>Spout Lore</strong>, on a 12+, the GM will also ask you a question about the subject. Whatever you answer, it is the truth.</p>'
    }
  ]
};
