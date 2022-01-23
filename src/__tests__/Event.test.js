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

    test('render summary', () => {
        expect(EventWrapper.find('.summary')).toHaveLength(1);
    });

    test('render dateTime', () => {
        expect(EventWrapper.find('.dateTime')).toHaveLength(1);
    });

    test('render timezone', () => {
        expect(EventWrapper.find('.timezone')).toHaveLength(1);
    });

    test('render location', () => {
        expect(EventWrapper.find('.location')).toHaveLength(1);
    });





});