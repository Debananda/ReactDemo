import React from 'react';
import {mount} from 'enzyme';
import UserDetails from "../UserDetails";

describe('User Details Component Testing', () => {
    it('shall show user details properly', () => {
            const user = {
                "id": 1,
                "name": "Leanne Graham",
                "username": "Bret",
                "email": "Sincere@april.biz",
                "address": {
                    "street": "Kulas Light",
                    "suite": "Apt. 556",
                    "city": "Gwenborough",
                    "zipcode": "92998-3874",
                    "geo": {
                        "lat": "-37.3159",
                        "lng": "81.1496"
                    }
                },
                "phone": "1-770-736-8031 x56442",
                "website": "hildegard.org",
                "company": {
                    "name": "Romaguera-Crona",
                    "catchPhrase": "Multi-layered client-server neural-net",
                    "bs": "harness real-time e-markets"
                }
            };

            const wrapper = mount(<UserDetails user={user}/>);
            const header = wrapper.find('.card-header');
            expect(header.text()).toBe(user.name);
            const email = wrapper.find('#email');
            expect(email.text()).toBe(`Email : ${user.email}`);
            const phone = wrapper.find('#phone');
            expect(phone.text()).toBe(`Phone : ${user.phone}`);
        }
    )
});