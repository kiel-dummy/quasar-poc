<template>
   <q-page>
    <div class="q-pa-md">
    <q-stepper
      v-model="step"
      ref="stepper"
      color="primary"
      animated
    >
      <q-step
        :name="1"
        title="Generate an Outline"
        icon="settings"
        :done="step > 1"
      >
        Cora will generate an outline that will be the basis of the new document. Do verify the initial setup generated.
      </q-step>

      <q-step
        :name="2"
        title="Prefill General Information"
        caption="Optional"
        icon="create_new_folder"
        :done="step > 2"
      >
        An ad group contains one or more ads which target a shared set of keywords.
      </q-step>

      <q-step
        :name="3"
        title="Verify Key Details"
        icon="assignment"

      >
        This step won't show up because it is disabled.
      </q-step>

      <q-step
        :name="4"
        title="Sectional Editing"
        icon="add_comment"
      >
        Try out different ad text to see what brings in the most customers, and learn how to
        enhance your ads using features like ad extensions. If you run into any problems with
        your ads, find out how to tell if they're running and how to resolve approval issues.
      </q-step>

      <template v-slot:navigation>
        <q-stepper-navigation>
          <q-btn @click="$refs.stepper.next()" color="primary" :label="step === 4 ? 'Finish' : 'Continue'" />
          <q-btn v-if="step > 1" flat color="primary" @click="$refs.stepper.previous()" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </template>
    </q-stepper>
  </div>
  
  <div v-if="step===1">
    <div class="q-pa-md">
      <q-splitter
        v-model="splitterModel"
        unit="px"
      >
      <template v-slot:before>
          <q-btn color="primary" label="Add Primary Section" />
          <q-tree
            :nodes="simple"
            node-key="label"
            tick-strategy="leaf"
            v-model:ticked="ticked"
            default-expand-all
            no-connectors
          />
      </template>
      <template v-slot:after>
        <div class="q-pa-md row justify-center">
    <div style="width: 100%; max-width: 400px">
      <q-chat-message
        :text="['hey, how are you?']"
        sent
      />
      <q-chat-message
        :text="['doing fine, how r you?']"
      />
    </div>
  </div>
      </template>
      </q-splitter>
      </div>
  </div>

  <div v-if="step===2">
    <q-input filled v-model="text" label="Filled" />
    <q-input filled v-model="text" label="Filled" />
    <q-input filled v-model="text" label="Filled" />

  </div>
  <div v-if="step===3">
    <q-input filled v-model="text" label="Filled" />
    <q-input filled v-model="text" label="Filled" />
    <q-input filled v-model="text" label="Filled" />

  </div>

  
  <div v-if="step===4">
    <q-splitter
      v-model="splitterModel"
      unit="px"
    >

      <template v-slot:before>
        <div class="q-pa-md">
          <q-btn color="primary" label="Add Primary Section" />
          <q-tree
            :nodes="simple"
            node-key="label"
            tick-strategy="leaf"
            selected-color="primary"
            v-model:selected="selected"
            v-model:ticked="ticked"
            v-model:expanded="expanded"
          />
        </div>
      </template>

      <template v-slot:after>
        <q-tab-panels
          v-model="selected"
          animated
          transition-prev="jump-up"
          transition-next="jump-up"
        >
          <q-tab-panel name="Relax Hotel">
            <div class="text-h4 q-mb-md">Welcome</div>
            <q-btn color="primary" label="Add Sub Section" />
            <q-btn color="primary" label="Ask AI" />
            <q-editor
                v-model="editor"
                :definitions="{
                    bold: {label: 'Bold', icon: null, tip: 'My bold tooltip'}
                }"
            />
          </q-tab-panel>

          <q-tab-panel name="Food">
            <div class="text-h4 q-mb-md">Food</div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
          </q-tab-panel>

          <q-tab-panel name="Yow">
            <div class="text-h4 q-mb-md">Yow</div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
          </q-tab-panel>

          <q-tab-panel name="Room service">
            <div class="text-h4 q-mb-md">Room service</div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
          </q-tab-panel>

          <q-tab-panel name="Room view">
            <div class="text-h4 q-mb-md">Room view</div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
          </q-tab-panel>
        </q-tab-panels>
      </template>
    </q-splitter>
  </div>
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