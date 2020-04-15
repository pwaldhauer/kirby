import TextField from "./TextField.vue";
import { action } from "@storybook/addon-actions";

export default {
  title: "Form / Field / Text Field",
  component: TextField
};

export const regular = () => ({
  data() {
    return {
      value: ""
    };
  },
  methods: {
    input: action("input")
  },
  template: `
    <div>
      <k-text-field
        v-model="value"
        label="Text field"
        class="mb-8"
        @input="input"
      />

      <k-headline class="mb-3">Value</k-headline>
      <k-code-block :code="value" />
    </div>
  `,
});

export const placeholder = () => ({
  ...regular(),
  template: `
    <div>
      <k-text-field
        v-model="value"
        label="Text field"
        placeholder="Write something …"
        class="mb-8"
        @input="input"
      />

      <k-headline class="mb-3">Value</k-headline>
      <k-code-block :code="value" />
    </div>
  `
});

export const autofocus = () => ({
  ...regular(),
  template: `
    <div>
      <k-text-field
        v-model="value"
        :autofocus="true"
        label="Text field"
        class="mb-8"
        @input="input"
      />

      <k-headline class="mb-3">Value</k-headline>
      <k-code-block :code="value" />
    </div>
  `
});

export const icon = () => ({
  ...regular(),
  template: `
    <div>
      <k-text-field
        v-model="value"
        label="Text field"
        icon="edit"
        class="mb-8"
        @input="input"
      />

      <k-headline class="mb-3">Value</k-headline>
      <k-code-block :code="value" />
    </div>
  `
});

export const minlength = () => ({
  ...regular(),
  template: `
    <div>
      <k-text-field
        v-model="value"
        :minlength="10"
        :required="true"
        label="Text field"
        icon="edit"
        class="mb-8"
        @input="input"
      />

      <k-headline class="mb-3">Value</k-headline>
      <k-code-block :code="value" />
    </div>
  `
});

export const maxlength = () => ({
  ...regular(),
  template: `
    <div>
      <k-text-field
        v-model="value"
        :maxlength="10"
        label="Text field"
        icon="edit"
        class="mb-8"
        @input="input"
      />

      <k-headline class="mb-3">Value</k-headline>
      <k-code-block :code="value" />
    </div>
  `
});

export const noCounter = () => ({
  ...regular(),
  template: `
    <div>
      <k-text-field
        v-model="value"
        :counter="false"
        label="Text field"
        icon="edit"
        class="mb-8"
        @input="input"
      />

      <k-headline class="mb-3">Value</k-headline>
      <k-code-block :code="value" />
    </div>
  `
});

export const beforeAndAfter = () => ({
  ...regular(),
  template: `
    <div>
      <k-text-field
        v-model="value"
        before="https://"
        after=".com"
        placeholder="yourdomain"
        label=".com Domain"
        icon="url"
        class="mb-8"
        @input="input"
      />

      <k-headline class="mb-3">Value</k-headline>
      <k-code-block :code="value" />
    </div>
  `
});