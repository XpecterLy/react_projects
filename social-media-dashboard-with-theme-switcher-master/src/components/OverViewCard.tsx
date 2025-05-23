import { NetworkLogo, type NetworkLogoType } from '../types/IconsType';
import { networksColors } from '../types/ColorsType';
import iconUp from '../assets/images/icon-up.svg';
import iconDown from '../assets/images/icon-down.svg';

interface Props {
    user: string;
    audienceType: string;
    network: NetworkLogoType;
    audience: string;
    isUp: boolean;
    today: number;
}

export const OverViewCard = ({ user, audienceType, audience, network, today, isUp }: Props) => {
    return (
        <article className='bg-Light-Grayish-Blue w-[326px] gap-[30px] mx-3.5 h-[216px] mb-12  rounded-[5px] overflow-hidden text-center dark:bg-Dark-Desaturated-Blue hover:brightness-95 cursor-pointer hover:dark:brightness-125'>
            <div className={`${networksColors[network]} h-[3px] mb-8`} />
            <div className='flex items-center gap-2 justify-center'>
                <img src={NetworkLogo[network]} alt={`logo-${network}`} />
                <p className='text-xs text-Dark-Grayish-Blue font-bold'>{user}</p>
            </div>
            <p className='text-[56px] font-bold text-Very-Dark-Blue dark:text-white'>{audience}</p>
            <p className='uppercase tracking-[5px] text-Dark-Grayish-Blue text-xs'>{audienceType}</p>
            <div className='flex items-center justify-center gap-1'>
                <img src={isUp ? iconUp : iconDown} alt='icon arrow' />
                <p className={`text-xs font-bold ${isUp ? 'text-Lime-Green' : 'text-Bright-Red'}`}>{today} Today</p>
            </div>
        </article>
    )
}

interface PropsToday {
    network: NetworkLogoType;
    statsType: string;
    stats: string;
    porcentage: number;
    isUp: boolean;
}

export const OverViewTodayCard = ({ isUp, network, porcentage, stats, statsType }: PropsToday) => {
    return (
        <article className='bg-Light-Grayish-Blue w-[326px]  gap-[30px] h-[125px] mb-4 max-auto rounded-[5px] p-[27px] cursor-pointer hover:brightness-95 mx-auto hover:dark:brightness-125 dark:bg-Dark-Desaturated-Blue'>
            <div className='flex items-center justify-between'>
                <p className='text-Dark-Grayish-Blue'>{statsType}</p>
                <img src={NetworkLogo[network]} alt={`logo-${network}`} />
            </div>

            <div className='flex justify-between'>
                <p className='text-[42px] font-bold text-Very-Dark-Blue dark:text-white'>{stats}</p>
                <div className='flex items-center justify-center gap-1'>
                    <img src={isUp ? iconUp : iconDown} alt='icon arrow' />
                    <p className={`text-xs font-bold ${isUp ? 'text-Lime-Green' : 'text-Bright-Red'}`}>{porcentage} Today</p>
                </div>
            </div>
        </article>
    )
}