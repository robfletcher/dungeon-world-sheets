<script>
  import Move from "../Move.svelte";
  import MoveOption from "../MoveOption.svelte";
</script>

<Move name="Trap Expert">
  <p>When you <strong>spend a moment to survey a dangerous area</strong>, roll+DEX.</p>
  <ul>
    <li>On a 10+, hold 3.</li>
    <li>On a 7–9, hold 1.</li>
  </ul>
  <p>Spend your hold as you walk through the area to ask these questions:</p>
  <ul>
    <li>Is there a trap here and if so, what activates it?</li>
    <li>What does the trap do when activated?</li>
    <li>What else is hidden here?</li>
  </ul>
</Move>

<Move name="Tricks Of The Trade">
  <p>When you <strong>pick locks or pockets or disable traps</strong>, roll+DEX.</p>
  <ul>
    <li>On a 10+, you do it, no problem.</li>
    <li>On a 7–9, you still do it, but the GM will offer you two options between suspicion, danger, or cost.</li>
  </ul>
</Move>

<Move name="Backstab">
  <p>When you <strong>attack a surprised or defenseless enemy with a melee weapon</strong>, you can choose to deal your
    damage or roll+DEX.</p>
  <ul>
    <li>On a 10+, choose two.</li>
    <li>On a 7–9, choose one:</li>
  </ul>
  <ul>
    <li>You don't get into melee with them</li>
    <li>You deal your damage+1d6</li>
    <li>You create an advantage, +1 forward to you or an ally acting on it</li>
    <li>Reduce their armor by 1 until they repair it</li>
  </ul>
</Move>

<Move name="Flexible Morals">
  <p>When <strong>someone tries to detect your alignment</strong> you can tell them any alignment you like.</p>
</Move>

<Move name="Poisoner">
  <p>You've mastered the care and use of a poison. Choose a poison from the list below; that poison is no longer
    dangerous for you to use. You also start with three uses of the poison you choose. Whenever you have time to gather
    materials and a safe place to brew you can make three uses of the poison you choose for free. Note that some poisons
    are applied, meaning you have to carefully apply it to the target or something they eat or drink. Touch poisons just
    need to touch the target, they can even be used on the blade of a weapon.</p>
  <fieldset>
    <MoveOption value="Oil of Tagit">
      <strong>Oil of Tagit:</strong> (<em>applied</em>) The target falls into a light sleep.
    </MoveOption>
    <MoveOption value="Bloodweed">
      <strong>Bloodweed:</strong> (<em>touch</em>) The target deals -1d4 damage ongoing until cured.
    </MoveOption>
    <MoveOption value="Goldenroot">
      <strong>Goldenroot:</strong> (<em>applied</em>) The target treats the next creature they see as a trusted ally,
      until proved otherwise.
    </MoveOption>
    <MoveOption value="Serpent's Tears">
      <strong>Serpent's Tears:</strong> (<em>touch</em>) Anyone dealing damage to the target rolls twice and takes the
      better result.
    </MoveOption>
  </fieldset>
</Move>

<hr>

<Move name="Cheap Shot" requiresLevel="2">
  <p>When <strong>using a precise or hand weapon</strong>, your <em>Backstab</em> deals an extra +1d6 damage.</p>
</Move>

<Move name="Cautious" requiresLevel="2">
  <p>When you <strong>use Trap Expert</strong> you always get +1 hold, even on a 6-.</p>
</Move>

<Move name="Wealth And Taste" requiresLevel="2">
  <p>When you <strong>make a show of flashing around your most valuable possession</strong>, choose someone present.
    They will do anything they can to obtain your item or one like it.</p>
</Move>

<Move name="Shoot First" requiresLevel="2">
  <p>You're never caught by surprise. When an enemy would get the drop on you, you get to act first instead.</p>
</Move>

<Move name="Underdog" requiresLevel="2">
  <p>When you're outnumbered, you have +1 armor.</p>
</Move>

