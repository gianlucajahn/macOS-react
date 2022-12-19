import sortedIntervalType from "./sortedInterval";

interface storeType {
  weather: {
    current: any;
    forecast: any;
  };
  query: string;
  loading: boolean;
  section: string;
  dockItem: number | undefined;
  date: any;
  selected: undefined | sortedIntervalType[];
  failed: boolean;
  booting: boolean;
  soundPlayed: boolean;
  settings: {
    open: boolean;
    animations: boolean;
    color: string;
    notch: boolean;
    airdrop: boolean;
  }
}

export default storeType;
