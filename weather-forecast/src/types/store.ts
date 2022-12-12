interface storeType {
    weather: {
      current: any;
      forecast: any;
    }
    query: string;
    loading: boolean;
    section: string;
    dockItem: number | undefined;
    date: any;
}

export default storeType;