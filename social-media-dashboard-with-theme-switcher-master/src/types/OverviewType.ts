import type { NetworkLogoType } from "./IconsType";

export interface OverviewType {
    id:           string;
    network:      NetworkLogoType;
    user:         string;
    audienceType: string;
    audience:     number;
    today:        number;
    isUp:         boolean;
}
