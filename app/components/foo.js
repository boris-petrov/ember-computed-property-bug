import { A } from '@ember/array';
import Component from '@ember/component';
import { computed } from '@ember/object';

export default class extends Component {
  parts = A([{ value: null }]);

  @computed('parts.@each.value')
  get foo() {
    console.log('getting', this.parts.mapBy('value').join(''));
    return this.parts.mapBy('value').join('');
  }
  set foo(value) {
  }
}
