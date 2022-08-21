import http from "./httpService";
import config from "../config.json";

export function getChallenge(challengeId) {
  const apiEndPoint = config.apiEndPoint + "/challenge/" + challengeId;
  return http.get(apiEndPoint);
}

export function getAllChallenges() {
  const apiEndPoint = config.apiEndPoint + "/challenge";
  return http.get(apiEndPoint);
}

export function voteParticipant(challengeId, participnatName) {
  const body = { participant: participnatName };
  const apiEndPoint = config.apiEndPoint + "/challenge/vote/" + challengeId;
  return http.post(apiEndPoint, body);
}

export function unVoteParticipant(challengeId, participnatName) {
  const body = { participant: participnatName };
  const apiEndPoint =
    config.apiEndPoint + "/challenge/removeVote/" + challengeId;
  return http.post(apiEndPoint, body);
}

export default {
  getChallenge,
  voteParticipant,
  unVoteParticipant,
};
