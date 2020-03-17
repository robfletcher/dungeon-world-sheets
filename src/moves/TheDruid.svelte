<script>
  import Move from "../Move.svelte";
  import MoveOption from "../MoveOption.svelte";
</script>

<Move name="Born Of The Soil">
  <p>
    You learned your magic in a place whose spirits are strong and ancient and they’ve marked you as one of their own.
    No matter where you go, they live within you and allow you to take their shape. Choose one of the following. It is
    the land to which you are attuned—when shapeshifting you may take the shape of any animal who might live in your
    Land.
  </p>
  <MoveOption value="The Great Forests"/>
  <MoveOption value="The Whispering Plains The Vast Desert"/>
  <MoveOption value="The Stinking Mire"/>
  <MoveOption value="The River Delta"/>
  <MoveOption value="The Depths of the Earth The Sapphire Islands The Open Sea"/>
  <MoveOption value="The Towering Mountains The Frozen North"/>
  <MoveOption value="The Blasted Wasteland"/>
  <p>
    Chose a tell—a physical attribute that marks you as born of the soil—that reflects the spirit of your land. It may
    be an animal feature like antlers or leopard’s spots or something more general: hair like leaves or eyes of
    glittering crystal. Your tell remains no matter what shape you take.
  </p>
</Move>

<Move name="By Nature Sustained">
  <p>You don’t need to eat or drink. If a move tells you to mark off a ration just ignore it.</p>
</Move>

<Move name="Spirit Tongue">
  <p>
    The grunts, barks, chirps, and calls of the creatures of the wild are as language to you. You can understand any
    animal native to your land or akin to one whose essence you have studied.
  </p>
</Move>

<Move name="Shapeshifter">
  <p>When you call upon the spirits to change your shape, roll+WIS.</p>
  <ul>
    <li>On a 10+ hold 3.</li>
    <li>On a 7–9 hold 2.</li>
    <li>On a miss hold 1 in addition to whatever the GM says.</li>
  </ul>
  <p>
    You may take on the physical form of any species whose essence you have studied or who lives in your land: you and
    your possessions meld into a perfect copy of the species’ form. You have any innate abilities and weaknesses of the
    form: claws, wings, gills, breathing water instead of air. You still use your normal stats but some moves may be
    harder to trigger—a housecat will find it hard to do battle with an ogre. The GM will also tell you one or more
    moves associated with your new form. <strong>Spend 1 hold to make that move</strong>. Once you’re out of hold, you
    return to your natural form. At any time, you may spend all your hold and revert to your natural form.
  </p>
</Move>

<Move name="Studied Essence">
  <p>
    When you spend time in contemplation of an animal spirit, you may add its species to those you can assume using
    shapeshifting.
  </p>
</Move>

<hr>

<Move name="Hunter’s Brother" requiresLevel="2">
  <p>Choose one move from the ranger class list.</p>
</Move>

<Move name="Red Of Tooth And Claw" requiresLevel="2">
  <p>When you <strong>are in an appropriate animal form</strong> (something dangerous) increase your damage to d8.</p>
</Move>

<Move name="Communion Of Whispers" requiresLevel="2">
  <p>
    When you <strong>spend time in a place</strong>, making note of its resident spirits and calling on the spirits of
    the land, roll+WIS. You will be granted a vision of significance to you, your allies, and the spirits around you.
  </p>
  <ul>
    <li>On a 10+ the vision will be clear and helpful to you.</li>
    <li>On a 7–9 the vision is unclear, its meaning murky.</li>
    <li>On a miss, the vision is upsetting, frightening, or traumatizing. The GM will describe it. Take -1 forward.</li>
  </ul>
</Move>

<Move name="Barkskin" requiresLevel="2">
  <p>So long as your feet touch the ground you have +1 armor.</p>
</Move>

<Move name="Eyes Of The Tiger" requiresLevel="2">
  <p>
    When you <strong>mark an animal</strong> (with mud, dirt, or blood) you can see through that animal’s eyes as if
    they were your own, no matter what distance separates you. Only one animal at a time may be marked in this way.
  </p>
</Move>

