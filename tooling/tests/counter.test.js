import MyCounterElement from '../counter.js';

describe('counting engine handles keyboard events', () => {
    test('up arrow increments engine', () => {
        let element = new MyCounterElement();
        element.connectedCallback();

        let mockIncrement = jest.fn();
        let mockPreventDefault = jest.fn();
        element.engine.increment = mockIncrement;

        let fakeEvent = { code: "ArrowUp", preventDefault: mockPreventDefault };
        element.handleKeydown(fakeEvent);

        expect(mockIncrement).toHaveBeenCalledTimes(1);
    });

    test('up arrow does not run default behaviour', () => {
        let element = new MyCounterElement();
        element.connectedCallback();

        let mockIncrement = jest.fn();
        let mockPreventDefault = jest.fn();
        element.engine.increment = mockIncrement;

        let fakeEvent = { code: "ArrowUp", preventDefault: mockPreventDefault };
        element.handleKeydown(fakeEvent);

        expect(mockPreventDefault).toHaveBeenCalledTimes(1);
    });

});