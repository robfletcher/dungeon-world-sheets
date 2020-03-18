<script>
  import Move from "../Move.svelte";
  import MoveOption from "../MoveOption.svelte";
</script>

<Move name="Hunt and Track">
  <p>When you <strong>follow a trail of clues left behind by passing creatures</strong>, roll+WIS.</p>
  <ul>
    <li>
      On a 7+, you follow the creature's trail until there's a significant change in its direction or mode of
      travel.
    </li>
    <li>On a 10+, you also choose 1:
      <ul>
        <li>Gain a useful bit of information about your quarry, the GM will tell you what.</li>
        <li>Determine what caused the trail to end.</li>
      </ul>
    </li>
  </ul>
</Move>

<Move name="Called Shot">
  <p>
    When you <strong>attack a defenseless or surprised enemy at range</strong>, you can choose to deal your damage or
    name your target and roll+DEX.
  </p>
  <ul>
    <li>
      <strong>Head</strong>
      <ul>
        <li>10+: As 7–9, plus your damage.</li>
        <li>7-9: They do nothing but stand and drool for a few moments.</li>
      </ul>
    </li>
    <li>
      <strong>Arms</strong>
      <ul>
        <li>10+: As 7-9, plus your damage.</li>
        <li>7-9: They drop anything they're holding.</li>
      </ul>
    </li>
    <li>
      <strong>Legs</strong>
      <ul>
        <li>10+: As 7-9, plus your damage.</li>
        <li>7-9: They're hobbled and slow moving.</li>
      </ul>
    </li>
  </ul>
</Move>

<Move name="Animal Companion">
  <p>
    You are accompanied by a beast of uncommon loyalty, with whom you have bonded deeply and communicate without
    words. Treat it as a follower with starting Loyalty +3. Choose its size (and base stats) plus a species or
    breed:
  </p>
  <fieldset>
    <MoveOption value="tiny"><em>tiny</em>: Quality +2, d4 damage, 3 HP, Load 0</MoveOption>
    <MoveOption value="small"><em>small</em>: Quality +1, d4 damage, 6 HP, Load 1</MoveOption>
    <MoveOption value="medium"><em>medium</em>: Quality +1, d6 damage, 9 HP, Load 2</MoveOption>
    <MoveOption value="large"><em>large</em>: Quality +1, d6 damage (<em>forceful</em>), 12 HP, Load 4</MoveOption>
  </fieldset>
  <p>Choose tags and/or moves based on its size: 6 if tiny or small, 4 if medium, 3 if large:</p>
  <h3>Tags:</h3>
  <fieldset class="inline-options">
    <MoveOption value="athletic"/>
    <MoveOption value="beautiful"/>
    <MoveOption value="cautious"/>
    <MoveOption value="cunning"/>
    <MoveOption value="hardy">hardy (+3 HP and +2 Load)</MoveOption>
    <MoveOption value="meek"/>
    <MoveOption value="organized"/>
    <MoveOption value="stealthy"/>
    <MoveOption value="vicious">vicious (+1 damage and messy)</MoveOption>
    <MoveOption value="warrior">warrior (increase damage die)</MoveOption>
    <MoveOption value="armor1">+1 armor</MoveOption>
    <MoveOption value="armor2">+1 armor per check.</MoveOption>
  </fieldset>
  <h3>Moves:</h3>
  <fieldset class="inline-options">
    <MoveOption value="deliver a message"/>
    <MoveOption value="drag down its prey"/>
    <MoveOption value="escape from a bind"/>
    <MoveOption value="fetch something"/>
    <MoveOption value="poison its prey"/>
    <MoveOption value="serve as a steed"/>
    <MoveOption value="stand watch"/>
    <MoveOption value="track by scent"/>
    <MoveOption value="threaten and intimidate"/>
    <MoveOption value="trample, break, and wreck stuff"/>
    <!--  TODO: custom option--></fieldset>
  <p>Choose an Instinct and a Cost (1 of each):</p>
  <h3>Instinct:</h3>
  <fieldset class="inline-options">to&hellip;
    <MoveOption value="challenge rivals"/>
    <MoveOption value="follow its stomach"/>
    <MoveOption value="freeze up"/>
    <MoveOption value="get distracted"/>
    <MoveOption value="give chase"/>
    <MoveOption value="make mischief"/>
    <MoveOption value="panic"/>
    <MoveOption value="run rampant"/>
    <MoveOption value="savage its prey"/>
    <MoveOption value="wander off"/>
  </fieldset>
  <h3>Cost:</h3>
  <fieldset class="inline-options">
    <MoveOption value="attention">attention (play, grooming, training)</MoveOption>
    <MoveOption value="freedom">freedom (time off on its own, free to roam)</MoveOption>
    <MoveOption value="comfort">comfort (cozy quarters, warmth, plenty of food)</MoveOption>
  </fieldset>
</Move>

<hr>

<Move name="Half-Elven" requiresLevel="2">
  <p><strong>You may take this move only if it is your first advancement.</strong></p>
  <p>
    Somewhere in your lineage lies mixed blood and it begins to show its presence. You gain the elf starting move if
    you took the human one at character creation or vice versa.
  </p>
</Move>

<hr>

