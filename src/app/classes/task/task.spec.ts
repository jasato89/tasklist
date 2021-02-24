import { Task } from './task';

describe('Task', () => {
  it('should create an instance', () => {
    expect(new Task("Hola", false, false)).toBeTruthy();
  });
});
