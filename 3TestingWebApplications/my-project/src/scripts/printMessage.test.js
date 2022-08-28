import { idText, isExportDeclaration } from 'typescript';
import { printMessage } from './printMessage.ts';

describe('test message module', () => {
  it('return welcome message from string', () => {
    expect(printMessage('susan')).toBe('welcome susan');
  });

  it.todo('return welcome message from array');
})