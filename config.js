var config = {
    style: 'mapbox://styles/avpresbitero/ck913xgci0u5u1jrs5sphbm97/draft',
    accessToken: 'pk.eyJ1IjoiYXZwcmVzYml0ZXJvIiwiYSI6ImNrOG56MGdxdjB5bXozbW80d296aGhtZWEifQ.YbB5xzHFxTqNUgeACBABEA',
    showMarkers: false,
    theme: 'dark',
    alignment: 'left',
    title: 'The COVID-19 Trail in the Philippines',
    subtitle: 'Stuff',
    byline: 'ACCeSs@AIM',
    footer: 'Source: [1] https://cnnphilippines.com/news/2020/1/31/Philippines-novel-coronavirus-China-travel-ban.html \n [2] https://www.rappler.com/nation/250781-doh-second-novel-coronavirus-case-philippines \n [3]https://cnnphilippines.com/news/2020/3/12/COVID-19-Metro-Manila-restrictions-Philippines.html',
    chapters: [
        {
            id: 'firstcase',
            title: 'January 30, 2020: The First Case of COVID-19 in the Philippines',
            image: '',
            description: 'The first diagnosed case of COVID-19 in the Philippines was a 38-year-old Chinese woman from Wuhan. Wuhan was the origin of the disease. She flew in from Hongkong and arrived in Manila on January 21. She was then admitted to the San Lazaro Hospital in Manila on January 25 after she sought a consultation due to a mild cough. At the time of the confirmation announcement, the Chinese woman was already asymptomatic. [1]',
            location: {
                center: [120.98105, 14.61360],
                zoom: 16.50,
                pitch: 45.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'case1',
                    opacity: 1
                },
                {
                    layer: 'case3cebu',
                    opacity: 0
                },
                {
                    layer: 'case3bohol',
                    opacity: 0
                },
                {
                    layer: 'case4',
                    opacity: 0
                },
                {
                    layer: 'case5',
                    opacity: 0
                },
                {
                    layer: 'case49',
                    opacity: 0
                },
                {
                    layer: 'case39',
                    opacity: 0
                },
                {
                    layer: 'case40',
                    opacity: 0
                },
                {
                    layer: 'case5',
                    opacity: 0
                },
                {
                    layer: 'now',
                    opacity: 0
                }
            ],
            onChapterExit: [
                // {
                //     layer: 'case1-pol',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'thirdcaseCebu',
            title: 'January 20, 2020: DOH confirmed a third case in a 60-year-old Chinese woman who flew into Cebu City from Hong Kong.',
            image: '',
            description: 'The Department of Health (DOH) today confirmed that a sample from a 60-year-old female Chinese patient under investigation (PUI) tested positive for the novel coronavirus (2019-nCoV). She is the third confirmed 2019-nCoV Acute Respiratory Disease (2019-nCoV ARD) case in the country.',
            location: {
                center: [123.89322, 10.31072],
                zoom: 13.21,
                pitch: 34.00,
                bearing: -32.00
            },
            onChapterEnter: [
                {
                    layer: 'case1',
                    opacity: 0.7
                },
                {
                    layer: 'case3cebu',
                    opacity: 0.8
                },
                {
                    layer: 'case3bohol',
                    opacity: 0
                },
                {
                    layer: 'case4',
                    opacity: 0
                },
                {
                    layer: 'case5',
                    opacity: 0
                },
                {
                    layer: 'case49',
                    opacity: 0
                },
                {
                    layer: 'case39',
                    opacity: 0
                },
                {
                    layer: 'case40',
                    opacity: 0
                },
                {
                    layer: 'case1k',
                    opacity: 0
                },
                {
                    layer: 'now',
                    opacity: 0
                }
            ],
            onChapterExit: [
                // {
                //     layer: 'case1-pol',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'thirdcaseBohol',
            title: 'January 22, 2020: Patient 3 traveled to Bohol.',
            image: '',
            description: 'She traveled to Bohol where she consulted a doctor at a private hospital on January 22, due to fever and rhinitis. Samples taken from the patient on January 24 returned a negative result, but the DOH was notified on February 3 that samples taken from the patient on January 23 tested positive for the virus.',
            location: {
                center: [124.21558, 9.88538],
                zoom: 13.45,
                pitch: 60.00,
                bearing: 156.62
            },
            onChapterEnter: [
                {
                    layer: 'case1',
                    opacity: 0.7
                },
                {
                    layer: 'case3cebu',
                    opacity: 0.7
                },
                {
                    layer: 'case3bohol',
                    opacity: 0.8
                },
                {
                    layer: 'case4',
                    opacity: 0
                },
                {
                    layer: 'case5',
                    opacity: 0
                },
                {
                    layer: 'case49',
                    opacity: 0
                },
                {
                    layer: 'case39',
                    opacity: 0
                },
                {
                    layer: 'case40',
                    opacity: 0
                },
                {
                    layer: 'case1k',
                    opacity: 0
                },
                {
                    layer: 'now',
                    opacity: 0
                }
            ],
            onChapterExit: [
                // {
                //     layer: 'case1-pol',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'd30',
            title: 'January 31, 2020: Duterte orders travel ban from China province amid coronavirus scares',
            image: './images/d30.jpg',
            description: 'President Rodrigo Duterte has issued an order to temporarily stop the entry of all visitors from China\'s Hubei province, where Wuhan — epicenter of the novel coronavirus — is located, his spokesperson said on Friday. The Chinese government has locked down Hubei since January 24. The announcement came a day after the Philippines confirmed its first case of the deadly virus.[1]',
            location: {
                center: [120.98354, 14.61457],
                zoom: 12.48,
                pitch: 44.00,
                bearing: 16.80
            },
            onChapterEnter: [
                {
                    layer: 'case1',
                    opacity: 1
                },
                {
                    layer: 'case3cebu',
                    opacity: 0
                },
                {
                    layer: 'case3bohol',
                    opacity: 0
                },
                {
                    layer: 'case4',
                    opacity: 0
                },
                {
                    layer: 'case5',
                    opacity: 0
                },
                {
                    layer: 'case49',
                    opacity: 0
                },
                {
                    layer: 'case39',
                    opacity: 0
                },
                {
                    layer: 'case40',
                    opacity: 0
                },
                {
                    layer: 'case1k',
                    opacity: 0
                },
                {
                    layer: 'now',
                    opacity: 0
                }
            ],
            onChapterExit: [
                // {
                //     layer: 'case1',
                //     opacity: 0
                // },
                // {
                //     layer: 'case1pol',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'death',
            title: 'February 2, 2020: First nCoV-related death outside China as patient dies in the Philippines            ',
            image: './images/first.jfif',
            description: '“The patient was stable and showed signs of improvement, however, the conditions of the patient deteriorated within the last 24 hours resulting in his demise,” said Health Secretary Francisco Duque III. He had no preexisting illnesses, according to Health Undersecretary Eric Domingo.[2]',
            location: {
                center: [105.80219, 14.15292],
                zoom: 3.86,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'case1',
                    opacity: 1
                },
                {
                    layer: 'case3cebu',
                    opacity: 0
                },
                {
                    layer: 'case3bohol',
                    opacity: 0
                },
                {
                    layer: 'case4',
                    opacity: 0
                },
                {
                    layer: 'case5',
                    opacity: 0
                },
                {
                    layer: 'case49',
                    opacity: 0
                },
                {
                    layer: 'case39',
                    opacity: 0
                },
                {
                    layer: 'case40',
                    opacity: 0
                },
                {
                    layer: 'case1k',
                    opacity: 0
                },
                {
                    layer: 'now',
                    opacity: 0
                }
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'case4',
            title: 'March 5, 2020: First Filipino to Contract the Disease',
            // image: './path/to/image/source.png',
            description: 'After a month without new cases, DOH announced a 48-year-old man with travel history to Japan, returning on February 25 and reported symptoms on March 3.',
            location: {
                center: [121.07387, 14.53166],
                // center: [121.12221, 14.59345],
                zoom: 14.55,
                pitch: 60.00,
                bearing: -96.49
            },
            onChapterEnter: [
                {
                    layer: 'case1',
                    opacity: 0.7
                },
                {
                    layer: 'case3cebu',
                    opacity: 0
                },
                {
                    layer: 'case3bohol',
                    opacity: 0
                },
                {
                    layer: 'case4',
                    opacity: 1
                },
                {
                    layer: 'case5',
                    opacity: 0
                },
                {
                    layer: 'case49',
                    opacity: 0
                },
                {
                    layer: 'case39',
                    opacity: 0
                },
                {
                    layer: 'case40',
                    opacity: 0
                },
                {
                    layer: 'case1k',
                    opacity: 0
                },
                {
                    layer: 'now',
                    opacity: 0
                }
            ],
            onChapterExit: [

            ]
        },
        {
            id: 'case5',
            title: 'March 6, 2020: First Case of Local Transmission',
            // image: './path/to/image/source.png',
            description: 'The DOH confirmed that the fifth case had no travel history outside the Philippines and is, therefore, the first case of local transmission',
            location: {
                center: [121.12150, 14.59878],
                zoom: 13.08,
                pitch: 60.00,
                bearing: -49.29
            },
            onChapterEnter: [
                {
                    layer: 'case1',
                    opacity: 0.7
                },
                {
                    layer: 'case3cebu',
                    opacity: 0
                },
                {
                    layer: 'case3bohol',
                    opacity: 0
                },
                {
                    layer: 'case4',
                    opacity: 0.7
                },
                {
                    layer: 'case5',
                    opacity: 1
                },
                {
                    layer: 'case49',
                    opacity: 0
                },
                {
                    layer: 'case39',
                    opacity: 0
                },
                {
                    layer: 'case40',
                    opacity: 0
                },
                {
                    layer: 'case1k',
                    opacity: 0
                },
                {
                    layer: 'now',
                    opacity: 0
                }
            ],
            onChapterExit: [

            ]
        },
        {
            id: 'Batangas',
            title: 'March 10, 2020: First Case in Batangas',
            image: '',
            description: 'Patient 49 is a 72 year old Filipino male from Batangas City, Batangas and confined in Asian Hospital and Medical Center.',
            location: {
                center: [121.05254, 13.75351],
                zoom: 13.21,
                pitch: 45.00,
                bearing: -0.50
            },
            onChapterEnter: [
                {
                    layer: 'case1',
                    opacity: 0.7
                },
                {
                    layer: 'case3cebu',
                    opacity: 0
                },
                {
                    layer: 'case3bohol',
                    opacity: 0
                },
                {
                    layer: 'case4',
                    opacity: 0.7
                },
                {
                    layer: 'case5',
                    opacity: 0.7
                },
                {
                    layer: 'case49',
                    opacity: 1
                },
                {
                    layer: 'case39',
                    opacity: 0
                },
                {
                    layer: 'case40',
                    opacity: 0
                },
                {
                    layer: 'case1k',
                    opacity: 0
                },
                {
                    layer: 'now',
                    opacity: 0
                }
            ],
            onChapterExit: [
                // {
                //     layer: 'case1-pol',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'firstOutsideLuzon',
            title: 'March 11, 2020: First case outside Luzon. First case in Visayas.',
            image: '',
            description: 'The first Visayas case is Patient 39 from Negros Oriental, a 64-year-old male confined at Ace Dumaguete Doctors Inc.',
            location: {
                center: [123.00538, 9.56623],
                zoom: 9.50,
                pitch: 41.50,
                bearing: -8.80
            },
            onChapterEnter: [
                {
                    layer: 'case1',
                    opacity: 0.7
                },
                {
                    layer: 'case3cebu',
                    opacity: 0
                },
                {
                    layer: 'case3bohol',
                    opacity: 0
                },
                {
                    layer: 'case4',
                    opacity: 0.7
                },
                {
                    layer: 'case5',
                    opacity: 0.7
                },
                {
                    layer: 'case49',
                    opacity: 0.7
                },
                {
                    layer: 'case39',
                    opacity: 1
                },
                {
                    layer: 'case40',
                    opacity: 0
                },
                {
                    layer: 'case1k',
                    opacity: 0
                },
                {
                    layer: 'now',
                    opacity: 0
                }
            ],
            onChapterExit: [
                // {
                //     layer: 'case1-pol',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'LanaoDelSur',
            title: 'March 11, 2020: First Case in Mindanao',
            image: '',
            description: 'The first COVID-19 case in Mindanao, identified as Patient 40, is a 54-year-old Filipino male who has no known travel history and resides in Lanao del Sur. He began manifesting COVID-19 symptoms on February 24. He was admitted at the Northern Mindanao Medical Center in Cagayan de Oro City.',
            location: {
                center: [124.41338, 7.81152],
                zoom: 7.71,
                pitch: 60.00,
                bearing: 139.58
            },
            onChapterEnter: [
                {
                    layer: 'case1',
                    opacity: 0.7
                },
                {
                    layer: 'case3cebu',
                    opacity: 0
                },
                {
                    layer: 'case3bohol',
                    opacity: 0
                },
                {
                    layer: 'case4',
                    opacity: 0.7
                },
                {
                    layer: 'case5',
                    opacity: 0.7
                },
                {
                    layer: 'case49',
                    opacity: 0.7
                },
                {
                    layer: 'case39',
                    opacity: 0.7
                },
                {
                    layer: 'case40',
                    opacity: 1
                },
                {
                    layer: 'case1k',
                    opacity: 0
                },
                {
                    layer: 'now',
                    opacity: 0
                }
            ],
            onChapterExit: [
                // {
                //     layer: 'case1-pol',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'ldstart',
            title: 'March 12, 2020: Metro Manila Placed on \'Lockdown\' Due to COVID-19',
            image: './images/ld.jpg',
            description: 'Over 12 million people living in Metro Manila would not be allowed in and out of the country\'s economic and political center by land, local air travel and local sea travel from midnight of March 15 until April 14 as the region is placed under community quarantine.',
            location: {
                center: [120.99959, 14.63389],
                zoom: 9.28,
                pitch: 45.00,
                bearing: -0.02
            },
            onChapterEnter: [
                {
                    layer: 'case1',
                    opacity: 0.7
                },
                {
                    layer: 'case3cebu',
                    opacity: 0
                },
                {
                    layer: 'case3bohol',
                    opacity: 0
                },
                {
                    layer: 'case4',
                    opacity: 0.7
                },
                {
                    layer: 'case5',
                    opacity: 0.7
                },
                {
                    layer: 'case49',
                    opacity: 0.7
                },
                {
                    layer: 'case39',
                    opacity: 0.7
                },
                {
                    layer: 'case40',
                    opacity: 0
                },
                {
                    layer: 'case1k',
                    opacity: 0
                },
                {
                    layer: 'now',
                    opacity: 0
                }
            ],
            onChapterExit: [

            ]
        },
        {
            id: '1000mark',
            title: 'March 28, 2020: 1000th Mark',
            // image: './images/ld.jpg',
            description: 'Two hundred seventy-two new cases on March 28 was confirmed, the number leaped both the 900 and 1000th mark, bringing the COVID-19 cases in the Philippines to 1,075. Fourteen new deaths and four new recoveries were also confirmed, bringing the death toll to 68 and recovered patients to 35.',
            location: {
                center: [118.61228, 12.26601],
                zoom: 5.16,
                pitch: 0.00,
                bearing: -2.27
            },
            onChapterEnter: [
                {
                    layer: 'case1',
                    opacity: 0
                },
                {
                    layer: 'case3cebu',
                    opacity: 0
                },
                {
                    layer: 'case3bohol',
                    opacity: 0
                },
                {
                    layer: 'case4',
                    opacity: 0
                },
                {
                    layer: 'case5',
                    opacity: 0
                },
                {
                    layer: 'case49',
                    opacity: 0
                },
                {
                    layer: 'case39',
                    opacity: 0
                },
                {
                    layer: 'case40',
                    opacity: 0
                },
                {
                    layer: 'case1k',
                    opacity: 1
                },
                {
                    layer: 'case1k-polygon',
                    opacity: 1
                },
                {
                    layer: 'now',
                    opacity: 0
                }
            ],
            onChapterExit: [

            ]
        },
        {
            id: 'April6',
            title: 'Today: Luzon',
            // image: './images/ld.jpg',
            description: 'Four hundred fourteen new cases were confirmed on April 6, bringing the COVID-19 cases in the country to 3,660. Eleven new deaths and nine new patient have recovered, bringing the death toll to 163 and recovered patients to 73.',
            location: {
                center: [121.13050, 14.81235],
                zoom: 8.15,
                pitch: 60.00,
                bearing: -7.96
            },
            onChapterEnter: [   
                {
                    layer: 'case1',
                    opacity: 0
                },
                {
                    layer: 'case3cebu',
                    opacity: 0
                },
                {
                    layer: 'case3bohol',
                    opacity: 0
                },
                {
                    layer: 'case4',
                    opacity: 0
                },
                {
                    layer: 'case5',
                    opacity: 0
                },
                {
                    layer: 'case49',
                    opacity: 0
                },
                {
                    layer: 'case39',
                    opacity: 0
                },
                {
                    layer: 'case40',
                    opacity: 0
                },
                {
                    layer: 'case1k',
                    opacity: 0
                },
                {
                    layer: 'now',
                    opacity: 0.7
                }
            ],
            onChapterExit: [

            ]
        },
        {
            id: 'April6_2',
            title: 'Today: Visayas',
            // image: './images/ld.jpg',
            description: 'Four hundred fourteen new cases were confirmed on April 6, bringing the COVID-19 cases in the country to 3,660. Eleven new deaths and nine new patient have recovered, bringing the death toll to 163 and recovered patients to 73.',
            location: {
                center: [124.57022, 10.66375],
                zoom: 8.34,
                pitch: 60.00,
                bearing: -61.56
            },
            onChapterEnter: [
                {
                    layer: 'case1',
                    opacity: 0
                },
                {
                    layer: 'case3cebu',
                    opacity: 0
                },
                {
                    layer: 'case3bohol',
                    opacity: 0
                },
                {
                    layer: 'case4',
                    opacity: 0
                },
                {
                    layer: 'case5',
                    opacity: 0
                },
                {
                    layer: 'case49',
                    opacity: 0
                },
                {
                    layer: 'case39',
                    opacity: 0
                },
                {
                    layer: 'case40',
                    opacity: 0
                },
                {
                    layer: 'case1k',
                    opacity: 0
                },
                {
                    layer: 'now',
                    opacity: 0.7
                }
            ],
            onChapterExit: [

            ]
        },
        {
            id: 'April6_3',
            title: 'Today: Mindanao',
            // image: './images/ld.jpg',
            description: 'Four hundred fourteen new cases were confirmed on April 6, bringing the COVID-19 cases in the country to 3,660. Eleven new deaths and nine new patient have recovered, bringing the death toll to 163 and recovered patients to 73.',
            location: {
                center: [124.73336, 6.40615],
                zoom: 8.15,
                pitch: 60.00,
                bearing: -16.76
            },
            onChapterEnter: [
                {
                    layer: 'case1',
                    opacity: 0
                },
                {
                    layer: 'case3cebu',
                    opacity: 0
                },
                {
                    layer: 'case3bohol',
                    opacity: 0
                },
                {
                    layer: 'case4',
                    opacity: 0
                },
                {
                    layer: 'case5',
                    opacity: 0
                },
                {
                    layer: 'case49',
                    opacity: 0
                },
                {
                    layer: 'case39',
                    opacity: 0
                },
                {
                    layer: 'case40',
                    opacity: 0
                },
                {
                    layer: 'case1k',
                    opacity: 0
                },
                {
                    layer: 'now',
                    opacity: 0.7
                }
            ],
            onChapterExit: [

            ]
        }
    ]
};
