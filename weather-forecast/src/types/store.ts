interface storeType {
    weather: {
      current: any;
      forecast: any;
    }
    query: string;
    loading: boolean;
    section: string;
    dockItem: number | undefined;
}

export default storeType;