import {IOurTeamData, OurTeamData} from '../../app/our-team/models/our-team-data';

export const dummyData = {
    data: [
        {
            attributes: {
                title: 'dummyTitle',
                memberCards: {
                    first: {
                        imageUrl: {
                            w200: 'w200',
                            w400: 'w400',
                            w1080: 'w1080',
                            w1920: 'w1920',
                            w2560: 'w2560'
                        },
                        block: {
                            title: 'Serenity Wood',
                            description: 'Digital Strategist',
                            link: 'serenity@company.com',
                            text: '+1 456 789 123'
                        }
                    },
                    second: {
                        imageUrl: {
                            w200: 'w200',
                            w400: 'w400',
                            w1080: 'w1080',
                            w1920: 'w1920',
                            w2560: 'w2560'
                        },
                        block: {
                            title: 'Roy Moreno',
                            description: 'Consultant',
                            link: 'roy@company.com',
                            text: '+1 234 567 891'
                        }
                    }
                }
            }
        }
    ]
};

export const dummyFormattedData: IOurTeamData = new OurTeamData(dummyData.data[0].attributes);
