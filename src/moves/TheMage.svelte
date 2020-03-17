<script>
  import Move from "../Move.svelte";
  import MoveTextInput from "../MoveTextInput.svelte";
</script>

<Move name="Arcane Learning">
  <p>
    You are a font of esoteric knowledge. When you <strong>Spout Lore or Discern Realities about something magical or
    otherwise arcane</strong>, on a 10+ the GM will also tell you a little-known secret about the subject.
  </p>
</Move>

<Move name="Cast A Spell (INT)">
  <p>
    When you <strong>weave a spell to help solve a problem</strong>, describe it and roll +INT. Spells cast this way can
    never deal damage directly.
  </p>
  <ul>
    <li>On a 10+, the spell certainly helps, but choose one.</li>
    <li>On a 7-9, the spell takes effect, but the choose two:
      <ul>
        <li>Your spell won't last long - you'll need to hurry to take advantage of it.</li>
        <li>Your spell affects either much more or much less than you wanted it to.</li>
        <li>Your spell has unforeseen side effects, and might draw unwanted attention.</li>
        <li>
          The casting saps your energy. You take -1 ongoing to INT until you have a few minutes to clear your head.
        </li>
      </ul>
    </li>
    <li>
      On a miss, something's gone horribly wrong. Your spell may well have worked, but you will regret casting it.
    </li>
  </ul>
</Move>

<Move name="Spell Focus">
  <p>
    Your magical studies are centered on a particular kind of magic, an aspect of the metaphysical world from which you
    take inspiration. When you first learn magic, select a Focus from the list, and record it below. There is more
    information on Spell Foci on the attached page.
  </p>
  <p>
    When you <strong>weave a spell that is Aligned to your Focus</strong>, your modifier to the roll can't be less than
    +1. When you<strong>weave a spell that is neither Aligned nor Opposed to your Focus</strong>, take -1 to the roll.
    You can never weave a spell if it is Opposed to your focus.
  </p>
  <fieldset>
    <MoveTextInput id="focus">Focus:</MoveTextInput>
    <MoveTextInput id="look">Look:</MoveTextInput>
    <MoveTextInput id="aligned">Aligned:</MoveTextInput>
    <MoveTextInput id="opposed">Opposed:</MoveTextInput>
  </fieldset>
</Move>

<Move name="Black Magic">
  <p>
    When you <strong>weave a spell to inflict pain</strong>, choose two tags and roll +INT. If you do not pick any Range
    tags, the Range defaults to Hand.</p>
  <ul>
    <li>On a hit, deal 1d8 damage.</li>
    <li>On a 7-9, also choose 1:
      <ul>
        <li>You draw unwanted attention or put someone in a spot.</li>
        <li>The GM removes a non-range tag of their choice, and you deal -1 damage.</li>
        <li>The casting saps your energy. You take -1 ongoing to INT until you have a few minutes to clear your head.
        </li>
      </ul>
    </li>
  </ul>
  <p>
    <em><strong>Tags:</strong> Reach, Near, Debilitating (-1 damage), Elemental (choose 1), Forceful, Piercing 1,
      Subtle, Two Targets (-1 damage)</em>
  </p>
</Move>

<Move name="Counterspell">
  <p>When you <strong>counter a magical spell as it is cast</strong>, roll +INT.</p>
  <ul>
    <li>On a 10+, choose 2.</li>
    <li>On a 7-9, choose 1:</li>
  </ul>
  <ul>
    <li>The spell deals no damage.</li>
    <li>The spell's effects are superficial and temporary.</li>
    <li>You take +1 forward against the caster.</li>
    <li>
      Use <em>Black Magic</em> against the caster immediately, even if you don't have the move. You don't need to
      specify a <em>Range</em> tag.
    </li>
  </ul>
</Move>

<hr>

<Move name="Arcane Ward" requiresLevel="2">
  <p>You have +2 Armor against magical attacks, and nearby allies have +1 Armor against magical attacks.</p>
</Move>

<Move name="Battle Mage" requiresLevel="2">
  <p>
    Add the following tags to the <em>Black Magic</em> list: <em>Close</em>, <em>Area (-2 damage)</em>, <em>Messy (+1d4
    damage)</em>, <em>Piercing 2</em>. In addition, selecting a Range tag for your Black Magic does not count as one of
    your two tag choices.
  </p>
</Move>

<Move name="Enchanter" requiresLevel="2">
  <p>
    When you <strong>have time and safety with an item in a place of power</strong>, you may weave a spell to imbue it
    with magical
    power. Describe what kind of magic you want to imbue the item with, then roll +INT.
  </p>
  <ul>
    <li>On a 10+, choose two.</li>
    <li>On a 7-9, choose one.</li>
    <li>
      On a miss, the item you made is cursed. The GM will let you know the nature of the curse, but only after it is too
      late.
    </li>
  </ul>
  <ul>
    <li>The enchantment is permanent.</li>
    <li>The enchantment has no unknown side effects.</li>
    <li>The enchantment does not have a weird limitation.</li>
  </ul>
