import intervalType from "../../types/intervalType";
import sortedIntervalType from "../../types/sortedInterval";
import apiKey from "../keys/key";

function getPosition() {
  return new Promise((res, rej) => {
    navigator.geolocation.getCurrentPosition(res, rej);
  });
}

export default getPosition;
