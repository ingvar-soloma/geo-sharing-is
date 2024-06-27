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
    updateLastUpdateTime() {
      this.lastUpdateTime = new Date().toLocaleString();
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