</Move>

<Move name="Impressive Counterspell" requiresLevel="2" requiresMove="Counterspell">
  <p>When you <strong>use Counterspell and roll a 12+</strong>, choose 3 options.</p>
</Move>

<Move name="Know-It-All" requiresLevel="2">
  <p>
    When <strong>another player’s character comes to you for advice and you tell them what you think is best</strong>,
    they get +1 forward when following your advice and you mark experience if they do.
  </p>
</Move>

<Move name="Logical" requiresLevel="2">
  <p>
    When you <strong>use strict deduction to analyze your surroundings</strong>, you can Discern Realities with INT
    instead of WIS.
  </p>
</Move>

<Move name="Multiclass Dabbler" requiresLevel="2">
  <p>Gain one move from another class. Treat your level as one lower for choosing the move.</p>
</Move>

<Move name="Prodigy" requiresLevel="2">
  <p>
    Select a Focus other than the one you have, and add one of its <em>Aligned</em> elements and one of
    its<em>Opposed</em> elements to your list of <em>Aligned</em> and <em>Opposed</em> elements. You cannot select an
    element that contradicts your existing<em>Aligned</em> and<em>Opposed</em> elements.
  </p>
</Move>

<Move name="Ritual" requiresLevel="2">
  <p>
    When you <strong>draw on a place of power to create a magical effect</strong>, tell the GM what you’re trying to
    achieve. Ritual effects are always possible, but the GM will give you one to four of the following conditions:
  </p>
  <ul>
    <li>It’s going to take days/weeks/months</li>
    <li>First you must ____</li>
    <li>The result will be a lesser version, unreliable or limited</li>
    <li>It will need help from ____</li>
    <li>It will require a lot of money</li>
    <li>You’ll have to disenchant ____ to do it</li>
    <li>You and your allies will risk danger from ____</li>
  </ul>
</Move>

<Move name="Spellweaver" requiresLevel="2">
  <p>
    When you <strong>roll a 12+ on Cast a Spell</strong>, your spell defies expectations, helping above and beyond what
    you intended. Choose nothing from the list.
  </p>
</Move>

<hr>

<Move name="Arcane Armor" requiresLevel="6" replacesMove="Arcane Ward">
  <p>You have +4 Armor against magical attacks, and nearby allies have +2 Armor against magical attacks.</p>
</Move>

<Move name="Archmage" requiresLevel="6" requiresMove="Prodigy">
  <p>
    Select a Focus other than the one you have or the one you selected for Prodigy, and add one of its <em>Aligned</em>
    elements and one of its <em>Opposed</em> elements to your list of <em>Aligned</em> and <em>Opposed</em> elements.
    You cannot select an element that contradicts your existing <em>Aligned</em> and <em>Opposed</em> elements.
  </p>
</Move>

<Move name="Beyond Limitation" requiresLevel="6">
  <p>Select one of your <em>Opposed</em> elements and remove it.</p>
</Move>

<Move name="Enchanter's Soul" requiresLevel="6" requiresMove="Enchanter">
  <p>
    When you <strong>have time and safety with a magic item in a place of power</strong>, you can empower that item so
    that the next time you use it, its effects are amplified. The GM will tell you exactly how.
  </p>
</Move>

<Move name="Highly Logical" requiresLevel="6" replacesMove="Logical">
  <p>
    When you <strong>use strict deduction to analyze your surroundings</strong>, you can Discern Realities with +INT
    instead of +WIS. On a 12+, you get to ask the GM any three questions, not limited by the list.
  </p>
</Move>

<Move name="Perfect Counterspell" requiresLevel="6" requiresMove="Counterspell">
  <p>Add the following to your list of Counterspell options:</p>
  <ul>
    <li>The enemy's spell affects its caster at full strength.</li>
  </ul>
</Move>

<Move name="Reflexive Counterspell" requiresLevel="6" requiresMove="Counterspell">
  <p>When you <strong>use Counterspell</strong>, choose one additional option, even on a 6-.</p>
</Move>

<Move name="Ritual Master" requiresLevel="6" requiresMove="Ritual">
  <p>
    When <strong>the GM tells you the requirements you need to perform a Ritual</strong>, you can veto one of those
    requirements.
  </p>
</Move>

<Move name="Spell Mastery" requiresLevel="6" requiresMove="Spellweaver">
  <p>
    When you <strong>roll a 10+ on Cast a Spell</strong>, you do not need to select any options from the list. On a 7-9,
    choose only one option from the list.
  </p>
</Move>

<Move name="War Mage" requiresLevel="6" requiresMove="Battle Mage">
  <p>
    Add the following tags to the Black Magic list: <em>Far</em>, <em>Messy (+1d8 damage)</em>, <em>Piercing 3</em>,
    <em>Three Targets (-2 damage)</em>. In addition, you choose three tags instead of two.
  </p>
</Move>
