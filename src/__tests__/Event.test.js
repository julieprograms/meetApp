import React from 'react';
import { shallow } from 'enzyme';
import { Event } from '../Event';
import { mockData } from '../mock-data';

describe('<EventList /> component', () => {
    let EventWrapper;
    beforeAll(() => {
        EventWrapper = shallow(<Event events={mockData} />);
    });

    test('renders event', () => {
        expect(EventWrapper.find('.event')).toHaveLength(1);
    });





});