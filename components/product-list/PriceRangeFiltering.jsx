import { Slider } from 'antd';
import _ from 'lodash';
import React from 'react';

const stateModalSearchRef = React.createRef();
const years = [2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010, 2009, 2008, 2007, 2006, 2005, 2004, 2003, 2002, 2001, 2000, 1999, 1998, 1997, 1996, 1995, 1994, 1993, 1992, 1991, 1990]
const priceRangeOptions = [[30000, '<'], [30000, 50000], [50000, 70000], [70000, 90000], [90000, 110000], [110000, '>='],
];

function onChange(value) {
    console.log('onChange: ', value);
  }
  
  function onAfterChange(value) {
    console.log('onAfterChange: ', value);
  } 

  const marks = {
      0: '0Y',
      1: '20',
      2: '40',
      3: '60',
      4: '100',
      5: '200',
      6: '300',
      7: '500',
      8: '700',
      9: '1M',
      10: '10Y'
  }


const PriceRangeFiltering = (props) => {
    return(
        <div>
            <Slider
                marks={marks}
                range
                step={1}
                defaultValue={[0, 10]}
                onChange={(value) => {
                    if(props.onChange){
                        let newValue = _.cloneDeep(value);
                        newValue[0] = 2020 - newValue[0]
                        newValue[1] = 2020 - newValue[1]
                        newValue = _.reverse(newValue);
                        props.onChange({priceRange : newValue})
                    }
                }}
                min = {0}
                max = {10}  
            />
        </div>
        );
    }

export default (PriceRangeFiltering);