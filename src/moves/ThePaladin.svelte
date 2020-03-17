<script>
  import Move from "../Move.svelte";
</script>

<Move name="Quest">
  <p>When you <strong>dedicate yourself to a mission</strong> through prayer and ritual cleansing, state what you set
    out to do:</p>
  <ul>
    <li>Slay ____, a great blight on the land.</li>
    <li>Defend ____ from the iniquities that beset them.</li>
    <li>Discover the truth of ____.</li>
  </ul>
  <p>Then choose up to two boons:</p>
  <ul>
    <li>An unwavering sense of direction to ____.</li>
    <li>Invulnerability to ____ (edged weapons, fire, enchantment, etc.)</li>
    <li>A mark of divine authority.</li>
    <li>Senses that pierce lies.</li>
    <li>A voice that transcends language.</li>
    <li>Freedom from hunger, thirst, and sleep.</li>
  </ul>
  <p>The GM will then tell you what vow or vows is required of you to maintain your blessing:</p>
  <ul>
    <li><strong>Honor</strong> (forbidden: cowardly tactics and tricks)</li>
    <li><strong>Temperance</strong> (forbidden: gluttony in food, drink, and pleasure of the flesh)</li>
    <li><strong>Piety</strong> (required: observance of daily holy services)</li>
    <li><strong>Valor</strong> (forbidden: suffering an evil creature to live)</li>
    <li><strong>Truth</strong> (forbidden: lies)</li>
    <li><strong>Hospitality</strong> (required: comfort to those in need, no matter who they are)</li>
  </ul>
</Move>

<Move name="Lay On Hands">
  <p>When you <strong>touch someone</strong>, skin to skin, and pray for their well-being, roll+CHA.</p>
  <ul>
    <li>On a 10+ you heal 1d8 damage or remove one disease.</li>
    <li>On a 7–9, they are healed, but the damage or disease is transferred to you.</li>
  </ul>
</Move>

<Move name="I Am The Law">
  <p>When you <strong>give an NPC an order based on your divine authority</strong>, roll+CHA.</p>
  <ul>
    <li>On a 7+, they choose one:
      <ul>
        <li>Do what you say.</li>
        <li>Back away cautiously, then flee.</li>
        <li>Attack you.</li>
      </ul>
    </li>
    <li>On a 10+, you also take +1 forward against them.</li>
    <li>On a miss, they do as they please and you take -1 forward against them.</li>
  </ul>
</Move>

<Move name="Armored">
  <p>You ignore the clumsy tag on armor you wear.</p>
</Move>

<hr>

<Move name="Divine Favor" requiresLevel="2">
  <p>
    Dedicate yourself to a deity (name a new one or choose one that’s already been established). You gain the commune
    and cast a spell cleric moves. When you select this move, treat yourself as a cleric of level 1 for using spells.
    Every time you gain a level thereafter, increase your effective cleric level by 1.
  </p>
</Move>

<Move name="Bloody Aegis" requiresLevel="2">
  <p>
    When you <strong>take damage</strong> you can grit your teeth and accept the blow. If you do you take no damage but
    instead suffer a debility of your choice. If you already have all six debilities you can’t use this move.
  </p>
</Move>

<Move name="Smite" requiresLevel="2">
  <p>While on a Quest you deal +1d4 damage.</p>
</Move>

<Move name="Holy Protection" requiresLevel="2">
  <p>You get +1 armor while on a Quest.</p>
</Move>

<Move name="Voice Of Authority" requiresLevel="2">
  <p>Take +1 to order hirelings.</p>
</Move>

<Move name="Hospitaller" requiresLevel="2">
  <p>When you <strong>heal an ally</strong>, you heal +1d8 damage.</p>
</Move>

<Move name="Exterminatus" requiresLevel="2">
  <p>
    When you <strong>speak aloud your promise to defeat an enemy</strong>, you deal +2d4 damage against that enemy and
    -4 damage against anyone else. This effect lasts until the enemy is defeated. If you fail to defeat the enemy or
    give up the fight, you can admit your failure, but the effect continues until you find a way to redeem yourself.
  </p>
</Move>

<Move name="Charge!" requiresLevel="2">
  <p>When you <strong>lead the charge into combat</strong>, those you lead take +1 forward.</p>
</Move>

<Move name="Staunch Defender" requiresLevel="2">
  <p>When you <strong>Defend</strong> you always get +1 hold, even on a 6-.</p>
</Move>

<Move name="Setup Strike" requiresLevel="2">
  <p>When you <strong>Hack & Slash</strong>, choose an ally. Their next attack against your target does +1d4 damage.</p>
</Move>

<hr>

<Move name="Evidence Of Faith" requiresLevel="6" requiresMove="Divine Favor">
  <p>When you <strong>see divine magic as it happens</strong>, you can ask the GM which deity granted the spell and its effects. Take +1 when acting on the answers.</p>
</Move>

<Move name="Holy Smite" requiresLevel="6" replacesMove="Smite">
  <p>While on a Quest you deal +1d8 damage.</p>
</Move>

<Move name="Ever Onward" requiresLevel="6" replacesMove="Charge!">
  <p>When you <strong>lead the charge into combat</strong>, those you lead take +1 forward and +2 armor forward.</p>
</Move>

<Move name="Impervious Defender" requiresLevel="6" replacesMove="Staunch Defender">
  <p>When you <strong>Defend</strong> you always get +1 hold, even on a 6-. When you get a 12+ to defend instead of getting hold the nearest attacking creature is stymied giving you a clear advantage, the GM will describe it.</p>
</Move>

<Move name="Perfect Knight" requiresLevel="6">
  <p>When you <strong>Quest</strong> you choose three boons instead of two.</p>
</Move>

<Move name="Tandem Strike" requiresLevel="6" replacesMove="Setup Strike">
  <p>When you <strong>Hack & Slash</strong>, choose an ally. Their next attack against your target does +1d4 damage and they take +1 forward against them.</p>
</Move>

<Move name="Divine Protection" requiresLevel="6" replacesMove="Holy Protection">
  <p>You get +2 armor while on a Quest.</p>
</Move>

<Move name="Divine Authority" requiresLevel="6" replacesMove="Voice Of Authority">
  <p>Take +1 to order hirelings. When you roll a 12+ the hireling transcends their moment of fear and doubt and carries out your order with particular effectiveness or efficiency.</p>
</Move>

<Move name="Perfect Hospitaller" requiresLevel="6" replacesMove="Hospitaller">
  <p>When you <strong>heal an ally</strong>, you heal +2d8 damage.</p>
</Move>

<Move name="Indomitable" requiresLevel="6">
  <p>When you <strong>suffer a debility</strong> (even through Bloody Aegis) take +1 forward against whatever caused it.</p>
</Move>
