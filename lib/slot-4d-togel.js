'use babel';

import Slot4dTogelView from './slot-4d-togel-view';
import { CompositeDisposable } from 'atom';

export default {

  slot4dTogelView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.slot4dTogelView = new Slot4dTogelView(state.slot4dTogelViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.slot4dTogelView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'slot-4d-togel:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.slot4dTogelView.destroy();
  },

  serialize() {
    return {
      slot4dTogelViewState: this.slot4dTogelView.serialize()
    };
  },

  toggle() {
    console.log('Slot4dTogel was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
