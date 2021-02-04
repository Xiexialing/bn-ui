import {CLUSTER_STATUS_ENUM} from './clusterStatus'

export const STATUS_RESULT_MAP = {
  CLUSTER: {
    [CLUSTER_STATUS_ENUM.NORMAL]: {
      icon: 'bn bncorrect',
      label: '健康',
      background: '#e3f4fb',
      color: '#049bd3'
    },
    [CLUSTER_STATUS_ENUM.ABNORMAL]: {
      icon: 'bn bncaution',
      label: '异常',
      background: '#e3f4fb',
      color: '#049bd3'
    },
    [CLUSTER_STATUS_ENUM.CREATING]: {
      icon: 'bn bnchuangjianxinbanben',
      label: '集群创建中',
      background: '#d7dfe6',
      color: '#999999'
    },
    [CLUSTER_STATUS_ENUM.DELETING]: {
      icon: 'bn bnxiaxian',
      label: '集群删除中',
      background: '#eee',
      color: 'grey'
    },
    [CLUSTER_STATUS_ENUM.CREATE_FAIL]: {
      icon: 'bn bncorrect',
      label: '集群创建失败',
      background: '#cdcdcd',
      color: 'grey'
    },
    [CLUSTER_STATUS_ENUM.DELETE_FAIL]: {
      icon: 'bn bnerrors1',
      label: '集群删除失败',
      background: '#cdcdcd',
      color: 'grey'
    },
    [CLUSTER_STATUS_ENUM.UPGRADING]: {
      icon: 'bn bnadd1',
      label: '集群升级中',
      background: '#d7dfe6',
      color: '#999999'
    },
    [CLUSTER_STATUS_ENUM.UPGRADE_FAIL]: {
      icon: 'bn bncorrect',
      label: '集群升级失败',
      background: '#cdcdcd',
      color: 'grey'
    }
  },
  UNKNOWN: {   // 未知
    icon: 'bn bnjxxx-128',
    label: '未知',
    background: 'gray',
    color: '#a6a6a6'
  }
}
