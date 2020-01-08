import React from 'react';
import { ResponsivePie } from '@nivo/pie'
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const data = [
    {
      "id": "hack",
      "label": "hack",
      "value": 368,
      "color": "hsl(39, 70%, 50%)"
    },
    {
      "id": "ruby",
      "label": "ruby",
      "value": 531,
      "color": "hsl(272, 70%, 50%)"
    },
    {
      "id": "lisp",
      "label": "lisp",
      "value": 60,
      "color": "hsl(24, 70%, 50%)"
    },
    {
      "id": "java",
      "label": "java",
      "value": 379,
      "color": "hsl(43, 70%, 50%)"
    },
    {
      "id": "erlang",
      "label": "erlang",
      "value": 98,
      "color": "hsl(134, 70%, 50%)"
    }
  ];

const Chart = () => (
    <ResponsivePie
        data={data}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        sortByValue={true}
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
                direction: 'row',
                translateY: 56,
                itemWidth: 100,
                itemHeight: 18,
                itemTextColor: '#999',
                symbolSize: 25,
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

export default Chart;