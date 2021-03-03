import React, { useEffect, useState, useRef } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const data = [
    {
        label: 'USA',
        value: 'usa',
        icon: () => <Icon name="flag" size={18} color="#900" />,
        hidden: true,
    },
    {
        label: 'UK',
        value: 'uk',
        icon: () => <Icon name="flag" size={18} color="#900" />,
    },
    {
        label: 'France',
        value: 'france',
        icon: () => <Icon name="flag" size={18} color="#900" />,
    },
];

function Dropdown(props) {
    const [items, setItems] = useState([]);
    const [currentItem, setCurrentItem] = useState('');
    //const [visible, setvisible] = useState(true)
    let dropdownRef = null;

    useEffect(() => {
        if (Array.isArray(props.listOfItems)) {
            let dataItems = [];
            props.listOfItems.map((item) => {
                dataItems = [
                    ...dataItems,
                    {
                        label: item[props.lable],
                        value: item[props.value],
                    },
                ];
            });
            setItems(dataItems);
        }
        return () => { };
    }, [props.listOfItems]);


    return (
        <DropDownPicker
            //controller={(instance) => (dropdownRef = instance)}
            items={items}
            containerStyle={props.containerStyle}
            style={props.style}
            itemStyle={props.itemStyle}
            dropDownStyle={props.dropDownStyle}
            onChangeItem={(item) => {
                setCurrentItem(item.value);
                props.onChangeItem(item);
            }}
            placeholder={props.placeholder}
            defaultValue={currentItem}
        />
    );
}

Dropdown.defaultProps = {
    listOfItems: [],
    isLoaded: false,
    lable: 'name',
    value: '_id',
    placeholder: 'Select',
    dropDownStyle: { backgroundColor: '#F7FAFB', color: '#9FA2A4' },
    onChangeItem: () => { },
    itemStyle: {
        justifyContent: 'flex-start',
    },
    style: {
        backgroundColor: '#F7FAFB',
        margin: 10,
        marginLeft: 0,
        marginRight: 0,
        marginBottom: 1,
        color: '#9FA2A4',
    },
    containerStyle: { height: 50 },
};
export default Dropdown;
