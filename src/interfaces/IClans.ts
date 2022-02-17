export interface IClans {
    tag: string
    name: string
    type: string
    location: ILocation,
    badgeUrls: IBadgeUrls
    clanLevel: number
    clanPoints: number
    clanVersusPoints: number
    requiredTrophies: number
    warFrequency: string
    warWinStreak: number
    warWins: number
    warTies: number
    warLosses: number
    isWarLogPublic: boolean
    warLeague: IWarLeague
    members: string
    labels: ILabels[]
    chatLanguage: IChatLanguage
    requiredVersusTrophies: number
    requiredTownhallLevel: number
}

interface ILocation {
    id: number
    name: string
    isCountry: boolean
    countryCode: string
}

interface IBadgeUrls {
    small?: string
    large: string
    medium: string
}

interface IWarLeague {
    id: number
    name: string
}

interface ILabels {
    id: number
    name: string
    iconUrls: IBadgeUrls
}

interface IChatLanguage {
    id: number
    name: string
    languageCode: string
}

export interface IFilterClan {
    name: string
    warFrequency?: string
    locationId?: number
    minMembers?: number
    maxMembers?: number
    minClanPoints?: number
    minClanLevel?: number
    limit?: number
    after?: string
    before?: string
    labelIds?: string
}