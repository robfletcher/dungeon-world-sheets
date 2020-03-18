<script>
  import Move from "../Move.svelte";
  import MoveOption from "../MoveOption.svelte";
</script>

<Move name="Full Plate And Packing Steel">
  <p>You ignore the clumsy tag on armor you wear.</p>
</Move>

<Move name="Unencumbered, Unharmed">
  <p>So long as you are below your Load and neither wear armor nor carry a shield, take +1 armor.</p>
</Move>

<Move name="The Upper Hand">
  <p>
    You take +1 ongoing to last breath rolls. When you <strong>take your last breath</strong>, on a 7–9 you make an
    offer to Death in return for your life. If Death accepts he will return you to life. If not, you die.
  </p>
</Move>

<Move name="What Are You Waiting For?">
  <p>When you <strong>cry out a challenge to your enemies</strong>, roll+Con.</p>
  <ul>
    <li>On a 10+ they treat you as the most obvious threat to be dealt with and ignore your companions, take +2 damage
      ongoing against them.
    </li>
    <li>On a 7–9 only a few (the weakest or most foolhardy among them) fall prey to your taunting.
    </li>
  </ul>
</Move>

<Move name="Herculean Appetites">
  <p>
    Others may content themselves with just a taste of wine, or dominion over a servant or two, but you want more.
    Choose two appetites. While <strong>pursuing one of your appetites if you would roll for a move</strong>, instead
    of rolling 2d6 you roll 1d6+1d8. If the d6 is the higher die of the pair, the GM will also introduce a
    complication or danger that comes about due to your heedless pursuits.
  </p>
  <fieldset>
    <MoveOption value="Pure destruction"/>
    <MoveOption value="Power over others"/>
    <MoveOption value="Mortal pleasures"/>
    <MoveOption value="Conquest"/>
    <MoveOption value="Riches and property"/>
    <MoveOption value="Fame and glory"/>
  </fieldset>
</Move>

<Move name="Musclebound">
  <p>While you wield a weapon it gains the <em>forceful</em> and <em>messy</em> tags.</p>
</Move>

<hr>

<Move name="Still Hungry" requiresLevel="2">
  <p>Choose an additional appetite.</p>
</Move>

<Move name="Appetite For Destruction" requiresLevel="2">
  <p>
    Take a move from the Fighter, Bard, or Thief class list. You may not take multiclass moves from those classes.
  </p>
</Move>

<Move name="My Love For You Is Like A Truck" requiresLevel="2">
  <p>
    When you <strong>perform a feat of strength</strong>, name someone present whom you have impressed and take +1
    forward to parley with them.
  </p>
</Move>

<Move name="What Is Best In Life" requiresLevel="2">
  <p>
    At the end of a session, if during this session you have crushed your enemies, seen them driven before you, or
    have heard the lamentations of their kinfolk mark XP.
  </p>
</Move>

<Move name="Wide-Wanderer" requiresLevel="2">
  <p>
    You’ve travelled the wide world over. When you <strong>arrive someplace</strong> ask the GM about any important
    traditions, rituals, and so on, they’ll tell you what you need to know.
  </p>
</Move>

<Move name="Usurper" requiresLevel="2">
  <p>
    When you <strong>prove yourself superior to a person in power</strong>, take +1 forward with their followers,
    underlings, and hangers on.
  </p>
</Move>

<Move name="Khan Of Khans" requiresLevel="2">
  <p>
    Your hirelings always accept the gratuitous fulfillment of one of your appetites as payment.
  </p>
</Move>

<Move name="Samson" requiresLevel="2">
  <p>You may take a debility to immediately break free of any physical or mental restraint.</p>
</Move>

<Move name="Smash!" requiresLevel="2">
  <p>
    When you <em>Hack & Slash</em>, on a 12+ deal your damage and choose something physical your target has (a weapon,
    their position, a limb): they lose it.
  </p>
</Move>

<Move name="Indestructible Hunger" requiresLevel="2">
  <p>
    When you <strong>take damage</strong> you can choose to take -1 ongoing until you sate one of your appetites
    instead of taking the damage. If you already have this penalty you cannot choose this option.
  </p>
</Move>

<Move name="Eye For Weakness" requiresLevel="2">
  <p>
    When you <strong>Discern Realities</strong> add "What here is weak or vulnerable?" to the list of questions you
    can ask.
  </p>
</Move>

<Move name="On The Move" requiresLevel="2">
  <p>
    When you <strong>defy a danger caused by movement</strong> (maybe falling off a narrow bridge or rushing past an
    armed guard) take +1.
  </p>
</Move>

<hr>

<Move name="A Good Day To Die" requiresLevel="6">
  <p>
    As long as you have less than your CON in current HP (or 1, whichever is higher) take +1 ongoing.
  </p>
</Move>

<Move name="Kill ‘Em All" requiresLevel="6" requiresMove="Appetite for Destruction">
  <p>
    Take another move from the Fighter, Bard, or Thief class list. You may not take multiclass moves from those
    classes.
  </p>
</Move>

<Move name="War Cry" requiresLevel="6">
  <p>
    When you <strong>enter the battle with a show of force</strong>, roll +CHA. On a 10+ both, on a 7-9 one or the
    other.
  </p>
  <ul>
    <li>Your allies are rallied and take +1 forward.</li>
    <li>Your enemies feel fear and act accordingly (avoiding you, hiding, attacking with fear-driven abandon)</li>
  </ul>
</Move>

<Move name="Mark Of Might" requiresLevel="6">
  <p>
    When you take this move and <strong>spend some uninterrupted time reflecting on your past glories</strong>, you
    may mark yourself with a symbol of your power (a long braid tied with bells, ritual scars or tattoos, etc.) Any
    intelligent mortal creature who sees this symbol knows instinctively that you are a force to be reckoned with and
    treats you appropriately.
  </p>
</Move>

<Move name="More! Always More!" requiresLevel="6">
  <p>
    When you <strong>satisfy an appetite to the extreme</strong> (destroying something unique and significant, gaining
    enormous fame, riches, power, etc.) you may choose to resolve it. Cross it off the list and mark XP. While you may
    pursue that appetite again, you no longer feel the burning desire you once did. In its place, choose a new
    appetite from the list or write your own.
  </p>
</Move>

<Move name="The One Who Knocks" requiresLevel="6">
  <p>When you <strong>Defy Danger</strong>, on a 12+ you turn the danger back on itself, the GM will describe how.</p>
</Move>

<Move name="Healthy Distrust" requiresLevel="6">
  <p>
    Whenever the unclean magic wielded by mortal men causes you to <strong>Defy Danger</strong>, treat any result of
    6- as a 7–9.
  </p>
</Move>

<Move name="For The Blood God" requiresLevel="6">
  <p>
    You are initiated in the old ways, the ways of sacrifice. Choose something your gods (or the ancestor spirits, or
    your totem, etc) value—gold, blood, bones or the like. When you sacrifice those things as per your rites and
    rituals, roll+WIS.
  </p>
  <ul>
    <li>On a 10+ the GM will grant you insight into your current trouble or a boon to help you.</li>
    <li>
      On a 7-9 the sacrifice is not enough and your gods take of your flesh as well, but still grant you some insight
      or boon.
    </li>
    <li>On a miss, you earn the ire of the fickle spirits.</li>
  </ul>
</Move>