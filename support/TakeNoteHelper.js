const Helper = codecept_helper;

const notes = {};

class TakeNoteHelper extends Helper {
  takeNoteOf(key, value) {
    notes[key] = value;
  }

  readNoteWithKey(key) {
    return notes[key];
  }
}
module.exports = TakeNoteHelper;
