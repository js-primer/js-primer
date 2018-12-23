const assert = require("assert");
import { EventEmitter } from "../src/EventEmitter.js";

describe("EventEmitter", function() {
    describe("#addEventLister", function() {
        it("should set event listener to the key", function(done) {
            const emitter = new EventEmitter();
            const key = "event-key";
            emitter.addEventLister(key, function() {
                done();
            });
            emitter.emit(key);
        });
    });
    describe("#emit", function() {
        it("should pass data to the listeners", function() {
            const emitter = new EventEmitter();
            const key = "event-key";
            let isListenerCalled = false;
            emitter.addEventLister(key, function() {
                isListenerCalled = true;
            });
            emitter.emit(key);
            assert.ok(isListenerCalled, "listener should be called");
        });
    });
    describe("#removeEventLister", function() {
        it("should unset event listener ", function(done) {
            const emitter = new EventEmitter();
            const key = "event-key";
            const listener = function() {
                done(new Error("should not called"));
            };
            emitter.addEventLister(key, listener);
            emitter.removeEventLister(key, listener);
            emitter.emit(key);
            emitter.addEventLister(key, done);
            emitter.emit(key);
        });
    });
});
