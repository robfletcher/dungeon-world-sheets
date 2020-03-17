<script>
  import Move from "../Move.svelte";
  import MoveOption from "../MoveOption.svelte";
</script>

<Move name="Signature Weapon">
  <p>
    This is your weapon. There are many like it, but this one is yours. Your weapon is your best friend. It is your
    life. You master it as you master your life. Your weapon, without you, is useless. Without your weapon, you are
    useless. You must wield your weapon true.
  </p>
  <p><em>Choose a base description, all are 2 weight:</em></p>
  <fieldset>
    <MoveOption value="Sword"/>
    <MoveOption value="Axe"/>
    <MoveOption value="Hammer"/>
    <MoveOption value="Spear"/>
    <MoveOption value="Flail"/>
    <MoveOption value="Fists"/>
  </fieldset>
  <p><em>Choose a range that best fits your weapon:</em></p>
  <fieldset>
    <MoveOption value="hand"/>
    <MoveOption value="close"/>
    <MoveOption value="reach"/>
  </fieldset>
  <p><em>Choose two enhancements:</em></p>
  <fieldset>
    <MoveOption value="Hooks and spikes">Hooks and spikes. +1 damage, but +1 weight.</MoveOption>
    <MoveOption value="Sharp">Sharp. +2 piercing.</MoveOption>
    <MoveOption value="Perfectly weighted">Perfectly weighted. Add <em>precise</em>.</MoveOption>
    <MoveOption value="Serrated edges">Serrated edges. +1 damage.</MoveOption>
    <MoveOption value="Glows">Glows in the presence of one type of creature, your choice.</MoveOption>
    <MoveOption value="Huge">Huge. Add <em>messy</em> and <em>forceful</em>.</MoveOption>
    <MoveOption value="Versatile">Versatile. Choose an additional range.</MoveOption>
    <MoveOption value="Well-crafted">Well-crafted. -1 weight.</MoveOption>
  </fieldset>
  <p><em>Choose a look:</em></p>
  <fieldset>
    <MoveOption value="Ancient"/>
    <MoveOption value="Blood-stained"/>
    <MoveOption value="Unblemished"/>
    <MoveOption value="Sinister"/>
    <MoveOption value="Ornate"/>
  </fieldset>
</Move>

<Move name="Bend Bars, Lift Gates">
  <p>When you use pure strength to destroy an inanimate obstacle, roll+STR.</p>
  <ul>
    <li>On a 10+, choose 3.</li>
    <li>On a 7-9 choose 2.</li>
  </ul>
  <ul>
    <li>It doesn't take a very long time</li>
    <li>Nothing of value is damaged</li>
    <li>It doesn't make an inordinate amount of noise</li>
    <li>You can fix the thing again without a lot of effort</li>
  </ul>
</Move>

<Move name="Armored">
  <p>You ignore the <em>clumsy</em> tag on any armor you wear.</p>
</Move>

<hr>

<Move name="Merciless" requiresLevel="2">
  <p>When you <strong>deal damage</strong>, deal +1d4 damage.</p>
</Move>

<Move name="Heirloom" requiresLevel="2">
  <p>
    When you <strong>consult the spirits that reside within your signature weapon</strong>, they will give you an
    insight relating to the current situation, and might ask you some questions in return, roll+CHA.</p>
  <ul>
    <li>On a 10+, the GM will give you good detail.</li>
    <li>On a 7-9, the GM will give you an impression.</li>
  </ul>
</Move>

<Move name="Improved Weapon" requiresLevel="2">
  <p>Choose one extra enhancement for your signature weapon.</p>
</Move>

<Move name="Blacksmith" requiresLevel="2">
  <p>
    When you <strong>have access to a forge</strong> you can graft the magical powers of a weapon onto your signature
    weapon. This process destroys the magical weapon. Your signature weapon gains the magical powers of the destroyed
    weapon.
  </p>
</Move>

<Move name="Iron Hide" requiresLevel="2">
  <p>You gain +1 armor.</p>
</Move>

<Move name="Armor Mastery" requiresLevel="2">
  <p>
    When you <strong>make your armor take the brunt of damage</strong> dealt to you, the damage is negated but you must
    reduce the armor value of your armor or shield (your choice) by 1. The value is reduced each time you make this
    choice. If the reduction leaves the item with 0 armor it is destroyed.
  </p>
</Move>

<Move name="Seeing Red" requiresLevel="2">
  <p>When you <strong>Discern Realities during combat</strong>, you take +1.</p>
</Move>

<Move name="Interrogator" requiresLevel="2">
  <p>When you <strong>parley using threats of violence</strong> as leverage, you may use STR instead of CHA.</p>
</Move>

<Move name="Scent Of Blood" requiresLevel="2">
  <p>When you <strong>Hack & Slash</strong> an enemy, your next attack against that same foe deals +1d4 damage.</p>
</Move>

<Move name="Multiclass Dabbler" requiresLevel="2">
  <p>Get one move from another class. Treat your level as one lower for choosing the move.</p>
</Move>

<hr>

<Move name="Bloodthirsty" requiresLevel="6" replacesMove="Merciless">
  <p>When you <strong>deal damage</strong>, deal +1d8 damage.</p>
</Move>

<Move name="Through Death's Eyes" requiresLevel="6">
  <p>When you <strong>go into battle</strong>, roll+WIS.</p>
  <ul>
    <li>On a 10+, name someone who will live and someone who will die.</li>
    <li>
      On a 7-9, name someone who will live or someone who will die. Name NPCs, not player characters. The GM will make
      your vision come true, if it’s even remotely possible.
    </li>
    <li>On a 6- you see your own death and consequently take -1 ongoing throughout the battle.</li>
  </ul>
</Move>

<Move name="Eye For Weaponry" requiresLevel="6">
  <p>When you <strong>look over an enemy’s weaponry</strong>, ask the GM how much damage they do.</p>
</Move>

<Move name="Superior Warrior" requiresLevel="6">
  <p>
    When you <strong>Hack & Slash</strong>, on a 12+ you deal your damage, avoid their attack, and impress, dismay, or
    frighten your enemy.
  </p>
</Move>

<Move name="Steel Hide" requiresLevel="6" replacesMove="Iron Hide">
  <p>You gain +2 armor.</p>
</Move>

<Move name="Armored Perfection" requiresLevel="6" replacesMove="Armor Mastery">
  <p>
    When you choose to <strong>let your armor take the brunt of damage</strong> dealt to you, the damage is negated and
    you take +1 forward against the attacker, but you must reduce the armor value of your armor or shield (your choice)
    by 1. The value is reduced each time you make this choice. If the reduction leaves the item with 0 armor it is
    destroyed.
  </p>
</Move>

<Move name="Evil Eye" requiresLevel="6" requiresMove="Seeing Red">
  <p>When you <strong>enter combat</strong>, roll+CHA.</p>
  <ul>
    <li>On a 10+, hold 2.</li>
    <li>
      On a 7-9, hold 1. Spend your hold to make eye contact with an NPC present, who freezes or flinches and can’t act
      until you break it off.
    </li>
    <li>On a 6-, your enemies immediately identify you as their biggest threat.</li>
  </ul>
</Move>

<Move name="Taste Of Blood" requiresLevel="6" replacesMove="Scent Of Blood">
  <p>When you <strong>Hack & Slash</strong> an enemy, your next attack against that same foe deals +1d8 damage.</p>
</Move>

<Move name="Multiclass Initiate" requiresLevel="6">
  <p>Get a move from another class. Treat your level as one lower for choosing the move.</p>
</Move>