<Move name="Shed" requiresLevel="2">
  <p>When you <strong>take damage while shapeshifted</strong> you may choose to revert to your natural form to negate
    the damage.</p>
</Move>

<Move name="Thing-talker" requiresLevel="2">
  <p>
    You see the spirits in the sand, the sea and the stone. You may now apply your spirit tongue, shapeshifting and
    studied essence to inanimate natural objects (plants and rocks) or creatures made thereof, as well as animals.
    Thing-talker forms can be exact copies or can be mobile vaguely humanoid-shaped entities.
  </p>
</Move>

<Move name="Formcrafter" requiresLevel="2">
  <p>
    When you <strong>shapeshift</strong> choose a stat: you take +1 ongoing to rolls using that stat while shifted. The
    GM will choose a stat, too: you take -1 ongoing to rolls using that stat while shifted.
  </p>
</Move>

<Move name="Elemental Mastery" requiresLevel="2">
  <p>
    When you <strong>call on the primal spirits</strong> of fire, water, earth or air to perform a task for you
    roll+WIS.
  </p>
  <ul>
    <li>On a 10+ choose two.</li>
    <li>On a 7–9 choose one.</li>
    <li>On a miss, some catastrophe occurs as a result of your calling.</li>
  </ul>
  <ul>
    <li>The effect you desire comes to pass • You avoid paying nature’s price</li>
    <li>You retain control</li>
  </ul>
</Move>

<Move name="Balance" requiresLevel="2">
  <p>
    When you <strong>deal damage</strong>, take 1 balance. When you touch someone and channel the spirits of life you
    may spend balance. For each balance spent, heal 1d4 HP.
  </p>
</Move>

<hr>

<Move name="Embracing No Form" requiresLevel="6">
  <p>When you <strong>shapeshift</strong>, roll 1d4 and add that total to your hold.</p>
</Move>

<Move name="Doppleganger’s Dance" requiresLevel="6">
  <p>
    You are able to study the essence of specific individuals to take their exact form, including men, elves, or the
    like. Suppressing your tell is possible, but if you do, take -1 ongoing until you return to your own form.
  </p>
</Move>

<Move name="Blood And Thunder" requiresLevel="6" replacesMove="Red Of Tooth And Claw">
  <p>When you <strong>are in an appropriate animal form</strong> (something dangerous) increase your damage to d10.</p>
</Move>

<Move name="The Druid Sleep" requiresLevel="6">
  <p>
    When you take this move, the next opportunity that you have safety and time to spend in an appropriate location, you
    may attune yourself to a new land. This effect occurs only once and the GM will tell you how long it will take and
    what cost you must pay. From then on, you are considered to be born of the soil in both lands.
  </p>
</Move>

<Move name="Weather Weaver" requiresLevel="6">
  <p>
    When you <strong>are under open skies when the sun rises</strong> the GM will ask you what the weather will be that
    day. Tell them whatever you like, it comes to pass.
  </p>
</Move>

<Move name="World-talker" requiresLevel="6" requiresMove="Thing-talker">
  <p>
    You see the patterns that make up the fabric of the world. You may now apply your spirit tongue, shapeshifter and
    studied essence moves to pure elements—fire, water, air and earth.
  </p>
</Move>

<Move name="Formshaper" requiresLevel="6" requiresMove="Formcrafter">
  <p>
    You may increase your armor by 1 or deal an additional +1d4 damage while in an animal form. Choose which when you
    shapeshift.
  </p>
</Move>

<Move name="Healthy Distrust" requiresLevel="6">
  <p>
    Whenever the unclean magic wielded by mortal men causes you to <strong>Defy Danger</strong>, treat any result of 6-
    as a 7–9.
  </p>
</Move>

<Move name="Chimera" requiresLevel="6">
  <p>
    When you <strong>shapeshift</strong>, you may create a merged form of up to three different shapes. You may be a
    bear with the wings of an eagle and the head of a ram, for example. Each feature will grant you a different move to
    make. Your chimera form follows the same rules as shapeshifter otherwise.
  </p>
</Move>

<Move name="Stalker’s Sister" requiresLevel="6">
  <p>Choose one move from the ranger class list.</p>
</Move>
