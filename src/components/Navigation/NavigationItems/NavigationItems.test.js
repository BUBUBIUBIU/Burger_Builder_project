import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import NavigationItems from './NavigationItems';
import NavigationItem from './NavigationItem/NavigationItem';
// configure enzyme to match the corresponding react version
configure({adapter: new Adapter()});

// The first arg is like a mark show whick component we are testing
describe('<NavigationItems />', () => {
    let wrapper;
    // set some variables before test
    beforeEach(() => {
        wrapper = shallow(<NavigationItems />);
    });

    // the first arg of it is a description about the component we test
    // in the second arg, we write the test logic in form of arrow func
    it('should render two <NavigationItem /> elements if not authenticated', () => {
        // when user is not authenticated, <NavigationItems /> only has two <NavigationItem />
        // expect method comes from Jest
        expect(wrapper.find(NavigationItem)).toHaveLength(2);
    });

    it('should render three <NavigationItem /> elements if authenticated', () => {
        // wrapper = shallow(<NavigationItems isAuthenticated />);
        wrapper.setProps({isAuthenticated: true});
        expect(wrapper.find(NavigationItem)).toHaveLength(3);
    });

    it('should an exact logout button if authenticated', () => {
        // each test runs independent from others
        wrapper.setProps({isAuthenticated: true});
        expect(wrapper.contains(<NavigationItem link='/logout'>Logout</NavigationItem>)).toEqual(true);
    });
});