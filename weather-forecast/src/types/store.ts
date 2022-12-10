interface storeType {
    weather: {
      current: any;
      forecast: any;
    }
    query: string;
    loading: boolean;
    section: string;
}

export default storeType;