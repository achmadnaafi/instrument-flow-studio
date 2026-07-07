<script setup lang="ts">
defineProps<{
  title: string
}>()

defineEmits<{
  (e: 'click'): void
}>()
</script>

<template>
  <button
    class="action-button"
    :title="title"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<style scoped>

.action-button{

    width:34px;

    height:34px;

    display:flex;

    justify-content:center;

    align-items:center;

    border:none;

    border-radius:8px;

    background:white;

    color:#475569;

    cursor:pointer;

    box-shadow:0 2px 8px rgba(0,0,0,.12);

    transition:all .2s ease;

}

.action-button:hover{

    transform:translateY(-2px);

    color:#2563eb;

    box-shadow:0 6px 16px rgba(0,0,0,.16);

}

</style>