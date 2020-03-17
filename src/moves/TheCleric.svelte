<script>
  import Move from "../Move.svelte";
  import MoveOption from "../MoveOption.svelte";
</script>

<Move name="Deity">
  <p>
    You serve and worship some deity or power which grants you spells. Give your god a name and choose your deity’s
    domain:
  </p>
  <fieldset>
    <MoveOption value="Healing and Restoration"/>
    <MoveOption value="Bloody Conquest"/>
    <MoveOption value="Civilization"/>
    <MoveOption value="Knowledge and Hidden Things"/>
    <MoveOption value="The Downtrodden and Forgotten"/>
    <MoveOption value="What Lies Beneath"/>
  </fieldset>
  <p>Choose one precept of your religion:</p>
  <fieldset>
    <MoveOption value="suffering">
      It preaches the sanctity of suffering, add <strong>Petition: Suffering</strong>
    </MoveOption>
    <MoveOption value="secrets">
      It’s cultish and insular, add <strong>Petition: Gaining Secrets</strong>
    </MoveOption>
    <MoveOption value="offering">
      It observes important sacrificial rites, add <strong>Petition: Offering</strong>
    </MoveOption>
    <MoveOption value="combat">
      It believes in trial by combat, add <strong>Petition: Personal Victory</strong>
    </MoveOption>
  </fieldset>
</Move>

<Move name="Divine Guidance">
  <p>
    When you <strong>petition your deity according to the precept of your religion</strong>, you are granted some useful
    knowledge or boon related to your deity’s domain. The GM will tell you what.
  </p>
</Move>

<Move name="Cast A Spell (WIS)">
  <p>
    When you <strong>unleash a spell granted by your deity</strong>, roll+WIS.</p>
  <ul>
    <li>
      On a 10+ the the spell is successfully cast and your deity does not revoke the spell, so you may cast it
      again.
    </li>
    <li>On a 7-9 the spell is cast, but choose one:
      <ul>
        <li>You draw unwelcome attention or put yourself in a spot. The GM will tell you how.</li>
        <li>
          Your casting distances you from your deity; take -1 ongoing to cast a spell until the next time you commune.
        </li>
        <li>
          After it is cast, the spell is revoked by your deity. You cannot cast the spell again until you commune and
          have it granted to you.
        </li>
      </ul>
    </li>
  </ul>
  <p>Note that maintaining spells with ongoing effects will sometimes cause a penalty to your roll to cast a spell.</p>
</Move>

<Move name="Commune">
  <p>When you spend uninterrupted time (an hour or so) in quiet contemplation with your deity, you:</p>
  <ul>
    <li>Lose any spells already granted to you</li>
    <li>
      Are granted new spells of your choice whose total levels don’t exceed your own level +1, and none of which is a
      higher level than your own level
    </li>
    <li>Prepare all of your rotes, which never count against your limit</li>
  </ul>
</Move>

<Move name="Turn Undead">
  <p>When you <strong>hold your holy symbol aloft and call on your deity for protection</strong>, roll+Wis.</p>
  <ul>
    <li>
      On a 7+, so long as you continue to pray and brandish your holy symbol, no undead may come within reach of you.
    </li>
    <li>On a 10+, you also momentarily daze intelligent undead and cause mindless undead to flee.</li>
  </ul>
  <p>Aggression breaks the effects and they are able to act as normal.</p>
</Move>

<hr>

<Move name="Chosen One" requiresLevel="2">
  <p>Choose one spell. You are granted that spell as if it was one level lower.</p>
</Move>

<Move name="Invigorate" requiresLevel="2">
  <p>When you <strong>heal someone</strong> they take +2 forward to their damage.</p>
</Move>

<Move name="The Scales Of Life And Death" requiresLevel="2">
  <p>When <strong>someone takes their last breath</strong> in your presence, they take +1 to the roll.</p>
</Move>

<Move name="Serenity" requiresLevel="2">
  <p>When you <strong>cast a spell</strong> you ignore the first -1 penalty from ongoing spells.</p>
</Move>

<Move name="First Aid" requiresLevel="2">
  <p><em>Cure Light Wounds</em> is a rote for you, and therefore doesn't count against your limit of granted spells.</p>
</Move>

