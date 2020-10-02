import {MemberAvatar} from './member-avatar';

describe('MemberAvatar', () => {
    let avatarClass: MemberAvatar;

    const dummyAvatar = {
        w200: 'w200',
        w400: 'w400',
        w1080: 'w1080',
        w1920: 'w1920',
        w2560: 'w2560'
    };

    beforeEach(() => {
        avatarClass = new MemberAvatar(dummyAvatar);
    });

    describe('#getAvatar', () => {
        it('should return avatar picture depending on window.innerWidth', () => {
            const spyWindowWidth = spyOnProperty(window, 'innerWidth');
            spyWindowWidth.and.returnValue(200);
            expect(avatarClass.getAvatar()).toEqual('w200');

            spyWindowWidth.and.returnValue(400);
            expect(avatarClass.getAvatar()).toEqual('w400');

            spyWindowWidth.and.returnValue(1080);
            expect(avatarClass.getAvatar()).toEqual('w1080');

            spyWindowWidth.and.returnValue(1920);
            expect(avatarClass.getAvatar()).toEqual('w1920');

            spyWindowWidth.and.returnValue(1921);
            expect(avatarClass.getAvatar()).toEqual('w2560');
        });
    });
});
