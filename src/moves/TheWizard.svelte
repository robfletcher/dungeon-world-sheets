<script>
  import Move from "../Move.svelte";
  import MoveOption from "../MoveOption.svelte";
</script>

<Move name="Cast A Spell (INT)">
  <p>When you <strong>release a spell you’ve prepared</strong>, roll+INT.</p>
  <ul>
    <li>On a 10+ the the spell is successfully cast and you may cast the spell again later.</li>
    <li>On a 7-9 the spell is cast, but choose one:
      <ul>
        <li>You draw unwelcome attention or put yourself in a spot. The GM will tell you how.</li>
        <li>The spell disturbs the fabric of reality as it is cast; take -1 ongoing to cast a spell until the next time
          you Prepare Spells.
        </li>
        <li>After it is cast, the spell is forgotten. You cannot cast the spell again until you prepare spells.</li>
      </ul>
    </li>
  </ul>
  <p>Note that maintaining spells with ongoing effects will sometimes cause a penalty to your roll to cast a spell.</p>
</Move>

<Move name="Prepare Spells">
  <p>When you <strong>spend uninterrupted time (an hour or so) in quiet contemplation of your spellbook</strong>, you:
  </p>
  <ul>
    <li>Lose any spells you already prepared.</li>
    <li>Prepare new spells chosen from your spellbook whose total levels don’t exceed your own level +1.</li>
    <li>Prepare your cantrips which never count against your limit.</li>
  </ul>
</Move>

<Move name="Spellbook">
  <p>You have mastered several spells and inscribed them in your spellbook. You start out with three first level spells,
    as well as all your cantrips. Whenever you gain a level, you inscribe a new spell of your level or lower. Your
    spellbook is 1 weight.</p>
</Move>

<Move name="Spell Defense">
  <p>You may end any ongoing spell immediately and use the energy of its dissipation to deflect an oncoming attack. The
    spell ends and you subtract its level from the damage done to you.</p>
</Move>

<Move name="Ritual">
  <p>When you <strong>draw on a place of power to create a magical effect</strong>, tell the GM what you’re trying to
    achieve. Ritual effects are always possible, but the GM will give you one to four of the following conditions:</p>
  <ul>
    <li>It’s going to take days/weeks/months</li>
    <li>First you must ____</li>
    <li>You’ll need help from ____</li>
    <li>It will require a lot of money</li>
    <li>The best you can do is a lesser version, unreliable and limited</li>
    <li>You and your allies will risk danger from ____</li>
    <li>You’ll have to disenchant ____ to do it</li>
  </ul>
</Move>

<Move name="Prodigy" requiresLevel="2">
  <p>Choose a spell. You prepare that spell as if it were one level lower.</p>
</Move>

<Move name="Empowered Magic" requiresLevel="2">
  <p>When you <strong>cast a spell</strong>, on a 10+ you have the option of choosing from the 7-9 list. If you do, you
    may additionally choose one of the following effects:</p>
  <ul>
    <li>The spell’s effects are maximized</li>
    <li>The spell’s targets are doubled</li>
  </ul>
</Move>

<Move name="Fount Of Knowledge" requiresLevel="2">
  <p>When you <strong>Spout Lore about something no one else has any clue about</strong>, take +1.</p>
</Move>

<Move name="Know-It-All" requiresLevel="2">
  <p>When another player’s character comes to you for advice and you <strong>tell them what you think is best</strong>,
    they get +1 forward when following your advice and you mark experience if they do.</p>
</Move>

<Move name="Expanded Spellbook" requiresLevel="2">
  <p>Add a new spell from the spell list of any class to your spellbook.</p>
</Move>

<Move name="Enchanter" requiresLevel="2">
  <p>When you <strong>have time and safety with a magic</strong> item you may ask the GM what it does. The GM will
    answer truthfully.</p>
</Move>

