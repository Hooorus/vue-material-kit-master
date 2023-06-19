<script setup>
import DefaultCounterCard from "../../../examples/cards/counterCards/DefaultCounterCard.vue";
</script>

<template>
  <section class="pt-3 pb-4" id="count-stats">
    <div class="container">
      <div class="row">
        <div class="col-lg-9 z-index-2 border-radius-xl mx-auto py-3">
          <div class="row">
            <div class="col-md-4 position-relative">
              <DefaultCounterCard
                color="info"
                title="Find"
                description="Find items in your home quickly"
                suffix="Fast"
                :count="0"
                :duration="0"
                divider="vertical"
              />
            </div>
            <div class="col-md-4 position-relative">
              <DefaultCounterCard
                color="info"
                title="Record"
                description="Bulk & AI Record"
                suffix="Efficient"
                :count="0"
                :duration="0"
                divider="vertical"
              />
            </div>
            <div class="col-md-4">
              <DefaultCounterCard
                color="info"
                title="Multiplatform"
                suffix="Convenient"
                description="Multiplatform Application"
                :count="0"
                :duration="0"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
