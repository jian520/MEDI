/**
 * MPColor
 * @flow
 */

'use strict';


const LOCATION_COLORS = {
    'HERBST': '#00E3AD',
    'HERBST A': '#00E3AD',
    'HERBST B': '#00E3AD',
    'HACKER X': '#4D99EF',
    'HACKER Y': '#CF72B1',
    'COWELL': '#6A6AD5',
    'COWELL C': '#6A6AD5',
    'FOOD TENT': '#FFCD3B',
};

function colorForLocation(location) {
    if (!location) {
        return 'black';
    }

    var color = LOCATION_COLORS[location.toUpperCase()];
    if (!color) {
        console.warn(`Location '${location}' has no color`);
        color = 'black';
    }
    return color;
}

function colorForTopic(count, index) {
    const hue = Math.round(360 * index / (count + 1));
    return `hsl(${hue}, 74%, 65%)`;
}


export default   {
    backgroundColor: '#f3f3f4',
    actionText: '#3FB4CF',
    inactiveText: '#9B9B9B',
    darkText: '#032250',
    lightText: '#7F91A7',
    cellBorder: '#EEEEEE',
    darkBackground: '#183E63',
    mainColor: '#03A9F4',
    titleColor: '#212121',
    subTitleColor: '#757575',
    colorForLocation,
    colorForTopic,
}