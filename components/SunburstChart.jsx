import { ResponsiveSunburst } from '@nivo/sunburst';
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

let data = {
  name: 'nivo',
  color: 'hsl(217, 70%, 50%)',
  children: [
    {
      name: 'viz',
      color: 'hsl(307, 70%, 50%)',
      children: [
        {
          name: 'stack',
          color: 'hsl(149, 70%, 50%)',
          children: [
            {
              name: 'chart',
              color: 'hsl(273, 70%, 50%)',
              loc: 64013
            },
            {
              name: 'xAxis',
              color: 'hsl(65, 70%, 50%)',
              loc: 45917
            },
            {
              name: 'yAxis',
              color: 'hsl(282, 70%, 50%)',
              loc: 57192
            },
            {
              name: 'layers',
              color: 'hsl(260, 70%, 50%)',
              loc: 190232
            }
          ]
        },
        {
          name: 'pie',
          color: 'hsl(163, 70%, 50%)',
          children: [
            {
              name: 'chart',
              color: 'hsl(138, 70%, 50%)',
              children: [
                {
                  name: 'pie',
                  color: 'hsl(235, 70%, 50%)',
                  children: [
                    {
                      name: 'outline',
                      color: 'hsl(69, 70%, 50%)',
                      loc: 144423
                    },
                    {
                      name: 'slices',
                      color: 'hsl(50, 70%, 50%)',
                      loc: 107880
                    },
                    {
                      name: 'bbox',
                      color: 'hsl(123, 70%, 50%)',
                      loc: 102450
                    }
                  ]
                },
                {
                  name: 'donut',
                  color: 'hsl(20, 70%, 50%)',
                  loc: 58984
                },
                {
                  name: 'gauge',
                  color: 'hsl(73, 70%, 50%)',
                  loc: 4291
                }
              ]
            },
            {
              name: 'legends',
              color: 'hsl(70, 70%, 50%)',
              loc: 105931
            }
          ]
        }
      ]
    },
    {
      name: 'colors',
      color: 'hsl(73, 70%, 50%)',
      children: [
        {
          name: 'rgb',
          color: 'hsl(267, 70%, 50%)',
          loc: 21396
        },
        {
          name: 'hsl',
          color: 'hsl(82, 70%, 50%)',
          loc: 56832
        }
      ]
    },
    {
      name: 'utils',
      color: 'hsl(255, 70%, 50%)',
      children: [
        {
          name: 'randomize',
          color: 'hsl(300, 70%, 50%)',
          loc: 54202
        },
        {
          name: 'resetClock',
          color: 'hsl(62, 70%, 50%)',
          loc: 38476
        },
        {
          name: 'noop',
          color: 'hsl(152, 70%, 50%)',
          loc: 101131
        },
        {
          name: 'tick',
          color: 'hsl(228, 70%, 50%)',
          loc: 39068
        },
        {
          name: 'forceGC',
          color: 'hsl(74, 70%, 50%)',
          loc: 150715
        },
        {
          name: 'stackTrace',
          color: 'hsl(196, 70%, 50%)',
          loc: 13963
        },
        {
          name: 'dbg',
          color: 'hsl(331, 70%, 50%)',
          loc: 104845
        }
      ]
    },
    {
      name: 'generators',
      color: 'hsl(246, 70%, 50%)',
      children: [
        {
          name: 'address',
          color: 'hsl(193, 70%, 50%)',
          loc: 136488
        },
        {
          name: 'city',
          color: 'hsl(43, 70%, 50%)',
          loc: 144276
        },
        {
          name: 'animal',
          color: 'hsl(149, 70%, 50%)',
          loc: 76985
        },
        {
          name: 'movie',
          color: 'hsl(244, 70%, 50%)',
          loc: 199685
        },
        {
          name: 'user',
          color: 'hsl(66, 70%, 50%)',
          loc: 138345
        }
      ]
    },
    {
      name: 'set',
      color: 'hsl(171, 70%, 50%)',
      children: [
        {
          name: 'clone',
          color: 'hsl(57, 70%, 50%)',
          loc: 38739
        },
        {
          name: 'intersect',
          color: 'hsl(51, 70%, 50%)',
          loc: 150590
        },
        {
          name: 'merge',
          color: 'hsl(15, 70%, 50%)',
          loc: 132468
        },
        {
          name: 'reverse',
          color: 'hsl(303, 70%, 50%)',
          loc: 15907
        },
        {
          name: 'toArray',
          color: 'hsl(196, 70%, 50%)',
          loc: 165777
        },
        {
          name: 'toObject',
          color: 'hsl(94, 70%, 50%)',
          loc: 31952
        },
        {
          name: 'fromCSV',
          color: 'hsl(213, 70%, 50%)',
          loc: 60724
        },
        {
          name: 'slice',
          color: 'hsl(336, 70%, 50%)',
          loc: 53237
        },
        {
          name: 'append',
          color: 'hsl(228, 70%, 50%)',
          loc: 108854
        },
        {
          name: 'prepend',
          color: 'hsl(178, 70%, 50%)',
          loc: 106065
        },
        {
          name: 'shuffle',
          color: 'hsl(124, 70%, 50%)',
          loc: 53166
        },
        {
          name: 'pick',
          color: 'hsl(179, 70%, 50%)',
          loc: 155652
        },
        {
          name: 'plouc',
          color: 'hsl(297, 70%, 50%)',
          loc: 186084
        }
      ]
    },
    {
      name: 'text',
      color: 'hsl(49, 70%, 50%)',
      children: [
        {
          name: 'trim',
          color: 'hsl(255, 70%, 50%)',
          loc: 89100
        },
        {
          name: 'slugify',
          color: 'hsl(16, 70%, 50%)',
          loc: 24853
        },
        {
          name: 'snakeCase',
          color: 'hsl(228, 70%, 50%)',
          loc: 46242
        },
        {
          name: 'camelCase',
          color: 'hsl(218, 70%, 50%)',
          loc: 124653
        },
        {
          name: 'repeat',
          color: 'hsl(13, 70%, 50%)',
          loc: 87525
        },
        {
          name: 'padLeft',
          color: 'hsl(21, 70%, 50%)',
          loc: 166549
        },
        {
          name: 'padRight',
          color: 'hsl(91, 70%, 50%)',
          loc: 60058
        },
        {
          name: 'sanitize',
          color: 'hsl(8, 70%, 50%)',
          loc: 154295
        },
        {
          name: 'ploucify',
          color: 'hsl(48, 70%, 50%)',
          loc: 150041
        }
      ]
    },
    {
      name: 'misc',
      color: 'hsl(15, 70%, 50%)',
      children: [
        {
          name: 'whatever',
          color: 'hsl(321, 70%, 50%)',
          children: [
            {
              name: 'hey',
              color: 'hsl(42, 70%, 50%)',
              loc: 179256
            },
            {
              name: 'WTF',
              color: 'hsl(214, 70%, 50%)',
              loc: 141771
            },
            {
              name: 'lol',
              color: 'hsl(218, 70%, 50%)',
              loc: 185475
            },
            {
              name: 'IMHO',
              color: 'hsl(79, 70%, 50%)',
              loc: 18930
            }
          ]
        },
        {
          name: 'other',
          color: 'hsl(21, 70%, 50%)',
          loc: 48924
        },
        {
          name: 'crap',
          color: 'hsl(343, 70%, 50%)',
          children: [
            {
              name: 'crapA',
              color: 'hsl(320, 70%, 50%)',
              loc: 74511
            },
            {
              name: 'crapB',
              color: 'hsl(136, 70%, 50%)',
              children: [
                {
                  name: 'crapB1',
                  color: 'hsl(29, 70%, 50%)',
                  loc: 191138
                },
                {
                  name: 'crapB2',
                  color: 'hsl(327, 70%, 50%)',
                  loc: 168460
                },
                {
                  name: 'crapB3',
                  color: 'hsl(50, 70%, 50%)',
                  loc: 181497
                },
                {
                  name: 'crapB4',
                  color: 'hsl(136, 70%, 50%)',
                  loc: 149558
                }
              ]
            },
            {
              name: 'crapC',
              color: 'hsl(307, 70%, 50%)',
              children: [
                {
                  name: 'crapC1',
                  color: 'hsl(210, 70%, 50%)',
                  loc: 188956
                },
                {
                  name: 'crapC2',
                  color: 'hsl(247, 70%, 50%)',
                  loc: 7393
                },
                {
                  name: 'crapC3',
                  color: 'hsl(210, 70%, 50%)',
                  loc: 134379
                },
                {
                  name: 'crapC4',
                  color: 'hsl(279, 70%, 50%)',
                  loc: 103376
                },
                {
                  name: 'crapC5',
                  color: 'hsl(279, 70%, 50%)',
                  loc: 76176
                },
                {
                  name: 'crapC6',
                  color: 'hsl(195, 70%, 50%)',
                  loc: 146669
                },
                {
                  name: 'crapC7',
                  color: 'hsl(28, 70%, 50%)',
                  loc: 78666
                },
                {
                  name: 'crapC8',
                  color: 'hsl(47, 70%, 50%)',
                  loc: 11105
                },
                {
                  name: 'crapC9',
                  color: 'hsl(288, 70%, 50%)',
                  loc: 131602
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

export const SunburstChart = () => (
  <ResponsiveSunburst
    data={data}
    margin={{ top: 40, right: 20, bottom: 20, left: 20 }}
    identity="name"
    value="loc"
    cornerRadius={2}
    borderWidth={1}
    borderColor="white"
    colors={{ scheme: 'nivo' }}
    childColor={{ from: 'color' }}
    animate={true}
    motionStiffness={90}
    motionDamping={15}
    isInteractive={true}
  />
);
