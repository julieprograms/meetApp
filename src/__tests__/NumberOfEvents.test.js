import React from 'react';
import { shallow } from 'enzyme';
import {NumberOfEvents} from '../NumberOfEvents';
import { mockData } from '../mock-data';

describe('<NumberOfEvents /> component', () => {
    let NumberOfEventsWrapper;
    beforeAll(() => {
        NumberOfEventsWrapper = shallow(<NumberOfEvents/>);
    });

    test('render text input', () => {
        expect(NumberOfEventsWrapper.find('.number')).toHaveLength(1);
    });

    test('render text input correctly', () => {
        const numberOfEvents = NumberOfEventsWrapper.state('numberOfEvents');
        expect(NumberOfEventsWrapper.find('.number').prop('value')).toBe(numberOfEvents);
    });

    test('change state when text input changes', () => {
        const numberOfEventObject = { target: { value: '30'}};
        NumberOfEventsWrapper.find('.number').simulate('change', numberOfEventObject);
        expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe('30');
    });


});