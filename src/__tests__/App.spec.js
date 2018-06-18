import {createLocalVue, mount} from '@vue/test-utils'
import App from '../App'

test('App has a class', () => {
  const vue = createLocalVue()
  const app = mount(App, {vue})
  expect(app.classes()).toContain('center-content')
})