<template>
    <q-layout view="hHr LpR lFr">
      <q-header elevated class="bg-primary text-white">
        <q-toolbar>
          <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
  
          <q-toolbar-title>
            <q-avatar>
              <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
            </q-avatar>
            Cora
          </q-toolbar-title>
          <q-btn dense flat round icon="menu" @click="toggleRightDrawer" />
        </q-toolbar>
      </q-header>
  
      <q-drawer show-if-above :mini="minified" side="left" bordered>
        <q-scroll-area class="fit">
          <q-list padding class="menu-list">
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="inbox" />
              </q-item-section>

              <q-item-section>
                Dashboard
              </q-item-section>
            </q-item>

            <q-item active clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="star" />
              </q-item-section>

              <q-item-section>
                Star
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="send" />
              </q-item-section>

              <q-item-section>
                Send
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="drafts" />
              </q-item-section>

              <q-item-section>
                Drafts
              </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>
      </q-drawer>
  
      <q-page-container>
        <router-view />
      </q-page-container>

      <q-drawer v-model="rightDrawerOpen" side="right" overlay bordered>
        <q-btn dense flat round icon="menu" @click="toggleRightDrawer" />
      </q-drawer>
  
    </q-layout>
</template>
  
<script>
  import { ref } from 'vue'
  
  export default {
    setup () {
      // const leftDrawerOpen = ref(true)

      const minified = ref(true)
      const rightDrawerOpen = ref(false)
  
      return {
        rightDrawerOpen,
        toggleRightDrawer () {
            rightDrawerOpen.value = !rightDrawerOpen.value
        },
        minified,
        toggleLeftDrawer () {
          // leftDrawerOpen.value = !leftDrawerOpen.value
          minified.value = !minified.value
        }
      }
    }
  }
</script>