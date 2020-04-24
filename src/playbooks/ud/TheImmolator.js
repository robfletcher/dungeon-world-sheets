export const theImmolator = {
  name: 'The Immolator',
  hitPoints: 16,
  damageModifier: 1,
  looks: [
    'Smoldering eyes, Warm eyes, Searing eyes',
    'Strange brands, Ritual scars, Perfect skin',
    'Imperious bearing, Manic attitude, Barely-hidden rage',
    'Crackling voice, Whispering voice, Roaring voice'
  ],
  drives: [
    {
      name: 'Firebrand',
      description: 'Spread a dangerous new idea.'
    },
    {
      name: 'Destruction',
      description: 'Utterly obliterate something significant or meaningful (not necessarily a physical object).'
    },
    {
      name: 'Torment',
      description: 'Freely sacrifice of yourself to bring about a good result.'
    }
  ],
  background: [
    'How and when did the flames first call to you?',
    'How did you come to learn your abilities?',
    'What are you <em>not</em> willing to sacrifice?',
    'How do you temper the flame inside you?'
  ],
  bonds: [
    'Which of you has felt the touch of hellfire before? ____',
    'Which of you is playing with fire? ____',
    'Which of you have I changed the most? ____'
  ],
  baseLoad: 4,
  startingMoves: {
    backgroundOptions: [
      'Dragon-Blooded',
      'Infernal Touch',
      'Phoenix Soul'
    ],
    allOf: [
      'Burning Brand',
      'Zuko Style',
      'Give Me Fuel, Give Me Fire',
      'Hand Crafted'
    ],
    oneOf: [
      'Fighting Fire with Fire',
      'Lore of Flame',
      'Cleansing Flames',
      'This Killing Fire',
      'Enkindler',
      'Twice as Bright, Half as Long',
      'Watch the World Burn',
    ]
  },
  moves: [
    {
      name: 'Dragon-Blooded',
      description: '<p>Non-magical heat and fire do not harm you, and when you <strong>use Zuko Style</strong>, on a 10+, the flame will persist a short time without fuel.</p>'
    },
    {
      name: 'Infernal Touch',
      description: '<p>When you <strong>summon fire with any of your moves</strong>, you may replace it with the black fires of hell itself. This fire does not burn with heat and ignores armor, scorching the soul itself. Creatures without souls cannot be harmed by this type of flame.</p>'
    },
    {
      name: 'Phoenix Soul',
      description: '<p>When you <strong>go out in a blaze of glory and would take your Last Breath</strong>, the flames intervene on your behalf; you return to life with 1d6 HP and with something inherent and valuable to you sacrificed to the flames; the GM will say what.</p>'
    },
    {
      name: 'Burning Brand',
      description: '<p>When you <strong>conjure a weapon of pure flame</strong>, describe its shape and roll+CON. The weapon always begins with the <em>fiery</em>, <em>hand</em>, and <em>dangerous</em> tags, and lasts until the end of the current scene.</p>' +
        '<ul>' +
        '<li>On a 10+, choose two of the following tags to add to your weapon.</li>' +
        '<li>On a 7-9 choose one.' +
        '<ul>' +
        '<li><em>close</em></li>' +
        '<li><em>reach</em></li>' +
        '<li><em>precise</em></li>' +
        '<li><em>thrown</em> and <em>near</em></li>' +
        '<li>advantage on damage rolls</li>' +
        '<li>remove the <em>dangerous</em> tag</li>' +
        '</ul>' +
        '</li>' +
        '<li>On a 6-, you still get your weapon, but it gets the <em>hungry</em> tag; make sure you feed it, or else.</li>' +
        '</ul>'
    },
    {
      name: 'Zuko Style',
      description: '<p>When you <strong>bend a flame to your will</strong>, roll+WIS.</p>' +
        '<ul>' +
        '<li>On a 10+ it does as you command, taking the shape and movement you desire for as long as it has fuel on which to burn.</li>' +
        '<li>On a 7-9, the effect is short- lived, lasting only a moment.</li>' +
        '</ul>'
    },
    {
      name: 'Give Me Fuel, Give Me Fire',
      description: '<p>When you <strong>gaze intensely into someone eyes</strong>, you may ask their player "What fuels the flames of your desire?" they\'ll answer with the truth, even if the character does not know or would otherwise keep this hidden.</p>'
    },
    {
      name: 'Hand Crafted',
      description: '<p>You may use your hands in place of tools and fire to craft metal objects. Mundane weapons, armor and metal jewelry can all be formed from their raw components. You may unmake these things, as well, but to do so without time and safety might require that you Defy Danger first.</p>'
    },
    {
      name: 'Fighting Fire with Fire',
      description: '<p>When you <strong>take damage</strong>, the flames within you come to your aid; choose one:</p>' +
        '<ul>' +
        '<li>Gain advantage next time you summon your Burning Brand</li>' +
        '<li>Reduce the damage by 1</li>' +
        '<li>Add a tag of your choice from Burning Brand to your next attack with your fiery weapon</li>' +
        '</ul>'
    },
    {
      name: 'Lore of Flame',
      description: '<p>When you <strong>stare into a source of fire, looking for answers</strong>, roll+WIS.</p>' +
        '<ul>' +
        '<li>On a hit, the GM will tell you something new and interesting about the current situation.</li>' +
        '<li>On a 10+, the GM will give you good detail.</li>' +
        '<li>On a 7-9, the GM will give you an impression.</li>' +
        '</ul>' +
        '<p>If you already know all there is to know, the GM will tell you that.</p>'
    },
    {
      name: 'Cleansing Flames',
      description: '<p>When you <strong>Make Camp around a large bonfire</strong>, choose one. When you <strong>engulf yourself in a large and very powerful flame, or perform a ritual before such a blaze</strong>, choose two:<p>' +
        '<ul>' +
        '<li>You are healed to your full HP</li>' +
        '<li>You are cured of a debility of your choice</li>' +
        '<li>You regrow any lost limbs</li>' +
        '<li>You are purged of any mortal poisons or diseases</li>' +
        '</ul>'
    },
    {
      name: 'This Killing Fire',
      description: '<p>Add the following tags to your options for Burning Brand:</p>' +
        '<ul>' +
        '<li><em>messy</em></li>' +
        '<li><em>forceful</em></li>' +
        '<li><em>thrown</em> and <em>far</em></li>' +
        '</ul>'
    },
    {
      name: 'Enkindler',
      description: '<p>When you <strong>speak firmly and passionately to an NPC</strong>, choose one of the following and roll+CHA.</p>' +
        '<ul>' +
        '<li>On a hit, the desired effect comes to pass.</li>' +
        '<li>On a 7-9, the effect is only fleeting.</li>' +
        '</ul>' +
        '<ul>' +
        '<li>You instill in them a new idea, which they take to with fervor</li>' +
        '<li>You bolster their resolve, removing all sense of fear and doubt</li>' +
        '<li>You belittle them, forcing them to back down—for now</li>' +
        '</ul>'
    },
    {
      name: 'Twice as Bright, Half as Long',
      description: '<p>When you <strong>call upon the flames of fate</strong>, you may treat one of your missed rolls as a 7-9, or a 7-9 as a 10+. Tell the GM what you\'ve lost to make this come to pass; an emotion, a memory, or some innate piece of your being; it\'s gone forever, right now. The flames will then make a request of you, big, or small (the GM will say exactly what). You may not use this move again until you have fulfilled their wishes, refusing to do so may have dire consequences.</p>'
    },
    {
      name: 'Watch the World Burn',
      description: '<p>When you <strong>open a channel to the burning planes and call down a firestorm</strong>, tell the GM what you\'re sacrificing and roll+WIS. The sky opens up and fire pours like rain within an area proportionate to your sacrifice; everyone and everything in the area takes damage as appropriate.</p>' +
        '<ul>' +
        '<li>On a 10+, you can extinguish the storm with a little effort.</li>' +
        '<li>On a 7-9, the fires rage out of your control, spreading and dusting where they are carried by wind and weather.</li>' +
        '<li>On a 6-, something cruel, intelligent, and hungry comes with the storm.</li>' +
        '</ul>'
    },
    {
      name: 'Capstone',
      requiresLevel: 6,
      description: '<p>When you <strong>conjure your Burning Brand</strong>, on a 12+, choose three tags from the list.</p>'
    }
  ]
};