<Move name="Empower" requiresLevel="2">
  <p>When you <strong>cast a spell</strong>, on a 10+ you have the option of choosing from the 7–9 list. If you do, you
    may choose one of these effects as well:</p>
  <ul>
    <li>The spell’s effects are doubled</li>
    <li>The spell’s targets are doubled</li>
  </ul>
</Move>

<Move name="Divine Intervention" requiresLevel="2">
  <p>
    When you <strong>Commune</strong> you get 1 hold and lose any hold you already had. Spend that hold when you or an
    ally takes damage to call on your deity, they intervene with an appropriate manifestation (a sudden gust of wind, a
    lucky slip, a burst of light) and negate the damage.
  </p>
</Move>

<Move name="Penitent" requiresLevel="2">
  <p>
    When you <strong>take damage</strong> and embrace the pain, you may take +1d4 damage (ignoring armor). If you do,
    take +1 forward to cast a spell.
  </p>
</Move>

<Move name="Orison For Guidance" requiresLevel="2">
  <p>
    When you <strong>sacrifice something of value</strong> to your deity and pray for guidance, your deity tells you
    what it would have you do. If you do it, mark experience.
  </p>
</Move>

<Move name="Divine Protection" requiresLevel="2">
  <p>When you <strong>wear no armor</strong> or shield you get 2 armor.</p>
</Move>

<Move name="Devoted Healer" requiresLevel="2">
  <p>When you <strong>heal someone else</strong> of damage, add your level to the amount of damage healed.</p>
</Move>

<hr>

<Move name="Anointed" requiresLevel="6" requiresMove="Chosen One">
  <p>Choose one spell in addition to the one you picked for <em>Chosen One</em>. You are granted that spell as if it was
    one level lower.</p>
</Move>

<Move name="Apotheosis" requiresLevel="6">
  <p>
    The first time you <strong>spend time in prayer</strong> as appropriate to your god after taking this move, choose a
    feature associated with your deity (rending claws, wings of sapphire feathers, an all-seeing third eye, etc.). When
    you emerge from prayer, you permanently gain that physical feature.
  </p>
</Move>

<Move name="Reaper" requiresLevel="6">
  <p>
    When you take time after a conflict to dedicate your victory to your deity and deal with the dead, take +1 forward.
  </p>
</Move>

<Move name="Providence" requiresLevel="6" replacesMove="Serenity">
  <p>
    You ignore the -1 penalty from up to two spells you maintain. If you maintain more than two you take normal
    penalties.
  </p>
</Move>

<Move name="Divine Invincibility" requiresLevel="6" replacesMove="Divine Intervention">
  <p>
    When you <strong>Commune</strong> you gain 2 hold and lose any hold you already had. Spend that hold when you or an
    ally takes damage to call on your deity, who intervenes with an appropriate manifestation (a sudden gust of wind, a
    lucky slip, a burst of light) and negates the damage.
  </p>
</Move>

<Move name="Martyr" requiresLevel="6" replacesMove="Penitent">
  <p>
    When you <strong>take damage</strong> and embrace the pain, you may take +1d4 damage (ignoring armor). If you do,
    take +1 forward to cast a spell and add your level to any damage done or healed by the spell.
  </p>
</Move>

<Move name="Divine Armor" requiresLevel="6" replacesMove="Divine Protection">
  <p>When you <strong>wear no armor</strong> or shield you get 3 armor.</p>
</Move>

<Move name="Greater Empower" requiresLevel="6" replacesMove="Empower">
  <p>
    When you <strong>cast a spell</strong>, on a 10-11 you have the option of choosing from the 7–9 list. If you do, you
    may choose one of these effects as well. On a 12+ you get to choose one of these effects for free.
  </p>
  <ul>
    <li>The spell’s effects are doubled</li>
    <li>The spell’s targets are doubled</li>
  </ul>
</Move>

<Move name="Greater First Aid" requiresLevel="6" requiresMove="First Aid">
  <p>
    <em>Cure Moderate Wounds</em> is a rote for you, and therefore doesn't count against your limit of granted spells.
  </p>
</Move>

<Move>
  <p>Multiclass Dabbler
    Get one move from another class. Treat your level as one lower for choosing the move.</p>
</Move>