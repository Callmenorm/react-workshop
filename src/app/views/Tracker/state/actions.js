export const TRACKER_SUBMITTED = 'TRACKER_SUBMITTED'

export function submitTracker (tracker) {
  return {
    type: TRACKER_SUBMITTED,
    payload: {
      newTracker: tracker
    }
  };
}