<Move name="A Safe Place" requiresLevel="2">
  <p>
    When you <strong>choose and prepare the party's camp site</strong>, whomever the GM chooses to roll during the
    night takes +1 to their roll.
  </p>
</Move>

<Move name="Blot Out the Sun" requiresLevel="2">
  <p>
    When you <strong>Volley</strong> you may spend extra ammo before rolling. For each ammo spent, you may choose an
    extra target. Roll once and apply damage to all targets.
  </p>
</Move>

<Move name="Camouflage" requiresLevel="2">
  <p>When you <strong>keep still in natural surroundings</strong>, enemies never spot you until you make a movement.</p>
</Move>

<Move name="Familiar Prey" requiresLevel="2">
  <p>When you <strong>Spout Lore about a monster</strong> you use WIS instead of INT.</p>
</Move>

<Move name="Follow Me" requiresLevel="2">
  <p>
    When you <strong>scout ahead</strong>, choose 1 extra option from the list, even on a miss. When you navigate, you
    can use WIS instead of INT.
  </p>
</Move>

<Move name="God Amidst the Wastes" requiresLevel="2">
  <p>
    Dedicate yourself to a deity (name a new one or choose one that's already been established). You gain the <em>Commune</em>
    and<em>Cast A Spell</em> cleric moves. When you select this move, treat yourself as a cleric of level 1 for using
    spells. Every time you gain a level thereafter, increase your effective cleric level by 1.
  </p>
</Move>

<Move name="Improved Companion" requiresLevel="2">
  <p>
    Each time you take this move (up to twice), your animal companion gains 2 additional tags or moves of your
    choice.
  </p>
</Move>

<Move name="Improved Companion 2" requiresLevel="2" requiresMove="Improved Companion"/>

<Move name="Loyal to the End" requiresLevel="2">
  <p>
    When you <strong>allow your animal companion to take a blow that was meant for you</strong>, it takes the damage
    instead of you. If it is reduced to 0 hit points, it succeeds at its Last Breath as if it rolled a 10+.
  </p>
</Move>

<Move name="On the Hoof" requiresLevel="2">
  <p>
    When you <strong>travel through safe lands or undertake a perilous journey</strong>, you can also attempt to forage
    in addition to any other role you take. You can't trap or hunt while doing so, so at best you get 1d4 rations.
  </p>
</Move>

<Move name="Viper's Strike" requiresLevel="2">
  <p>
    When you <strong>strike an enemy with two weapons at once</strong>, add an extra 1d4 damage for your off-hand
    strike.
  </p>
</Move>

<Move name="Wild Empathy" requiresLevel="2">
  <p>You can speak with and understand animals.</p>
</Move>

<hr>

<Move name="A Safer Place" requiresLevel="6" replacesMove="A Safe Place">
  <p>When you <strong>choose and prepare the party's camp site</strong>, whomever the GM chooses to roll during the night adds your WIS to their roll.</p>
</Move>

<Move name="Beast of Legend" requiresLevel="6">
  <p>
    When you take this move, your animal companion begins to manifest supernatural, even mythic powers. It gains the
    <em>magical</em> tag and at least one move to reflect its new-found abilities. Work out the details with the GM.
  </p>
</Move>

<Move name="Constant Vigilance" requiresLevel="6">
  <p>You can always roll to stay sharp, even if you are asleep, distracted, or someone else is on watch. If someone else is on watch, you both roll Only the better result applies.</p>
</Move>

<Move name="Hunter's Prey" requiresLevel="6" replacesMove="Familiar Prey">
  <p>When you <strong>Spout Lore about a monster</strong> you use WIS instead of INT. On a 12+, in addition to the normal effects, you get to ask the GM any one question about the subject.</p>
</Move>

<Move name="Magnificent Specimen" requiresLevel="6">
  <p>Each time you take this move (up to twice), either increase your animal companion's Quality by +1 (max +3) or increase both its armor by +1 and its max HP by +4.</p>
</Move>

<Move name="Magnificent Specimen 2" requiresLevel="6" requiresMove="Magnificent Specimen"/>

<Move name="Observant" requiresLevel="6">
  <p>When you <strong>Hunt and Track</strong>, on a hit you may also ask one question about the creature you are tracking from the
    <em>Discern Realities</em> list for free.</p>
</Move>

<Move name="Smaug's Belly" requiresLevel="6">
  <p>When you <strong>know your target's weakest point</strong> your arrows have <em>2 piercing</em>.</p>
</Move>

<Move name="Special Trick" requiresLevel="6">
  <p>Choose a move from another class. So long as you are working with your animal companion you have access to that move.</p>
</Move>

<Move name="Strider" requiresLevel="6" requiresMove="Follow Me">
  <p>When you <strong>navigate</strong>, on a 12+ you reach your destination with time to spare. You can either press on to another spot of the GM's choosing (without having to navigate or scout ahead again) or give the party +1 forward to make camp and manage provisions.</p>
</Move>

<Move name="Viper's Fangs" requiresLevel="6" replacesMove="Viper's Strike">
  <p>When you <strong>strike an enemy with two weapons at once</strong>, add an extra 1d8 damage for your off-hand strike.</p>
</Move>

<Move name="Wild Speech" requiresLevel="6" replacesMove="Wild Empathy">
  <p>You can speak with and understand any non-magical, non-planar creature.</p>
</Move>
