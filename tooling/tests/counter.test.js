import MyCounterElement from '../counter.js';

describe('counting engine handles keyboard events', () => {
    
    let element;
    let mockPreventDefault;
    let fakeEvent;

    beforeEach(() => {
        mockPreventDefault = jest.fn();
        element = new MyCounterElement();
        element.connectedCallback();
        fakeEvent = { code: "ArrowUp", preventDefault: mockPreventDefault };
    });

    test('up arrow increments engine', () => {
        let mockIncrement = jest.fn();
        element.engine.increment = mockIncrement;
        element.handleKeydown(fakeEvent);
        expect(mockIncrement).toHaveBeenCalledTimes(1);
    });

    test('up arrow does not run default behaviour', () => {
        element.handleKeydown(fakeEvent);
        expect(mockPreventDefault).toHaveBeenCalledTimes(1);
    });

});