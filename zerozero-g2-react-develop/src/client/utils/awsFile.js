import {S3ROOT} from '../commons/constants/systemConf';

export const awsUrl = (fileName) =>
  `${S3ROOT}/${fileName}`
