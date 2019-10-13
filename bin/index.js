#!/usr/bin/env node

const chalk = require('chalk');
const boxen = require('boxen');
const axios = require('axios');

const helper = require('../lib/helper.js');

const boxenOptions = {
    padding: 1,
    margin: 1,
    borderStyle: 'round',
    borderColor: 'green',
    backgroundColor: '#555555'
};

async function HNRes() {
    try {
    const data = await helper.getHNTopIds()
    
    data.forEach(function(current) { 
        axios.get(`${helper.HN_URL}/item/${current}.json`, { headers: { Accept: 'application/json' } })
        .then(res => {

            return res;
        })
        .then(res => {
            if(res) {

                const topStory = `${
                    chalk.white.bold(res.data.title)
                } \n ${
                    res.data.by
                } \n ${
                    res.data.url
                }`;
    
                const HNBox = boxen(topStory, boxenOptions);

                console.log(HNBox)

            }
        })
        .catch(error => {
            console.log(error);
        })
    })
    

    } catch(err) {
        console.log(err)
    }
    
    
}

console.log(HNRes())