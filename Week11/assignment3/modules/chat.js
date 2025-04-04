"use strict";

// A simple chat module that exposes greeting and farewell properties.

// Greeting message
exports.hi = "Hello from the chat module!";

// Function that returns a farewell message
exports.bye = function() {
  return "Goodbye from the chat module!";
};

// Conversation object with methods for greeting and generating messages
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
