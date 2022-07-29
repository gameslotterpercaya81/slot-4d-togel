'use babel';

import Slot4dTogel from '../lib/slot-4d-togel';

// Use the command `window:run-package-specs` (cmd-alt-ctrl-p) to run specs.
//
// To run a specific `it` or `describe` block add an `f` to the front (e.g. `fit`
// or `fdescribe`). Remove the `f` to unfocus the block.

describe('Slot4dTogel', () => {
  let workspaceElement, activationPromise;

  beforeEach(() => {
    workspaceElement = atom.views.getView(atom.workspace);
    activationPromise = atom.packages.activatePackage('slot-4d-togel');
  });

  describe('when the slot-4d-togel:toggle event is triggered', () => {
    it('hides and shows the modal panel', () => {
      // Before the activation event the view is not on the DOM, and no panel
      // has been created
      expect(workspaceElement.querySelector('.slot-4d-togel')).not.toExist();

      // This is an activation event, triggering it will cause the package to be
      // activated.
      atom.commands.dispatch(workspaceElement, 'slot-4d-togel:toggle');

      waitsForPromise(() => {
        return activationPromise;
      });

      runs(() => {
        expect(workspaceElement.querySelector('.slot-4d-togel')).toExist();

        let slot4dTogelElement = workspaceElement.querySelector('.slot-4d-togel');
        expect(slot4dTogelElement).toExist();

        let slot4dTogelPanel = atom.workspace.panelForItem(slot4dTogelElement);
        expect(slot4dTogelPanel.isVisible()).toBe(true);
        atom.commands.dispatch(workspaceElement, 'slot-4d-togel:toggle');
        expect(slot4dTogelPanel.isVisible()).toBe(false);
      });
    });

    it('hides and shows the view', () => {
      // This test shows you an integration test testing at the view level.

      // Attaching the workspaceElement to the DOM is required to allow the
      // `toBeVisible()` matchers to work. Anything testing visibility or focus
      // requires that the workspaceElement is on the DOM. Tests that attach the
      // workspaceElement to the DOM are generally slower than those off DOM.
      jasmine.attachToDOM(workspaceElement);

      expect(workspaceElement.querySelector('.slot-4d-togel')).not.toExist();

      // This is an activation event, triggering it causes the package to be
      // activated.
      atom.commands.dispatch(workspaceElement, 'slot-4d-togel:toggle');

      waitsForPromise(() => {
        return activationPromise;
      });

      runs(() => {
        // Now we can test for view visibility
        let slot4dTogelElement = workspaceElement.querySelector('.slot-4d-togel');
        expect(slot4dTogelElement).toBeVisible();
        atom.commands.dispatch(workspaceElement, 'slot-4d-togel:toggle');
        expect(slot4dTogelElement).not.toBeVisible();
      });
    });
  });
});
