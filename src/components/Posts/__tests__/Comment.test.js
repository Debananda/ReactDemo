import React from 'react';
import {mount} from 'enzyme';
import Comment from "../Comment";

describe('Comment component testing', () => {
    it('shall show the comment details properly', () => {
        const dummyComment = {
            name: 'test comment name',
            body: 'test comment body'
        };
        const wrapper = mount(<Comment comment={dummyComment}/>);
        const header = wrapper.find('.card-header');
        expect(header.text()).toBe('test comment name');
        const body = wrapper.find('.card-body');
        expect(body.text()).toBe('test comment body');
    })
});