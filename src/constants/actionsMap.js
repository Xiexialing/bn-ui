export const ACTIONS_KEY_MAP = {
  EDIT: 'edit', DEL: 'del', DESTROY_CLUSTER: 'destroyCluster',
  CANCEL_MANAGEMENTIN_CLUSTER: 'cancelManagementInCluster', UPGRADE_IN_CLUSTER: 'upgradeInCluster',
  TERMINAL_IN_CLUSTER: 'terminalInCluster',
  CANCEL_DEPLOY: 'cancelDeploy', REDEPLOY: 'redeploy'
}

export const ACTIONS_MAP = {
  [ACTIONS_KEY_MAP.EDIT]: {
    icon: 'el-icon-edit',
    title: '编辑'
  },
  [ACTIONS_KEY_MAP.DEL]: {
    title: '删除',
    icon: 'el-icon-delete',
  },
  [ACTIONS_KEY_MAP.DESTROY_CLUSTER]: {
    title: '销毁集群',
    icon: 'el-icon-delete',
  },
  [ACTIONS_KEY_MAP.CANCEL_MANAGEMENTIN_CLUSTER]: {
    title: '取消纳管',
    icon: 'el-icon-delete-solid',
  },
  [ACTIONS_KEY_MAP.UPGRADE_IN_CLUSTER]: {
    title: '版本升级',
    icon: 'el-icon-download',
  },
  [ACTIONS_KEY_MAP.TERMINAL_IN_CLUSTER]: {
    title: '终端',
    icon: 'el-icon-s-platform',
  },
  [ACTIONS_KEY_MAP.CANCEL_DEPLOY]: {
    title: '取消部署',
    icon: 'el-icon-s-finance',
  },
  [ACTIONS_KEY_MAP.REDEPLOY]: {
    title: '重新安装',
    icon: 'el-icon-s-claim',
  }
}



