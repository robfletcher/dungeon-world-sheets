<script>
  import {createEventDispatcher, onDestroy} from 'svelte';

  const dispatch = createEventDispatcher();
  const ok = () => dispatch('ok');
  const cancel = () => dispatch('cancel');

  let modal;

  const handle_keydown = e => {
    if (e.key === 'Escape') {
      cancel();
      return;
    }

    if (e.key === 'Enter') {
      ok();
      return;
    }

    if (e.key === 'Tab') {
      // trap focus
      const nodes = modal.querySelectorAll('*');
      const tabbable = Array.from(nodes).filter(n => n.tabIndex >= 0);

      let index = tabbable.indexOf(document.activeElement);
      if (index === -1 && e.shiftKey) index = 0;

      index += tabbable.length + (e.shiftKey ? -1 : 1);
      index %= tabbable.length;

      tabbable[index].focus();
      e.preventDefault();
    }
  };

  const previously_focused = typeof document !== 'undefined' && document.activeElement;

  if (previously_focused) {
    onDestroy(() => {
      previously_focused.focus();
    });
  }
</script>

<svelte:window on:keydown={handle_keydown}/>

<div class="modal-background" on:click={cancel}></div>

<div class="modal" role="dialog" aria-modal="true" bind:this={modal}>
  <header>
    <slot name="header"></slot>
  </header>

  <slot></slot>

  <!-- svelte-ignore a11y-autofocus -->
  <footer>
    <button autofocus on:click={ok}>Ok</button>
    <button autofocus on:click={cancel}>Cancel</button>
  </footer>
</div>

<style>
  .modal-background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
  }

  .modal {
    @apply absolute p-2 bg-white border-solid border-2 border-gray-800;
    left: 50%;
    top: 50%;
    width: calc(100vw - 4em);
    max-width: 32em;
    max-height: calc(100vh - 4em);
    overflow: auto;
    transform: translate(-50%, -50%);
    z-index: 2;
  }

  .modal header {
    @apply px-2;
  }

  .modal footer {
    @apply text-right;
  }

  button {
    @apply inline-block mx-2 text-center;
  }
</style>