<Move name="Logical" requiresLevel="2">
  <p>When you <strong>use strict deduction to analyse your surroundings</strong>, you can <em>Discern Realities</em>
    with INT instead of WIS.</p>
</Move>

<Move name="Arcane Ward" requiresLevel="2">
  <p>As long as you have at least one prepared spell of first level or higher, you have +2 armor.</p>
</Move>

<Move name="Counterspell" requiresLevel="2">
  <p>When you attempt to <strong>counter an arcane spell</strong> that will otherwise affect you, stake one of your
    prepared spells on the defense and roll+INT.</p>
  <ul>
    <li>On a 10+, the spell is countered and has no effect on you.</li>
    <li>On a 7-9, the spell is countered and you forget the spell that you staked.</li>
  </ul>
  <p>Your counterspell protects you alone; if the countered spell has other targets they are affected as normal.</p>
</Move>

<Move name="Quick Study" requiresLevel="2">
  <p>When you <strong>see the effects of an arcane spell</strong>, ask the GM the name of the spell and its effects. You
    take +1 when acting on the answers.</p>
</Move>

<Move name="Master" requiresLevel="6" requiresMove="Prodigy">
  <p>Choose one spell in addition to the one you picked for Prodigy. You prepare that spell as if it were one level
    lower.</p>
</Move>

<Move name="Greater Empowered Magic" requiresLevel="6" replacesMove="Empowered Magic">
  <p>When you <strong>cast a spell</strong>, on a 10-11 you have the option of choosing from the 7-9 list. If you do,
    you may additionally choose one of the following effects. On a 12+ you get to choose one of these effects for free:
  </p>
  <ul>
    <li>The spell’s effects are maximized</li>
    <li>The spell’s targets are doubled</li>
  </ul>
</Move>

<Move name="Enchanter’s Soul" requiresLevel="6" requiresMove="Enchanter">
  <p>When you <strong>have time and safety with a magic item in a place of power</strong> you can empower that item so
    that the next time you use it its effects are amplified, the GM will tell you exactly how.</p>
</Move>

<Move name="Highly Logical" requiresLevel="6" replacesMove="Logical">
  <p>When you <strong>use strict deduction to analyse your surroundings</strong>, you can <em>Discern Realities</em>
    with INT instead of WIS. On a 12+ you get to ask the GM any three questions, not limited by the list.</p>
</Move>

<Move name="Mystical Puppet Strings" requiresLevel="6">
  <p>When you <strong>use magic to control a person’s actions</strong>, they have no memory of what you had them do and
    bear you no ill will.</p>
</Move>

<Move name="Arcane Armor" requiresLevel="6" replacesMove="Arcane Ward">
  <p>As long as you have at least one prepared spell of first level or higher, you have +4 armor.</p>
</Move>

<Move name="Protective Counter" requiresLevel="6" requiresMove="Counterspell">
  <p>When <strong>an ally within sight of you is affected by an arcane spell</strong>, you can counter it as if it
    affected you. If the spell affects multiple allies you must counter for each ally separately.</p>
</Move>

<Move name="Ethereal Tether" requiresLevel="6">
  <p>When you <strong>have time with a willing or helpless subject</strong> you can craft an ethereal tether with them.
    You perceive what they do and can discern realities about them or their surroundings, no matter the distance.
    Someone willingly tethered to you can communicate with you over the tether as if you were in the room with them.</p>
</Move>

<Move name="Spell Augmentation" requiresLevel="6">
  <p>When you <strong>deal damage to a creature</strong>, you can shunt a spell’s energy into them—end one of your
    ongoing spells and add the spell’s level to the damage dealt.</p>
</Move>

<Move name="Self-Powered" requiresLevel="6">
  <p>When you <strong>have time, arcane materials, and a safe space</strong>, you can create your own place of power.
    Describe to the GM what kind of power it is and how you’re binding it to this place, the GM will tell you one kind
    of creature that will have an interest in this.</p>
</Move>
