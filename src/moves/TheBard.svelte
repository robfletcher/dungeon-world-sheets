<script>
  import Move from "../Move.svelte";
  import MoveOption from "../MoveOption.svelte";
</script>

<Move name="Arcane Art">
  <p>When you <strong>weave a performance into a basic spell</strong>, choose an ally and an effect:</p>
  <ul>
    <li>Heal 1d8 damage</li>
    <li>+1d4 forward to damage</li>
    <li>Their mind is shaken clear of one enchantment</li>
    <li>The next time someone successfully assists the target with aid, they get +2 instead of +1</li>
  </ul>
  <p>Then roll+CHA.</p>
  <ul>
    <li>On a 10+, the ally gets the selected effect.</li>
    <li>On a 7-9, your spell still works, but you draw unwanted attention or your magic reverberates to other targets
      affecting them as well, GM’s choice.
    </li>
  </ul>
</Move>

<Move name="Charming & Open">
  <p>
    When you <strong>speak frankly with someone</strong>, you can ask their player a question from the list below.
    They must answer it truthfully, then they may ask you a question from the list (which you must answer truthfully).
  </p>
  <ul>
    <li>Whom do you serve?</li>
    <li>What do you wish I would do?</li>
    <li>How can I get you to _____?</li>
    <li>What are you really feeling right now?</li>
    <li>What do you most desire?</li>
  </ul>
</Move>

<Move name="Bardic Lore">
  <p>Choose an area of expertise:</p>
  <fieldset>
    <MoveOption value="Spells and Magicks"/>
    <MoveOption value="The Dead and Undead"/>
    <MoveOption value="Grand Histories of the Known World"/>
    <MoveOption value="A Bestiary of Creatures Unusual"/>
    <MoveOption value="The Planar Spheres"/>
    <MoveOption value="Legends of Heroes Past"/>
    <MoveOption value="Gods and Their Servants"/>
  </fieldset>
  <p>
    When you <strong>first encounter an important creature, location, or item</strong> (your call) covered by your
    bardic lore you can ask the GM any one question about it; the GM will answer truthfully. The GM may then ask you
    what tale, song, or legend you heard that information in.
  </p>
</Move>

<Move name="A Port In The Storm">
  <p>
    When you <strong>return to a civilized settlement you’ve visited before</strong>, tell the GM when you were last
    here. They’ll tell you how it’s changed since then.
  </p>
</Move>

<hr>

<Move name="Healing Song" requiresLevel="2">
  <p>When you <strong>heal with Arcane Art</strong>, you heal +1d8 damage.</p>
</Move>

<Move name="Vicious Cacophony" requiresLevel="2">
  <p>When you <strong>grant bonus damage with Arcane Art</strong>, you grant an extra +1d4 damage.</p>
</Move>

<Move name="It Goes To Eleven" requiresLevel="2">
  <p>
    When you <strong>unleash a crazed performance</strong> (a righteous lute solo or mighy brass blast, maybe) choose
    a target who can hear you and roll+CHA.</p>
  <ul>
    <li>On a 10+ the target attacks their nearest ally in range.</li>
    <li>On a 7-9 they attack their nearest ally, but you also draw their attention and ire.</li>
  </ul>
</Move>

<Move name="Metal Hurlant" requiresLevel="2">
  <p>
    When you <strong>shout with great force or play a shattering note</strong> choose a target and roll+CON. • On a
    10+ the target takes 1d10 damage and is deafened for a few minutes. • On a 7-9 you still damage your target, but
    it’s out of control: the GM will choose an additional target nearby.
  </p>
</Move>

<Move name="A Little Help From My Friends" requiresLevel="2">
  <p>When you <strong>successfully aid someone</strong> you take +1 forward as well.</p>
</Move>

<Move name="Eldritch Tones" requiresLevel="2">
  <p>Your <strong>Arcane Art</strong> is strong, allowing you to choose two effects instead of one.</p>
</Move>

<Move name="Duelist’s Parry" requiresLevel="2">
  <p>When you <strong>Hack & Slash</strong>, you take +1 armor forward.</p>
</Move>

<Move name="Bamboozle" requiresLevel="2">
  <p>When you <strong>parley with someone</strong>, on a 7+ you also take +1 forward with them.</p>
</Move>

<Move name="Multiclass Dabbler" requiresLevel="2">
  <p>Get one move from another class. Treat your level as one lower for choosing the move.</p>
</Move>

<Move name="Multiclass Initiate" requiresLevel="2">
  <p>Get one move from another class. Treat your level as one lower for choosing the move.</p>
</Move>

<hr>

<Move name="Healing Chorus" requiresLevel="6" replacesMove="Healing Song">
  <p>When you <strong>heal with Arcane Art</strong>, you heal +2d8 damage.</p>
</Move>

<Move name="Vicious Blast" requiresLevel="6" replacesMove="Vicious Cacophony">
  <p>When you <strong>grant bonus damage with Arcane Art</strong>, you grant an extra +2d4 damage.</p>
</Move>

<Move name="Unforgettable Face" requiresLevel="6">
  <p>
    When you <strong>meet someone you’ve met before</strong> (your call) after some time apart you take +1 forward
    against them.
  </p>
</Move>

<Move name="Reputation" requiresLevel="6">
  <p>When you <strong>first meet someone who’s heard songs about you</strong>, roll+CHA.</p>
  <ul>
    <li>On a 10+, tell the GM two things they’ve heard about you.</li>
    <li>On a 7-9, tell the GM one thing they’ve heard, and the GM tells you one thing.</li>
  </ul>
</Move>

<Move name="Eldritch Chord" requiresLevel="6" replacesMove="Eldritch Tones">
  <p>
    When you use <strong>Arcane Art</strong>, you choose two effects. You also get to choose one of those effects to
    double.
  </p>
</Move>

<Move name="An Ear For Magic" requiresLevel="6">
  <p>
    When you <strong>hear an enemy cast a spell</strong> the GM will tell you the name of the spell and its effects.
    Take +1 forward when acting on the answers.
  </p>
</Move>

<Move name="Devious" requiresLevel="6">
  <p>
    When you use <strong>Charming & Open</strong> you may also ask “How are you vulnerable to me?” Your subject may
    not ask this question of you.
  </p>
</Move>

<Move name="Duelist’s Block" requiresLevel="6" replacesMove="Duelist’s Parry">
  <p>When you <strong>Hack & Slash</strong>, you take +2 armor forward.</p>
</Move>

<Move name="Con" requiresLevel="6" replacesMove="Bamboozle">
  <p>
    When you <strong>parley with someone</strong>, on a 7+ you also take +1 forward with them and get to ask their
    player one question which they must answer truthfully.
  </p>
</Move>

<Move name="Multiclass Master" requiresLevel="6">
  <p>Get a move from another class. Treat your level as one lower for choosing the move.</p>
</Move>