import {CLUSTER_STATUS} from "../constants/clusterStatus";
import {STATUS_RESULT_MAP} from '../constants/statusResultMap'


export const statusUtils = {
  cluster(status) {
    if (!status && status !== 0) return {}
    if (CLUSTER_STATUS[status]) return STATUS_RESULT_MAP.CLUSTER[CLUSTER_STATUS[status]]
    return STATUS_RESULT_MAP.UNKNOWN
  },
  host() {

  }
}
