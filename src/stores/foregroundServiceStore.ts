import {defineStore} from 'pinia';

export type Status = 'running' | 'stopped' | 'error';

export const stopped = 'stopped';
export const running = 'running';
export const denied = 'denied';
export const granted = 'granted';

export const useForegroundServiceStore = defineStore({
  id: 'foregroundService',
  state: () => ({
    status: stopped,
    permission: denied,
    lastUpdateTime: '',
  }),
  actions: {
    setStatus(status: Status) {
      this.status = status;
    },
    setPermissionStatus(permission: PermissionState) {
      this.permission = permission;
    },
    updateLastUpdateTime(timestamp: number) {
      const lastUpdateTime = new Date().toLocaleString();
      console.log('Last update time:', lastUpdateTime)
      console.log('Timestamp:', new Date(timestamp).toLocaleString(), timestamp)
      this.lastUpdateTime = lastUpdateTime;
    }
  },
  getters: {
    isRunning(): boolean {
      return this.status === running;
    },
    isStopped(): boolean {
      return this.status === stopped;
    },
    isPermissionGranted(): boolean {
      return this.permission === granted;
    },
  }
});