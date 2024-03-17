# Behavioral Design Patterns

The behavioral design patterns concern algorithms and the assignment of responsibilities among objects. They not only describe object or class patterns but also patterns of communication between them. These patterns characterize control flows that are difficult to follow at runtime. They shift the focus away from control flow to enable you to concentrate solely on how objects are interconnected.

## Patterns and Intentions

The original GoF behavioral design patterns are:

- **[Chain of Responsibility](/src/behavioral/chain-of-responsibility/):** Avoids coupling the sender of a request to its receiver by giving more than one object the chance to handle the request. It chains the receiving objects and passes the request along the chain until one object handles it.

- **[Command](/src/behavioral/command/):** Encapsulates a request as an object, thereby allowing you to parameterize clients with different requests, queue or log requests, and support operations that can be undone.

- **[Iterator](/src/behavioral/iterator/):** Provides a way to access the elements of an aggregate object sequentially without exposing its underlying representation.

- **[Mediator](/src/behavioral/mediator/):** Defines an object that encapsulates how a set of objects interact. The mediator promotes loose coupling by preventing objects from referring to each other explicitly, allowing you to vary their interactions independently.

- **[Memento](/src/behavioral/memento/):** Without violating encapsulation, captures and externalizes an object's internal state so that it can be restored to this state later.

- **[Observer](/src/behavioral/observer/):** Defines a one-to-many dependency between objects so that when one object changes state, all its dependents are automatically notified and updated.

- **[State](/src/behavioral/state/):** Allows an object to alter its behavior when its internal state changes. The object will appear to change its class.

- **[Strategy](/src/behavioral/strategy/):** Defines a family of algorithms, encapsulates each one, and makes them interchangeable. The strategy allows the algorithm to vary independently of the clients that use it.

- **[Template Method](/src/behavioral/template-method/):** Defines the skeleton of an algorithm in an operation, deferring the definition of some steps to subclasses. The template method allows subclasses to redefine certain steps of an algorithm without changing its structure.

- **[Visitor](/src/behavioral/visitor/):** Represents an operation to be performed on the elements of an object structure. The visitor allows you to define a new operation without changing the classes of the elements on which it operates.
