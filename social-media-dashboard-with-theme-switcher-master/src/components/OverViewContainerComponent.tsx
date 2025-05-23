import data from '../../data/data.json';
import type { OverviewTodayType } from '../types/OverviewTodayType';
import type { OverviewType } from '../types/OverviewType';
import { OverViewCard, OverViewTodayCard } from './OverViewCard';

const convertNumberToK = (num: number): string => {
    if (num >= 10000) {
        num = num / 1000
        return `${num}k`
    }
    return num.toString();
}

export const OverViewContainer = () => {

    const dataObj = data.overview.map((item) => (
        {
            id: item.id,
            user: item.user,
            audience: item.audience,
            audienceType: item.audienceType,
            network: item.network,
            today: item.today,
            isUp: item.isUp
        } as OverviewType
    ));

    return (
        <section className='absolute top-[192px] left-0 right-0 max-w-[1440px] mx-auto flex flex-wrap place-content-center'>
            {dataObj.map((item) =>
                <OverViewCard
                    key={item.id}
                    user={item.user}
                    audience={convertNumberToK(item.audience)}
                    audienceType={item.audienceType}
                    network={item.network}
                    today={item.today}
                    isUp={item.isUp}
                />
            )}
        </section>
    )
}

export const OverViewTodayContainer = () => {
    const dataObj = data.overviewToday.map((item) => (
        {
            id: item.id,
            network: item.network,
            statsType: item.statsType,
            stats: item.stats,
            porcentage: item.porcentage,
            isUp: item.isUp
        } as OverviewTodayType
    ));

    return (
        <section >
            <h2 className='text-2xl  font-bold mb-[27px] text-Dark-Grayish-Blue ml-8  '>Overview today</h2>
            <div className='place-content-center max-w-[1440px] flex flex-wrap'>
                {
                    dataObj.map((item) =>
                        <OverViewTodayCard
                            key={item.id}
                            isUp={item.isUp}
                            network={item.network}
                            porcentage={item.porcentage}
                            stats={convertNumberToK(item.stats)}
                            statsType={item.statsType}
                        />
                    )
                }
            </div>
        </section>
    )
}