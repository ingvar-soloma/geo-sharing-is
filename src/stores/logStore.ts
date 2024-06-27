import {defineStore} from 'pinia';
import {LogEntry} from "@/types";

type LogLevel = 'all' | 'log' | 'info' | 'warning' | 'error'

export const useLogStore = defineStore({
  id: 'logStore',
  state: () => ({
    logs: [] as LogEntry[],
    filter: 'all' as LogLevel,
    search: '' as string,
    tagFilter: '' as string,
  }),
  actions: {
    addLogEntry(entry: LogEntry) {
      this.logs.push({...entry, timestamp: new Date()});
    },
    log(entry: Omit<LogEntry, 'level' | 'timestamp'>) {
      this.addLogEntry({...entry, level: 'log'});
    },
    info(entry: Omit<LogEntry, 'level' | 'timestamp'>) {
      this.addLogEntry({...entry, level: 'info'});
    },
    warning(entry: Omit<LogEntry, 'level' | 'timestamp'>) {
      this.addLogEntry({...entry, level: 'warning'});
    },
    error(entry: Omit<LogEntry, 'level' | 'timestamp'>) {
      this.addLogEntry({...entry, level: 'error'});
    },
    setFilter(filter: LogLevel) {
      this.filter = filter;
    },
    setSearch(search: string) {
      this.search = search;
    },
    setTagFilter(tag: string) {
      this.tagFilter = tag;
    },
  },
});