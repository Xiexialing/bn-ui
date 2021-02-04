export const CLUSTER_STATUS_ENUM = {   // 枚举所有的状态 对应的值是为了映射状态的颜色
  NORMAL: 'blue',
  ABNORMAL: 'error',
  CREATING: 'create',
  DELETING: 'grey',
  CREATE_FAIL: 'error',
  DELETE_FAIL: 'error',
  UPGRADING: 'create',
  UPGRADE_FAIL: 'error'
}

export const CLUSTER_STATUS = [   // 索引 代表集群的状态值  '' 代表暂时没有该状态
  '',
  CLUSTER_STATUS_ENUM.NORMAL,    // 1 健康
  CLUSTER_STATUS_ENUM.ABNORMAL,  // 2 异常
  '',
  CLUSTER_STATUS_ENUM.CREATING,  // 4 集群创建中
  '',
  CLUSTER_STATUS_ENUM.CREATE_FAIL,      // 6 集群创建失败
  '',
  '',
  '',
  '',
  '',
  '',
  CLUSTER_STATUS_ENUM.DELETE_FAIL,    // 13 集群删除失败
  CLUSTER_STATUS_ENUM.DELETING,       // 14 集群删除中
  CLUSTER_STATUS_ENUM.UPGRADING,      // 15 集群升级中
  CLUSTER_STATUS_ENUM.UPGRADE_FAIL    // 16 集群升级失败
]
