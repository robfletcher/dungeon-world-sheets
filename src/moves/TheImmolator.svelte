<script>
  import {character} from "../store";
  import Move from "../Move.svelte";
</script>

{#if $character.playbook.name === "The Immolator"}
  <Move name="Burning Brand">
    <p>
      When you <strong>conjure a weapon of pure flame</strong>, roll+CON. On a 10+ choose two of the following tags, on
      a 7-9 choose one. You may treat your INT as your STR or DEX in regards to making attacks with this weapon. The
      weapon always begins with the <em>fiery</em>, <em>touch</em>, <em>dangerous</em>, and <em>3 uses</em> tags. Each
      attack with the weapon consumes one use.
    </p>
    <ul>
      <li><em>hand</em></li>
      <li><em>thrown</em>, <em>near</em></li>
      <li>+1 damage</li>
      <li>remove the <em>dangerous</em> tag</li>
    </ul>
  </Move>

  <Move name="Fighting Fire with Fire">
    <p>
      When you take damage, and that damage is odd (after armor) the flames within you come to your aid. Roll 1d4 and
      either add that many uses to your burning brand (if active), take that result forward to summon your burning
      brand, or reduce the damage by that amount, your choice.
    </p>
  </Move>

  <Move name="Give Me Fuel, Give Me Fire">
    <p>
      When you <strong>gaze intensely into someones eyes</strong>, you may ask their player “what fuels the
      flames of your desire?” they’ll answer with the truth, even if the character does not know or would otherwise keep
      this hidden.
    </p>
  </Move>

  <Move name="Zuko Style">
    <p>
      When you <strong>bend a flame to your will</strong>, roll+WIS. On a 10+ it does as you command, taking the shape
      and movement you desire for as long as it has fuel on which to burn. On a 7-9 the effect is short-lived, lasting
      only a moment.
    </p>
  </Move>

  <Move name="Hand Crafted">
    <p>
      You may use your hands in place of tools and fire to craft metal objects. Mundane weapons, armor and metal
      jewellery can all be formed from their raw components. You may unmake these things, as well, but to do so without
      time and safety might require that you Defy Danger first.
    </p>
  </Move>

  <Move name="Lore Of Flame">
    <p>
      When you <strong>stare into a source of fire</strong>, looking for answers, roll+WIS. On a hit, the GM will tell
      you something new and interesting about the current situation. On a 10+, the GM will give you good detail. On a
      7–9, the GM will give you an impression. If you already know all there is to know, the GM will tell you that.
    </p>
  </Move>
{/if}