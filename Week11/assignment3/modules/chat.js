"use strict";

// A simple chat module that exposes some greeting and farewell properties.

exports.hi = "Hello from the chat module!";
exports.bye = function() {
  return "Goodbye from the chat module!";
};

exports.conversation = {
  greet: function(name) {
    return `Hi, ${name}! Welcome to our chat.`;
  },
  give: function(count) {
    let messages = [];
    for (let i = 1; i <= count; i++) {
      messages.push(`This is message ${i}.`);
    }
    return messages.join(" ");
  }
};
