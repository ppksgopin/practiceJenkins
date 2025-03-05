import zeroMoment from './zeroMoment';

export function toDate(timestamp) {
  if(!timestamp) {
    return null;
  } else {
      return zeroMoment(timestamp).format('YYYY/MM/DD');
  }
}
