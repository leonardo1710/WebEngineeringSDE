import { Stack } from 'stack.js';

describe('My Stack', () => {

  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  it('is created empty', () => {
    expect(stack.top).toBe(-1);
    expect(stack.items).toEqual({});
  })

  it('can push to the top', () => {
    stack.push('x');
    expect(stack.top).toBe(0);
    expect(stack.peek).toBe('x');
  });

  it('can pop off', () => {
    stack.push('x');
    stack.pop();
    expect(stack.top).toBe(-1);
    expect(stack.items).toEqual({});
  });
})