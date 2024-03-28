import { TextEditor, TextEditorCaretaker } from './classes';

const textEditor = new TextEditor();
const textEditorBackupManager = new TextEditorCaretaker(textEditor);

textEditorBackupManager.backup('initial');

textEditor.writeLine('Hello');
textEditorBackupManager.backup('line 1');

textEditor.writeLine('World');
textEditorBackupManager.backup('line 2');

textEditor.writeLine('!');
textEditorBackupManager.backup('line 3');

textEditor.readDocument();

textEditorBackupManager.restore();

textEditor.readDocument();

textEditorBackupManager.restore();

textEditor.readDocument();

textEditorBackupManager.restore();

textEditor.readDocument();

textEditorBackupManager.restore();

textEditor.readDocument();

textEditorBackupManager.restore();

textEditor.readDocument();
