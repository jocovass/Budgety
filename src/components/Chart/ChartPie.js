import React from 'react';
import { ResponsivePie } from '@nivo/pie';
import Loader from '../ui/Loader/Loader';

function formateData(data) {
  return Object.entries(data).map((val, index) => {
    return {
      id: val[0],
      label: val[0],
      value: val[1],
    }
  });
}

const Chart = ({ data, loading }) => {
    if(loading) return <Loader color='bg'
                                size='8'
                                gapTop='10'/>;

    return (
    <ResponsivePie
        data={formateData(data)}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        sortByValue={false}
        innerRadius={0.4}
        padAngle={1}
        cornerRadius={7}
        colors={{ scheme: 'dark2' }}
        borderColor={{ from: 'color', modifiers: [ [ 'darker', '0' ] ] }}
        radialLabelsSkipAngle={0}
        radialLabelsTextXOffset={6}
        radialLabelsTextColor="#3d3d3d"
        radialLabelsLinkOffset={0}
        radialLabelsLinkDiagonalLength={18}
        radialLabelsLinkHorizontalLength={10}
        radialLabelsLinkStrokeWidth={2}
        radialLabelsLinkColor={{ from: 'color', modifiers: [] }}
        slicesLabelsSkipAngle={0}
        slicesLabelsTextColor="#333333"
        animate={true}
        motionStiffness={90}
        motionDamping={15}
        legends={[
            {
                anchor: 'bottom',
                direction: 'column',
                translateY: 56,
                translateX: -230,
                itemWidth: 100,
                itemHeight: 18,
                itemTextColor: '#999',
                symbolSize: 14,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000'
                        }
                    }
                ]
            }
        ]}
    />
    );
}

export default Chart;