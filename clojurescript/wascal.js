goog.addDependency("../cljs/core.js", ['cljs.core'], ['goog.string', 'goog.string.StringBuffer', 'goog.object', 'goog.array']);
goog.addDependency("../clojure/browser/event.js", ['clojure.browser.event'], ['cljs.core', 'goog.events', 'goog.events.EventTarget', 'goog.events.EventType']);
goog.addDependency("../clojure/browser/net.js", ['clojure.browser.net'], ['cljs.core', 'clojure.browser.event', 'goog.net.XhrIo', 'goog.net.EventType', 'goog.net.xpc.CfgFields', 'goog.net.xpc.CrossPageChannel', 'goog.json']);
goog.addDependency("../clojure/browser/repl.js", ['clojure.browser.repl'], ['cljs.core', 'clojure.browser.net', 'clojure.browser.event']);
goog.addDependency("../clojure/string.js", ['clojure.string'], ['cljs.core', 'goog.string', 'goog.string.StringBuffer']);
goog.addDependency("../wascal.js", ['wascal'], ['cljs.core', 'clojure.string', 'clojure.browser.repl']);