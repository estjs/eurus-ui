import type { StyleValue } from 'vue';

declare global {
	const __DEV__: boolean;
	namespace JSX {
		interface IntrinsicAttributes extends ReservedProps {
			class?: any;
			style?: StyleValue;
			[key: string]: any;
		}
		interface Element extends HTMLElement {
			// This is a workaround for the issue where Vue's JSX types do not recognize custom
			// elements with a hyphen in their name.
			// See: https://github.com/vuejs/vue-next/issues/1179

			[key: string]: any;
		}
	}
}
