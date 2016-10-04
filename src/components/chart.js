import _ from 'lodash';
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

function Avarage(data) {
  return _.round(_.sum(data)/data.length);
}

export default (props) => {
  return(
    <div>
      <Sparklines height={40} width={60} data={props.data}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type='avg' />
      </Sparklines>
      <div>{Avarage(props.data)} {props.units}</div>
    </div>
  );
}