<Move name="Poison Master" requiresLevel="2">
  <p>After you've <strong>used a poison once</strong> it's no longer dangerous for you to use.</p>
</Move>

<Move name="Envenom" requiresLevel="2">
  <p>You can apply even complex poisons with a pinprick. When you <strong>apply a poison</strong> that's not dangerous
    for you to use to your weapon it's touch instead of applied.</p>
</Move>

<Move name="Brewer" requiresLevel="2">
  <p>When you <strong>have time to gather materials and a safe place to brew</strong> you can create three doses of any
    one poison you've used before.</p>
</Move>

<Move name="Connections" requiresLevel="2">
  <p>When you <strong>put out word to the criminal underbelly about something you want or need</strong>, roll+CHA.</p>
  <ul>
    <li>On a 10+, someone has it, just for you.</li>
    <li>On a 7–9, you'll have to settle for something close or it comes with strings attached, your call.</li>
  </ul>
</Move>

<hr>

<Move name="Dirty Fighter" requiresLevel="6" replacesMove="Cheap Shot">
  <p>When <strong>using a precise or hand weapon</strong>, your <em>Backstab</em> deals an extra +1d8 damage and all
    other attacks deal +1d4 damage.</p>
</Move>

<Move name="Extremely Cautious" requiresLevel="6" replacesMove="Cautious">
  <p>When you <strong>use Trap Expert</strong> you always get +1 hold, even on a 6-. On a 12+ you get 3 hold and the
    next time you come near a trap the GM will immediately tell you what it does, what triggers it, who set it, and how
    you can use it to your advantage.</p>
</Move>

<Move name="Serious Underdog" requiresLevel="6" replacesMove="Underdog">
  <p>You have +1 armor. When you’re outnumbered, you have +2 armor instead.</p>
</Move>

<Move name="Evasion" requiresLevel="6">
  <p>When you <strong>Defy Danger on a 12+</strong>, you transcend the danger. You not only do what you set out to, but
    the GM will offer you a better outcome, true beauty, or a moment of grace.</p>
</Move>

<Move name="Heist" requiresLevel="6">
  <p>When you <strong>take time to make a plan to steal something</strong>, name the thing you want to steal and ask the
    GM these
    questions. When acting on the answers you and your allies take +1 forward.</p>
  <ul>
    <li>Who will notice it’s missing?</li>
    <li>What’s its most powerful defense?</li>
    <li>Who will come after it?</li>
    <li>Who else wants it?</li>
  </ul>
</Move>

<Move name="Alchemist" requiresLevel="6" replacesMove="Brewer">
  <p>When you <strong>have time to gather materials and a safe place to brew</strong> you can create three doses of any
    poison you’ve
    used before. Alternately you can describe the effects of a poison you’d like to create. The GM will tell you that
    you can create it, but with one or more caveats:</p>
  <ul>
    <li>It will only work under specific circumstances.</li>
    <li>The best you can manage is a weaker version.</li>
    <li>It’ll take a while to take effect.</li>
    <li>It’ll have obvious side effects.</li>
  </ul>
</Move>

<Move name="Escape Route" requiresLevel="6">
  <p>When you’re <strong>in too deep and need a way out</strong>, name your escape route and roll+DEX.</p>
  <ul>
    <li>On a 10+ you’re gone.</li>
    <li>On a 7–9 you can stay or go, but if you go it costs you: leave something behind or take something with you, the
      GM will tell you what.
    </li>
  </ul>
</Move>

<Move name="Disguise" requiresLevel="6">
  <p>When you <strong>have time and materials</strong> you can create a disguise that will fool anyone into thinking
    you’re another creature of about the same size and shape. Your actions can give you away but your appearance won’t
  </p>
</Move>

<Move name="Strong Arm, True Aim" requiresLevel="6">
  <p>You can throw any melee weapon, using it to volley. A thrown melee weapon is gone; you can never choose to reduce
    ammo on a 7–9.</p>
</Move>
