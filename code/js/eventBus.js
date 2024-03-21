class EventBus {
  constructor() {
    this.events = [];
  }

  subscribe(eventName, event) {
    if (this.events[eventName]) {
      this.events[eventName].push(event);
    } else {
      this.events[eventName] = event;
    }
  }

  publish(eventName, data) {
    if (this.events[eventName]) {
      this.events[eventName].forEach((event) => event(data));
    }
  }

  unSubscribe(eventName, cb) {
    if (cb) {
      this.events[eventName] = this.events[eventName].filter((event) => cb !== event);
    } else {
      this.events[eventName] = null;
    }
  }
}
