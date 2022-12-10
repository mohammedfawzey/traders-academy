<template>
  <div>
    <div class="text-h1">Hello From Child</div>
    <slot name="parent_slot" :message="message" :scopeMessage="scopeMessage" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Child Message",
      scopeMessage: "scoped From Child",
    };
  },
};
</script>

<style lang="scss" scoped></style>
