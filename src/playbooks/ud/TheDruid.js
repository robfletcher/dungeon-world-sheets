export const theDruid = {
  name: 'The Druid',
  hitPoints: 16,
  damageModifier: 0,
  looks: [
    'Wise Eyes, Wild Eyes, or Haunting Eyes',
    'Furry Hood, Messy Hair, or Braided Hair',
    'Ceremonial Garb, Practical Leathers, or Weathered Hides',
    'Tell:'
  ],
  drives: [
    {
      name: 'Renewal',
      description: 'Reclaim something for the natural world.'
    },
    {
      name: 'Cultivation',
      description: 'Help something or someone grow or move on to the next step in the cycle.'
    },
    {
      name: 'Preservation',
      description: 'Eliminate an unnatural menace.'
    }
  ],
  background: [
    'How did you gain your abilities?',
    'What is your tell, and why is it significant to you?',
    'What are (most) spirits like? What do they want, and what appeases them?',
    'What grim portents have the spirits whispered to you?'
  ],
  bonds: [
    'Which of you requires my guidance? ____',
    'About which of you do the spirits whisper? ____',
    'Which of you dismisses me as a primitive? ____',
    'Which of you has also seen the spirit realm? ____'
  ],
  baseLoad: 7,
  startingMoves: {
    backgroundOptions: [
      'Keeper of the Old Faith',
      'Shaman',
      'Beast-kin'
    ],
    allOf: [
      'Shapeshifter',
      'Spirit Tongue',
      'Studied Essence'
    ],
    oneOf: [
      'Communion of Whispers',
      'Eyes of the Tiger',
      'World-Speaker',
      'Elemental Mastery',
      'Trackless Stride',
      'Widdershins',
      'Red of Tooth and Claw',
    ]
  },
  moves: [
    {
      name: 'Keeper of the Old Faith',
      description: '<p>When you <strong>Make Camp</strong>, you may make the First Aid move once without spending Supplies, and when you do so, you may cure your subject of a debility, poison or disease afflicting them instead of healing HP or stabilizing their wounds.</p>'
    },
    {
      name: 'Shaman',
      description: '<p>When you <strong>deal damage</strong>, hold 1 Balance. When you <strong>touch someone and channel the spirits of life</strong>, you may spend Balance; for each Balance spent, your subject heals 1d6 HP. The maximum amount of Balance you may hold is equal to your CON or 1, whichever is higher.</p>'
    },
    {
      name: 'Beast-kin',
      description: '<p>When you <strong>Shapeshift</strong>, choose a stat; your rolls using that stat while shapeshifted have advantage. The GM will also choose a stat; your rolls using that stat while shapeshifted have disadvantage.</p>'
    },
    {
      name: 'Shapeshifter',
      description: '<p>When you <strong>call upon the spirits to change your shape</strong>, you transform yourself into an animal from your land, and roll+WIS. ' +
        '<ul>' +
        '<li>On a 10+, hold 3 Instinct.</li>' +
        '<li>On a 7-9, hold 2 Instinct.</li>' +
        '<li>On a 6-, hold 1 Instinct anyway, but the GM will also make a move.</li>' +
        '</ul>' +
        '<p><strong>Choose a land to which you are attuned</strong>—when shapeshifting you may take the shape of any animal who might live in your Land.</p>' +
        '<ul class="move-options">' +
        '<li>The Great Forests</li>' +
        '<li>The Whispering Plains</li>' +
        '<li>The Vast Desert</li>' +
        '<li>The Stinking Mire</li>' +
        '<li>The Sapphire Islands</li>' +
        '<li>The Open Sea</li>' +
        '<li>The Towering Mountains</li>' +
        '<li>The Frozen Tundra</li>' +
        '</ul>' +
        '<p>You and your possessions meld into a perfect copy of the animal\'s form. You have any innate abilities and weaknesses of the form: claws, wings, gills, breathing water instead of air. You still use your normal stats but some moves may be harder to trigger—a housecat will find it hard to do battle with an ogre. When you <strong>make a move while shapeshifted and get a 9 or less</strong>, you must spend an Instinct or you revert back to your normal form. You may willingly revert back to your normal form at any time; when you do, you lose any remaining Instinct held.</p>' +
        '<p><strong>Choose a tell</strong>—a physical attribute that marks you as born of the soil—that reflects the spirit of your land. It may be an animal feature like antlers or leopard\'s spots or something more general: hair like leaves or eyes of glittering crystal. Your tell remains no matter what shape you take.</p>'
    },
    {
      name: 'Spirit Tongue',
      description: '<p>You can speak with and understand natural beasts and spirits of the wild, you can closely study and Parley with them as if they were people, and you roll with WIS instead of CHA when you Parley with a natural beast or spirit using your Spirit Tongue.</p>' +
        '<p>You can always ask the GM, "What spirits are active here?" and get an honest answer. When you <strong>perform a small ritual and make an offering of something they\'d like (whisky, incense, blood, etc.)</strong>, the spirits of a place manifest before you—not always friendly, but at least curious and willing to hear you out.</p>'
    },
    {
      name: 'Studied Essence',
      description: '<p>When you <strong>spend time communing with an animal spirit</strong>, the spirit may ask you to perform a deed. When you <strong>perform this deed</strong>, you may add its species to those you can assume using Shapeshift.</p>'
    },
    {
      name: 'Communion of Whispers',
      description: '<p>When you <strong>spend time in a place, making note of its resident spirits and calling on the spirits of the land</strong>, roll+WIS. You will be granted a vision of significance to you, your allies, and the spirits around you.</p>' +
        '<ul>' +
        '<li>On a 10+, the vision will be clear and helpful to you.</li>' +
        '<li>On a 7-9, choose one.' +
        '<ul>' +
        '<li>The vision is unclear, its meaning murky</li>' +
        '<li>The vision will reveal an unwelcome truth to you</li>' +
        '</ul>' +
        '</li>' +
        '</ul>'
    },
    {
      name: 'Eyes of the Tiger',
      description: '<p>When you <strong>mark an animal (with mud, dirt, or blood)</strong>, you can see through that animal\'s eyes as if they were your own, no matter what distance separates you. Only one animal at a time may be marked in this way. This doesn\'t give you control over the animal, but they could be convinced to do as you say by Parleying with them.</p>'
    },
    {
      name: 'World-Speaker',
      description: '<p>Your Spirit Tongue and Studied Essence moves may now also be applied to inanimate natural objects (such as plants and trees) or creatures made thereof, as well as pure elements—fire, water, air, and earth. If such a being grants you the ability to shapeshift via Studied Essence, your forms can be exact copies or mobile vaguely humanoid-shaped entities.<p>'
    },
    {
      name: 'Elemental Mastery',
      description: '<p>When you <strong>call on the primal spirits of fire, water, earth or air to perform a task for you</strong>, describe what you wish to happen and roll+CON.</p>' +
        '<ul>' +
        '<li>On a 10+, choose two.</li>' +
        '<li>On a 7-9, choose one.</li>' +
        '</ul>' +
        '<ul>' +
        '<li>The effect comes to pass exactly as you envisioned it</li>' +
        '<li>You avoid paying nature\'s price</li>' +
        '<li>You retain control</li>' +
        '</ul>' +
        '<p>The larger your task, the greater price you can expect to pay, and the greater the dangers that may arise from losing control.</p>'
    },
    {
      name: 'Trackless Stride',
      description: '<p>When you <strong>move through natural terrain</strong>, you leave no trail, and any natural hazards (thorns, mire, rubble) do not hinder you, nor do they cause you to Defy Danger when you move through them.</p>' +
        '<p>Additionally, when you <strong>lead the way on a Perilous Journey through the wilderness</strong>, your party spends 1 less use of Supplies.</p>'
    },
    {
      name: 'Widdershins',
      description: '<p>When you <strong>bind a spirit, extraplanar entity, or perversion of nature with rituals and incantations</strong>, roll+WIS.</p>' +
        '<ul>' +
        '<li>On a hit, you either banish it from this world, force it from its host, or put a restriction on it, your choice.</li>' +
        '<li>On a 7-9, choose one:' +
        '<ul>' +
        '<li>It will retaliate against you before the binding is complete</li>' +
        '<li>The effect is temporary, and can be broken or undone by others or by the passage of time</li>' +
        '</ul>' +
        '</li>' +
        '</ul>'+
        '<p>You can dispel your effect whenever you wish, but it will then be free to do as it pleases.</p>'
    },
    {
      name: 'Red of Tooth and Claw',
      description: '<p>When you <strong>take the form of a creature both dangerous and fearsome</strong>, choose one of the following tags to add to your natural attacks: <em>forceful</em>, <em>messy</em>, or <em>2 piercing</em>.</p>' +
        '<p>Additionally, while <strong>you are Shapeshifted in such a form</strong>, you have armor equal to your Instinct in place of any other armor you normally have.</p>'
    },
    {
      name: 'Capstone',
      requiresLevel: 6,
      description: '<p>When you <strong>use Shapeshifter</strong>, on a 12+ you can stay in that form as long as you wish; you never have to spend Instinct to maintain it until you change back.</p>'
    }
  ]
};
