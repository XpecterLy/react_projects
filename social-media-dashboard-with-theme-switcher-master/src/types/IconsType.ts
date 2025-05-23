import facebookLogo from '../assets/images/icon-facebook.svg';
import instagramLogo from '../assets/images/icon-instagram.svg';
import twitterLogo from '../assets/images/icon-twitter.svg';
import youtubeLogo from '../assets/images/icon-youtube.svg';

export type NetworkLogoType = 'Facebook' | 'Instagram' | 'YouTube' | 'Twitter';

export const NetworkLogo: Record<NetworkLogoType, string> = {
    Facebook: facebookLogo,
    Instagram: instagramLogo,
    YouTube: youtubeLogo,
    Twitter: twitterLogo
}