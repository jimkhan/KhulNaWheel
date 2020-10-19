import React, { Component } from 'react';
import { View, Text } from 'react-native';

var items = [
    {
        id: 1,
        name: 'JavaScript',
    },
    {
        id: 2,
        name: 'Java',
    },
    {
        id: 3,
        name: 'Ruby',
    },
    {
        id: 4,
        name: 'React Native',
    },
    {
        id: 5,
        name: 'PHP',
    },
    {
        id: 6,
        name: 'Python',
    },
    {
        id: 7,
        name: 'Go',
    },
    {
        id: 8,
        name: 'Swift',
    },
];

class ItemsArray extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (items);
    }
}

export default ItemsArray;
