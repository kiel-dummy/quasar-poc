<template>
    <q-page>
        <q-editor
            v-model="editor"
            :definitions="{
                bold: {label: 'Bold', icon: null, tip: 'My bold tooltip'}
            }"
        />
   </q-page>
 </template>
 <script>
 import { ref } from 'vue'
 
 export default {
   setup () {
     return {
       step: ref(1),
       splitterModel: ref(250),
       selected: ref(''),
       editor: ref(),
       ticked: ref(['Yow']),
       expanded: ref(['Relax Hotel']),
 
       simple: [
         {
           label: 'Relax Hotel',
           children: [
             {
               label: 'Food',
               icon: 'restaurant_menu',
               children: [
                 {
                     label: 'Yow',
                     icon: 'restaurant_menu',
                 }
               ]
             },
             {
               label: 'Room service',
               icon: 'room_service'
             },
             {
               label: 'Room view',
               icon: 'photo'
             }
           ]
         },
         {
             label: 'Sample',
             children: [
                 {
                     label: 'Room service2',
                 },
                 {
                     label: 'Room view2',
                 }
             ],
         },
         // {
         //     label: 'Sample',
         //     children: [
         //         {
         //             label: 'Room service',
         //             icon: 'room_service'
         //         },
         //         {
         //             label: 'Room view',
         //             icon: 'photo'
         //         }
         //     ],
         // },
         // {
         //     label: 'Sample',
         //     children: [
         //         {
         //             label: 'Room service',
         //             icon: 'room_service'
         //         },
         //         {
         //             label: 'Room view',
         //             icon: 'photo'
         //         }
         //     ],
         // },
         // {
         //     label: 'Sample',
         //     children: [
         //         {
         //             label: 'Room service',
         //             icon: 'room_service'
         //         },
         //         {
         //             label: 'Room view',
         //             icon: 'photo'
         //         }
         //     ],
         // },
         // {
         //     label: 'Sample',
         //     children: [
         //         {
         //             label: 'Room service',
         //             icon: 'room_service'
         //         },
         //         {
         //             label: 'Room view',
         //             icon: 'photo'
         //         }
         //     ],
         // }
       ]
     }
   }
 }
 </script>