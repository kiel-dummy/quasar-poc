<script setup>
 import IconHomeBg from '@/components/icons/IconHomeBg.vue'
</script>
<template>
    <div class="window-height window-width">
    <icon-home-bg></icon-home-bg>
    </div>
    <div class="window-height window-width">
        <!-- <q-parallax>
            <template v-slot:media>
                
            </template>
            <h1 class="text-white">Basic</h1>
        </q-parallax> -->
        <q-parallax>
            <template v-slot:media>
               
            </template>
        </q-parallax>
    </div>
    <router-view />
</template>