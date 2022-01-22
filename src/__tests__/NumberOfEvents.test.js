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

});