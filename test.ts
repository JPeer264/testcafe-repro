import { Selector } from 'testcafe';

fixture``

test('test with iframe | does not work, but should', async (t) => {
  await t
    .navigateTo('http://localhost:1235')
    .switchToIframe(Selector('iframe'))
    .typeText('input.another-element', 'write something here')
    .expect(Selector('.this-should-appear').exists).ok();
});

test('test without iframe | works', async (t) => {
  await t
    .navigateTo('http://localhost:1234')
    .typeText('input.another-element', 'write something here')
    .expect(Selector('.this-should-appear').exists).ok();
});

test('retrigger blur event | works', async (t) => {
  await t
    .navigateTo('http://localhost:1235')
    .switchToIframe(Selector('iframe'))
    .typeText('input.another-element', 'write')
    .typeText('input.focused-element', 'write something here')
    .typeText('input.another-element', ' something here')
    .expect(Selector('.this-should-appear').exists).ok();
});
