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
  onTop: string;
  soundPlayed: boolean;
  settings: {
    open: boolean;
    animations: boolean;
    color: string;
    notch: boolean;
    airdrop: boolean;
    wallpaper: {
      open: boolean;
      src: string;
      preview: string;
      name: string;
      surname: string;
    };
  };
}

export default storeType;
