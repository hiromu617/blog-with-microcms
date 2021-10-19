/**
 * microCMSのレスポンスの共通部部分
 */
export type ResponseHeader = {
  totalCount: number;
  offset: number;
  limit: number;
};
